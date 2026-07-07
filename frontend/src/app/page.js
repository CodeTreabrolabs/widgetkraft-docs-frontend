import { BookOpen, Layers, Package, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import {
  DocsPage,
  DocsArticleHeader,
  DocsCard,
} from '@/comps/docs-ui';

const cards = [
  {
    id: 'introduction',
    title: 'Introduction & Overview',
    desc: 'Quick intro about WidgetKraft and platform features',
    icon: BookOpen,
  },
  {
    id: 'platform-concepts',
    title: 'Platform Concepts',
    desc: 'Understanding widgets, instances, credits, and dashboard',
    icon: Layers,
  },
  {
    id: 'available-widgets',
    title: 'Available Widgets',
    desc: 'Explore all available widget types and their features',
    icon: Package,
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    desc: 'Tips and strategies for optimal widget usage',
    icon: Lightbulb,
  },
];

export default async function Page() {
  return (
    <DocsPage showToc={false}>
      <DocsArticleHeader
        eyebrow="Documentation"
        title="WidgetKraft Documentation"
        description="Learn how to capture conversations, leads, and visitor insights with WidgetKraft. Qualify leads, boost engagement, automate responses, and streamline your customer interactions."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.id} href={`/${card.id}`} className="block">
              <DocsCard hover className="h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--docs-radius-md)] bg-[var(--docs-accent-soft)] border border-[var(--docs-accent-border)]">
                  <Icon size={20} className="text-[var(--docs-accent)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[var(--docs-ink)]">{card.title}</h3>
                <p className="text-sm text-[var(--docs-steel)]">{card.desc}</p>
              </DocsCard>
            </Link>
          );
        })}
      </div>
    </DocsPage>
  );
}
