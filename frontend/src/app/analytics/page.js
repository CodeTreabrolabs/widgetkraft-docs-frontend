import React from 'react'
import AnalyticsPage from '@/comps/content/Documentation/Dashboard'

export const metadata = {
  title: 'Analytics Dashboard | WidgetKraft Docs',
  description:
    'View key statistics for all deployed WidgetKraft widgets — active widgets, total visitor interactions, top-performing widgets, and deployment breakdowns by widget type.',
  keywords: [
    'WidgetKraft analytics',
    'widget dashboard',
    'visitor statistics',
    'widget deployments',
    'platform overview',
  ],
  openGraph: {
    title: 'Analytics Dashboard | WidgetKraft Docs',
    description:
      'Monitor active widgets, total visitors, and deployment data across the WidgetKraft platform.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <AnalyticsPage />
    </div>
  )
}

export default page