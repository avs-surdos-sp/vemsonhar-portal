import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projetoAprovado',
  title: 'Projetos Aprovados',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Projeto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'financiador',
      title: 'Financiador / Órgão',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Cultura',        value: 'Cultura'        },
          { title: 'Educação',       value: 'Educação'       },
          { title: 'Acessibilidade', value: 'Acessibilidade' },
          { title: 'Saúde',          value: 'Saúde'          },
          { title: 'Esporte',        value: 'Esporte'        },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ano',
      title: 'Ano de aprovação',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link para o projeto (opcional)',
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
      title: 'Ano (mais recente)',
      name: 'anoDesc',
      by: [{ field: 'ano', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'financiador' },
  },
})
