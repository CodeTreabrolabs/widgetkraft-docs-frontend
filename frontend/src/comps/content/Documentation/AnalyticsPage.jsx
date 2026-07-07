import { User, Package, Eye, TrendingUp, Calendar, Download } from 'lucide-react';
import {
  DocsPage,
  DocsArticleHeader,
  DocsSection,
  DocsCard,
  DocsStatCard,
  DocsButton,
} from '@/comps/docs-ui';

const getUserAnalyticsData = async () => ({
  userStats: {
    totalTools: 12,
    totalVisitors: 245,
    activeWidgets: 8,
    conversionRate: '4.2%',
  },
  userTools: [
    { name: 'Contact Form Pro', type: 'Contact Form', deployments: 5, visitors: 120 },
    { name: 'AI Assistant', type: 'AI Chatbot', deployments: 3, visitors: 85 },
    { name: 'Live Support', type: 'Live Chat', deployments: 2, visitors: 40 },
    { name: 'Feedback Box', type: 'Comment Box', deployments: 1, visitors: 25 },
  ],
  recentActivity: [
    { date: 'Today', action: 'Deployed Contact Form Pro', tool: 'Contact Form' },
    { date: 'Yesterday', action: 'Updated AI Assistant settings', tool: 'AI Chatbot' },
    { date: 'Jan 5, 2026', action: 'Added new field to Feedback Box', tool: 'Comment Box' },
    { date: 'Jan 4, 2026', action: 'Viewed analytics report', tool: 'All Tools' },
  ],
  monthlyVisitors: [45, 38, 52, 67, 72, 65, 58, 62, 75, 68, 72, 78],
});

export default async function AnalyticsPage() {
  const analyticsData = await getUserAnalyticsData();

  return (
    <DocsPage articleClassName="tool-article">
      <DocsArticleHeader
        title="My Analytics"
        description="Overview of your tool deployments and performance"
        actions={
          <DocsButton variant="primary">
            <Download size={16} />
            Export Report
          </DocsButton>
        }
      />

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <DocsStatCard label="My Tools" value={analyticsData.userStats.totalTools} hint="Total deployed" />
        <DocsStatCard label="My Visitors" value={analyticsData.userStats.totalVisitors} hint="Total interactions" accent />
        <DocsStatCard label="Active Tools" value={analyticsData.userStats.activeWidgets} hint="Currently active" />
        <DocsStatCard label="Conversion Rate" value={analyticsData.userStats.conversionRate} hint="Lead conversion" />
      </div>

      <DocsSection id="widget-performance" title="My Tools Performance">
        <DocsCard>
          <div className="space-y-3">
            {analyticsData.userTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--docs-radius-md)] border border-[var(--docs-hairline)] bg-[var(--docs-surface-soft)] p-4"
              >
                <div>
                  <p className="font-medium text-[var(--docs-ink)]">{tool.name}</p>
                  <p className="text-sm text-[var(--docs-stone)]">{tool.type}</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[var(--docs-ink)]">{tool.deployments}</p>
                  <p className="text-xs text-[var(--docs-stone)]">Deployments</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-[var(--docs-accent)]">{tool.visitors}</p>
                  <p className="text-xs text-[var(--docs-stone)]">Visitors</p>
                </div>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>

      <DocsSection id="recent-activity" title="Recent Activity">
        <DocsCard>
          <div className="space-y-3">
            {analyticsData.recentActivity.map((activity) => (
              <div key={activity.action} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-[var(--docs-ink)]">{activity.action}</p>
                  <p className="text-sm text-[var(--docs-stone)]">{activity.tool}</p>
                </div>
                <span className="text-sm text-[var(--docs-stone)]">{activity.date}</span>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>

      <DocsSection id="visitor-trend" title="Monthly Visitor Trend">
        <DocsCard>
          <div className="mb-4 flex h-40 items-end gap-1">
            {analyticsData.monthlyVisitors.map((visitors, index) => (
              <div key={index} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full rounded-t bg-[var(--docs-accent)]"
                  style={{ height: `${(visitors / 100) * 100}%` }}
                />
                <span className="mt-2 text-xs text-[var(--docs-stone)]">{index + 1}</span>
              </div>
            ))}
          </div>
        </DocsCard>
      </DocsSection>
    </DocsPage>
  );
}
