'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ProficiencyLevel = 'Expert' | 'Advanced' | 'Intermediate';

interface Tool {
  name: string;
  icon: ReactNode;
  proficiency: ProficiencyLevel;
  description: string;
}

const tools: Tool[] = [
  {
    name: 'VS Code',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    proficiency: 'Expert',
    description: '主要的代码编辑器，熟练使用各种插件和快捷键。',
  },
  {
    name: 'Git & GitHub',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    proficiency: 'Advanced',
    description: '版本控制和协作平台，熟练使用各种Git命令和GitHub功能。',
  },
  {
    name: 'Docker',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    proficiency: 'Intermediate',
    description: '容器化工具，能够编写Dockerfile和使用Docker Compose。',
  },
  {
    name: 'Figma',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    proficiency: 'Intermediate',
    description: '设计工具，能够查看和导出设计资源，进行简单的设计修改。',
  },
  {
    name: 'Postman',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    proficiency: 'Advanced',
    description: 'API测试工具，熟练使用各种请求方法和测试脚本。',
  },
  {
    name: 'Terminal',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    proficiency: 'Expert',
    description: '命令行工具，熟练使用各种Shell命令和脚本。',
  },
];

const proficiencyColors: Record<ProficiencyLevel, string> = {
  Expert: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  Advanced: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
};

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

export default function Tools() {
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
            开发工具
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            日常使用的开发工具和熟练程度
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <span className={`inline-block px-2 py-1 rounded text-sm font-medium ${proficiencyColors[tool.proficiency]}`}>
                    {tool.proficiency}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 