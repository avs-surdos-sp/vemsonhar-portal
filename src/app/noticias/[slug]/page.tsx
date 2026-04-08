import { sanityClient, urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'

interface Noticia {
  _id: string
  titulo: string
  slug: { current: string }
  categoria: string
  dataPublicacao: string
  resumo: string
  imagemCapa?: { asset: { _ref: string }; alt?: string }
  conteudo?: unknown[]
}

const categoriaLabels: Record<string, string> = {
  noticia: 'Notícia',
  evento: 'Evento',
  comunicado: 'Comunicado',
  projeto: 'Projeto',
}

const categoriaColors: Record<string, string> = {
  noticia: '#1B3A6B',
  evento: '#F26522',
  comunicado: '#00B4D8',
  projeto: '#1565C0',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanityClient.fetch(
    `*[_type == "noticia"]{ slug }`
  )
  return slugs.map((n) => ({ slug: n.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const noticia: Noticia | null = await sanityClient.fetch(
    `*[_type == "noticia" && slug.current == $slug][0]{ titulo, resumo }`,
    { slug }
  )
  if (!noticia) return {}
  return { title: `${noticia.titulo} — ASESP`, description: noticia.resumo }
}

export const revalidate = 60

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params
  const noticia: Noticia | null = await sanityClient.fetch(
    `*[_type == "noticia" && slug.current == $slug][0]{
      _id, titulo, slug, categoria, dataPublicacao, resumo, imagemCapa, conteudo
    }`,
    { slug }
  )

  if (!noticia) notFound()

  const cor = categoriaColors[noticia.categoria] ?? '#1B3A6B'
  const label = categoriaLabels[noticia.categoria] ?? noticia.categoria

  return (
    <main>
      <section
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${cor}ee 0%, #0d2347 100%)` }}
        aria-labelledby="noticia-titulo"
      >
        {noticia.imagemCapa && (
          <Image
            src={urlFor(noticia.imagemCapa).width(1200).height(500).url()}
            alt={noticia.imagemCapa.alt ?? noticia.titulo}
            fill
            className="object-cover opacity-20"
            priority
          />
        )}
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Voltar às notícias
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-sm font-bold px-3 py-1 rounded-full text-white"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              <Tag size={12} className="inline mr-1" aria-hidden="true" />
              {label}
            </span>
            <span className="text-white/60 text-sm flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" />
              {formatDate(noticia.dataPublicacao)}
            </span>
          </div>

          <h1 id="noticia-titulo" className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {noticia.titulo}
          </h1>
          {noticia.resumo && (
            <p className="text-white/70 text-lg leading-relaxed">{noticia.resumo}</p>
          )}
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14">
        {noticia.conteudo && noticia.conteudo.length > 0 ? (
          <div className="prose prose-lg prose-headings:text-[#1B3A6B] prose-a:text-[#F26522] max-w-none">
            <PortableText value={noticia.conteudo as Parameters<typeof PortableText>[0]['value']} />
          </div>
        ) : (
          <p className="text-gray-400 text-center py-10">Conteúdo completo ainda não publicado.</p>
        )}

        <div className="mt-14 pt-8 border-t border-[#eef2f8]">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 font-semibold transition-colors"
            style={{ color: cor }}
          >
            <ArrowLeft size={16} /> Ver todas as notícias
          </Link>
        </div>
      </article>
    </main>
  )
}
