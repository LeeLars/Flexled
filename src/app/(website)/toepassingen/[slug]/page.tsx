import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const toepassingen: Record<string, {
  naam: string
  intro: string
  beschrijving: string
  voordelen: string[]
  aanbevolenScherm: string
  voorbeelden: string[]
}> = {
  'festival': {
    naam: 'Festival',
    intro: 'Maak je festival onvergetelijk met een groot LED-scherm',
    beschrijving: 'Een LED-scherm op je festival zorgt voor een complete beleving. Toon live beelden van het podium, visuals van de DJ, sponsorcontent of informatie voor bezoekers. Met onze weerbestendige schermen ben je voorbereid op elk weer.',
    voordelen: [
      'Live beelden van het podium voor achterste rijen',
      'Visuals en VJ-content voor extra sfeer',
      'Sponsormogelijkheden voor extra inkomsten',
      'Informatie en aankondigingen voor bezoekers',
      'Weerbestendig voor buitengebruik',
    ],
    aanbevolenScherm: '16m2',
    voorbeelden: ['Muziekfestivals', 'Foodtruckfestivals', 'Stadsfestivals', 'Dorpsfeesten'],
  },
  'sportwedstrijd': {
    naam: 'Sportwedstrijd',
    intro: 'Breng de actie dichterbij met een LED-scherm',
    beschrijving: 'Of het nu gaat om voetbal, wielrennen of een lokaal sportevenement - een LED-scherm verhoogt de beleving voor toeschouwers. Toon live scores, herhalingen van hoogtepunten en sponsorcontent.',
    voordelen: [
      'Live scores en statistieken',
      'Herhaling van hoogtepunten en goals',
      'Sponsoring en reclame mogelijkheden',
      'Informatie voor toeschouwers',
      'Professionele uitstraling',
    ],
    aanbevolenScherm: '8m2',
    voorbeelden: ['Voetbalwedstrijden', 'Wielerwedstrijden', 'Loopwedstrijden', 'Paardensport'],
  },
  'bedrijfsevenement': {
    naam: 'Bedrijfsevenement',
    intro: 'Professionele presentaties met impact',
    beschrijving: 'Van productlanceringen tot teambuildings en bedrijfsfeesten - een LED-scherm geeft je event een professionele uitstraling. Perfect voor presentaties, video\'s en branding.',
    voordelen: [
      'Heldere presentaties, ook in daglicht',
      'Professionele uitstraling voor je merk',
      'Flexibel in te zetten voor verschillende content',
      'Geschikt voor indoor en outdoor',
      'Technische ondersteuning inbegrepen',
    ],
    aanbevolenScherm: '6m2',
    voorbeelden: ['Productlanceringen', 'Personeelsfeesten', 'Teambuildings', 'Jubilea'],
  },
  'beurs-of-expo': {
    naam: 'Beurs & Expo',
    intro: 'Trek bezoekers naar je stand',
    beschrijving: 'Op een beurs of expo moet je opvallen. Een LED-scherm trekt de aandacht en geeft je de mogelijkheid om je producten of diensten dynamisch te presenteren.',
    voordelen: [
      'Opvallend tussen andere stands',
      'Dynamische productpresentaties',
      'Loop video\'s en demo\'s',
      'Professionele branding',
      'Makkelijk te verplaatsen',
    ],
    aanbevolenScherm: '6m2',
    voorbeelden: ['Vakbeurzen', 'Consumentenbeurzen', 'Open dagen', 'Showrooms'],
  },
  'bruiloft': {
    naam: 'Bruiloft',
    intro: 'Deel je mooiste momenten met al je gasten',
    beschrijving: 'Een LED-scherm op je bruiloft is een unieke manier om foto\'s, video\'s en herinneringen te delen met al je gasten. Perfect voor de receptie of het avondfeest.',
    voordelen: [
      'Slideshow van foto\'s en video\'s',
      'Live beelden van de ceremonie',
      'Berichten van gasten tonen',
      'Sfeervolle achtergrond',
      'Unieke toevoeging aan je dag',
    ],
    aanbevolenScherm: '6m2',
    voorbeelden: ['Trouwceremonie', 'Receptie', 'Avondfeest', 'Huwelijksverjaardag'],
  },
  'gemeente-event': {
    naam: 'Gemeente Event',
    intro: 'Informeer en entertain je inwoners',
    beschrijving: 'Kermissen, jaarmarkten, herdenkingen en andere publieke evenementen krijgen extra allure met een LED-scherm. Informeer bezoekers, toon live beelden of stream evenementen.',
    voordelen: [
      'Informatie voor grote groepen',
      'Live streaming van evenementen',
      'Herdenkingen en ceremonies',
      'Sponsormogelijkheden',
      'Professionele uitstraling voor je gemeente',
    ],
    aanbevolenScherm: '8m2',
    voorbeelden: ['Kermissen', 'Jaarmarkten', 'Herdenkingen', 'Nieuwjaarsrecepties'],
  },
}

export async function generateStaticParams() {
  return Object.keys(toepassingen).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const toepassing = toepassingen[slug]
  
  if (!toepassing) {
    return { title: 'Toepassing niet gevonden' }
  }

  return {
    title: `LED-scherm huren voor ${toepassing.naam}`,
    description: `LED-scherm huren voor je ${toepassing.naam.toLowerCase()}? ${toepassing.intro}. FlexLED levert mobiele LED-schermen met full service.`,
  }
}

export default async function ToepassingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const toepassing = toepassingen[slug]

  if (!toepassing) {
    notFound()
  }

  const schermPrijzen: Record<string, number> = {
    '6m2': 299,
    '8m2': 449,
    '16m2': 699,
  }

  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/toepassingen">Toepassingen</Link>
            <span>/</span>
            <span>{toepassing.naam}</span>
          </nav>
          <h1 className="page-title">
            LED-scherm voor <span className="text-primary">{toepassing.naam}</span>
          </h1>
          <p className="page-subtitle">
            {toepassing.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-background-dark" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="toepassing-detail-grid">
            <div className="toepassing-content">
              <p className="toepassing-beschrijving">{toepassing.beschrijving}</p>
              
              <h2>Voordelen</h2>
              <ul className="voordelen-list">
                {toepassing.voordelen.map((voordeel, i) => (
                  <li key={i}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {voordeel}
                  </li>
                ))}
              </ul>

              <h2>Voorbeelden</h2>
              <div className="voorbeelden-tags">
                {toepassing.voorbeelden.map((voorbeeld, i) => (
                  <span key={i} className="voorbeeld-tag">{voorbeeld}</span>
                ))}
              </div>
            </div>

            <div className="toepassing-sidebar">
              <div className="aanbevolen-scherm">
                <span className="aanbevolen-label">Aanbevolen</span>
                <h3>LED-scherm {toepassing.aanbevolenScherm}</h3>
                <div className="aanbevolen-image"></div>
                <div className="product-price">
                  <span className="price-label">Vanaf</span>
                  <span className="price-amount">€{schermPrijzen[toepassing.aanbevolenScherm]}</span>
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

      {/* All Products */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Alle beschikbare schermen</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 6m²</h3>
                <p className="product-description">Compact & mobiel.</p>
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
            <div className="product-card">
              <div className="product-image"></div>
              <div className="product-content">
                <h3 className="product-title">LED-scherm 8m²</h3>
                <p className="product-description">Veelzijdig & opvallend.</p>
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
                <p className="product-description">XXL impact.</p>
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
          <h2>Klaar voor je {toepassing.naam.toLowerCase()}?</h2>
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
