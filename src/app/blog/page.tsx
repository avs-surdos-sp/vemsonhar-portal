import { sanityClient, urlFor } from '@/lib/sanity'
import { BookOpen, ArrowRight, User, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LibrasVideo from '@/components/shared/LibrasVideo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog / Artigos | ASESP',
  description: 'Reflexões, entrevistas, tutoriais e artigos sobre a comunidade surda e a Língua Brasileira de Sinais.',
}

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

const QUERY = `*[_type == "artigo" && ativo == true] | order(destaque desc, dataPublicacao desc) {
  _id, titulo, slug, categoria, autor, dataPublicacao, resumo, imagemCapa, destaque
}`

export const revalidate = 60

const categoriaColors: Record<string, string> = {
  artigo:     '#1B3A6B',
  reflexao:   '#00B4D8',
  entrevista: '#F26522',
  tutorial:   '#1565C0',
}

const categoriaLabels: Record<string, string> = {
  artigo:     'Artigo',
  reflexao:   'Reflexão',
  entrevista: 'Entrevista',
  tutorial:   'Tutorial / Formação',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const artigos: Artigo[] = await sanityClient.fetch(QUERY)
  const destaque = artigos.find((a) => a.destaque)
  const demais   = artigos.filter((a) => a._id !== destaque?._id)

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
        aria-labelledby="blog-titulo"
      >
        <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #F26522, transparent)' }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <BookOpen size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Reflexões e conhecimento</span>
          </div>
          <h1 id="blog-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog / Artigos
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Artigos, reflexões, entrevistas e tutoriais sobre a comunidade surda, Libras e inclusão.
          </p>
          <LibrasVideo title="Blog da ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-14">
        {artigos.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen size={40} className="text-gray-300 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-500 text-lg">
              Em breve publicaremos artigos, reflexões e entrevistas sobre a comunidade surda. Volte em breve!
            </p>
          </div>
        ) : (
          <>
            {/* Destaque */}
            {destaque && (
              <div className="mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F26522] mb-4">Destaque</p>
                <Link
                  href={`/blog/${destaque.slug.current}`}
                  className="group flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  aria-label={`Leia: ${destaque.titulo}`}
                >
                  <div className="md:w-[45%] h-56 md:h-auto relative shrink-0">
                    {destaque.imagemCapa ? (
                      <Image
                        src={urlFor(destaque.imagemCapa).width(800).height(500).url()}
                        alt={destaque.imagemCapa.alt ?? destaque.titulo}
                        fill className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${categoriaColors[destaque.categoria] ?? '#1B3A6B'}44, ${categoriaColors[destaque.categoria] ?? '#1B3A6B'}88)` }}>
                        <BookOpen size={48} className="text-white/40" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center p-8 flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ color: categoriaColors[destaque.categoria] ?? '#1B3A6B' }}>
                      {categoriaLabels[destaque.categoria] ?? destaque.categoria}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#1B3A6B] leading-snug mb-3 group-hover:text-[#F26522] transition-colors line-clamp-2">
                      {destaque.titulo}
                    </h2>
                    {destaque.resumo && (
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{destaque.resumo}</p>
                    )}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        {destaque.autor && <span className="flex items-center gap-1"><User size={12} /> {destaque.autor}</span>}
                        <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(destaque.dataPublicacao)}</span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                        style={{ color: categoriaColors[destaque.categoria] ?? '#1B3A6B' }}>
                        Ler artigo <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Grid */}
            {demais.length > 0 && (
              <>
                {destaque && <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Mais artigos</p>}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                  {demais.map((artigo) => {
                    const cor   = categoriaColors[artigo.categoria] ?? '#1B3A6B'
                    const label = categoriaLabels[artigo.categoria] ?? artigo.categoria
                    return (
                      <li key={artigo._id} className="group">
                        <Link href={`/blog/${artigo.slug.current}`}
                          className="flex flex-col h-full rounded-2xl overflow-hidden border border-[#eef2f8] bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B]"
                          aria-label={`Leia: ${artigo.titulo}`}>
                          {/* Capa */}
                          <div className="h-36 relative flex items-end p-4"
                            style={artigo.imagemCapa
                              ? { backgroundImage: `url(${urlFor(artigo.imagemCapa).width(600).height(200).url()})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                              : { background: `linear-gradient(135deg, ${cor}dd, ${cor}88)` }}>
                            {artigo.imagemCapa && (
                              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${cor}cc, transparent)` }} />
                            )}
                            <span className="relative text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                              {label}
                            </span>
                          </div>
                          {/* Body */}
                          <div className="flex flex-col flex-1 p-5">
                            <p className="text-[#1B3A6B] font-bold text-base leading-snug mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
                              {artigo.titulo}
                            </p>
                            {artigo.resumo && (
                              <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-1">{artigo.resumo}</p>
                            )}
                            <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                              <div className="flex flex-col gap-0.5">
                                {artigo.autor && (
                                  <span className="text-xs text-gray-400 flex items-center gap-1"><User size={10} /> {artigo.autor}</span>
                                )}
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <Calendar size={10} /> {formatDate(artigo.dataPublicacao)}
                                </span>
                              </div>
                              <span className="text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: cor }}>
                                Ler <ArrowRight size={11} />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </main>
  )
}
