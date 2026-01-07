import './globals.css';
import Sidebar from '@/comps/components/Sidebar';
import Header from '@/comps/components/Header';

export const metadata = {
  title: 'WidgetKraft Documentation',
  description: 'WidgetKraft Documentation Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-gray-300 min-h-screen">
        <Sidebar />
        <Header />
        <main className="lg:ml-64 pt-24 px-6 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}