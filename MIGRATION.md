# ChatDaddy Migration Plan: Replit → Vercel (Zero Downtime)

## Architecture

```
GitHub Repo → Vercel (auto-deploy) → chatdaddy.tech
                                  → Sanity CMS (headless, hosted by Sanity)
                                  → Sanity Studio at /studio
```

---

## Phase 1: Pre-Migration Setup (Do FIRST, before touching DNS)

### 1.1 Create Sanity Project
1. Go to https://sanity.io → Create new project "chatdaddy"
2. Copy Project ID → set `NEXT_PUBLIC_SANITY_PROJECT_ID` in Vercel env
3. Create API read token → set `SANITY_API_READ_TOKEN`
4. Generate a random secret → set `SANITY_REVALIDATE_SECRET`
5. Add CORS origin: `https://chatdaddy.tech` (and your Vercel preview URL)

### 1.2 Push to GitHub
```bash
cd ~/chatdaddy-website
git init
git add .
git commit -m "Initial: Next.js 15 + Sanity CMS with SEO/AEO infrastructure"
git remote add origin https://github.com/YOUR_ORG/chatdaddy-website.git
git push -u origin main
```

### 1.3 Connect Vercel
1. Go to https://vercel.com → Import GitHub repo
2. Framework: Next.js (auto-detected)
3. Set all environment variables from `.env.local.example`
4. Deploy → get preview URL (e.g., `chatdaddy-website.vercel.app`)
5. **TEST EVERYTHING on the preview URL before proceeding**

### 1.4 Populate CMS Content
1. Access Sanity Studio at `your-preview-url.vercel.app/studio`
2. Recreate ALL existing pages with content from the current Framer site
3. Create Site Settings document with organization info
4. Ensure every page has SEO fields filled in

### 1.5 Set Up Sanity Webhook (for ISR)
1. Sanity Dashboard → API → Webhooks
2. URL: `https://chatdaddy.tech/api/revalidate?secret=YOUR_SECRET`
3. Trigger on: Create, Update, Delete
4. Filter: All document types

---

## Phase 2: Pre-Migration Verification Checklist

Before touching DNS, verify ALL of these on the Vercel preview URL:

