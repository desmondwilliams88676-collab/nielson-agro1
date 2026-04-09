'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-green-DEFAULT text-white shadow-2xl border-t-2 border-green-400">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="font-heading font-bold text-sm leading-none">
            ⚡ Limited Supply Available
          </p>
          <p className="font-body text-green-100 text-xs mt-0.5">
            Get bulk pricing within 24 hours
          </p>
        </div>
        <Link
          href="/#contact"
          className="bg-white text-green-DEFAULT font-heading font-bold px-5 py-2.5 rounded-xl text-sm uppercase tracking-wide flex items-center gap-1.5 hover:bg-green-50 transition-colors shadow-lg"
        >
          <Zap size={14} />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
