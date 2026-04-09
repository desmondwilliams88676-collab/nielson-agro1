import { siteUrl, COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from './utils';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_NAME,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE,
    contactType: 'sales',
    email: CONTACT_EMAIL,
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'French', 'Arabic', 'Spanish'],
  },
  sameAs: [
    'https://linkedin.com/company/nielson-agro',
    'https://twitter.com/nielsonagro',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 100,
    maxValue: 500,
  },
  foundingDate: '2009',
  description:
    'Nielson Agro Fertilizers is a global bulk fertilizer supplier exporting NPK, Urea, DAP, and specialty fertilizers to 50+ countries. Trusted by distributors, governments, and large-scale farms worldwide.',
};

export const productSchema = (product: {
  name: string;
  description: string;
  image: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  url: product.url,
  brand: {
    '@type': 'Brand',
    name: COMPANY_NAME,
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    seller: {
      '@type': 'Organization',
      name: COMPANY_NAME,
    },
  },
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
