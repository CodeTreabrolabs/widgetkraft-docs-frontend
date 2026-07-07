import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsPrevNext,
} from '@/comps/docs-ui';

const getCommitmentsData = async () => [
  {
    title: 'Your Data Belongs to You.',
    description:
      'All data collected through your tools is entirely yours. We never claim ownership of customer data.',
  },
  {
    title: 'No Data Selling or Reuse',
    description:
      'We do not sell, share, or reuse customer data for any purpose outside of providing our service to you.',
  },
  {
    title: 'Isolated Accounts',
    description:
      "All interactions are isolated per account. Your customers' data never mixes with other accounts.",
  },
  {
    title: 'Secure Storage',
    description:
      'Industry-standard encryption and access controls protect your data at rest and in transit.',
  },
];

export default async function SecurityPage() {
  const commitments = await getCommitmentsData();

  return (
    <DocsPage articleClassName="tool-article">
      <DocsArticleHeader
        title="Security & Data Privacy"
        description="WidgetKraft respects your data and takes security seriously."
      />

      <DocsSection id="our-commitments" title="Our Commitments">
        <DocsCard>
          <div className="space-y-4">
            {commitments.map((commitment) => (
              <div key={commitment.title}>
                <h3 className="docs-h3 !mt-0 mb-2">{commitment.title}</h3>
                <p className="!mb-0">{commitment.description}</p>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>

      <DocsSection id="learn-more" title="Learn More">
        <DocsCard>
          <p className="!mb-0">
            For detailed information about how we handle data, please review our Privacy Policy and
            Terms of Service.
          </p>
        </DocsCard>
      </DocsSection>

      <DocsPrevNext
        prev={{ href: '/best-practices', label: 'Best Practices' }}
        next={{ href: '/', label: 'Back to Home' }}
      />
    </DocsPage>
  );
}
