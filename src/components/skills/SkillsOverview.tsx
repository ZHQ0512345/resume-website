'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: '前端开发',
    percentage: 90,
    description: '精通现代前端技术栈，包括 React、Next.js、TypeScript 等。',
    color: 'from-blue-500 to-blue-600',
  },
  {
    category: '后端开发',
    percentage: 85,
    description: '熟练掌握 Node.js、Python，具有丰富的后端开发经验。',
    color: 'from-green-500 to-green-600',
  },
  {
    category: '数据库',
    percentage: 80,
    description: '熟悉关系型和非关系型数据库，包括 MySQL、MongoDB 等。',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    category: 'DevOps',
    percentage: 75,
    description: '了解 CI/CD、容器化技术，具有实际项目部署经验。',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function SkillsOverview() {
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
            技能专长
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            我的技术栈和专业领域
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {skill.percentage}%
                </span>
              </div>
              
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            持续学习和提升，保持对新技术的热情和探索精神
          </p>
        </motion.div>
      </div>
    </section>
  );
} 