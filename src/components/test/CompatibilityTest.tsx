'use client';

import { useEffect, useState } from 'react';
import { checkBrowserFeatures, logBrowserInfo } from '@/utils/browserCheck';
import OptimizedImage from '../shared/OptimizedImage';
import type { BrowserFeatures } from '@/utils/browserCheck';

interface TestResult {
  name: string;
  status: 'success' | 'error' | 'warning';
  message: string;
}

export default function CompatibilityTest() {
  const [features, setFeatures] = useState<BrowserFeatures | null>(null);
  const [tests, setTests] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function runTests() {
      // 记录浏览器信息
      const browserInfo = logBrowserInfo();

      // 检查浏览器特性
      const browserFeatures = await checkBrowserFeatures();
      setFeatures(browserFeatures);

      // 运行图片加载测试
      const imageTests = await testImageLoading();
      
      // 收集所有测试结果
      const allTests: TestResult[] = [
        {
          name: '浏览器检测',
          status: 'success',
          message: `${browserInfo.browser.name} ${browserInfo.browser.version}`,
        },
        {
          name: 'WebP 支持',
          status: browserFeatures.webp ? 'success' : 'warning',
          message: browserFeatures.webp ? '支持基础 WebP' : '不支持 WebP',
        },
        {
          name: 'WebP Alpha',
          status: browserFeatures.webpAlpha ? 'success' : 'warning',
          message: browserFeatures.webpAlpha ? '支持 Alpha 通道' : '不支持 Alpha 通道',
        },
        {
          name: 'AVIF 支持',
          status: browserFeatures.avif ? 'success' : 'warning',
          message: browserFeatures.avif ? '支持 AVIF' : '不支持 AVIF',
        },
        {
          name: 'Intersection Observer',
          status: browserFeatures.intersectionObserver ? 'success' : 'error',
          message: browserFeatures.intersectionObserver ? '支持' : '不支持（影响懒加载）',
        },
        ...imageTests,
      ];

      setTests(allTests);
      setLoading(false);
    }

    runTests();
  }, []);

  // 测试图片加载
  async function testImageLoading() {
    const tests: TestResult[] = [];
    const sizes = [640, 750, 828, 1080, 1200, 1920];

    for (const size of sizes) {
      try {
        const img = document.createElement('img');
        img.src = `/optimized/test-image-${size}.jpg`;
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
        tests.push({
          name: `${size}px 图片加载`,
          status: 'success',
          message: '加载成功',
        });
      } catch {
        tests.push({
          name: `${size}px 图片加载`,
          status: 'error',
          message: '加载失败',
        });
      }
    }

    return tests;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-2xl font-bold">兼容性测试结果</h2>

      <div className="grid gap-4">
        {tests.map((test) => (
          <div
            key={test.name}
            className={`p-4 rounded-lg ${
              test.status === 'success'
                ? 'bg-green-50 dark:bg-green-900/20'
                : test.status === 'warning'
                ? 'bg-yellow-50 dark:bg-yellow-900/20'
                : 'bg-red-50 dark:bg-red-900/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{test.name}</h3>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  test.status === 'success'
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                    : test.status === 'warning'
                    ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
                    : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'
                }`}
              >
                {test.status === 'success' ? '通过' : test.status === 'warning' ? '警告' : '失败'}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{test.message}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">图片加载测试</h3>
        <div className="space-y-4">
          <OptimizedImage
            src="/images/test-image.jpg"
            alt="测试图片"
            width={1200}
            height={675}
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto rounded-lg"
            priority
          />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            此图片应该根据设备宽度自动加载最适合的尺寸。请尝试调整浏览器窗口大小来测试响应式加载。
          </p>
        </div>
      </div>
    </div>
  );
} 