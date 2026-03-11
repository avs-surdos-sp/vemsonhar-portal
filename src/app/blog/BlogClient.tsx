'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, User, Calendar } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export interface Artigo {
  _id: string
  titulo: string
  slug: { current: string }
  categoria: string
  autor?: string
  dataPublicacao: string
  resumo: string
  imagemCapa?: { asset: { _ref: string }; alt?: string }
  destaque?: boolean
}

const categoriaColors: Record<string, string> = {
  artigo:     '#1B3A6B',
  reflexao:   '#F26522',
  entrevista: '#00B4D8',
  tutorial:   '#1565C0',
}

const categoriaLabels: Record<string, string> = {
  artigo:     'Artigo',
  reflexao:   'Reflexão',
  entrevista: 'Entrevista',
  tutorial:   'Tutorial',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function formatDateLong(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogClient({ artigos }: { artigos: Artigo[] }) {
  const categorias = ['Todos', ...Array.from(new Set(artigos.map((a) => a.categoria)))]
  const [filtro, setFiltro] = useState('Todos')

  const filtered = filtro === 'Todos' ? artigos : artigos.filter((a) => a.categoria === filtro)

  const destaques = artigos.filter((a) => a.destaque)
  const destaque  = destaques[0]

  /* ── Empty state ── */
  if (artigos.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <BookOpen size={48} className="text-gray-300 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-xl font-extrabold text-[#1B3A6B] mb-2">Nenhum artigo publicado ainda</h2>
        <p className="text-gray-500">
          Em breve publicaremos artigos, reflexões e entrevistas sobre a comunidade surda.{' '}
          Acesse o{' '}
          <Link href="/studio" className="text-[#F26522] font-semibold hover:underline">
            Studio
          </Link>{' '}
          para adicionar conteúdo.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">

      {/* ── Destaque (featured article) ── */}
      {destaque && filtro === 'Todos' && (
        <Link
          href={`/blog/${destaque.slug.current}`}
          className="group block rounded-3xl overflow-hidden mb-14 border border-[#eef2f8] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B] sm:flex"
          aria-label={`Destaque: ${destaque.titulo}`}
        >
          {/* Imagem ou cor */}
          <div
            className="sm:w-2/5 h-52 sm:h-auto relative flex-shrink-0 bg-cover bg-center"
            style={
              destaque.imagemCapa
                ? {
                    backgroundImage: `url(${urlFor(destaque.imagemCapa).width(800).height(500).url()})`,
                  }
                : {
                    background: `linear-gradient(135deg, ${categoriaColors[destaque.categoria] ?? '#1B3A6B'}dd, ${categoriaColors[destaque.categoria] ?? '#1B3A6B'}88)`,
                  }
            }
            aria-hidden="true"
          >
            {destaque.imagemCapa && (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, transparent, white)`,
                }}
              />
            )}
          </div>

          <div className="flex flex-col justify-center p-8 flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                style={{ background: categoriaColors[destaque.categoria] ?? '#1B3A6B' }}
              >
                {categoriaLabels[destaque.categoria] ?? destaque.categoria}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F26522] bg-[#fef2ec] px-2.5 py-1 rounded-full">
                Destaque
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#1B3A6B] leading-snug mb-3 group-hover:text-[#F26522] transition-colors">
              {destaque.titulo}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
              {destaque.resumo}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                {destaque.autor && (
                  <span className="flex items-center gap-1">
                    <User size={12} aria-hidden="true" />
                    {destaque.autor}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar size={12} aria-hidden="true" />
                  {formatDateLong(destaque.dataPublicacao)}
                </span>
              </div>
              <span
                className="flex items-center gap-1.5 text-sm font-bold transition-colors"
                style={{ color: categoriaColors[destaque.categoria] ?? '#1B3A6B' }}
              >
                Ler artigo <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* ── Filter tabs ── */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtrar por categoria">
        {categorias.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filtro === cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
              filtro === cat
                ? 'bg-[#1B3A6B] text-white shadow-md'
                : 'bg-[#F5F7FA] text-gray-500 hover:bg-[#eef2f8]'
            }`}
          >
            {cat === 'Todos' ? 'Todos' : (categoriaLabels[cat] ?? cat)}
          </button>
        ))}
      </div>

      {/* ── Article grid ── */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-12">
          Nenhum artigo nesta categoria ainda.
        </p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {filtered.map((artigo) => {
            const cor   = categoriaColors[artigo.categoria] ?? '#1B3A6B'
            const label = categoriaLabels[artigo.categoria] ?? artigo.categoria
            return (
              <li key={artigo._id} className="group">
                <Link
                  href={`/blog/${artigo.slug.current}`}
                  className="block h-full rounded-2xl overflow-hidden border border-[#eef2f8] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B]"
                  aria-label={`Ler: ${artigo.titulo}`}
                >
                  {/* Cover */}
                  <div
                    className="h-36 relative flex items-end p-4 bg-cover bg-center"
                    style={
                      artigo.imagemCapa
                        ? {
                            backgroundImage: `url(${urlFor(artigo.imagemCapa).width(600).height(200).url()})`,
                          }
                        : { background: `linear-gradient(135deg, ${cor}dd, ${cor}88)` }
                    }
                  >
                    {artigo.imagemCapa && (
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${cor}cc, transparent)` }}
                      />
                    )}
                    <span className="relative text-sm font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                      {label}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <p className="text-[#1B3A6B] font-bold text-base leading-snug mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
                      {artigo.titulo}
                    </p>
                    {artigo.resumo && (
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">{artigo.resumo}</p>
                    )}
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-gray-400 flex flex-col gap-0.5">
                        {artigo.autor && (
                          <span className="flex items-center gap-1">
                            <User size={11} aria-hidden="true" />
                            {artigo.autor}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar size={11} aria-hidden="true" />
                          {formatDate(artigo.dataPublicacao)}
                        </span>
                      </div>
                      <span
                        className="ler-btn text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        style={{ color: cor }}
                      >
                        Ler <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
