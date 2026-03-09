import React from 'react'
import PlatformConceptsPage from '@/comps/content/Documentation/PlatformConceptsPage'

export const metadata = {
  title: 'Platform Concepts | WidgetKraft Docs',
  description:
    'Understand core WidgetKraft concepts: widgets, widget instances, credits, and the dashboard. Learn how the platform works to use it efficiently.',
  keywords: [
    'WidgetKraft concepts',
    'platform concepts',
    'widgets explained',
    'widget instances',
    'credits system',
    'credit-based pricing',
    'dashboard overview',
    'AI Chatbot concept',
    'Contact Form concept',
    'Feedback Loop concept',
    'Live Conversation concept',
    'Visitor Tracker concept',
    'widget deployment',
    'usage tracking',
    'credit consumption',
    'widget management',
    'platform overview',
    'how WidgetKraft works',
    'widget types',
    'interaction use cases',
    'website widgets explained',
  ],
  openGraph: {
    title: 'Platform Concepts | WidgetKraft Docs',
    description:
      'Learn about widgets, widget instances, credits, and the dashboard—the core concepts that power the WidgetKraft platform.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <PlatformConceptsPage />
    </div>
  )
}

export default page