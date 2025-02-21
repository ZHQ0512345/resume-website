import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import SocialLinks from '@/components/contact/SocialLinks';

export const metadata: Metadata = {
  title: '联系我 - Your Name',
  description: '欢迎与我联系，我很乐意与您交流技术、项目合作或职业机会。',
};

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <SocialLinks />
    </main>
  );
} 