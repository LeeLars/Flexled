import type { CollectionConfig } from 'payload'

export const Realisaties: CollectionConfig = {
  slug: 'realisaties',
  labels: {
    singular: 'Realisatie',
    plural: 'Realisaties',
  },
  admin: {
    useAsTitle: 'titel',
    group: 'Content',
  },
  fields: [
    {
      name: 'titel',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'datum',
      type: 'date',
    },
    {
      name: 'locatie',
      type: 'text',
    },
    {
      name: 'stad',
      type: 'relationship',
      relationTo: 'steden',
    },
    {
      name: 'eventType',
      type: 'select',
      options: [
        { label: 'Bedrijfsevenement', value: 'bedrijfsevenement' },
        { label: 'Festival', value: 'festival' },
        { label: 'Sportwedstrijd', value: 'sportwedstrijd' },
        { label: 'Beurs/Expo', value: 'beurs-expo' },
        { label: 'Privé', value: 'prive' },
      ],
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
    },
    {
      name: 'hoofdAfbeelding',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'beschrijving',
      type: 'richText',
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'auteur', type: 'text' },
        { name: 'bedrijf', type: 'text' },
      ],
    },
    {
      name: 'uitgelicht',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Toon op homepage',
        position: 'sidebar',
      },
    },
  ],
}
