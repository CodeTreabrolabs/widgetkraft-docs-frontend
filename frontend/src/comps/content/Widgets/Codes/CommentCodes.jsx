'use client';

import { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HTML_CODE = `<!-- 1. Add this where you want the comment box to appear -->
<div id="commentbox-root"></div>

<!-- 2. Load the widget script -->
<script src="https://unpkg.com/@getwidgets/commentbox-widget@latest/dist/commentbox-widget.umd.js"></script>

<!-- 3. Initialize with your Widget ID -->
<script>
  CommentBoxWidget.init({
    widgetId: "YOUR_WIDGET_ID"
  });
</script>`;

const REACT_CODE = `import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@getwidgets/commentbox-widget@latest/dist/commentbox-widget.umd.js';

    script.onload = () => {
      if (window.CommentBoxWidget) {
        window.CommentBoxWidget.init({ widgetId: 'YOUR_WIDGET_ID' });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your app content */}
      <div id="commentbox-root" />
    </div>
  );
}`;

const NEXTJS_CODE = `// components/CommentBoxWidget.js
'use client';

import { useEffect } from 'react';

export default function CommentBoxWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@getwidgets/commentbox-widget@latest/dist/commentbox-widget.umd.js';
    script.async = true;

    script.onload = () => {
      if (window.CommentBoxWidget) {
        window.CommentBoxWidget.init({ widgetId: 'YOUR_WIDGET_ID' });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="commentbox-root" />;
}

// app/layout.js  (or on a specific page)
import CommentBoxWidget from '@/components/CommentBoxWidget';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CommentBoxWidget />
      </body>
    </html>
  );
}`;

const tabs = [
  { id: 'html',   label: 'HTML',    lang: 'html' },
  { id: 'react',  label: 'React',   lang: 'jsx'  },
  { id: 'nextjs', label: 'Next.js', lang: 'jsx' },
];

const codeMap = {
  html:   HTML_CODE,
  react:  REACT_CODE,
  nextjs: NEXTJS_CODE,
};

const descMap = {
  html:   'Paste this snippet into any HTML file before the closing </body> tag.',
  react:  'Drop this into your root component the comment box loads automatically on mount.',
  nextjs: 'Create a Client Component and add it to your layout or a specific page.',
};

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

export function CommentCodes() {
  const [activeTab, setActiveTab] = useState('html');
  const [copied, setCopied]       = useState(false);

  const active = tabs.find((t) => t.id === activeTab);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-10">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Quick Start</h2>
        <p className="text-gray-300">
          Copy the snippet for your stack and paste it into your project your comment box is live in under a minute.
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setCopied(false); }}
            className={`relative flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors rounded-t-lg
              ${activeTab === tab.id
                ? 'bg-gray-800 text-white border border-b-0 border-gray-700'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="bg-blue-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Code panel */}
      <div className="bg-gray-800 border border-t-0 border-gray-700 rounded-b-lg rounded-tr-lg overflow-hidden">

        {/* Toolbar */}
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
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600'
                }`}
            >
              {copied
                ? <><CheckCircle size={13} /> Copied!</>
                : <><Copy size={13} /> Copy</>
              }
            </button>
          </div>
        </div>

        {/* Description (mobile) */}
        <p className="sm:hidden text-gray-400 text-xs px-5 pt-3">{descMap[activeTab]}</p>

        {/* Code */}
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

        {/* Footer tip */}
        <div className="px-5 py-3 border-t border-gray-700 bg-gray-900/40 flex items-center gap-2">
          <span className="text-blue-400 text-xs font-semibold">TIP</span>
          <span className="text-gray-400 text-xs">
            Replace{' '}
            <code className="bg-gray-700 px-1 py-0.5 rounded text-gray-300 text-[11px]">
              YOUR_WIDGET_ID
            </code>{' '}
            with the ID found in the{' '}
            <strong className="text-gray-300">Code</strong> tab of your comment box editor.
          </span>
        </div>
      </div>
    </section>
  );
}