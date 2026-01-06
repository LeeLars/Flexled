import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Producten',
  },
  admin: {
    useAsTitle: 'naam',
    group: 'Content',
  },
  fields: [
    {
      name: 'naam',
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
      name: 'formaat',
      type: 'text',
      required: true,
      admin: {
        description: 'Bijv. "6m²", "8m²", "16m²"',
      },
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
      name: 'specs',
      type: 'group',
      fields: [
        { name: 'resolutie', type: 'text' },
        { name: 'pixelPitch', type: 'text' },
        { name: 'helderheid', type: 'text' },
        { name: 'afmetingenScherm', type: 'text' },
        { name: 'afmetingenTrailer', type: 'text' },
        { name: 'gewicht', type: 'text' },
        { name: 'stroomverbruik', type: 'text' },
      ],
    },
    {
      name: 'prijs',
      type: 'group',
      fields: [
        { name: 'vanafPrijs', type: 'number' },
        { name: 'prijsPerDag', type: 'number' },
        { name: 'prijsWeekend', type: 'number' },
        { name: 'prijsWeek', type: 'number' },
        {
          name: 'toonPrijzen',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'korteBeschrijving',
      type: 'textarea',
    },
    {
      name: 'beschrijving',
      type: 'richText',
    },
    {
      name: 'usps',
      type: 'array',
      fields: [
        { name: 'tekst', type: 'text' },
      ],
    },
  ],
}