- [ ] All pages load and render correctly (server-side, not blank)
- [ ] `sitemap.xml` returns valid XML with all pages
- [ ] `robots.txt` allows crawling and points to sitemap
- [ ] View source on every page → content is in the HTML (not JS-only)
- [ ] Open Graph images work (test with https://opengraph.xyz)
- [ ] JSON-LD structured data validates (test with https://validator.schema.org)
- [ ] Mobile responsive on all pages
- [ ] Page load speed < 3s (test with Lighthouse)
- [ ] 404 page works for invalid URLs
- [ ] All internal links work (no broken links)
- [ ] Images load from Sanity CDN

---

## Phase 3: Zero-Downtime DNS Migration

### The Key Principle: Run BOTH sites simultaneously during transition

### 3.1 Add Custom Domain to Vercel
1. Vercel Dashboard → Project Settings → Domains
2. Add `chatdaddy.tech` (primary)
3. Add `www.chatdaddy.tech` (redirects to non-www)
4. Vercel will give you DNS records to set

### 3.2 DNS Cutover (the critical moment)
1. **Lower TTL first**: 24 hours before migration, set DNS TTL to 60 seconds
2. **Keep Replit running** — do NOT turn it off yet
3. Update DNS records to point to Vercel:
   - `A` record → Vercel's IP (`76.76.21.21`)
   - `CNAME` for `www` → `cname.vercel-dns.com`
4. DNS propagation takes 5-60 minutes with low TTL
5. Verify with: `dig chatdaddy.tech` and `nslookup chatdaddy.tech`

### 3.3 Post-DNS Verification
- [ ] `https://chatdaddy.tech` loads from Vercel (check response headers)
- [ ] `https://www.chatdaddy.tech` redirects to `https://chatdaddy.tech`
- [ ] SSL certificate is active (Vercel auto-provisions)
- [ ] All pages work on the live domain

### 3.4 Keep Replit Running for 48 Hours
- Some DNS resolvers cache longer than expected
- Only shut down Replit after confirming zero errors for 48 hours

---

## Phase 4: Post-Migration SEO Recovery

### 4.1 Google Search Console (Do IMMEDIATELY after DNS switch)
1. Go to https://search.google.com/search-console
2. Add property `https://chatdaddy.tech` (if not already)
3. Submit sitemap: `https://chatdaddy.tech/sitemap.xml`
4. Request indexing for all key pages manually:
   - `/`
   - `/our-story`
   - `/integration`
   - `/service-package`
   - `/pricing`
   - `/features`
   - `/blog`
   - All `/application/*` pages
5. Use "URL Inspection" tool on each page to verify Google can render it

### 4.2 Bing Webmaster Tools
1. Add site at https://www.bing.com/webmasters
2. Submit sitemap
3. This also covers Perplexity, ChatGPT search (they use Bing's index)

### 4.3 Monitor for 30 Days
- Check Search Console daily for:
  - Crawl errors
  - Coverage issues
  - Mobile usability problems
  - Core Web Vitals
- Track indexed page count — should increase, not decrease
- Monitor organic traffic in analytics

---

## 301 Redirect Map (Existing URLs → New URLs)

All existing URLs are PRESERVED with the same path structure:

| Old URL (Replit/Framer) | New URL (Vercel) | Status |
|---|---|---|
| `/` | `/` | Same |
| `/our-story` | `/our-story` | Same |
| `/service-package` | `/service-package` | Same |
| `/integration` | `/integration` | Same |
| `/application/livechat` | `/application/livechat` | Same |
| `/application/instagram` | `/application/instagram` | Same |
| `/application/salesforce` | `/application/salesforce` | Same |
| `/application/hubspot` | `/application/hubspot` | Same |
| `/application/alfred` | `/application/alfred` | Same |
| `/application/thinkific` | `/application/thinkific` | Same |
| `/application/chatwork` | `/application/chatwork` | Same |
| `/application/ontraport` | `/application/ontraport` | Same |
| `www.chatdaddy.tech/*` | `chatdaddy.tech/*` | 301 redirect |

**No URLs change = No redirects needed = No indexing loss**

---

## Why This Won't Lose Traffic Like the Replit Migration

| Problem (Replit/Framer) | Solution (Next.js/Vercel) |
|---|---|
| No `sitemap.xml` | Auto-generated dynamic sitemap from CMS |
| No `robots.txt` | Proper robots.txt with AI crawler rules |
| Client-side rendering | Server-side rendering (SSR/SSG) — content in HTML |
| No structured data | JSON-LD on every page (Organization, FAQ, Article, HowTo) |
| www/non-www split | 301 redirect www → non-www |
| No canonical URLs | Canonical URL on every page |
| No meta descriptions | CMS-managed meta titles, descriptions, OG images |
| No Open Graph | Full OG tags for social sharing |
| No AEO optimization | AI summary field, FAQ schema, speakable content |
| Slow Framer JS bundle | Edge-cached static pages via Vercel CDN |
| No ISR | On-demand revalidation via Sanity webhooks |

---

## New Pages to Create (SEO Growth)

These pages didn't exist before but will drive organic traffic:

1. `/blog` — Content marketing hub (target long-tail keywords)
2. `/features` — Individual feature pages (target feature-specific searches)
3. `/features/[slug]` — Deep-dive pages with FAQ schema
4. `/pricing` — High-intent commercial page
5. `/contact` — Conversion page

---

## AEO (Answer Engine Optimization) Checklist

- [x] `robots.txt` explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended
- [x] FAQ schema on pricing, features, and homepage
- [x] HowTo schema on integration setup pages
- [x] Organization schema on every page
- [x] SoftwareApplication schema on homepage
- [x] BlogPosting schema on all articles
- [x] AI Summary field in CMS (custom field for AI-friendly descriptions)
- [x] Clean HTML structure with semantic headings (H1 → H2 → H3)
- [x] Server-rendered content (AI crawlers can read it without JS)
- [ ] TODO: Add `speakable` schema for voice search optimization
- [ ] TODO: Submit to Perplexity's index at https://perplexity.ai/submit
