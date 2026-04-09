import Image from 'next/image';
import { Truck, DollarSign, Shield, Zap, Globe, HeadphonesIcon, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Export Network',
    desc: 'Active export operations to 50+ countries across Africa, Asia, Middle East, and Latin America with established logistics corridors.',
    color: 'green',
  },
  {
    icon: DollarSign,
    title: 'Competitive Bulk Pricing',
    desc: 'Direct manufacturer relationships eliminate middlemen. Get FOB, CIF, or DAP pricing with transparent cost structures.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Certified Quality',
    desc: 'ISO 9001 certified. All products undergo independent lab testing by SGS or Bureau Veritas before shipment.',
    color: 'green',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    desc: 'Consistent stock availability even during peak agricultural seasons. We maintain strategic warehouse reserves globally.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Fast Order Processing',
    desc: 'Quote within 24 hours. Contracts finalized within 72 hours. First shipment in 2–4 weeks depending on destination.',
    color: 'green',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    desc: 'Every bulk buyer gets a dedicated account manager available via WhatsApp, email, and video call in your timezone.',
    color: 'blue',
  },
  {
    icon: Award,
    title: 'Flexible Packaging',
    desc: '25kg, 50kg bags or 1MT jumbo bags. Custom white-label packaging available for distributors and resellers.',
    color: 'green',
  },
  {
    icon: Clock,
    title: '15+ Years Experience',
    desc: 'Founded in 2009, we have deep expertise in international fertilizer trade compliance, documentation, and logistics.',
    color: 'blue',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block font-body text-green-DEFAULT font-semibold text-sm uppercase tracking-widest mb-3">
              Why Nielson Agro
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              THE FERTILIZER SUPPLIER GLOBAL BUYERS TRUST
            </h2>
            <p className="font-body text-gray-600 leading-relaxed text-lg mb-8">
              From small importers to government procurement agencies, Nielson Agro
              delivers consistent quality, fair pricing, and the documentation your
              supply chain demands.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Countries' },
                { value: '500+', label: 'Clients' },
                { value: '15+', label: 'Years' },
                { value: '1M+', label: 'MT Exported' },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-2xl p-4">
                  <div className="font-heading font-black text-3xl text-green-DEFAULT">{s.value}</div>
                  <div className="font-body text-gray-600 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="Industrial fertilizer production facility - Nielson Agro Fertilizers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-DEFAULT/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur rounded-xl p-4">
                <p className="font-heading font-bold text-gray-900 text-sm">
                  ✅ All shipments verified by independent inspectors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-green-DEFAULT transition-all duration-300 card-hover cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  f.color === 'green'
                    ? 'bg-green-50 group-hover:bg-green-DEFAULT'
                    : 'bg-blue-50 group-hover:bg-blue-DEFAULT'
                }`}
              >
                <f.icon
                  size={22}
                  className={`transition-colors ${
                    f.color === 'green'
                      ? 'text-green-DEFAULT group-hover:text-white'
                      : 'text-blue-DEFAULT group-hover:text-white'
                  }`}
                />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 leading-tight">
                {f.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
