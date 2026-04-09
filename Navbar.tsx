'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { COMPANY_SHORT, CONTACT_PHONE } from '@/lib/utils';

const navLinks = [
  {
    label: 'Products',
    href: '#products',
    children: [
      { label: 'NPK Fertilizer', href: '/npk-fertilizer-supplier' },
      { label: 'Urea Fertilizer', href: '/urea-fertilizer-supplier' },
      { label: 'DAP Fertilizer', href: '/dap-fertilizer-supplier' },
    ],
  },
  { label: 'Bulk Export', href: '/bulk-fertilizer-export' },
  { label: 'Africa Supply', href: '/fertilizer-supplier-africa' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-green-DEFAULT text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="font-body">
            🌍 Exporting to 50+ countries worldwide — Trusted by governments,
            NGOs & large farms
          </p>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="flex items-center gap-2 hover:text-green-100 transition-colors font-body font-medium"
          >
            <Phone size={14} />
            {CONTACT_PHONE}
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-green-DEFAULT rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white font-heading font-black text-xl">N</span>
              </div>
              <div>
                <div className="font-heading font-black text-xl text-green-DEFAULT leading-none tracking-tight">
                  NIELSON AGRO
                </div>
                <div className="font-body text-xs text-gray-500 tracking-widest uppercase leading-none mt-0.5">
                  Fertilizers
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 font-body font-medium text-gray-700 hover:text-green-DEFAULT transition-colors py-2">
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px] z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 font-body text-gray-700 hover:text-green-DEFAULT hover:bg-green-50 transition-colors text-sm"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-body font-medium text-gray-700 hover:text-green-DEFAULT transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contact"
                className="bg-green-DEFAULT text-white font-heading font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-200 uppercase tracking-wide text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-100"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href || '#'}
                    className="block py-3 font-body font-semibold text-gray-800 hover:text-green-DEFAULT border-b border-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 font-body text-gray-600 hover:text-green-DEFAULT text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          → {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="block text-center bg-green-DEFAULT text-white font-heading font-bold px-6 py-4 rounded-xl uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Quote Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
