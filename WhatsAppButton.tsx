'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_SHORT } from '@/lib/utils';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=Hello%20${encodeURIComponent(COMPANY_SHORT)}%2C%20I%27m%20interested%20in%20bulk%20fertilizer%20pricing.%20Could%20you%20send%20me%20a%20quote%3F`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[220px] animate-fade-up">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-300 transition-colors"
            aria-label="Close"
          >
            <X size={10} className="text-gray-600" />
          </button>
          <p className="font-heading font-bold text-gray-900 text-sm mb-1">
            Get Bulk Pricing Fast! ⚡
          </p>
          <p className="font-body text-gray-500 text-xs leading-relaxed">
            Chat with our sales team on WhatsApp — response within 1 hour.
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 active:scale-95 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <MessageCircle size={30} className="text-white" fill="white" />
      </a>
    </div>
  );
}
