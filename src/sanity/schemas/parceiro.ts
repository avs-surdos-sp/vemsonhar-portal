import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'parceiro',
  title: 'Parcerias Institucionais',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome da organização',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sigla',
      title: 'Sigla (exibida quando não há logo)',
      type: 'string',
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'PNG ou SVG com fundo transparente, mínimo 200×200 px.',
      type: 'image',
      options: { hotspot: false },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Governo',            value: 'Governo'            },
          { title: 'Educação',           value: 'Educação'           },
          { title: 'Organização Social', value: 'Organização Social' },
          { title: 'Empresa',            value: 'Empresa'            },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'site',
      title: 'Site institucional',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).error('URL inválida'),
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de exibição',
      type: 'number',
      description: 'Número menor aparece primeiro. Deixe em branco para ordem automática.',
    }),
    defineField({
      name: 'ativo',
      title: 'Exibir na página?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Ordem de exibição',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
    {
      title: 'Nome (A–Z)',
      name: 'nomeAsc',
      by: [{ field: 'nome', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'categoria',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ?? 'Sem categoria',
        media,
      }
    },
  },
})
