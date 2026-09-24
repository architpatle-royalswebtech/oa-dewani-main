import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Motion';
import { processSteps } from '@/utils/process-data';

export function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="A clear path from first call to delivered results"
            description="We follow a proven four-step engagement model so you always know what is happening, what comes next, and when."
          />
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.step}>
                <div className="relative h-full">
                  {/* connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-14 top-7 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-secondary-bright to-transparent lg:block" />
                  )}

                  <div className="relative h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    {/* icon badge */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-bright to-secondary text-white shadow-glow">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    {/* step number watermark */}
                    <span className="absolute right-5 top-3 text-5xl font-bold text-slate-100">
                      {step.step}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold text-primary">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}