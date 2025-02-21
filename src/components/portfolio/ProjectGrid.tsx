'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: '智能客服系统',
    description: '基于机器学习的智能客服系统，支持自动问答、情感分析和人工介入。',
    image: '/project-3.jpg',
    category: 'AI 应用',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    link: '/portfolio/ai-chatbot',
  },
  {
    title: '数据分析平台',
    description: '企业级数据分析和可视化平台，支持多种数据源和自定义报表。',
    image: '/project-2.jpg',
    category: '数据可视化',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '/portfolio/data-analytics',
  },
  {
    title: '在线教育平台',
    description: '功能完善的在线教育平台，支持课程管理、直播教学和在线测评。',
    image: '/project-1.jpg',
    category: '全栈应用',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    link: '/portfolio/edu-platform',
  },
  {
    title: '社交媒体 App',
    description: '移动优先的社交媒体应用，支持图片分享、实时聊天和用户关注。',
    image: '/project-2.jpg',
    category: '移动应用',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    link: '/portfolio/social-app',
  },
  {
    title: '开源组件库',
    description: '基于 React 的现代化 UI 组件库，支持主题定制和多种组件。',
    image: '/project-3.jpg',
    category: '开源项目',
    technologies: ['React', 'TypeScript', 'Storybook'],
    link: '/portfolio/ui-library',
  },
  {
    title: '区块链钱包',
    description: '安全可靠的区块链钱包应用，支持多链资产管理和 DApp 集成。',
    image: '/project-1.jpg',
    category: 'Web3',
    technologies: ['React', 'Web3.js', 'Solidity'],
    link: '/portfolio/crypto-wallet',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectGrid() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            更多项目
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            探索我的其他优秀作品
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={project.link}>
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/yourusername"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            访问我的 GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 