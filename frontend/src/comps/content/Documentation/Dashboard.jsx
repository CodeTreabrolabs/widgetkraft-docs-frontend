import { BarChart3, Users, Package, TrendingUp, PieChart, Activity } from 'lucide-react';

// Server-side data fetching
const getDashboardData = async () => {
  // This would come from your database/API
  return {
    activeWidgets: 54,
    totalVisitors: 687,
    topWidget: {
      name: 'Get Widget Tracker',
      visits: 670,
      type: 'Track Visitors Widget'
    },
    deploymentsByType: [
      { type: 'Live Conversation', count: 20 },
      { type: 'Contact Form', count: 15 },
      { type: 'Chat Widget', count: 12 },
      { type: 'Track Visitors Widget', count: 5 },
      { type: 'Comment Box', count: 3 }
    ],
    summaryStats: {
      totalDeployments: 55,
      widgetTypes: 5,
      mostDeployed: 19,
      avgPerType: 11
    }
  };
};

export default async function DashboardPage() {
  const dashboardData = await getDashboardData();
  
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-3">Analytics Dashboard</h1>
        <p className="text-gray-400">Overview of all deployed widgets across the platform</p>
      </div>

      {/* Key Statistics */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <BarChart3 size={24} className="text-orange-500" />
          Key Statistics
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Active Widgets</h3>
                <p className="text-gray-400 text-sm">Widgets currently deployed</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">{dashboardData.activeWidgets}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Total Visitors</h3>
                <p className="text-gray-400 text-sm">All-time widget interactions</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">{dashboardData.totalVisitors}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Top Widget</h3>
                <p className="text-gray-400 text-sm">Most visited widget</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-white mb-1">{dashboardData.topWidget.name}</p>
                <p className="text-2xl font-bold text-orange-500">{dashboardData.topWidget.visits} visits</p>
                <p className="text-gray-400 text-sm">{dashboardData.topWidget.type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Widget Details */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <Activity size={24} className="text-purple-500" />
          Most Popular Widget Details
        </h2>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Widget Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Widget Name</p>
                  <p className="text-lg font-semibold text-white">{dashboardData.topWidget.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Widget Type</p>
                  <p className="text-lg font-semibold text-white">{dashboardData.topWidget.type}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Performance Metrics</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Visitor Count</p>
                  <p className="text-2xl font-bold text-orange-500">{dashboardData.topWidget.visits}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Percentage of Total Visitors</p>
                  <p className="text-lg font-semibold text-white">
                    {((dashboardData.topWidget.visits / dashboardData.totalVisitors) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployments by Widget Type */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <PieChart size={24} className="text-green-500" />
          Deployments by Widget Type
        </h2>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-400 mb-6">Number of deployments for each widget type across the platform</p>
          
          {/* Deployment Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Widget Type</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Deployment Count</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.deploymentsByType.map((item, index) => {
                  const percentage = ((item.count / dashboardData.summaryStats.totalDeployments) * 100).toFixed(1);
                  return (
                    <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-750">
                      <td className="py-3 px-4 text-white">{item.type}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className="text-white font-medium mr-3">{item.count}</span>
                          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                index === 0 ? 'bg-blue-500' : 
                                index === 1 ? 'bg-green-500' : 
                                index === 2 ? 'bg-orange-500' : 
                                index === 3 ? 'bg-purple-500' : 'bg-pink-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{percentage}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Summary Stats */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Summary Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-750 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">{dashboardData.summaryStats.totalDeployments}</p>
                <p className="text-gray-400 text-sm">Total Deployments</p>
              </div>
              <div className="bg-gray-750 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">{dashboardData.summaryStats.widgetTypes}</p>
                <p className="text-gray-400 text-sm">Widget Types</p>
              </div>
              <div className="bg-gray-750 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">{dashboardData.summaryStats.mostDeployed}</p>
                <p className="text-gray-400 text-sm">Most Deployed Type</p>
              </div>
              <div className="bg-gray-750 p-4 rounded-lg">
                <p className="text-2xl font-bold text-white mb-1">{dashboardData.summaryStats.avgPerType}</p>
                <p className="text-gray-400 text-sm">Average per Type</p>
              </div>
            </div>
            
            {/* Additional Context */}
            <div className="mt-6 text-gray-400 text-sm">
              <p><strong>Note:</strong> There are {dashboardData.summaryStats.widgetTypes} different widget types with a total of {dashboardData.summaryStats.totalDeployments} deployments.</p>
              <p>The most deployed widget type has {dashboardData.summaryStats.mostDeployed} instances, with an average of {dashboardData.summaryStats.avgPerType} deployments per widget type.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-6">Platform Overview</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">Widget Deployment</h3>
              <p className="text-gray-400">
                The platform currently has <strong className="text-white">{dashboardData.activeWidgets}</strong> active widgets deployed.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">Visitor Engagement</h3>
              <p className="text-gray-400">
                Total of <strong className="text-white">{dashboardData.totalVisitors}</strong> visitor interactions recorded across all widgets.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">Top Performer</h3>
              <p className="text-gray-400">
                "<strong className="text-white">{dashboardData.topWidget.name}</strong>" leads with <strong className="text-orange-500">{dashboardData.topWidget.visits} visits</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Interpretation */}
      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-3">📊 What This Data Means</h3>
        <div className="space-y-3 text-gray-300">
          <p><strong>Active Widgets (54):</strong> Number of widget instances currently deployed and active on websites.</p>
          <p><strong>Total Visitors (687):</strong> Total number of user interactions with widgets across all deployments.</p>
          <p><strong>Top Widget:</strong> The most engaged-with widget is "Get Widget Tracker" with 670 visits.</p>
          <p><strong>Deployments by Type:</strong> Shows distribution of widget types across the platform.</p>
          <p><strong>Widget Types (5):</strong> Number of different widget categories available.</p>
          <p><strong>Most Deployed (19):</strong> The widget type with the highest number of instances.</p>
          <p><strong>Average per Type (11):</strong> Average number of deployments per widget category.</p>
        </div>
      </div>
    </div>
  );
}