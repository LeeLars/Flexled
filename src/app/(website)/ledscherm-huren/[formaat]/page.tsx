import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const products = {
  '6m2': {
    name: 'LED-scherm 6m²',
    tagline: 'Compact & Mobiel',
    description: 'Het perfecte LED-scherm voor lokale events, presentaties en kleine bijeenkomsten. Compact genoeg om overal te plaatsen, maar groot genoeg om impact te maken.',
    price: 299,
    specs: {
      formaat: '6m² (3m x 2m)',
      resolutie: 'Full HD (1920x1080)',
      pixelPitch: '3.9mm',
      helderheid: '5000 nits',
      kijkafstand: 'Vanaf 4 meter',
      stroomverbruik: '~2kW',
      trailer: 'Compacte aanhangwagen',
    },
    usps: [
      'Ideaal voor 50-200 personen',
      'Makkelijk te plaatsen op kleine locaties',
      'Indoor & outdoor geschikt',
      'Inclusief levering en opbouw',
      'Technische support tijdens event',
    ],
    idealFor: ['Bedrijfspresentaties', 'Lokale events', 'Bruiloften', 'Kleine festivals'],
  },
  '8m2': {
    name: 'LED-scherm 8m²',
    tagline: 'Veelzijdig & Opvallend',
    description: 'Onze meest populaire keuze. Dit LED-scherm biedt de perfecte balans tussen formaat en flexibiliteit. Ideaal voor festivals, bedrijfsevents en sportwedstrijden.',
    price: 449,
    popular: true,
    specs: {
      formaat: '8m² (4m x 2m)',
      resolutie: 'Full HD (1920x1080)',
      pixelPitch: '3.9mm',
      helderheid: '5500 nits',
      kijkafstand: 'Vanaf 5 meter',
      stroomverbruik: '~3kW',
      trailer: 'Standaard aanhangwagen',
    },
    usps: [
      'Ideaal voor 200-500 personen',
      'Hoge helderheid voor buitengebruik',
      'Weerbestendig (IP65)',
      'Inclusief levering en opbouw',
      'Technische support tijdens event',
    ],
    idealFor: ['Festivals', 'Bedrijfsevents', 'Sportwedstrijden', 'Beurzen'],
  },
  '16m2': {
    name: 'LED-scherm 16m²',
    tagline: 'XXL Impact',
    description: 'Maximale impact voor grote evenementen. Dit XXL LED-scherm is perfect voor grote festivals, sportevenementen en publieke events waar je niemand wilt missen.',
    price: 699,
    specs: {
      formaat: '16m² (8m x 2m)',
      resolutie: 'Full HD (1920x1080)',
      pixelPitch: '4.8mm',
      helderheid: '6000 nits',
      kijkafstand: 'Vanaf 6 meter',
      stroomverbruik: '~5kW',
      trailer: 'Grote aanhangwagen',
    },
    usps: [
      'Ideaal voor 500+ personen',
      'Maximale zichtbaarheid',
      'Professionele uitstraling',
      'Inclusief levering en opbouw',
      'Technische support tijdens event',
    ],
    idealFor: ['Grote festivals', 'Sportevenementen', 'Publieke events', 'Concerten'],
  },
}

type Formaat = keyof typeof products

export async function generateStaticParams() {
  return Object.keys(products).map((formaat) => ({ formaat }))
}

export async function generateMetadata({ params }: { params: Promise<{ formaat: string }> }): Promise<Metadata> {
  const { formaat } = await params
  const product = products[formaat as Formaat]
  
  if (!product) {
    return { title: 'Product niet gevonden' }
  }

  return {
    title: `${product.name} huren - ${product.tagline}`,
    description: `${product.name} huren vanaf €${product.price}/dag. ${product.description.slice(0, 120)}...`,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ formaat: string }> }) {
  const { formaat } = await params
  const product = products[formaat as Formaat]

  if (!product) {
    notFound()
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container-custom">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/ledscherm-huren">LED-schermen</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section">
        <div className="container-custom">
          <div className="product-detail-grid">
            {/* Gallery */}
            <div className="product-gallery">
              <div className="product-main-image"></div>
              <div className="product-thumbnails">
                <div className="product-thumbnail active"></div>
                <div className="product-thumbnail"></div>
                <div className="product-thumbnail"></div>
                <div className="product-thumbnail"></div>
              </div>
            </div>

            {/* Info */}
            <div className="product-info">
              {'popular' in product && product.popular && (
                <div className="popular-badge" style={{ position: 'static', marginBottom: '1rem' }}>
                  Meest gekozen
                </div>
              )}
              <h1>{product.name}</h1>
              <p className="product-tagline">{product.tagline}</p>
              
              <div className="product-detail-price">
                <span className="price-label">Vanaf</span>
                <span className="price-amount">€{product.price}</span>
                <span className="price-period">/dag</span>
              </div>

              <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {product.description}
              </p>

              <div className="product-usps">
                {product.usps.map((usp, i) => (
                  <div key={i} className="product-usp">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{usp}</span>
                  </div>
                ))}
              </div>

              <div className="product-cta-buttons">
                <Link href="/offerte" className="btn-primary">
                  Offerte aanvragen
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
                    <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
                  </svg>
                </Link>
                <a href="tel:+32000000000" className="btn-secondary">
                  Bel voor advies
                </a>
              </div>

              {/* Specs */}
              <div className="specs-section">
                <h2>Technische specificaties</h2>
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td>Formaat</td>
                      <td>{product.specs.formaat}</td>
                    </tr>
                    <tr>
                      <td>Resolutie</td>
                      <td>{product.specs.resolutie}</td>
                    </tr>
                    <tr>
                      <td>Pixel pitch</td>
                      <td>{product.specs.pixelPitch}</td>
                    </tr>
                    <tr>
                      <td>Helderheid</td>
                      <td>{product.specs.helderheid}</td>
                    </tr>
                    <tr>
                      <td>Kijkafstand</td>
                      <td>{product.specs.kijkafstand}</td>
                    </tr>
                    <tr>
                      <td>Stroomverbruik</td>
                      <td>{product.specs.stroomverbruik}</td>
                    </tr>
                    <tr>
                      <td>Transport</td>
                      <td>{product.specs.trailer}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title">Ideaal voor</h2>
          <div className="ideal-for-grid">
            {product.idealFor.map((item, i) => (
              <div key={i} className="ideal-for-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom cta-section">
          <h2>Interesse in dit scherm?</h2>
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
