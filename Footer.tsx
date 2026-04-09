import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE, siteUrl } from '@/lib/utils';

const productLinks = [
  { label: 'NPK Fertilizer Supplier', href: '/npk-fertilizer-supplier' },
  { label: 'Urea Fertilizer Supplier', href: '/urea-fertilizer-supplier' },
  { label: 'DAP Fertilizer Supplier', href: '/dap-fertilizer-supplier' },
  { label: 'Bulk Fertilizer Export', href: '/bulk-fertilizer-export' },
  { label: 'Fertilizer Supplier Africa', href: '/fertilizer-supplier-africa' },
];

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Our Certifications', href: '/#certifications' },
  { label: 'Blog & News', href: '/blog' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1b0f] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-DEFAULT rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-black text-2xl">N</span>
              </div>
              <div>
                <div className="font-heading font-black text-xl text-white leading-none">
                  NIELSON AGRO
                </div>
                <div className="font-body text-xs text-green-300 tracking-widest uppercase">
                  Fertilizers
                </div>
              </div>
            </Link>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Global bulk fertilizer supplier trusted by distributors, governments,
              NGOs, and large-scale farms across 50+ countries.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/nielson-agro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-DEFAULT rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/nielsonagro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-DEFAULT rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://facebook.com/nielsonagro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-DEFAULT rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 uppercase tracking-wide">
              Our Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-DEFAULT rounded-full inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-gray-400 hover:text-green-300 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-green-DEFAULT rounded-full inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6 uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="font-body text-gray-300 hover:text-green-300 transition-colors text-sm"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-body text-gray-300 hover:text-green-300 transition-colors text-sm"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe size={16} className="text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Global Export
                  </p>
                  <p className="font-body text-gray-300 text-sm">
                    Serving 50+ countries worldwide
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-green-DEFAULT/20 border border-green-DEFAULT/30 rounded-xl">
              <p className="font-body text-xs text-green-300 uppercase tracking-wide mb-1">
                ⚡ Get Pricing Fast
              </p>
              <p className="font-body text-white text-sm font-medium">
                Bulk quote within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="font-body text-gray-500 hover:text-green-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-gray-500 hover:text-green-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="font-body text-gray-500 hover:text-green-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
