'use client';

import OptimizedImage from '../shared/OptimizedImage';

export default function ResponsiveTest() {
  return (
    <div className="space-y-8 p-4">
      <h2 className="text-2xl font-bold">响应式图片测试</h2>
      
      {/* 小屏幕 */}
      <div className="sm:hidden">
        <OptimizedImage
          src="/images/test-image.jpg"
          alt="测试图片 - 小屏幕"
          width={640}
          height={360}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          小屏幕版本 (640px)
        </p>
      </div>

      {/* 中等屏幕 */}
      <div className="hidden sm:block md:hidden">
        <OptimizedImage
          src="/images/test-image.jpg"
          alt="测试图片 - 中等屏幕"
          width={828}
          height={466}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          中等屏幕版本 (828px)
        </p>
      </div>

      {/* 大屏幕 */}
      <div className="hidden md:block">
        <OptimizedImage
          src="/images/test-image.jpg"
          alt="测试图片 - 大屏幕"
          width={1200}
          height={675}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          大屏幕版本 (1200px)
        </p>
      </div>

      {/* 响应式网格布局 */}
      <div>
        <h3 className="text-xl font-semibold mb-4">响应式网格布局测试</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square">
              <OptimizedImage
                src={`/images/grid-image-${i}.jpg`}
                alt={`网格图片 ${i}`}
                width={300}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          网格布局会根据屏幕宽度自动调整列数
        </p>
      </div>

      {/* 响应式背景图片 */}
      <div>
        <h3 className="text-xl font-semibold mb-4">响应式背景图片测试</h3>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <OptimizedImage
            src="/images/background-image.jpg"
            alt="背景图片"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h4 className="text-white text-2xl font-bold">
              响应式背景图片
            </h4>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          背景图片会自动适应容器大小
        </p>
      </div>

      {/* 测试说明 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-8">
        <h3 className="text-lg font-semibold mb-2">测试说明</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>调整浏览器窗口大小以测试响应式布局</li>
          <li>观察不同屏幕尺寸下加载的图片版本</li>
          <li>检查网络面板中实际加载的图片大小</li>
          <li>验证图片是否正确应用了 WebP 格式（如果支持）</li>
        </ul>
      </div>
    </div>
  );
} 