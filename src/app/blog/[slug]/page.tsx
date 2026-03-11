import { sanityClient, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import type { Metadata } from 'next'

interface Artigo {
  _id: string
  titulo: string
  slug: { current: string }
  categoria: string
  autor?: string
  dataPublicacao: string
  resumo: string
  imagemCapa?: { asset: { _ref: string }; alt?: string }
  conteudo?: unknown[]
}

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

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanityClient.fetch(
    `*[_type == "artigo" && ativo == true]{ slug }`
  )
  return slugs.map((a) => ({ slug: a.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const artigo: Artigo | null = await sanityClient.fetch(
    `*[_type == "artigo" && slug.current == $slug][0]{ titulo, resumo }`, { slug }
  )
  if (!artigo) return {}
  return { title: `${artigo.titulo} — ASESP`, description: artigo.resumo }
}

export const revalidate = 60

// Componentes PortableText customizados
const ptComponents = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt?: string; legenda?: string } }) => (
      <figure className="my-8">
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt ?? ''}
            fill
            className="object-cover"
          />
        </div>
        {value.legenda && (
          <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
            {value.legenda}
          </figcaption>
        )}
      </figure>
    ),
  },
  marks: {
    link: ({ value, children }: { value?: { href: string; blank?: boolean }; children: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-[#F26522] underline underline-offset-2 hover:text-[#d4501a] transition-colors"
      >
        {children}
      </a>
    ),
  },
  block: {
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#F26522] pl-5 italic text-gray-500 my-6">
        {children}
      </blockquote>
    ),
  },
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params
  const artigo: Artigo | null = await sanityClient.fetch(
    `*[_type == "artigo" && slug.current == $slug][0]{
      _id, titulo, slug, categoria, autor, dataPublicacao, resumo, imagemCapa, conteudo
    }`,
    { slug }
  )

  if (!artigo) notFound()

  const cor   = categoriaColors[artigo.categoria] ?? '#1B3A6B'
  const label = categoriaLabels[artigo.categoria] ?? artigo.categoria

  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cor}ee 0%, #0d2347 100%)` }}
        aria-labelledby="artigo-titulo"
      >
        {artigo.imagemCapa && (
          <Image
            src={urlFor(artigo.imagemCapa).width(1200).height(500).url()}
            alt={artigo.imagemCapa.alt ?? artigo.titulo}
            fill className="object-cover opacity-15" priority
          />
        )}

        <div className="relative max-w-3xl mx-auto">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-bold px-3 py-1 rounded-full text-white"
              style={{ background: 'rgba(255,255,255,0.2)' }}>
              <Tag size={12} className="inline mr-1" aria-hidden="true" />
              {label}
            </span>
            {artigo.autor && (
              <span className="text-white/60 text-sm flex items-center gap-1">
                <User size={12} aria-hidden="true" /> {artigo.autor}
              </span>
            )}
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" /> {formatDate(artigo.dataPublicacao)}
            </span>
          </div>

          <h1 id="artigo-titulo"
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {artigo.titulo}
          </h1>
          {artigo.resumo && (
            <p className="text-white/70 text-lg leading-relaxed">{artigo.resumo}</p>
          )}
        </div>
      </section>

      {/* Conteúdo */}
      <article className="max-w-3xl mx-auto px-4 py-14">
        {artigo.conteudo && artigo.conteudo.length > 0 ? (
          <div className="prose prose-lg prose-headings:text-[#1B3A6B] prose-a:text-[#F26522] prose-blockquote:border-[#F26522] max-w-none">
            <PortableText
              value={artigo.conteudo as Parameters<typeof PortableText>[0]['value']}
              components={ptComponents}
            />
          </div>
        ) : (
          <p className="text-gray-400 text-center py-10">Conteúdo completo ainda não publicado.</p>
        )}

        <div className="mt-14 pt-8 border-t border-[#eef2f8]">
          <Link href="/blog"
            className="inline-flex items-center gap-2 font-semibold transition-colors"
            style={{ color: cor }}>
            <ArrowLeft size={16} /> Ver todos os artigos
          </Link>
        </div>
      </article>
    </main>
  )
}
