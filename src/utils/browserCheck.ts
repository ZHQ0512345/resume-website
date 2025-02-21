interface BrowserFeatures {
  webp: boolean;
  webpLossless: boolean;
  webpAlpha: boolean;
  avif: boolean;
  intersectionObserver: boolean;
  webWorker: boolean;
  webGL: boolean;
  webStorage: boolean;
  webAnimation: boolean;
}

export async function checkBrowserFeatures(): Promise<BrowserFeatures> {
  const features: BrowserFeatures = {
    webp: false,
    webpLossless: false,
    webpAlpha: false,
    avif: false,
    intersectionObserver: false,
    webWorker: false,
    webGL: false,
    webStorage: false,
    webAnimation: false,
  };

  // 检测 WebP 支持
  try {
    const webP = document.createElement('img');
    webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    await new Promise<void>((resolve, reject) => {
      webP.onload = () => resolve();
      webP.onerror = () => reject();
    });
    features.webp = true;

    // 检测无损 WebP 支持
    const webPLossless = document.createElement('img');
    webPLossless.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    await new Promise<void>((resolve, reject) => {
      webPLossless.onload = () => resolve();
      webPLossless.onerror = () => reject();
    });
    features.webpLossless = true;

    // 检测带 Alpha 通道的 WebP 支持
    const webPAlpha = document.createElement('img');
    webPAlpha.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==';
    await new Promise<void>((resolve, reject) => {
      webPAlpha.onload = () => resolve();
      webPAlpha.onerror = () => reject();
    });
    features.webpAlpha = true;
  } catch {
    // WebP 不支持
  }

  // 检测 AVIF 支持
  try {
    const avif = document.createElement('img');
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    await new Promise<void>((resolve, reject) => {
      avif.onload = () => resolve();
      avif.onerror = () => reject();
    });
    features.avif = true;
  } catch {
    // AVIF 不支持
  }

  // 检测 Intersection Observer
  features.intersectionObserver = 'IntersectionObserver' in window;

  // 检测 Web Worker
  features.webWorker = 'Worker' in window;

  // 检测 WebGL
  try {
    const canvas = document.createElement('canvas');
    features.webGL = !!(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    );
  } catch {
    // WebGL 不支持
  }

  // 检测 Web Storage
  features.webStorage = 'localStorage' in window && 'sessionStorage' in window;

  // 检测 Web Animations
  features.webAnimation = 'animate' in document.createElement('div');

  return features;
}

export function logBrowserInfo() {
  const ua = navigator.userAgent;
  const browserInfo = {
    userAgent: ua,
    browser: getBrowserInfo(ua),
    platform: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    screenResolution: {
      width: window.screen.width,
      height: window.screen.height,
      pixelRatio: window.devicePixelRatio,
    },
  };

  console.table(browserInfo);
  return browserInfo;
}

function getBrowserInfo(ua: string) {
  const browsers = [
    { name: 'Edge', pattern: /(edge|edgios|edga|edg)\/([\w.]+)/i },
    { name: 'Chrome', pattern: /(chrome|crios)\/([\w.]+)/i },
    { name: 'Firefox', pattern: /(firefox|fxios)\/([\w.]+)/i },
    { name: 'Safari', pattern: /version\/([\w.]+).*safari/i },
    { name: 'Opera', pattern: /(opera|opr)\/([\w.]+)/i },
  ];

  for (const browser of browsers) {
    const match = ua.match(browser.pattern);
    if (match) {
      return {
        name: browser.name,
        version: match[2],
      };
    }
  }

  return {
    name: 'Unknown',
    version: 'Unknown',
  };
} 