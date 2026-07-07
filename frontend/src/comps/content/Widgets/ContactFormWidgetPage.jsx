import { Plus, Code, Palette, AlertCircle } from 'lucide-react';
import { TiContacts } from 'react-icons/ti';
import { ContactCodes } from './Codes/ContactCodes';
import {
  ToolPage,
  ToolHeader,
  FeatureCard,
  SectionHeading,
  Screenshot,
  Callout,
  InfoCard,
  StepList,
  SummaryCard,
} from './ToolArticle';

const getToolData = async () => ({
  title: 'Contact Form Tool',
  description:
    'The Contact Form Tool lets you collect structured leads, inquiries, and messages directly from your website without building backend logic or managing multiple form tools.',
  customizableFeatures: [
    'Fields and validation',
    'Visual design and theme',
    'Button labels and text',
    'Embed behavior',
  ],
  creationSteps: [
    'Go to All Tools -> Contact Form',
    'Click + Add Tool',
    'Go to My Tools -> Contact Form',
    'Click Configure',
  ],
  pricing: '0.4 credit / submission',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/contactform-widget',
});

const summaryPoints = [
  'Build and deploy forms quickly',
  'Customize fields, labels, and styling visually',
  'Copy one script and embed without backend setup',
  'Capture submissions inside your dashboard',
  'Keep forms short and conversion-focused',
  'Update the experience without changing the embed code',
];

export default async function ContactFormWidgetPage() {
  const tool = await getToolData();

  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: ${tool.currentPageUrl}`}</p>
      <ToolHeader icon={TiContacts} title={tool.title} description={tool.description} pricing={tool.pricing} />

      <FeatureCard items={tool.customizableFeatures} note="All submissions are captured inside your WidgetKraft dashboard." />

      <ContactCodes />

      <section className="mb-10">
        <SectionHeading title="Creating a Contact Form tool" description="Four steps from the dashboard." />
        <StepList steps={tool.creationSteps} />
        <Screenshot
          src="/images/contactform/first.png"
          alt="WidgetKraft: creating a Contact Form tool"
          caption="Dashboard - creating a new Contact Form tool"
        />
        <p className="mb-4 text-[13px] text-[var(--docs-steel)]">
          The form editor opens with a live preview on the left and controls on the right. Every
          change updates the preview instantly.
        </p>
      </section>

      <section className="mb-10">
        <SectionHeading title="Understanding the form editor" description="Three core areas." />
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { icon: Plus, label: 'Fields', desc: 'What data you collect' },
            { icon: Palette, label: 'Design', desc: 'How the form looks' },
            { icon: Code, label: 'Code', desc: 'How you embed it' },
          ].map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex w-[132px] flex-col items-center gap-1.5 rounded-lg border p-3 text-center border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]"
            >
              <Icon size={16} className="text-[var(--docs-steel)]" />
              <p className="text-[12px] font-medium text-[var(--docs-ink)]">{label}</p>
              <p className="text-[11px] text-[var(--docs-stone)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading step="1" title="Fields tab" description="Control the structure of your form." />
        <InfoCard title="What you can control" className="mb-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Add, remove, and reorder fields</li>
            <li>Choose field types like Email, Text, and Textarea</li>
            <li>Set labels, placeholders, and required states</li>
          </ul>
        </InfoCard>
        <Screenshot src="/images/contactform/third.png" alt="Field settings panel" caption="Field settings panel" />
        <Callout icon={AlertCircle} title="Best practice">
          Keep forms short, usually three to five fields, to improve submission rates.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading step="2" title="Design tab" description="Adjust text, presets, and final appearance." />
        <Screenshot src="/images/contactform/second.png" alt="Form editor with live preview" caption="Editor with live preview" />
        <Screenshot src="/images/contactform/fourth.png" alt="Theme presets and customization" caption="Theme presets and visual customization" />
        <Screenshot src="/images/contactform/fifth.png" alt="Live preview of the final form" caption="Live preview of the final form" />
        <InfoCard title="Useful adjustments">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Form title and subtitle</li>
            <li>Submit button label</li>
            <li>Preset themes and manual color adjustments</li>
            <li>Background and text contrast for readability</li>
          </ul>
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading step="3" title="Code tab" description="Copy the embed snippet and publish." />
        <Screenshot src="/images/contactform/sixth.png" alt="Contact Form code tab" caption="Embed code and copy flow" />
        <InfoCard title="Using the embed code">
          <ol className="space-y-2.5">
            {[
              'Open the Code tab and copy the generated snippet',
              'Paste it into the page section where the form should appear',
              'Publish the page and start collecting submissions immediately',
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] text-[var(--docs-steel)] border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">
                  {idx + 1}
                </span>
                <span className="text-[13px] text-[var(--docs-steel)]">{step}</span>
              </li>
            ))}
          </ol>
        </InfoCard>
      </section>

      <SummaryCard intro="The Contact Form Tool lets you:" points={summaryPoints} />
    </ToolPage>
  );
}