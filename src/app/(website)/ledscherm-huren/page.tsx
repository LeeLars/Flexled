import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LED-scherm huren - Alle formaten & prijzen',
  description: 'LED-scherm huren? FlexLED verhuurt mobiele LED-schermen in 3 formaten: 6m², 8m² en 16m². Inclusief levering, opbouw en support. Vraag nu een offerte aan!',
}

const products = [
  {
    name: 'LED-scherm 6m²',
    slug: '6m2',
    description: 'Compact & mobiel. Perfect voor lokale events, presentaties en kleine bijeenkomsten.',
    price: 299,
    features: ['Ideaal voor 50-200 personen', 'Makkelijk te plaatsen', 'Indoor & outdoor'],
  },
  {
    name: 'LED-scherm 8m²',
    slug: '8m2',
    description: 'Veelzijdig & opvallend. De populairste keuze voor festivals, bedrijfsevents en sportwedstrijden.',
    price: 449,
    popular: true,
    features: ['Ideaal voor 200-500 personen', 'Hoge helderheid', 'Weerbestendig'],
  },
  {
    name: 'LED-scherm 16m²',
    slug: '16m2',
    description: 'XXL impact. Voor grote festivals, sportevenementen en publieke events met veel bezoekers.',
    price: 699,
    features: ['Ideaal voor 500+ personen', 'Maximale zichtbaarheid', 'Professionele uitstraling'],
  },
]

export default function LedschermHurenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <h1 className="page-title">
            LED-scherm <span className="text-primary">huren</span>
          </h1>
          <p className="page-subtitle">
            Kies uit 3 formaten mobiele LED-schermen. Inclusief levering, opbouw en technische support in heel West- en Oost-Vlaanderen.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.slug} className={`product-card ${product.popular ? 'popular' : ''}`}>
                {product.popular && (
                  <div className="popular-badge">Meest gekozen</div>
                )}
                <div className="product-image"></div>
                <div className="product-content">
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, i) => (
                      <li key={i}>
                        <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="product-price">
                    <span className="price-label">Vanaf</span>
                    <span className="price-amount">€{product.price}</span>
                    <span className="price-period">/dag</span>
                  </div>
                  <div className="product-actions">
                    <Link href={`/ledscherm-huren/${product.slug}`} className="btn-secondary">
                      Bekijk details
                    </Link>
                    <Link href="/offerte" className="btn-primary">
                      Offerte
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Hoe werkt het?</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Offerte aanvragen</h3>
              <p>Vul het formulier in met je event details. Binnen 24 uur ontvang je een offerte op maat.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Bevestiging</h3>
              <p>Akkoord met de offerte? Wij reserveren het scherm voor jouw datum.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Levering & opbouw</h3>
              <p>Wij leveren en bouwen het scherm op. Jij hoeft niets te doen.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Genieten!</h3>
              <p>Tijdens het event staan wij paraat voor technische support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background-dark">
        <div className="container-custom cta-section">
          <h2>Niet zeker welk formaat?</h2>
          <p>Wij adviseren je graag over het beste scherm voor jouw event.</p>
          <Link href="/offerte" className="btn-primary">
            Vraag advies aan
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
