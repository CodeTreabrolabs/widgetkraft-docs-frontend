import React from 'react'
import SlackIntegrationGuidePage from '@/comps/content/Integrations/SlackIntegration'

export const metadata = {
  title: 'Slack Integration Guide | WidgetKraft Docs',
  description:
    'Connect your WidgetKraft widgets to Slack and receive real-time notifications for chat messages, feedback submissions, form completions, and more—directly in your Slack channels.',
  keywords: [
    'Slack integration',
    'Slack notifications',
    'widget notifications',
    'real-time alerts',
    'Slack channel integration',
    'connect Slack to website',
    'Slack webhook',
    'team notifications',
    'Slack workspace integration',
    'public channel notifications',
    'private channel integration',
    'widget activity alerts',
    'customer support Slack',
    'feedback notifications',
    'form submission alerts',
    'live chat Slack integration',
    'Slack bot setup',
    'WidgetKraft integrations',
    'team collaboration tool',
    'Slack messaging',
    'instant notifications',
  ],
  openGraph: {
    title: 'Slack Integration Guide | WidgetKraft Docs',
    description:
      'Connect your widgets to Slack and receive real-time notifications in your channels. Step-by-step guide for public and private channel integration.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <SlackIntegrationGuidePage />
    </div>
  )
}

export default page