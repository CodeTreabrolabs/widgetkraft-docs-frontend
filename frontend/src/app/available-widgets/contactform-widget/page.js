import React from 'react'
import ContactFormWidgetPage from '@/comps/content/Widgets/ContactFormWidgetPage'

export const metadata = {
  title: 'Contact Form Widget | WidgetKraft Docs',
  description:
    'Build and embed custom contact forms without backend code. Collect leads, customize fields and design, and manage all submissions from one dashboard.',
  keywords: [
    'Contact Form widget',
    'custom contact form',
    'lead generation form',
    'website form builder',
    'form embed code',
    'no-code form builder',
    'contact form builder',
    'form submissions dashboard',
    'customizable form fields',
    'form design customization',
    'inline form embed',
    'lead collection tool',
    'website contact forms',
    'unlimited form submissions',
    'best alternative to Typeform',
    'best alternative to Formspree',
    'best alternative to Google Forms',
    'affordable form builder',
    'form validation tool',
    'responsive contact form',
  ],
  openGraph: {
    title: 'Contact Form Widget | WidgetKraft Docs',
    description:
      'Create custom contact forms in minutes. Add fields, customize design, and collect submissions without backend code or multiple form tools.',
    type: 'article',
  },
};

const page = () => {
  return (
    <div>
      <ContactFormWidgetPage />
    </div>
  )
}

export default page