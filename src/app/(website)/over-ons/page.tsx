import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over FlexLED',
  description: 'Leer meer over FlexLED - uw partner voor LED-scherm verhuur in West- en Oost-Vlaanderen. Ervaren, betrouwbaar en altijd service met een glimlach.',
}

export default function OverOnsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <h1 className="page-title">
            Over <span className="text-primary">FlexLED</span>
          </h1>
          <p className="page-subtitle">
            Uw partner voor LED-scherm verhuur in West- en Oost-Vlaanderen. Ervaren, betrouwbaar en altijd service met een glimlach.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <div className="about-grid">
            <div className="about-image"></div>
            <div className="about-content">
              <h2>Onze missie</h2>
              <p>
                Bij FlexLED geloven we dat elk event beter wordt met een LED-scherm. Of het nu gaat om een bedrijfspresentatie, een festival of een sportwedstrijd - wij zorgen ervoor dat jouw boodschap gezien wordt.
              </p>
              <p>
                Gevestigd in Oostkamp, zijn we actief in heel West- en Oost-Vlaanderen. Onze mobiele LED-schermen zijn snel te plaatsen en leveren altijd een scherp beeld, dag en nacht.
              </p>
              <p>
                Wat ons onderscheidt? Persoonlijke service, eerlijke prijzen en technische ondersteuning tijdens je event. Wij zijn pas tevreden als jij dat bent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Succesvolle events</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Schermformaten</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24u</span>
              <span className="stat-label">Reactietijd offerte</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Klanttevredenheid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <h2 className="section-title">Waarom FlexLED?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Snelle levering</h3>
              <p>Binnen 24 uur geleverd in West- en Oost-Vlaanderen. Wij komen naar jou toe.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Betrouwbaar</h3>
              <p>Altijd op tijd, altijd werkend. Wij staan garant voor een zorgeloos event.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Eerlijke prijzen</h3>
              <p>Transparante prijzen zonder verborgen kosten. Wat je ziet is wat je krijgt.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3>Full service</h3>
              <p>Opbouw, technische support en afbraak inbegrepen. Jij hoeft niets te doen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom cta-section">
          <h2>Klaar om samen te werken?</h2>
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
