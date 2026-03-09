import React from 'react'
import SecurityPage from '@/comps/content/Documentation/SecurityPage'

export const metadata = {
  title: 'Security & Data Privacy | WidgetKraft Docs',
  description:
    'WidgetKraft respects your data and takes security seriously. Learn about our commitments to data ownership, privacy, and secure storage.',
  keywords: [
    'WidgetKraft security',
    'data privacy',
    'data ownership',
    'customer data',
    'data protection',
    'data isolation',
    'secure storage',
    'encryption',
    'access controls',
    'privacy policy',
    'terms of service',
    'no data selling',
    'data reuse policy',
    'account isolation',
    'data security',
    'widget security',
    'customer privacy',
    'GDPR compliance',
    'data handling',
    'privacy commitments',
    'secure platform',
    'data encryption at rest',
    'data encryption in transit',
  ],
  openGraph: {
    title: 'Security & Data Privacy | WidgetKraft Docs',
    description:
      'Your data belongs to you. Learn about WidgetKraft commitments to security, data ownership, and privacy protection.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <SecurityPage />
    </div>
  )
}

export default page