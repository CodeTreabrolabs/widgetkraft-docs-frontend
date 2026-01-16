import { Mail, MessageCircle, Plus, Settings, Code, Eye, Palette, Save, Copy, CheckCircle, AlertCircle, Bot, Sparkles } from 'lucide-react';

// This runs on the server (in real Next.js app)
const getWidgetData = () => {
  const widgetDetails = {
    title: 'AI Chatbot Widget',
    description:
      'The AI Chatbot Widget lets you add intelligent, conversational AI assistance to your website—powered by advanced language models. Create custom AI assistants that understand your business and help visitors 24/7.',
    customizableFeatures: [
      'Chat appearance and theme',
      'AI behavior and personality',
      'Initial greeting messages',
      'Colors, fonts, and bubble styles',
      'Chat widget size and positioning',
    ],
    creationSteps: [
      'Go to All Widgets → AI Chatbot',
      'Click + Add Widget',
      'Go to My Widgets → AI Chatbot',
      'Click Configure',
    ],
    screenshotCaption: "Screenshot: Dashboard Create Widget - AI Chatbot Selection",
  };

  return widgetDetails;
};

export default function ChatbotWidgetPage() {
  const widgetDetails = getWidgetData();
  
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-lg">
            <Bot size={28} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">{widgetDetails.title}</h1>
        </div>
        <p className="text-lg text-gray-300">{widgetDetails.description}</p>
      </div>

      {/* What You Can Customize */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-white">You Can Fully Customize:</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {widgetDetails.customizableFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-300 mt-4 italic">
          Your AI assistant is powered by Claude and can be customized with your own knowledge base.
        </p>
      </div>

      {/* Creating a Chatbot Widget */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating an AI Chatbot Widget</h2>
        <p className="text-gray-300 mb-4">To create an AI Chatbot widget:</p>
        
        <ol className="text-gray-300 space-y-2 mb-6">
          {widgetDetails.creationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            {/* Using Next.js Image component for better performance */}
            <img src="/images/chatbot/image.png" alt="WidgetKraft: Creating an AI Chatbot Widget - Dashboard Selection" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">{widgetDetails.screenshotCaption}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-4">
          The chatbot editor opens with a live preview on the left and configuration panels on the right. 
          Any change you make updates the preview instantly, so you can see exactly how your AI assistant will look and behave.
        </p>

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded mb-6">
          <div className="flex gap-3">
            <Sparkles size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">✨ AI-Powered Intelligence:</p>
              <p className="text-gray-300 text-sm">
                Your chatbot uses advanced AI to understand context, provide helpful responses, and learn from your master prompt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Editor */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Understanding the Chatbot Editor</h2>
        <p className="text-gray-300 mb-6">
          The editor is divided into six main configuration tabs:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <MessageCircle size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Header</h3>
            <p className="text-gray-300 text-sm">Widget title and branding</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <MessageCircle size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Chat</h3>
            <p className="text-gray-300 text-sm">Message bubble styling</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Settings size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Input</h3>
            <p className="text-gray-300 text-sm">Message input configuration</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Palette size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Appearance</h3>
            <p className="text-gray-300 text-sm">Widget size and design</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Bot size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">AI</h3>
            <p className="text-gray-300 text-sm">AI behavior and personality</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Code size={32} className="text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Code</h3>
            <p className="text-gray-300 text-sm">Embed snippet</p>
          </div>
        </div>
      </section>

      {/* 1. Header Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">1. Header Tab</h2>
          <p className="text-gray-300">Controls the top section of your chatbot widget.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Configurable Elements</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Title</h4>
              <p className="text-gray-300 text-sm mb-1">The name displayed at the top of the chat window</p>
              <p className="text-gray-300 text-sm italic">Example: "Your Assistant", "Support Bot", "Sales Assistant"</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Subtitle</h4>
              <p className="text-gray-300 text-sm mb-1">Descriptive text that appears below the title</p>
              <p className="text-gray-300 text-sm italic">Example: "Ask Me Something I Don't Know..."</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Logo URL</h4>
              <p className="text-gray-300 text-sm mb-1">Display your brand logo or an icon in the header</p>
              <p className="text-gray-300 text-sm italic">Supports PNG, JPG, SVG formats</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">AI Processing Message</h4>
              <p className="text-gray-300 text-sm mb-1">Message shown while AI is thinking</p>
              <p className="text-gray-300 text-sm italic">Example: "Thinking...", "Processing your request..."</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Color</h4>
              <p className="text-gray-300 text-sm">Customize the text color in the header section</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Background Color</h4>
              <p className="text-gray-300 text-sm">Set the header background to match your brand</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Family</h4>
              <p className="text-gray-300 text-sm">Choose the typography for your header text</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/chatbot/chatbot-one.png" alt="WidgetKraft: Header Tab - Custom title, subtitle, and logo configuration" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Chatbot header with custom title, subtitle, and logo</p>
          </div>
        </div>
      </section>

      {/* 2. Chat Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">2. Chat Tab</h2>
          <p className="text-gray-300">Customize how chat messages appear in the conversation.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Message Bubble Customization</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">User Bubble Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded"></div>
                <p className="text-gray-300 text-sm">Color for messages sent by the visitor</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">AI Bubble Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <p className="text-gray-300 text-sm">Color for AI assistant responses</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">User Font Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded border border-gray-600"></div>
                <p className="text-gray-300 text-sm">Text color for user messages</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">AI Font Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded border border-gray-600"></div>
                <p className="text-gray-300 text-sm">Text color for AI responses</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Bubble Radius</h4>
              <p className="text-gray-300 text-sm">Control the roundness of message bubbles</p>
              <p className="text-gray-300 text-sm italic">Example: 18px for rounded, 4px for squared</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Size</h4>
              <p className="text-gray-300 text-sm">Adjust message text size for readability</p>
              <p className="text-gray-300 text-sm italic">Typically 14px-16px works well</p>
            </div>

            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
                <div className="text-center">
                    <img src="/images/chatbot/chatbot-two.png" alt="WidgetKraft: Chat Tab - Custom message bubble colors and fonts" className="mx-auto mb-3 rounded-lg shadow-lg" />
                    <p className="text-gray-300 text-sm mt-4">Example: Chatbot Chat with custom bubble colors and Fonts</p>
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

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded">
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">💡 Design Tip:</p>
              <p className="text-gray-300 text-sm">
                Use contrasting colors for user and AI bubbles to make conversations easy to follow. Ensure text colors have sufficient contrast for readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Input Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">3. Input Tab</h2>
          <p className="text-gray-300">Configure the message input area where visitors type.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Input Field Settings</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Placeholder Text</h4>
              <p className="text-gray-300 text-sm mb-1">The hint text shown in the empty input field</p>
              <p className="text-gray-300 text-sm italic">Example: "Type your message...", "Ask me anything..."</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">First AI Message</h4>
              <p className="text-gray-300 text-sm mb-2">The initial greeting your AI sends when chat opens</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300">
                Example: "Hey there, How are you ?"
              </div>
              <p className="text-gray-300 text-sm mt-2 italic">
                This is the first thing visitors see and sets the tone for the conversation
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-900 rounded border border-gray-700"></div>
                <p className="text-gray-300 text-sm">Input area background color</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Border Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border-4 border-blue-600"></div>
                <p className="text-gray-300 text-sm">Color of the input field border</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Text Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <p className="text-gray-300 text-sm">Color of text as user types</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Font Size</h4>
              <p className="text-gray-300 text-sm">Size of text in the input field</p>
              <p className="text-gray-300 text-sm italic">Typically 14px matches chat bubble text</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Send Button Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <p className="text-gray-300 text-sm">Color of the send/submit button</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8">
          <div className="text-center">
            <img src="/images/chatbot/chatbot-three.png" alt="WidgetKraft: Input Tab - Styled input field with custom colors and placeholder text" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm mt-4">Example: Styled input field with custom colors</p>
          </div>
        </div>
      </section>

      {/* 4. Appearance Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">4. Appearance Tab</h2>
          <p className="text-gray-300">Control the overall widget dimensions and visual style.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Widget Dimensions</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Width</h4>
              <p className="text-gray-300 text-sm">Control how wide the chat window appears</p>
              <p className="text-gray-300 text-sm italic">Default: 400px (works well on most screens)</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Height</h4>
              <p className="text-gray-300 text-sm">Set the vertical size of the chat window</p>
              <p className="text-gray-300 text-sm italic">Default: 550px (fits most viewport heights)</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Visual Styling</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Background Color</h4>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded border border-gray-300"></div>
                <p className="text-gray-300 text-sm">Main chat area background color</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Background Image URL</h4>
              <p className="text-gray-300 text-sm mb-1">Add a custom background pattern or image</p>
              <div className="bg-gray-900 p-2 rounded text-xs text-gray-400 break-all mt-2">
                https://i.pinimg.com/736x/6a/0b/d1/6a0bd1a083263f84c0ec5b40299cecea.jpg
              </div>
              <p className="text-gray-300 text-sm mt-2 italic">Optional: Leave empty for solid color background</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-1">Border Radius</h4>
              <p className="text-gray-300 text-sm">Roundness of the entire chat window corners</p>
              <p className="text-gray-300 text-sm italic">Example: 16px for smooth rounded corners</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Shadow</h4>
              <p className="text-gray-300 text-sm">Add depth with a drop shadow effect</p>
              <div className="bg-gray-900 p-2 rounded text-xs text-gray-400 mt-2">
                0 4px 12px rgba(0,0,0,0.1)
              </div>
              <p className="text-gray-300 text-sm mt-2 italic">Creates elevation and visual separation from the page</p>
            </div>
            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
                <div className="text-center">
                    <img src="/images/chatbot/chatbot-four.png" alt="WidgetKraft: Appearance Tab - Widget dimensions, background color, and theme customization" className="mx-auto mb-3 rounded-lg shadow-lg" />
                    <p className="text-gray-300 text-sm mt-4">Example: Chatbot Appearence with customization and Background Settings</p>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Theme Presets</h3>
          <p className="text-gray-300 mb-4">Quick-start with pre-designed themes:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-gray-700 p-3 rounded text-center text-gray-300 text-sm">
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
      </section>

      {/* 5. AI Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">5. AI Tab</h2>
          <p className="text-gray-300">Configure your AI assistant's knowledge and behavior.</p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg mb-6 border border-purple-700">
          <div className="flex items-start gap-3 mb-4">
            <Bot size={28} className="text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Master Prompt</h3>
              <p className="text-gray-300 text-sm">
                This is the most important configuration—it defines your AI's personality, knowledge, and capabilities.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <p className="text-gray-300 text-sm mb-2">The Master Prompt tells your AI:</p>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• Who it is and what it represents</li>
              <li>• What information it knows about your business</li>
              <li>• How it should respond to visitors</li>
              <li>• What tone and style to use</li>
              <li>• Any specific rules or limitations</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded border border-gray-700">
            <p className="text-white font-semibold mb-2 text-sm">Example Master Prompt:</p>
            <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 leading-relaxed">
              "Widget Kraft offers an intuitive, no-code platform revolutionizing how businesses, developers, and creators enhance their websites with customizable AI-powered chat widgets and versatile contact forms..."
            </div>
          </div>
          <div className="bg-gray-800 mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
            <div className="text-center">
                <img src="/images/chatbot/chatbot-five-1.png" alt="WidgetKraft: AI Tab - Master prompt configuration and AI behavior settings" className="mx-auto mb-3 rounded-lg shadow-lg" />
                <p className="text-gray-300 text-sm mt-4">Example: AI tab with custom master prompt and generate prompt CTA through site url</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">AI Prompt Generation</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Provide Your Site URL</h4>
              <p className="text-gray-300 text-sm mb-2">Let WidgetKraft automatically generate a prompt based on your website</p>
              <div className="flex items-center gap-2 bg-gray-900 p-3 rounded border border-gray-700">
                <input 
                  type="text" 
                  placeholder="https://getwidgets.app"
                  className="flex-1 bg-transparent text-gray-300 text-sm outline-none"
                  disabled
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
                  Generate Prompt (28 left)
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-2 italic">
                The AI will scrape your website and create a customized master prompt automatically
              </p>
            </div>
            <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
                <div className="text-center">
                    <img src="/images/chatbot/chatbot-five-2.png" alt="WidgetKraft: AI Prompt Generation - Website URL input for automatic master prompt generation" className="mx-auto mb-3 rounded-lg shadow-lg" />
                </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded">
          <div className="flex gap-3">
            <Sparkles size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">💡 Master Prompt Tips:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Be specific about your business, products, or services</li>
                <li>• Include common questions and how to answer them</li>
                <li>• Define the tone (professional, friendly, casual, etc.)</li>
                <li>• Set boundaries (what the AI should NOT discuss)</li>
                <li>• Add your contact info, pricing, or other key details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Code Tab */}
      <section className="mb-10">
        <div className="border-l-4 border-purple-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">6. Code (Embedding the Chatbot)</h2>
          <p className="text-gray-300">Once your chatbot is configured, get the embed code to add it to your website.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Embed Code Section</h3>
          <p className="text-gray-300 mb-4">You'll see a ready-to-use embed snippet that includes your widget ID:</p>
          
          <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
            <div className="text-center">
                <img src="/images/chatbot/chatbot-six.png" alt="WidgetKraft: Code Tab - Embed code snippet with widget ID and integration instructions" className="mx-auto mb-3 rounded-lg shadow-lg" />
            </div>
          </div>
          
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4 overflow-x-auto">
            <code className="text-sm text-green-400 whitespace-pre">
{`<div id="chatbot-root"></div>

<script src="https://unpkg.com/@getwidgets/chatbot-widget@latest/dist/chatbot-widget.umd.js"></script>

<script>
  ChatbotWidget.init({ 
    widgetId: "aaaaaaaa-7777-4545-bbbb-112233445566" 
  });
</script>`}
            </code>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Copy size={18} />
            Copy Code
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Use the Embed Code</h3>
          <ol className="text-gray-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Click <strong>Copy Code</strong> to copy the embed snippet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <div>
                <span>Paste it into your website's HTML, typically before the closing <code className="bg-gray-900 px-2 py-1 rounded text-sm">&lt;/body&gt;</code> tag</span>
                <p className="text-sm text-gray-400 mt-2">This ensures the chatbot loads on every page of your site</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
              <span>The chatbot will appear as a floating button in the bottom-right corner</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
              <span>Visitors can click it to start chatting with your AI assistant</span>
            </li>
          </ol>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Integration Notes</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span><strong>No backend required:</strong> The widget is fully hosted and managed</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span><strong>Instant updates:</strong> Changes in the editor apply immediately to live widgets</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile responsive:</strong> Automatically adapts to all screen sizes</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span><strong>Fast loading:</strong> Optimized for performance with minimal page impact</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Saving & Publishing */}
      <section className="mb-10">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600">
          <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            <Save size={28} className="text-purple-600" />
            Saving & Publishing
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Click <strong>Save</strong> at the top to store your configuration</li>
            <li>• All changes apply instantly to your live chatbot</li>
            <li>• No need to update the embed code when making changes</li>
            <li>• Your widget ID remains the same across updates</li>
          </ul>
        </div>
      </section>

      {/* What Happens During Conversations */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">What Happens During Conversations</h2>
        <p className="text-gray-300 mb-4">When a visitor chats with your AI assistant:</p>
        
        <div className="space-y-3">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">AI Processing</p>
              <p className="text-gray-300 text-sm">Messages are sent to Claude AI for intelligent, context-aware responses</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">Master Prompt Usage</p>
              <p className="text-gray-300 text-sm">Your custom master prompt guides every AI response</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">Conversation History</p>
              <p className="text-gray-300 text-sm">Chat logs are stored in your WidgetKraft dashboard for review</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold mb-1">Credit Consumption</p>
              <p className="text-gray-300 text-sm">Credits are consumed per AI message generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Best Practices for AI Chatbots</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Write a Comprehensive Master Prompt</p>
            <p className="text-gray-300 text-sm">
              The more detail you provide about your business, the better your AI can assist visitors. Include product details, pricing, FAQs, and contact information.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Test Your Chatbot Thoroughly</p>
            <p className="text-gray-300 text-sm">
              Ask various questions in the preview to ensure the AI responds accurately and helpfully. Refine your master prompt based on test conversations.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Set Clear Boundaries</p>
            <p className="text-gray-300 text-sm">
              Tell the AI what topics it should avoid or redirect. This prevents off-topic conversations and keeps interactions professional.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Use Your Brand Voice</p>
            <p className="text-gray-300 text-sm">
              Define the tone and personality in your master prompt (friendly, professional, casual) to match your brand identity.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Match Visual Design to Your Site</p>
            <p className="text-gray-300 text-sm">
              Use colors and styling that complement your website's design for a seamless, professional appearance.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-white font-semibold mb-2">Monitor Conversations</p>
            <p className="text-gray-300 text-sm">
              Regularly review chat logs in your dashboard to identify common questions and improve your master prompt accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-lg border border-purple-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">The AI Chatbot Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Add intelligent AI assistance to your website in minutes</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Customize appearance, behavior, and AI personality</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Provide 24/7 support without human intervention</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Handle common questions and guide visitors automatically</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Embed with a single script tag—no backend required</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
            <span>Update instantly without changing embed code</span>
          </div>
        </div>
      </section>
    </div>
  );
}