import Link from 'next/link';
import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsPrevNext,
} from '@/comps/docs-ui';

const getWidgetsData = async () => [
  {
    name: 'AI Chatbot',
    desc: 'Automates responses to common questions using AI.',
    useCases: ['FAQs', 'Basic lead qualification', 'After-hours support'],
    features: [
      'Custom instructions',
      'Controlled AI usage via credits',
      'Insert business-specific info with custom urls',
      'See all chat history',
    ],
    link: 'available-widgets/ai-chatbot-widget',
    image: '/images/widgettypes/wtype-1.png',
  },
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
    features: [
      'Custom fields',
      'CSV export (paid plans)',
      'Email notifications',
      'Slack & Discord Notifications',
      'API access for CRM integration (paid plans)',
    ],
    link: 'available-widgets/contactform-widget',
    image: '/images/widgettypes/wtype-3.png',
  },
  {
    name: 'Feedback Loop',
    desc: 'Feedback Loop is a Widget that lets your users share feedback, ideas, and issues directly from your website, helping you capture real insights without breaking their experience.',
    useCases: ['Collect early user feedback', 'Gather feature requests', 'Report bugs and usability issues'],
    features: [
      'Moderation controls',
      'Categorized Feedback',
      'Centralized feedback management',
      'Email notifications',
      'Slack & Discord Notifications',
    ],
    link: 'available-widgets/feedback-loop',
    image: '/images/widgettypes/wtype-4.png',
  },
  {
    name: 'Live Conversation',
    desc: 'Allows real-time chat between visitors and your team.',
    useCases: ['Sales inquiries', 'Support questions', 'Pre-purchase clarifications'],
    features: [
      'Real-time chat',
      'Email capture (paid plans)',
      'Conversation history',
      'Team responses from dashboard',
      'Email notifications',
      'Slack & Discord notifications',
    ],
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

export default async function WidgetTypesPage() {
  const widgets = await getWidgetsData();

  return (
    <DocsPage>
      <DocsArticleHeader
        title="Available Widget Types"
        description="Explore all available widget types and choose the right ones for your needs."
      />

      <div className="space-y-4">
        {widgets.map((widget) => (
          <DocsCard key={widget.name}>
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col">
                <h2 id={widget.name.toLowerCase().replace(/\s+/g, '-')} className="docs-h2 !mt-0">
                  {widget.name}
                </h2>
                <p className="mb-4">{widget.desc}</p>

                <h3 className="docs-h3 !mt-0">Use Cases</h3>
                <ul className="mb-4">
                  {widget.useCases.map((useCase) => (
                    <li key={useCase}>{useCase}</li>
                  ))}
                </ul>

                <h3 className="docs-h3 !mt-0">Key Features</h3>
                <ul className="mb-4">
                  {widget.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {widget.link && (
                  <div className="mt-auto">
                    <Link href={widget.link} className="docs-link-arrow">
                      Learn more →
                    </Link>
                  </div>
                )}
              </div>

              {widget.image && (
                <div className="w-full shrink-0 lg:w-72">
                  <img
                    src={widget.image}
                    alt={`${widget.name} preview`}
                    className="w-full rounded-[var(--docs-radius-md)] object-contain"
                  />
                </div>
              )}
            </div>
          </DocsCard>
        ))}
      </div>

      <DocsPrevNext
        prev={{ href: '/platform-concepts', label: 'Platform Concepts' }}
        next={{ href: '/my-widgets', label: 'My Widgets' }}
      />
    </DocsPage>
  );
}
