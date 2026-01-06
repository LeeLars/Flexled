import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: {
    singular: 'Lead',
    plural: 'Leads',
  },
  admin: {
    useAsTitle: 'naam',
    defaultColumns: ['naam', 'email', 'status', 'createdAt'],
    group: 'Lead Management',
  },
  fields: [
    {
      name: 'naam',
      type: 'text',
      required: true,
    },
    {
      name: 'bedrijf',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'telefoon',
      type: 'text',
      required: true,
    },
    {
      name: 'eventType',
      type: 'select',
      options: [
        { label: 'Bedrijfsevenement', value: 'bedrijfsevenement' },
        { label: 'Festival', value: 'festival' },
        { label: 'Sportwedstrijd', value: 'sportwedstrijd' },
        { label: 'Beurs/Expo', value: 'beurs-expo' },
        { label: 'Winkel/Showroom', value: 'winkel-showroom' },
        { label: 'Privé feest', value: 'prive' },
        { label: 'Anders', value: 'anders' },
      ],
    },
    {
      name: 'eventDatum',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'schermformaat',
      type: 'select',
      options: [
        { label: '6m² - Compact', value: '6m2' },
        { label: '8m² - Veelzijdig', value: '8m2' },
        { label: '16m² - XXL', value: '16m2' },
        { label: 'Weet ik nog niet', value: 'onbekend' },
      ],
    },
    {
      name: 'locatie',
      type: 'text',
      admin: {
        description: 'Stad of gemeente van het event',
      },
    },
    {
      name: 'bericht',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'nieuw',
      options: [
        { label: '🆕 Nieuw', value: 'nieuw' },
        { label: '📞 Gecontacteerd', value: 'gecontacteerd' },
        { label: '📄 Offerte verstuurd', value: 'offerte' },
        { label: '✅ Gewonnen', value: 'gewonnen' },
        { label: '❌ Verloren', value: 'verloren' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notities',
      type: 'richText',
      admin: {
        description: 'Interne notities over deze lead',
      },
    },
    {
      name: 'bron',
      type: 'group',
      fields: [
        { name: 'pagina', type: 'text' },
        { name: 'utmSource', type: 'text' },
        { name: 'utmMedium', type: 'text' },
        { name: 'utmCampaign', type: 'text' },
      ],
    },
  ],
}
