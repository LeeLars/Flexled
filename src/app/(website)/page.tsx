export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            LED-scherm huren in <span className="text-primary">West- & Oost-Vlaanderen</span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-2xl">
            Mobiele LED-schermen voor events, festivals en bedrijven. 
            Vanaf €299 per dag. Snelle levering in heel Vlaanderen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/offerte" className="btn-primary">
              Vraag offerte aan
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
                <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="tel:+32000000000" className="btn-secondary">
              Bel direct
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-background-dark">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Onze LED-schermen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 6m² */}
            <div className="card hover:border-primary border border-transparent transition-all">
              <div className="aspect-video bg-background-light rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">6m² LED-scherm</h3>
              <p className="text-muted mb-4">Compact & mobiel. Perfect voor lokale events en kleine publiek.</p>
              <p className="text-primary font-bold text-xl mb-4">Vanaf €299/dag</p>
              <a href="/ledscherm-huren/6m2" className="btn-primary w-full justify-center">
                Bekijk details
              </a>
            </div>

            {/* 8m² */}
            <div className="card hover:border-primary border border-primary transition-all">
              <div className="absolute -top-3 left-4 bg-primary text-background px-3 py-1 rounded-full text-sm font-bold">
                Populair
              </div>
              <div className="aspect-video bg-background-light rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">8m² LED-scherm</h3>
              <p className="text-muted mb-4">Veelzijdig & opvallend. Ideaal voor festivals en bedrijfsevents.</p>
              <p className="text-primary font-bold text-xl mb-4">Vanaf €449/dag</p>
              <a href="/ledscherm-huren/8m2" className="btn-primary w-full justify-center">
                Bekijk details
              </a>
            </div>

            {/* 16m² */}
            <div className="card hover:border-primary border border-transparent transition-all">
              <div className="aspect-video bg-background-light rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-2">16m² LED-scherm</h3>
              <p className="text-muted mb-4">XXL impact. Voor grote festivals en sportevenementen.</p>
              <p className="text-primary font-bold text-xl mb-4">Vanaf €699/dag</p>
              <a href="/ledscherm-huren/16m2" className="btn-primary w-full justify-center">
                Bekijk details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Waarom FlexLED?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Snelle levering</h3>
              <p className="text-muted">Binnen 24u geleverd in West- en Oost-Vlaanderen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Scherpe prijzen</h3>
              <p className="text-muted">Vanaf €299 per dag, inclusief transport</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Betrouwbaar</h3>
              <p className="text-muted">100+ succesvolle events, altijd op tijd</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Full service</h3>
              <p className="text-muted">Opbouw, technische support & afbraak inbegrepen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar voor jouw event?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog een vrijblijvende offerte aan en ontvang binnen 24 uur een voorstel op maat.
          </p>
          <a href="/offerte" className="btn-primary text-lg px-8 py-4">
            Vraag offerte aan
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
              <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
