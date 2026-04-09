import type { Metadata } from 'next';
import { siteUrl } from '@/lib/utils';
import { productSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import ProductLandingPage from '@/components/ProductLandingPage';

const pageUrl = `${siteUrl}/npk-fertilizer-supplier`;

export const metadata: Metadata = {
  title: 'NPK Fertilizer Supplier – Bulk Global Export',
  description:
    'Nielson Agro — bulk NPK fertilizer supplier exporting to 50+ countries. All grades: 15-15-15, 20-20-20, 12-24-12. Competitive FOB/CIF pricing. Request quote within 24 hours.',
  keywords: ['npk fertilizer supplier', 'bulk npk fertilizer', 'npk fertilizer export', 'npk 15-15-15 supplier', 'compound fertilizer supplier'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Bulk NPK Fertilizer Supplier – Global Export | Nielson Agro',
    description: 'High-purity NPK fertilizers in all grades. Exporting globally. Get bulk pricing in 24 hours.',
    url: pageUrl,
  },
};

const specs = [
  { label: 'Total N+P₂O₅+K₂O', value: '≥50%' },
  { label: 'Available Grades', value: '15-15-15, 20-20-20, 12-24-12, 16-8-8, custom' },
  { label: 'Physical Form', value: 'Granular, Prilled, Powder' },
  { label: 'Moisture', value: '≤1.5%' },
  { label: 'Color', value: 'White/Grey/Colored (custom)' },
  { label: 'Granule Size', value: '2–4 mm' },
  { label: 'Bulk Density', value: '0.95–1.1 g/cm³' },
  { label: 'pH (10% solution)', value: '5.0–8.0' },
];

const packaging = [
  { size: '25 kg Bags', desc: 'Woven polypropylene bags with inner PE liner. Suitable for retail distribution.' },
  { size: '50 kg Bags', desc: 'Standard agricultural packaging — most popular for farm-level distribution in Africa and Asia.' },
  { size: '500 kg / 1 MT Jumbo Bags (FIBC)', desc: 'Cost-efficient bulk packaging for large importers. Palletized or loose loaded.' },
  { size: 'Bulk / Break Bulk', desc: 'Available in vessel bulk quantities for major importers and government tenders.' },
];

const useCases = [
  'Cereals (Wheat, Corn, Rice)', 'Cash Crops (Cotton, Tobacco)',
  'Vegetables & Horticulture', 'Fruit Orchards',
  'Oil Palm & Rubber', 'Tea & Coffee Plantations',
  'Sugar Cane', 'Tubers (Cassava, Potato)',
  'Pasture & Grass', 'Soybean & Legumes',
];

const faqs = [
  { q: 'What NPK grades does Nielson Agro supply?', a: 'We supply all standard NPK grades including 15-15-15, 20-20-20, 12-24-12, 16-8-8, 13-13-21, and custom blends. Contact us with your agronomic requirement and we will match or blend the correct grade.' },
  { q: 'What is the minimum order quantity for bulk NPK?', a: 'Our standard minimum order is 1 x 20ft FCL (approximately 20–24 MT depending on packaging). For vessel bulk quantities, minimum is typically 500 MT. We can accommodate smaller trial orders for new buyers on a case-by-case basis.' },
  { q: 'What quality certifications do your NPK products carry?', a: 'All our NPK fertilizers are ISO 9001:2015 certified. Every shipment comes with a Certificate of Analysis (COA) from an accredited laboratory, plus optional third-party inspection by SGS or Bureau Veritas at buyer\'s request.' },
  { q: 'Which incoterms do you offer?', a: 'We offer FOB, CFR, CIF, DAP, and DDP depending on destination and buyer preference. Most buyers prefer CIF for the first order. We work with experienced freight forwarders globally.' },
  { q: 'How long does NPK fertilizer delivery take?', a: 'Production and loading takes 2–3 weeks after contract signing. Transit time depends on destination: West Africa (12–18 days), East Africa (18–25 days), South Asia (10–15 days), Latin America (25–35 days).' },
];

export default function NPKPage() {
  const ldProductSchema = productSchema({
    name: 'Bulk NPK Fertilizer',
    description: 'High-purity NPK compound fertilizer in all grades for global agricultural markets. Available for bulk export.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    url: pageUrl,
  });

  const ldFaqSchema = faqSchema(faqs);
  const ldBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'NPK Fertilizer Supplier', url: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />

      <ProductLandingPage
        heroHeadline="Bulk NPK Fertilizer Supplier – Global Export"
        heroSubtext="High-purity NPK compound fertilizers in all grades for distributors, governments, and large farms worldwide. Exporting to 50+ countries with reliable supply and fast shipping."
        heroBadge="NPK Fertilizer — All Grades Available"
        heroImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&q=85"
        heroImageAlt="Bulk NPK fertilizer supply for global agricultural markets - Nielson Agro"
        productName="NPK Fertilizer"
        productId="npk"
        grade="All Grades"
        overview="NPK fertilizer is the backbone of modern agriculture, delivering all three primary macronutrients — Nitrogen (N), Phosphorus (P), and Potassium (K) — in a single application. Nielson Agro supplies compound NPK fertilizers in a wide range of grades tailored to specific crops, soils, and growing conditions. Our product is trusted by agricultural importers and distributors across Africa, Asia, and Latin America."
        specs={specs}
        packaging={packaging}
        useCases={useCases}
        productImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
        productImageAlt="NPK fertilizer granules bulk supply - Nielson Agro Fertilizers global exporter"
        faqs={faqs}
        relatedLinks={[
          { label: 'Urea Fertilizer Supplier', href: '/urea-fertilizer-supplier' },
          { label: 'DAP Fertilizer Supplier', href: '/dap-fertilizer-supplier' },
          { label: 'Bulk Export Info', href: '/bulk-fertilizer-export' },
          { label: 'Africa Supply', href: '/fertilizer-supplier-africa' },
        ]}
      />
    </>
  );
}
