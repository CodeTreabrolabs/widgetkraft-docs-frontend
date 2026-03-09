import React from 'react'
import IntroductionPage from '@/comps/content/Documentation/IntroductionPage'

export const metadata = {
  title: 'Introduction | WidgetKraft Docs',
  description:
    'WidgetKraft is a unified widget platform that helps businesses capture conversations, leads, and visitor insights directly from their website—without juggling multiple tools.',
  keywords: [
    'WidgetKraft introduction',
    'unified widget platform',
    'website widgets',
    'lead capture tools',
    'visitor insights',
    'website engagement platform',
    'all-in-one website tools',
    'chat widgets',
    'form builder',
    'comment system',
    'visitor tracking',
    'AI chatbot platform',
    'startup tools',
    'SMB website tools',
    'agency tools',
    'multiple client management',
    'content engagement',
    'lead generation tools',
    'response speed',
    'widget management',
    'no-code widgets',
    'website optimization',
    'customer engagement tools',
  ],
  openGraph: {
    title: 'Introduction | WidgetKraft Docs',
    description:
      'Learn about WidgetKraft—the unified widget platform that combines live chat, forms, comments, visitor tracking, and AI chatbots into one lightweight solution.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <IntroductionPage />
    </div>
  )
}

export default page