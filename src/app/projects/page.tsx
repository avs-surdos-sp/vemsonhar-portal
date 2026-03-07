import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Star, Leaf, BookOpen, Music, Handshake, Heart, Megaphone, type LucideIcon } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Projetos e Núcleos | ASESP',
  description:
    'Conheça os projetos e núcleos da ASESP — ações voltadas à comunidade surda paulista em todas as fases da vida.',
}


const iconMap: Record<string, LucideIcon> = {
  Users, Star, Leaf, BookOpen, Music, Handshake, Heart, Megaphone,
}

interface Projeto {
  _id: string
  titulo: string
  tag: string
  icone?: string
  cor: string
  objetivo: string
  publico: string
  resultados: string[]
  apoio: string
}

const projetosEstaticos: Projeto[] = [
  {
    _id: 'est-1',
    titulo: 'Núcleo dos Idosos Surdos',
    tag: 'Cuidado',
    icone: 'Users',
    cor: '#00B4D8',
    objetivo:
      'Oferecer atenção especializada, atividades de convivência e suporte social para idosos surdos do Estado de São Paulo, promovendo dignidade, pertencimento e qualidade de vida.',
    publico: 'Pessoas surdas com 60 anos ou mais, residentes no Estado de São Paulo.',
    resultados: [
      'Encontros mensais de convivência e lazer',
      'Atendimento em Libras por profissionais capacitados',
      'Apadrinhamento por doadores da comunidade',
      'Integração com familiares e cuidadores',
    ],
    apoio: 'Doe R$40 e financie a alimentação de um encontro. Apadrinhe um idoso surdo.',
  },
  {
    _id: 'est-2',
    titulo: 'Núcleo das Mulheres Surdas',
    tag: 'Empoderamento',
    icone: 'Star',
    cor: '#F26522',
    objetivo:
      'Criar um espaço seguro de fortalecimento e protagonismo feminino na comunidade surda, abordando temas como saúde, direitos, mercado de trabalho e violência doméstica.',
    publico: 'Mulheres surdas e com deficiência auditiva de todas as idades.',
    resultados: [
      'Rodas de conversa e grupos de apoio em Libras',
      'Oficinas de capacitação profissional',
      'Orientação jurídica e de saúde',
      'Articulação com redes de proteção à mulher',
    ],
    apoio: 'Apoie com doação ou como voluntária. Empresas podem patrocinar as oficinas.',
  },
  {
    _id: 'est-3',
    titulo: 'Núcleo das Crianças, Adolescentes e Jovens Surdos',
    tag: 'Educação',
    icone: 'Leaf',
    cor: '#1565C0',
    objetivo:
      'Promover o desenvolvimento educacional, cultural e social de crianças, adolescentes e jovens surdos, reforçando identidade, Libras e perspectivas de futuro.',
    publico: 'Crianças (0–12), adolescentes (13–17) e jovens surdos (18–29).',
    resultados: [
      'Atividades lúdicas e pedagógicas em Libras',
      'Reforço escolar bilíngue',
      'Grupos de protagonismo juvenil',
      'Preparação para o mercado de trabalho',
    ],
    apoio: 'Seja voluntário educacional ou doe materiais pedagógicos.',
  },
  {
    _id: 'est-4',
    titulo: 'Cursos e Oficinas de Formação',
    tag: 'Formação',
    icone: 'BookOpen',
    cor: '#1B3A6B',
    objetivo:
      'Oferecer cursos de Libras e formação profissional ministrados por instrutores surdos, ampliando a comunicação entre surdos e ouvintes e qualificando a comunidade.',
    publico: 'Comunidade em geral — surdos, ouvintes, familiares e profissionais.',
    resultados: [
      'Cursos básico, intermediário e avançado de Libras',
      'Formação de intérpretes comunitários',
      'Oficinas de arte, culinária e artesanato',
      'Certificados reconhecidos pela ASESP',
    ],
    apoio: 'Inscreva-se em um curso ou ofereça patrocínio para bolsas.',
  },
  {
    _id: 'est-5',
    titulo: 'Eventos Culturais',
    tag: 'Cultura',
    icone: 'Music',
    cor: '#F26522',
    objetivo:
      'Celebrar e difundir a cultura surda por meio de festivais, shows, exposições e datas comemorativas, promovendo visibilidade e orgulho identitário.',
    publico: 'Toda a comunidade — surdos, ouvintes, familiares e aliados.',
    resultados: [
      'Festa Junina Surda anual',
      'Semana da Língua Brasileira de Sinais (Setembro Azul)',
      'Exposições de arte surda',
      'Shows e apresentações culturais em Libras',
    ],
    apoio: 'Patrocine um evento ou seja voluntário na organização.',
  },
  {
    _id: 'est-6',
    titulo: 'Parcerias Institucionais',
    tag: 'Institucional',
    icone: 'Handshake',
    cor: '#1B3A6B',
    objetivo:
      'Articular parcerias com escolas bilíngues, universidades, empresas e órgãos públicos para ampliar o alcance e o impacto das ações da ASESP na sociedade.',
    publico: 'Instituições de ensino, empresas, órgãos públicos e entidades da sociedade civil.',
    resultados: [
      'Acordos com escolas bilíngues para surdos',
      'Projetos de extensão com universidades',
      'Programas de inclusão no mercado de trabalho',
      'Participação em conselhos municipais e estaduais',
    ],
    apoio: 'Entre em contato para firmar uma parceria com a ASESP.',
  },
]

