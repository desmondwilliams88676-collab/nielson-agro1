import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface HeroSectionProps {
  headline: string;
  subtext: string;
  ctaText?: string;
  ctaHref?: string;
  badgeText?: string;
  imageUrl: string;
  imageAlt: string;
  urgency?: boolean;
}

export default function HeroSection({
  headline,
  subtext,
  ctaText = 'Request Quote Now',
  ctaHref = '#contact',
  badgeText,
  imageUrl,
  imageAlt,
  urgency = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Diagonal accent */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-body text-sm font-medium mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              {badgeText}
            </div>
          )}

          {/* Urgency banner */}
          {urgency && (
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-200 px-4 py-2 rounded-lg font-body text-xs font-medium mb-4 animate-fade-up animate-delay-100">
              <AlertTriangle size={14} />
              Limited supply due to global demand — Enquire now to secure allocation
            </div>
          )}

          {/* Headline */}
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.95] tracking-tight mb-6 animate-fade-up animate-delay-200">
            {headline}
          </h1>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl animate-fade-up animate-delay-300">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-green-DEFAULT font-heading font-black px-8 py-4 rounded-xl hover:bg-green-50 transition-all duration-200 uppercase tracking-wide text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-100"
            >
              {ctaText}
              <ArrowRight size={20} />
            </Link>
            <a
              href={`https://wa.me/1234567890?text=I'm interested in bulk fertilizer pricing`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-bold px-8 py-4 rounded-xl hover:bg-[#20BA5A] transition-all duration-200 uppercase tracking-wide text-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {[
              { label: 'Countries Served', value: '50+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Satisfied Clients', value: '500+' },
              { label: 'Products Available', value: '20+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-black text-3xl text-white">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
