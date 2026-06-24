import { sanityClient } from '@/lib/sanity'
import NewsClient, { type Noticia } from './NewsClient'

const query = `*[_type == "noticia"] | order(dataPublicacao desc) {
  _id,
  titulo,
  slug,
  categoria,
  dataPublicacao,
  resumo,
  imagemCapa
}`

export const revalidate = 60

export default async function NoticiasPage() {
  const noticias: Noticia[] = await sanityClient.fetch(query)

  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }} aria-labelledby="noticias-titulo">
        <h1 id="noticias-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">Notícias</h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">Acompanhe as novidades da ASESP e da comunidade surda paulista.</p>
      </section>

      <NewsClient noticias={noticias} />
    </main>
  )
}
