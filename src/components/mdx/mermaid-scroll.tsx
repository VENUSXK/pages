'use client';

import { useEffect, useRef } from 'react';

export function ScrollToCenter({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const overflow = el.scrollWidth - el.clientWidth;
    if (overflow > 0) {
      el.scrollLeft = overflow / 2;
    }
  }, []);

  return (
    <div ref={ref} className="min-w-0 max-w-full [&_svg]:h-auto [&_svg]:max-w-full">
      {children}
    </div>
  );
}
