import { User, Package, Eye, TrendingUp, Calendar, Download } from 'lucide-react';

// Server-side data fetching
const getUserAnalyticsData = async () => {
  // This would come from your database/API for the logged-in user
  return {
    userStats: {
      totalWidgets: 12,
      totalVisitors: 245,
      activeWidgets: 8,
      conversionRate: '4.2%'
    },
    userWidgets: [
      { name: 'Contact Form Pro', type: 'Contact Form', deployments: 5, visitors: 120 },
      { name: 'AI Assistant', type: 'AI Chatbot', deployments: 3, visitors: 85 },
      { name: 'Live Support', type: 'Live Chat', deployments: 2, visitors: 40 },
      { name: 'Feedback Box', type: 'Comment Box', deployments: 1, visitors: 25 },
    ],
    recentActivity: [
      { date: 'Today', action: 'Deployed Contact Form Pro', widget: 'Contact Form' },
      { date: 'Yesterday', action: 'Updated AI Assistant settings', widget: 'AI Chatbot' },
      { date: 'Jan 5, 2026', action: 'Added new field to Feedback Box', widget: 'Comment Box' },
      { date: 'Jan 4, 2026', action: 'Viewed analytics report', widget: 'All Widgets' },
    ],
    monthlyVisitors: [45, 38, 52, 67, 72, 65, 58, 62, 75, 68, 72, 78]
  };
};

export default async function AnalyticsPage() {
  const analyticsData = await getUserAnalyticsData();
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Analytics</h1>
            <p className="text-gray-400">Overview of your widget deployments and performance</p>
          </div>
          <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      {/* User Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">My Widgets</h3>
            <Package className="text-blue-500" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">{analyticsData.userStats.totalWidgets}</p>
          <p className="text-gray-400 text-sm">Total widgets deployed</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">My Visitors</h3>
            <Eye className="text-green-500" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">{analyticsData.userStats.totalVisitors}</p>
          <p className="text-gray-400 text-sm">Total widget interactions</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Active Widgets</h3>
            <TrendingUp className="text-blue-600" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">{analyticsData.userStats.activeWidgets}</p>
          <p className="text-gray-400 text-sm">Currently active</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Conversion Rate</h3>
            <User className="text-purple-500" size={24} />
          </div>
          <p className="text-4xl font-bold text-white mb-2">{analyticsData.userStats.conversionRate}</p>
          <p className="text-gray-400 text-sm">Lead conversion average</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* My Widgets Performance */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">My Widgets Performance</h2>
          
          <div className="space-y-4">
            {analyticsData.userWidgets.map((widget, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-white">{widget.name}</p>
                  <p className="text-gray-400 text-sm">{widget.type}</p>
                </div>
                <div className="text-center mx-4">
                  <p className="text-2xl font-bold text-white">{widget.deployments}</p>
                  <p className="text-gray-400 text-xs">Deployments</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{widget.visitors}</p>
                  <p className="text-gray-400 text-xs">Visitors</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity & Visitor Trend */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-green-500" size={24} />
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
            </div>
            
            <div className="space-y-4">
              {analyticsData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-850 rounded-lg transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-gray-400 text-sm">{activity.widget}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visitor Trend */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Monthly Visitor Trend</h2>
            
            <div className="flex items-end h-48 gap-1 mb-4">
              {analyticsData.monthlyVisitors.map((visitors, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-orange-500 to-orange-600 rounded-t"
                    style={{ height: `${(visitors / 100) * 100}%` }}
                  ></div>
                  <span className="text-gray-400 text-xs mt-2">{index + 1}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Jan</span>
              <span>Mar</span>
              <span>Jun</span>
              <span>Sep</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}