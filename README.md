# Nielson Agro Fertilizers — Production Website

> High-converting B2B lead generation website for bulk fertilizer supplier.
> Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 📁 Project Structure

```
nielson-agro/
├── app/
│   ├── layout.tsx                      # Root layout with SEO metadata
│   ├── page.tsx                        # Homepage
│   ├── sitemap.ts                      # Auto-generated XML sitemap
│   ├── robots.ts                       # Robots.txt
│   ├── npk-fertilizer-supplier/
│   │   └── page.tsx                    # NPK landing page
│   ├── urea-fertilizer-supplier/
│   │   └── page.tsx                    # Urea landing page
│   ├── dap-fertilizer-supplier/
│   │   └── page.tsx                    # DAP landing page
│   ├── bulk-fertilizer-export/
│   │   └── page.tsx                    # Bulk export landing page
│   ├── fertilizer-supplier-africa/
│   │   └── page.tsx                    # Africa supply landing page
│   ├── blog/
│   │   └── page.tsx                    # Blog index
│   └── api/
│       └── contact/
│           └── route.ts                # Lead capture API endpoint
├── components/
│   ├── Navbar.tsx                      # Sticky navbar with dropdown
│   ├── Footer.tsx                      # Footer with internal links
│   ├── HeroSection.tsx                 # Reusable hero section
│   ├── TrustBar.tsx                    # Animated trust ticker
│   ├── ContactForm.tsx                 # Lead capture form (React Hook Form)
│   ├── WhyChooseUs.tsx                 # Why choose section
│   ├── Testimonials.tsx                # Social proof section
│   ├── ProductLandingPage.tsx          # Reusable landing page template
│   ├── WhatsAppButton.tsx              # Floating WhatsApp CTA
│   └── StickyCtaBar.tsx               # Mobile sticky CTA bar
├── lib/
│   ├── utils.ts                        # Constants and utilities
│   └── schema.ts                       # JSON-LD structured data
├── styles/
│   └── globals.css                     # Global styles + animations
├── public/
│   └── manifest.json                   # PWA manifest
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create environment variables
cp .env.example .env.local

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

---

## ⚙️ Environment Variables

Create `.env.local` with:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://nielsonagro.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890

# Email — choose one
SENDGRID_API_KEY=your_sendgrid_key

# CRM
HUBSPOT_ACCESS_TOKEN=your_hubspot_token

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/...

# Database (optional)
AIRTABLE_API_KEY=your_airtable_key
AIRTABLE_BASE_ID=your_base_id

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

---

## 📧 Lead Capture Setup

Open `app/api/contact/route.ts` and uncomment one of the integrations:

### Option A: SendGrid Email (Recommended)
```bash
npm install @sendgrid/mail
```
Uncomment the SendGrid block and set `SENDGRID_API_KEY`.

### Option B: HubSpot CRM
Set `HUBSPOT_ACCESS_TOKEN`. Uncomment the HubSpot block.
Leads will appear in your CRM pipeline automatically.

### Option C: Airtable Spreadsheet
```bash
npm install airtable
```
Create a "Leads" table in Airtable. Uncomment the block and set API keys.

### Option D: Slack Notifications
Set `SLACK_WEBHOOK_URL`. Get instant Slack alerts for every lead.

---

## 🚀 Deployment

### Vercel (Recommended — 5 minutes)
```bash
npm install -g vercel
vercel --prod
```
Or connect your GitHub repo at vercel.com/new

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Self-Hosted (VPS/Cloud)
```bash
npm run build
npm start
# Use PM2 for process management:
npm install -g pm2
pm2 start npm --name "nielson-agro" -- start
pm2 save
```

---

## 🔍 SEO Checklist

After deployment:

- [ ] Submit sitemap to Google Search Console: `https://yoursite.com/sitemap.xml`
- [ ] Verify Google Search Console ownership (add code to `app/layout.tsx`)
- [ ] Set up Google Analytics 4 (replace GTM-XXXXXX in layout)
- [ ] Configure Bing Webmaster Tools
- [ ] Add business to Google Business Profile
- [ ] Set up Ahrefs / SEMrush monitoring
- [ ] Build backlinks from agricultural directories
- [ ] Submit to fertilizer industry directories

---

## 📊 Google Ads Setup

### Campaign 1: High Intent
- Keywords: fertilizer supplier, bulk fertilizer supplier, npk fertilizer supplier, urea supplier, dap fertilizer supplier
- Landing pages: `/npk-fertilizer-supplier`, `/urea-fertilizer-supplier`, `/dap-fertilizer-supplier`
- Bid strategy: Target CPA or Maximize Conversions

### Campaign 2: Export Buyers
- Keywords: fertilizer export company, bulk fertilizer export, fertilizer supplier worldwide
- Landing page: `/bulk-fertilizer-export`

### Campaign 3: Africa Focus
- Keywords: fertilizer supplier africa, fertilizer supplier nigeria, dap supplier africa
- Landing page: `/fertilizer-supplier-africa`

### Conversion Tracking
Add to form success handler:
```javascript
gtag('event', 'generate_lead', {
  currency: 'USD',
  value: 500.00,
  lead_source: 'website_form'
});
```

---

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  green: { DEFAULT: '#1F6B3A', ... },
  blue: { DEFAULT: '#1E5AA8', ... },
}
```

### Company Info
Edit `lib/utils.ts`:
```ts
export const WHATSAPP_NUMBER = '+1234567890'; // Real number
export const CONTACT_EMAIL = 'sales@nielsonagro.com';
export const CONTACT_PHONE = '+1 (800) 555-AGRO';
```

### Images
Replace Unsplash URLs with your own professional photography.
Place images in `/public/images/` and use relative paths.

---

## 📈 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ |
| First Contentful Paint | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Form Conversion Rate | 3–7% |

---

## 📞 Support

For customization or feature additions, the codebase is fully documented and TypeScript-typed.
