import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import Education from '@/components/about/Education';
import Philosophy from '@/components/about/Philosophy';
import Interests from '@/components/about/Interests';

export const metadata: Metadata = {
  title: '关于我 - Your Name',
  description: '了解更多关于我的经历、教育背景和个人兴趣',
};

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Education />
      <Philosophy />
      <Interests />
    </div>
  );
} 