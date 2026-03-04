import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notícias | ASESP',
  description: 'Acompanhe as últimas notícias da ASESP e da comunidade surda paulista.',
}

// Placeholder — será substituído por dados do Sanity CMS
const noticias = [
  { slug: 'exemplo-1', titulo: 'ASESP participa de evento nacional de inclusão', categoria: 'Eventos', data: '01/03/2026' },
  { slug: 'exemplo-2', titulo: 'Nova lei garante intérpretes de Libras em audiências públicas', categoria: 'Legislação', data: '20/02/2026' },
  { slug: 'exemplo-3', titulo: 'Oficina de Libras para iniciantes — inscrições abertas', categoria: 'Educação', data: '15/02/2026' },
  { slug: 'exemplo-4', titulo: 'ASESP conquista acessibilidade em transporte público de SP', categoria: 'Conquistas', data: '10/02/2026' },
  { slug: 'exemplo-5', titulo: 'Dia Nacional do Surdo: programação especial em São Paulo', categoria: 'Eventos', data: '26/09/2025' },
  { slug: 'exemplo-6', titulo: 'Parceria com universidade amplia vagas para surdos', categoria: 'Educação', data: '15/09/2025' },
]

export default function NoticiasPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8">Notícias</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {noticias.map((noticia) => (
          <li key={noticia.slug}>
            <a
              href={`/noticias/${noticia.slug}`}
              className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label={`Leia: ${noticia.titulo}`}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{noticia.categoria}</Badge>
                  <CardTitle className="text-base leading-snug">{noticia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{noticia.data}</p>
                </CardContent>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
