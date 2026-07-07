import { CheckCircle2, Sparkles, MessageSquare, AlertCircle, Palette, Code } from 'lucide-react';
import { BsEnvelopePaper } from 'react-icons/bs';
import { CommentCodes } from './Codes/CommentCodes';

const hairline = 'border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]';
const hairlineSoft = 'border-[color:var(--docs-hairline-soft,rgba(255,255,255,0.06))]';
const card = `rounded-xl border ${hairline} bg-transparent`;

const getToolData = () => ({
  title: 'Comment Chaos Tool',
  description:
    'Add a streamlined comment system to your website so visitors can post replies, share feedback, and join the conversation while you moderate everything from one dashboard.',
  customizableFeatures: [
    'Title and subheading text',
    'Sign-in and post button labels',
    'Theme and appearance settings',
    'Comment moderation workflow',
    'Dashboard visibility and approvals',
    'Embed and deployment options',
  ],
  creationSteps: [
    'Go to All Tools → Comment Chaos',
    'Click + Add Tool',
    'Go to My Tools → Comment Box',
    'Click Configure',
  ],
  pricing: '0.25 credit / comment',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/comment-chaos',
});

const configAreas = [
  { icon: Palette, label: 'Design', desc: 'Title, labels, and visual styling' },
  { icon: Code, label: 'Code', desc: 'Embed snippet and copy flow' },
  { icon: MessageSquare, label: 'Dashboard', desc: 'Moderation and approvals' },
];

const summaryPoints = [
  'Let visitors comment on any article or page',
  'Adjust titles, labels, and display settings quickly',
  'Copy one embed snippet and publish without backend work',
  'Moderate, approve, and review comments from a single dashboard',
  'Track active pages and comment status at a glance',
  'Keep discussion healthy with real-time moderation',
];

