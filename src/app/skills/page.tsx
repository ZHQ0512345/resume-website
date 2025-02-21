import { Metadata } from 'next';
import SkillsOverview from '@/components/skills/SkillsOverview';
import TechStack from '@/components/skills/TechStack';
import Certifications from '@/components/skills/Certifications';
import Tools from '@/components/skills/Tools';

export const metadata: Metadata = {
  title: '技能专长 - Your Name',
  description: '我的技术栈、专业技能和工具使用经验',
};

export default function Skills() {
  return (
    <div className="flex flex-col">
      <SkillsOverview />
      <TechStack />
      <Certifications />
      <Tools />
    </div>
  );
} 