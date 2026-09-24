/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the enquirer
  - `email` (text, not null) — email address of the enquirer
  - `phone` (text, not null) — phone number of the enquirer
  - `service` (text, not null) — the service the enquirer is interested in
  - `message` (text, not null) — the enquiry message
  - `status` (text, default 'new') — internal status for tracking (new, read, responded)
  - `created_at` (timestamptz, default now()) — when the enquiry was submitted

2. Security
- Enable RLS on `contact_submissions`.
- Allow anonymous (public website visitors) to INSERT their own enquiries so the
  contact form works without a sign-in screen.
- SELECT / UPDATE / DELETE are restricted to authenticated roles only (firm staff
  who sign in to the Supabase dashboard) — public visitors cannot read or modify
  other people's enquiries.
- This is a no-auth public website, so the anon key client only ever inserts.

3. Important Notes
- No user_id column is needed because there is no sign-in flow; the form is public.
- The INSERT policy uses `TO anon, authenticated` so both public visitors and any
  future authenticated dashboard users can submit enquiries.
- SELECT/UPDATE/DELETE policies are `TO authenticated` only, protecting enquirer
  privacy from anonymous visitors.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_select_contact_submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "authenticated_update_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_update_contact_submissions"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "authenticated_delete_contact_submissions"
ON contact_submissions FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
ON contact_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status
ON contact_submissions (status);
