import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'evento',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'data',
      title: 'Data',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'horaInicio',
      title: 'Horário de início',
      type: 'string',
      description: 'Ex: 14:00',
    }),
    defineField({
      name: 'local',
      title: 'Local',
      type: 'string',
      description: 'Ex: Sede da ASESP — São Paulo, SP',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
      description: 'Desmarque para ocultar o evento da home',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Data (mais próximo primeiro)',
      name: 'dataAsc',
      by: [{ field: 'data', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      data: 'data',
      local: 'local',
    },
    prepare({ title, data, local }) {
      return {
        title,
        subtitle: `${data ?? '—'} · ${local ?? '—'}`,
      }
    },
  },
})
