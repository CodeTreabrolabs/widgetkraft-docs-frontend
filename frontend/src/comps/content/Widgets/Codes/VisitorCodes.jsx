'use client';

import { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const INSTALL_HTML_CODE = `<!-- Add this snippet before the closing </head> or </body> tag -->
<script
  src="https://cdn.widgetkraft.com/analytics.js"
  data-widget-id="YOUR_WIDGET_ID">
</script>`;

const INSTALL_REACT_CODE = `import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.widgetkraft.com/analytics.js';
    script.setAttribute('data-widget-id', 'YOUR_WIDGET_ID');
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div>{/* Your app content */}</div>;
}`;

const INSTALL_NEXTJS_CODE = `// components/VisitorAnalytics.js
'use client';

import { useEffect } from 'react';

export default function VisitorAnalytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.widgetkraft.com/analytics.js';
    script.setAttribute('data-widget-id', 'YOUR_WIDGET_ID');
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

// app/layout.js
import VisitorAnalytics from '@/components/VisitorAnalytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <VisitorAnalytics />
      </body>
    </html>
  );
}`;

const EVENT_HTML_CODE = `<script>
  WidgetKraft.CreateEvent(
    "click",
    "Build your AI chatbot for free",
    {
      page: "/tools/ai-chatbot",
      section: "hero",
    }
  );
</script>

<button onclick="trackPurchase()">Buy Now</button>

<script>
  function trackPurchase() {
    WidgetKraft.CreateEvent(
      "purchase",
      "Buy Now Clicked",
      {
        plan: "Pro",
        amount: 29,
      }
    );
  }
</script>`;

const EVENT_REACT_CODE = `// lib/widgetkraft.js
export function createWidgetKraftEvent({
  eventType,
  eventName,
  properties,
}) {
  if (typeof window === "undefined") return;

  window.WidgetKraft?.CreateEvent(
    eventType,
    eventName,
    properties
  );
}

// components/BuyButton.jsx
import { createWidgetKraftEvent } from './lib/widgetkraft';

export default function BuyButton() {
  return (
    <button
      onClick={() =>
        createWidgetKraftEvent({
          eventType: 'purchase',
          eventName: 'Buy Button Clicked',
          properties: {
            plan: 'Pro',
            amount: 29,
          },
        })
      }
    >
      Buy Now
    </button>
  );
}`;

const EVENT_NEXTJS_CODE = `// lib/widgetkraft.ts
export interface CreateEventOptions {
  eventType: string;
  eventName?: string;
  properties?: Record<string, any>;
}

declare global {
  interface Window {
    WidgetKraft?: {
      CreateEvent: (
        eventType: string,
        eventName?: string,
        properties?: Record<string, any>
      ) => void;
    };
  }
}

export function createWidgetKraftEvent({
  eventType,
  eventName,
  properties,
}: CreateEventOptions) {
  if (typeof window === "undefined") return;

  window.WidgetKraft?.CreateEvent(
    eventType,
    eventName,
    properties
  );
}

// components/BuyButton.tsx
"use client";

import { createWidgetKraftEvent } from '@/lib/widgetkraft';

export default function BuyButton() {
  const handleClick = () => {
    createWidgetKraftEvent({
      eventType: 'purchase',
      eventName: 'Buy Button Clicked',
      properties: {
        plan: 'Pro',
        amount: 29,
      },
    });
  };

  return <button onClick={handleClick}>Buy Now</button>;
}`;

const stackTabs = [
  { id: 'html', label: 'HTML', lang: 'html' },
  { id: 'react', label: 'React', lang: 'jsx' },
  { id: 'nextjs', label: 'Next.js', lang: 'jsx' },
];

const installCodeMap = {
  html: INSTALL_HTML_CODE,
  react: INSTALL_REACT_CODE,
  nextjs: INSTALL_NEXTJS_CODE,
};

const installDescMap = {
  html: 'A single script tag is all you need no init() call required.',
  react: 'Appends the script to <head> on mount and cleans up on unmount.',
  nextjs: 'Returns null no visible UI, just silent analytics tracking.',
};

const eventCodeMap = {
  html: EVENT_HTML_CODE,
  react: EVENT_REACT_CODE,
  nextjs: EVENT_NEXTJS_CODE,
};

const eventDescMap = {
  html: 'Call WidgetKraft.CreateEvent() anywhere after the script is loaded.',
  react: 'Wrap event calls in a reusable helper so components stay clean.',
  nextjs: 'Use a client component and import the helper wherever you need tracking.',
};

const eventTypes = [
  { type: 'click', whenToUse: 'Button or link clicks' },
  { type: 'checkout', whenToUse: 'User starts checkout' },
  { type: 'purchase', whenToUse: 'Order completed' },
  { type: 'subscription', whenToUse: 'Subscription started or renewed' },
  { type: 'form', whenToUse: 'Form submitted' },
  { type: 'auth', whenToUse: 'Login or signup' },
  { type: 'payment', whenToUse: 'Payment completed' },
  { type: 'download', whenToUse: 'File downloaded' },
  { type: 'video', whenToUse: 'Video played' },
  { type: 'chatbot', whenToUse: 'Chatbot opened or used' },
  { type: 'custom', whenToUse: 'Any other action' },
];

const syntaxStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
    fontSize: '13px',
    lineHeight: '1.65',
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: 'transparent',
    fontSize: '13px',
  },
};

