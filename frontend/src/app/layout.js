import './globals.css';
import HeaderWithSidebar from '@/comps/components/HeaderWithSidebar';
import FeedbackWidgetContext from '@/comps/context/FeedbackWidgetContext';
import AIChatbotWidget from '@/comps/components/AIChatbotWidget';

export const metadata = {
  title: 'WidgetKraft Documentation',
  description: 'WidgetKraft Documentation Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-gray-300 min-h-screen">
        <HeaderWithSidebar>
          {children}
        </HeaderWithSidebar>
        <FeedbackWidgetContext />
        <AIChatbotWidget />
      </body>
    </html>
  );
}