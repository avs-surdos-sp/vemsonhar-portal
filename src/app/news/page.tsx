'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'

// Placeholder data — will be replaced with CMS data
const noticias = [
  { slug: 'exemplo-1', titulo: 'ASESP participa de evento nacional de inclusão', categoria: 'Eventos', data: '01/03/2026', cor: '#1B3A6B' },
  { slug: 'exemplo-2', titulo: 'Nova lei garante intérpretes de Libras em audiências públicas', categoria: 'Legislação', data: '20/02/2026', cor: '#F26522' },
  { slug: 'exemplo-3', titulo: 'Oficina de Libras para iniciantes — inscrições abertas', categoria: 'Educação', data: '15/02/2026', cor: '#00B4D8' },
  { slug: 'exemplo-4', titulo: 'ASESP conquista acessibilidade em transporte público de SP', categoria: 'Conquistas', data: '10/02/2026', cor: '#1B3A6B' },
  { slug: 'exemplo-5', titulo: 'Dia Nacional do Surdo: programação especial em São Paulo', categoria: 'Eventos', data: '26/09/2025', cor: '#F26522' },
  { slug: 'exemplo-6', titulo: 'Parceria com universidade amplia vagas para surdos', categoria: 'Educação', data: '15/09/2025', cor: '#00B4D8' },
]

const categorias = ['Todas', ...Array.from(new Set(noticias.map((n) => n.categoria)))]

const categoriaColors: Record<string, string> = {
  Eventos: '#F26522',
  Legislação: '#1B3A6B',
  Educação: '#00B4D8',
  Conquistas: '#1B3A6B',
}

export default function NoticiasPage() {
  const [filtro, setFiltro] = useState('Todas')

  const filtered = filtro === 'Todas' ? noticias : noticias.filter((n) => n.categoria === filtro)

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="section-label text-[#00B4D8] mb-3">Fique por dentro</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Notícias</h1>
          <p className="text-white/60 text-lg">Acompanhe as novidades da ASESP e da comunidade surda paulista.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtrar por categoria">
          {categorias.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filtro === cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${filtro === cat
                  ? 'bg-[#1B3A6B] text-white shadow-md'
                  : 'bg-[#F5F7FA] text-gray-500 hover:bg-[#eef2f8]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {filtered.map((noticia) => {
            const corTag = categoriaColors[noticia.categoria] ?? '#1B3A6B'
            return (
              <li key={noticia.slug} className="group">
                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="block h-full rounded-2xl overflow-hidden border border-[#eef2f8] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B]"
                  aria-label={`Leia: ${noticia.titulo}`}
                >
                  {/* Cover block */}
                  <div
                    className="h-28 relative flex items-end p-4"
                    style={{ background: `linear-gradient(135deg, ${corTag}dd, ${corTag}88)` }}
                  >
                    <span
                      className="text-sm font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      {noticia.categoria}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <p className="text-[#1B3A6B] font-bold text-base leading-snug mb-3 group-hover:text-[#F26522] transition-colors line-clamp-2">
                      {noticia.titulo}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">{noticia.data}</p>
                      <span className="text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: corTag }}>
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
    </main>
  )
}
