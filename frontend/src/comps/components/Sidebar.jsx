'use client';

import {
  Home,
  BookOpen,
  SquareLibrary,
  Layers,
  Package,
  Lightbulb,
  Shield,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { TbMessageChatbot, TbPlugConnected } from 'react-icons/tb';
import { TiContacts, TiEdit } from 'react-icons/ti';
import { HiChatBubbleLeftRight, HiMiniUserGroup } from 'react-icons/hi2';
import { FaDiscord, FaSlack } from 'react-icons/fa';
import { BsEnvelopePaper } from 'react-icons/bs';

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    'available-widgets': false,
    integrations: false,
  });

  const navItems = [
    { id: '', label: 'Home', icon: Home, section: 'Getting Started' },
    { id: 'introduction', label: 'Introduction', icon: BookOpen, section: 'Getting Started' },
    { id: 'platform-concepts', label: 'Platform Concepts', icon: Layers, section: 'Getting Started' },
    { id: 'dashboards', label: 'Analytics Dashboard', icon: LayoutDashboard, section: 'Core Features' },
    {
      id: 'available-widgets',
      label: 'Available Widgets',
      icon: Package,
      section: 'Core Features',
      hasSubItems: true,
      subItems: [
        { id: 'available-widgets/ai-chatbot-widget', label: 'AI Chatbot', icon: TbMessageChatbot },
        { id: 'available-widgets/comment-chaos', label: 'Comment Chaos', icon: BsEnvelopePaper },
        { id: 'available-widgets/contactform-widget', label: 'Contact Forms', icon: TiContacts },
        { id: 'available-widgets/feedback-loop', label: 'Feedback Loop', icon: TiEdit },
        { id: 'available-widgets/visitor-tracker-analysis', label: 'Know Your Visitor', icon: HiMiniUserGroup },
        { id: 'available-widgets/live-conversation', label: 'Live Conversation', icon: HiChatBubbleLeftRight },
      ],
    },
    { id: 'my-widgets', label: 'My Widgets', icon: SquareLibrary, section: 'Core Features' },
    {
      id: 'integrations',
      label: 'Integrations',
      icon: TbPlugConnected,
      section: 'Core Features',
      hasSubItems: true,
      subItems: [
        { id: 'integrations/connect-slack', label: 'Slack', icon: FaSlack },
        { id: 'integrations/connect-discord', label: 'Discord', icon: FaDiscord },
      ],
    },
    { id: 'best-practices', label: 'Best Practices', icon: Lightbulb, section: 'Guides' },
    { id: 'security-privacy', label: 'Security & Privacy', icon: Shield, section: 'Guides' },
  ];

  const sections = [...new Set(navItems.map((item) => item.section))];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) onClose();
  };

  const toggleSection = (sectionId, e) => {
    e.stopPropagation();
    e.preventDefault();
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const linkClass = (active) =>
    `flex w-full items-center gap-2.5 rounded-[var(--docs-radius-sm)] px-3 py-2 text-sm transition-colors ${
      active
        ? 'bg-[var(--docs-surface-hover)] font-medium text-[var(--docs-ink)]'
        : 'text-[var(--docs-stone)] hover:bg-[var(--docs-surface)] hover:text-[var(--docs-charcoal)]'
    }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-[var(--docs-sidebar-width)] flex-col border-r border-[var(--docs-hairline)] bg-[var(--docs-canvas-elevated)] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex h-[var(--docs-header-height)] shrink-0 items-center justify-between border-b border-[var(--docs-hairline)] px-4">
          <div className="flex min-w-0 items-center gap-2">
            <img src="/widgetkraft_logo.png" alt="WidgetKraft" className="h-6 w-auto" />
            <span className="truncate text-sm font-semibold text-[var(--docs-ink)]">
              WidgetKraft <span className="text-[var(--docs-accent)]">Docs</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-[var(--docs-radius-sm)] p-1.5 text-[var(--docs-stone)] hover:bg-[var(--docs-surface)] lg:hidden"
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          {sections.map((section) => (
            <div key={section} className="mb-5">
              <h3 className="docs-eyebrow mb-2 px-3">{section}</h3>
              {navItems
                .filter((item) => item.section === section)
                .map((item) => {
                  const Icon = item.icon;
                  const isActive = item.id === '' ? pathname === '/' : pathname === `/${item.id}`;
                  const href = item.id === '' ? '/' : `/${item.id}`;
                  const hasSubItems = item.hasSubItems;
                  const isSubItemActive =
                    hasSubItems &&
                    item.subItems?.some((subItem) => pathname === `/${subItem.id}`);
                  const isExpanded = expandedSections[item.id] || isSubItemActive;

                  return (
                    <div key={item.id || 'home'} className="mb-0.5">
                      {hasSubItems ? (
                        <>
                          <div className="flex items-center">
                            <Link
                              href={href}
                              className={`${linkClass(isActive || isSubItemActive)} flex-1`}
                              onClick={handleLinkClick}
                            >
                              <Icon size={16} className="shrink-0 opacity-80" />
                              <span className="truncate">{item.label}</span>
                            </Link>
                            <button
                              onClick={(e) => toggleSection(item.id, e)}
                              className="rounded-[var(--docs-radius-sm)] p-1.5 text-[var(--docs-stone)] hover:bg-[var(--docs-surface)]"
                              aria-label={isExpanded ? 'Collapse' : 'Expand'}
                            >
                              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </button>
                          </div>

                          {isExpanded && (
                            <div className="mt-0.5 ml-3 space-y-0.5 border-l border-[var(--docs-hairline)] pl-2">
                              {item.subItems?.map((subItem) => {
                                const SubIcon = subItem.icon;
                                const isSubActive = pathname === `/${subItem.id}`;
                                return (
                                  <Link
                                    key={subItem.id}
                                    href={`/${subItem.id}`}
                                    className={linkClass(isSubActive)}
                                    onClick={handleLinkClick}
                                  >
                                    {SubIcon && <SubIcon size={14} className="shrink-0 opacity-70" />}
                                    <span className="truncate text-[13px]">{subItem.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={href}
                          className={linkClass(isActive)}
                          onClick={handleLinkClick}
                        >
                          <Icon size={16} className="shrink-0 opacity-80" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
