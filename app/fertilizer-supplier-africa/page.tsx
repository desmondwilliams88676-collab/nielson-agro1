import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import TrustBar from '@/components/TrustBar';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import { siteUrl } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/schema';

const pageUrl = `${siteUrl}/fertilizer-supplier-africa`;

export const metadata: Metadata = {
  title: 'Fertilizer Supplier Africa – Bulk NPK, Urea & DAP Export',
  description:
    'Bulk fertilizer supplier for Africa. NPK, Urea & DAP export to Nigeria, Kenya, Ghana, Tanzania, Ethiopia & 30+ more African countries. Competitive CIF pricing. Get quote in 24 hours.',
  keywords: ['fertilizer supplier africa', 'fertilizer supplier nigeria', 'fertilizer supplier kenya', 'fertilizer exporter africa', 'bulk fertilizer africa', 'npk supplier africa'],
  alternates: { canonical: pageUrl },
};

const africaCountries = [
  { country: 'Nigeria', port: 'Lagos (Apapa)', flag: '🇳🇬' },
  { country: 'Kenya', port: 'Mombasa', flag: '🇰🇪' },
  { country: 'Ghana', port: 'Tema', flag: '🇬🇭' },
  { country: 'Tanzania', port: 'Dar es Salaam', flag: '🇹🇿' },
  { country: 'Ethiopia', port: 'Djibouti', flag: '🇪🇹' },
  { country: 'Mozambique', port: 'Maputo / Beira', flag: '🇲🇿' },
  { country: 'Zambia', port: 'Dar es Salaam (transit)', flag: '🇿🇲' },
  { country: 'Ivory Coast', port: 'Abidjan', flag: '🇨🇮' },
  { country: 'Senegal', port: 'Dakar', flag: '🇸🇳' },
  { country: 'Uganda', port: 'Mombasa (transit)', flag: '🇺🇬' },
  { country: 'Zimbabwe', port: 'Beira (transit)', flag: '🇿🇼' },
  { country: 'Angola', port: 'Luanda', flag: '🇦🇴' },
];

const africaStats = [
  { value: '30+', label: 'African Countries Served' },
  { value: '200+', label: 'African Clients' },
  { value: '500K+', label: 'MT Exported to Africa' },
  { value: '10+', label: 'Years in Africa' },
];

const africaAdvantages = [
  { title: 'Local Market Knowledge', desc: 'Deep understanding of African agricultural seasons, regulatory requirements, and customs procedures at major ports.' },
  { title: 'Competitive CIF Africa Pricing', desc: 'We ship directly from production facilities to African ports, minimizing middlemen and logistics costs.' },
  { title: 'Port Agency Support', desc: 'We work with trusted clearing agents at all major African ports to ensure smooth, timely customs clearance.' },
  { title: 'Government Tender Ready', desc: 'Experienced in supplying under government and NGO tender programs across Sub-Saharan Africa and the Sahel region.' },
  { title: 'Flexible Container & Vessel', desc: 'From single 20ft containers to full handy-size vessels — we scale with your program size.' },
  { title: 'Halal & Special Certifications', desc: 'We provide all documentation required for African import regulations including phytosanitary and quality certificates.' },
];

export default function AfricaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: siteUrl }, { name: 'Fertilizer Supplier Africa', url: pageUrl }])) }} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591634616938-b1e44a9e1f85?w=1800&q=85"
            alt="African agriculture fertilizer supply - Nielson Agro fertilizer supplier Africa"
            fill className="object-cover object-center" priority sizes="100vw" quality={85}
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-4 py-2 rounded-full font-body text-sm font-medium mb-6">
              <MapPin size={16} className="text-green-300" />
              Africa-Focused Fertilizer Supply Program
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
              FERTILIZER SUPPLIER FOR AFRICA — BULK EXPORT
            </h1>
            <p className="font-body text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              Supplying bulk NPK, Urea, and DAP fertilizers to 30+ African countries. Trusted by importers, distributors, governments, and NGOs across the continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center gap-2 justify-center">
                Get Africa CIF Pricing
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold px-8 py-4 rounded-xl hover:bg-[#20BA5A] transition-all uppercase tracking-wide text-lg">
                💬 WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/20">
              {africaStats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-black text-3xl text-white">{s.value}</div>
                  <div className="font-body text-sm text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Countries served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Coverage</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900">AFRICAN COUNTRIES WE SERVE</h2>
            <p className="font-body text-gray-600 mt-4 max-w-xl mx-auto">Active delivery to ports across Sub-Saharan, West, East, Central, and Southern Africa.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {africaCountries.map((c) => (
              <div key={c.country} className="bg-gray-50 rounded-2xl p-4 text-center hover:bg-green-50 hover:border-green-DEFAULT border-2 border-gray-100 transition-all card-hover">
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="font-heading font-bold text-gray-900 text-sm">{c.country}</div>
                <div className="font-body text-gray-500 text-xs mt-1">{c.port}</div>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-gray-500 text-sm mt-8">
            + 20 more countries available on request
          </p>
        </div>
      </section>

      {/* Why Africa section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Our Africa Advantage</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                BUILT FOR AFRICA'S AGRICULTURAL MARKET
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                Africa's fertilizer market is unique — diverse regulations, seasonal demand spikes, and challenging logistics. Nielson Agro has navigated this market for over a decade, building the partnerships and processes that ensure your fertilizer arrives on time and clears customs smoothly.
              </p>
              <div className="space-y-5">
                {africaAdvantages.map((adv) => (
                  <div key={adv.title} className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-green-DEFAULT mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold text-gray-900 text-lg">{adv.title}</h3>
                      <p className="font-body text-gray-600 text-sm">{adv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Fertilizer distribution in Africa - Nielson Agro Africa supply program"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-DEFAULT/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-5">
                  <p className="font-heading font-bold text-gray-900 mb-2">🌍 Africa-Specific Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Port agency support', 'Customs documentation', 'Local agent network', 'Upcountry delivery'].map(s => (
                      <div key={s} className="flex items-center gap-1.5 font-body text-gray-600 text-xs">
                        <CheckCircle size={12} className="text-green-DEFAULT" />{s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Get Africa Pricing</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                GET CIF AFRICA PRICING WITHIN 24 HOURS
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                Tell us your destination country and port, product, and volume. We'll send you a competitive CIF price with full documentation details.
              </p>
              {['Experienced in all major African import regulations', 'Port agents at Lagos, Tema, Mombasa, Dar, Maputo & more', 'Vessel and FCL options for all volumes', 'Government tender documentation available'].map(p => (
                <div key={p} className="flex items-center gap-3 font-body text-gray-700 text-sm mb-3">
                  <CheckCircle size={16} className="text-green-DEFAULT flex-shrink-0" />{p}
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">Africa Supply Enquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
