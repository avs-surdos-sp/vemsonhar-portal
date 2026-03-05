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
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
        aria-labelledby="noticias-titulo"
      >
        <div aria-hidden="true" className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="section-label text-[#00B4D8] mb-3">Fique por dentro</p>
          <h1 id="noticias-titulo" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Notícias</h1>
          <p className="text-white/60 text-lg">Acompanhe as novidades da ASESP e da comunidade surda paulista.</p>
        </div>
      </section>

      <NewsClient noticias={noticias} />
    </main>
  )
}
