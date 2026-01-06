import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Pagina',
    plural: "Pagina's",
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'pageType', 'status'],
    group: 'Content',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL pad (bijv. "ledscherm-huren/brugge")',
      },
    },
    {
      name: 'pageType',
      type: 'select',
      required: true,
      options: [
        { label: 'Homepage', value: 'homepage' },
        { label: 'Product', value: 'product' },
        { label: 'Lokale SEO', value: 'lokaal' },
        { label: 'Toepassing', value: 'toepassing' },
        { label: 'Kennisbank', value: 'kennisbank' },
        { label: 'Standaard', value: 'standaard' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Max 60 karakters',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Max 160 karakters',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Komma-gescheiden keywords',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'h1', type: 'text', required: true },
        { name: 'subtitle', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'ctaText', type: 'text', defaultValue: 'Vraag offerte aan' },
        { name: 'ctaLink', type: 'text', defaultValue: '/offerte' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'lokaal',
      type: 'group',
      admin: {
        condition: (data) => data.pageType === 'lokaal',
      },
      fields: [
        {
          name: 'provincie',
          type: 'select',
          options: [
            { label: 'West-Vlaanderen', value: 'west-vlaanderen' },
            { label: 'Oost-Vlaanderen', value: 'oost-vlaanderen' },
          ],
        },
        {
          name: 'stad',
          type: 'relationship',
          relationTo: 'steden',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Gepubliceerd', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
