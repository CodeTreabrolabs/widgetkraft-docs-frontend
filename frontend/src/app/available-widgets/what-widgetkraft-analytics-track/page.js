import React from 'react';
import WhatWidgetKraftAnalyticsTrackPage from '@/comps/content/Widgets/WhatWidgetKraftAnalyticsTrackPage';

export const metadata = {
  title: 'What WidgetKraft Analytics Tracks | WidgetKraft Docs',
  description:
    'Learn what WidgetKraft Visitor Tracker collects by default, how custom events work, and how privacy-first design keeps visitor data under your control.',
  keywords: [
    'WidgetKraft analytics',
    'visitor tracker',
    'what we track',
    'custom events',
    'privacy first analytics',
    'website visitor tracking',
    'anonymous visitor sessions',
    'page visit tracking',
    'session duration',
    'referrer tracking',
    'device analytics',
    'lightweight analytics script',
    'SPA analytics',
    'product analytics',
    'event tracking',
  ],
  openGraph: {
    title: 'What WidgetKraft Analytics Tracks | WidgetKraft Docs',
    description:
      'Understand what WidgetKraft Visitor Tracker records, what it never collects, and how custom events help you measure what matters.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <WhatWidgetKraftAnalyticsTrackPage />
    </div>
  );
};

export default page;
