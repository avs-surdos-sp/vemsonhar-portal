import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'noticia',
  title: 'Notícias',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Notícia', value: 'noticia' },
          { title: 'Evento', value: 'evento' },
          { title: 'Comunicado', value: 'comunicado' },
          { title: 'Projeto', value: 'projeto' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dataPublicacao',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo (acessibilidade)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque na Home?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Data de publicação (mais recente)',
      name: 'dataPublicacaoDesc',
      by: [{ field: 'dataPublicacao', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria',
      media: 'imagemCapa',
    },
  },
})
