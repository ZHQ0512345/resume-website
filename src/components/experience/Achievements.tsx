'use client';

import { motion } from 'framer-motion';

const achievements = [
  {
    title: '技术创新',
    items: [
      {
        name: '微服务架构重构',
        description: '主导团队完成核心系统的微服务改造，提升系统可扩展性和维护性。',
        impact: '系统性能提升40%，部署效率提高60%',
      },
      {
        name: '自动化测试框架',
        description: '设计并实现自动化测试框架，显著提高测试覆盖率和效率。',
        impact: '测试时间减少70%，bug发现率提升50%',
      },
    ],
  },
  {
    title: '团队管理',
    items: [
      {
        name: '技术团队建设',
        description: '组建并带领10人技术团队，建立完善的开发流程和规范。',
        impact: '团队效率提升40%，员工满意度提升35%',
      },
      {
        name: '技术分享文化',
        description: '建立团队技术分享机制，促进知识传播和技术创新。',
        impact: '每月举办4次技术分享，团队能力整体提升',
      },
    ],
  },
  {
    title: '业务贡献',
    items: [
      {
        name: '核心功能优化',
        description: '优化产品核心功能，提升用户体验和系统性能。',
        impact: '用户满意度提升45%，系统响应时间减少50%',
      },
      {
        name: '新产品开发',
        description: '主导新产品从0到1的开发过程，成功上线并获得用户好评。',
        impact: '首月获得10000+活跃用户，收入增长30%',
      },
    ],
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

export default function Achievements() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            主要成就
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            我在技术、管理和业务方面的重要贡献
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((achievement) => (
                  <div
                    key={achievement.name}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {achievement.description}
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3">
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        影响：{achievement.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 