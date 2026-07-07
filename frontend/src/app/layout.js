import './globals.css';
import { Inter } from 'next/font/google';
import HeaderWithSidebar from '@/comps/components/HeaderWithSidebar';
import FeedbackWidgetContext from '@/comps/context/FeedbackWidgetContext';
import AIChatbotWidget from '@/comps/components/AIChatbotWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'WidgetKraft Documentation',
  description: 'WidgetKraft Documentation Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--docs-canvas)] text-[var(--docs-charcoal)] antialiased">
        <HeaderWithSidebar>
          {children}
        </HeaderWithSidebar>
        <FeedbackWidgetContext />
        <AIChatbotWidget />
      </body>
    </html>
  );
}
