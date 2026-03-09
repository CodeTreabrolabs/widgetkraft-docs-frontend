import React from 'react'
import IntegrationsPage from '@/comps/content/Documentation/IntegrationsPage'

export const metadata = {
  title: 'Integrations | WidgetKraft Docs',
  description:
    'Connect your WidgetKraft widgets with your favorite tools and platforms. Slack integration available now, Google Calendar coming soon—automate workflows and streamline operations.',
  keywords: [
    'WidgetKraft integrations',
    'Slack integration',
    'Google Calendar integration',
    'connect widgets to Slack',
    'Slack notifications',
    'calendar sync',
    'widget automation',
    'team notifications',
    'real-time alerts',
    'communication tools',
    'productivity tools',
    'workflow automation',
    'Slack channel integration',
    'event scheduling',
    'widget notifications',
    'integration dashboard',
    'third-party integrations',
    'app connections',
    'Slack bot',
    'Google Calendar sync',
    'automated workflows',
    'team collaboration',
    'widget events',
  ],
  openGraph: {
    title: 'Integrations | WidgetKraft Docs',
    description:
      'Connect your widgets with Slack, Google Calendar, and more. Automate workflows, get real-time notifications, and streamline your operations.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <IntegrationsPage />
    </div>
  )
}

export default page