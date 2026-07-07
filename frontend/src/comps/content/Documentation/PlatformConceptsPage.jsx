import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsPrevNext,
} from '@/comps/docs-ui';

const getConceptsData = async () => [
  {
    title: 'Widgets',
    description:
      'Widgets are embeddable components you place on your website. Each widget solves a specific interaction use case.',
    details: [
      'AI Chatbot',
      'AI Meet Scheduler (Coming Soon)',
      'Comment Chaos',
      'Contact Form',
      'Feedback Loop',
      'Live Conversation',
      'Know Your Visitor',
    ],
  },
  {
    title: 'Widget Instances',
    description: 'A widget instance is a deployed version of a widget on your website.',
    details: ['1 Live Chat on Homepage', '1 Contact Form on Contact Page'],
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
    description: 'The dashboard is your control center where you can:',
    details: [
      'View all widget activity',
      'Respond to conversations',
      'Export leads and submissions',
      'Track credit usage',
      'Manage plans and billing',
    ],
  },
];

export default async function PlatformConceptsPage() {
  const concepts = await getConceptsData();

  return (
    <DocsPage>
      <DocsArticleHeader
        title="Platform Concepts"
        description="Understanding these core concepts will help you use WidgetKraft efficiently."
      />

      {concepts.map((concept, idx) => (
        <DocsSection
          key={concept.title}
          id={concept.title.toLowerCase().replace(/\s+/g, '-')}
          title={concept.title}
          className={idx === 0 ? '!mt-0' : ''}
        >
          <DocsCard>
            <p className="mb-4">{concept.description}</p>
            <ul className="!mb-0">
              {concept.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </DocsCard>
        </DocsSection>
      ))}

      <DocsPrevNext
        prev={{ href: '/introduction', label: 'Introduction' }}
        next={{ href: '/available-widgets', label: 'Available Widgets' }}
      />
    </DocsPage>
  );
}
