'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: '企业级电商平台',
    image: '/project-1.jpg',
    description: '基于微服务架构的现代电商平台，支持多商户入驻、订单管理、支付系统等功能。',
    role: '技术负责人',
    duration: '12个月',
    responsibilities: [
      '负责整体技术架构设计和团队管理',
      '实现核心业务模块和性能优化',
      '制定开发规范和工作流程',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    link: '/portfolio/e-commerce',
  },
  {
    title: '数据分析平台',
    image: '/project-2.jpg',
    description: '为企业提供实时数据分析和可视化的平台，支持自定义报表和数据导出。',
    role: '全栈开发工程师',
    duration: '8个月',
    responsibilities: [
      '设计和实现数据可视化模块',
      '开发实时数据处理pipeline',
      '优化大数据查询性能',
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'ELK Stack'],
    link: '/portfolio/data-analytics',
  },
  {
    title: '智能客服系统',
    image: '/project-3.jpg',
    description: '基于机器学习的智能客服系统，支持自动问答、情感分析和人工介入。',
    role: '后端开发工程师',
    duration: '6个月',
    responsibilities: [
      '开发NLP模型接口',
      '设计对话管理系统',
      '实现实时通讯功能',
    ],
    technologies: ['FastAPI', 'TensorFlow', 'WebSocket', 'RabbitMQ'],
    link: '/portfolio/ai-chatbot',
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

export default function ProjectExperience() {
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
            项目经验
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            我参与和主导的重要项目
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">角色</h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">周期</h4>
                      <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      主要职责：
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {project.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    查看详情
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 