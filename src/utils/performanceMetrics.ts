export interface PerformanceMetrics {
  FCP: number | null;  // First Contentful Paint
  LCP: number | null;  // Largest Contentful Paint
  FID: number | null;  // First Input Delay
  CLS: number | null;  // Cumulative Layout Shift
  TTFB: number | null; // Time to First Byte
  TTI: number | null;  // Time to Interactive
}

export interface ResourceMetrics {
  name: string;
  duration: number;
  size: number;
  type: string;
}

type MetricsCallback = (metrics: PerformanceMetrics) => void;

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputTiming extends PerformanceEntry {
  processingStart: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    FCP: null,
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
    TTI: null,
  };
  private subscribers: Set<MetricsCallback> = new Set();
  private clsValue = 0;
  private clsEntries: PerformanceEntry[] = [];

  constructor() {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics.FCP = entry.startTime;
      this.notifySubscribers();
    });

    // Largest Contentful Paint
    this.observePaint('largest-contentful-paint', (entry) => {
      this.metrics.LCP = entry.startTime;
      this.notifySubscribers();
    });

    // First Input Delay
    this.observeFirstInput((entry) => {
      const firstInput = entry as FirstInputTiming;
      this.metrics.FID = firstInput.processingStart - firstInput.startTime;
      this.notifySubscribers();
    });

    // Cumulative Layout Shift
    this.observeLayoutShift((entries) => {
      for (const entry of entries as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          this.clsValue += entry.value;
          this.clsEntries.push(entry);
          
          // Only keep the 5 most recent entries
          if (this.clsEntries.length > 5) {
            this.clsEntries.shift();
          }
          
          // Update CLS value
          this.metrics.CLS = this.clsValue;
          this.notifySubscribers();
        }
      }
    });

    // Time to First Byte
    if (performance.getEntriesByType) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        this.metrics.TTFB = navEntry.responseStart;
        this.notifySubscribers();
      }
    }

    // Time to Interactive (approximation)
    this.calculateTTI();
  }

  private observePaint(type: string, callback: (entry: PerformanceEntry) => void) {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          callback(lastEntry);
        }
      });

      observer.observe({ entryTypes: ['paint'] });
    } catch (e) {
      console.error(`Failed to observe ${type}:`, e);
    }
  }

  private observeFirstInput(callback: (entry: PerformanceEntry) => void) {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          callback(entries[0]);
        }
      });

      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.error('Failed to observe First Input Delay:', e);
    }
  }

  private observeLayoutShift(callback: (entries: PerformanceEntry[]) => void) {
    if (!window.PerformanceObserver) return;

    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.error('Failed to observe Cumulative Layout Shift:', e);
    }
  }

  private calculateTTI() {
    if (!performance.getEntriesByType) return;

    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navEntry) return;

    // This is a simplified TTI calculation
    // In a production environment, you might want to use a more sophisticated approach
    const loadTime = navEntry.loadEventEnd;
    if (loadTime > 0) {
      this.metrics.TTI = loadTime;
      this.notifySubscribers();
    }
  }

  public subscribe(callback: MetricsCallback): () => void {
    this.subscribers.add(callback);
    callback({ ...this.metrics });

    return () => {
      this.subscribers.delete(callback);
    };
  }

  private notifySubscribers() {
    for (const subscriber of this.subscribers) {
      subscriber({ ...this.metrics });
    }
  }

  public getResourceMetrics(): ResourceMetrics[] {
    if (!performance.getEntriesByType) return [];

    return performance
      .getEntriesByType('resource')
      .map((entry) => {
        const resourceEntry = entry as PerformanceResourceTiming;
        return {
          name: resourceEntry.name,
          duration: resourceEntry.duration,
          size: resourceEntry.transferSize || 0,
          type: resourceEntry.initiatorType,
        };
      })
      .filter((resource) => resource.size > 0);
  }
}

export const performanceMonitor = typeof window !== 'undefined' ? new PerformanceMonitor() : null; 