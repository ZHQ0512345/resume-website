'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  withWebp?: boolean;
  fill?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  quality = 80,
  withWebp = true,
  fill = false,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [imageType, setImageType] = useState<'jpg' | 'webp'>('jpg');

  useEffect(() => {
    // 检测浏览器是否支持 WebP
    async function checkWebPSupport() {
      if (!withWebp) return;
      
      try {
        const webP = document.createElement('img');
        webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
        await new Promise<void>((resolve, reject) => {
          webP.onload = () => resolve();
          webP.onerror = () => reject();
        });
        setImageType('webp');
      } catch {
        setImageType('jpg');
      }
    }

    checkWebPSupport();
  }, [withWebp]);

  useEffect(() => {
    // 构建优化后的图片路径
    const baseName = src.split('/').pop()?.split('.')[0];
    if (baseName) {
      setImageSrc(`/optimized/${baseName}`);
    }
  }, [src]);

  return (
    <Image
      src={`${imageSrc}-1080.${imageType}`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      fill={fill}
    />
  );
} 