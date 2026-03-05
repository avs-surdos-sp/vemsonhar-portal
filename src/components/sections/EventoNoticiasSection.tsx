import React from 'react'
import Link from 'next/link'
import { MapPin, CalendarDays, ArrowRight, Newspaper, Tag } from 'lucide-react'

const noticias = [
  {
    data: '28 Fev 2026',
    titulo: 'ASESP participa do Conselho Municipal de Direitos',
    tag: 'Institucional',
    slug: 'asesp-conselho-municipal',
    tagColor: '#1B3A6B',
  },
  {
    data: '15 Fev 2026',
    titulo: 'Encontro do Núcleo dos Idosos reúne 60 participantes',
    tag: 'Eventos',
    slug: 'encontro-nucleo-idosos',
    tagColor: '#00B4D8',
  },
  {
    data: '02 Fev 2026',
    titulo: 'Novo curso de Libras para profissionais da saúde',
    tag: 'Cursos',
    slug: 'curso-libras-saude',
    tagColor: '#F26522',
  },
]

export default function EventoNoticiasSection() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #1565C0 100%)' }}
      aria-label="Próximo evento e últimas notícias"
    >
      {/* Decorators */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
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

        {/* Próximo evento */}
        <div>
          <p className="section-label text-[#F26522] mb-3">Agenda</p>
          <h2 className="text-3xl font-extrabold text-white mb-7 tracking-tight">Próximo evento</h2>

          <div className="glass-card rounded-2xl p-7">
            <div className="flex items-start gap-5 mb-5">
              {/* Date badge */}
              <div
                className="rounded-xl px-4 py-3 text-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #F26522, #e0541d)' }}
              >
                <div className="text-white text-2xl font-extrabold leading-none">15</div>
                <div className="text-white/80 text-[11px] uppercase mt-0.5 font-semibold tracking-wide">Mar</div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl leading-snug">
                  Encontro do Núcleo dos Idosos Surdos
                </h3>
                <p className="flex items-center gap-1.5 text-white/80 text-base mt-2">
                  <MapPin size={15} className="shrink-0" />
                  Sede da ASESP — São Paulo, SP
                </p>
              </div>
            </div>
            <p className="text-white/90 text-base leading-relaxed border-t border-white/10 pt-4">
              Atividades recreativas, roda de conversa em Libras e almoço comunitário.
              Aberto a todos os associados e convidados.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-[#F26522] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#d4501a] transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <CalendarDays size={15} />
                Confirmar presença
              </Link>
            </div>
          </div>
        </div>

        {/* Últimas notícias */}
        <div>
          <div className="flex items-center justify-between mb-7">
            <div>
              <p className="section-label text-[#F26522] mb-1">Notícias</p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Últimas notícias</h2>
            </div>
            <Newspaper size={32} className="text-white/85 hidden sm:block" aria-hidden="true" />
          </div>

          <ul className="space-y-0 list-none">
            {noticias.map((n, i) => (
              <li
                key={n.slug}
                className={`${i < noticias.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <Link
                  href={`/noticias/${n.slug}`}
                  className="flex items-start gap-4 py-5 group"
                >
                  {/* Tag */}
                  <span
                    className="tag-badge mt-0.5 text-sm font-bold px-4 py-1.5 rounded-full shrink-0 flex items-center gap-1.5"
                    style={{ '--tag-color': n.tagColor } as React.CSSProperties}
                  >
                    <Tag size={13} />
                    {n.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    {/* Título */}
                    <p className="text-white font-semibold text-base leading-snug group-hover:text-[#00B4D8] transition-colors duration-150 line-clamp-2">
                      {n.titulo}
                    </p>
                    {/* Data — fica negrito no hover */}
                    <p className="text-white/75 text-base mt-1.5 group-hover:text-white transition-colors duration-150">
                      {n.data}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-white/25 group-hover:text-[#F26522] group-hover:translate-x-1 transition-all duration-150 shrink-0 mt-1" />
                </Link>
              </li>
            ))}
          </ul>

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
