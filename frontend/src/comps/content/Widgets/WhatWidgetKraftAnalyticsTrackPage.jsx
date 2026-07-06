import Link from 'next/link';
import { CheckCircle, XCircle } from 'lucide-react';

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
    'Referrer (where visitors came from)',
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
    'Any event that matters to your business',
  ];

  const privacyExclusions = [
    "Read your website's source code",
    'Scan your HTML for sensitive information',
    'Capture passwords or payment details',
    'Record keystrokes',
    'Record screen sessions',
    'Read form input values',
    'Access cookies from other services',
    'Collect personal information unless you explicitly send it as part of a custom event',
  ];

  const lightweightFeatures = [
    'Lightweight script',
    'Loads asynchronously',
    'Works with any website',
    'Supports Single Page Applications (SPAs)',
    'No backend integration required',
    'Starts tracking in minutes',
  ];

  const productQuestions = [
    'Which pages get the most traffic?',
    'Which buttons are people clicking?',
    'Where do visitors leave?',
    'How many users start checkout?',
    'How many complete a purchase?',
    'Which features are actually being used?',
    'What actions lead to conversions?',
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Visitor Tracker</h1>
      <p className="text-xl text-gray-200 mb-6">
        Understand How Visitors Use Your Website Without Invading Their Privacy
      </p>

      <p className="text-lg text-gray-300 mb-4">
        Knowing how visitors interact with your website helps you build better products, improve
        conversions, and make smarter decisions.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        WidgetKraft Visitor Tracker gives you real-time visitor insights and custom event tracking
        through a single lightweight script. No complex setup. No dashboards filled with hundreds of
        confusing metrics.
      </p>
      <p className="text-lg text-gray-300 mb-8">
        See what matters, understand visitor behavior, and improve your website with confidence.
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">What We Track</h2>
        <p className="text-gray-300 mb-4">Our Visitor Tracker is built to answer one simple question:</p>
        <p className="text-gray-200 italic mb-6">&quot;How are people using my website?&quot;</p>
        <p className="text-gray-300 mb-4">By default, WidgetKraft tracks:</p>
        <ul className="text-gray-300 space-y-2 mb-6">
          {defaultTrackedItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 mb-4">
          You can also send your own custom events to track important actions on your website.
        </p>
        <p className="text-gray-300 mb-4">Examples include:</p>
        <ul className="text-gray-300 space-y-2 mb-4">
          {customEventExamples.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="text-gray-300">
          With custom events, you decide what is important to measure.
        </p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">Custom Events Built for Developers</h2>
        <p className="text-gray-300 mb-4">Not every business measures success the same way.</p>
        <p className="text-gray-300 mb-4">
          That&apos;s why WidgetKraft lets you send custom events from anywhere in your application
          using a single function.
        </p>
        <p className="text-gray-300 mb-4">
          Whether you&apos;re building with HTML, React, Next.js, Vue, Angular, or any other
          framework, you can track exactly what matters to your product.
        </p>
        <p className="text-gray-300 mb-2">No vendor lock-in.</p>
        <p className="text-gray-300 mb-2">No complicated SDK.</p>
        <p className="text-gray-300">Just one function call.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Privacy First by Design</h2>
        <p className="text-gray-300 mb-6">
          We built the Visitor Tracker to understand visitor behavior, not to spy on your users.
        </p>
        <p className="text-gray-300 mb-4 font-semibold">WidgetKraft does not:</p>
        <ul className="text-gray-300 space-y-2 mb-6">
          {privacyExclusions.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 mb-4">
          Our tracking script isn&apos;t built to inspect your application&apos;s data. Its only job
          is to record visitor activity and the custom events that you choose to send.
        </p>
        <p className="text-gray-300 mb-4">
          If you never send personal information through a custom event, WidgetKraft never receives
          it.
        </p>
        <p className="text-gray-300">Simple.</p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">Lightweight and Fast</h2>
        <p className="text-gray-300 mb-4">
          The Visitor Tracker is designed to have minimal impact on your website.
        </p>
        <ul className="text-gray-300 space-y-2 mb-6">
          {lightweightFeatures.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300">
          Install one script and start seeing visitor activity immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Built for Product Teams</h2>
        <p className="text-gray-300 mb-4">
          Whether you&apos;re launching a startup, running a SaaS product, or managing a marketing
          website, Visitor Tracker helps you answer questions like:
        </p>
        <ul className="text-gray-300 space-y-2 mb-6">
          {productQuestions.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="text-gray-300">
          Instead of guessing, you&apos;ll have real data to guide your decisions.
        </p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">Your Data Stays Yours</h2>
        <p className="text-gray-300 mb-4">
          Every event is stored securely and isolated to your WidgetKraft account.
        </p>
        <p className="text-gray-300 mb-2">We never sell your data.</p>
        <p className="text-gray-300 mb-2">We never share your visitor data with third parties.</p>
        <p className="text-gray-300 mb-4">We never use your analytics to train AI models.</p>
        <p className="text-gray-300">Your website. Your visitors. Your data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Get Started in Minutes</h2>
        <p className="text-gray-300 mb-4">
          Add one script to your website, define the events you care about, and start understanding
          how visitors interact with your product.
        </p>
        <p className="text-gray-300 mb-2">No complicated analytics setup.</p>
        <p className="text-gray-300 mb-2">No unnecessary tracking.</p>
        <p className="text-gray-300">
          Just clear insights into what your users are doing.
        </p>
      </section>

      <div className="flex gap-4">
        <Link
          href="/available-widgets/visitor-tracker-analysis"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Back to Visitor Tracker
        </Link>
      </div>
    </div>
  );
}
