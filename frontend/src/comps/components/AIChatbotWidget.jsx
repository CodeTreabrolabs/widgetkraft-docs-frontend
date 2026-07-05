'use client';

import { useEffect } from 'react';

const SCRIPT_SRC =
  'https://cdn.widgetkraft.com/chatbot.js';
const WIDGET_ID = '55ddbfd3-8a47-4d1b-b09f-a1a93cab878a';

const AIChatbotWidget = () => {
  useEffect(() => {
    const initWidget = () => {
      if (typeof window !== 'undefined' && window.ChatbotWidget?.init) {
        window.ChatbotWidget.init({ widgetId: WIDGET_ID });
      }
    };

    const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);

    if (existingScript) {
      initWidget();
      return;
    }

    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return <div id="chatbot-root" />;
};

export default AIChatbotWidget;