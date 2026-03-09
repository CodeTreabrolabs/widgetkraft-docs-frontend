import React from 'react'
import MyWidgetsPage from '@/comps/content/Documentation/MyWidgets'

export const metadata = {
  title: 'My Widgets | WidgetKraft Docs',
  description:
    'Manage and monitor all your deployed widgets in one place. View status, performance stats, widget IDs, and access configuration dashboards for each widget instance.',
  keywords: [
    'My Widgets',
    'widget management',
    'active widgets',
    'widget dashboard',
    'widget performance',
    'widget statistics',
    'widget configuration',
    'deployed widgets',
    'widget instances',
    'live chat widgets',
    'contact form widgets',
    'comment box widgets',
    'visitor tracker widgets',
    'widget monitoring',
    'widget analytics',
    'widget IDs',
    'widget status',
    'widget engagement metrics',
    'conversation stats',
    'form submissions',
    'visitor tracking data',
    'widget overview',
    'manage website widgets',
  ],
  openGraph: {
    title: 'My Widgets | WidgetKraft Docs',
    description:
      'View and manage all your deployed widgets. Monitor performance stats, access configuration panels, and track engagement metrics for each widget instance.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <MyWidgetsPage />
    </div>
  )
}

export default page