import React from 'react'
import Link from 'next/link'
import { ArrowRight, Newspaper, Tag, Clock } from 'lucide-react'
import { sanityClient } from '@/lib/sanity'
import EventosCarousel from '@/components/shared/EventosCarousel'

// ─── Types ────────────────────────────────────────────────────────────────────

type Evento = {
  titulo: string
  data: string        // YYYY-MM-DD
  horaInicio?: string
  local: string
  descricao?: string
}

type NoticiaPreview = {
  titulo: string
  slug: string
  categoria: 'noticia' | 'evento' | 'comunicado' | 'projeto'
  dataPublicacao: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const CATEGORIA: Record<string, { label: string; color: string }> = {
  noticia:    { label: 'Institucional', color: '#1B3A6B' },
  evento:     { label: 'Eventos',       color: '#00B4D8' },
  comunicado: { label: 'Comunicado',    color: '#F26522' },
  projeto:    { label: 'Projetos',      color: '#1565C0' },
}

const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

function formatNoticiaDate(iso: string) {
  const d = new Date(iso)
  return `${String(d.getUTCDate()).padStart(2, '0')} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const QUERY_EVENTOS = `
  *[_type == "evento" && ativo == true && data >= $today] | order(data asc) [0...3] {
    titulo, data, horaInicio, local, descricao
  }
`

const QUERY_NOTICIAS = `
  *[_type == "noticia"] | order(dataPublicacao desc) [0...3] {
    titulo,
    "slug": slug.current,
    categoria,
    dataPublicacao
  }
`

// ─── Component ────────────────────────────────────────────────────────────────

export default async function EventoNoticiasSection() {
  const today = new Date().toISOString().split('T')[0]

  const [eventosSanity, noticiasSanity] = await Promise.all([
    sanityClient.fetch<Evento[]>(QUERY_EVENTOS, { today }, { next: { revalidate: 60 } }),
    sanityClient.fetch<NoticiaPreview[]>(QUERY_NOTICIAS, {}, { next: { revalidate: 60 } }),
  ]).catch(() => [[], []] as [Evento[], NoticiaPreview[]])

  const eventos = eventosSanity ?? []
  const noticias = noticiasSanity ?? []

  return (
    <section
      className="py-24 px-4 relative"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #1565C0 100%)' }}
      aria-label="Próximos eventos e últimas notícias"
    >
      {/* Decorators — overflow-hidden aqui apenas para clipar os glows, sem afetar o dropdown */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(242,101,34,0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* ── Próximos eventos ── */}
        <div>
          <p className="section-label text-[#F26522] mb-3">Agenda</p>
          <h2 className="text-3xl font-extrabold text-white mb-7 tracking-tight">
            Próximos eventos
          </h2>

            {eventos.length > 0 ? (
            <EventosCarousel eventos={eventos} />
          ) : (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <Clock size={22} className="text-[#F26522] shrink-0" aria-hidden="true" />
              <p className="text-white/70 text-base">Em breve divulgaremos os próximos eventos da ASESP.</p>
            </div>
          )}
        </div>

        {/* ── Últimas notícias ── */}
        <div>
          <div className="flex items-center justify-between mb-7">
            <div>
              <p className="section-label text-[#F26522] mb-1">Notícias</p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Últimas notícias</h2>
            </div>
            <Newspaper size={32} className="text-white/85 hidden sm:block" aria-hidden="true" />
          </div>

          {noticias.length > 0 ? (
            <ul className="space-y-0 list-none">
              {noticias.map((n, i) => {
                const cat = CATEGORIA[n.categoria] ?? CATEGORIA.noticia
                const href = n.slug ? `/news/${n.slug}` : '/news'
                return (
                  <li
                    key={n.slug || n.titulo}
                    className={`${i < noticias.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <Link href={href} className="flex items-start gap-4 py-5 group">
                      <span
                        className="tag-badge mt-0.5 text-sm font-bold px-4 py-1.5 rounded-full shrink-0 flex items-center gap-1.5"
                        style={{ '--tag-color': cat.color } as React.CSSProperties}
                      >
                        <Tag size={13} />
                        {cat.label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-base leading-snug group-hover:text-[#00B4D8] transition-colors duration-150 line-clamp-2">
                          {n.titulo}
                        </p>
                        <p className="text-white/75 text-sm mt-1.5">
                          {formatNoticiaDate(n.dataPublicacao)}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-white/25 group-hover:text-[#F26522] group-hover:translate-x-1 transition-all duration-150 shrink-0 mt-1" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <Clock size={22} className="text-[#F26522] shrink-0" aria-hidden="true" />
              <p className="text-white/70 text-base">Em breve publicaremos as novidades da ASESP aqui.</p>
            </div>
          )}

          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 mt-4 text-[#F26522] font-semibold text-base hover:gap-3 transition-all duration-200 group"
          >
            Ver todas as notícias
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
