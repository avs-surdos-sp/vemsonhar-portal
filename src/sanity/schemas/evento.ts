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
      title: 'Data (início)',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dataFim',
      title: 'Data final (opcional)',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
      description: 'Preencha somente se o evento tiver mais de um dia',
    }),
    defineField({
      name: 'horaInicio',
      title: 'Horário',
      type: 'string',
      description: 'Ex: 14:00 ou 12:30 a 18:30',
    }),
    defineField({
      name: 'local',
      title: 'Local (opcional)',
      type: 'string',
      description: 'Ex: Sede da ASESP — São Paulo, SP. Deixe em branco para eventos sem local (recesso, feriado, etc.)',
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
