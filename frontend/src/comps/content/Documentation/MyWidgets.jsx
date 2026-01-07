import { Package, Activity, Settings, Eye, MessageSquare, FileText, Users } from 'lucide-react';

// Server-side data fetching
const getUserWidgetsData = async () => {
  // This would come from your database/API for the logged-in user
  return {
    userWidgets: [
      {
        id: 1,
        name: 'BabyDora Live Chat',
        status: 'Active',
        widgetId: '10:16:55:53 52/76',
        type: 'Live Chat',
        description: 'A real-time support widget that lets you chat instantly with your website visitors, answer their questions, and boost conversions, all from one place.',
        icon: MessageSquare,
        stats: {
          conversations: 125,
          responseTime: '2.3 min',
          satisfaction: '94%'
        }
      },
      {
        id: 2,
        name: 'Content Box',
        status: 'Active',
        widgetId: '10:03:23:38 29/19',
        type: 'Comment Box',
        description: 'A simple, customizable widget that lets visitors leave comments, share feedback, and engage directly on your website blog/Article Section.',
        icon: FileText,
        stats: {
          comments: 42,
          engagement: '67%',
          spamBlocked: 8
        }
      },
      {
        id: 3,
        name: 'Inurek Live Chat',
        status: 'Active',
        widgetId: '10:5/7:44:42 2000',
        type: 'Live Chat',
        description: 'A real-time support widget that lets you chat instantly with your website visitors, answer their questions, and boost conversions, all from one place.',
        icon: MessageSquare,
        stats: {
          conversations: 89,
          responseTime: '3.1 min',
          satisfaction: '87%'
        }
      },
      {
        id: 4,
        name: 'My Demo Live Chat',
        status: 'Active',
        widgetId: '10:6/8:27:3 4/18',
        type: 'Live Chat',
        description: 'A real-time support widget that lets you chat instantly with your website visitors, answer their questions, and boost conversions, all from one place.',
        icon: MessageSquare,
        stats: {
          conversations: 56,
          responseTime: '1.8 min',
          satisfaction: '96%'
        }
      },
      {
        id: 5,
        name: 'Contact Form',
        status: 'Active',
        widgetId: '10:eec56e 62a3',
        type: 'Contact Form',
        description: 'Design the contact form exactly how you need it. Go live and start engaging users instantly.',
        icon: Activity,
        stats: {
          submissions: 234,
          conversion: '12%',
          avgFields: 5
        }
      },
      {
        id: 6,
        name: 'Get Widget Tracker',
        status: 'Active',
        widgetId: '10:o4ea38 ae9fe',
        type: 'Visitor Tracker',
        description: 'A lightweight widget that tracks and logs every visitor\'s activity on your website — including time, page visits, browser, and location.',
        icon: Users,
        stats: {
          visitors: 1567,
          avgTime: '4:32 min',
          pagesView: 6.2
        }
      }
    ],
    summary: {
      totalWidgets: 6,
      activeWidgets: 6,
      widgetTypes: 4,
      totalInteractions: 2113
    }
  };
};

export default async function MyWidgetsPage() {
  const widgetsData = await getUserWidgetsData();
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Package size={32} className="text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-white">My Widgets</h1>
            <p className="text-gray-400">Manage and monitor your active widgets</p>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="mt-10 bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">About My Widgets Section</h2>
        
        <div className="space-y-4 text-gray-300">
          <p>
            <strong>Purpose:</strong> This section displays all widgets that you have installed and deployed on your website(s).
          </p>
          
          <div>
            <p className="font-medium text-white mb-2">What you can do here:</p>
            <ul className="space-y-2 ml-5 list-disc">
              <li><strong>View Active Widgets:</strong> See all your currently deployed widgets with their status</li>
              <li><strong>Monitor Performance:</strong> Check real-time stats for each widget (conversations, submissions, visits, etc.)</li>
              <li><strong>Configure Widgets:</strong> Click "Configure" to modify widget settings, appearance, and behavior</li>
              <li><strong>Access Dashboard:</strong> Click "View Dashboard" to see detailed analytics for that specific widget</li>
            </ul>
          </div>

          <div className="text-center">
            <img src="/images/captures/my-widgets.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Theme Presets & Color Customization</p>
          </div>
          
          <div>
            <p className="font-medium text-white mb-2">Widget Information Displayed:</p>
            <ul className="space-y-2 ml-5 list-disc">
              <li><strong>Widget Name:</strong> Your custom name for the widget</li>
              <li><strong>Status:</strong> Whether the widget is active/inactive</li>
              <li><strong>Widget ID:</strong> Unique identifier for the widget instance</li>
              <li><strong>Type:</strong> Category of widget (Live Chat, Contact Form, etc.)</li>
              <li><strong>Description:</strong> Brief explanation of what the widget does</li>
              <li><strong>Performance Stats:</strong> Key metrics showing widget engagement</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="font-medium text-white mb-2">💡 How to Use This Section:</p>
            <ol className="space-y-2 ml-5 list-decimal">
              <li>Browse through your deployed widgets to see which ones are active</li>
              <li>Check performance stats to identify well-performing widgets</li>
              <li>Use "Configure" to adjust widget settings if needed</li>
              <li>Click "View Dashboard" for detailed analytics of specific widgets</li>
              <li>Monitor widget IDs for reference when contacting support</li>
            </ol>
          </div>
          
          <p className="text-gray-400 text-sm italic">
            Each widget represents an instance deployed on your website. You can have multiple widgets of the same type (like multiple Live Chat widgets) for different sections or purposes.
          </p>
        </div>
      </div>
    </div>
  );
}