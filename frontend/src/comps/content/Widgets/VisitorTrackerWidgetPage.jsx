import { Sparkles } from 'lucide-react';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { VisitorCodes } from './Codes/VisitorCodes';
import { DocsButton } from '@/comps/docs-ui';
import {
  ToolPage,
  ToolHeader,
  FeatureCard,
  SectionHeading,
  Screenshot,
  Callout,
  SummaryCard,
  StepList,
} from './ToolArticle';

const tool = {
  title: 'Know Your Visitor Tool',
  description:
    'Monitor and analyze visitor activity on your website in real time. See how people move through your site and improve decisions with clearer usage signals.',
  customizableFeatures: [
    'Real-time visitor tracking',
    'Custom tracking parameters',
    'Analytics integrations',
    'Tool appearance settings',
    'Data export options',
  ],
  creationSteps: [
    'Go to All Tools -> Visitor Tracker',
    'Click + Add Tool',
    'Go to My Tools -> Visitor Tracker',
    'Click Configure',
  ],
  pricing: '0.1 credit / visit',
  currentPageUrl: 'https://docs.widgetkraft.com/available-widgets/visitor-tracker-analysis',
};

const summaryPoints = [
  'Track visits, sessions, and visitor activity in real time',
  'Keep setup lightweight with one script',
  'Send custom events for business-critical actions',
  'Review dashboards without complex analytics overhead',
  'See where visitors come from and how they behave',
  'Improve product and conversion decisions with clearer signals',
];

export default function VisitorTrackerWidgetPage() {
  return (
    <ToolPage>
      <p style={{ display: 'none' }}>{`Current Page URL: ${tool.currentPageUrl}`}</p>
      <ToolHeader icon={HiMiniUserGroup} title={tool.title} description={tool.description} pricing={tool.pricing} />

      <div className="mb-10 flex justify-center">
        <DocsButton href="/available-widgets/what-widgetkraft-analytics-track" variant="secondary">
          Know what it Tracks
        </DocsButton>
      </div>

      <FeatureCard items={tool.customizableFeatures} note="Track visitor activity and gain actionable insights to improve your website." />

      <VisitorCodes />

      <section className="mb-10">
        <SectionHeading title="Creating a Know Your Visitor tool" description="Four steps from the dashboard." />
        <StepList steps={tool.creationSteps} />
        <Screenshot src="/images/visitortracker/visitor-tracker-widget.png" alt="Creating Visitor Tracker tool" caption="Dashboard - creating a new Visitor Tracker tool" />
        <Screenshot src="/images/visitortracker/visitor-tracker-installed-widgets.png" alt="Visitor Tracker in My Tools" caption="My Tools - configure and open the Visitor Tracker dashboard" />
        <Callout icon={Sparkles} title="Real-time insights">
          Monitor visitor activity as it happens and make data-driven decisions faster.
        </Callout>
      </section>

      <section className="mb-10">
        <SectionHeading title="Live preview" description="What the tracker starts collecting once installed." />
        <ul className="mb-4 space-y-1 pl-4" style={{ listStyle: 'disc' }}>
          <li>Visitor page views and click events</li>
          <li>Device, browser, and timezone information</li>
          <li>Timestamp and related visit context</li>
        </ul>
        <Screenshot src="/images/visitortracker/visitor-tracker-configuration.png" alt="Visitor Tracker configuration" caption="Configuration panel and install flow" />
      </section>

      <section className="mb-10">
        <SectionHeading title="Visitor data dashboard" description="Review sessions and detailed visit activity." />
        <Screenshot src="/images/visitortracker/visitor-tracker-dashboard-interface.png" alt="Visitor Tracker dashboard" caption="Dashboard overview" />
        <Screenshot src="/images/visitortracker/visitor-tracker-dashboard-interface1.png" alt="Visitor Tracker dashboard detail" caption="Detailed visitor records and filters" />
      </section>

      <SummaryCard intro="The Know Your Visitor Tool lets you:" points={summaryPoints} />
    </ToolPage>
  );
}