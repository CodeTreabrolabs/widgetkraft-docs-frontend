import React from 'react'
import LiveConversationWidget from '@/comps/content/Widgets/LiveConversationWidgetPage'

export const metadata = {
  title: 'Live Conversation Widget | WidgetKraft Docs',
  description:
    'Add real-time live chat to your website. Chat instantly with visitors, provide support, and boost conversions—all from one centralized dashboard.',
  keywords: [
    'Live Conversation widget',
    'live chat widget',
    'real-time chat',
    'website live chat',
    'customer support chat',
    'live chat tool',
    'real-time messaging',
    'visitor chat',
    'agent dashboard',
    'live chat customization',
    'chat bubble styling',
    'real-time support',
    'website engagement tool',
    'customer service chat',
    'live chat for website',
    'best alternative to Tawk',
    'best alternative to Intercom',
    'best alternative to Drift',
    'best alternative to LiveChat',
    'affordable live chat',
    'real-time conversation tool',
  ],
  openGraph: {
    title: 'Live Conversation Widget | WidgetKraft Docs',
    description:
      'Add real-time live chat to your website. Customize appearance, manage conversations from one dashboard, and provide instant support to visitors.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <LiveConversationWidget />
    </div>
  )
}

export default page