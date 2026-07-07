import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsPrevNext,
} from '@/comps/docs-ui';

const getPracticesData = async () => [
  {
    title: 'Start Small',
    desc: 'Begin with one tool, not all at once. Test and understand its impact before adding more.',
  },
  {
    title: 'Strategic Placement',
    desc: 'Place tools where intent is highest: pricing pages, blog posts, contact pages.',
  },
  {
    title: 'Monitor Usage',
    desc: 'Keep an eye on credit usage before upgrading. Understand your patterns first.',
  },
  {
    title: 'Smart AI Usage',
    desc: 'Use AI chatbots only where automation adds real value, not everywhere.',
  },
  {
    title: 'Test Before Scaling',
    desc: 'Run experiments with different tool types to find what works for your audience.',
  },
  {
    title: 'Optimize Responses',
    desc: 'Review conversations regularly and improve your tool configurations based on feedback.',
  },
];

export default async function BestPracticesPage() {
  const practices = await getPracticesData();

  return (
    <DocsPage articleClassName="tool-article">
      <DocsArticleHeader
        title="Best Practices"
        description="Tips and strategies to get the most out of WidgetKraft."
      />

      <DocsSection id="practices" title="Recommended Practices">
        <div className="space-y-3">
          {practices.map((practice) => (
            <DocsCard key={practice.title}>
              <h3 className="docs-h3 !mt-0 mb-2">{practice.title}</h3>
              <p className="!mb-0">{practice.desc}</p>
            </DocsCard>
          ))}
        </div>
      </DocsSection>

      <DocsPrevNext
        prev={{ href: '/my-widgets', label: 'My Widgets' }}
        next={{ href: '/security-privacy', label: 'Security & Privacy' }}
      />
    </DocsPage>
  );
}
