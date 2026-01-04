import React from 'react';
import { Mail, Plus, Settings, Code, Eye, Palette, Save, Copy, CheckCircle, AlertCircle } from 'lucide-react';

// This would be imported from your ThemeContext
// For demo purposes, I'm creating a simple theme hook
const useTheme = () => {
  const [theme] = React.useState('dark'); // Change to 'light' to test
  return { theme };
};

const ContactFormWidgetPage = () => {
  const { theme } = useTheme();
  
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const codeBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const accentColor = theme === 'dark' ? 'text-orange-500' : 'text-orange-600';
  const accentBg = theme === 'dark' ? 'bg-orange-600' : 'bg-orange-500';
  
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className={`${accentBg} p-3 rounded-lg`}>
            <Mail size={28} className="text-white" />
          </div>
          <h1 className={`text-4xl font-bold ${titleColor}`}>Contact Form Widget</h1>
        </div>
        <p className={`text-lg ${textColor}`}>
          The Contact Form Widget lets you collect structured leads, inquiries, and messages directly from your 
          website—without building backend logic or managing multiple form tools.
        </p>
      </div>

      {/* What You Can Customize */}
      <div className={`${cardBg} p-6 rounded-lg mb-8 border ${borderColor}`}>
        <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>You Can Fully Customize:</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Fields and validation</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Visual design and theme</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Button labels and text</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Embed behavior (inline or section-based)</span>
          </div>
        </div>
        <p className={`${textColor} mt-4 italic`}>
          All submissions are captured inside your WidgetKraft dashboard.
        </p>
      </div>

      {/* Creating a Contact Form Widget */}
      <section className="mb-10">
        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>Creating a Contact Form Widget</h2>
        <p className={`${textColor} mb-4`}>To create a Contact Form widget:</p>
        
        <ol className={`${textColor} space-y-2 mb-6`}>
          <li className="flex items-start gap-3">
            <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>1</span>
            <span>Go to <strong>All Widgets → Contact Form</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>2</span>
            <span>Click <strong>+ Add Widget</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>3</span>
            <span>Go to <strong>My Widgets → Contact Form</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>3</span>
            <span>Click <strong>Configure</strong></span>
          </li>
        </ol>

        {/* Screenshot Placeholder 1 */}
        <div className={`${cardBg} border-2 border-dashed ${borderColor} rounded-lg p-8 mb-4`}>
          <div className="text-center">
            <img src="/widgets/contactform/first.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className={`${textColor} text-sm`}>Screenshot: Dashboard → Create Widget → Select Contact Form</p>
          </div>
        </div>

        <p className={`${textColor}`}>
          The form editor opens with a live preview on the left and controls on the right. 
          Any change you make updates the preview instantly.
        </p>
      </section>

      {/* Understanding the Editor */}
      <section className="mb-10">
        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>Understanding the Contact Form Editor</h2>
        <p className={`${textColor} mb-6`}>
          The editor is divided into three main sections:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor} text-center`}>
            <Plus size={32} className={`${accentColor} mx-auto mb-2`} />
            <h3 className={`font-semibold ${titleColor} mb-1`}>Form Fields</h3>
            <p className={`${textColor} text-sm`}>What data you collect</p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor} text-center`}>
            <Palette size={32} className={`${accentColor} mx-auto mb-2`} />
            <h3 className={`font-semibold ${titleColor} mb-1`}>Form Design</h3>
            <p className={`${textColor} text-sm`}>How the form looks</p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor} text-center`}>
            <Code size={32} className={`${accentColor} mx-auto mb-2`} />
            <h3 className={`font-semibold ${titleColor} mb-1`}>Code</h3>
            <p className={`${textColor} text-sm`}>How you embed it</p>
          </div>
        </div>

        {/* Screenshot Placeholder 2 */}
        <div className={`${cardBg} border-2 border-dashed ${borderColor} rounded-lg p-12 mb-6`}>
          <div className="text-center">
            <img src="/widgets/contactform/second.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className={`${textColor} text-sm`}>Screenshot: Form Editor Interface with Live Preview</p>
          </div>
        </div>
      </section>

      {/* 1. Form Fields Section */}
      <section className="mb-10">
        <div className={`border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'} pl-6 mb-6`}>
          <h2 className={`text-3xl font-bold mb-3 ${titleColor}`}>1. Form Fields</h2>
          <p className={`${textColor}`}>This section controls what information the visitor submits.</p>
        </div>

        {/* Adding Fields */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-3 ${titleColor} flex items-center gap-2`}>
            <Plus size={24} className={accentColor} />
            Adding Fields
          </h3>
          <ul className={`${textColor} space-y-2`}>
            <li>• Click <strong>+ Add Field</strong></li>
            <li>• Choose the field type (Email, Text, Textarea, etc.)</li>
            <li>• Each field appears immediately in the live preview</li>
          </ul>
        </div>

        {/* Field Settings */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>Field Settings</h3>
          <p className={`${textColor} mb-4`}>For each field, you can configure:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className={`font-semibold ${titleColor} mb-1`}>Label</h4>
              <p className={`${textColor} text-sm mb-1`}>What the user sees above the field</p>
              <p className={`${textColor} text-sm italic`}>Example: Email, Name, Message</p>
            </div>
            
            <div>
              <h4 className={`font-semibold ${titleColor} mb-1`}>Type</h4>
              <p className={`${textColor} text-sm mb-1`}>Determines validation and input behavior</p>
              <div className={`${codeBg} p-3 rounded text-sm ${textColor} mt-2`}>
                <div>• <strong>Email</strong> → validates email format</div>
                <div>• <strong>Text</strong> → single-line input</div>
                <div>• <strong>Textarea</strong> → multi-line message input</div>
              </div>
            </div>
            
            <div>
              <h4 className={`font-semibold ${titleColor} mb-1`}>Placeholder Text</h4>
              <p className={`${textColor} text-sm mb-1`}>Hint text shown inside the field</p>
              <p className={`${textColor} text-sm italic`}>Example: you@domain.com</p>
            </div>
            
            <div>
              <h4 className={`font-semibold ${titleColor} mb-1`}>Required Field</h4>
              <p className={`${textColor} text-sm`}>When enabled:</p>
              <div className={`${textColor} text-sm mt-2 space-y-1`}>
                <div>• Shows an asterisk (*)</div>
                <div>• Prevents submission unless filled</div>
                <div>• Automatically validates input</div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Placeholder 3 */}
        <div className={`${cardBg} border-2 border-dashed ${borderColor} rounded-lg p-8 mb-6`}>
          <div className="text-center">
            <img src="/widgets/contactform/third.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className={`${textColor} text-sm`}>Screenshot: Field Settings Panel</p>
          </div>
        </div>

        {/* Reordering & Deleting */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <h4 className={`font-semibold ${titleColor} mb-2`}>Reordering Fields</h4>
            <p className={`${textColor} text-sm`}>
              Use the up / down arrows to reorder fields. The preview updates instantly so you can see the final layout.
            </p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <h4 className={`font-semibold ${titleColor} mb-2`}>Deleting Fields</h4>
            <p className={`${textColor} text-sm`}>
              Click Delete on any field. The field is removed immediately from the form.
            </p>
          </div>
        </div>

        {/* Best Practice Alert */}
        <div className={`${theme === 'dark' ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-300'} border-l-4 p-4 rounded`}>
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className={`font-semibold ${titleColor} mb-1`}>💡 Best practice:</p>
              <p className={`${textColor} text-sm`}>
                Keep forms short (3–5 fields) to improve submission rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Form Design Section */}
      <section className="mb-10">
        <div className={`border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'} pl-6 mb-6`}>
          <h2 className={`text-3xl font-bold mb-3 ${titleColor}`}>2. Form Design</h2>
          <p className={`${textColor}`}>This section controls how the form looks and feels.</p>
        </div>

        {/* Form Text */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>Form Text</h3>
          <p className={`${textColor} mb-3`}>You can customize:</p>
          <div className="space-y-3">
            <div>
              <p className={`font-semibold ${titleColor} text-sm mb-1`}>Form Title</p>
              <p className={`${textColor} text-sm italic`}>Example: Contact Us</p>
            </div>
            <div>
              <p className={`font-semibold ${titleColor} text-sm mb-1`}>Form Heading / Subtitle</p>
              <p className={`${textColor} text-sm italic`}>Example: We would love to hear from you!</p>
            </div>
            <div>
              <p className={`font-semibold ${titleColor} text-sm mb-1`}>Submit Button Label</p>
              <p className={`${textColor} text-sm italic`}>Example: Send Message, Request Demo, Get in Touch</p>
            </div>
          </div>
          <p className={`${textColor} text-sm mt-4`}>These text elements appear instantly in the preview.</p>
        </div>

        {/* Theme Presets */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>Theme Presets</h3>
          <p className={`${textColor} mb-4`}>At the top, you'll see preset themes like:</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} p-3 rounded text-center ${textColor} text-sm`}>
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
          </div>
          
          <p className={`${textColor} text-sm mb-2`}>Clicking a preset automatically adjusts:</p>
          <ul className={`${textColor} text-sm space-y-1`}>
            <li>• Background</li>
            <li>• Text contrast</li>
            <li>• Accent colors</li>
          </ul>
          <p className={`${textColor} text-sm mt-3 italic`}>
            You can use presets as-is or customize further.
          </p>
        </div>

        {/* Screenshot Placeholder 4 */}
        <div className={`${cardBg} border-2 border-dashed ${borderColor} rounded-lg p-8 mb-6`}>
          <div className="text-center">
            <img src="/widgets/contactform/fourth.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className={`${textColor} text-sm`}>Screenshot: Theme Presets & Color Customization</p>
          </div>
        </div>

        {/* Colors & Styling */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>Colors & Styling</h3>
          <p className={`${textColor} mb-3`}>You can manually adjust:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <div>
                <p className={`font-semibold ${titleColor} text-sm`}>Accent Color</p>
                <p className={`${textColor} text-xs`}>Used for highlights, button emphasis, and accents</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded border ${borderColor}`}></div>
              <div>
                <p className={`font-semibold ${titleColor} text-sm`}>Background Color</p>
                <p className={`${textColor} text-xs`}>Controls the form container background</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-900 to-white rounded"></div>
              <div>
                <p className={`font-semibold ${titleColor} text-sm`}>Text Contrast & Visibility</p>
                <p className={`${textColor} text-xs`}>Automatically optimized for readability</p>
              </div>
            </div>
          </div>
          <p className={`${textColor} text-sm mt-4`}>All changes reflect live in the preview panel.</p>
        </div>

        {/* Live Preview */}
        <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
          <img src="/widgets/contactform/fifth.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
          <p className={`${textColor}`}>
            The left panel always shows the exact final form. What you see here is exactly what visitors 
            will see on your website. No save required to preview changes.
          </p>
        </div>
      </section>

      {/* 3. Code Section */}
      <section className="mb-10">
        <div className={`border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'} pl-6 mb-6`}>
          <h2 className={`text-3xl font-bold mb-3 ${titleColor}`}>3. Code (Embedding the Form)</h2>
          <p className={`${textColor}`}>Once your form is ready, go to the Code tab.</p>
        </div>

        {/* Embed Code */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>Embed Code Section</h3>
          <p className={`${textColor} mb-4`}>You'll see a ready-to-use embed snippet:</p>
          
          <div className={`${codeBg} p-4 rounded-lg border ${borderColor} mb-4`}>
            <code className={`text-sm ${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`}>
              &lt;script src="https://widgetkraft.com/embed.js"&gt;&lt;/script&gt;<br/>
              &lt;div data-widgetkraft="contact-form-abc123"&gt;&lt;/div&gt;
            </code>
          </div>

          <button className={`flex items-center gap-2 ${accentBg} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity`}>
            <Copy size={18} />
            Copy Code
          </button>
        </div>

        {/* How to Use */}
        <div className={`${cardBg} p-6 rounded-lg mb-6 border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-4 ${titleColor}`}>How to Use the Embed Code</h3>
          <ol className={`${textColor} space-y-2`}>
            <li className="flex items-start gap-3">
              <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>1</span>
              <span>Click <strong>Copy Code</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className={`${accentBg} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5`}>2</span>
              <span>Paste it into your website where you want the form to appear:
                <ul className="mt-2 space-y-1 text-sm ml-4">
                  <li>• Contact page</li>
                  <li>• Footer section</li>
                  <li>• Landing page section</li>
                </ul>
              </span>
            </li>
          </ol>
          <p className={`${textColor} mt-4 font-semibold`}>No backend setup required.</p>
        </div>

        {/* Screenshot Placeholder 5 */}
        <div className={`${cardBg} border-2 border-dashed ${borderColor} rounded-lg p-8 mb-6`}>
          <div className="text-center">
            <img src="/widgets/contactform/sixth.png" alt="Dashboard Create Widget Screenshot" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className={`${textColor} text-sm`}>Screenshot: Embed Code Tab with Copy Button</p>
          </div>
        </div>

        {/* Embed Modes */}
        <div className={`${cardBg} p-6 rounded-lg border ${borderColor}`}>
          <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>Embed Modes</h3>
          <p className={`${textColor} mb-2`}><strong>Currently supported:</strong></p>
          <p className={`${textColor} mb-3`}>
            Inline mode – form appears exactly where the code is pasted
          </p>
          <p className={`${textColor} text-sm italic`}>
            (Additional display modes may be added in future releases.)
          </p>
        </div>
      </section>

      {/* Saving & Publishing */}
      <section className="mb-10">
        <div className={`${cardBg} p-6 rounded-lg border-l-4 ${theme === 'dark' ? 'border-orange-600' : 'border-orange-500'}`}>
          <h2 className={`text-2xl font-bold mb-3 ${titleColor} flex items-center gap-2`}>
            <Save size={28} className={accentColor} />
            Saving & Publishing
          </h2>
          <ul className={`${textColor} space-y-2`}>
            <li>• Click <strong>Save</strong> at the top to store changes</li>
            <li>• Updates apply instantly to all live embeds</li>
            <li>• No redeploy or cache clearing required</li>
          </ul>
        </div>
      </section>

      {/* What Happens After Submission */}
      <section className="mb-10">
        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>What Happens After Submission</h2>
        <p className={`${textColor} mb-4`}>When a visitor submits the form:</p>
        
        <div className="space-y-3">
          <div className={`${cardBg} p-4 rounded-lg border ${borderColor} flex items-start gap-3`}>
            <CheckCircle size={20} className={`${accentColor} flex-shrink-0 mt-0.5`} />
            <span className={textColor}>Submission is stored in your WidgetKraft dashboard</span>
          </div>
          <div className={`${cardBg} p-4 rounded-lg border ${borderColor} flex items-start gap-3`}>
            <CheckCircle size={20} className={`${accentColor} flex-shrink-0 mt-0.5`} />
            <span className={textColor}>Credits are consumed only on successful submission</span>
          </div>
          <div className={`${cardBg} p-4 rounded-lg border ${borderColor} flex items-start gap-3`}>
            <CheckCircle size={20} className={`${accentColor} flex-shrink-0 mt-0.5`} />
            <span className={textColor}>Data is isolated per widget and per account</span>
          </div>
        </div>

        <div className={`${cardBg} p-5 rounded-lg border ${borderColor} mt-6`}>
          <p className={`${titleColor} font-semibold mb-2`}>Paid plans can enable:</p>
          <ul className={`${textColor} space-y-1`}>
            <li>• Email notifications</li>
            <li>• CSV exports</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-10">
        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>Best Practices for Contact Forms</h2>
        <div className="space-y-3">
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <p className={textColor}>
              <strong>Place the form near high-intent sections</strong> (pricing, services, demos)
            </p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <p className={textColor}>
              <strong>Use clear button labels</strong> (Request Quote works better than Submit)
            </p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <p className={textColor}>
              <strong>Avoid unnecessary fields</strong>
            </p>
          </div>
          <div className={`${cardBg} p-5 rounded-lg border ${borderColor}`}>
            <p className={textColor}>
              <strong>Match form design to your site branding</strong> using accent colors
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className={`${theme === 'dark' ? 'bg-gradient-to-r from-orange-900/30 to-orange-800/30' : 'bg-gradient-to-r from-orange-50 to-orange-100'} p-8 rounded-lg border ${borderColor}`}>
        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>Summary</h2>
        <p className={`${textColor} mb-4`}>The Contact Form Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Build and deploy forms in minutes</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Customize fields, design, and text visually</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Embed using a single script</span>
          </div>
          <div className={`flex items-start gap-2 ${textColor}`}>
            <CheckCircle size={20} className={accentColor} />
            <span>Collect leads without backend complexity</span>
          </div>
        </div>
        <p className={`${textColor} mt-6 italic`}>
          It's designed to be simple for first-time users and powerful enough for growing teams.
        </p>
      </section>
    </div>
  );
};

export default ContactFormWidgetPage;