import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed Al-Rashidi',
    title: 'Procurement Director',
    company: 'Al-Rashidi Agricultural Trading, Saudi Arabia',
    flag: '🇸🇦',
    text: 'Nielson Agro has been our primary NPK supplier for over 5 years. Consistent quality, competitive pricing, and they always deliver on time. Highly recommended for bulk buyers.',
    rating: 5,
    volume: '5,000 MT/year',
  },
  {
    name: 'Amara Diallo',
    title: 'Supply Chain Manager',
    company: 'West Africa Agri Corp, Senegal',
    flag: '🇸🇳',
    text: 'We source Urea and DAP through Nielson Agro for our network of 200+ farm cooperatives. The product quality is certified and pricing beats any local supplier we\'ve found.',
    rating: 5,
    volume: '2,000 MT/year',
  },
  {
    name: 'Carlos Mendoza',
    title: 'Operations Director',
    company: 'Agro Import SA, Colombia',
    flag: '🇨🇴',
    text: 'Excellent supplier for bulk fertilizer. The documentation and customs support is world-class. We\'ve scaled our orders 3x in two years thanks to their reliable supply chain.',
    rating: 5,
    volume: '3,500 MT/year',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">
            Client Success Stories
          </span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight">
            TRUSTED BY GLOBAL BUYERS
          </h2>
          <p className="font-body text-gray-600 mt-4 max-w-xl mx-auto text-lg">
            Distributors, governments, and large farms across 50+ countries rely on
            Nielson Agro for their fertilizer supply.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 card-hover relative"
            >
              <Quote
                size={40}
                className="text-green-DEFAULT/10 absolute top-6 right-6"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-gray-700 leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Volume badge */}
              <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-DEFAULT px-3 py-1 rounded-full text-xs font-body font-semibold mb-6">
                📦 Annual volume: {t.volume}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-DEFAULT to-blue-DEFAULT rounded-full flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-body font-semibold text-gray-900 text-sm">
                    {t.flag} {t.name}
                  </div>
                  <div className="font-body text-gray-500 text-xs">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust logos row */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center font-body text-gray-400 text-sm uppercase tracking-widest mb-8">
            Certifications & Standards
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['ISO 9001:2015', 'SGS Certified', 'Bureau Veritas', 'REACH Compliant', 'Export Certified'].map(
              (cert) => (
                <div
                  key={cert}
                  className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-heading font-bold text-gray-600 text-sm uppercase tracking-wide hover:border-green-DEFAULT hover:text-green-DEFAULT transition-colors"
                >
                  {cert}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
