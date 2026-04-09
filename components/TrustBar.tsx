import { Shield, Globe, Package, Award, Truck, Leaf } from 'lucide-react';

const trustItems = [
  { icon: Globe, text: 'Exporting to 50+ Countries' },
  { icon: Package, text: 'Bulk Supply Available' },
  { icon: Shield, text: 'High Purity Guaranteed' },
  { icon: Award, text: 'ISO 9001 Certified' },
  { icon: Truck, text: 'Fast Global Shipping' },
  { icon: Leaf, text: '15+ Years Experience' },
];

export default function TrustBar() {
  // Duplicate for seamless loop
  const items = [...trustItems, ...trustItems];

  return (
    <div className="bg-green-DEFAULT text-white py-4 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 mx-8 font-body font-medium text-sm whitespace-nowrap"
            >
              <item.icon size={16} className="text-green-200 flex-shrink-0" />
              {item.text}
              <span className="text-green-400 mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
