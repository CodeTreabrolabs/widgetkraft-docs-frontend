import { BarChart3, Users, Package, TrendingUp, PieChart, Activity } from 'lucide-react';
import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsStatCard,
} from '@/comps/docs-ui';

const getDashboardData = async () => ({
  activeWidgets: 54,
  totalVisitors: 687,
  topWidget: {
    name: 'Get Widget Tracker',
    visits: 670,
    type: 'Visitor Tracker Tool',
  },
  deploymentsByType: [
    { type: 'Live Conversation', count: 20 },
    { type: 'Contact Form', count: 15 },
    { type: 'AI Chat Tool', count: 12 },
    { type: 'Visitor Tracker Tool', count: 5 },
    { type: 'Comment Box', count: 3 },
  ],
  summaryStats: {
    totalDeployments: 55,
    toolTypes: 5,
    mostDeployed: 19,
    avgPerType: 11,
  },
});

export default async function DashboardPage() {
  const dashboardData = await getDashboardData();

  return (
    <DocsPage articleClassName="tool-article">
      <DocsArticleHeader
        title="Analytics Dashboard"
        description="Overview of all deployed tools across the platform"
      />

      <DocsSection id="key-statistics" title="Key Statistics">
        <div className="space-y-3">
          <DocsCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-[var(--docs-ink)]">Active Tools</h3>
                <p className="text-sm text-[var(--docs-stone)]">Tools currently deployed</p>
              </div>
              <p className="text-3xl font-bold text-[var(--docs-ink)]">{dashboardData.activeWidgets}</p>
            </div>
          </DocsCard>
          <DocsCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-[var(--docs-ink)]">Total Visitors</h3>
                <p className="text-sm text-[var(--docs-stone)]">All-time tool interactions</p>
              </div>
              <p className="text-3xl font-bold text-[var(--docs-ink)]">{dashboardData.totalVisitors}</p>
            </div>
          </DocsCard>
          <DocsCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-[var(--docs-ink)]">Top Tool</h3>
                <p className="text-sm text-[var(--docs-stone)]">{dashboardData.topWidget.type}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-[var(--docs-ink)]">{dashboardData.topWidget.name}</p>
                <p className="text-sm text-[var(--docs-accent)]">{dashboardData.topWidget.visits} visits</p>
              </div>
            </div>
          </DocsCard>
        </div>
      </DocsSection>

      <DocsSection id="deployments-by-type" title="Deployments by Type">
        <DocsCard>
          <div className="space-y-3">
            {dashboardData.deploymentsByType.map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <span className="text-[var(--docs-steel)]">{item.type}</span>
                <span className="font-semibold text-[var(--docs-ink)]">{item.count}</span>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>

      <DocsSection id="summary" title="Summary">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <DocsStatCard label="Total Deployments" value={dashboardData.summaryStats.totalDeployments} />
          <DocsStatCard label="Tool Types" value={dashboardData.summaryStats.toolTypes} />
          <DocsStatCard label="Most Deployed" value={dashboardData.summaryStats.mostDeployed} accent />
          <DocsStatCard label="Avg Per Type" value={dashboardData.summaryStats.avgPerType} />
        </div>
      </DocsSection>
    </DocsPage>
  );
}
