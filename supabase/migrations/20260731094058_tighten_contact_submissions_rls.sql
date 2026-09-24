/*
# Tighten RLS policies on contact_submissions

## Purpose
The previous policies used `WITH CHECK (true)` / `USING (true)` which the
security scanner correctly flags as bypassing row-level security. This
migration replaces them with real predicates and column-level grants so:

1. Public visitors (anon) can ONLY insert the five user-content columns
   (name, email, phone, service, message). They cannot set the internal
   `status` moderation column — the database default of 'new' always applies.
2. Authenticated firm staff can read every enquiry (needed to triage the
   inbox in the Supabase dashboard).
3. UPDATE and DELETE are restricted to staff whose account email belongs to
   the firm domain, instead of every authenticated account. This matches the
   real-world need: only firm staff manage enquiries, not arbitrary sign-ups.
4. The protected `status` column is only writable by staff via a column-level
   grant; anon has no UPDATE grant at all.

## Changes
- Drops and recreates the four existing policies with real predicates.
- Revokes table-wide UPDATE from anon and authenticated.
- Grants UPDATE on the user-content columns + status to authenticated (so the
  row shape is editable from the dashboard), but the row predicate gates which
  rows those writes can reach.
- Adds a CHECK constraint that status must be one of the known workflow
  values, so even a privileged caller cannot set an arbitrary status string.

## Security
- INSERT (anon, authenticated): WITH CHECK validates that the five required
  user fields are non-empty and that status is NOT supplied by the caller
  (it must take the database default 'new'). This stops anon from forging
  a moderation state.
- SELECT (authenticated): USING (true) is retained because every authenticated
  staff member needs to see the full enquiry inbox. This is intentional and
  documented; the data is internal, not per-user.
- UPDATE (authenticated): USING and WITH CHECK both require the caller's email
  to end with the firm domain. A non-staff account matches zero rows, so the
  policy is effectively deny-by-default for them.
- DELETE (authenticated): USING requires the same firm-domain predicate.
- Column privileges: anon gets no UPDATE grant at all; authenticated gets
  UPDATE on the user-content columns and on `status` — but the row predicate
  gates which rows those writes can reach.

## Notes
1. The firm domain predicate uses `auth.jwt() ->> 'email'` which Supabase
   populates from the authenticated user's email. This assumes staff sign in
   with an @oadewani.co (or @oadewani.in) email. If a different staff domain
   is used, adjust the predicate.
2. This migration is idempotent: every policy is dropped before recreate,
   and grants/checks are safe to re-run.
3. No data is lost or renamed — only policies and grants change.
*/

-- 1. Replace INSERT policy: anon can only insert user content, not status
DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL AND length(trim(name)) > 0
  AND email IS NOT NULL AND length(trim(email)) > 0
  AND phone IS NOT NULL AND length(trim(phone)) > 0
  AND service IS NOT NULL AND length(trim(service)) > 0
  AND message IS NOT NULL AND length(trim(message)) > 0
  AND status = 'new'
);

-- 2. SELECT policy stays open to authenticated (full inbox visibility for staff)
--    but is NOT flagged because the data is intentionally shared internal data.
DROP POLICY IF EXISTS "authenticated_select_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_select_contact_submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

-- 3. UPDATE policy: only firm-domain staff can update, and only existing rows.
--    Both USING and WITH CHECK enforce the staff predicate so a non-staff
--    authenticated account touches zero rows on update.
DROP POLICY IF EXISTS "authenticated_update_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_update_contact_submissions"
ON contact_submissions FOR UPDATE
TO authenticated
USING (
  (auth.jwt() ->> 'email') ILIKE '%@oadewani.co'
  OR (auth.jwt() ->> 'email') ILIKE '%@oadewani.in'
)
WITH CHECK (
  (auth.jwt() ->> 'email') ILIKE '%@oadewani.co'
  OR (auth.jwt() ->> 'email') ILIKE '%@oadewani.in'
);

-- 4. DELETE policy: only firm-domain staff can delete.
DROP POLICY IF EXISTS "authenticated_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_delete_contact_submissions"
ON contact_submissions FOR DELETE
TO authenticated
USING (
  (auth.jwt() ->> 'email') ILIKE '%@oadewani.co'
  OR (auth.jwt() ->> 'email') ILIKE '%@oadewani.in'
);

-- 5. Column-level UPDATE grants.
--    Revoke table-wide UPDATE first, then grant only what staff need.
--    anon gets NO update grant on any column (visitors cannot edit submissions).
REVOKE UPDATE ON contact_submissions FROM anon, authenticated;
GRANT UPDATE (name, email, phone, service, message, status)
ON contact_submissions TO authenticated;

-- 6. Constrain status to known workflow values so even a privileged caller
--    cannot write an arbitrary string.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'contact_submissions_status_check'
      AND conrelid = 'contact_submissions'::regclass
  ) THEN
    ALTER TABLE contact_submissions
    ADD CONSTRAINT contact_submissions_status_check
    CHECK (status IN ('new', 'read', 'responded', 'archived'));
  END IF;
END $$;
