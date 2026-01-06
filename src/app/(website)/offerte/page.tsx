'use client'

import { useState } from 'react'

interface FormData {
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  eventType: string
  eventDatum: string
  schermformaat: string
  locatie: string
  bericht: string
}

const initialFormData: FormData = {
  naam: '',
  bedrijf: '',
  email: '',
  telefoon: '',
  eventType: '',
  eventDatum: '',
  schermformaat: '',
  locatie: '',
  bericht: '',
}

const eventTypes = [
  { value: 'bedrijfsevenement', label: 'Bedrijfsevenement' },
  { value: 'festival', label: 'Festival' },
  { value: 'sportwedstrijd', label: 'Sportwedstrijd' },
  { value: 'beurs-expo', label: 'Beurs / Expo' },
  { value: 'winkel-showroom', label: 'Winkel / Showroom' },
  { value: 'prive', label: 'Privé feest' },
  { value: 'anders', label: 'Anders' },
]

const schermformaten = [
  { value: '6m2', label: '6m² - Compact', description: 'Ideaal voor kleine events' },
  { value: '8m2', label: '8m² - Veelzijdig', description: 'Meest populair' },
  { value: '16m2', label: '16m² - XXL', description: 'Voor grote evenementen' },
  { value: 'onbekend', label: 'Weet ik nog niet', description: 'Wij adviseren graag' },
]

export default function OffertePage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pagina: window.location.pathname,
          utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
          utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
          utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        }),
      })

      if (!response.ok) {
        throw new Error('Er ging iets mis. Probeer het opnieuw.')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Er ging iets mis')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="section">
        <div className="container-custom">
          <div className="success-message">
            <div className="success-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="success-title">Bedankt voor je aanvraag!</h1>
            <p className="success-text">
              We hebben je offerte-aanvraag ontvangen en nemen binnen 24 uur contact met je op.
            </p>
            <div className="success-details">
              <h3>Wat kun je verwachten?</h3>
              <ul>
                <li>✓ Bevestigingsmail binnen enkele minuten</li>
                <li>✓ Persoonlijk contact binnen 24 uur</li>
                <li>✓ Offerte op maat voor jouw event</li>
              </ul>
            </div>
            <a href="/" className="btn-primary">
              Terug naar home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section">
      <div className="container-custom">
        <div className="offerte-grid">
          {/* Left Column - Form */}
          <div className="offerte-form-wrapper">
            <h1 className="offerte-title">Vraag een vrijblijvende offerte aan</h1>
            <p className="offerte-subtitle">
              Vul onderstaand formulier in en ontvang binnen 24 uur een offerte op maat.
            </p>

            <form onSubmit={handleSubmit} className="offerte-form">
              {/* Contact Details */}
              <div className="form-section">
                <h3 className="form-section-title">Contactgegevens</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="naam" className="form-label">
                      Naam <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      value={formData.naam}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Jouw naam"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bedrijf" className="form-label">
                      Bedrijf / Organisatie
                    </label>
                    <input
                      type="text"
                      id="bedrijf"
                      name="bedrijf"
                      value={formData.bedrijf}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Bedrijfsnaam (optioneel)"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      E-mailadres <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="jouw@email.be"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefoon" className="form-label">
                      Telefoonnummer <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+32 000 00 00 00"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="form-section">
                <h3 className="form-section-title">Event details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="eventType" className="form-label">
                      Type evenement
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Selecteer type...</option>
                      {eventTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDatum" className="form-label">
                      Datum evenement
                    </label>
                    <input
                      type="date"
                      id="eventDatum"
                      name="eventDatum"
                      value={formData.eventDatum}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="locatie" className="form-label">
                      Locatie
                    </label>
                    <input
                      type="text"
                      id="locatie"
                      name="locatie"
                      value={formData.locatie}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Stad of gemeente"
                    />
                  </div>
                </div>
              </div>

              {/* Screen Selection */}
              <div className="form-section">
                <h3 className="form-section-title">Kies je schermformaat</h3>
                <div className="scherm-options">
                  {schermformaten.map((scherm) => (
                    <label
                      key={scherm.value}
                      className={`scherm-option ${formData.schermformaat === scherm.value ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="schermformaat"
                        value={scherm.value}
                        checked={formData.schermformaat === scherm.value}
                        onChange={handleChange}
                        className="scherm-radio"
                      />
                      <div className="scherm-content">
                        <span className="scherm-label">{scherm.label}</span>
                        <span className="scherm-description">{scherm.description}</span>
                      </div>
                      <div className="scherm-check">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="bericht" className="form-label">
                    Bericht / Extra informatie
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    rows={4}
                    className="form-input form-textarea"
                    placeholder="Vertel ons meer over je event..."
                  />
                </div>
              </div>

              {error && <div className="form-error">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary submit-btn"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur aanvraag'}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"/>
                    <path d="M12.1757 8.64102C12.4101 8.45299 12.7899 8.45299 13.0242 8.64102L20.8243 14.9003C21.0586 15.0883 21.0586 15.3931 20.8243 15.5812L13.6242 21.359C13.3899 21.547 13.0101 21.547 12.7757 21.359C12.5414 21.171 12.5414 20.8662 12.7757 20.6781L19.5516 15.2407L12.1757 9.32187C11.9414 9.13384 11.9414 8.82905 12.1757 8.64102Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="offerte-info">
            <div className="info-card">
              <h3 className="info-title">Waarom FlexLED?</h3>
              <ul className="info-list">
                <li>
                  <svg className="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Snelle levering in West- & Oost-Vlaanderen
                </li>
                <li>
                  <svg className="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vanaf €299 per dag
                </li>
                <li>
                  <svg className="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full service: opbouw, support & afbraak
                </li>
                <li>
                  <svg className="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100+ succesvolle events
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-title">Direct contact?</h3>
              <p className="info-text">
                Liever direct iemand spreken? Bel ons of stuur een WhatsApp.
              </p>
              <a href="tel:+32000000000" className="btn-secondary info-btn">
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +32 000 00 00 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
