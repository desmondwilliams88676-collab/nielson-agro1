import type { Metadata } from 'next';
import { siteUrl } from '@/lib/utils';
import { productSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ProductLandingPage from '@/components/ProductLandingPage';

const pageUrl = `${siteUrl}/dap-fertilizer-supplier`;

export const metadata: Metadata = {
  title: 'DAP Fertilizer Supplier – Bulk 18-46-0 Global Export',
  description:
    'Bulk DAP (Di-Ammonium Phosphate) 18-46-0 fertilizer supplier. Exporting to 50+ countries. Trusted by importers, governments & farms. Get competitive pricing in 24 hours.',
  keywords: ['dap fertilizer supplier', 'bulk dap fertilizer', 'di ammonium phosphate supplier', 'dap 18-46-0 export', 'phosphate fertilizer supplier'],
  alternates: { canonical: pageUrl },
};

const specs = [
  { label: 'Nitrogen (N)', value: '18% minimum' },
  { label: 'Phosphorus (P₂O₅)', value: '46% minimum' },
  { label: 'Moisture', value: '≤1.0%' },
  { label: 'Water Solubility', value: '≥99%' },
  { label: 'Free Acid', value: '≤2.5%' },
  { label: 'Physical Form', value: 'Granular' },
  { label: 'Granule Size', value: '2–5 mm' },
  { label: 'Color', value: 'Dark grey / Black (coated)' },
];

const packaging = [
  { size: '50 kg Woven Polypropylene Bags', desc: 'Standard export packaging with inner moisture barrier. Stacked on pallets or loose.' },
  { size: '1,000 kg Jumbo Bags (FIBC)', desc: 'Preferred by large distributors and co-operatives for cost-efficient handling.' },
  { size: 'Bulk Vessel Shipments', desc: 'For government tenders and large agricultural programs starting at 2,000 MT.' },
  { size: 'Custom/White Label Bags', desc: 'Branded packaging available for distributors targeting retail agricultural markets.' },
];

const useCases = [
  'Planting / Basal Application', 'Wheat & Cereals',
  'Maize / Corn', 'Cotton', 'Soybean',
  'Sunflower & Canola', 'Potato & Root Crops',
  'Fruit Trees & Orchards', 'Pasture Establishment',
  'Rice Paddies',
];

const faqs = [
  { q: 'Why is DAP preferred as a starter fertilizer?', a: 'DAP releases both nitrogen and phosphorus quickly upon soil application. The ammonium-N form is stable and immediately plant-available, while the high phosphate content drives root development in early growth stages. It\'s the global standard starter fertilizer for row crops.' },
  { q: 'How should DAP be stored?', a: 'Store in a cool, dry, covered warehouse away from moisture. DAP is hygroscopic and can cake if exposed to humidity. Maintain bags off the ground on pallets. Properly stored DAP has a shelf life of 12–24 months without quality degradation.' },
  { q: 'Can DAP be blended with other fertilizers?', a: 'DAP blends well with urea, MOP, and SOP in dry bulk blending operations. It should not be mixed with alkaline materials like calcium ammonium nitrate (CAN) or lime, as this can volatilize nitrogen. We can supply pre-blended products on request.' },
  { q: 'What is the typical transit time for DAP shipments to Africa?', a: 'West Africa: 14–20 days. East Africa (Mombasa/Dar es Salaam): 18–28 days. South Africa: 20–30 days. North Africa: 10–18 days. These are indicative vessel transit times from loading port.' },
  { q: 'Do you provide phytosanitary certificates for DAP?', a: 'Yes. We provide all required import documentation including Certificate of Origin, COA, SGS/BV Inspection Certificate, Bill of Lading, and phytosanitary certificates where required by the destination country.' },
];

export default function DAPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema({ name: 'Bulk DAP Fertilizer 18-46-0', description: 'Di-Ammonium Phosphate 18-46-0. High phosphate fertilizer for global agricultural markets.', image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=800&q=80', url: pageUrl })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: siteUrl }, { name: 'DAP Fertilizer Supplier', url: pageUrl }])) }} />

      <ProductLandingPage
        heroHeadline="Bulk DAP Fertilizer Supplier – 18-46-0 Global Export"
        heroSubtext="Di-Ammonium Phosphate — the global standard starter fertilizer. Bulk supply for importers, distributors, governments, and farms across 50+ countries. Reliable supply chain, competitive pricing."
        heroBadge="DAP 18-46-0 — In Stock for Immediate Export"
        heroImage="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=1800&q=85"
        heroImageAlt="Bulk DAP fertilizer 18-46-0 global supplier - Nielson Agro Fertilizers"
        productName="DAP Fertilizer"
        productId="dap"
        grade="18-46-0"
        overview="Di-Ammonium Phosphate (DAP) 18-46-0 is the world's most widely used phosphate fertilizer. With 46% phosphorus (P₂O₅) and 18% nitrogen, it provides crops with the ideal nutrient ratio for root establishment and early growth. Nielson Agro exports bulk DAP to agricultural importers and distributors across Africa, Asia, and Latin America, with consistent quality backed by independent laboratory analysis and third-party inspection."
        specs={specs}
        packaging={packaging}
        useCases={useCases}
        productImage="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=800&q=80"
        productImageAlt="DAP di-ammonium phosphate fertilizer bulk export supplier Nielson Agro"
        faqs={faqs}
        relatedLinks={[
          { label: 'NPK Fertilizer Supplier', href: '/npk-fertilizer-supplier' },
          { label: 'Urea Fertilizer Supplier', href: '/urea-fertilizer-supplier' },
          { label: 'Bulk Fertilizer Export', href: '/bulk-fertilizer-export' },
          { label: 'Africa Supply Program', href: '/fertilizer-supplier-africa' },
        ]}
      />
    </>
  );
}