function CodeTabsSection({ title, description, tabs, codeMap, descMap, tipLabel, tip }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);

  const active = tabs.find((tab) => tab.id === activeTab);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[var(--docs-ink)] mb-2">{title}</h2>
        <p className="text-[var(--docs-steel)]">{description}</p>
      </div>

      <div className="flex items-center gap-1 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setCopied(false);
            }}
            className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors rounded-t-lg
              ${activeTab === tab.id
                ? 'bg-gray-800 text-[var(--docs-ink)] border border-b-0 border-gray-700'
                : 'text-[var(--docs-stone)] hover:text-gray-200 hover:bg-gray-800/50'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="docs-code-panel">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700 bg-gray-900/70">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            {active.lang === 'html' ? 'HTML' : 'JavaScript · ' + active.label}
          </span>

          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs hidden sm:block">{descMap[activeTab]}</p>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all border
                ${copied
                  ? 'bg-green-600/20 text-green-400 border-green-600/40'
                  : 'bg-gray-700 text-[var(--docs-steel)] hover:bg-gray-600 hover:text-[var(--docs-ink)] border-gray-600'
                }`}
            >
              {copied
                ? <><CheckCircle size={13} /> Copied!</>
                : <><Copy size={13} /> Copy</>
              }
            </button>
          </div>
        </div>

        <p className="sm:hidden text-[var(--docs-stone)] text-xs px-5 pt-3">{descMap[activeTab]}</p>

        <div className="overflow-x-auto px-5 py-4">
          <SyntaxHighlighter
            language={active.lang}
            style={syntaxStyle}
            showLineNumbers
            lineNumberStyle={{ color: '#4b5563', minWidth: '2.25em', paddingRight: '1em', userSelect: 'none' }}
            wrapLongLines={false}
          >
            {codeMap[activeTab]}
          </SyntaxHighlighter>
        </div>

        <div className="px-5 py-3 border-t border-gray-700 bg-gray-900/40 flex items-center gap-2 flex-wrap gap-y-1">
          <span className="text-blue-400 text-xs font-semibold">{tipLabel}</span>
          <span className="text-[var(--docs-stone)] text-xs">{tip}</span>
        </div>
      </div>
    </section>
  );
}

export function VisitorCodes() {
  return (
    <>
      <CodeTabsSection
        title="Quick Start"
        description="Copy the snippet for your stack and paste it into your project visitor analytics start tracking instantly."
        tabs={stackTabs}
        codeMap={installCodeMap}
        descMap={installDescMap}
        tipLabel="TIP"
        tip={(
          <>
            Replace{' '}
            <code className="docs-inline-code text-[11px]">
              YOUR_WIDGET_ID
            </code>{' '}
            with the ID from the{' '}
            <strong className="text-[var(--docs-steel)]">Code</strong> tab of your analytics editor.{' '}
            Unlike other widgets, the ID is passed via{' '}
            <code className="docs-inline-code text-[11px]">
              data-widget-id
            </code>{' '}
            no separate{' '}
            <code className="docs-inline-code text-[11px]">
              init()
            </code>{' '}
            call needed.
          </>
        )}
      />

      <section className="mb-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[var(--docs-ink)] mb-2">Track Custom Events with createWidgetKraftEvent()</h2>
          <p className="text-[var(--docs-steel)]">
            Custom events help you understand what your visitors are doing on your website. Use them to track important actions like purchases, signups, downloads, and chatbot opens.
          </p>
        </div>

        <div className="docs-card mb-6">
          <p className="text-[var(--docs-steel)] leading-7">
            Think of custom events as telling WidgetKraft what important action just happened. Once the tracking script is installed, you can call <span className="text-[var(--docs-ink)] font-semibold">WidgetKraft.CreateEvent()</span> anywhere in your app.
          </p>
        </div>

        <CodeTabsSection
          title="HTML / React / Next.js"
          description="Use the plain JavaScript call in HTML, or wrap it in a helper for React and Next.js."
          tabs={stackTabs}
          codeMap={eventCodeMap}
          descMap={eventDescMap}
          tipLabel="NOTE"
          tip={(
            <>
              If you use React or Next.js, keep the helper in a shared <code className="docs-inline-code text-[11px]">lib/widgetkraft</code> file so event tracking stays consistent across the app.
            </>
          )}
        />

        <div className="docs-card mb-6">
          <h3 className="text-xl font-semibold text-[var(--docs-ink)] mb-4">Event Types</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-[var(--docs-stone)]">
                  <th className="py-3 pr-4 font-medium">Event Type</th>
                  <th className="py-3 font-medium">When to Use</th>
                </tr>
              </thead>
              <tbody>
                {eventTypes.map((eventType) => (
                  <tr key={eventType.type} className="border-b border-gray-700/70 last:border-b-0">
                    <td className="py-3 pr-4 align-top text-[var(--docs-ink)]">{eventType.type}</td>
                    <td className="py-3 align-top text-[var(--docs-steel)]">{eventType.whenToUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="docs-card">
            <h3 className="text-xl font-semibold text-[var(--docs-ink)] mb-3">Event Properties</h3>
            <p className="text-[var(--docs-steel)] leading-7 mb-4">
              Send extra information with every event so you can analyze which plan was purchased, how much was spent, which coupon was used, or which button was clicked.
            </p>
            <div className="bg-gray-900/70 rounded-md p-4 text-sm text-[var(--docs-steel)] overflow-x-auto">
              <pre className="whitespace-pre-wrap leading-6">{`createWidgetKraftEvent({
  eventType: "purchase",
  eventName: "Pro Plan Purchased",
  properties: {
    plan: "Pro",
    amount: 29,
    currency: "USD",
    coupon: "SUMMER25",
  },
});`}</pre>
            </div>
          </div>

          <div className="docs-card">
            <h3 className="text-xl font-semibold text-[var(--docs-ink)] mb-3">Best Practices</h3>
            <ul className="text-[var(--docs-steel)] space-y-3 leading-7">
              <li>Track important actions like purchases, signups, and downloads.</li>
              <li>Give events clear names such as Checkout Started or Purchase Completed.</li>
              <li>Add helpful properties whenever you can to make reporting more useful.</li>
              <li>Use the same event type and name consistently across your app.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-blue-900/20 border border-blue-800/40 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-[var(--docs-ink)] mb-3">Example</h3>
          <div className="bg-gray-900/70 rounded-md p-4 text-sm text-[var(--docs-steel)] overflow-x-auto">
            <pre className="whitespace-pre-wrap leading-6">{`createWidgetKraftEvent({
  eventType: "checkout",
  eventName: "Checkout Started",
  properties: {
    plan: "Pro",
    amount: 29,
    currency: "USD",
  },
});`}</pre>
          </div>
          <p className="text-[var(--docs-steel)] text-sm mt-4 leading-7">
            Every time this code runs, WidgetKraft records the event so you can see it in your analytics dashboard and build better reports, funnels, and customer journeys.
          </p>
        </div>
      </section>
    </>
  );
}