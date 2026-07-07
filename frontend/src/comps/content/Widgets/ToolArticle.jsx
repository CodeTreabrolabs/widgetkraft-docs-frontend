import { CheckCircle2, Sparkles } from 'lucide-react';

export const hairline = 'border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]';
export const hairlineSoft = 'border-[color:var(--docs-hairline-soft,rgba(255,255,255,0.06))]';
export const card = `rounded-xl border ${hairline} bg-transparent`;

export function ToolPage({ children }) {
  return (
    <div className="mx-auto w-full max-w-[var(--docs-prose-max)] px-4 text-[13px] leading-relaxed text-[var(--docs-steel)]">
      {children}
    </div>
  );
}

export function ToolHeader({ icon: Icon, title, description, pricing }) {
  return (
    <header className="mb-10 flex flex-col items-center text-center">
      <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${hairline}`}>
        <Icon size={18} className="text-[var(--docs-ink)]" />
      </div>
      <h1 className="text-[22px] font-semibold text-[var(--docs-ink)]">{title}</h1>
      <p className="mx-auto mt-2 max-w-md text-[13px] text-[var(--docs-steel)]">{description}</p>
      {pricing && (
        <span
          className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] text-[var(--docs-steel)] ${hairline}`}
        >
          Pricing <span className="font-medium text-[var(--docs-ink)]">{pricing}</span>
        </span>
      )}
    </header>
  );
}

export function SectionHeading({ eyebrow, title, description, step }) {
  return (
    <div className={`mb-4 flex gap-3 border-b pb-3 ${hairlineSoft}`}>
      {step && (
        <span
          className={`mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border text-[11px] font-medium text-[var(--docs-steel)] ${hairline}`}
        >
          {step}
        </span>
      )}
      <div>
        {eyebrow && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--docs-stone)]">
            {eyebrow}
          </span>
        )}
        <h2 className="text-[17px] font-semibold leading-snug text-[var(--docs-ink)]">{title}</h2>
        {description && <p className="mt-0.5 text-[13px] text-[var(--docs-steel)]">{description}</p>}
      </div>
    </div>
  );
}

export function FeatureCard({ title = 'You can fully customize', items, note }) {
  return (
    <section className="mb-10">
      <div className={`${card} p-5`}>
        <h3 className="mb-3 text-[14px] font-semibold text-[var(--docs-ink)]">{title}</h3>
        <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {items.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
              <span className="text-[13px] text-[var(--docs-steel)]">{feature}</span>
            </div>
          ))}
        </div>
        {note && <p className="mt-4 text-[12px] italic text-[var(--docs-stone)]">{note}</p>}
      </div>
    </section>
  );
}

export function Screenshot({ src, alt, caption }) {
  return (
    <figure className="docs-screenshot my-5">
      <img src={src} alt={alt} className="shadow-lg" />
      {caption && <figcaption className="mt-3 text-center text-sm text-[var(--docs-stone)]">{caption}</figcaption>}
    </figure>
  );
}

export function Callout({ icon: Icon = Sparkles, title, children }) {
  return (
    <div className={`${card} flex gap-3 p-4`}>
      <Icon size={16} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
      <div className="text-[13px] leading-relaxed text-[var(--docs-steel)]">
        {title && <p className="mb-1 font-semibold text-[var(--docs-ink)]">{title}</p>}
        {children}
      </div>
    </div>
  );
}

export function InfoCard({ title, children, icon: Icon, className = '' }) {
  return (
    <div className={`${card} p-4 ${className}`}>
      {Icon && (
        <div className={`mb-2 inline-flex h-7 w-7 items-center justify-center rounded-md border ${hairline}`}>
          <Icon size={14} className="text-[var(--docs-steel)]" />
        </div>
      )}
      {title && <h4 className="mb-1 text-[13px] font-semibold text-[var(--docs-ink)]">{title}</h4>}
      <div className="text-[13px] leading-relaxed text-[var(--docs-steel)]">{children}</div>
    </div>
  );
}

export function StepList({ steps }) {
  return (
    <ol className="mb-5 space-y-2.5">
      {steps.map((step, idx) => (
        <li key={step} className="flex items-start gap-3">
          <span
            className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] ${hairline}`}
          >
            {idx + 1}
          </span>
          <span className="text-[13px] text-[var(--docs-steel)]">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function SummaryCard({ title = 'Summary', intro, points }) {
  return (
    <section className="mb-6">
      <div className={`${card} p-5`}>
        <h2 className="mb-3 text-[15px] font-semibold text-[var(--docs-ink)]">{title}</h2>
        {intro && <p className="mb-3 text-[13px] text-[var(--docs-steel)]">{intro}</p>}
        <div className="grid gap-2 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
              <span className="text-[13px] text-[var(--docs-steel)]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
