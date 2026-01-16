import Link from 'next/link';

// This runs on the server
const getWidgetsData = async () => {
  const widgets = [
    {
      name: 'Live Conversation Widget',
      desc: 'Allows real-time chat between visitors and your team.',
      useCases: ['Sales inquiries', 'Support questions', 'Pre-purchase clarifications'],
      features: ['Real-time chat', 'Email capture (paid plans)', 'Conversation history', 'Team responses from dashboard'],
      link:  'available-widgets/live-conversation'
    },
    {
      name: 'AI Chatbot Widget',
      desc: 'Automates responses to common questions using AI.',
      useCases: ['FAQs', 'Basic lead qualification', 'After-hours support'],
      features: ['Custom instructions', 'Controlled AI usage via credits', 'Human takeover when needed'],
      link:  'available-widgets/ai-chatbot-widget'
    },
    {
      name: 'Contact Form Widget',
      desc: 'Collect structured leads directly from your site.',
      useCases: ['Contact requests', 'Demo inquiries', 'Service quotations'],
      features: ['Custom fields', 'CSV export (paid plans)', 'Email notifications (paid plans)'],
      link:  'available-widgets/contactform-widget'
    },
    {
      name: 'Comment Box Widget',
      desc: 'Embed comments directly into blog posts or content pages.',
      useCases: ['Blog engagement', 'Community discussions', 'Feedback collection'],
      features: ['Moderation controls', 'Spam reduction', 'Centralized comment management']
    },
    {
      name: 'Visitor Tracker Widget',
      desc: 'Track website visitors without complex analytics dashboards.',
      useCases: ['Traffic awareness', 'Basic visitor insights', 'Activity monitoring'],
      features: ['Lightweight tracking', 'No setup complexity', 'Credit-efficient events'],
      link:  'available-widgets/visitor-tracker-analysis'
    },
    {
      name: 'AI Meet Scheduler (Paid)',
      desc: 'Allows visitors to book meetings directly from your website.',
      useCases: ['Sales calls', 'Consultations', 'Support scheduling'],
      features: ['Calendar integration', 'AI-assisted scheduling', 'High-intent lead capture']
    }
  ];

  return widgets;
};

export default async function WidgetTypesPage() {
  const widgets = await getWidgetsData();
  
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Available Widget Types</h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore all available widget types and choose the right ones for your needs.
      </p>

      <div className="space-y-6">
        {widgets.map((widget, idx) => (
          <div key={idx} className="relative">
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3 text-white">{widget.name}</h2>
                <p className="text-gray-300 mb-4">{widget.desc}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-white mb-2">Use Cases:</h3>
                  <ul className="text-gray-300 space-y-1">
                    {widget.useCases.map((useCase, i) => (
                      <li key={i}>• {useCase}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Key Features:</h3>
                  <ul className="text-gray-300 space-y-1">
                    {widget.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {widget?.link && (
                <Link href={widget.link}>
                  <span className="absolute bottom-4 left-4 text-blue-600 hover:underline">Learn more</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <Link
          href="/platform-concepts"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          ← Previous
        </Link>
        <Link
          href="/plans-usage"
          className="px-6 py-3 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
        >
          Next: Plans & Usage →
        </Link>
      </div>
    </div>
  );
}