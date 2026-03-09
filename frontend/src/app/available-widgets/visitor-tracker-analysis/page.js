import React from 'react'
import VisitorTrackerWidgetPage from '@/comps/content/Widgets/VisitorTrackerWidgetPage'

export const metadata = {
  title: 'Know Your Visitor Widget | WidgetKraft Docs',
  description:
    'Track and analyze visitor activity on your website in real-time. Gain insights into user behavior, page views, device info, and more to optimize your site for better engagement.',
  keywords: [
    'Know Your Visitor widget',
    'visitor tracker',
    'website analytics',
    'real-time visitor tracking',
    'user behavior analytics',
    'visitor insights',
    'page view tracking',
    'click tracking',
    'device analytics',
    'browser tracking',
    'visitor data dashboard',
    'website traffic analysis',
    'visitor activity monitor',
    'analytics tool',
    'visitor tracking software',
    'best alternative to Google Analytics',
    'best alternative to Hotjar',
    'best alternative to Mixpanel',
    'affordable visitor tracker',
    'real-time analytics',
    'visitor IP tracking',
    'user engagement tool',
  ],
  openGraph: {
    title: 'Know Your Visitor Widget | WidgetKraft Docs',
    description:
      'Monitor visitor activity in real-time. Track page views, clicks, device info, and more to gain actionable insights and optimize your website.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <VisitorTrackerWidgetPage />
    </div>
  )
}

export default page