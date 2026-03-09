import React from 'react'
import BestPracticesPage from '@/comps/content/Documentation/BestPracticesPage'

export const metadata = {
  title: 'Best Practices | WidgetKraft Docs',
  description:
    'Tips and strategies to get the most out of WidgetKraft. Learn how to strategically place widgets, monitor usage, optimize AI responses, and scale effectively.',
  keywords: [
    'WidgetKraft best practices',
    'widget placement tips',
    'AI chatbot best practices',
    'widget optimization',
    'website widget strategy',
    'credit usage monitoring',
    'widget testing',
    'conversation optimization',
    'strategic widget placement',
    'widget performance tips',
    'engagement best practices',
    'widget configuration tips',
    'scaling website widgets',
    'AI assistant optimization',
    'feedback loop best practices',
    'live chat best practices',
    'visitor tracking tips',
    'widget analytics',
    'website engagement strategy',
  ],
  openGraph: {
    title: 'Best Practices | WidgetKraft Docs',
    description:
      'Learn how to strategically place widgets, monitor usage, and optimize your configurations for maximum engagement and value.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <BestPracticesPage />
    </div>
  )
}

export default page