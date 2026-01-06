import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toepassingen - LED-scherm voor elk event',
  description: 'Ontdek waarvoor je een LED-scherm kunt huren: festivals, sportwedstrijden, bedrijfsevents, beurzen en meer. FlexLED levert voor elk type evenement.',
}

const toepassingen = [
  {
    slug: 'festival',
    naam: 'Festival',
    beschrijving: 'Maak je festival onvergetelijk met een groot LED-scherm. Perfect voor live beelden, visuals en sponsorcontent.',
    icon: '🎪',
  },
  {
    slug: 'sportwedstrijd',
    naam: 'Sportwedstrijd',
    beschrijving: 'Live scores, herhaling van hoogtepunten en sponsoring. Ideaal voor voetbal, wielrennen en andere sporten.',
    icon: '⚽',
  },
  {
    slug: 'bedrijfsevenement',
    naam: 'Bedrijfsevenement',
    beschrijving: 'Presentaties, productlanceringen en teambuildings. Professionele uitstraling voor je bedrijf.',
    icon: '🏢',
  },
  {
    slug: 'beurs-of-expo',
    naam: 'Beurs & Expo',
    beschrijving: 'Trek bezoekers naar je stand met een opvallend LED-scherm. Perfect voor productdemo\'s en branding.',
    icon: '🎯',
  },
  {
    slug: 'bruiloft',
    naam: 'Bruiloft',
    beschrijving: 'Deel foto\'s en video\'s met al je gasten. Een unieke toevoeging aan je trouwfeest.',
    icon: '💒',
  },
  {
    slug: 'gemeente-event',
    naam: 'Gemeente Event',
    beschrijving: 'Kermissen, jaarmarkten en publieke evenementen. Informeer en entertainen je inwoners.',
    icon: '🏛️',
  },
]

export default function ToepassingenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <h1 className="page-title">
            LED-scherm voor <span className="text-primary">elk event</span>
          </h1>
          <p className="page-subtitle">
            Of het nu gaat om een festival, sportwedstrijd of bedrijfsevent - wij hebben het perfecte LED-scherm voor jouw toepassing.
          </p>
        </div>
      </section>

      {/* Toepassingen Grid */}
      <section className="section bg-background-dark" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="toepassingen-grid">
            {toepassingen.map((toepassing) => (
              <Link 
                key={toepassing.slug} 
                href={`/toepassingen/${toepassing.slug}`}
                className="toepassing-card"
              >
                <span className="toepassing-icon">{toepassing.icon}</span>
                <h2>{toepassing.naam}</h2>
                <p>{toepassing.beschrijving}</p>
                <span className="toepassing-link">Meer info →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom cta-section">
          <h2>Andere toepassing in gedachten?</h2>
          <p>Neem contact op en we bekijken samen de mogelijkheden.</p>
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
