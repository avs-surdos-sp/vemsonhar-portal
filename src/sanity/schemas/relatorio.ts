import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'relatorio',
  title: 'Relatórios Anuais',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      initialValue: 'Relatório Anual ',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ano',
      title: 'Ano',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'arquivo',
      title: 'Arquivo PDF',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'badge',
      title: 'Badge (ex: "Mais recente")',
      type: 'string',
    }),
    defineField({
      name: 'ativo',
      title: 'Publicado?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Ano (mais recente)',
      name: 'anoDesc',
      by: [{ field: 'ano', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'ano' },
  },
})
