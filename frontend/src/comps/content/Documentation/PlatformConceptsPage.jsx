import Link from 'next/link';

// This runs on the server
const getConceptsData = async () => {
  const concepts = [
    {
      title: 'Widgets',
      description:
        'Widgets are embeddable components you place on your website. Each widget solves a specific interaction use case.',
      details: [
        'Live Conversation',
        'AI Chatbot',
        'Contact Form',
        'Comment Box',
        'Visitor Tracker',
        'AI Meet Scheduler (paid plans)',
      ],
    },
    {
      title: 'Widget Instances',
      description:
        'A widget instance is a deployed version of a widget on your website.',
      details: [
        '1 Live Chat on Homepage',
        '1 Contact Form on Contact Page',
      ],
    },
    {
      title: 'Credits',
      description:
        'WidgetKraft uses a credit-based usage system to keep pricing fair and predictable.',
      details: [
        'A chat message is sent',
        'A form submission occurs',
        'A meeting is booked',
        'A visitor event is tracked',
      ],
    },
    {
      title: 'Dashboard',
      description:
        'The dashboard is your control center where you can:',
      details: [
        'View all widget activity',
        'Respond to conversations',
        'Export leads and submissions',
        'Track credit usage',
        'Manage plans and billing',
      ],
    },
  ];

  return concepts;
};

export default async function PlatformConceptsPage() {
  const concepts = await getConceptsData();
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Platform Concepts</h1>
      <p className="text-lg text-gray-300 mb-8">
        Understanding these core concepts will help you use WidgetKraft efficiently.
      </p>

      {concepts.map((concept, idx) => (
        <div
          key={idx}
          className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-blue-600"
        >
          <h2 className="text-2xl font-semibold mb-3 text-white">{concept.title}</h2>
          <p className="text-gray-300 mb-4">{concept.description}</p>
          <ul className="text-gray-300 space-y-1">
            {concept.details.map((detail, detailIdx) => (
              <li key={detailIdx}>• {detail}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex gap-4">
        <Link
          href="/introduction"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/available-widgets"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Next: Available Widgets →
        </Link>
      </div>
    </div>
  );
}