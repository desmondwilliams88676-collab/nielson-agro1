import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package, Globe, Zap } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import { siteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Global Bulk Fertilizer Supplier & Exporter',
  description:
    'Nielson Agro Fertilizers — bulk NPK, Urea & DAP fertilizer supplier exporting to 50+ countries. Competitive pricing for distributors, governments & large farms.',
  alternates: { canonical: siteUrl },
};

const products = [
  {
    name: 'NPK Fertilizer',
    grade: 'Various Grades',
    desc: 'Complete macro-nutrient fertilizer (Nitrogen, Phosphorus, Potassium). Available in custom N-P-K ratios to match crop requirements.',
    specs: ['Grades: 15-15-15, 20-20-20, 12-24-12 & more', 'Purity: ≥99%', 'Packaging: 25kg, 50kg, 1MT bags'],
    href: '/npk-fertilizer-supplier',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    alt: 'NPK fertilizer granules bulk supply - Nielson Agro Fertilizers',
    color: 'green',
  },
  {
    name: 'Urea Fertilizer',
    grade: '46-0-0',
    desc: 'High-nitrogen fertilizer with 46% N content. The most widely used nitrogen fertilizer globally — ideal for cereals, rice, and cash crops.',
    specs: ['N Content: 46% min', 'Biuret: ≤1%', 'Moisture: ≤0.5%', 'Granular or prilled'],
    href: '/urea-fertilizer-supplier',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    alt: 'Urea fertilizer 46-0-0 bulk export supplier - Nielson Agro',
    color: 'blue',
  },
  {
    name: 'DAP Fertilizer',
    grade: '18-46-0',
    desc: 'Di-Ammonium Phosphate — the most popular phosphate fertilizer. Promotes root development, early crop establishment, and flowering.',
    specs: ['N: 18% min, P₂O₅: 46% min', 'Moisture: ≤1%', 'Water Solubility: ≥99%'],
    href: '/dap-fertilizer-supplier',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=600&q=80',
    alt: 'DAP fertilizer 18-46-0 bulk supplier export - Nielson Agro',
    color: 'green',
  },
];

const targetBuyers = [
  { icon: '🏭', title: 'Importers & Distributors', desc: 'Bulk FOB/CIF pricing with full export documentation' },
  { icon: '🏛️', title: 'Government Agencies', desc: 'Tender-ready supply for national agricultural programs' },
  { icon: '🌍', title: 'NGOs & Aid Organizations', desc: 'Competitive pricing for food security initiatives' },
  { icon: '🚜', title: 'Large-Scale Farms', desc: 'Direct farm supply in bulk with flexible delivery' },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Global Bulk Fertilizer Supplier & Exporter"
        subtext="Reliable NPK, Urea & DAP fertilizer supply for distributors, governments, and agricultural businesses across 50+ countries. Get competitive pricing within 24 hours."
        ctaText="Request Bulk Quote"
        ctaHref="#contact"
        badgeText="Trusted by 500+ clients worldwide"
        imageUrl="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&q=85"
        imageAlt="Large scale agricultural fields - Nielson Agro bulk fertilizer supplier"
      />

      <TrustBar />

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Our Product Range</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight">
              BULK FERTILIZERS FOR GLOBAL MARKETS
            </h2>
            <p className="font-body text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              High-purity, certified fertilizers available in full container loads (FCL), bulk vessel shipments, and custom packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.name} className="group rounded-3xl border-2 border-gray-100 hover:border-green-DEFAULT overflow-hidden transition-all duration-300 card-hover bg-white">
                <div className="relative h-52 overflow-hidden">
                  <Image src={p.image} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${p.color === 'green' ? 'bg-green-DEFAULT text-white' : 'bg-blue-DEFAULT text-white'}`}>
                      Grade: {p.grade}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-black text-2xl text-gray-900 mb-2">{p.name}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 font-body text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-DEFAULT flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href={p.href} className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold uppercase tracking-wide text-sm transition-all ${p.color === 'green' ? 'bg-green-DEFAULT text-white hover:bg-green-600' : 'bg-blue-DEFAULT text-white hover:bg-blue-600'}`}>
                    View Full Specs
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-br from-[#0d1b0f] to-[#0e2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Who We Serve</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">BUILT FOR SERIOUS BULK BUYERS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetBuyers.map((b) => (
              <div key={b.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all card-hover">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{b.title}</h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Export destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Global Reach</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-6">EXPORT TO 50+ COUNTRIES</h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">Our established export corridors ensure your fertilizer arrives on time, with full customs documentation, phytosanitary certificates, and quality inspection reports.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Sub-Saharan Africa', 'North Africa & MENA', 'South & Southeast Asia', 'Latin America', 'Eastern Europe', 'Central Asia'].map((r) => (
                  <div key={r} className="flex items-center gap-2 font-body text-gray-700 text-sm">
                    <Globe size={14} className="text-green-DEFAULT" />
                    {r}
                  </div>
                ))}
              </div>
              <Link href="/fertilizer-supplier-africa" className="inline-flex items-center gap-2 font-body font-semibold text-green-DEFAULT hover:text-green-600 transition-colors">
                Africa Supply Program →
              </Link>
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                alt="Global fertilizer export shipping containers - Nielson Agro worldwide supply"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-DEFAULT/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center"><Package size={20} className="text-green-DEFAULT" /></div>
                    <div>
                      <p className="font-heading font-bold text-gray-900 text-sm">Bulk Vessel & FCL Available</p>
                      <p className="font-body text-gray-500 text-xs">FOB, CIF, DAP Incoterms supported</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Mid-page CTA */}
      <section className="py-20 cta-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full font-body text-sm font-medium mb-6">
            <Zap size={14} className="text-yellow-300" />
            Limited supply due to global demand
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            GET BULK PRICING WITHIN 24 HOURS
          </h2>
          <p className="font-body text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Fill out the form below or contact us via WhatsApp. Our team will send you a detailed quote with specs, pricing, and shipping options.
          </p>
          <Link href="#contact" className="inline-flex items-center gap-2 bg-white text-green-DEFAULT font-heading font-black px-10 py-5 rounded-xl hover:bg-green-50 transition-all text-xl uppercase tracking-wide shadow-2xl hover:scale-105">
            Request Quote Now
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                REQUEST YOUR BULK FERTILIZER QUOTE
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-10">
                Tell us what you need. Our sales team will respond with a tailored quote including product specs, pricing, packaging, and shipping options — within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  { emoji: '⚡', title: 'Fast Response', desc: 'Quote delivered within 24 hours of your request' },
                  { emoji: '🔒', title: 'No Obligation', desc: 'Requesting a quote is completely free and non-binding' },
                  { emoji: '📦', title: 'Flexible Orders', desc: 'Minimum order from 1 container — scalable to vessel loads' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="text-3xl">{item.emoji}</div>
                    <div>
                      <h3 className="font-heading font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="font-body text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Send Quote Request</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
