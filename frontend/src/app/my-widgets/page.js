import React from 'react'
import MyWidgetsPage from '@/comps/content/Documentation/MyWidgets'

export const metadata = {
  title: 'My Tools | WidgetKraft Docs',
  description:
    'Manage and monitor all your deployed tools in one place. View status, performance context, tool IDs, and access configuration dashboards for each instance.',
  keywords: [
    'My Tools',
    'tool management',
    'active tools',
    'tool dashboard',
    'tool performance',
    'tool configuration',
    'deployed tools',
    'tool instances',
    'tool analytics',
    'tool IDs',
    'tool status',
  ],
  openGraph: {
    title: 'My Tools | WidgetKraft Docs',
    description:
      'View and manage all your deployed tools. Monitor performance context, access configuration panels, and review engagement across instances.',
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