function getBgLight(cor: string) {
  const map: Record<string, string> = {
    '#00B4D8': '#e6f9fd',
    '#F26522': '#fef2ec',
    '#1565C0': '#e8eefb',
    '#1B3A6B': '#eaeff7',
  }
  return map[cor] ?? `${cor}18`
}

export default function ProjetosPage() {
  const projetos = projetosEstaticos

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Handshake size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">O que fazemos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Projetos e Núcleos
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ações concretas voltadas à comunidade surda paulista — em todas as fases da vida e em múltiplas dimensões sociais.
          </p>
          <LibrasVideo title="Projetos e Núcleos da ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {projetos.map((p, i) => {
            const Icon: LucideIcon = (p.icone && iconMap[p.icone]) ? iconMap[p.icone] : Users
            const bgLight = getBgLight(p.cor)
            return (
              <article
                key={p._id}
                aria-labelledby={`projeto-${i}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="h-1.5" style={{ background: p.cor }} />

                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: bgLight }}
                    >
                      <Icon size={22} style={{ color: p.cor }} />
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: `${p.cor}18`, color: p.cor }}
                      >
                        {p.tag}
                      </span>
                      <h2
                        id={`projeto-${i}`}
                        className="text-lg font-extrabold text-[#1B3A6B] mt-1 leading-tight"
                      >
                        {p.titulo}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">{p.objetivo}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl bg-[#F5F7FA] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Público-alvo
                      </p>
                      <p className="text-gray-600 text-base leading-snug">{p.publico}</p>
                    </div>
                    <div className="rounded-xl bg-[#F5F7FA] p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Resultados
                      </p>
                      <ul className="space-y-1.5">
                        {p.resultados.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-base text-gray-600">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: p.cor }}
                              aria-hidden="true"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    style={{ background: bgLight }}
                  >
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: p.cor }}
                      >
                        Como apoiar
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed">{p.apoio}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 text-base font-bold px-6 py-2.5 rounded-full text-white transition-opacity hover:opacity-90 text-center"
                      style={{ background: p.cor }}
                    >
                      Quero apoiar
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA final */}
        <section
          className="mt-16 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #F26522, #d4501a)' }}
          aria-labelledby="cta-projetos"
        >
          <h2 id="cta-projetos" className="text-2xl font-extrabold text-white mb-3">
            Apoie os nossos projetos
          </h2>
          <p className="text-white/80 mb-7 max-w-md mx-auto text-base leading-relaxed">
            Sua doação financia encontros, cursos e eventos que transformam vidas na comunidade surda paulista.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donations"
              className="bg-white text-[#F26522] font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              💙 Fazer uma doação
            </Link>
            <Link
              href="/how-to-join"
              className="bg-white/15 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/25 transition-colors"
            >
              🤟 Seja Associado
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
