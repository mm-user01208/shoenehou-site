'use client';
import { useEffect, useRef } from 'react';

export default function ScrollRedUnderline({ children, as: Tag = 'h2', className = '' }: {
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`scroll-underline ${className}`}>
      {children}
    </Tag>
  );
}
