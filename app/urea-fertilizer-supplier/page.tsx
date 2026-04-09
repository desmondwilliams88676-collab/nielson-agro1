import type { Metadata } from 'next';
import { siteUrl } from '@/lib/utils';
import { productSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ProductLandingPage from '@/components/ProductLandingPage';

const pageUrl = `${siteUrl}/urea-fertilizer-supplier`;

export const metadata: Metadata = {
  title: 'Urea Fertilizer Supplier – Bulk 46-0-0 Global Export',
  description:
    'Bulk Urea 46-0-0 fertilizer supplier and exporter. Prilled & granular urea for distributors, governments & farms in 50+ countries. Get CIF/FOB quote within 24 hours.',
  keywords: ['urea supplier', 'urea fertilizer supplier', 'bulk urea supplier', 'urea 46-0-0 export', 'prilled urea supplier', 'granular urea supplier'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Bulk Urea Fertilizer 46-0-0 Supplier – Global Export | Nielson Agro',
    description: 'High-nitrogen Urea 46-0-0. Prilled & granular. Exporting globally. Quote in 24 hours.',
    url: pageUrl,
  },
};

const specs = [
  { label: 'Nitrogen (N)', value: '46% minimum' },
  { label: 'Biuret', value: '≤1.0% (low biuret available ≤0.3%)' },
  { label: 'Moisture', value: '≤0.5%' },
  { label: 'Formaldehyde', value: '0.4–0.6% (granular)' },
  { label: 'Physical Form', value: 'Prilled or Granular' },
  { label: 'Granule Size', value: 'Prilled: 1–2.5mm | Granular: 2–4mm' },
  { label: 'Color', value: 'White, semi-transparent' },
  { label: 'Bulk Density', value: '0.72–0.80 g/cm³' },
];

const packaging = [
  { size: '50 kg Polypropylene Bags', desc: 'Most common for African and Asian markets. Moisture-resistant inner liner.' },
  { size: '1 MT Jumbo Bags (FIBC)', desc: 'Ideal for large importers seeking cost savings on handling and bagging.' },
  { size: 'Bulk Vessel Loading', desc: 'Available for government tenders and institutional buyers from 5,000 MT+.' },
  { size: 'Custom Packaging', desc: 'Private label and custom branding available for distributors and resellers.' },
];

const useCases = [
  'Rice & Paddy', 'Wheat & Barley', 'Maize / Corn',
  'Sugar Cane', 'Cotton', 'Vegetables',
  'Fruit Trees', 'Tea & Coffee', 'Pasture',
  'Industrial Uses (resin, plastics)',
];

const faqs = [
  { q: 'What is the difference between prilled and granular urea?', a: 'Prilled urea has smaller, rounder granules (1–2.5mm) produced by spraying molten urea in a tower. Granular urea (2–4mm) is harder, less dusty, and more suitable for blending with other fertilizers. Granular is preferred for mechanical spreading on large farms.' },
  { q: 'Do you supply low-biuret urea for foliar application?', a: 'Yes. We supply technical/low-biuret urea with biuret content ≤0.3% specifically for foliar application and fertigation. Please specify this requirement in your enquiry.' },
  { q: 'What documents are included with a urea shipment?', a: 'Standard documentation includes: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Certificate of Analysis (COA), SGS Inspection Report (on request), Phytosanitary Certificate (where required), and MSDS.' },
  { q: 'Can I order both prilled and granular urea in one shipment?', a: 'Yes, we can accommodate split shipments with different urea forms in separate containers or bags within the same vessel, depending on the total volume.' },
  { q: 'What payment terms do you offer for bulk urea orders?', a: 'We typically work with Letter of Credit (L/C) at sight, T/T (30% advance + 70% against BL), or CAD (documents against payment). Credit terms may be extended to verified, long-standing customers.' },
];

export default function UreaPage() {
  const ldProduct = productSchema({
    name: 'Bulk Urea Fertilizer 46-0-0',
    description: 'High-nitrogen Urea 46-0-0 fertilizer. Prilled and granular. Available for global bulk export.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    url: pageUrl,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: siteUrl }, { name: 'Urea Fertilizer Supplier', url: pageUrl }])) }} />

      <ProductLandingPage
        heroHeadline="Bulk Urea Fertilizer Supplier – 46-0-0 Global Export"
        heroSubtext="The world's most-used nitrogen fertilizer. Prilled and granular urea supplied in bulk to distributors, governments, and farms across 50+ countries. Competitive FOB/CIF pricing."
        heroBadge="Urea 46-0-0 — Prilled & Granular Available"
        heroImage="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=85"
        heroImageAlt="Bulk urea fertilizer 46-0-0 global export supplier - Nielson Agro Fertilizers"
        productName="Urea Fertilizer"
        productId="urea"
        grade="46-0-0"
        overview="Urea (46-0-0) is the most concentrated and widely used solid nitrogen fertilizer in the world, containing 46% nitrogen by weight. Nielson Agro supplies both prilled and granular urea sourced from certified manufacturers, tested by independent inspectors, and exported to agricultural markets across Africa, Asia, the Middle East, and Latin America. Whether you need one container or a full vessel, we deliver on time with complete documentation."
        specs={specs}
        packaging={packaging}
        useCases={useCases}
        productImage="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
        productImageAlt="Urea fertilizer granules bulk export supplier - Nielson Agro"
        faqs={faqs}
        relatedLinks={[
          { label: 'NPK Fertilizer Supplier', href: '/npk-fertilizer-supplier' },
          { label: 'DAP Fertilizer Supplier', href: '/dap-fertilizer-supplier' },
          { label: 'Bulk Fertilizer Export', href: '/bulk-fertilizer-export' },
          { label: 'Africa Supply Program', href: '/fertilizer-supplier-africa' },
        ]}
      />
    </>
  );
}
