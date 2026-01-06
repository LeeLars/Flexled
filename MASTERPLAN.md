# FLEXLED MASTERPLAN

> LED-scherm verhuur website met focus op lead generatie

---

## INHOUDSOPGAVE

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Sitemap (84 pagina's)](#4-sitemap)
5. [CMS Structuur](#5-cms-structuur)
6. [Lead Management](#6-lead-management)
7. [Implementatie Fases](#7-implementatie-fases)
8. [Deployment](#8-deployment)

---

## 1. PROJECT OVERVIEW

### Doel
Maximale lead generatie via SEO-geoptimaliseerde pagina's voor LED-scherm verhuur in West- en Oost-Vlaanderen.

### Doelgroep
- Event organisatoren
- Bedrijven
- Gemeentes
- Festivals & sportclubs

### KPIs
| Metric | Target |
|--------|--------|
| Leads/maand | 20+ |
| Organisch verkeer | +50% in 6 maanden |
| Conversieratio | 3-5% |
| Google ranking | Top 3 voor lokale zoektermen |

---

## 2. TECH STACK

| Component | Tool |
|-----------|------|
| **Frontend** | Next.js 14 (App Router) |
| **Styling** | TailwindCSS + shadcn/ui |
| **CMS** | Payload CMS 3.0 |
| **Database** | PostgreSQL |
| **Hosting** | Railway |
| **Media** | Cloudinary |
| **Version Control** | GitHub |
| **Forms** | React Hook Form + Zod |

### Architectuur
```
┌─────────────────────────────────────────────┐
│              NEXT.JS + PAYLOAD              │
├─────────────────────────────────────────────┤
│  Frontend ◄── Payload CMS ◄── API Routes   │
│      │              │              │        │
│      └──────────────┼──────────────┘        │
│                     ▼                       │
│            Payload Local API                │
└─────────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   PostgreSQL    Cloudinary     GitHub
   (Railway)     (Media CDN)    (Deploy)
```

---

## 3. DESIGN SYSTEM

### Kleuren
| Naam | Hex | Gebruik |
|------|-----|---------|
| **Primary** | `#0CE830` | CTA's, accenten, icons |
| **Background** | `#1C1C1C` | Hoofdachtergrond |
| **Background Alt** | `#141414` | Cards, sections |
| **Surface** | `#2A2A2A` | Hover, borders |
| **Text** | `#FFFFFF` | Headings, body |
| **Text Muted** | `#A0A0A0` | Subtitels |

### Typografie
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Roboto | 700 | 48-64px |
| H2 | Roboto | 700 | 36-48px |
| H3 | Roboto | 700 | 24-32px |
| Body | Roboto | 400 | 16-18px |
| Button | Roboto | 700 | 16px |

### Componenten
- **Afbeeldingen:** `rounded-xl` (12px)
- **Cards:** `rounded-2xl` (16px)
- **Buttons:** Pill shape met arrow icon
- **Spacing:** Min. `space-6` tussen sections

### Button Arrow SVG
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <rect x="29.5" y="29.5" width="29" height="29" rx="14.5" transform="rotate(180 29.5 29.5)" stroke="#0CE830"/>
  <path d="M17.8243 21.359C17.5899 21.547 17.2101 21.547 16.9758 21.359L9.17574 15.0997C8.94142 14.9117 8.94142 14.6069 9.17574 14.4188L16.3758 8.64102C16.6101 8.45299 16.9899 8.45299 17.2243 8.64102C17.4586 8.82905 17.4586 9.13384 17.2243 9.32187L10.4484 14.7593L17.8243 20.6781C18.0586 20.8662 18.0586 21.1709 17.8243 21.359Z" fill="#0CE830"/>
</svg>
```

---

## 4. SITEMAP

**Totaal: 84 pagina's**

### FASE 1: Core + West-Vlaanderen (41 pagina's)

#### Core Pagina's
| URL | Pagina |
|-----|--------|
| `/` | Homepage |
| `/ledscherm-huren/` | Product Hub |
| `/ledscherm-huren/6m2/` | Product 6m² |
| `/ledscherm-huren/8m2/` | Product 8m² |
| `/ledscherm-huren/16m2/` | Product 16m² |
| `/offerte/` | Lead Formulier |
| `/contact/` | Contact |
| `/over-ons/` | Over FlexLED |
| `/privacy-policy/` | Privacy |
| `/algemene-voorwaarden/` | Voorwaarden |

#### West-Vlaanderen (31 pagina's)
| URL | Stad |
|-----|------|
| `/ledscherm-huren/west-vlaanderen/` | Hub |
| `/ledscherm-huren/west-vlaanderen/oostkamp/` | Oostkamp |
| `/ledscherm-huren/west-vlaanderen/brugge/` | Brugge |
| `/ledscherm-huren/west-vlaanderen/zedelgem/` | Zedelgem |
| `/ledscherm-huren/west-vlaanderen/beernem/` | Beernem |
| `/ledscherm-huren/west-vlaanderen/damme/` | Damme |
| `/ledscherm-huren/west-vlaanderen/jabbeke/` | Jabbeke |
| `/ledscherm-huren/west-vlaanderen/knokke-heist/` | Knokke-Heist |
| `/ledscherm-huren/west-vlaanderen/blankenberge/` | Blankenberge |
| `/ledscherm-huren/west-vlaanderen/gistel/` | Gistel |
| `/ledscherm-huren/west-vlaanderen/torhout/` | Torhout |
| `/ledscherm-huren/west-vlaanderen/kortrijk/` | Kortrijk |
| `/ledscherm-huren/west-vlaanderen/roeselare/` | Roeselare |
| `/ledscherm-huren/west-vlaanderen/waregem/` | Waregem |
| `/ledscherm-huren/west-vlaanderen/oostende/` | Oostende |
| `/ledscherm-huren/west-vlaanderen/ieper/` | Ieper |
| `/ledscherm-huren/west-vlaanderen/tielt/` | Tielt |
| `/ledscherm-huren/west-vlaanderen/menen/` | Menen |
| `/ledscherm-huren/west-vlaanderen/izegem/` | Izegem |
| `/ledscherm-huren/west-vlaanderen/diksmuide/` | Diksmuide |
| `/ledscherm-huren/west-vlaanderen/veurne/` | Veurne |
| `/ledscherm-huren/west-vlaanderen/wevelgem/` | Wevelgem |
| `/ledscherm-huren/west-vlaanderen/kuurne/` | Kuurne |
| `/ledscherm-huren/west-vlaanderen/deerlijk/` | Deerlijk |
| `/ledscherm-huren/west-vlaanderen/zwevegem/` | Zwevegem |
| `/ledscherm-huren/west-vlaanderen/anzegem/` | Anzegem |
| `/ledscherm-huren/west-vlaanderen/poperinge/` | Poperinge |
| `/ledscherm-huren/west-vlaanderen/lichtervelde/` | Lichtervelde |
| `/ledscherm-huren/west-vlaanderen/ingelmunster/` | Ingelmunster |
| `/ledscherm-huren/west-vlaanderen/moorslede/` | Moorslede |
| `/ledscherm-huren/west-vlaanderen/kortemark/` | Kortemark |

---

### FASE 2: Toepassingen + Oost-Vlaanderen (37 pagina's)

#### Toepassingen (8 pagina's)
| URL | Pagina |
|-----|--------|
| `/mobiel-ledscherm-huren/` | Mobiel LED |
| `/toepassingen/` | Hub |
| `/toepassingen/bedrijfsevenement/` | Bedrijfsevenement |
| `/toepassingen/festival/` | Festival |
| `/toepassingen/sportwedstrijd/` | Sportwedstrijd |
| `/toepassingen/beurs-of-expo/` | Beurs/Expo |
| `/toepassingen/winkel-of-showroom/` | Winkel/Showroom |
| `/realisaties/` | Portfolio |

#### Oost-Vlaanderen (29 pagina's)
| URL | Stad |
|-----|------|
| `/ledscherm-huren/oost-vlaanderen/` | Hub |
| `/ledscherm-huren/oost-vlaanderen/gent/` | Gent |
| `/ledscherm-huren/oost-vlaanderen/deinze/` | Deinze |
| `/ledscherm-huren/oost-vlaanderen/aalter/` | Aalter |
| `/ledscherm-huren/oost-vlaanderen/eeklo/` | Eeklo |
| `/ledscherm-huren/oost-vlaanderen/maldegem/` | Maldegem |
| `/ledscherm-huren/oost-vlaanderen/kruisem/` | Kruisem |
| `/ledscherm-huren/oost-vlaanderen/oudenaarde/` | Oudenaarde |
| `/ledscherm-huren/oost-vlaanderen/nazareth-de-pinte/` | Nazareth-De Pinte |
| `/ledscherm-huren/oost-vlaanderen/aalst/` | Aalst |
| `/ledscherm-huren/oost-vlaanderen/ronse/` | Ronse |
| `/ledscherm-huren/oost-vlaanderen/zottegem/` | Zottegem |
| `/ledscherm-huren/oost-vlaanderen/geraardsbergen/` | Geraardsbergen |
| `/ledscherm-huren/oost-vlaanderen/ninove/` | Ninove |
| `/ledscherm-huren/oost-vlaanderen/dendermonde/` | Dendermonde |
| `/ledscherm-huren/oost-vlaanderen/lokeren/` | Lokeren |
| `/ledscherm-huren/oost-vlaanderen/sint-niklaas/` | Sint-Niklaas |
| `/ledscherm-huren/oost-vlaanderen/temse/` | Temse |
| `/ledscherm-huren/oost-vlaanderen/wetteren/` | Wetteren |
| `/ledscherm-huren/oost-vlaanderen/merelbeke/` | Merelbeke |
| `/ledscherm-huren/oost-vlaanderen/destelbergen/` | Destelbergen |
| `/ledscherm-huren/oost-vlaanderen/lochristi/` | Lochristi |
| `/ledscherm-huren/oost-vlaanderen/lede/` | Lede |
| `/ledscherm-huren/oost-vlaanderen/berlare/` | Berlare |
| `/ledscherm-huren/oost-vlaanderen/lebbeke/` | Lebbeke |
| `/ledscherm-huren/oost-vlaanderen/waasmunster/` | Waasmunster |
| `/ledscherm-huren/oost-vlaanderen/oosterzele/` | Oosterzele |
| `/ledscherm-huren/oost-vlaanderen/gavere/` | Gavere |
| `/ledscherm-huren/oost-vlaanderen/evergem/` | Evergem |

---

### FASE 3: Kennisbank (6 pagina's)

| URL | Pagina |
|-----|--------|
| `/kennisbank/` | Hub |
| `/kennisbank/wat-kost-een-ledscherm-huren/` | Prijzen |
| `/kennisbank/wat-is-pixelpitch/` | Pixel Pitch |
| `/kennisbank/indoor-vs-outdoor-ledscherm/` | Indoor vs Outdoor |
| `/kennisbank/content-tips-ledscherm/` | Content Tips |
| `/kennisbank/ledscherm-huren-of-kopen/` | Huren vs Kopen |

---

## 5. CMS STRUCTUUR

### Collections

```
PAYLOAD CMS
├── Leads           # Offerteaanvragen
├── Pages           # Alle 84 pagina's
├── Products        # 3 LED-schermen
├── Steden          # 58 steden
├── Realisaties     # Portfolio/cases
├── Media           # Cloudinary afbeeldingen
└── Users           # Admin accounts

GLOBALS
├── SiteSettings    # Bedrijfsinfo, SEO defaults
└── Navigation      # Menu structuur
```

### Leads Collection
```typescript
{
  naam: string          // Verplicht
  bedrijf: string
  email: string         // Verplicht
  telefoon: string      // Verplicht
  eventType: select     // Bedrijf/Festival/Sport/etc.
  eventDatum: date
  schermformaat: select // 6m²/8m²/16m²/Onbekend
  locatie: string
  bericht: text
  status: select        // Nieuw/Gecontacteerd/Offerte/Gewonnen/Verloren
  notities: richText
  bron: {
    pagina: string
    utmSource: string
    utmMedium: string
    utmCampaign: string
  }
}
```

### Pages Collection
```typescript
{
  title: string
  slug: string          // URL pad
  pageType: select      // Homepage/Product/Lokaal/Toepassing/Kennisbank
  seo: {
    metaTitle: string
    metaDescription: text
    keywords: string
    ogImage: upload
  }
  hero: {
    h1: string
    subtitle: text
    image: upload
    ctaText: string
    ctaLink: string
  }
  content: blocks[]     // Page builder
  lokaal: {             // Alleen voor lokale pagina's
    provincie: select
    stad: relation
    nabijgelegenSteden: relation[]
  }
  status: select        // Draft/Published
}
```

### Page Builder Blocks
| Block | Gebruik |
|-------|---------|
| **ProductGrid** | Toon LED-schermen |
| **CTA** | Call-to-action sectie |
| **FAQ** | Veelgestelde vragen |
| **Testimonials** | Klantreviews |
| **Gallery** | Foto grid |
| **USP** | Unique selling points |
| **NearbyLocations** | Nabijgelegen steden |
| **TextBlock** | Vrije tekst |

### Products Collection
```typescript
{
  naam: string          // "LED-scherm 8m²"
  slug: string
  formaat: string       // "8m²"
  hoofdAfbeelding: upload
  gallery: upload[]
  specs: {
    resolutie: string
    pixelPitch: string
    helderheid: string
    afmetingen: string
  }
  prijs: {
    vanafPrijs: number
    prijsPerDag: number
    toonPrijzen: boolean
  }
  beschrijving: richText
  usps: string[]
}
```

### Steden Collection
```typescript
{
  naam: string          // "Brugge"
  slug: string          // "brugge"
  provincie: select     // West-Vl/Oost-Vl
  postcode: string
  content: {
    introTekst: richText
    lokaleInfo: text
  }
  nabijgelegen: relation[]  // Andere steden
  realisaties: relation[]   // Cases in deze stad
  actief: boolean
}
```

---

## 6. LEAD MANAGEMENT

### Lead Flow
```
Website Bezoeker
      │
      ▼
Lokale SEO Pagina (bijv. /ledscherm-huren/brugge)
      │
      ▼
CTA → /offerte/
      │
      ▼
Formulier invullen
      │
      ▼
Submit → API Route → Payload CMS
      │
      ├──► Email naar admin
      └──► Bevestiging naar klant
      │
      ▼
Lead in CMS Dashboard
      │
      ▼
Status Pipeline:
Nieuw → Gecontacteerd → Offerte → Gewonnen/Verloren
```

### Lead Dashboard Features
- Overzicht met filters (status, datum, locatie)
- Bulk acties (status wijzigen)
- Export naar CSV
- Notities per lead
- Bron tracking (welke pagina, UTM)

### Formulier Velden
| Veld | Type | Verplicht |
|------|------|-----------|
| Naam | text | ✓ |
| Bedrijf | text | |
| Email | email | ✓ |
| Telefoon | tel | ✓ |
| Type event | select | |
| Datum | date | |
| Schermformaat | select | |
| Locatie | text | |
| Bericht | textarea | |

---

## 7. IMPLEMENTATIE FASES

### FASE 0: Setup
- [ ] GitHub repo aanmaken
- [ ] `npx create-payload-app@latest flexled`
- [ ] Railway project (App + PostgreSQL)
- [ ] Cloudinary account configureren
- [ ] Environment variables instellen
- [ ] TailwindCSS + shadcn/ui setup
- [ ] Basis componenten (Button, Card, etc.)

### FASE 1: Core + West-Vlaanderen
- [ ] Collections aanmaken (Leads, Pages, Products, Steden, Media)
- [ ] Page builder blocks bouwen
- [ ] Homepage
- [ ] Product pagina's (6m², 8m², 16m²)
- [ ] Offerte formulier + lead opslag
- [ ] Contact & Over ons
- [ ] West-Vlaanderen hub + 30 stad pagina's
- [ ] Email notificaties
- [ ] Privacy & Voorwaarden

### FASE 2: Toepassingen + Oost-Vlaanderen
- [ ] Toepassingen hub + 5 detail pagina's
- [ ] Mobiel LED pagina
- [ ] Realisaties/portfolio
- [ ] Oost-Vlaanderen hub + 28 stad pagina's

### FASE 3: Kennisbank + Optimalisatie
- [ ] 6 Kennisbank artikelen
- [ ] SEO optimalisatie (schema markup)
- [ ] Sitemap.xml generatie
- [ ] Performance audit
- [ ] Internal linking check

### FASE 4: Launch
- [ ] Content review
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] DNS configuratie
- [ ] SSL certificaat
- [ ] Go live
- [ ] Google Search Console
- [ ] Analytics setup

---

## 8. DEPLOYMENT

### Railway Setup
```
Railway Project
├── Web Service (Next.js + Payload)
└── PostgreSQL Database
```

### Environment Variables
```env
# Database
DATABASE_URI=postgresql://...

# Payload
PAYLOAD_SECRET=random-secret-key
NEXT_PUBLIC_SERVER_URL=https://flexled.be

# Cloudinary
CLOUDINARY_CLOUD_NAME=flexled
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# Email (optioneel)
RESEND_API_KEY=xxx
```

### CI/CD
```
Push to GitHub (main)
      │
      ▼
Railway auto-detect
      │
      ▼
npm run build
      │
      ▼
Database migrations
      │
      ▼
Deploy to production
```

### Cloudinary Folders
```
flexled/
├── products/       # Product foto's
├── realisaties/    # Case foto's
├── hero/           # Hero images
├── steden/         # Stad-specifieke foto's
└── misc/           # Overige
```

### Foto Vervangen
1. Upload nieuwe foto met **zelfde naam**
2. Cloudinary overschrijft automatisch
3. CDN cache verloopt (~5 min)
4. Website toont nieuwe foto

---

## OPEN VRAGEN

- [ ] Exacte prijzen per schermformaat?
- [ ] Beschikbare foto's/cases?
- [ ] Bestaande Google Business Profile?
- [ ] Gewenst domein?
- [ ] Email voor lead notificaties?
- [ ] Logo en branding assets?

---

## PROJECT STRUCTUUR

```
flexled/
├── src/
│   ├── app/
│   │   ├── (website)/          # Public pages
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── [...slug]/      # Dynamic pages
│   │   │   ├── offerte/
│   │   │   └── layout.tsx
│   │   ├── (payload)/          # CMS Admin
│   │   │   └── admin/
│   │   └── api/
│   │       ├── [...payload]/   # Payload API
│   │       └── leads/          # Lead submission
│   ├── collections/
│   │   ├── Leads.ts
│   │   ├── Pages.ts
│   │   ├── Products.ts
│   │   ├── Steden.ts
│   │   ├── Realisaties.ts
│   │   └── Media.ts
│   ├── blocks/
│   │   ├── ProductGrid/
│   │   ├── CTA/
│   │   ├── FAQ/
│   │   └── ...
│   ├── components/
│   │   ├── ui/                 # shadcn/ui
│   │   ├── forms/
│   │   └── layout/
│   ├── globals/
│   │   ├── SiteSettings.ts
│   │   └── Navigation.ts
│   └── lib/
│       ├── payload.ts
│       └── cloudinary.ts
├── payload.config.ts
├── tailwind.config.js
├── .env.local
└── package.json
```

---

*Laatste update: Januari 2026*
