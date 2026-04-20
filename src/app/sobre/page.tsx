import { Metadata } from 'next'
import { Globe, GraduationCap, AccessibilityIcon, CheckCircle2, Heart, Shield, Eye, Star, Zap, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Sobre | ASESP',
  description:
    'Conheça a história, missão e valores da ASESP — Associação de Surdos do Estado de São Paulo.',
}

const valores = [
  { titulo: 'Inclusão e equidade',            icon: Users,            color: '#1B3A6B' },
  { titulo: 'Respeito à identidade surda',    icon: BookOpen,         color: '#00B4D8' },
  { titulo: 'Defesa dos direitos humanos',    icon: Shield,           color: '#F26522' },
  { titulo: 'Ética e transparência',          icon: Eye,              color: '#1B3A6B' },
  { titulo: 'Compromisso social',             icon: Heart,            color: '#F26522' },
  { titulo: 'Valorização da comunidade surda',icon: Star,             color: '#00B4D8' },
  { titulo: 'Acessibilidade universal',       icon: AccessibilityIcon,color: '#1B3A6B' },
  { titulo: 'Protagonismo e autonomia',       icon: Zap,              color: '#F26522' },
]

const timeline = [
  { titulo: 'Fundação', evento: 'Criação da ASESP-VS com foco na organização da comunidade surda e defesa de direitos.' },
  { titulo: 'Primeiros Projetos', evento: 'Implementação de ações sociais voltadas à inclusão e acessibilidade em Libras.' },
  { titulo: 'Expansão Institucional', evento: 'Ampliação das atividades com projetos educacionais, culturais e eventos comunitários.' },
  { titulo: 'Fortalecimento de Parcerias', evento: 'Estabelecimento de cooperação com instituições públicas e privadas.' },
  { titulo: 'Núcleos Temáticos', evento: 'Implantação de iniciativas específicas: Núcleo dos Idosos Surdos, Mulheres Surdas e futuramente outros Núcleos voltados à Comunidade Surda do Estado de São Paulo.' },
  { titulo: 'Políticas Públicas', evento: 'Participação ativa em debates, fóruns e construção de políticas voltadas à comunidade surda.' },
  { titulo: 'Consolidação Institucional', evento: 'Estruturação administrativa, atualização do Estatuto Social e ampliação do impacto social.' },
  { titulo: 'Atualidade', evento: 'ASESP-VS como referência na promoção da inclusão social, acessibilidade e protagonismo da pessoa surda no Estado de São Paulo.' },
]

export default function SobrePage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #00B4D8, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <Heart size={15} className="text-[#00B4D8]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Nossa história</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sobre a ASESP
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Representando e defendendo os direitos da comunidade surda paulista desde 2017.
          </p>
          <LibrasVideo title="Quem Somos — ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* História */}
        <section aria-labelledby="historia-titulo">
          {/* Texto introdutório */}
          {/* Texto introdutório */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gray-200" />
              <p className="text-[#F26522] text-xs font-extrabold uppercase tracking-widest shrink-0">História da ASESP – Vem Sonhar</p>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <h2 id="historia-titulo" className="text-2xl font-extrabold text-[#1B3A6B] text-center mb-8 tracking-tight">
              Uma associação nascida da mobilização surda
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600 text-base leading-relaxed">
              <div className="space-y-4">
                <p>
                  A Associação de Surdos do Estado de São Paulo – Vem Sonhar (ASESP-VS) surgiu a partir
                  da mobilização de lideranças da comunidade surda comprometidas com a promoção da
                  inclusão social, acessibilidade comunicacional e valorização da identidade surda.
                </p>
                <p>
                  Fundada em <span className="text-[#1B3A6B] font-bold">12 de novembro de 2017</span>, com o propósito
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
                  Ao longo de sua trajetória, a ASESP-VS vem expandindo suas ações por meio de parcerias
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
              const accent = i % 2 === 0 ? '#1B3A6B' : '#F26522'
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
                    <div className={`bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition-shadow w-full ${isLeft ? 'text-right' : ''}`}>
                      <p className="text-xs font-extrabold uppercase tracking-widest mb-1" style={{ color: accent }}>
                        {item.titulo}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.evento}</p>
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
          <p className="section-label text-[#00B4D8] mb-3">Propósito</p>
          <h2 id="missao-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Missão e Visão
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-7 bg-[#EAF0FA] border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#1B3A6B] flex items-center justify-center mb-4">
                <CheckCircle2 size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#1B3A6B] mb-3">Missão</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Promover a inclusão social, educacional e cultural da comunidade surda, garantindo
                acessibilidade, defesa de direitos e fortalecimento da identidade linguística e
                cultural por meio da Libras.
              </p>
            </div>
            <div className="rounded-2xl p-7 bg-[#FEF2EC] border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center mb-4">
                <Globe size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#1B3A6B] mb-3">Visão</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Ser reconhecida como uma instituição de excelência e referência estadual de São Paulo
                na promoção de políticas inclusivas, inovação social e desenvolvimento humano da
                comunidade surda.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section aria-labelledby="valores-titulo">
          <p className="section-label text-[#F26522] mb-3">O que nos guia</p>
          <h2 id="valores-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Nossos Valores
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 list-none">
            {valores.map((v) => {
              const Icon = v.icon
              return (
                <li
                  key={v.titulo}
                  className="group border border-gray-100 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-200 bg-white flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${v.color}18` }}
                  >
                    <Icon size={18} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-semibold text-[#1B3A6B] text-sm leading-snug">{v.titulo}</h3>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Finalidades Institucionais */}
        <section aria-labelledby="finalidades-titulo">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
            <div>
              <p className="section-label text-[#00B4D8] mb-2">Estatuto Social</p>
              <h2 id="finalidades-titulo" className="text-2xl font-extrabold text-[#1B3A6B] tracking-tight">
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
              const accent = i % 3 === 0 ? '#1B3A6B' : i % 3 === 1 ? '#F26522' : '#00B4D8'
              return (
                <li key={i} className="flex items-center gap-6 py-4 group hover:bg-gray-50 px-3 rounded-xl transition-colors">
                  <span
                    className="text-4xl font-extrabold w-12 text-right shrink-0 leading-none tabular-nums"
                    style={{ color: accent }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-px h-8 shrink-0 rounded-full" style={{ background: `${accent}40` }} aria-hidden="true" />
                  <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #1B3A6B, #1565C0)' }}>
          <h2 className="text-2xl font-extrabold text-white mb-3">Faça parte da ASESP</h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto">
            Associe-se e contribua com a comunidade surda do Estado de São Paulo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/como-se-associar"
              className="bg-[#F26522] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4501a] transition-colors hover:shadow-lg"
            >
              🤟 Associar-se
            </Link>
            <Link
              href="/doacoes"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              💙 Fazer uma doação
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
