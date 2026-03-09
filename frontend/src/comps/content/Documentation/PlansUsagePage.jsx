// app/plans/page.jsx  (Next.js App Router - Server Component)
import Link from 'next/link';

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    description: "Perfect for getting started and exploring the basics.",
    credits: "50",
    creditsInfinite: false,
    usage: [
      "Upto 50 live chat threads",
      "Or 125 form submissions",
      "Or 200 visitor tracking events",
      "Unlimited Feedbacks",
      "Or 60 AI chatbot chats",
      'Or 200 Comment submissions',
    ],
    includes: [
      "1 widget of each type",
      "Basic analytics",
      "7-day data retention",
      "Community support",
      "Slack integration",
      "Email notifications",
    ],
    includesTitle: "Includes",
    cta: "Get Started",
    ctaHref: "/signup",
    popular: false,
  },
  {
    name: "Basic",
    price: "$17",
    period: "/ month",
    description: "For small teams and startups",
    credits: "300",
    creditsInfinite: false,
    usage: [
      "Upto 300 live chat threads",
      "Or 750 form submissions",
      "Unlimited Feedbacks",
      "Or 3000+ visitor tracking events",
      "Or 375 AI chatbot chats",
      'Or 1200 Comment submissions',
      "Slack integration",
      "Email notifications",
    ],
    includes: [
      "Everything in Free, plus",
      "1 widget of each type",
      "5 automated scraping runs",
      "15-day data retention",
      "Remove WidgetKraft branding",
    ],
    includesTitle: "Includes",
    cta: "Choose Plan",
    ctaHref: "/signup?plan=basic",
    popular: false,
  },
  {
    name: "Premium",
    price: "$27",
    period: "/ month",
    description: "For advanced needs",
    credits: "∞",
    creditsInfinite: true,
    usage: [
      "Unlimited live chat threads",
      "Unlimited form submissions",
      "Unlimited visitor tracking events",
      "Unlimited Feedbacks",
      'Unlimited Comment submissions',
      "Upto 3000 AI chatbot chats / month",
    ],
    includes: [
      "Everything in Basic, plus",
      "2 widgets of each type",
      "15 automated scraping runs",
      "30-day data retention",
      "Priority support",
    ],
    includesTitle: "What's included",
    cta: "Choose Plan",
    ctaHref: "/signup?plan=premium",
    popular: true,
  },
  {
    name: "Business",
    price: "$47",
    period: "/ month",
    description: "For high-volume teams & automation-heavy use cases",
    credits: "∞",
    creditsInfinite: true,
    usage: [
      "Unlimited live chat threads",
      "Unlimited form submissions",
      "Unlimited visitor tracking events",
      "Unlimited Feedbacks",
      'Unlimited Comment submissions',
      "Upto 5000 AI chatbot chats / month",
    ],
    includes: [
      "Everything in Premium, plus",
      "3 widgets of each type",
      "30 automated scraping runs",
      "Unlimited data retention",
    ],
    includesTitle: "What's included",
    cta: "Choose Plan",
    ctaHref: "/signup?plan=business",
    popular: false,
  },
];

export const metadata = {
  title: "Plans & Pricing | WidgetKraft",
  description: "Simple, credit-based pricing. Choose any mix that fits your needs.",
};

export default async function PlansPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white px-6 py-16 font-sans">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Simple, Credit-Based Pricing
        </h1>
        <p className="text-[#8888aa] text-base">
          Use credits across all widgets. Choose any mix that fits your needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative flex flex-col rounded-[18px] p-6 border transition-all duration-200
              ${plan.popular
                ? "bg-[#0d1020] border-[#3b6bff] shadow-[0_0_0_1px_rgba(59,107,255,0.2),0_8px_40px_rgba(59,107,255,0.15)] pt-9"
                : "bg-[#12121a] border-[#1e1e2e] hover:border-[#2a2a40] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              }
            `}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3b6bff] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Popular
              </span>
            )}

            {/* Plan Name */}
            <h2 className="text-lg font-bold text-white mb-1">{plan.name}</h2>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-4xl font-extrabold text-white leading-none">{plan.price}</span>
              <span className="text-[13px] text-[#8888aa] font-medium">{plan.period}</span>
            </div>

            {/* Description */}
            <p className="text-[12.5px] text-[#8888aa] leading-relaxed mb-0">{plan.description}</p>

            {/* Credits Box */}
            <div className="flex items-center gap-2 bg-[#1a1a28] rounded-xl px-4 py-3 my-4">
              <span className="text-[28px] font-extrabold text-[#3b6bff] leading-none">{plan.credits}</span>
              <span className="text-[13px] text-[#8888aa] font-medium">credits / month</span>
            </div>

            {/* Usage Section */}
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#555577] mb-2.5">
              Example usage (choose any combination):
            </p>
            <ul className="flex flex-col gap-1.5 mb-0">
              {plan.usage.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#aaaacc] leading-snug">
                  <span className="mt-[5px] w-[5px] h-[5px] rounded-full bg-[#3b6bff] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-[#1e1e30] my-5" />

            {/* Includes Section */}
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#555577] mb-2.5">
              {plan.includesTitle}
            </p>
            <ul className="flex flex-col gap-1.5 mb-0">
              {plan.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#aaaacc] leading-snug">
                  <span className="text-[#3b6bff] text-sm leading-none mt-[2px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-[#555577] text-[13px] mt-14 max-w-xl mx-auto leading-relaxed">
        All plans include community access, documentation, and regular updates.{" "}
        Credits reset monthly and can be used across any widget combination.
      </p>
    </div>
  );
}