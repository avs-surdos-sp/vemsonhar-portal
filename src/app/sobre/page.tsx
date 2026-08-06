import { Metadata } from 'next'
import { Globe, GraduationCap, AccessibilityIcon, CheckCircle2, Heart, Shield, Eye, Star, Zap, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre | ASESP',
  description:
    'Conheça a história, missão e valores da ASESP — Associação de Surdos do Estado de São Paulo.',
}

const valores = [
  { titulo: 'Inclusão e equidade',            icon: Users,            color: '#14387F' },
  { titulo: 'Respeito à identidade surda',    icon: BookOpen,         color: '#0069B4' },
  { titulo: 'Defesa dos direitos humanos',    icon: Shield,           color: '#F7931E' },
  { titulo: 'Ética e transparência',          icon: Eye,              color: '#14387F' },
  { titulo: 'Compromisso social',             icon: Heart,            color: '#F7931E' },
  { titulo: 'Valorização da comunidade surda',icon: Star,             color: '#0069B4' },
  { titulo: 'Acessibilidade universal',       icon: AccessibilityIcon,color: '#14387F' },
  { titulo: 'Protagonismo e autonomia',       icon: Zap,              color: '#F7931E' },
]

const timeline = [
  { titulo: 'Fundação', evento: 'Criação da AVS com foco na organização da comunidade surda e defesa de direitos.' },
  { titulo: 'Primeiros Projetos', evento: 'Implementação de ações sociais voltadas à inclusão e acessibilidade em Libras.' },
  { titulo: 'Expansão Institucional', evento: 'Ampliação das atividades com projetos educacionais, culturais e eventos comunitários.' },
  { titulo: 'Fortalecimento de Parcerias', evento: 'Estabelecimento de cooperação com instituições públicas e privadas.' },
  { titulo: 'Núcleos Temáticos', evento: 'Implantação de iniciativas específicas: Núcleo dos Idosos Surdos, Mulheres Surdas e futuramente outros Núcleos voltados à Comunidade Surda do Estado de São Paulo.' },
  { titulo: 'Políticas Públicas', evento: 'Participação ativa em debates, fóruns e construção de políticas voltadas à comunidade surda.' },
  { titulo: 'Consolidação Institucional', evento: 'Estruturação administrativa, atualização do Estatuto Social e ampliação do impacto social.' },
  { titulo: 'Atualidade', evento: 'AVS como referência na promoção da inclusão social, acessibilidade e protagonismo da pessoa surda no Estado de São Paulo.' },
]

