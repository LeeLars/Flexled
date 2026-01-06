import type { CollectionConfig } from 'payload'

export const Steden: CollectionConfig = {
  slug: 'steden',
  labels: {
    singular: 'Stad',
    plural: 'Steden',
  },
  admin: {
    useAsTitle: 'naam',
    group: 'Lokale SEO',
    defaultColumns: ['naam', 'provincie', 'actief'],
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
      name: 'provincie',
      type: 'select',
      required: true,
      options: [
        { label: 'West-Vlaanderen', value: 'west-vlaanderen' },
        { label: 'Oost-Vlaanderen', value: 'oost-vlaanderen' },
      ],
    },
    {
      name: 'postcode',
      type: 'text',
    },
    {
      name: 'content',
      type: 'group',
      fields: [
        {
          name: 'introTekst',
          type: 'richText',
        },
        {
          name: 'lokaleInfo',
          type: 'textarea',
          admin: {
            description: 'Specifieke info over deze stad (events, locaties, etc.)',
          },
        },
      ],
    },
    {
      name: 'nabijgelegen',
      type: 'relationship',
      relationTo: 'steden',
      hasMany: true,
      admin: {
        description: 'Steden in de buurt voor internal linking',
      },
    },
    {
      name: 'actief',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Pagina tonen op website',
        position: 'sidebar',
      },
    },
  ],
}
