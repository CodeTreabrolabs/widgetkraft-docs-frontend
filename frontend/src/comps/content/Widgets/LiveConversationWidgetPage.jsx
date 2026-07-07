import { MessageCircle, Settings, Code, Palette, AlertCircle } from 'lucide-react';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { LiveChatCodes } from './Codes/LiveChatCodes';
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
  title: 'Live Conversation Tool',
  description:
    'A real-time support tool that lets you chat instantly with website visitors, answer questions, and guide high-intent users from one place.',
  customizableFeatures: [
    'Header branding and welcome message',
    'Message bubble styling',
    'Input field configuration',
    'Tool dimensions and positioning',
    'Conversation interface appearance',
    'Admin-side management flow',
  ],
  creationSteps: [
    'Go to Available Tools -> Live Conversation',
    'Click Add Tool',
    'Configure the tool in the editor',
    'Copy the embed code to your site',
  ],
  pricing: '1 credit / thread',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/live-conversation',
});

const summaryPoints = [
  'Provide real-time support to visitors instantly',
  'Customize the conversation interface to match your site',
  'Deploy with a single embed snippet',
  'Manage conversations from a central dashboard',
  'Track active sessions and engagement clearly',
  'Use live chat without complex setup',
];

export default function LiveConversationWidgetPage() {
  const tool = getToolData();

  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: ${tool.currentPageUrl}`}</p>
      <ToolHeader icon={HiChatBubbleLeftRight} title={tool.title} description={tool.description} pricing={tool.pricing} />

      <FeatureCard items={tool.customizableFeatures} note="Shape the live chat flow while keeping the UI clean and readable." />

      <LiveChatCodes />

      <section className="mb-10">
        <SectionHeading title="Creating a Live Conversation tool" description="Four steps from the dashboard." />
        <StepList steps={tool.creationSteps} />
        <Screenshot src="/images/liveconversation/live-one.png" alt="Creating Live Conversation tool" caption="Dashboard - activating the Live Conversation tool" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Understanding the editor" description="Five configuration tabs." />
        <div className="flex flex-wrap justify-center gap-2.5">
          {[
            { icon: MessageCircle, label: 'Header', desc: 'Title, subtitle, and greeting' },
            { icon: MessageCircle, label: 'Chat', desc: 'Bubble styling and readability' },
            { icon: Settings, label: 'Input', desc: 'Message field and send action' },
            { icon: Palette, label: 'Appearance', desc: 'Dimensions and overall style' },
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
        <SectionHeading step="1" title="Header tab" description="Control the top section of the chat experience." />
        <InfoCard title="Header settings" className="mb-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Chat title and subtitle</li>
            <li>Welcome message</li>
            <li>Branding and logo treatment</li>
            <li>Consistent text hierarchy for readability</li>
          </ul>
        </InfoCard>
        <Screenshot src="/images/liveconversation/live-two.png" alt="Live Conversation header tab" caption="Header tab with title, subtitle, and welcome message" />
      </section>

      <section className="mb-10">
        <SectionHeading step="2" title="Chat tab" description="Adjust how messages appear in the conversation." />
        <Screenshot src="/images/liveconversation/live-three.png" alt="Live Conversation chat tab" caption="Chat tab with bubble styling controls" />
        <Callout icon={AlertCircle} title="Design tip">
          Prioritize contrast and spacing over decorative color choices so conversations stay easy to scan.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading step="3" title="Input tab" description="Configure the message field where visitors type." />
        <Screenshot src="/images/liveconversation/live-four.png" alt="Live Conversation input tab" caption="Input tab with field and send button customization" />
      </section>

      <section className="mb-10">
        <SectionHeading step="4" title="Appearance tab" description="Set size, proportions, and overall UI treatment." />
        <Screenshot src="/images/liveconversation/live-five.png" alt="Live Conversation appearance tab" caption="Appearance tab with sizing and visual controls" />
        <InfoCard title="What matters most">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Chat window width and height</li>
            <li>Background, radius, and shadow settings</li>
            <li>Consistent appearance with your site</li>
          </ul>
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading step="5" title="Code tab" description="Copy the embed code and go live." />
        <Screenshot src="/images/liveconversation/live-six.png" alt="Live Conversation code tab" caption="Code tab with embed snippet" />
        <Screenshot src="/images/liveconversation/chat-eight.png" alt="Live Conversation admin dashboard" caption="Admin dashboard with active conversations and sessions" />
        <InfoCard title="Using the embed code">
          <ol className="space-y-2.5">
            {[
              'Copy the snippet from the Code tab',
              'Paste it before the closing body tag so it loads site-wide',
              'Publish the page and visitors can open the chat from the floating button',
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

      <SummaryCard intro="The Live Conversation Tool lets you:" points={summaryPoints} />
    </ToolPage>
  );
}