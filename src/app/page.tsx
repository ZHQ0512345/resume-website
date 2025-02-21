import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import SkillsPreview from '@/components/home/SkillsPreview';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';

export const metadata: Metadata = {
  title: 'Your Name - 个人简历',
  description: '一个充满热情的开发者的个人简历网站',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SkillsPreview />
      <ProjectsShowcase />
    </div>
  );
}
