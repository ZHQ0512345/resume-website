'use client';

import { useEffect, useState } from 'react';
import { performanceMonitor, type PerformanceMetrics, type ResourceMetrics } from '@/utils/performanceMetrics';

const metricThresholds = {
  FCP: { good: 1800, poor: 3000 },   // ms
  LCP: { good: 2500, poor: 4000 },   // ms
  FID: { good: 100, poor: 300 },     // ms
  CLS: { good: 0.1, poor: 0.25 },    // score
  TTFB: { good: 800, poor: 1800 },   // ms
  TTI: { good: 3800, poor: 7300 },   // ms
};

function formatMetricValue(name: keyof PerformanceMetrics, value: number | null): string {
  if (value === null) return 'N/A';
  
  if (name === 'CLS') {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
}

function getMetricStatus(name: keyof PerformanceMetrics, value: number | null): 'good' | 'moderate' | 'poor' | 'unknown' {
  if (value === null) return 'unknown';
  
  const threshold = metricThresholds[name];
  if (!threshold) return 'unknown';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'moderate';
  return 'poor';
}

export default function PerformanceTest() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [resources, setResources] = useState<ResourceMetrics[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const monitor = performanceMonitor;
    if (!monitor || typeof monitor.subscribe !== 'function') {
      setIsLoading(false);
      return;
    }

    const unsubscribe = monitor.subscribe((newMetrics) => {
      setMetrics(newMetrics);
      if (typeof monitor.getResourceMetrics === 'function') {
        setResources(monitor.getResourceMetrics());
      }
      setIsLoading(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
        <p className="text-yellow-800 dark:text-yellow-200">
          Performance monitoring is not available in the current environment.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-2xl font-bold">Performance Test Results</h2>

      {/* Core Web Vitals */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(Object.keys(metrics) as Array<keyof PerformanceMetrics>).map((metric) => {
          const value = metrics[metric];
          const status = getMetricStatus(metric, value);
          
          return (
            <div
              key={metric}
              className={`p-4 rounded-lg ${
                status === 'good'
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : status === 'moderate'
                  ? 'bg-yellow-50 dark:bg-yellow-900/20'
                  : status === 'poor'
                  ? 'bg-red-50 dark:bg-red-900/20'
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{metric}</h3>
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    status === 'good'
                      ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'
                      : status === 'moderate'
                      ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
                      : status === 'poor'
                      ? 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {formatMetricValue(metric, value)}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {status === 'good'
                  ? 'Good'
                  : status === 'moderate'
                  ? 'Needs Improvement'
                  : status === 'poor'
                  ? 'Poor'
                  : 'Unknown'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Resource Metrics */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Resource Loading Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Resource
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Load Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {resources.map((resource, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {resource.name.split('/').pop()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {resource.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {(resource.size / 1024).toFixed(1)} KB
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {resource.duration.toFixed(0)} ms
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Metrics Description */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-8">
        <h3 className="text-lg font-semibold mb-2">Metrics Description</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>FCP (First Contentful Paint): Time until the first content is painted</li>
          <li>LCP (Largest Contentful Paint): Time until the largest content is painted</li>
          <li>FID (First Input Delay): Time until the page becomes interactive</li>
          <li>CLS (Cumulative Layout Shift): Measures visual stability</li>
          <li>TTFB (Time to First Byte): Time until the first byte is received</li>
          <li>TTI (Time to Interactive): Time until the page becomes fully interactive</li>
        </ul>
      </div>
    </div>
  );
} 