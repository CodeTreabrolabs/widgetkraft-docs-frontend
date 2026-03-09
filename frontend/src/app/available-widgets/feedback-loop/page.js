import React from 'react'
import FeedbackLoopWidgetPage from '@/comps/content/Widgets/FeedbackLoopWidget'

export const metadata = {
  title: 'Feedback Loop Widget | WidgetKraft Docs',
  description:
    'Collect structured user feedback with categorized options. Customize appearance, track insights, and improve your product based on real user input—all from one dashboard.',
  keywords: [
    'Feedback Loop widget',
    'feedback collection tool',
    'user feedback widget',
    'website feedback form',
    'categorized feedback',
    'feature request tool',
    'bug report widget',
    'UI improvement suggestions',
    'customer feedback tool',
    'feedback dashboard',
    'real-time feedback analytics',
    'product feedback collection',
    'user insights tool',
    'website engagement tool',
    'free feedback widget',
    'best alternative to UserVoice',
    'best alternative to Canny',
    'best alternative to Featurebase',
    'customer voice tool',
    'feedback categorization',
  ],
  openGraph: {
    title: 'Feedback Loop Widget | WidgetKraft Docs',
    description:
      'Collect and organize user feedback with categorized options. Track feature requests, bug reports, and UI improvements in one dashboard.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <FeedbackLoopWidgetPage />
    </div>
  )
}

export default page