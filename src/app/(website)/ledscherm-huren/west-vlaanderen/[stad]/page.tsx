import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const steden: Record<string, { naam: string; intro: string; nabijgelegen: string[] }> = {
  'oostkamp': {
    naam: 'Oostkamp',
    intro: 'Als thuisbasis van FlexLED zijn we in Oostkamp altijd snel ter plaatse. Ideaal voor lokale events, bedrijfspresentaties en feesten in de regio.',
    nabijgelegen: ['brugge', 'zedelgem', 'beernem', 'damme'],
  },
  'brugge': {
    naam: 'Brugge',
    intro: 'LED-scherm huren in Brugge? Perfect voor events op de Markt, bedrijfsfeesten, of culturele evenementen in deze historische stad.',
    nabijgelegen: ['oostkamp', 'damme', 'knokke-heist', 'blankenberge'],
  },
  'kortrijk': {
    naam: 'Kortrijk',
    intro: 'In Kortrijk en omgeving leveren wij LED-schermen voor festivals, sportevenementen en bedrijfsevents. Snelle service vanuit Oostkamp.',
    nabijgelegen: ['waregem', 'menen', 'wevelgem', 'kuurne'],
  },
  'roeselare': {
    naam: 'Roeselare',
    intro: 'LED-scherm huren in Roeselare? Wij leveren mobiele schermen voor alle soorten events in de stad en omliggende gemeenten.',
    nabijgelegen: ['izegem', 'torhout', 'tielt', 'lichtervelde'],
  },
  'oostende': {
    naam: 'Oostende',
    intro: 'Aan de kust een event organiseren? FlexLED levert weerbestendige LED-schermen in Oostende voor strandevenementen, festivals en meer.',
    nabijgelegen: ['blankenberge', 'gistel', 'jabbeke', 'knokke-heist'],
  },
  'knokke-heist': {
    naam: 'Knokke-Heist',
    intro: 'Premium LED-scherm verhuur in Knokke-Heist. Perfect voor exclusieve events, bedrijfsfeesten en culturele evenementen aan de kust.',
    nabijgelegen: ['blankenberge', 'damme', 'brugge', 'oostende'],
  },
  'blankenberge': {
    naam: 'Blankenberge',
    intro: 'LED-scherm huren in Blankenberge voor strandevenementen, festivals of bedrijfsfeesten? Wij leveren snel en betrouwbaar.',
    nabijgelegen: ['knokke-heist', 'oostende', 'brugge', 'jabbeke'],
  },
  'ieper': {
    naam: 'Ieper',
    intro: 'In Ieper en de Westhoek leveren wij LED-schermen voor herdenkingen, festivals en lokale events. Historische stad, moderne technologie.',
    nabijgelegen: ['poperinge', 'veurne', 'diksmuide', 'menen'],
  },
  'waregem': {
    naam: 'Waregem',
    intro: 'LED-scherm huren in Waregem? Ideaal voor de Waregem Koerse, bedrijfsevents en lokale festiviteiten.',
    nabijgelegen: ['kortrijk', 'deerlijk', 'anzegem', 'zwevegem'],
  },
  'tielt': {
    naam: 'Tielt',
    intro: 'FlexLED levert mobiele LED-schermen in Tielt en omgeving. Snel, betrouwbaar en altijd scherpe prijzen.',
    nabijgelegen: ['roeselare', 'ingelmunster', 'lichtervelde', 'moorslede'],
  },
  'menen': {
    naam: 'Menen',
    intro: 'LED-scherm huren in Menen aan de Franse grens? Wij leveren in heel Zuid-West-Vlaanderen.',
    nabijgelegen: ['kortrijk', 'wevelgem', 'ieper', 'poperinge'],
  },
  'izegem': {
    naam: 'Izegem',
    intro: 'In Izegem en omgeving zorgen wij voor LED-schermen bij events, beurzen en bedrijfsfeesten.',
    nabijgelegen: ['roeselare', 'ingelmunster', 'kuurne', 'lichtervelde'],
  },
  'torhout': {
    naam: 'Torhout',
    intro: 'LED-scherm huren in Torhout? Perfect voor lokale events, Rock Torhout-achtige festivals en bedrijfsevents.',
    nabijgelegen: ['roeselare', 'gistel', 'lichtervelde', 'kortemark'],
  },
  'diksmuide': {
    naam: 'Diksmuide',
    intro: 'FlexLED levert LED-schermen in Diksmuide voor herdenkingen, festivals en lokale evenementen.',
    nabijgelegen: ['veurne', 'ieper', 'torhout', 'kortemark'],
  },
  'veurne': {
    naam: 'Veurne',
    intro: 'LED-scherm huren in Veurne en de Westhoek? Wij zijn snel ter plaatse voor al uw events.',
    nabijgelegen: ['diksmuide', 'ieper', 'poperinge', 'oostende'],
  },
  'poperinge': {
    naam: 'Poperinge',
    intro: 'In Poperinge, de hopstreek, leveren wij LED-schermen voor festivals, bedrijfsevents en lokale feesten.',
    nabijgelegen: ['ieper', 'veurne', 'diksmuide', 'menen'],
  },
  'zedelgem': {
    naam: 'Zedelgem',
    intro: 'LED-scherm huren in Zedelgem? Als buren zijn we razendsnel ter plaatse vanuit Oostkamp.',
    nabijgelegen: ['oostkamp', 'torhout', 'jabbeke', 'beernem'],
  },
  'beernem': {
    naam: 'Beernem',
    intro: 'FlexLED levert LED-schermen in Beernem en omgeving. Lokale service, snelle levering.',
    nabijgelegen: ['oostkamp', 'zedelgem', 'damme', 'brugge'],
  },
  'damme': {
    naam: 'Damme',
    intro: 'LED-scherm huren in het pittoreske Damme? Perfect voor events in deze historische stad.',
    nabijgelegen: ['brugge', 'knokke-heist', 'oostkamp', 'beernem'],
  },
  'jabbeke': {
    naam: 'Jabbeke',
    intro: 'In Jabbeke leveren wij LED-schermen voor lokale events, bedrijfsfeesten en meer.',
    nabijgelegen: ['oostende', 'gistel', 'zedelgem', 'blankenberge'],
  },
  'gistel': {
    naam: 'Gistel',
    intro: 'LED-scherm huren in Gistel? FlexLED levert snel en betrouwbaar in de hele regio.',
    nabijgelegen: ['oostende', 'torhout', 'jabbeke', 'diksmuide'],
  },
  'wevelgem': {
    naam: 'Wevelgem',
    intro: 'FlexLED levert LED-schermen in Wevelgem voor bedrijfsevents, sportwedstrijden en feesten.',
    nabijgelegen: ['kortrijk', 'menen', 'kuurne', 'deerlijk'],
  },
  'kuurne': {
    naam: 'Kuurne',
    intro: 'LED-scherm huren in Kuurne? Ideaal voor de Kuurne-Brussel-Kuurne en andere events.',
    nabijgelegen: ['kortrijk', 'wevelgem', 'deerlijk', 'izegem'],
  },
  'deerlijk': {
    naam: 'Deerlijk',
    intro: 'In Deerlijk en omgeving leveren wij LED-schermen voor al uw evenementen.',
    nabijgelegen: ['waregem', 'zwevegem', 'kuurne', 'anzegem'],
  },
  'zwevegem': {
    naam: 'Zwevegem',
    intro: 'LED-scherm huren in Zwevegem? FlexLED is uw lokale partner voor LED-verhuur.',
    nabijgelegen: ['kortrijk', 'waregem', 'deerlijk', 'anzegem'],
  },
  'anzegem': {
    naam: 'Anzegem',
    intro: 'FlexLED levert mobiele LED-schermen in Anzegem voor events groot en klein.',
    nabijgelegen: ['waregem', 'zwevegem', 'deerlijk', 'tielt'],
  },
  'lichtervelde': {
    naam: 'Lichtervelde',
    intro: 'LED-scherm huren in Lichtervelde? Wij leveren snel vanuit Oostkamp.',
    nabijgelegen: ['roeselare', 'torhout', 'tielt', 'kortemark'],
  },
  'ingelmunster': {
    naam: 'Ingelmunster',
    intro: 'In Ingelmunster zorgen wij voor LED-schermen bij lokale events en bedrijfsfeesten.',
    nabijgelegen: ['izegem', 'tielt', 'roeselare', 'moorslede'],
  },
  'moorslede': {
    naam: 'Moorslede',
    intro: 'LED-scherm huren in Moorslede? FlexLED levert in heel de regio.',
    nabijgelegen: ['roeselare', 'tielt', 'ingelmunster', 'ieper'],
  },
  'kortemark': {
    naam: 'Kortemark',
    intro: 'FlexLED levert LED-schermen in Kortemark voor al uw evenementen.',
    nabijgelegen: ['torhout', 'diksmuide', 'lichtervelde', 'gistel'],
  },
}

