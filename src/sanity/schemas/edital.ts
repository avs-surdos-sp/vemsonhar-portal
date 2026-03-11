import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'edital',
  title: 'Editais e Parcerias',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Edital / Parceria',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orgao',
      title: 'Órgão / Instituição',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'objeto',
      title: 'Objeto / Descrição',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'periodo',
      title: 'Período (ex: 2024 – 2025)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Vigente',     value: 'vigente'     },
          { title: 'Concluído',   value: 'concluido'   },
          { title: 'Em análise',  value: 'em-analise'  },
        ],
      },
      initialValue: 'vigente',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link para o documento (opcional)',
      type: 'url',
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
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'orgao' },
  },
})
