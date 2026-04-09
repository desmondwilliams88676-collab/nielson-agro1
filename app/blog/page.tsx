import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { siteUrl } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Fertilizer Industry Blog & News',
  description: 'Stay updated with fertilizer market prices, agricultural news, crop nutrition guides, and export trade insights from Nielson Agro Fertilizers.',
  alternates: { canonical: `${siteUrl}/blog` },
};

const posts = [
  {
    slug: 'npk-fertilizer-complete-guide',
    title: 'NPK Fertilizer Complete Guide: Understanding Grades, Application & Buying in Bulk',
    excerpt: 'Everything you need to know about NPK compound fertilizers — from how to read the grade numbers to how to source bulk supply at competitive prices.',
    category: 'Product Guide',
    date: '2024-06-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    slug: 'urea-vs-ammonium-nitrate',
    title: 'Urea vs Ammonium Nitrate: Which Nitrogen Fertilizer Should You Source?',
    excerpt: 'A detailed comparison of urea and ammonium nitrate for bulk buyers — covering agronomic performance, pricing, handling, and import regulations.',
    category: 'Comparison',
    date: '2024-05-20',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
  },
  {
    slug: 'fertilizer-import-africa-guide',
    title: 'How to Import Fertilizers into Africa: Complete Customs & Documentation Guide',
    excerpt: 'Step-by-step guide for fertilizer importers in Africa covering customs procedures, required documents, port agents, and common pitfalls to avoid.',
    category: 'Import Guide',
    date: '2024-05-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1591634616938-b1e44a9e1f85?w=600&q=80',
  },
  {
    slug: 'bulk-fertilizer-incoterms-explained',
    title: 'FOB vs CIF vs DAP: Incoterms Explained for Fertilizer Buyers',
    excerpt: 'Confused about incoterms? This guide explains FOB, CIF, DAP, and other trade terms specifically in the context of bulk fertilizer purchasing.',
    category: 'Trade Guide',
    date: '2024-04-25',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  },
  {
    slug: 'dap-fertilizer-crop-applications',
    title: 'DAP Fertilizer Crop Applications: When, How & How Much to Apply',
    excerpt: 'Agronomic guidance on DAP application rates, timing, placement, and crop-specific recommendations for maximizing phosphate fertilizer efficiency.',
    category: 'Agronomy',
    date: '2024-04-10',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4e6?w=600&q=80',
  },
  {
    slug: 'fertilizer-market-prices-2024',
    title: 'Fertilizer Market Price Outlook 2024: What Bulk Buyers Need to Know',
    excerpt: 'Analysis of global fertilizer price trends for urea, DAP, and NPK in 2024 — key drivers, regional variations, and buying strategy recommendations.',
    category: 'Market Analysis',
    date: '2024-03-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d1b0f] to-[#0e2850] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block font-body text-green-300 font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Hub</span>
          <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-4">FERTILIZER BLOG & INSIGHTS</h1>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">Market analysis, product guides, agronomy insights, and trade news for bulk fertilizer buyers.</p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-green-DEFAULT transition-all duration-300 card-hover">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-DEFAULT text-white font-body font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 font-body text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-gray-900 text-xl mb-3 leading-tight group-hover:text-green-DEFAULT transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 font-body font-semibold text-green-DEFAULT hover:gap-3 transition-all text-sm">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 cta-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl mb-4">READY TO SOURCE BULK FERTILIZERS?</h2>
          <p className="font-body text-white/80 mb-8">Get a competitive quote for NPK, Urea, or DAP within 24 hours.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-green-DEFAULT font-heading font-black px-10 py-4 rounded-xl hover:bg-green-50 transition-all text-lg uppercase tracking-wide">
            Request Quote Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