export async function generateStaticParams() {
  return Object.keys(steden).map((stad) => ({ stad }))
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params
  const stadData = steden[stad]
  
  if (!stadData) {
    return { title: 'Stad niet gevonden' }
  }

  return {
    title: `LED-scherm huren ${stadData.naam} - Snelle levering`,
    description: `LED-scherm huren in ${stadData.naam}? FlexLED levert mobiele LED-schermen (6m², 8m², 16m²) in ${stadData.naam} en omgeving. ✓ Snelle levering ✓ Scherpe prijzen. Vraag offerte!`,
  }
}

export default async function StadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params
  const stadData = steden[stad]

  if (!stadData) {
    notFound()
  }

  const nabijgelegenSteden = stadData.nabijgelegen
    .map(slug => steden[slug] ? { slug, naam: steden[slug].naam } : null)
    .filter(Boolean) as { slug: string; naam: string }[]

  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/ledscherm-huren">LED-schermen</Link>
            <span>/</span>
            <Link href="/ledscherm-huren/west-vlaanderen">West-Vlaanderen</Link>
            <span>/</span>
            <span>{stadData.naam}</span>
          </nav>
          <h1 className="page-title">
            LED-scherm huren in <span className="text-primary">{stadData.naam}</span>
          </h1>
          <p className="page-subtitle">
            {stadData.intro}
          </p>
        </div>
      </section>

      {/* USPs */}
      <section className="section bg-background-dark" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="local-usps">
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Snelle levering in {stadData.naam}</strong>
                <span>Vaak dezelfde dag mogelijk</span>
              </div>
            </div>
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Inclusief opbouw & support</strong>
                <span>Wij regelen alles</span>
              </div>
            </div>
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <strong>Vanaf €299/dag</strong>
                <span>Scherpe prijzen, geen verrassingen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Beschikbare LED-schermen in {stadData.naam}</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 6m²</h3>
                <p className="product-description">Compact & mobiel. Perfect voor lokale events in {stadData.naam}.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€299</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/offerte" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Offerte aanvragen
                </Link>
              </div>
            </div>
            <div className="product-card popular">
              <div className="popular-badge">Meest gekozen</div>
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 8m²</h3>
                <p className="product-description">Veelzijdig & opvallend. Ideaal voor events in {stadData.naam}.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€449</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/offerte" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Offerte aanvragen
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 16m²</h3>
                <p className="product-description">XXL impact. Voor grote evenementen in {stadData.naam}.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€699</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/offerte" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nabijgelegenSteden.length > 0 && (
        <section className="section bg-background-dark">
          <div className="container-custom">
            <h2 className="section-title">Ook actief in de buurt</h2>
            <div className="nearby-cities">
              {nabijgelegenSteden.map((s) => (
                <Link 
                  key={s.slug} 
                  href={`/ledscherm-huren/west-vlaanderen/${s.slug}`}
                  className="nearby-city"
                >
                  LED-scherm huren {s.naam} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container-custom cta-section">
          <h2>LED-scherm nodig in {stadData.naam}?</h2>
          <p>Vraag vandaag nog een vrijblijvende offerte aan. Reactie binnen 24 uur.</p>
          <Link href="/offerte" className="btn-primary">
            Offerte aanvragen
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
              <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
