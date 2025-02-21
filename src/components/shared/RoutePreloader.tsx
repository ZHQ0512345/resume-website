'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const routes = [
  '/about',
  '/skills',
  '/experience',
  '/portfolio',
  '/contact',
];

export default function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    // 当用户空闲时预加载路由
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const loadRoutes = () => {
        routes.forEach((route) => {
          router.prefetch(route);
        });
      };

      // @ts-ignore - requestIdleCallback 类型定义问题
      window.requestIdleCallback(loadRoutes);
    }
  }, [router]);

  return null;
} 