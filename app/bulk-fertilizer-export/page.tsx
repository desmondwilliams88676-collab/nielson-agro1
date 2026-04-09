import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Ship, FileText, Globe, Clock, ArrowRight } from 'lucide-react';
import TrustBar from '@/components/TrustBar';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import { siteUrl } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/schema';

const pageUrl = `${siteUrl}/bulk-fertilizer-export`;

export const metadata: Metadata = {
  title: 'Bulk Fertilizer Export Company – Global Fertilizer Supplier',
  description:
    'Nielson Agro — global bulk fertilizer export company. NPK, Urea, DAP export to 50+ countries. FOB, CIF, DAP incoterms. Full documentation. Get export pricing in 24 hours.',
  keywords: ['bulk fertilizer export', 'fertilizer export company', 'fertilizer supplier worldwide', 'global fertilizer export', 'fertilizer exporter'],
  alternates: { canonical: pageUrl },
};

const exportSteps = [
  { step: '01', title: 'Submit Enquiry', desc: 'Tell us your product, quantity, destination port, and incoterm preference.' },
  { step: '02', title: 'Receive Quote', desc: 'We send a detailed offer with product specs, price, and shipping options within 24 hours.' },
  { step: '03', title: 'Sign Contract', desc: 'Review and sign our standard fertilizer export contract. Simple and transparent terms.' },
  { step: '04', title: 'Payment & Production', desc: 'Deposit payment triggers production and quality inspection at source.' },
  { step: '05', title: 'Shipping & Documents', desc: 'Goods loaded and shipped. All documents sent electronically and by courier.' },
  { step: '06', title: 'Delivery & Support', desc: 'Goods delivered to your port/destination. Ongoing account management for repeat orders.' },
];

const regions = [
  { region: 'Sub-Saharan Africa', countries: 'Nigeria, Ghana, Kenya, Tanzania, Ethiopia, Mozambique, Zambia, Zimbabwe, Ivory Coast, Senegal', flag: '🌍' },
  { region: 'North Africa & MENA', countries: 'Egypt, Morocco, Algeria, Tunisia, Saudi Arabia, UAE, Iraq, Jordan', flag: '🌏' },
  { region: 'South & SE Asia', countries: 'India, Bangladesh, Pakistan, Vietnam, Indonesia, Philippines, Myanmar', flag: '🌏' },
  { region: 'Latin America', countries: 'Brazil, Colombia, Peru, Ecuador, Mexico, Argentina, Paraguay', flag: '🌎' },
  { region: 'Central Asia', countries: 'Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan', flag: '🌐' },
  { region: 'Eastern Europe', countries: 'Ukraine, Romania, Bulgaria, Serbia, Albania, Georgia', flag: '🇪🇺' },
];

const documents = [
  'Commercial Invoice', 'Packing List', 'Bill of Lading (OBL/Seaway)',
  'Certificate of Origin (CO)', 'Certificate of Analysis (COA)',
  'SGS / Bureau Veritas Inspection Report', 'Phytosanitary Certificate',
  'MSDS / Safety Data Sheet', 'Insurance Certificate',
  'Fumigation Certificate (if required)', 'Form E / EUR.1 (where applicable)',
];

export default function BulkExportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: siteUrl }, { name: 'Bulk Fertilizer Export', url: pageUrl }])) }} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=85"
            alt="Bulk fertilizer export shipping - Nielson Agro global exporter"
            fill className="object-cover" priority sizes="100vw" quality={85}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full font-body text-sm font-medium mb-6">
              <Ship size={16} className="text-green-300" />
              Global Fertilizer Export Company
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              BULK FERTILIZER EXPORT — WORLDWIDE SUPPLY
            </h1>
            <p className="font-body text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
              Reliable bulk fertilizer exports to 50+ countries. FOB, CIF, and DAP incoterms. Complete documentation. Competitive pricing for importers, distributors, and governments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center gap-2 justify-center">
                Request Export Quote
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold px-8 py-4 rounded-xl hover:bg-[#20BA5A] transition-all uppercase tracking-wide text-lg">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Export process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">How It Works</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900">OUR EXPORT PROCESS</h2>
            <p className="font-body text-gray-600 mt-4 max-w-xl mx-auto">Simple, transparent, and proven. From enquiry to delivery in as little as 4–6 weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportSteps.map((s) => (
              <div key={s.step} className="relative bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-green-DEFAULT transition-all card-hover">
                <div className="font-heading font-black text-6xl text-gray-100 absolute top-4 right-4 leading-none select-none">{s.step}</div>
                <div className="relative">
                  <div className="font-heading font-black text-green-DEFAULT text-sm uppercase tracking-widest mb-2">{s.step}</div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{s.title}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-gradient-to-br from-[#0d1b0f] to-[#0e2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Export Destinations</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white">WHERE WE EXPORT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((r) => (
              <div key={r.region} className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{r.flag}</span>
                  <h3 className="font-heading font-bold text-white text-xl">{r.region}</h3>
                </div>
                <p className="font-body text-white/70 text-sm leading-relaxed">{r.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Export Documentation</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6">COMPLETE DOCUMENTATION PACKAGE</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">Every Nielson Agro shipment comes with a complete documentation package for smooth customs clearance at your destination port.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-2 font-body text-gray-700 text-sm">
                    <FileText size={14} className="text-green-DEFAULT flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Incoterms We Offer</h3>
              <p className="font-body text-gray-500 text-sm mb-6">We support all major international trade terms:</p>
              <div className="space-y-4">
                {[
                  { term: 'FOB', name: 'Free On Board', desc: 'We load goods on vessel at origin port. You arrange freight and insurance.' },
                  { term: 'CFR', name: 'Cost & Freight', desc: 'We pay freight to your port. You arrange insurance.' },
                  { term: 'CIF', name: 'Cost, Insurance & Freight', desc: 'Most popular. We handle freight and insurance to your port.' },
                  { term: 'DAP', name: 'Delivered at Place', desc: 'We deliver to your named destination. You handle import duties.' },
                ].map((inc) => (
                  <div key={inc.term} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="font-heading font-black text-green-DEFAULT text-xl w-12 flex-shrink-0">{inc.term}</div>
                    <div>
                      <div className="font-body font-semibold text-gray-900 text-sm">{inc.name}</div>
                      <div className="font-body text-gray-500 text-xs mt-0.5">{inc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Get Export Pricing</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">REQUEST YOUR BULK EXPORT QUOTE</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">Tell us your product, destination, and quantity. We respond with a complete CIF/FOB offer within 24 hours.</p>
              <div className="space-y-4">
                {['Minimum 1 x FCL (20ft container)', 'Vessel loads from 5,000 MT', 'Price validity: 5–7 business days', 'L/C, T/T & CAD payment accepted'].map(p => (
                  <div key={p} className="flex items-center gap-3 font-body text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-green-DEFAULT flex-shrink-0" />{p}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Bulk Export Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
