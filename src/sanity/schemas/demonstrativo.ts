import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'demonstrativo',
  title: 'Demonstrativo Financeiro',
  type: 'document',
  fields: [
    defineField({
      name: 'ano',
      title: 'Ano de referência',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: 'ativo',
      title: 'Publicado?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'receitas',
      title: 'Receitas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'categoria', title: 'Categoria', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'valor',     title: 'Valor (ex: R$ 12.500,00)', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'categoria', subtitle: 'valor' },
          },
        },
      ],
    }),
    defineField({
      name: 'despesas',
      title: 'Despesas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'categoria', title: 'Categoria', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'valor',     title: 'Valor (ex: R$ 8.200,00)', type: 'string', validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: 'categoria', subtitle: 'valor' },
          },
        },
      ],
    }),
    defineField({
      name: 'observacao',
      title: 'Observação (opcional)',
      type: 'text',
      rows: 2,
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
    select: { title: 'ano' },
    prepare({ title }) {
      return { title: `Demonstrativo Financeiro ${title}` }
    },
  },
})