function SectionHeading({ eyebrow, title, description, step }) {
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

function InfoCard({ title, children, icon: Icon, className = '' }) {
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

function Callout({ icon: Icon = Sparkles, title, children }) {
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

function Screenshot({ src, alt, caption }) {
  return (
    <figure className="docs-screenshot my-5">
      <img src={src} alt={alt} className="shadow-lg" />
      {caption && <figcaption className="mt-3 text-center text-sm text-[var(--docs-stone)]">{caption}</figcaption>}
    </figure>
  );
}

export default function CommentChaosWidgetPage() {
  const toolDetails = getToolData();

  return (
    <div className="mx-auto w-full max-w-[var(--docs-prose-max)] px-4 text-[13px] leading-relaxed text-[var(--docs-steel)]">
      <p style={{ display: 'none' }}>{`Current Page URL: ${toolDetails.currentPageUrl}`}</p>

      <header className="mb-10 flex flex-col items-center text-center">
        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${hairline}`}>
          <BsEnvelopePaper size={18} className="text-[var(--docs-ink)]" />
        </div>
        <h1 className="text-[22px] font-semibold text-[var(--docs-ink)]">{toolDetails.title}</h1>
        <p className="mx-auto mt-2 max-w-md text-[13px] text-[var(--docs-steel)]">{toolDetails.description}</p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] text-[var(--docs-steel)] ${hairline}`}
        >
          Pricing <span className="font-medium text-[var(--docs-ink)]">{toolDetails.pricing}</span>
        </span>
      </header>

      <section className="mb-10">
        <div className={`${card} p-5`}>
          <h3 className="mb-3 text-[14px] font-semibold text-[var(--docs-ink)]">You can fully customize</h3>
          <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {toolDetails.customizableFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
                <span className="text-[13px] text-[var(--docs-steel)]">{feature}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] italic text-[var(--docs-stone)]">
            Keep comments open for discussion while retaining full control over moderation.
          </p>
        </div>
      </section>

      <CommentCodes />

      <section className="mb-10">
        <SectionHeading title="Creating a Comment Chaos tool" description="Four steps from the dashboard." />

        <ol className="mb-5 space-y-2.5">
          {toolDetails.creationSteps.map((step, idx) => (
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

        <Screenshot
          src="/images/commentchaos/comment-chaos-1.png"
          alt="WidgetKraft: creating a Comment Chaos tool — dashboard selection"
          caption="Dashboard — creating a new Comment Chaos tool"
        />

        <Screenshot
          src="/images/commentchaos/comment-chaos-2.png"
          alt="WidgetKraft: My Tools — Comment Box configure and dashboard actions"
          caption="My Tools — configure and dashboard actions"
        />

        <p className="mb-4 text-[13px] text-[var(--docs-steel)]">
          The editor opens with a live preview and a focused set of controls so you can adjust the
          comment experience and deploy it quickly.
        </p>

        <Callout icon={Sparkles} title="Instant moderation">
          Approve, flag, or manage every comment from your dashboard in real time.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading title="Understanding the comment tool editor" description="Three main areas." />

        <div className="flex flex-wrap justify-center gap-2.5">
          {configAreas.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className={`flex w-[132px] flex-col items-center gap-1.5 rounded-lg border p-3 text-center ${hairline}`}
            >
              <Icon size={16} className="text-[var(--docs-steel)]" />
              <p className="text-[12px] font-medium text-[var(--docs-ink)]">{label}</p>
              <p className="text-[11px] text-[var(--docs-stone)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading
          step="1"
          title="Design tab"
          description="Adjust titles, button labels, and the overall presentation."
        />

        <InfoCard title="What you can change" className="mb-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Tool title and subheading</li>
            <li>Sign-in CTA text</li>
            <li>Post comment button label</li>
            <li>Theme and appearance settings</li>
          </ul>
        </InfoCard>

        <Screenshot
          src="/images/commentchaos/comment-chaos-3.png"
          alt="WidgetKraft: Comment Chaos design tab with live preview"
          caption="Design tab with live preview"
        />

        <Callout icon={AlertCircle} title="Design tip">
          Keep titles short and button labels obvious so visitors know immediately how to join the
          conversation.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading
          step="2"
          title="Code tab"
          description="Copy the embed snippet and place it where comments should appear."
        />

        <Screenshot
          src="/images/commentchaos/comment-chaos-4.png"
          alt="WidgetKraft: Comment Chaos code tab with embed code"
          caption="Code tab with embed snippet and copy button"
        />

        <InfoCard title="Using the embed code">
          <ol className="space-y-2.5">
            {[
              'Open the Code tab and copy the generated snippet',
              'Paste it into the article, blog, or page where you want comments to appear',
              'Publish the page and visitors can start posting immediately',
            ].map((step, idx) => (
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
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading
          step="3"
          title="Moderation dashboard"
          description="Review comments, approvals, and page-level activity from one place."
        />

        <Screenshot
          src="/images/commentchaos/comment-chaos-5.png"
          alt="WidgetKraft: Comment Chaos dashboard entry from My Tools"
          caption="My Tools — open the moderation dashboard"
        />

        <Screenshot
          src="/images/commentchaos/comment-chaos-6.png"
          alt="WidgetKraft: Comment Chaos moderation dashboard"
          caption="Moderation dashboard with totals, approvals, and flagged content"
        />

        <InfoCard title="What the dashboard helps you monitor" icon={MessageSquare}>
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Total comments across pages</li>
            <li>Approved and flagged items</li>
            <li>Activity by article or page</li>
            <li>Moderation actions in one workflow</li>
          </ul>
        </InfoCard>
      </section>

      <section className="mb-6">
        <div className={`${card} p-5`}>
          <h2 className="mb-3 text-[15px] font-semibold text-[var(--docs-ink)]">Summary</h2>
          <p className="mb-3 text-[13px] text-[var(--docs-steel)]">The Comment Chaos Tool lets you:</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {summaryPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
                <span className="text-[13px] text-[var(--docs-steel)]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}