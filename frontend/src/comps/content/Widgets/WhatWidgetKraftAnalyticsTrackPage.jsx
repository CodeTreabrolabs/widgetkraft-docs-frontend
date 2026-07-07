import { XCircle } from 'lucide-react';
import {
  ToolPage,
  ToolHeader,
  SectionHeading,
  FeatureCard,
  InfoCard,
  SummaryCard,
} from './ToolArticle';

export default function WhatWidgetKraftAnalyticsTrackPage() {
  const defaultTrackedItems = [
    'Page visits',
    'Page URLs',
    'Visit timestamps',
    'Session duration',
    'Browser information',
    'Operating system',
    'Device type (Desktop, Mobile, Tablet)',
    'Screen resolution',
    'Referrer',
    'Country and timezone',
    'Anonymous visitor sessions',
  ];

  const customEventExamples = [
    'Button clicks',
    'Sign ups',
    'Login events',
    'Purchases',
    'Checkout started',
    'Checkout completed',
    'Subscription started',
    'Subscription renewed',
    'Subscription cancelled',
    'Form submissions',
    'Video plays',
    'Downloads',
    'Feature usage',
  ];

  const lightweightFeatures = [
    'Lightweight script',
    'Loads asynchronously',
    'Works with any website',
    'Supports Single Page Applications',
    'No backend integration required',
    'Starts tracking in minutes',
  ];

  const privacyExclusions = [
    "Read your website's source code",
    'Scan your HTML for sensitive information',
    'Capture passwords or payment details',
    'Record keystrokes',
    'Record screen sessions',
    'Read form input values',
    'Access cookies from other services',
  ];

  return (
    <ToolPage>
      <ToolHeader
        icon={() => null}
        title="Understand How Visitors Use Your Website Without Invading Their Privacy"
        description="WidgetKraft Visitor Tracker gives you real-time visitor insights and custom event tracking through a single lightweight script. See what matters and improve your website with confidence."
      />

      <section className="mb-10">
        <SectionHeading eyebrow="Visitor Tracker" title="What We Track" description="The core default data points and optional custom events." />
        <FeatureCard title="By default, WidgetKraft tracks" items={defaultTrackedItems} />
        <InfoCard title="You can also send custom events" className="mt-4">
          <ul className="space-y-1 pl-4" style={{ listStyle: 'disc' }}>
            {customEventExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading title="Custom events built for developers" description="Track exactly what matters to your product." />
        <InfoCard title="Why this matters">
          Not every business measures success the same way. You can send events from anywhere in your application and keep your tracking aligned to the actions that matter most.
        </InfoCard>
      </section>

      <section className="mb-10">
        <SectionHeading title="Privacy first by design" description="Understand behavior without invasive collection." />
        <div className="grid gap-2.5 sm:grid-cols-2">
          {privacyExclusions.map((item) => (
            <InfoCard key={item} icon={XCircle}>
              {item}
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <SectionHeading title="Lightweight and fast" description="Keep tracking lean and easy to deploy." />
        <FeatureCard title="Implementation benefits" items={lightweightFeatures} note="Install one script and start seeing visitor activity immediately." />
      </section>

      <SummaryCard
        intro="This visitor tracking setup helps you:"
        points={[
          'See how people use your site in real time',
          'Track important product or conversion events',
          'Keep setup fast and lightweight',
          'Avoid invasive data collection patterns',
          'Own and isolate your analytics data',
          'Make product decisions with clearer usage insight',
        ]}
      />
    </ToolPage>
  );
}