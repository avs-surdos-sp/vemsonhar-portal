import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artigo',
  title: 'Blog / Artigos',
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
          { title: 'Artigo',               value: 'artigo'      },
          { title: 'Reflexão',             value: 'reflexao'    },
          { title: 'Entrevista',           value: 'entrevista'  },
          { title: 'Tutorial / Formação',  value: 'tutorial'    },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor(a)',
      type: 'string',
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
        {
          type: 'block',
          styles: [
            { title: 'Normal',      value: 'normal'  },
            { title: 'Título H2',   value: 'h2'      },
            { title: 'Título H3',   value: 'h3'      },
            { title: 'Citação',     value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito',   value: 'strong' },
              { title: 'Itálico',   value: 'em'     },
              { title: 'Sublinhado', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({ scheme: ['http', 'https', 'mailto'] }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir em nova aba?',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string',
            }),
            defineField({
              name: 'legenda',
              title: 'Legenda',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'destaque',
      title: 'Destaque na página de Blog?',
      type: 'boolean',
      initialValue: false,
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
      title: 'Data de publicação (mais recente)',
      name: 'dataPublicacaoDesc',
      by: [{ field: 'dataPublicacao', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'autor',
      media: 'imagemCapa',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Por ${subtitle}` : 'Sem autor',
        media,
      }
    },
  },
})
