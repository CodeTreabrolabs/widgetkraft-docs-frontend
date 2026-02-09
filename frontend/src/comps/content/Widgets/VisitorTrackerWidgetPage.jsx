import { Eye, CheckCircle, Sparkles, Settings, Code, Palette } from 'lucide-react';
import { HiMiniUserGroup } from "react-icons/hi2";

// This runs on the server (in real Next.js app)
const getWidgetData = () => {
  const widgetDetails = {
    title: 'Visitor Tracker Analysis',
    description:
      'The Visitor Tracker Widget allows you to monitor and analyze visitor activity on your website in real-time. Gain insights into user behavior and optimize your site for better engagement.',
    customizableFeatures: [
      'Real-time visitor tracking',
      'Customizable tracking parameters',
      'Integration with analytics tools',
      'Customizable widget appearance',
      'Data export options',
    ],
    creationSteps: [
      'Go to All Widgets → Visitor Tracker',
      'Click + Add Widget',
      'Go to My Widgets → Visitor Tracker',
      'Click Configure',
    ],
    screenshotCaption: "Screenshot: Dashboard Create Widget - Visitor Tracker Selection",
    pricing: '0.1 credit / visit',
  };

  return widgetDetails;
};

export default function VisitorTrackerWidgetPage() {
  const widgetDetails = getWidgetData();

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-black p-3 rounded-lg">
            <HiMiniUserGroup size={28} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">{widgetDetails.title}</h1>
        </div>
        <p className="text-lg text-gray-300">{widgetDetails.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-lg">
          <span className="text-blue-400 font-medium">Pricing:</span>
          <span className="text-white">{widgetDetails.pricing}</span>
        </div>
      </div>

      {/* What You Can Customize */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">You Can Fully Customize:</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {widgetDetails.customizableFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-300 mt-4 italic">
          Track visitor activity and gain actionable insights to improve your website.
        </p>
      </div>

      {/* Creating a Visitor Tracker Widget */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating a Visitor Tracker Widget</h2>
        <p className="text-gray-300 mb-4">To create a Visitor Tracker widget:</p>

        <ol className="text-gray-300 space-y-2 mb-6">
          {widgetDetails.creationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            <img src="/images/visitortracker/visitor-tracker-widget.png" alt="WidgetKraft: Creating a Visitor Tracker Widget - Dashboard Selection" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">{widgetDetails.screenshotCaption}</p>
          </div>

          <div className="text-center pt-2">
            <img src="/images/visitortracker/visitor-tracker-installed-widgets.png" alt="WidgetKraft: Creating a Visitor Tracker Widget - Configure & View Dashboard" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: My Widgets - Visitor Tracker Selection with Configure & View Dashboard</p>
          </div>
        </div>


        <p className="text-gray-300 mb-4">
          The visitor tracker editor provides real-time insights and customizable options to suit your needs.
        </p>

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded mb-6">
          <div className="flex gap-3">
            <Sparkles size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">✨ Real-Time Insights:</p>
              <p className="text-gray-300 text-sm">
                Monitor visitor activity as it happens and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Live Preview</h2>
        <p className="text-gray-300 mb-4">
          This is a placeholder preview for the Get Widget Tracker widget. When installed on your site, it records:
        </p>
        <ul className="text-gray-300 space-y-2 mb-6">
          <li>Visitor page views & click events</li>
          <li>Device, browser & timezone info</li>
          <li>IP address and timestamp</li>
        </ul>
        <p className="text-gray-300 italic pb-2">
          Data is visible in your analytics dashboard once installed.
        </p>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            <img src="/images/visitortracker/visitor-tracker-configuration.png" alt="WidgetKraft: Creating a Visitor Tracker Widget and Using It" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Visitor Tracker - Upload the site url, Click Save Visitor Config & just copy the code</p>
          </div>
        </div>
      </section>

      {/* Visitor Data Table Section */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Visitor Data Dashboard</h2>
        <p className="text-gray-300 mb-4">
          Filter visitor data by date and view detailed information about each visitor:
        </p>
        <div className="text-center">
          <img src="/images/visitortracker/visitor-tracker-dashboard-interface.png" alt="WidgetKraft: Visitor Tracker Dashboard Interface" className="mx-auto mb-3 rounded-lg shadow-lg" />
          <p className="text-gray-300 text-sm">Screenshot: Visitor Tracker - Upload the site url, Click Save Visitor Config & just copy the code</p>
        </div>
      </section>
    </div>
  );
}