import { Metadata } from 'next';
import WorkExperience from '@/components/experience/WorkExperience';
import ProjectExperience from '@/components/experience/ProjectExperience';
import Achievements from '@/components/experience/Achievements';

export const metadata: Metadata = {
  title: '工作经历 - Your Name',
  description: '我的专业工作经历、项目经验和主要成就',
};

export default function Experience() {
  return (
    <div className="flex flex-col">
      <WorkExperience />
      <ProjectExperience />
      <Achievements />
    </div>
  );
} 