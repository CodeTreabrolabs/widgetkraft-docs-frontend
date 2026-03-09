import React from 'react'
import CommentChaosWidgetPage from '@/comps/content/Widgets/CommentChaosWidget'

export const metadata = {
  title: 'Comment Chaos Widget | WidgetKraft Docs',
  description:
    'Add comments and feedback to your blog or article pages with Comment Chaos. Customize themes, moderate comments, and manage all conversations from one dashboard.',
  keywords: [
    'Comment Chaos widget',
    'comment widget for website',
    'blog comment system',
    'feedback collection tool',
    'comment moderation dashboard',
    'unlimited comment submissions',
    'best alternative to CommentBox',
    'website comment widget',
    'article comment system',
    'real-time comment moderation',
    'customizable comment box',
    'website engagement tools',
    'visitor feedback widget',
    'comment management system',
    'affordable comment widget',
  ],
  openGraph: {
    title: 'Comment Chaos Widget | WidgetKraft Docs',
    description:
      'Let visitors leave comments and feedback on your blog posts. Customize themes, moderate comments, and track engagement from a central dashboard.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <CommentChaosWidgetPage />
    </div>
  )
}

export default page