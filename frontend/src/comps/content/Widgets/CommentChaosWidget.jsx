import { CheckCircle, Sparkles, MessageSquare } from 'lucide-react';
import { BsEnvelopePaper } from "react-icons/bs";
import { CommentCodes } from './Codes/CommentCodes';

// This runs on the server (in real Next.js app)
const getWidgetData = () => {
  const widgetDetails = {
    title: 'Comment Chaos',
    description:
      'The Comment Chaos Widget is a simple, customizable widget that lets visitors leave comments, share feedback, and engage directly on your website blog/article section. Moderate and monitor all comments from a central dashboard.',
    customizableFeatures: [
      'Customizable widget title & subheading',
      'Multiple theme options (Default, Dark, Ocean, Sunset, Forest)',
      'Sign-in button CTA text',
      'Post comment button text',
      'Comment moderation & approval',
      'Real-time comment dashboard',
    ],
    creationSteps: [
      'Go to All Widgets → Comment Chaos',
      'Click + Add Widget',
      'Go to My Widgets → Comment Box',
      'Click Configure',
    ],
    pricing: '0.25 Credit / Comment',
  };

  return widgetDetails;
};

export default function CommentChaosWidgetPage() {
  const widgetDetails = getWidgetData();

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-black p-3 rounded-lg">
            <BsEnvelopePaper size={28} className="text-white" />
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
          Engage your audience and manage all conversations from one place.
        </p>
      </div>

      <CommentCodes />

      {/* Creating a Comment Chaos Widget */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Creating a Comment Chaos Widget</h2>
        <p className="text-gray-300 mb-4">To create a Comment Chaos Widget:</p>

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
            <img
              src="/images/commentchaos/comment-chaos-1.png"
              alt="WidgetKraft: All Widgets - Comment Chaos Selection"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: All Widgets | Comment Chaos with + Add Widget</p>
          </div>

          <div className="text-center pt-2">
            <img
              src="/images/commentchaos/comment-chaos-2.png"
              alt="WidgetKraft: My Widgets - Comment Box Configure & View Dashboard"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: My Widgets | Comment Box with Configure & View Dashboard</p>
          </div>
        </div>

        <p className="text-gray-300 mb-4">
          The Comment Chaos editor provides a live preview alongside design and code tabs to customize and deploy your widget instantly.
        </p>

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded mb-6">
          <div className="flex gap-3">
            <Sparkles size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">✨ Instant Moderation:</p>
              <p className="text-gray-300 text-sm">
                Approve, flag, or manage every comment from your dashboard in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configure & Customize Section */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Configure & Customize</h2>
        <p className="text-gray-300 mb-4">
          Use the Design tab to tweak the widget appearance set your title, subheading, button labels, and pick a theme that matches your brand.
        </p>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            <img
              src="/images/commentchaos/comment-chaos-3.png"
              alt="WidgetKraft: Comment Box Configuration - Design Tab with live preview"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: Comment Box | Design Tab with live preview (Appearance & Text Settings)</p>
          </div>
        </div>
      </section>

      {/* Embed Code Section */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Copy the Embed Code</h2>
        <p className="text-gray-300 mb-4">
          Switch to the <strong className="text-white">Code</strong> tab to grab your unique embed snippet. Paste it into your website's HTML wherever you want the comment box to appear.
        </p>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            <img
              src="/images/commentchaos/comment-chaos-4.png"
              alt="WidgetKraft: Comment Box - Code Tab with Embed Code"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: Comment Box | Code Tab with Embed Code & copy button</p>
          </div>
        </div>

        <div className="bg-blue-900/30 border-blue-700 border-l-4 p-4 rounded mb-6">
          <div className="flex gap-3">
            <Sparkles size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white mb-1">✨ Theme Picker:</p>
              <p className="text-gray-300 text-sm">
                Choose from Default, Dark, Ocean, Sunset, or Forest themes before saving - the live preview updates instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Moderation Dashboard */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4 text-white">Comment Moderation Dashboard</h2>
        <p className="text-gray-300 mb-4">
          View all comments across your pages, see approval status, and monitor flagged content from one central dashboard:
        </p>

        <div className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 mb-4">
          <div className="text-center">
            <img
              src="/images/commentchaos/comment-chaos-5.png"
              alt="WidgetKraft: Comment Chaos - My Widgets View Dashboard"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: My Widgets | Comment Chaos with View Dashboard button</p>
          </div>

          <div className="text-center pt-4">
            <img
              src="/images/commentchaos/comment-chaos-6.png"
              alt="WidgetKraft: Comment Chaos - Dashboard showing total comments, approved, flagged, and active pages"
              className="mx-auto mb-3 rounded-lg shadow-lg"
            />
            <p className="text-gray-300 text-sm">Screenshot: Comment Chaos Dashboard | Total Comments, Approved, Flagged & Active Pages with per-article breakdown</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 p-8 rounded-lg border border-blue-700">
        <h2 className="text-3xl font-bold mb-4 text-white">Summary</h2>
        <p className="text-gray-300 mb-4">The Comment Chaos Widget allows you to:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Let visitors leave comments and feedback on any blog or article page</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Customize themes, titles, and button text to match your brand</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Moderate and approve comments from a central dashboard</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Track total comments, flagged content, and active pages at a glance</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Embed with a single script tag-no complex setup required</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Boost engagement and build community around your content</span>
          </div>
        </div>
        <div className="bg-gray-900/50 p-4 rounded-lg border border-blue-800">
          <p className="text-gray-300 italic">
            <strong className="text-white">Comments are moderated in real-time</strong> – Stay in full control of your community. Approve, flag, or remove comments instantly from your dashboard to keep conversations healthy and on-brand.
          </p>
        </div>
      </section>
    </div>
  );
}