import { MessageCircle, Settings, Code, Palette, AlertCircle, Sparkles } from 'lucide-react';
import { TiEdit } from 'react-icons/ti';
import { FeedbackCodes } from './Codes/FeedbackCodes';
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

const getToolData = () => ({
  title: 'Feedback Loop Tool',
  description:
    'A customizable feedback collection tool that helps you gather structured user insights, requests, and reports directly from your website.',
  customizableFeatures: [
    'Header title and subtitle',
    'Branding and logo options',
    'Feedback category styling',
    'Message input behavior',
    'Tool dimensions and placement',
    'Theme and appearance settings',
  ],
  creationSteps: [
    'Go to Available Tools -> Feedback Loop',
    'Click Add Tool',
    'Go to My Tools -> Feedback Loop',
    'Click Configure',
  ],
  pricing: 'Free',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/feedback-loop',
});

const summaryPoints = [
  'Collect feature requests, ideas, bug reports, and general feedback',
  'Customize the feedback prompt to match your product',
  'Embed with one script and go live quickly',
  'Review submissions inside a central dashboard',
  'Keep the feedback experience lightweight and clear',
  'Improve product decisions with direct user input',
];

export default function FeedbackLoopWidgetPage() {
  const tool = getToolData();

  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: ${tool.currentPageUrl}`}</p>
      <ToolHeader icon={TiEdit} title={tool.title} description={tool.description} pricing={tool.pricing} />

      <FeatureCard items={tool.customizableFeatures} note="Gather the right kind of feedback without complicating the visitor experience." />

      <FeedbackCodes />

      <section className="mb-10">
        <SectionHeading title="Creating a Feedback Loop tool" description="Four steps from the dashboard." />
        <StepList steps={tool.creationSteps} />
        <Screenshot src="/images/feedbackloop/how-to-add-feedback-loop.png" alt="Creating Feedback Loop tool" caption="Dashboard - selecting Feedback Loop" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Understanding the editor" description="Four core tabs." />
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { icon: MessageCircle, label: 'Header', desc: 'Title and branding' },
            { icon: Settings, label: 'Input', desc: 'Message and submission flow' },
            { icon: Palette, label: 'Appearance', desc: 'Size and visual design' },
            { icon: Code, label: 'Code', desc: 'Embed snippet' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex w-[132px] flex-col items-center gap-1.5 rounded-lg border p-3 text-center border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]">
              <Icon size={16} className="text-[var(--docs-steel)]" />
              <p className="text-[12px] font-medium text-[var(--docs-ink)]">{label}</p>
              <p className="text-[11px] text-[var(--docs-stone)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading step="1" title="Header tab" description="Set the tool identity and first impression." />
        <InfoCard title="Common adjustments" className="mb-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Tool title and subtitle</li>
            <li>Logo URL and branding</li>
            <li>Header colors and font choices</li>
            <li>Optional title visibility</li>
          </ul>
        </InfoCard>
        <Screenshot src="/images/feedbackloop/feedback-loop-widget-header-tab.png" alt="Feedback Loop header tab" caption="Header tab with title, subtitle, and branding" />
      </section>

      <section className="mb-10">
        <SectionHeading step="2" title="Input tab" description="Control how people write and submit feedback." />
        <InfoCard title="Input settings" className="mb-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Placeholder text</li>
            <li>Input background, border, and text color</li>
            <li>Send button appearance</li>
            <li>Readable contrast and spacing</li>
          </ul>
        </InfoCard>
        <Screenshot src="/images/feedbackloop/feedback-loop-widget-input-tab.png" alt="Feedback Loop input tab" caption="Input tab with message field customization" />
      </section>

      <section className="mb-10">
        <SectionHeading step="3" title="Appearance tab" description="Adjust size, placement, and presentation." />
        <Screenshot src="/images/feedbackloop/feedback-loop-widget-appearance-tab.png" alt="Feedback Loop appearance tab" caption="Appearance tab with sizing and layout controls" />
        <Callout icon={Sparkles} title="Keep it simple">
          A subtle design and clear category labels usually work better than a highly decorative feedback tool.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading step="4" title="Code tab" description="Copy the embed code and deploy." />
        <Screenshot src="/images/feedbackloop/feedback-loop-widget-code-tab.png" alt="Feedback Loop code tab" caption="Code tab with copy-ready embed snippet" />
        <Screenshot src="/images/feedbackloop/feedback-loop-widget-dashboard.png" alt="Feedback Loop dashboard" caption="Dashboard for reviewing incoming feedback" />
        <InfoCard title="Where this helps most">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Feature request collection</li>
            <li>Bug reporting</li>
            <li>General suggestions and product ideas</li>
            <li>Continuous feedback loops for product teams</li>
          </ul>
        </InfoCard>
      </section>

      <SummaryCard intro="The Feedback Loop Tool lets you:" points={summaryPoints} />
    </ToolPage>
  );
}