'use client';

import { useState } from 'react';
import {
  MessageCircle,
  Settings,
  Code,
  Palette,
  Save,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Bot,
  Sparkles,
} from 'lucide-react';
import { TbMessageChatbot } from 'react-icons/tb';
import { ChatbotCodes } from './Codes/ChatbotCodes';


const hairline = 'border-[color:var(--docs-hairline,rgba(255,255,255,0.1))]';
const hairlineSoft = 'border-[color:var(--docs-hairline-soft,rgba(255,255,255,0.06))]';
const card = `rounded-xl border ${hairline} bg-transparent`;


const getWidgetData = () => ({
  title: 'AI Chatbot Widget',
  description:
    'Add intelligent, conversational AI assistance to your website — powered by advanced language models. Create a custom assistant that understands your business and helps visitors around the clock.',
  customizableFeatures: [
    'Chat appearance and theme',
    'AI behavior and personality',
    'Initial greeting messages',
    'Colors, fonts, and bubble styles',
    'Chat widget size and positioning',
  ],
  creationSteps: [
    'Go to All Widgets → AI Chatbot',
    'Click + Add Widget',
    'Go to My Widgets → AI Chatbot',
    'Click Configure',
  ],
  screenshotCaption: 'Dashboard — creating a new AI Chatbot widget',
  pricing: '0.8 credit / chat',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/ai-chatbot-widget',
});

const editorTabs = [
  { icon: MessageCircle, label: 'Header', desc: 'Title and branding' },
  { icon: MessageCircle, label: 'Chat', desc: 'Message bubble styling' },
  { icon: Settings, label: 'Input', desc: 'Message input setup' },
  { icon: Palette, label: 'Appearance', desc: 'Size and design' },
  { icon: Bot, label: 'AI', desc: 'Behavior and personality' },
  { icon: Code, label: 'Code', desc: 'Embed snippet' },
];

const themePresets = [
  { name: 'Default', swatch: '#3a3a3c' },
  { name: 'Dark', swatch: '#0a0a0a' },
  { name: 'Ocean', swatch: '#2b6cb0' },
  { name: 'Sunset', swatch: 'linear-gradient(90deg,#e08a4b,#d9636c)' },
  { name: 'Forest', swatch: '#3f7a52' },
];

const bestPractices = [
  {
    title: 'Write a comprehensive master prompt',
    body: 'The more detail you provide about your business, the better your AI can assist visitors — product details, pricing, FAQs, and contact information all help.',
  },
  {
    title: 'Test your chatbot thoroughly',
    body: 'Ask a range of questions in the preview to confirm the AI responds accurately, then refine the master prompt from what you see.',
  },
  {
    title: 'Set clear boundaries',
    body: 'Tell the AI which topics to avoid or redirect. This keeps conversations on-topic and professional.',
  },
  {
    title: 'Use your brand voice',
    body: 'Define tone and personality — friendly, professional, casual — directly in the master prompt.',
  },
  {
    title: 'Match visual design to your site',
    body: 'Colors and styling that complement your website keep the widget feeling native, not bolted on.',
  },
  {
    title: 'Monitor conversations',
    body: 'Review chat logs regularly to spot common questions and improve the master prompt over time.',
  },
];

const conversationSteps = [
  { title: 'AI processing', body: 'Messages are sent to Claude for context-aware responses.' },
  { title: 'Master prompt usage', body: 'Your custom master prompt guides every AI response.' },
  { title: 'Conversation history', body: 'Chat logs are stored in your dashboard for review.' },
  { title: 'Credit consumption', body: 'Credits are used per AI message generated.' },
];

const summaryPoints = [
  'Add intelligent AI assistance to your website in minutes',
  'Customize appearance, behavior, and AI personality',
  'Provide 24/7 support without human intervention',
  'Handle common questions and guide visitors automatically',
  'Embed with a single script tag — no backend required',
  'Update instantly without changing the embed code',
];


