'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: '某科技公司',
    position: '高级全栈开发工程师',
    period: '2021 - 至今',
    description: '负责公司核心产品的开发和维护，主导多个重要项目的技术实现。',
    achievements: [
      '优化了产品性能，提升了页面加载速度30%',
      '设计并实现了新的微服务架构，提高了系统可扩展性',
      '带领团队完成了产品的国际化改造，支持多语言',
      '指导初级开发者，提升团队整体技术水平',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
  },
  {
    company: '某互联网公司',
    position: '前端开发工程师',
    period: '2019 - 2021',
    description: '参与公司电商平台的开发，负责用户界面和交互功能的实现。',
    achievements: [
      '实现了新的购物车系统，提升了用户体验',
      '开发了组件库，提高了开发效率',
      '优化了首页性能，提升了转化率15%',
      '参与了移动端适配，提升了移动端用户体验',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Sass', 'Webpack'],
  },
  {
    company: '某软件公司',
    position: '初级开发工程师',
    period: '2018 - 2019',
    description: '参与企业管理系统的开发，负责后端API和数据库的设计实现。',
    achievements: [
      '设计并实现了权限管理系统',
      '优化了数据库查询性能',
      '实现了数据导出功能',
      '编写了详细的技术文档',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WorkExperience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            工作经历
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            我的专业工作经验和成就
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={item}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[24px] bottom-0 w-[2px] bg-primary-200 dark:bg-primary-800" />
              )}
              <div className="relative">
                <div className="absolute left-[-33px] top-[24px] w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full border-2 border-primary-500 dark:border-primary-400" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="text-lg text-primary-600 dark:text-primary-400">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      主要成就：
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 