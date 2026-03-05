import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projeto',
  title: 'Projetos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nome', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icone',
      title: 'Ícone (emoji)',
      type: 'string',
    }),
    defineField({
      name: 'cor',
      title: 'Cor do badge (hex)',
      type: 'string',
      description: 'Ex: #F26522',
    }),
    defineField({
      name: 'descricaoCurta',
      title: 'Descrição Curta',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'descricaoCompleta',
      title: 'Descrição Completa',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de exibição',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Ordem',
      name: 'ordemAsc',
      by: [{ field: 'ordem', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'nome',
      subtitle: 'descricaoCurta',
    },
  },
})
