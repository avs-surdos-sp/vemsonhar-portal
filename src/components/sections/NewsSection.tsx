import React from 'react'
import Link from 'next/link'
import { ArrowRight, Newspaper, Tag, Clock } from 'lucide-react'
import { sanityClient, urlFor } from '@/lib/sanity'

// ─── Types ────────────────────────────────────────────────────────────────────

type NoticiaPreview = {
  titulo: string
  slug: string
  categoria: 'noticia' | 'evento' | 'comunicado' | 'projeto'
  dataPublicacao: string
  resumo?: string
  imagemCapa?: {
    alt?: string
    asset?: { _ref: string }
  }
}

const CATEGORIA: Record<string, { label: string; color: string }> = {
  noticia:    { label: 'Institucional', color: '#14387F' },
  evento:     { label: 'Evento',        color: '#0069B4' },
  comunicado: { label: 'Comunicado',    color: '#F7931E' },
  projeto:    { label: 'Projeto',       color: '#0069B4' },
}

const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

const QUERY = `
  *[_type == "noticia"] | order(dataPublicacao desc) [0...3] {
    titulo,
    "slug": slug.current,
    categoria,
    dataPublicacao,
    resumo,
    imagemCapa
  }
`

// ─── Component ────────────────────────────────────────────────────────────────

export default async function NewsSection() {
  const noticias = await sanityClient
    .fetch<NoticiaPreview[]>(QUERY, {}, { next: { revalidate: 60 } })
    .catch(() => [] as NoticiaPreview[])

  return (
    <section className="py-20 px-4" aria-labelledby="noticias-titulo">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Newspaper size={16} className="text-[#F7931E]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F7931E]">
                Notícias
              </span>
            </div>
            <h2
              id="noticias-titulo"
              className="text-2xl sm:text-3xl font-extrabold text-[#14387F] tracking-tight"
            >
              Últimas notícias
            </h2>
          </div>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14387F] hover:text-[#F7931E] transition-colors group shrink-0"
          >
            Ver todas
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid magazine — texto sobre imagem */}
        {noticias.length > 0 ? (
          <ul className="grid md:grid-cols-3 gap-5 list-none">
            {noticias.map((n) => {
              const cat = CATEGORIA[n.categoria] ?? CATEGORIA.noticia
              const href = n.slug ? `/noticias/${n.slug}` : '/noticias'
              const imgUrl = n.imagemCapa?.asset
                ? urlFor(n.imagemCapa).width(700).height(900).fit('crop').url()
                : null
              return (
                <li key={n.slug || n.titulo}>
                  <Link
                    href={href}
                    className="relative block h-105 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                  >
                    {/* Imagem de fundo (ou fallback) */}
                    <div className="absolute inset-0">
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt={n.imagemCapa?.alt || n.titulo}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, ${cat.color}, #061B45)` }}
                          aria-hidden="true"
                        >
                          <Newspaper size={60} className="text-white/15" />
                        </div>
                      )}
                    </div>

                    {/* Overlay escuro permanente embaixo */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(6,27,69,0.95) 0%, rgba(6,27,69,0.75) 40%, rgba(6,27,69,0.15) 70%, transparent 100%)',
                      }}
                      aria-hidden="true"
                    />

                    {/* Categoria badge (topo esquerda) */}
                    <span
                      className="absolute top-4 left-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow-md"
                      style={{ background: cat.color }}
                    >
                      <Tag size={10} aria-hidden="true" />
                      {cat.label}
                    </span>

                    {/* Conteúdo embaixo */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-2">
                        {formatDate(n.dataPublicacao)}
                      </p>
                      <h3 className="font-extrabold text-lg leading-snug mb-3 line-clamp-3 group-hover:text-[#F7931E] transition-colors">
                        {n.titulo}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#F7931E]">
                        Ler notícia
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-8">
            <Clock size={22} className="text-[#F7931E] shrink-0" aria-hidden="true" />
            <p className="text-gray-600 text-base">Em breve publicaremos as novidades da ASESP aqui.</p>
          </div>
        )}

      </div>
    </section>
  )
}
