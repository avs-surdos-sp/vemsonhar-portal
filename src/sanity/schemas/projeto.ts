import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projeto',
  title: 'Projetos',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag (ex: Cuidado, Educação)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icone',
      title: 'Ícone',
      type: 'string',
      description: 'Nome do ícone Lucide',
      options: {
        list: [
          { title: 'Pessoas (Users)', value: 'Users' },
          { title: 'Estrela (Star)', value: 'Star' },
          { title: 'Folha (Leaf)', value: 'Leaf' },
          { title: 'Livro (BookOpen)', value: 'BookOpen' },
          { title: 'Música (Music)', value: 'Music' },
          { title: 'Parceria (Handshake)', value: 'Handshake' },
          { title: 'Coração (Heart)', value: 'Heart' },
          { title: 'Megafone (Megaphone)', value: 'Megaphone' },
        ],
      },
    }),
    defineField({
      name: 'cor',
      title: 'Cor principal (hex)',
      type: 'string',
      description: 'Ex: #1B3A6B',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'objetivo',
      title: 'Objetivo',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publico',
      title: 'Público-alvo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resultados',
      title: 'Resultados',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'apoio',
      title: 'Como apoiar',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
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
      title: 'titulo',
      subtitle: 'tag',
    },
  },
})
