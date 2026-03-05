'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

export interface Noticia {
  _id: string
  titulo: string
  slug: { current: string }
  categoria: string
  dataPublicacao: string
  resumo: string
  imagemCapa?: { asset: { _ref: string }; alt?: string }
}

const categoriaColors: Record<string, string> = {
  noticia: '#1B3A6B',
  evento: '#F26522',
  comunicado: '#00B4D8',
  projeto: '#1565C0',
}

const categoriaLabels: Record<string, string> = {
  noticia: 'Notícia',
  evento: 'Evento',
  comunicado: 'Comunicado',
  projeto: 'Projeto',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export default function NewsClient({ noticias }: { noticias: Noticia[] }) {
  const categorias = ['Todas', ...Array.from(new Set(noticias.map((n) => n.categoria)))]
  const [filtro, setFiltro] = useState('Todas')

  const filtered = filtro === 'Todas' ? noticias : noticias.filter((n) => n.categoria === filtro)

  if (noticias.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 text-lg">Nenhuma notícia publicada ainda. Acesse o Studio para adicionar conteúdo.</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      {/* Filter tabs */}
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
            {cat === 'Todas' ? 'Todas' : (categoriaLabels[cat] ?? cat)}
          </button>
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {filtered.map((noticia) => {
          const cor = categoriaColors[noticia.categoria] ?? '#1B3A6B'
          const label = categoriaLabels[noticia.categoria] ?? noticia.categoria
          return (
            <li key={noticia._id} className="group">
              <Link
                href={`/news/${noticia.slug.current}`}
                className="block h-full rounded-2xl overflow-hidden border border-[#eef2f8] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B]"
                aria-label={`Leia: ${noticia.titulo}`}
              >
                {/* Cover */}
                <div
                  className="h-36 relative flex items-end p-4 bg-cover bg-center"
                  style={
                    noticia.imagemCapa
                      ? {
                          backgroundImage: `url(${urlFor(noticia.imagemCapa).width(600).height(200).url()})`,
                        }
                      : { background: `linear-gradient(135deg, ${cor}dd, ${cor}88)` }
                  }
                >
                  {noticia.imagemCapa && (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${cor}cc, transparent)` }} />
                  )}
                  <span className="relative text-sm font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    {label}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-[#1B3A6B] font-bold text-base leading-snug mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
                    {noticia.titulo}
                  </p>
                  {noticia.resumo && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{noticia.resumo}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{formatDate(noticia.dataPublicacao)}</p>
                    <span
                      className="text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
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
    </div>
  )
}
