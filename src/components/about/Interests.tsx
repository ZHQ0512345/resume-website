'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const interests = [
  {
    title: '技术博客',
    description: '分享技术见解和经验，帮助他人同时提升自己。',
    image: '/interest-1.jpg',
  },
  {
    title: '开源贡献',
    description: '参与开源项目，与全球开发者交流协作。',
    image: '/interest-2.jpg',
  },
  {
    title: '摄影',
    description: '通过镜头记录生活中的美好瞬间。',
    image: '/interest-3.jpg',
  },
  {
    title: '阅读',
    description: '涉猎广泛的技术书籍和文学作品。',
    image: '/interest-4.jpg',
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function Interests() {
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
            兴趣爱好
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            工作之余的热爱和追求
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.title}
              variants={item}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 