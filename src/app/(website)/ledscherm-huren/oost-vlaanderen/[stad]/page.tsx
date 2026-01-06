import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const steden: Record<string, { naam: string; intro: string; nabijgelegen: string[] }> = {
  'gent': {
    naam: 'Gent',
    intro: 'LED-scherm huren in Gent? Perfect voor events op de Korenmarkt, festivals zoals de Gentse Feesten, bedrijfsevents en meer. FlexLED levert snel en betrouwbaar.',
    nabijgelegen: ['deinze', 'merelbeke', 'destelbergen', 'melle'],
  },
  'aalst': {
    naam: 'Aalst',
    intro: 'In Aalst leveren wij LED-schermen voor carnaval, bedrijfsevents en lokale festiviteiten. Snelle service vanuit West-Vlaanderen.',
    nabijgelegen: ['ninove', 'dendermonde', 'wetteren', 'zottegem'],
  },
  'sint-niklaas': {
    naam: 'Sint-Niklaas',
    intro: 'LED-scherm huren in Sint-Niklaas? Ideaal voor events op de Grote Markt, bedrijfsfeesten en lokale evenementen in het Waasland.',
    nabijgelegen: ['lokeren', 'temse', 'beveren', 'waasmunster'],
  },
  'dendermonde': {
    naam: 'Dendermonde',
    intro: 'FlexLED levert LED-schermen in Dendermonde voor de Ros Beiaard, bedrijfsevents en alle andere evenementen.',
    nabijgelegen: ['aalst', 'wetteren', 'hamme', 'lebbeke'],
  },
  'oudenaarde': {
    naam: 'Oudenaarde',
    intro: 'LED-scherm huren in Oudenaarde? Perfect voor de Ronde van Vlaanderen, bedrijfsevents en lokale feesten.',
    nabijgelegen: ['ronse', 'zottegem', 'gavere', 'nazareth'],
  },
  'lokeren': {
    naam: 'Lokeren',
    intro: 'In Lokeren leveren wij LED-schermen voor Lokerse Feesten, bedrijfsevents en meer. Snelle levering gegarandeerd.',
    nabijgelegen: ['sint-niklaas', 'zele', 'waasmunster', 'hamme'],
  },
  'wetteren': {
    naam: 'Wetteren',
    intro: 'LED-scherm huren in Wetteren? FlexLED is uw partner voor events in de Scheldegemeente.',
    nabijgelegen: ['aalst', 'dendermonde', 'melle', 'destelbergen'],
  },
  'zele': {
    naam: 'Zele',
    intro: 'FlexLED levert mobiele LED-schermen in Zele voor al uw evenementen.',
    nabijgelegen: ['lokeren', 'hamme', 'dendermonde', 'waasmunster'],
  },
  'temse': {
    naam: 'Temse',
    intro: 'LED-scherm huren in Temse aan de Schelde? Wij leveren snel en betrouwbaar.',
    nabijgelegen: ['sint-niklaas', 'hamme', 'kruibeke', 'beveren'],
  },
  'beveren': {
    naam: 'Beveren',
    intro: 'In Beveren en de Waaslandhaven leveren wij LED-schermen voor bedrijfsevents en lokale feesten.',
    nabijgelegen: ['sint-niklaas', 'kruibeke', 'temse', 'stekene'],
  },
  'ninove': {
    naam: 'Ninove',
    intro: 'LED-scherm huren in Ninove? FlexLED levert in de hele Denderstreek.',
    nabijgelegen: ['aalst', 'geraardsbergen', 'zottegem', 'dendermonde'],
  },
  'geraardsbergen': {
    naam: 'Geraardsbergen',
    intro: 'In Geraardsbergen, de stad van de Muur, leveren wij LED-schermen voor wielerevenementen en meer.',
    nabijgelegen: ['ninove', 'ronse', 'zottegem', 'oudenaarde'],
  },
  'ronse': {
    naam: 'Ronse',
    intro: 'LED-scherm huren in Ronse? Perfect voor de Fiertel en andere lokale events.',
    nabijgelegen: ['oudenaarde', 'geraardsbergen', 'zottegem'],
  },
  'zottegem': {
    naam: 'Zottegem',
    intro: 'FlexLED levert LED-schermen in Zottegem voor bedrijfsevents, festivals en lokale feesten.',
    nabijgelegen: ['aalst', 'oudenaarde', 'geraardsbergen', 'ninove'],
  },
  'eeklo': {
    naam: 'Eeklo',
    intro: 'LED-scherm huren in Eeklo? Wij leveren in het Meetjesland en omgeving.',
    nabijgelegen: ['gent', 'deinze', 'lokeren'],
  },
  'deinze': {
    naam: 'Deinze',
    intro: 'In Deinze aan de Leie leveren wij LED-schermen voor events en bedrijfsfeesten.',
    nabijgelegen: ['gent', 'nazareth', 'de-pinte', 'gavere'],
  },
  'hamme': {
    naam: 'Hamme',
    intro: 'LED-scherm huren in Hamme? FlexLED is uw lokale partner voor LED-verhuur.',
    nabijgelegen: ['dendermonde', 'zele', 'temse', 'lokeren'],
  },
  'buggenhout': {
    naam: 'Buggenhout',
    intro: 'FlexLED levert LED-schermen in Buggenhout voor al uw evenementen.',
    nabijgelegen: ['dendermonde', 'lebbeke', 'aalst'],
  },
  'lebbeke': {
    naam: 'Lebbeke',
    intro: 'LED-scherm huren in Lebbeke? Wij leveren snel vanuit onze basis.',
    nabijgelegen: ['dendermonde', 'buggenhout', 'aalst'],
  },
  'waasmunster': {
    naam: 'Waasmunster',
    intro: 'In Waasmunster leveren wij LED-schermen voor lokale events en feesten.',
    nabijgelegen: ['lokeren', 'sint-niklaas', 'zele', 'hamme'],
  },
  'kruibeke': {
    naam: 'Kruibeke',
    intro: 'LED-scherm huren in Kruibeke? FlexLED levert in heel het Waasland.',
    nabijgelegen: ['beveren', 'temse', 'sint-niklaas'],
  },
  'stekene': {
    naam: 'Stekene',
    intro: 'FlexLED levert mobiele LED-schermen in Stekene en omgeving.',
    nabijgelegen: ['sint-niklaas', 'beveren', 'lokeren'],
  },
  'destelbergen': {
    naam: 'Destelbergen',
    intro: 'LED-scherm huren in Destelbergen? Wij zijn snel ter plaatse vanuit onze basis.',
    nabijgelegen: ['gent', 'melle', 'wetteren', 'lokeren'],
  },
  'melle': {
    naam: 'Melle',
    intro: 'In Melle leveren wij LED-schermen voor events en bedrijfsfeesten.',
    nabijgelegen: ['gent', 'destelbergen', 'merelbeke', 'wetteren'],
  },
  'merelbeke': {
    naam: 'Merelbeke',
    intro: 'LED-scherm huren in Merelbeke? FlexLED is uw partner voor LED-verhuur.',
    nabijgelegen: ['gent', 'melle', 'de-pinte', 'gavere'],
  },
  'de-pinte': {
    naam: 'De Pinte',
    intro: 'FlexLED levert LED-schermen in De Pinte voor al uw evenementen.',
    nabijgelegen: ['gent', 'deinze', 'nazareth', 'merelbeke'],
  },
  'nazareth': {
    naam: 'Nazareth',
    intro: 'LED-scherm huren in Nazareth? Wij leveren snel en betrouwbaar.',
    nabijgelegen: ['deinze', 'de-pinte', 'gavere', 'oudenaarde'],
  },
  'gavere': {
    naam: 'Gavere',
    intro: 'In Gavere leveren wij LED-schermen voor cyclocross en andere events.',
    nabijgelegen: ['oudenaarde', 'nazareth', 'deinze', 'merelbeke'],
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
            <Link href="/ledscherm-huren/oost-vlaanderen">Oost-Vlaanderen</Link>
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
                  href={`/ledscherm-huren/oost-vlaanderen/${s.slug}`}
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
