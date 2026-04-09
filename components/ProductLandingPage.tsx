import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

interface Spec {
  label: string;
  value: string;
}

interface PackagingOption {
  size: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

export interface ProductPageProps {
  heroHeadline: string;
  heroSubtext: string;
  heroBadge: string;
  heroImage: string;
  heroImageAlt: string;
  productName: string;
  productId: string;
  grade: string;
  overview: string;
  specs: Spec[];
  packaging: PackagingOption[];
  useCases: string[];
  productImage: string;
  productImageAlt: string;
  faqs: FaqItem[];
  relatedLinks: { label: string; href: string }[];
}

export default function ProductLandingPage({
  heroHeadline,
  heroSubtext,
  heroBadge,
  heroImage,
  heroImageAlt,
  productName,
  productId,
  grade,
  overview,
  specs,
  packaging,
  useCases,
  productImage,
  productImageAlt,
  faqs,
  relatedLinks,
}: ProductPageProps) {
  return (
    <>
      <HeroSection
        headline={heroHeadline}
        subtext={heroSubtext}
        ctaText="Request Bulk Quote"
        ctaHref="#contact"
        badgeText={heroBadge}
        imageUrl={heroImage}
        imageAlt={heroImageAlt}
      />

      <TrustBar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 font-body text-sm text-gray-500">
            <Link href="/" className="hover:text-green-DEFAULT transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-green-DEFAULT transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{productName}</span>
          </nav>
        </div>
      </div>

      {/* Product overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl order-2 lg:order-1">
              <Image
                src={productImage}
                alt={productImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="bg-green-DEFAULT text-white font-heading font-bold px-4 py-2 rounded-xl text-sm uppercase tracking-wide">
                  Grade: {grade}
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle size={24} className="text-green-DEFAULT flex-shrink-0" />
                  <p className="font-body font-semibold text-gray-900 text-sm">
                    SGS / Bureau Veritas quality inspection on every shipment
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">
                Bulk {productName} Supplier
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                {productName.toUpperCase()} — GLOBAL BULK SUPPLY
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">{overview}</p>

              {/* Specs */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-4 uppercase tracking-wide">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-DEFAULT mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-body font-semibold text-gray-900 text-sm">{spec.label}:</span>{' '}
                        <span className="font-body text-gray-600 text-sm">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get Bulk Pricing
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging + Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Packaging */}
            <div>
              <h2 className="font-heading font-black text-3xl text-gray-900 mb-6">PACKAGING OPTIONS</h2>
              <div className="space-y-4">
                {packaging.map((p) => (
                  <div key={p.size} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-green-DEFAULT transition-colors card-hover">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-gray-900 text-lg">{p.size}</h3>
                      <p className="font-body text-gray-500 text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div>
              <h2 className="font-heading font-black text-3xl text-gray-900 mb-6">CROP APPLICATIONS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {useCases.map((use) => (
                  <div key={use} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                    <CheckCircle size={18} className="text-green-DEFAULT flex-shrink-0" />
                    <span className="font-body text-gray-700 text-sm font-medium">{use}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-DEFAULT rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={18} className="text-green-200" />
                  <span className="font-heading font-bold text-sm uppercase tracking-wide">Urgency Notice</span>
                </div>
                <p className="font-body text-white/90 text-sm leading-relaxed">
                  <strong>Limited supply due to global demand.</strong> Current agricultural season demand is high. Secure your allocation now — price locks available for confirmed orders above 500 MT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-4xl text-gray-900">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading font-bold text-gray-900 text-lg hover:text-green-DEFAULT transition-colors list-none">
                  {faq.q}
                  <span className="text-2xl font-light text-gray-400 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-body text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm text-gray-500 uppercase tracking-widest mb-4">Related Products</p>
          <div className="flex flex-wrap gap-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 rounded-xl font-body font-medium text-gray-700 hover:border-green-DEFAULT hover:text-green-DEFAULT transition-colors text-sm"
              >
                {link.label}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">Get Pricing</span>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
                GET BULK {productName.toUpperCase()} PRICING WITHIN 24 HOURS
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                Tell us your quantity, destination port, and packaging preference. Our export team will respond with a competitive CIF/FOB quote within 24 hours.
              </p>
              <div className="space-y-4">
                {['No minimum order commitment required for first enquiry', 'Price locks available for orders 500 MT+', 'Full export documentation included', 'Flexible payment terms for verified buyers'].map((point) => (
                  <div key={point} className="flex items-center gap-3 font-body text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-green-DEFAULT flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                Request {productName} Quote
              </h3>
              <ContactForm productPreset={productName} variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
