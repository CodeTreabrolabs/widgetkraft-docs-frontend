import { MessageCircle, Users, Clock, Eye, Settings, Code, Palette, Save, Copy, CheckCircle, AlertCircle, Mail, Sparkles } from 'lucide-react';

// Server-side data fetching (in a real app, this would fetch from your API/database)
const getLiveConversationWidgetData = () => {
  return {
    title: 'Live Conversation Widget',
    description: 'A real-time support widget that lets you chat instantly with your website visitors, answer their questions, and boost conversions, all from one place.',
    customizableFeatures: [
      'Chat appearance and theme customization',
      'Header branding and welcome message',
      'Message bubble styling',
      'Input field configuration',
      'Widget dimensions and positioning',
      'Agent/admin dashboard interface',
    ],
    creationSteps: [
      'Go to Available Widgets → Live Conversation Widget',
      'Click Add Widget',
      'Configure your widget in the editor',
      'Copy the embed code to your site',
    ],
    pricing: '0.8 credit / chat',
    sampleWidgetId: '1d8b83...b276',
  };
};

export default function LiveConversationWidgetPage() {
  const widgetData = getLiveConversationWidgetData();
  
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-3 rounded-lg">
            <MessageCircle size={28} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">{widgetData.title}</h1>
        </div>
        <p className="text-lg text-gray-300">{widgetData.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-lg">
          <span className="text-blue-400 font-medium">Pricing:</span>
          <span className="text-white">{widgetData.pricing}</span>
        </div>
      </div>

      {/* What You Can Customize */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">You Can Fully Customize:</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {widgetData.customizableFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Creating a Live Conversation Widget */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating a Live Conversation Widget</h2>
        <p className="text-gray-300 mb-4">To create a Live Conversation widget:</p>
        
        <ol className="text-gray-300 space-y-2 mb-6">
          {widgetData.creationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/live-one.png" alt="WidgetKraft: Creating a Live Conversation Widget - Dashboard Selection" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Dashboard showing how to active Live Conversation widget</p>
          </div>
        </div>
      </section>

      {/* Understanding the Editor */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Understanding the Live Conversation Editor</h2>
        <p className="text-gray-300 mb-6">
          The editor is divided into five main configuration tabs:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <MessageCircle size={32} className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Header</h3>
            <p className="text-gray-300 text-sm">Title, subtitle and branding</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <MessageCircle size={32} className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Chat</h3>
            <p className="text-gray-300 text-sm">Message bubble styling</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Settings size={32} className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Input</h3>
            <p className="text-gray-300 text-sm">Message input configuration</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Palette size={32} className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Appearance</h3>
            <p className="text-gray-300 text-sm">Widget size and visual design</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Code size={32} className="text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Code</h3>
            <p className="text-gray-300 text-sm">Embed snippet</p>
          </div>
        </div>
      </section>

      {/* 1. Header Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">1. Header Tab</h2>
          <p className="text-gray-300">Controls the top section of your Live Conversation widget.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Configurable Elements</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Title</h4>
              <p className="text-gray-300 text-sm mb-1">Main heading displayed at the top</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "BellyDora Live Conversation"
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Subtitle</h4>
              <p className="text-gray-300 text-sm mb-1">Supporting text below the title</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "Your Query, Our Priority"
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Welcome Message</h4>
              <p className="text-gray-300 text-sm mb-1">Initial message shown to visitors</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Example: "Talk to our agent & get you robo today..."
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/live-two.png" alt="WidgetKraft: Header Tab - Custom title, subtitle, and welcome message" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Live Conversation header with custom title, subtitle, and welcome message</p>
          </div>
        </div>
      </section>

      {/* 2. Chat Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">2. Chat Tab</h2>
          <p className="text-gray-300">Customize how chat messages appear in conversations.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Message Bubble Customization</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">User Bubble Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded" style={{backgroundColor: '#4ADE80'}}></div>
                <p className="text-gray-300 text-sm">Color for messages sent by visitors</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Agent Bubble Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#0168A3'}}></div>
                <p className="text-gray-300 text-sm">Color for agent/support responses</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">User Font Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-900 rounded border border-gray-700"></div>
                <p className="text-gray-300 text-sm">Text color for visitor messages</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Agent Font Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded border border-gray-300"></div>
                <p className="text-gray-300 text-sm">Text color for agent messages</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Bubble Radius</h4>
              <p className="text-gray-300 text-sm">Control the roundness of message bubbles</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                18px
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Size</h4>
              <p className="text-gray-300 text-sm">Adjust message text size</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                14px
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Floating Chat Bubble</h3>
          <p className="text-gray-300 mb-3">The circular button that opens your chat widget</p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-white text-sm mb-1">Bubble Size / Radius</h4>
              <p className="text-gray-300 text-sm">Control the size of the floating chat button</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/live-three.png" alt="WidgetKraft: Chat Tab - Custom message bubble colors and styling" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Live Conversation with custom bubble colors and styling</p>
          </div>
        </div>
      </section>

      {/* 3. Input Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">3. Input Tab</h2>
          <p className="text-gray-300">Configure the message input area where visitors type.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Input Field Settings</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Placeholder Text</h4>
              <p className="text-gray-300 text-sm mb-1">Hint text shown in empty input field</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                Talk to our agent & get you robo today...
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#040b0d'}}></div>
                <p className="text-gray-300 text-sm">Input area background color</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Border Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-2" style={{borderColor: '#0105DB'}}></div>
                <p className="text-gray-300 text-sm">Color of input field border</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Text Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded"></div>
                <p className="text-gray-300 text-sm">Color of text as user types</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Size</h4>
              <p className="text-gray-300 text-sm">Size of text in input field</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                14px
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Send Button Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#2583EB'}}></div>
                <p className="text-gray-300 text-sm">Color of send/submit button</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Send Button Size</h4>
              <p className="text-gray-300 text-sm">Size of the send button</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                40px (min: 30px | max: 50px)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/live-four.png" alt="WidgetKraft: Input Tab - Message input field configuration" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Styled input field with custom colors and placeholder</p>
          </div>
        </div>
      </section>

      {/* 4. Appearance Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">4. Appearance Tab</h2>
          <p className="text-gray-300">Control the overall widget dimensions and visual style.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Widget Dimensions</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Width</h4>
              <p className="text-gray-300 text-sm">Control how wide the chat window appears</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                400px (min: 300px | max: 400px)
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Height</h4>
              <p className="text-gray-300 text-sm">Set the vertical size of chat window</p>
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
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded" style={{backgroundColor: '#bdd5fe'}}></div>
                <p className="text-gray-300 text-sm">Main chat area background color</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Background Image URL</h4>
              <p className="text-gray-300 text-sm mb-1">Add custom background pattern or image</p>
              <div className="bg-gray-900 p-2 rounded text-xs text-gray-400 break-all mt-2">
                background_image
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Border Radius</h4>
              <p className="text-gray-300 text-sm">Roundness of chat window corners</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                16px
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Shadow</h4>
              <p className="text-gray-300 text-sm">Add depth with drop shadow effect</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                0.4px 12px rgba(0,0,0,0.1)
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Theme Presets</h3>
          <p className="text-gray-300 mb-4">Quick-start with pre-designed themes:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-gray-100 p-3 rounded text-center text-gray-800 text-sm">
              Default
            </div>
            <div className="bg-gray-900 p-3 rounded text-center text-white text-sm">
              Dark
            </div>
            <div className="bg-blue-600 p-3 rounded text-center text-white text-sm">
              Ocean
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded text-center text-white text-sm">
              Sunset
            </div>
            <div className="bg-green-600 p-3 rounded text-center text-white text-sm">
              Forest
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mt-3 italic">
            Click any preset to instantly apply coordinated colors across all elements
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/live-five.png" alt="WidgetKraft: Appearance Tab - Widget dimensions and visual styling" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Complete widget with custom dimensions and styling</p>
          </div>
        </div>
      </section>

      {/* 5. Code Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-blue-500 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">5. Code (Embedding the Live Conversation)</h2>
          <p className="text-gray-300">Once your Live Conversation is configured, get the embed code to add it to your website.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Embed Code Section</h3>
          <p className="text-gray-300 mb-4">You'll see a ready-to-use embed snippet that includes your widget ID:</p>
          
          <div className="text-center">
            <img src="/images/liveconversation/live-six.png" alt="WidgetKraft: Code Tab - Embed code snippet with widget ID" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Complete widget with custom dimensions and styling</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4 overflow-x-auto">
            <code className="text-sm text-green-400 whitespace-pre">
{`<div id="livechat-root"></div>

<script src="https://unpkg.com/@getwidgets/live-chat-widget@latest/dist/live-chat-widget.umd.js"></script>

<script>
  LiveChatWidget.init({ 
    widgetId: "YOUR_WIDGET_ID_HERE"
  });
</script>`}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Click <strong>Copy Code</strong> to copy the embed snippet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <span>Paste it into your website's HTML, typically before the closing <code className="bg-gray-900 px-2 py-1 rounded text-sm">&lt;/body&gt;</code> tag</span>
                <p className="text-sm text-gray-400 mt-2">This ensures the Live Conversation loads on every page of your site</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
              <span>The Live Conversation will appear as a floating button in the bottom-right corner</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
              <span>Visitors can click it to start chatting with your support agents</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Admin Dashboard & Analytics</h2>
        <p className="text-gray-300 mb-6">Monitor and manage all live conversations from your dashboard:</p>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/liveconversation/chat-eight.png" alt="WidgetKraft: Admin Dashboard - Active sessions and conversations" className="mx-auto mb-4 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Admin dashboard showing active sessions and conversations</p>
          </div>
        </div>
      </section>

      {/* Integration Notes */}
      <section className="mb-10">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Integration & Technical Notes</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong>Real-time messaging:</strong> Messages are delivered instantly with WebSocket connections</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong>Agent interface:</strong> Support agents can manage multiple conversations from one dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong>Session management:</strong> Track active sessions, duration, and conversation history</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile responsive:</strong> Works seamlessly on all devices and screen sizes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span><strong>Powered by Comerita Management:</strong> Professional support and infrastructure</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 p-8 rounded-lg border border-blue-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">The Live Conversation Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Provide real-time support to website visitors instantly</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Customize appearance to match your brand identity</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Manage conversations from a central admin dashboard</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Track active sessions and conversation analytics</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Embed with a single script tag—no complex setup</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Boost conversions with instant customer support</span>
          </div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-800">
          <p className="text-gray-300 italic">
            <strong className="text-white">Message: are delivered in real-time</strong> – Your visitors get instant responses, creating a seamless support experience that builds trust and drives conversions.
          </p>
        </div>
      </section>
    </div>
  );
}