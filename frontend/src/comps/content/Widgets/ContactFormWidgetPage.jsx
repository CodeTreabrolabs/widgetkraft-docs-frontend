import Image from 'next/image';
import Link from 'next/link';
import { Mail, Plus, Settings, Code, Eye, Palette, Save, Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { TiContacts } from "react-icons/ti";

// This runs on the server
const getWidgetData = async () => {
  const widgetDetails = {
    title: 'Contact Form Widget',
    description:
      'The Contact Form Widget lets you collect structured leads, inquiries, and messages directly from your website—without building backend logic or managing multiple form tools.',
    customizableFeatures: [
      'Fields and validation',
      'Visual design and theme',
      'Button labels and text',
      'Embed behavior (inline or section-based)',
    ],
    creationSteps: [
      'Go to All Widgets → Contact Form',
      'Click + Add Widget',
      'Go to My Widgets → Contact Form',
      'Click Configure',
    ],
    screenshot: '/widgets/contactform/first.png',
    screenshotCaption: 'Screenshot: Dashboard → Create Widget → Select Contact Form',
    pricing: '0.4 credit / submission',
  };

  return widgetDetails;
};

export default async function ContactFormWidgetPage() {
  const widgetDetails = await getWidgetData();

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-black p-3 rounded-lg">
            <TiContacts size={28} className="text-white" />
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
              <CheckCircle size={20} className="text-blue-600" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-300 mt-4 italic">
          All submissions are captured inside your WidgetKraft dashboard.
        </p>
      </div>

      {/* Creating a Contact Form Widget */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating a Contact Form Widget</h2>
        <p className="text-gray-300 mb-4">To create a Contact Form widget:</p>

        <ol className="text-gray-300 space-y-2 mb-6">
          {widgetDetails.creationSteps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span
                className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
              >
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {/* Screenshot Placeholder */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            {/* Using Next.js Image component for better performance */}
            <img src="/images/contactform/first.png" alt="WidgetKraft: Creating a Contact Form Widget - Dashboard Selection" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">{widgetDetails.screenshotCaption}</p>
          </div>
        </div>

        <p className="text-gray-300">
          The form editor opens with a live preview on the left and controls on the right.
          Any change you make updates the preview instantly.
        </p>
      </section>

      {/* Understanding the Editor */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Understanding the Contact Form Editor</h2>
        <p className="text-gray-300 mb-6">
          The editor is divided into three main sections:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Plus size={32} className="text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Form Fields</h3>
            <p className="text-gray-300 text-sm">What data you collect</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Palette size={32} className="text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Form Design</h3>
            <p className="text-gray-300 text-sm">How the form looks</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 text-center">
            <Code size={32} className="text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Code</h3>
            <p className="text-gray-300 text-sm">How you embed it</p>
          </div>
        </div>

        {/* Screenshot Placeholder 2 */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-12 mb-6">
          <div className="text-center">
            <img src="/images/contactform/second.png" alt="WidgetKraft: Form Editor Interface with Live Preview" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Form Editor Interface with Live Preview</p>
          </div>
        </div>
      </section>

      {/* 1. Form Fields Section */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">1. Form Fields</h2>
          <p className="text-gray-300">This section controls what information the visitor submits.</p>
        </div>

        {/* Adding Fields */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
            <Plus size={24} className="text-blue-600" />
            Adding Fields
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Click <strong>+ Add Field</strong></li>
            <li>• Choose the field type (Email, Text, Textarea, etc.)</li>
            <li>• Each field appears immediately in the live preview</li>
          </ul>
        </div>

        {/* Field Settings */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Field Settings</h3>
          <p className="text-gray-300 mb-4">For each field, you can configure:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Label</h4>
              <p className="text-gray-300 text-sm mb-1">What the user sees above the field</p>
              <p className="text-gray-300 text-sm italic">Example: Email, Name, Message</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Type</h4>
              <p className="text-gray-300 text-sm mb-1">Determines validation and input behavior</p>
              <div className="bg-gray-900 p-3 rounded text-sm text-gray-300 mt-2">
                <div>• <strong>Email</strong> → validates email format</div>
                <div>• <strong>Text</strong> → single-line input</div>
                <div>• <strong>Textarea</strong> → multi-line message input</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Placeholder Text</h4>
              <p className="text-gray-300 text-sm mb-1">Hint text shown inside the field</p>
              <p className="text-gray-300 text-sm italic">Example: you@domain.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-1">Required Field</h4>
              <p className="text-gray-300 text-sm">When enabled:</p>
              <div className="text-gray-300 text-sm mt-2 space-y-1">
                <div>• Shows an asterisk (*)</div>
                <div>• Prevents submission unless filled</div>
                <div>• Automatically validates input</div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Placeholder 3 */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/contactform/third.png" alt="WidgetKraft: Form Fields - Field Settings Panel" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Field Settings Panel</p>
          </div>
        </div>

        {/* Reordering & Deleting */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-white mb-2">Reordering Fields</h4>
            <p className="text-gray-300 text-sm">
              Use the up / down arrows to reorder fields. The preview updates instantly so you can see the final layout.
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-white mb-2">Deleting Fields</h4>
            <p className="text-gray-300 text-sm">
              Click Delete on any field. The field is removed immediately from the form.
            </p>
          </div>
        </div>

        {/* Best Practice Alert */}
        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded">
          <div className="flex gap-3">
            <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">💡 Best practice:</p>
              <p className="text-gray-300 text-sm">
                Keep forms short (3–5 fields) to improve submission rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Form Design Section */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">2. Form Design</h2>
          <p className="text-gray-300">This section controls how the form looks and feels.</p>
        </div>

        {/* Form Text */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Form Text</h3>
          <p className="text-gray-300 mb-3">You can customize:</p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-white text-sm mb-1">Form Title</p>
              <p className="text-gray-300 text-sm italic">Example: Contact Us</p>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">Form Heading / Subtitle</p>
              <p className="text-gray-300 text-sm italic">Example: We would love to hear from you!</p>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">Submit Button Label</p>
              <p className="text-gray-300 text-sm italic">Example: Send Message, Request Demo, Get in Touch</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">These text elements appear instantly in the preview.</p>
        </div>

        {/* Theme Presets */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Theme Presets</h3>
          <p className="text-gray-300 mb-4">At the top, you'll see preset themes like:</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
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
          </div>

          <p className="text-gray-300 text-sm mb-2">Clicking a preset automatically adjusts:</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Background</li>
            <li>• Text contrast</li>
            <li>• Accent colors</li>
          </ul>
          <p className="text-gray-300 text-sm mt-3 italic">
            You can use presets as-is or customize further.
          </p>
        </div>

        {/* Screenshot Placeholder 4 */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/contactform/fourth.png" alt="WidgetKraft: Form Design - Theme Presets and Color Customization" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Theme Presets & Color Customization</p>
          </div>
        </div>

        {/* Colors & Styling */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Colors & Styling</h3>
          <p className="text-gray-300 mb-3">You can manually adjust:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <div>
                <p className="font-semibold text-white text-sm">Accent Color</p>
                <p className="text-gray-300 text-xs">Used for highlights, button emphasis, and accents</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded border border-gray-700"></div>
              <div>
                <p className="font-semibold text-white text-sm">Background Color</p>
                <p className="text-gray-300 text-xs">Controls the form container background</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-900 to-white rounded"></div>
              <div>
                <p className="font-semibold text-white text-sm">Text Contrast & Visibility</p>
                <p className="text-gray-300 text-xs">Automatically optimized for readability</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">All changes reflect live in the preview panel.</p>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <img src="/images/contactform/fifth.png" alt="WidgetKraft: Form Design - Live Preview Panel" className="mx-auto mb-3 rounded-lg shadow-lg" />
          <p className="text-gray-300">
            The left panel always shows the exact final form. What you see here is exactly what visitors
            will see on your website. No save required to preview changes.
          </p>
        </div>
      </section>

      {/* 3. Code Section */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-600 pl-6 mb-6">
          <h2 className="text-3xl font-bold mb-3 text-white">3. Code (Embedding the Form)</h2>
          <p className="text-gray-300">Once your form is ready, go to the Code tab.</p>
        </div>

        {/* Embed Code */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">Embed Code Section</h3>
          <p className="text-gray-300 mb-4">You'll see a ready-to-use embed snippet:</p>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
            <code className="text-sm text-green-400">
              {`<script src="https://unpkg.com/@getwidgets/contact-widget@latest/dist/contact-widget.umd.js"></script>
              <script>
              ContactFormWidget.init({
                  widgetId: "7aaaaaaa-xxxx-yyyy-zzzz-2bbbbbbbbbbb",
                  mode: "inline"
              });
              </script>`}
            </code>
          </div>

          {/* Note: This button would need to be client component for copy functionality */}
          <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg w-fit">
            <Copy size={18} />
            Copy Code
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white">How to Use the Embed Code</h3>
          <ol className="text-gray-300 space-y-2">
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Click <strong>Copy Code</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <span>Paste it into your website where you want the form to appear:
                <ul className="mt-2 space-y-1 text-sm ml-4">
                  <li>• Contact page</li>
                  <li>• Footer section</li>
                  <li>• Landing page section</li>
                </ul>
              </span>
            </li>
          </ol>
          <p className="text-gray-300 mt-4 font-semibold">No backend setup required.</p>
        </div>

        {/* Screenshot Placeholder 5 */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-6">
          <div className="text-center">
            <img src="/images/contactform/sixth.png" alt="WidgetKraft: Code Tab - Embed Code with Copy Button" className="mx-auto mb-3 rounded-lg shadow-lg" />
            <p className="text-gray-300 text-sm">Screenshot: Embed Code Tab with Copy Button</p>
          </div>
        </div>

        {/* Embed Modes */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-white">Embed Modes</h3>
          <p className="text-gray-300 mb-2"><strong>Currently supported:</strong></p>
          <p className="text-gray-300 mb-3">
            Inline mode – form appears exactly where the code is pasted
          </p>
          <p className="text-gray-300 text-sm italic">
            (Additional display modes may be added in future releases.)
          </p>
        </div>
      </section>

      {/* Saving & Publishing */}
      <section className="mb-6">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            <Save size={28} className="text-blue-600" />
            Saving & Publishing
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Click <strong>Save</strong> at the top to store changes</li>
            <li>• Updates apply instantly to all live embeds</li>
            <li>• No redeploy or cache clearing required</li>
          </ul>
        </div>
      </section>

      {/* What Happens After Submission */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">What Happens After Submission</h2>
        <p className="text-gray-300 mb-4">When a visitor submits the form:</p>

        <div className="space-y-3">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">Submission is stored in your WidgetKraft dashboard</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">Credits are consumed only on successful submission</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3">
            <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">Data is isolated per widget and per account</span>
          </div>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 mt-6">
          <p className="text-white font-semibold mb-2">Paid plans can enable:</p>
          <ul className="text-gray-300 space-y-1">
            <li>• Email notifications</li>
            <li>• CSV exports</li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Best Practices for Contact Forms</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-gray-300">
              <strong>Place the form near high-intent sections</strong> (pricing, services, demos)
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-gray-300">
              <strong>Use clear button labels</strong> (Request Quote works better than Submit)
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-gray-300">
              <strong>Avoid unnecessary fields</strong>
            </p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <p className="text-gray-300">
              <strong>Match form design to your site branding</strong> using accent colors
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 p-8 rounded-lg border border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">The Contact Form Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600" />
            <span>Build and deploy forms in minutes</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600" />
            <span>Customize fields, design, and text visually</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600" />
            <span>Embed using a single script</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-600" />
            <span>Collect leads without backend complexity</span>
          </div>
        </div>
        <p className="text-gray-300 mt-6 italic">
          It's designed to be simple for first-time users and powerful enough for growing teams.
        </p>
      </section>
    </div>
  );
}