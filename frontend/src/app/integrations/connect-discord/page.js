import React from 'react'
import DiscordIntegrationGuidePage from '@/comps/content/Integrations/DiscordIntegration'

export const metadata = {
  title: 'Discord Integration Guide | WidgetKraft Docs',
  description:
    'Connect your WidgetKraft widgets to Discord and receive real-time notifications in your server. Route chat messages, form submissions, feedback, and more directly to your Discord channels.',
  keywords: [
    'Discord integration',
    'Discord notifications',
    'Discord bot setup',
    'widget notifications Discord',
    'real-time Discord alerts',
    'connect Discord to website',
    'Discord guild integration',
    'Discord channel notifications',
    'Discord OAuth setup',
    'Discord bot authorization',
    'WidgetKraft Discord',
    'team notifications Discord',
    'customer support Discord',
    'feedback notifications Discord',
    'form submission Discord alert',
    'live chat Discord integration',
    'Discord server notifications',
    'widget activity alerts',
    'Discord guild selector',
    'WidgetKraft integrations',
    'instant Discord notifications',
  ],
  openGraph: {
    title: 'Discord Integration Guide | WidgetKraft Docs',
    description:
      'Connect your widgets to Discord and receive real-time notifications in your server channels. Step-by-step guide for OAuth setup, guild connection, bot authorization, and per-widget channel routing.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <DiscordIntegrationGuidePage />
    </div>
  )
}

export default page