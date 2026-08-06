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
    <div ref={ref} className="overflow-x-auto [&_svg]:max-w-none">
      {children}
    </div>
  );
}
