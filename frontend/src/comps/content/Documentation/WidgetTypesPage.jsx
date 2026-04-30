import Link from 'next/link';

// This runs on the server
const getWidgetsData = async () => {
  const widgets = [
    {
      name: 'AI Chatbot',
      desc: 'Automates responses to common questions using AI.',
      useCases: ['FAQs', 'Basic lead qualification', 'After-hours support'],
      features: ['Custom instructions', 'Controlled AI usage via credits', 'Insert business-specific info with custom urls', 'See all chat history'],
      link: 'available-widgets/ai-chatbot-widget',
      image: '/images/widgettypes/wtype-1.png', // Replace with your actual image path
    },
    // {
    //   name: 'AI Meet Scheduler (Coming Soon)',
    //   desc: 'Allows visitors to book meetings directly from your website.',
    //   useCases: ['Sales calls', 'Consultations', 'Support scheduling'],
    //   features: ['Calendar integration', 'AI-assisted scheduling', 'High-intent lead capture'],
    //   image: '/images/widgettypes/meet-scheduler.png',
    // },
    {
      name: 'Comment Chaos',
      desc: 'Embed comments directly into blog posts or content pages.',
      useCases: ['Blog engagement', 'Community discussions', 'Feedback collection'],
      features: ['Moderation controls', 'Immediate alerts', 'Centralized comment management'],
      link: 'available-widgets/comment-chaos',
      image: '/images/widgettypes/wtype-2.png',
    },
    {
      name: 'Contact Forms',
      desc: 'Collect structured leads directly from your site.',
      useCases: ['Contact requests', 'Demo inquiries', 'Service quotations'],
      features: ['Custom fields', 'CSV export (paid plans)', 'Email notifications', 'Slack & Discord Notifications', 'API access for CRM integration (paid plans)'],
      link: 'available-widgets/contactform-widget',
      image: '/images/widgettypes/wtype-3.png',
    },
    {
      name: 'Feedback Loop',
      desc: 'Feedback Loop is a Widget that lets your users share feedback, ideas, and issues directly from your website, helping you capture real insights without breaking their experience.',
      useCases: ['Collect early user feedback', 'Gather feature requests', 'Report bugs and usability issues'],
      features: ['Moderation controls', 'Categorized Feedback', 'Centralized feedback management', 'Email notifications', 'Slack & Discord Notifications',],
      link: 'available-widgets/feedback-loop',
      image: '/images/widgettypes/wtype-4.png',
    },
    {
      name: 'Live Conversation',
      desc: 'Allows real-time chat between visitors and your team.',
      useCases: ['Sales inquiries', 'Support questions', 'Pre-purchase clarifications'],
      features: ['Real-time chat', 'Email capture (paid plans)', 'Conversation history', 'Team responses from dashboard', 'Email notifications', 'Slack & Discord notifications'],
      link: 'available-widgets/live-conversation',
      image: '/images/widgettypes/wtype-6.png',
    },
    {
      name: 'Know Your Visitors',
      desc: 'Track website visitors without complex analytics dashboards.',
      useCases: ['Traffic awareness', 'Advanced visitor insights', 'Device breakdowns'],
      features: ['Lightweight tracking', 'No setup complexity', 'Credit-efficient events'],
      link: 'available-widgets/visitor-tracker-analysis',
      image: '/images/widgettypes/wtype-5.png',
    },
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
              {/* Two-column layout: info left, image right */}
              <div className="flex gap-6">
                {/* Left column: text content */}
                <div className="flex-1 flex flex-col">
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

                  <div className="mb-6">
                    <h3 className="font-semibold text-white mb-2">Key Features:</h3>
                    <ul className="text-gray-300 space-y-1">
                      {widget.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn more pinned to bottom of left column */}
                  {widget?.link && (
                    <div className="mt-auto">
                      <Link href={widget.link}>
                        <span className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                          Learn more →
                        </span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right column: image */}
                <div className="w-120 flex-shrink-0">
                  <div className="w-full h-full min-h-[220px] rounded-lg overflow-hidde">
                    {widget.image ? (
                      <img
                        src={widget.image}
                        alt={`${widget.name} preview`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      /* Placeholder when no image is provided */
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                        No preview available
                      </div>
                    )}
                  </div>
                </div>
              </div>
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