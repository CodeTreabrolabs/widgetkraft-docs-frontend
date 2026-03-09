import React from 'react'
import PlansUsagePage from '@/comps/content/Documentation/PlansUsagePage'

export const metadata = {
  title: "Plans & Pricing | WidgetKraft",
  description: "Simple, credit-based pricing for all your widget needs. Choose from Free, Basic, Premium, or Business plans with flexible credits across all widgets.",
  keywords: [
    'WidgetKraft pricing',
    'credit-based pricing',
    'widget plans',
    'Free plan',
    'Basic plan',
    'Premium plan',
    'Business plan',
    'monthly credits',
    'live chat credits',
    'form submission credits',
    'visitor tracking credits',
    'AI chatbot credits',
    'comment submission credits',
    'unlimited credits',
    'unlimited widgets',
    'remove branding',
    'priority support',
    'data retention',
    'automated scraping',
    'Slack integration',
    'email notifications',
    'affordable website tools',
    'widget subscription',
    'pay as you grow',
    'startup pricing',
    'business pricing',
  ],
  openGraph: {
    title: "Plans & Pricing | WidgetKraft",
    description: "Simple, credit-based pricing. Choose any mix of widgets that fits your needs with plans starting at $0 forever.",
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <PlansUsagePage />
    </div>
  )
}

export default page