export default function SobrePage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Sobre a ASESP
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Representando e defendendo os direitos da comunidade surda desde 2017.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* História */}
        <section aria-labelledby="historia-titulo">
          {/* Texto introdutório */}
          {/* Texto introdutório */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gray-200" />
              <p className="text-[#F7931E] text-xs font-extrabold uppercase tracking-widest shrink-0">História da ASESP – Vem Sonhar</p>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <h2 id="historia-titulo" className="text-2xl font-extrabold text-[#14387F] text-center mb-6 tracking-tight">
              Uma associação nascida da mobilização surda
            </h2>

            {/* Logotipo AVS — destaque visual */}
            <div className="flex justify-center mb-10">
              <Image
                src="/logo-avs.svg"
                alt="Logotipo da AVS — Associação de Surdos do Estado de São Paulo"
                width={220}
                height={220}
                className="h-32 sm:h-40 w-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-gray-800 text-base leading-relaxed text-left md:text-justify">
              <div className="space-y-4">
                <p>
                  A Associação de Surdos do Estado de São Paulo – Vem Sonhar (AVS) surgiu a partir
                  da mobilização de lideranças da comunidade surda comprometidas com a promoção da
                  inclusão social, acessibilidade comunicacional e valorização da identidade surda.
                </p>
                <p>
                  Fundada em <span className="text-[#14387F] font-bold">12 de novembro de 2017</span>, com o propósito
                  de ampliar oportunidades para pessoas surdas, especialmente em situação de vulnerabilidade
                  social, a ASESP consolidou-se como entidade de referência no desenvolvimento de projetos
                  educacionais, culturais, sociais e de cidadania, em especial aos Idosos Surdos.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Desde sua criação, a associação tem atuado de forma ativa na defesa de direitos,
                  no fortalecimento da Língua Brasileira de Sinais (Libras) e na construção de espaços
                  inclusivos, com atenção especial a públicos historicamente negligenciados, como
                  idosos surdos, mulheres surdas e jovens em formação.
                </p>
                <p>
                  Ao longo de sua trajetória, a AVS vem expandindo suas ações por meio de parcerias
                  institucionais, participação em políticas públicas e eventos que promovem visibilidade,
                  protagonismo e empoderamento da comunidade surda.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline alternada */}
          <ol className="list-none">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              const accent = i % 2 === 0 ? '#14387F' : '#F7931E'
              const isFirst = i === 0
              const isLast = i === timeline.length - 1
              return (
                <li key={item.titulo} className={`flex gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>

                  {/* Card + braço horizontal */}
                  <div className={`flex-1 flex items-center py-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'} gap-0`}
                    style={{ display: 'flex', flexDirection: isLeft ? 'row-reverse' : 'row', alignItems: 'center' }}>
                    {/* Braço horizontal */}
                    <div className="hidden md:block h-px w-8 shrink-0" style={{ background: accent }} aria-hidden="true" />
                    {/* Card */}
                    <div
                      className={`timeline-card border-2 border-gray-100 rounded-xl px-6 py-5 transition-all duration-200 w-full ${isLeft ? 'text-right' : ''}`}
                      style={{ ['--accent' as unknown as string]: accent } as React.CSSProperties}
                    >
                      <p className="timeline-title text-xs font-extrabold uppercase tracking-widest mb-1">
                        {item.titulo}
                      </p>
                      <p className="timeline-text text-gray-800 text-sm leading-relaxed">{item.evento}</p>
                    </div>
                  </div>

                  {/* Coluna central: linha ↕ + círculo */}
                  <div className="hidden md:flex flex-col items-center w-10 shrink-0">
                    <div className="w-px flex-1" style={{ background: isFirst ? 'transparent' : '#e5e7eb' }} aria-hidden="true" />
                    <div
                      className="w-10 h-10 rounded-full text-white text-xs font-extrabold flex items-center justify-center shrink-0 shadow"
                      style={{ background: accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="w-px flex-1" style={{ background: isLast ? 'transparent' : '#e5e7eb' }} aria-hidden="true" />
                  </div>

                  {/* Mobile: círculo inline */}
                  <div
                    className="md:hidden w-10 h-10 rounded-full text-white text-xs font-extrabold flex items-center justify-center shrink-0 mt-4 shadow"
                    style={{ background: accent }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Espaço vazio do outro lado */}
                  <div className="flex-1 hidden md:block" />
                </li>
              )
            })}
          </ol>
        </section>

        {/* Missão e Visão */}
        <section aria-labelledby="missao-titulo">
          <p className="section-label text-[#0069B4] mb-3">Propósito</p>
          <h2 id="missao-titulo" className="text-2xl font-extrabold text-[#14387F] mb-8 tracking-tight">
            Missão e Visão
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-7 bg-[#EAF0FA] hover:bg-[#C4D9FF] border border-gray-100 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#14387F] flex items-center justify-center mb-4">
                <CheckCircle2 size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#14387F] mb-3">Missão</h3>
              <p className="text-gray-800 text-base leading-relaxed">
                Promover a inclusão social, educacional e cultural da comunidade surda, garantindo
                acessibilidade, defesa de direitos e fortalecimento da identidade linguística e
                cultural por meio da Libras.
              </p>
            </div>
            <div className="rounded-2xl p-7 bg-[#FEF2EC] hover:bg-[#FEC7A7] border border-gray-100 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#F7931E] flex items-center justify-center mb-4">
                <Globe size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#14387F] mb-3">Visão</h3>
              <p className="text-gray-800 text-base leading-relaxed">
                Ser reconhecida como uma instituição de excelência e referência estadual de São Paulo
                na promoção de políticas inclusivas, inovação social e desenvolvimento humano da
                comunidade surda.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section aria-labelledby="valores-titulo">
          <p className="section-label text-[#F7931E] mb-3">O que nos guia</p>
          <h2 id="valores-titulo" className="text-2xl font-extrabold text-[#14387F] mb-8 tracking-tight">
            Nossos Valores
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 list-none">
            {valores.map((v) => {
              const Icon = v.icon
              return (
                <li
                  key={v.titulo}
                  className="group border border-gray-100 rounded-xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 bg-white flex items-center gap-3"
                >
                  <div
                    className="valor-icon-wrap w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${v.color}18` }}
                  >
                    <Icon size={18} className="valor-icon" style={{ color: v.color }} />
                  </div>
                  <h3 className="font-semibold text-[#14387F] text-sm leading-snug">{v.titulo}</h3>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Finalidades Institucionais */}
        <section aria-labelledby="finalidades-titulo">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <div>
              <p className="section-label text-[#0069B4] mb-2">Estatuto Social</p>
              <h2 id="finalidades-titulo" className="text-2xl font-extrabold text-[#14387F] tracking-tight">
                Finalidades Institucionais
              </h2>
            </div>
            <span className="text-xs text-gray-400 font-medium">12 finalidades previstas no Estatuto Social</span>
          </div>
          <ul className="divide-y divide-gray-100 list-none">
            {[
              'Promover a inclusão social e a garantia de direitos das pessoas surdas.',
              'Desenvolver ações nas áreas de educação, cultura, saúde, assistência social e cidadania.',
              'Incentivar o uso, ensino e difusão da Língua Brasileira de Sinais (Libras).',
              'Oferecer suporte e acolhimento a grupos específicos, como mulheres, jovens e idosos surdos.',
              'Atuar na formação profissional e valorização da pessoa surda no mercado de trabalho.',
              'Promover atividades esportivas, culturais e de lazer acessíveis.',
              'Desenvolver projetos de acessibilidade comunicacional em instituições públicas e privadas.',
              'Prestar orientação jurídica e social à comunidade surda.',
              'Estabelecer parcerias com órgãos públicos, privados e organizações da sociedade civil.',
              'Fomentar a pesquisa, produção de conhecimento e inovação em acessibilidade.',
              'Defender políticas públicas inclusivas e atuar no controle social.',
              'Promover a cidadania, autonomia e protagonismo da pessoa surda.',
            ].map((item, i) => {
              const accent = i % 3 === 0 ? '#14387F' : i % 3 === 1 ? '#F7931E' : '#0069B4'
              return (
                <li
                  key={i}
                  className="finalidade-row flex items-center gap-6 py-4 group hover:bg-[#D6D6D6] px-3 rounded-xl transition-colors"
                  style={{ ['--accent' as unknown as string]: accent } as React.CSSProperties}
                >
                  <span
                    className="finalidade-number text-4xl font-extrabold w-12 text-right shrink-0 leading-none tabular-nums"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="finalidade-divider w-px h-8 shrink-0 rounded-full" aria-hidden="true" />
                  <p className="finalidade-text text-gray-900 text-base leading-relaxed">{item}</p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #F7931E, #C27215)' }}>
          <h2 className="text-2xl font-extrabold text-white mb-3">Apoie a ASESP</h2>
          <p className="text-white/80 mb-7 max-w-md mx-auto">
            Sua contribuição fortalece a comunidade surda do Estado de São Paulo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/doacoes"
              className="group inline-flex items-center gap-2 bg-[#F7931E] border-2 border-white text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Heart
                size={15}
                fill="currentColor"
                className="text-white group-hover:text-red-500 transition-colors duration-200"
              />
              Quero apoiar
            </Link>
            <Link
              href="/contato"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Falar conosco
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
