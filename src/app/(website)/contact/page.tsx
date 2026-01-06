import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met FlexLED voor LED-scherm verhuur in West- en Oost-Vlaanderen. Bel, mail of vul het contactformulier in.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <h1 className="page-title">
            Contact <span className="text-primary">opnemen</span>
          </h1>
          <p className="page-subtitle">
            Heb je een vraag of wil je een offerte aanvragen? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section bg-background-dark" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Bel ons</h3>
                <p>Direct iemand spreken? Bel ons tijdens kantooruren.</p>
                <a href="tel:+32000000000" className="contact-link">
                  +32 000 00 00 00
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>E-mail</h3>
                <p>Stuur ons een e-mail en we reageren binnen 24 uur.</p>
                <a href="mailto:info@flexled.be" className="contact-link">
                  info@flexled.be
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3>Locatie</h3>
                <p>Gevestigd in Oostkamp, actief in heel West- en Oost-Vlaanderen.</p>
                <span className="contact-link">
                  Oostkamp, België
                </span>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Bereikbaarheid</h3>
                <p>We zijn bereikbaar op werkdagen.</p>
                <span className="contact-link">
                  Ma - Vr: 9:00 - 18:00
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="contact-cta-section">
              <div className="contact-cta-card">
                <h2>Direct een offerte?</h2>
                <p>
                  Wil je meteen een vrijblijvende offerte ontvangen? Vul ons offerteformulier in en ontvang binnen 24 uur een voorstel op maat.
                </p>
                <Link href="/offerte" className="btn-primary">
                  Offerte aanvragen
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
                    <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>

              <div className="service-area">
                <h3>Ons werkgebied</h3>
                <p>FlexLED levert LED-schermen in heel West- en Oost-Vlaanderen:</p>
                <div className="service-area-list">
                  <div>
                    <h4>West-Vlaanderen</h4>
                    <p>Brugge, Oostende, Kortrijk, Roeselare, Ieper, Knokke-Heist, en meer...</p>
                  </div>
                  <div>
                    <h4>Oost-Vlaanderen</h4>
                    <p>Gent, Aalst, Sint-Niklaas, Dendermonde, Oudenaarde, en meer...</p>
                  </div>
                </div>
                <div className="service-area-links">
                  <Link href="/ledscherm-huren/west-vlaanderen">West-Vlaanderen →</Link>
                  <Link href="/ledscherm-huren/oost-vlaanderen">Oost-Vlaanderen →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
