import { MessageCircle, Users, Clock, Eye, Settings, Code, Palette, Save, Copy, CheckCircle, AlertCircle, Mail, Sparkles } from 'lucide-react';
import { TiEdit } from 'react-icons/ti';

// Server-side data fetching (in a real app, this would fetch from your API/database)
const getFeedbackLoopWidgetData = () => {
  return {
    title: 'Feedback Loop',
    description: 'A customizable feedback collection widget that allows you to gather user insights through categorized feedback options, helping you understand what your customers need and improve your product continuously.',
    customizableFeatures: [
      'Widget header with title and subtitle',
      'Custom logo and branding options',
      'Feedback category buttons styling',
      'Message input field configuration',
      'Widget dimensions and positioning',
      'Color scheme and theme presets',
    ],
    creationSteps: [
      'Go to Available Widgets → Feedback Loop Widget',
      'Click Add Widget',
      'Go to My Widgets → Find Feedback Loop',
      'Click Configure & start customizing your widget',
    ],
    pricing: '1 credit / feedback submission',
    sampleWidgetId: 'ca99254a...f0f9a',
  };
};

export default function FeedbackLoopWidgetPage() {
  const widgetData = getFeedbackLoopWidgetData();
  
  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-lg">
            <TiEdit size={28} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">{widgetData.title}</h1>
        </div>
        <p className="text-lg text-gray-300">{widgetData.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-pink-900/30 px-4 py-2 rounded-lg">
          <span className="text-pink-400 font-medium">Pricing:</span>
          <span className="text-white">{widgetData.pricing}</span>
        </div>
      </div>

      {/* What You Can Customize */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">You Can Fully Customize:</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {widgetData.customizableFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Creating a Feedback Loop Widget */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating a Feedback Loop Widget</h2>
        <p className="text-gray-300 mb-4">To create a Feedback Loop widget:</p>
        
        <ol className="text-gray-300 space-y-2 mb-6">
          {widgetData.creationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/how-to-add-feedback-loop.png" alt="WidgetKraft: Dashboard showing how to activate Feedback Loop widget" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Navigate to widgets section and select Feedback Loop Widget</p>
          </div>
        </div>
      </section>

      {/* Understanding the Editor */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Understanding the Feedback Loop Editor</h2>
        <p className="text-gray-300 mb-4">
          The editor is divided into four main configuration tabs:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <MessageCircle size={32} className="text-pink-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Header</h3>
            <p className="text-gray-300 text-sm">Title, subtitle and branding</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Settings size={32} className="text-pink-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Input</h3>
            <p className="text-gray-300 text-sm">Message input configuration</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Palette size={32} className="text-pink-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Appearance</h3>
            <p className="text-gray-300 text-sm">Widget size and visual design</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Code size={32} className="text-pink-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Code</h3>
            <p className="text-gray-300 text-sm">Embed snippet</p>
          </div>
        </div>
      </section>

      {/* 1. Header Tab */}
      <section className="mb-6">
        <div className="border-l-4 border-pink-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">1. Header Tab</h2>
          <p className="text-gray-300">Controls the top section of your Feedback Loop widget including branding and messaging.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Configurable Elements</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Title</h4>
              <p className="text-gray-300 text-sm mb-1">Main heading displayed at the top of the widget</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "Feedback Widget"
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="rounded" />
                <span>Hide Title</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Subtitle</h4>
              <p className="text-gray-300 text-sm mb-1">Supporting text below the title</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "We value your feedback"
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Logo URL</h4>
              <p className="text-gray-300 text-sm mb-1">URL to your company logo or brand image</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-400 mt-2">
                https://example.com/logo.png
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Font Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded border border-gray-600"></div>
                <p className="text-gray-300 text-sm">Color for header text</p>
                <code className="text-xs text-gray-400 ml-auto">#FFFFFF</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#E11D48'}}></div>
                <p className="text-gray-300 text-sm">Header background color</p>
                <code className="text-xs text-gray-400 ml-auto">#E11D48</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Family</h4>
              <p className="text-gray-300 text-sm mb-2">Choose the typeface for header text</p>
              <select className="bg-gray-900 text-gray-300 px-3 py-2 rounded w-full border border-gray-700">
                <option>'Inter', sans-serif</option>
                <option>'Roboto', sans-serif</option>
                <option>'Open Sans', sans-serif</option>
                <option>'Poppins', sans-serif</option>
              </select>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Size</h4>
              <p className="text-gray-300 text-sm">Size of header text</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                16px
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/feedback-loop-widget-header-tab.png" alt="WidgetKraft: Feedback Loop header with custom title, subtitle, and color scheme" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Feedback Loop header with custom title, subtitle, and color scheme</p>
          </div>
        </div>
      </section>

      {/* 2. Input Tab */}
      <section className="mb-6">
        <div className="border-l-4 border-pink-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">2. Input Tab</h2>
          <p className="text-gray-300">Configure the message input area where users type their feedback.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Input Field Settings</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Placeholder Text</h4>
              <p className="text-gray-300 text-sm mb-1">Hint text shown in empty input field</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "Type your message..."
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded border border-gray-300"></div>
                <p className="text-gray-300 text-sm">Input field background color</p>
                <code className="text-xs text-gray-400 ml-auto">#FFFFFF</code>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Border Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-2" style={{borderColor: '#FDA4AF'}}></div>
                <p className="text-gray-300 text-sm">Color of input field border</p>
                <code className="text-xs text-gray-400 ml-auto">#FDA4AF</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Text Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#881337'}}></div>
                <p className="text-gray-300 text-sm">Color of text as user types</p>
                <code className="text-xs text-gray-400 ml-auto">#881337</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/feedback-loop-widget-input-tab.png" alt="WidgetKraft: Styled input field with custom colors and placeholder text" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Styled input field with custom colors and placeholder text</p>
          </div>
        </div>
      </section>

      {/* 3. Appearance Tab */}
      <section className="mb-6">
        <div className="border-l-4 border-pink-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">3. Appearance Tab</h2>
          <p className="text-gray-300">Control the overall widget dimensions, positioning, and visual style.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Widget Dimensions</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Width</h4>
              <p className="text-gray-300 text-sm">Control how wide the feedback widget appears</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                400px (min: 300px | max: 400px)
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Height</h4>
              <p className="text-gray-300 text-sm">Set the vertical size of feedback widget</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                600px (min: 450px | max: 600px)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Visual Styling</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Primary Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#E11D48'}}></div>
                <p className="text-gray-300 text-sm">Main accent color for buttons and highlights</p>
                <code className="text-xs text-gray-400 ml-auto">#E11D48</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded border border-gray-300"></div>
                <p className="text-gray-300 text-sm">Main widget area background color</p>
                <code className="text-xs text-gray-400 ml-auto">#FFFFFF</code>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Border Radius</h4>
              <p className="text-gray-300 text-sm">Roundness of widget corners</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                12px (max: 40px)
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Widget Position</h4>
              <p className="text-gray-300 text-sm mb-2">Choose where the widget appears on your page</p>
              <select className="bg-gray-900 text-gray-300 px-3 py-2 rounded w-full border border-gray-700">
                <option>top-right</option>
                <option>top-left</option>
                <option>bottom-right</option>
                <option>bottom-left</option>
              </select>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Branding</h4>
              <p className="text-gray-300 text-sm mb-3">Choose whether to display "Powered by WidgetKraft"</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input type="radio" name="branding" className="text-pink-500" defaultChecked />
                  <span>Show branding</span>
                </label>
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input type="radio" name="branding" className="text-pink-500" />
                  <span>Remove branding</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Theme Presets</h3>
          <p className="text-gray-300 mb-4">Quick-start with pre-designed themes:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            <div className="bg-gray-100 p-3 rounded text-center text-gray-800 text-sm font-medium">
              Default
            </div>
            <div className="bg-gray-900 p-3 rounded text-center text-white text-sm font-medium">
              Dark
            </div>
            <div className="bg-blue-600 p-3 rounded text-center text-white text-sm font-medium">
              Ocean
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded text-center text-white text-sm font-medium">
              Sunset
            </div>
            <div className="bg-green-600 p-3 rounded text-center text-white text-sm font-medium">
              Forest
            </div>
            <div className="bg-purple-600 p-3 rounded text-center text-white text-sm font-medium">
              Purple
            </div>
            <div className="bg-rose-500 p-3 rounded text-center text-white text-sm font-medium">
              Rose
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mt-3 italic">
            Click any preset to instantly apply coordinated colors across all elements
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/feedback-loop-widget-appearance-tab.png" alt="WidgetKraft: Complete widget with custom dimensions, positioning, and styling" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Complete widget with custom dimensions, positioning, and styling</p>
          </div>
        </div>
      </section>

      {/* 4. Code Tab */}
      <section className="mb-6">
        <div className="border-l-4 border-pink-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">4. Code (Embedding the Feedback Loop)</h2>
          <p className="text-gray-300">Once your Feedback Loop is configured, get the embed code to add it to your website.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Embed Code Section</h3>
          <p className="text-gray-300 mb-4">Copy and paste this ready-to-use embed snippet that includes your widget ID:</p>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4 overflow-x-auto">
            <code className="text-sm text-green-400 whitespace-pre">
{`<div id="feedbackloop-root"></div>

<script src="https://unpkg.com/@getwidgets/feedback-loop-widget/dist/feedback-loop-widget.umd.js"></script>

<script>
  FeedbackLoopWidget.init({
    widgetId: "caaaaaaa-bbbb-4444-bbbb-d55555aerftd"
  });
</script>`}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
              <Copy size={18} />
              Copy Code
            </button>
            <div className="text-gray-400 text-sm ml-2">
              <CheckCircle size={16} className="inline mr-1 text-green-500" />
              Widget ID is auto-filled
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Use the Embed Code</h3>
          <ol className="text-gray-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Click <strong>Copy Code</strong> to copy the embed snippet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <span>Paste it into your website's HTML, typically before the closing <code className="bg-gray-900 px-2 py-1 rounded text-sm">&lt;/body&gt;</code> tag</span>
                <p className="text-sm text-gray-400 mt-2">This ensures the Feedback Loop loads on every page of your site</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
              <span>The Feedback Widget will appear based on your configured position (top-right, bottom-right, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
              <span>Visitors can select a feedback category and submit their thoughts instantly</span>
            </li>
          </ol>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/feedback-loop-widget-code-tab.png" alt="WidgetKraft: Code tab showing the embed snippet ready to copy" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Code tab showing the embed snippet ready to copy</p>
          </div>
        </div>
      </section>

      {/* Feedback Categories */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Feedback Categories</h2>
        <p className="text-gray-300 mb-6">The widget includes pre-configured feedback categories that help users quickly identify the type of feedback they want to provide:</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-5 rounded-lg text-white">
            <h3 className="font-semibold text-lg mb-2">Feature Request</h3>
            <p className="text-green-100 text-sm">Users can suggest new features or improvements they'd like to see</p>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-5 rounded-lg text-white">
            <h3 className="font-semibold text-lg mb-2">Bug Report</h3>
            <p className="text-red-100 text-sm">Report technical issues or problems with your product</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-5 rounded-lg text-white">
            <h3 className="font-semibold text-lg mb-2">UI Improvement</h3>
            <p className="text-blue-100 text-sm">Suggestions for better user interface and user experience</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg text-white border border-gray-700">
            <h3 className="font-semibold text-lg mb-2">General Feedback</h3>
            <p className="text-gray-300 text-sm">Any other thoughts, comments, or feedback</p>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mb-6">
        <div className="mb-6">
            <hr className='my-4'></hr>
          <h2 className="text-3xl font-bold mb-3 text-white">Admin Dashboard & Analytics</h2>
          <p className="text-gray-300">Monitor and manage all feedback submissions from your centralized dashboard.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Dashboard Overview</h3>
          <p className="text-gray-300 mb-4">
            The Feedback Loop dashboard provides a comprehensive view of all user feedback, organized by category with real-time analytics.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Key Metrics at a Glance</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-xs mb-1">TOTAL FEEDBACK</p>
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-gray-500 text-xs mt-1">All submissions</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-red-900/50">
                  <p className="text-red-400 text-xs mb-1">BUG REPORTS</p>
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-gray-500 text-xs mt-1">Technical issues</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-green-900/50">
                  <p className="text-green-400 text-xs mb-1">FEATURE REQUESTS</p>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-gray-500 text-xs mt-1">New ideas</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-xs mb-1">GENERAL FEEDBACK</p>
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-gray-500 text-xs mt-1">Other comments</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border border-blue-900/50">
                  <p className="text-blue-400 text-xs mb-1">UI IMPROVEMENTS</p>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-gray-500 text-xs mt-1">Design suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Filtering & Organization</h3>
          <p className="text-gray-300 mb-4">
            Quickly filter feedback by category to focus on specific types of submissions:
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium hover:bg-gray-600 transition">
              All Types
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition border border-gray-700">
              🐛 Bug Reports
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition border border-gray-700">
              💡 Feature Requests
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition border border-gray-700">
              💬 General Feedback
            </button>
            <button className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition border border-gray-700">
              ✨ UI Improvements
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium">
              <span>⬇</span> Export
            </button>
            <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm font-medium">
              <span>🔄</span> Refresh
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Feedback Items Display</h3>
          <p className="text-gray-300 mb-4">
            Each feedback submission is displayed with key information for easy review:
          </p>
          
          <div className="space-y-4">
            {/* Feature Requests Example */}
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400">💡</span>
                <h4 className="font-semibold text-white">Feature Requests</h4>
                <span className="ml-auto text-green-400 text-sm font-medium">2 items</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded border-l-2 border-green-500">
                  <p className="text-gray-200 mb-2">"new feature please add slack notifications"</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>🕐 18m ago</span>
                    <span>ID: ae42a46c017d</span>
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded border-l-2 border-green-500">
                  <p className="text-gray-200 mb-2">"unified dashboard"</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>🕐 53m ago</span>
                    <span>ID: 74_52lec1p8k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Feedback Example */}
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-gray-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-400">💬</span>
                <h4 className="font-semibold text-white">General Feedback</h4>
                <span className="ml-auto text-gray-400 text-sm font-medium">1 items</span>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded border-l-2 border-gray-500">
                  <p className="text-gray-200 mb-2">"good going keep it up"</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>🕐 18m ago</span>
                    <span>ID: 699fa9924c4e</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Improvements Example */}
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-400">✨</span>
                <h4 className="font-semibold text-white">UI Improvements</h4>
                <span className="ml-auto text-blue-400 text-sm font-medium">3 items</span>
              </div>
              <p className="text-gray-400 text-sm italic">View all UI improvement suggestions...</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Dashboard Features</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Real-time updates:</strong> Dashboard refreshes automatically when new feedback arrives</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Category-based filtering:</strong> View feedback by type (Bug Reports, Feature Requests, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Timestamp tracking:</strong> See exactly when each feedback was submitted</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Unique IDs:</strong> Each submission has a unique identifier for tracking and reference</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Export functionality:</strong> Download all feedback data for external analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Progress indicators:</strong> Visual bars show the distribution of feedback types</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/feedbackloop/feedback-loop-widget-dashboard.png" alt="WidgetKraft: Feedback Loop Dashboard - Real-time analytics and feedback management" className="mx-auto mb-4 rounded-lg shadow-lg max-w-full" />
            <p className="text-gray-300 text-sm mt-4">Admin dashboard showing feedback categorization, metrics, and individual submissions</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-5 rounded-lg border border-pink-700/50">
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
            <Sparkles size={20} className="text-pink-400" />
            Pro Tip: Actionable Insights
          </h4>
          <p className="text-gray-300 text-sm">
            Use the dashboard's filtering capabilities to identify trends. For example, if you see a spike in "UI Improvements" feedback, it might be time to review your interface design. Group similar feature requests together to prioritize your product roadmap effectively.
          </p>
        </div>
      </section>

      {/* Integration Notes */}
      <section className="mb-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Integration & Technical Notes</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Lightweight integration:</strong> Single script tag with minimal performance impact</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Categorized feedback:</strong> Pre-defined categories help organize user input effectively</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Instant submission:</strong> Feedback is captured and stored immediately upon submission</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile responsive:</strong> Works seamlessly on all devices and screen sizes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Dashboard analytics:</strong> View and manage all feedback from your admin panel</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-pink-500 flex-shrink-0 mt-0.5" />
              <span><strong>Powered by WidgetKraft:</strong> Professional support and reliable infrastructure</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-pink-900/30 to-rose-900/30 p-8 rounded-lg border border-pink-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">The Feedback Loop Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Collect structured feedback through categorized options</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Customize appearance to match your brand perfectly</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Position the widget anywhere on your page</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Track and analyze user feedback from your dashboard</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Embed with a single script tag—no complex setup required</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-pink-500 flex-shrink-0 mt-0.5" />
            <span>Improve your product based on real user insights</span>
          </div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-pink-800">
          <p className="text-gray-300 italic">
            <strong className="text-white">Empower your users to share their voice</strong> – The Feedback Loop Widget makes it easy for customers to tell you what they love, what needs improvement, and what features they want next, helping you build a better product.
          </p>
        </div>
      </section>
    </div>
  );
}