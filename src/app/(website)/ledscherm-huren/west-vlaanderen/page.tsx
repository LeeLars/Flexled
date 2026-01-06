import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LED-scherm huren West-Vlaanderen - Lokale service',
  description: 'LED-scherm huren in West-Vlaanderen? FlexLED levert mobiele LED-schermen in Brugge, Kortrijk, Oostende, Roeselare en alle andere steden. Snelle levering, scherpe prijzen.',
}

const steden = [
  { naam: 'Oostkamp', slug: 'oostkamp', highlight: true },
  { naam: 'Brugge', slug: 'brugge', highlight: true },
  { naam: 'Kortrijk', slug: 'kortrijk', highlight: true },
  { naam: 'Roeselare', slug: 'roeselare', highlight: true },
  { naam: 'Oostende', slug: 'oostende', highlight: true },
  { naam: 'Knokke-Heist', slug: 'knokke-heist' },
  { naam: 'Blankenberge', slug: 'blankenberge' },
  { naam: 'Ieper', slug: 'ieper' },
  { naam: 'Waregem', slug: 'waregem' },
  { naam: 'Tielt', slug: 'tielt' },
  { naam: 'Menen', slug: 'menen' },
  { naam: 'Izegem', slug: 'izegem' },
  { naam: 'Torhout', slug: 'torhout' },
  { naam: 'Diksmuide', slug: 'diksmuide' },
  { naam: 'Veurne', slug: 'veurne' },
  { naam: 'Poperinge', slug: 'poperinge' },
  { naam: 'Zedelgem', slug: 'zedelgem' },
  { naam: 'Beernem', slug: 'beernem' },
  { naam: 'Damme', slug: 'damme' },
  { naam: 'Jabbeke', slug: 'jabbeke' },
  { naam: 'Gistel', slug: 'gistel' },
  { naam: 'Wevelgem', slug: 'wevelgem' },
  { naam: 'Kuurne', slug: 'kuurne' },
  { naam: 'Deerlijk', slug: 'deerlijk' },
  { naam: 'Zwevegem', slug: 'zwevegem' },
  { naam: 'Anzegem', slug: 'anzegem' },
  { naam: 'Lichtervelde', slug: 'lichtervelde' },
  { naam: 'Ingelmunster', slug: 'ingelmunster' },
  { naam: 'Moorslede', slug: 'moorslede' },
  { naam: 'Kortemark', slug: 'kortemark' },
]

export default function WestVlaanderenPage() {
  const highlightSteden = steden.filter(s => s.highlight)
  const andereSteden = steden.filter(s => !s.highlight)

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
            <span>West-Vlaanderen</span>
          </nav>
          <h1 className="page-title">
            LED-scherm huren in <span className="text-primary">West-Vlaanderen</span>
          </h1>
          <p className="page-subtitle">
            Gevestigd in Oostkamp, leveren wij mobiele LED-schermen in heel West-Vlaanderen. Snelle service, scherpe prijzen en altijd persoonlijk contact.
          </p>
        </div>
      </section>

      {/* USPs */}
      <section className="section bg-background-dark" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="local-usps">
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <strong>Gevestigd in Oostkamp</strong>
                <span>Centraal in West-Vlaanderen</span>
              </div>
            </div>
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <strong>Snelle levering</strong>
                <span>Vaak dezelfde dag mogelijk</span>
              </div>
            </div>
            <div className="local-usp">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <strong>Geen extra transportkosten</strong>
                <span>Binnen West-Vlaanderen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Cities */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Populaire locaties</h2>
          <div className="cities-grid highlight">
            {highlightSteden.map((stad) => (
              <Link 
                key={stad.slug} 
                href={`/ledscherm-huren/west-vlaanderen/${stad.slug}`}
                className="city-card highlight"
              >
                <div className="city-image"></div>
                <div className="city-content">
                  <h3>{stad.naam}</h3>
                  <span>LED-scherm huren →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title">Alle steden in West-Vlaanderen</h2>
          <div className="cities-list">
            {andereSteden.map((stad) => (
              <Link 
                key={stad.slug} 
                href={`/ledscherm-huren/west-vlaanderen/${stad.slug}`}
                className="city-link"
              >
                {stad.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Onze LED-schermen</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 6m²</h3>
                <p className="product-description">Compact & mobiel. Perfect voor lokale events.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€299</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/ledscherm-huren/6m2" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Bekijk details
                </Link>
              </div>
            </div>
            <div className="product-card popular">
              <div className="popular-badge">Meest gekozen</div>
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 8m²</h3>
                <p className="product-description">Veelzijdig & opvallend. Ideaal voor festivals.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€449</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/ledscherm-huren/8m2" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Bekijk details
                </Link>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 16m²</h3>
                <p className="product-description">XXL impact. Voor grote evenementen.</p>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€699</span>
                  <span className="price-period">/dag</span>
                </div>
                <Link href="/ledscherm-huren/16m2" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Bekijk details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background-dark">
        <div className="container-custom cta-section">
          <h2>LED-scherm nodig in West-Vlaanderen?</h2>
          <p>Vraag vandaag nog een vrijblijvende offerte aan.</p>
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
