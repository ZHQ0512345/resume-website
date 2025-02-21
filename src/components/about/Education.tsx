'use client';

import { motion } from 'framer-motion';

const education = [
  {
    school: '某知名大学',
    degree: '计算机科学与技术 学士',
    period: '2015 - 2019',
    description: '主修计算机科学与技术，专注于软件工程和Web开发。在校期间参与多个实践项目，并获得优秀毕业生称号。',
  },
  {
    school: '某在线教育平台',
    degree: '全栈开发认证',
    period: '2019',
    description: '完成全栈开发课程，掌握前后端开发技术栈，包括React、Node.js等现代Web技术。',
  },
  {
    school: '持续学习',
    degree: '技术社区',
    period: '2019 - 至今',
    description: '活跃于技术社区，经常参与开源项目贡献，同时通过写技术博客分享经验。',
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

export default function Education() {
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
            教育背景
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            我的学习经历和专业培训
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              variants={item}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {index !== education.length - 1 && (
                <div className="absolute left-[11px] top-[6px] bottom-0 w-[2px] bg-primary-200 dark:bg-primary-800" />
              )}
              <div className="relative">
                <div className="absolute left-[-33px] top-[6px] w-6 h-6 bg-primary-100 dark:bg-primary-900 rounded-full border-2 border-primary-500 dark:border-primary-400" />
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.school}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{item.degree}</span>
                    <span>•</span>
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 