import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COMPANY_NAME = 'Nielson Agro Fertilizers';
export const COMPANY_SHORT = 'Nielson Agro';
export const WHATSAPP_NUMBER = '+1234567890'; // Replace with real number
export const CONTACT_EMAIL = 'sales@nielsonagro.com';
export const CONTACT_PHONE = '+1 (800) 555-AGRO';

export const COUNTRIES_SERVED = 50;
export const YEARS_EXPERIENCE = 15;
export const PRODUCTS_AVAILABLE = 20;
export const SATISFIED_CLIENTS = 500;

export const siteUrl = 'https://nielsonagro.com';

export const socialLinks = {
  linkedin: 'https://linkedin.com/company/nielson-agro',
  twitter: 'https://twitter.com/nielsonagro',
  facebook: 'https://facebook.com/nielsonagro',
};

export const products = [
  {
    id: 'npk',
    name: 'NPK Fertilizer',
    slug: 'npk-fertilizer-supplier',
    shortDesc: 'Balanced macro-nutrient fertilizer for all crops',
    color: 'green',
    icon: '🌱',
  },
  {
    id: 'urea',
    name: 'Urea Fertilizer',
    slug: 'urea-fertilizer-supplier',
    shortDesc: 'High nitrogen content for rapid crop growth',
    color: 'blue',
    icon: '💧',
  },
  {
    id: 'dap',
    name: 'DAP Fertilizer',
    slug: 'dap-fertilizer-supplier',
    shortDesc: 'Di-Ammonium Phosphate for root development',
    color: 'green',
    icon: '🌾',
  },
];
