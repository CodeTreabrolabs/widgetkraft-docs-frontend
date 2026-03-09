import React from 'react'
import ChatbotWidgetPage from '@/comps/content/Widgets/ChatbotWidgetPage'

export const metadata = {
  title: 'AI Chatbot Widget | WidgetKraft Docs',
  description:
    'Add intelligent AI assistance to your website with customizable chatbots. Create custom AI assistants powered by Claude, define behavior with master prompts, and provide 24/7 support.',
  keywords: [
    'AI Chatbot widget',
    'AI assistant for website',
    'custom AI chatbot',
    'Claude AI chatbot',
    'website chatbot tool',
    'AI customer support',
    'intelligent chatbot',
    'customizable AI assistant',
    'AI chat widget',
    'master prompt configuration',
    '24/7 website assistant',
    'AI-powered support',
    'chatbot customization',
    'website engagement tool',
    'affordable AI chatbot',
    'best alternative to Intercom',
    'best alternative to Drift',
    'AI chatbot for business',
  ],
  openGraph: {
    title: 'AI Chatbot Widget | WidgetKraft Docs',
    description:
      'Create custom AI assistants for your website. Customize appearance, define AI behavior with master prompts, and provide instant 24/7 support to your visitors.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <ChatbotWidgetPage />
    </div>
  )
}

export default page