function Eyebrow({ children }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--docs-stone)]">
      {children}
    </span>
  );
}

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
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="text-[17px] font-semibold text-[var(--docs-ink)] leading-snug">{title}</h2>
        {description && (
          <p className="mt-0.5 text-[13px] text-[var(--docs-steel)]">{description}</p>
        )}
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, className = '' }) {
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

function ConfigRow({ label, description, example }) {
  return (
    <div className={`border-b py-3 last:border-b-0 ${hairlineSoft}`}>
      <p className="text-[13px] font-medium text-[var(--docs-ink)]">{label}</p>
      {description && <p className="mt-0.5 text-[13px] text-[var(--docs-steel)]">{description}</p>}
      {example && (
        <code className={`mt-1.5 inline-block rounded border px-1.5 py-0.5 font-mono text-[12px] text-[var(--docs-steel)] ${hairline}`}>
          {example}
        </code>
      )}
    </div>
  );
}

function ColorRow({ label, description, swatch }) {
  return (
    <div className={`flex items-center gap-3 border-b py-3 last:border-b-0 ${hairlineSoft}`}>
      <span
        className={`h-4 w-4 flex-none rounded-full border ${hairline}`}
        style={{ background: swatch }}
      />
      <div>
        <p className="text-[13px] font-medium text-[var(--docs-ink)]">{label}</p>
        {description && <p className="text-[13px] text-[var(--docs-steel)]">{description}</p>}
      </div>
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

function EmbedCodeBlock() {
  const [copied, setCopied] = useState(false);

  const snippet = `<div id="chatbot-root"></div>

<script src="https://cdn.widgetkraft.com/chatbot.js"></script>

<script>
  ChatbotWidget.init({
    widgetId: "aaaaaaaa-7777-4545-bbbb-112233445566"
  });
</script>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div className="my-5 flex justify-center">
      <div className={`w-full max-w-md overflow-hidden rounded-lg border ${hairline}`}>
        <div className={`flex items-center justify-between border-b px-3 py-1.5 ${hairlineSoft}`}>
          <span className="font-mono text-[11px] text-[var(--docs-stone)]">HTML</span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded border border-transparent px-1.5 py-0.5 text-[11px] text-[var(--docs-stone)] hover:border-white/10"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="overflow-x-auto px-3 py-3">
          <code className="font-mono text-[12px] leading-relaxed text-[var(--docs-steel)]">
            {snippet}
          </code>
        </pre>
      </div>
    </div>
  );
}


export default function ChatbotWidgetPage() {
  const widgetDetails = getWidgetData();

  return (
    <div className="mx-auto w-full max-w-[var(--docs-prose-max)] px-4 text-[13px] leading-relaxed text-[var(--docs-steel)]">
      <p style={{ display: 'none' }}>{`Current Page URL: ${widgetDetails.currentPageUrl}`}</p>


      <header className="mb-10 flex flex-col items-center text-center">
        <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border ${hairline}`}>
          <TbMessageChatbot size={18} className="text-[var(--docs-ink)]" />
        </div>
        <h1 className="text-[22px] font-semibold text-[var(--docs-ink)]">{widgetDetails.title}</h1>
        <p className="mx-auto mt-2 max-w-md text-[13px] text-[var(--docs-steel)]">
          {widgetDetails.description}
        </p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] text-[var(--docs-steel)] ${hairline}`}
        >
          Pricing <span className="font-medium text-[var(--docs-ink)]">{widgetDetails.pricing}</span>
        </span>
      </header>


      <section className="mb-10">
        <div className={`${card} p-5`}>
          <h3 className="mb-3 text-[14px] font-semibold text-[var(--docs-ink)]">You can fully customize</h3>
          <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {widgetDetails.customizableFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
                <span className="text-[13px] text-[var(--docs-steel)]">{feature}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] italic text-[var(--docs-stone)]">
            Your AI assistant is powered by Claude and can be customized with your own knowledge base.
          </p>
        </div>
      </section>

      <ChatbotCodes />


      <section className="mb-10">
        <SectionHeading title="Creating an AI Chatbot widget" description="Four steps from the dashboard." />

        <ol className="mb-5 space-y-2.5">
          {widgetDetails.creationSteps.map((step, idx) => (
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
          src="/images/chatbot/image.png"
          alt="WidgetKraft: creating an AI Chatbot widget — dashboard selection"
          caption={widgetDetails.screenshotCaption}
        />

        <p className="mb-4 text-[13px] text-[var(--docs-steel)]">
          The chatbot editor opens with a live preview on the left and configuration panels on the
          right. Every change updates the preview instantly.
        </p>

        <Callout icon={Sparkles} title="AI-powered intelligence">
          Your chatbot uses advanced AI to understand context, respond helpfully, and stay aligned
          with your master prompt.
        </Callout>
      </section>


      <section className="mb-10">
        <SectionHeading title="Understanding the chatbot editor" description="Six configuration tabs." />

        <div className="flex flex-wrap justify-center gap-2.5">
          {editorTabs.map(({ icon: Icon, label, desc }) => (
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
          title="Header tab"
          description="Controls the top section of your chatbot widget."
        />

        <div className={`${card} p-4`}>
          <ConfigRow label="Title" description="The name shown at the top of the chat window." example='"Support Bot"' />
          <ConfigRow label="Subtitle" description="Descriptive text below the title." example='"Ask me anything…"' />
          <ConfigRow label="Logo URL" description="Your brand logo or icon. PNG, JPG, or SVG." />
          <ConfigRow label="AI processing message" description="Shown while the AI is thinking." example='"Thinking…"' />
          <ConfigRow label="Font color" description="Text color in the header." />
          <ConfigRow label="Background color" description="Header background, to match your brand." />
          <ConfigRow label="Font family" description="Typography for the header text." />
        </div>

        <Screenshot
          src="/images/chatbot/chatbot-one.png"
          alt="WidgetKraft: header tab — title, subtitle, and logo configuration"
          caption="Custom title, subtitle, and logo"
        />
      </section>

      <section className="mb-10">
        <SectionHeading step="2" title="Chat tab" description="How messages appear in the conversation." />

        <div className={`${card} p-4`}>
          <h4 className="mb-1 text-[13px] font-semibold text-[var(--docs-ink)]">Message bubbles</h4>
          <ColorRow label="User bubble color" description="Messages sent by the visitor." swatch="#3fa66b" />
          <ColorRow label="AI bubble color" description="AI assistant responses." swatch="#8a8a8a" />
          <ColorRow label="User font color" description="Text color for user messages." swatch="#0a0a0a" />
          <ColorRow label="AI font color" description="Text color for AI responses." swatch="#0a0a0a" />
          <ConfigRow label="Bubble radius" description="Roundness of message bubbles." example="18px" />
          <ConfigRow label="Font size" description="Message text size." example="14–16px" />
        </div>

        <Screenshot
          src="/images/chatbot/chatbot-two.png"
          alt="WidgetKraft: chat tab — bubble colors and fonts"
          caption="Custom bubble colors and fonts"
        />

        <InfoCard title="Floating chat bubble" className="mb-4">
          The circular button that opens your widget. Its size and radius are configurable here.
        </InfoCard>

        <Callout icon={AlertCircle} title="Design tip">
          Use contrasting colors for user and AI bubbles so conversations stay easy to follow, and
          keep text contrast high enough to read comfortably.
        </Callout>
      </section>


      <section className="mb-10">
        <SectionHeading step="3" title="Input tab" description="The message field where visitors type." />

        <div className={`${card} p-4`}>
          <ConfigRow label="Placeholder text" description="Hint text in the empty input." example='"Type your message…"' />
          <ConfigRow label="First AI message" description="The greeting your AI sends when chat opens." example='"Hey there, how are you?"' />
          <ColorRow label="Background color" description="Input area background." swatch="#141414" />
          <ColorRow label="Border color" description="Input field border." swatch="#3a3a3c" />
          <ColorRow label="Text color" description="Color of text as the visitor types." swatch="#3fa66b" />
          <ConfigRow label="Font size" description="Text size in the input field." example="14px" />
          <ColorRow label="Send button color" description="Color of the send button." swatch="#0a0a0a" />
        </div>

        <Screenshot
          src="/images/chatbot/chatbot-three.png"
          alt="WidgetKraft: input tab — styled field with placeholder text"
          caption="Styled input field with custom colors"
        />
      </section>


      <section className="mb-10">
        <SectionHeading step="4" title="Appearance tab" description="Widget dimensions and visual style." />

        <div className={`${card} mb-4 p-4`}>
          <ConfigRow label="Width" description="How wide the chat window appears." example="400px default" />
          <ConfigRow label="Height" description="Vertical size of the chat window." example="550px default" />
        </div>

        <div className={`${card} p-4`}>
          <ColorRow label="Background color" description="Main chat area background." swatch="#141414" />
          <ConfigRow label="Background image URL" description="Optional custom pattern or image." />
          <ConfigRow label="Border radius" description="Roundness of the chat window corners." example="16px" />
          <ConfigRow label="Shadow" description="Adds elevation and separation from the page." example="0 4px 12px rgba(0,0,0,.1)" />
        </div>

        <Screenshot
          src="/images/chatbot/chatbot-four.png"
          alt="WidgetKraft: appearance tab — dimensions, background, and theme"
          caption="Dimensions, background, and theme customization"
        />

        <div className={`${card} p-4`}>
          <h4 className="mb-3 text-[13px] font-semibold text-[var(--docs-ink)]">Theme presets</h4>
          <div className="flex flex-wrap gap-2.5">
            {themePresets.map((preset) => (
              <div
                key={preset.name}
                className={`flex items-center gap-2 rounded-full border py-1 pl-1 pr-3 ${hairline}`}
              >
                <span className="h-4 w-4 rounded-full" style={{ background: preset.swatch }} />
                <span className="text-[12px] text-[var(--docs-steel)]">{preset.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12px] italic text-[var(--docs-stone)]">
            Pick a preset to instantly apply coordinated colors across every element.
          </p>
        </div>
      </section>


      <section className="mb-10">
        <SectionHeading step="5" title="AI tab" description="Your AI assistant's knowledge and behavior." />

        <div className={`${card} mb-4 p-4`}>
          <div className="mb-3 flex items-start gap-2">
            <Bot size={16} className="mt-0.5 flex-none text-[var(--docs-steel)]" />
            <div>
              <h4 className="text-[13px] font-semibold text-[var(--docs-ink)]">Master prompt</h4>
              <p className="text-[13px] text-[var(--docs-steel)]">
                The most important setting — it defines your AI's personality, knowledge, and
                capabilities.
              </p>
            </div>
          </div>

          <ul className="mb-3 space-y-1 pl-5 text-[13px] text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
            <li>Who it is and what it represents</li>
            <li>What it knows about your business</li>
            <li>How it should respond to visitors</li>
            <li>What tone and style to use</li>
            <li>Any specific rules or limitations</li>
          </ul>

          <div className={`rounded-lg border p-3 ${hairlineSoft}`}>
            <p className="mb-1 text-[12px] font-medium text-[var(--docs-ink)]">Example master prompt</p>
            <p className="font-mono text-[12px] leading-relaxed text-[var(--docs-stone)]">
              "WidgetKraft offers an intuitive, no-code platform for adding customizable AI chat
              widgets and contact forms to any website…"
            </p>
          </div>

          <Screenshot
            src="/images/chatbot/chatbot-five-1.png"
            alt="WidgetKraft: AI tab — master prompt configuration"
            caption="Master prompt and generate-from-URL"
          />
        </div>

        <div className={`${card} mb-4 p-4`}>
          <h4 className="mb-2 text-[13px] font-semibold text-[var(--docs-ink)]">AI prompt generation</h4>
          <p className="mb-3 text-[13px] text-[var(--docs-steel)]">
            Provide your site URL and WidgetKraft generates a master prompt automatically from your
            website's content.
          </p>
          <div className={`flex items-center gap-2 rounded-lg border p-2 ${hairline}`}>
            <input
              type="text"
              placeholder="https://getwidgets.app"
              disabled
              className="flex-1 bg-transparent px-1 text-[13px] text-[var(--docs-steel)] outline-none"
            />
            <button
              className={`rounded-md border px-3 py-1.5 text-[12px] font-medium text-[var(--docs-ink)] ${hairline}`}
            >
              Generate (28 left)
            </button>
          </div>

          <Screenshot
            src="/images/chatbot/chatbot-five-2.png"
            alt="WidgetKraft: generate a master prompt from a site URL"
          />
        </div>

        <Callout icon={Sparkles} title="Master prompt tips">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            <li>Be specific about your business, products, or services</li>
            <li>Include common questions and how to answer them</li>
            <li>Define the tone — professional, friendly, casual</li>
            <li>Set boundaries for what the AI should not discuss</li>
            <li>Add contact info, pricing, or other key details</li>
          </ul>
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading
          step="6"
          title="Code — embedding the chatbot"
          description="Once configured, copy the embed snippet onto your site."
        />

        <EmbedCodeBlock />

        <Screenshot
          src="/images/chatbot/chatbot-six.png"
          alt="WidgetKraft: code tab — embed snippet with widget ID"
         
        />

        <div className={`${card} mb-4 p-4`}>
          <h4 className="mb-3 text-[13px] font-semibold text-[var(--docs-ink)]">Using the embed code</h4>
          <ol className="space-y-2.5">
            {[
              'Click Copy to copy the embed snippet',
              'Paste it before the closing </body> tag, so it loads on every page',
              'The chatbot appears as a floating button in the bottom-right corner',
              'Visitors click it to start chatting with your AI assistant',
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
        </div>

        <div className={`${card} p-4`}>
          <h4 className="mb-2 text-[13px] font-semibold text-[var(--docs-ink)]">Integration notes</h4>
          <ConfigRow label="No backend required" description="The widget is fully hosted and managed." />
          <ConfigRow label="Instant updates" description="Editor changes apply immediately to live widgets." />
          <ConfigRow label="Mobile responsive" description="Automatically adapts to every screen size." />
          <ConfigRow label="Fast loading" description="Optimized for performance with minimal page impact." />
        </div>
      </section>


      <section className="mb-10">
        <div className={`${card} p-4`}>
          <h3 className="mb-2 flex items-center gap-2 text-[14px] font-semibold text-[var(--docs-ink)]">
            <Save size={16} className="text-[var(--docs-steel)]" />
            Saving and publishing
          </h3>
          <ul className="space-y-1 pl-4 text-[13px] text-[var(--docs-steel)]" style={{ listStyle: 'disc' }}>
            <li>Click Save at the top to store your configuration</li>
            <li>Changes apply instantly to your live chatbot</li>
            <li>No need to update the embed code when making changes</li>
            <li>Your widget ID stays the same across updates</li>
          </ul>
        </div>
      </section>


      <section className="mb-10">
        <SectionHeading title="What happens during conversations" description="When a visitor chats with your assistant." />
        <div className="grid gap-2.5 sm:grid-cols-2">
          {conversationSteps.map((item) => (
            <InfoCard key={item.title} icon={CheckCircle2} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </section>


      <section className="mb-10">
        <SectionHeading title="Best practices for AI chatbots" />
        <div className="grid gap-2.5 sm:grid-cols-2">
          {bestPractices.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </section>


      <section className="mb-6">
        <div className={`${card} p-5`}>
          <h2 className="mb-3 text-[15px] font-semibold text-[var(--docs-ink)]">Summary</h2>
          <p className="mb-3 text-[13px] text-[var(--docs-steel)]">The AI Chatbot Widget lets you:</p>
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