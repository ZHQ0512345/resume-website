import { Metadata } from 'next';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import ProjectCategories from '@/components/portfolio/ProjectCategories';
import FeaturedProject from '@/components/portfolio/FeaturedProject';

export const metadata: Metadata = {
  title: '作品集 - Your Name',
  description: '我的项目作品集，展示我的技术实力和创造力',
};

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <PortfolioHero />
      <ProjectCategories />
      <FeaturedProject />
      <ProjectGrid />
    </div>
  );
} 