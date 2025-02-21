'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  FCP: number; // First Contentful Paint
  LCP: number; // Largest Contentful Paint
  FID: number; // First Input Delay
  CLS: number; // Cumulative Layout Shift
  TTFB: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 监控 FCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcp = entries[0];
          console.log('FCP:', fcp.startTime);
        }
      }).observe({ entryTypes: ['paint'] });

      // 监控 LCP
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        console.log('LCP:', lcp.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // 监控 FID
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fid = entry as PerformanceEventTiming;
          console.log('FID:', fid.processingStart - fid.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // 监控 CLS
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          console.log('CLS:', entry.value);
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // 监控 TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
      }
    }
  }, []);

  return null;
} 