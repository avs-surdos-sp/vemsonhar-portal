import { Metadata } from 'next'
import { Globe, GraduationCap, AccessibilityIcon, CheckCircle2, Heart } from 'lucide-react'
import Link from 'next/link'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Sobre | ASESP',
  description:
    'Conheça a história, missão e valores da ASESP — Associação dos Surdos do Estado de São Paulo.',
}

const valores = [
  {
    titulo: 'Inclusão',
    descricao: 'Lutamos por uma sociedade que reconhece e inclui a diversidade da comunidade surda em todos os espaços.',
    icon: Globe,
    color: '#1B3A6B',
  },
  {
    titulo: 'Acessibilidade',
    descricao: 'Defendemos o direito de acesso à informação, educação e serviços públicos em Libras.',
    icon: AccessibilityIcon,
    color: '#00B4D8',
  },
  {
    titulo: 'Identidade',
    descricao: 'Valorizamos a cultura surda, a Língua Brasileira de Sinais e a identidade única da nossa comunidade.',
    icon: GraduationCap,
    color: '#F26522',
  },
]

const timeline = [
  { ano: '2012', evento: 'Fundação da ASESP com foco em representação da comunidade surda paulista.' },
  { ano: '2015', evento: 'Criação do Núcleo dos Idosos Surdos, pioneiro no Estado de SP.' },
  { ano: '2018', evento: 'Lançamento dos Cursos em Libras abertos à comunidade ouvinte.' },
  { ano: '2021', evento: 'Núcleo das Mulheres Surdas e Núcleo da Juventude Surda formalizados.' },
  { ano: '2024', evento: 'Participação ativa no Conselho Municipal de Direitos da Pessoa com Deficiência.' },
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
            Representando e defendendo os direitos da comunidade surda paulista desde 2012.
          </p>
          <LibrasVideo title="Quem Somos — ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* História */}
        <section aria-labelledby="historia-titulo">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label text-[#F26522] mb-3">Nossa história</p>
              <h2 id="historia-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-5 tracking-tight">
                Mais de uma década de luta e conquistas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                A ASESP — Associação dos Surdos do Estado de São Paulo — foi fundada com o
                propósito de representar a comunidade surda paulista, promovendo seus direitos,
                cultura e identidade. Ao longo de mais de uma década de atuação, construímos
                pontes entre a comunidade surda e a sociedade, conquistando avanços importantes
                em educação, trabalho e acessibilidade.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Nossa atuação abrange todo o Estado de São Paulo, com programas e projetos que
                impactam diretamente a vida de centenas de famílias surdas, promovendo dignidade,
                pertencimento e protagonismo social.
              </p>
            </div>
            {/* Timeline */}
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.ano} className="flex items-start gap-4">
                  <div className="shrink-0 flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold"
                      style={{ background: i % 2 === 0 ? '#1B3A6B' : '#F26522' }}
                    >
                      {item.ano.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-6 bg-gray-200 mt-1" />
                    )}
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-bold text-[#F26522] mb-0.5">{item.ano}</p>
                    <p className="text-gray-600 text-base leading-snug">{item.evento}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                Defender e promover os direitos da comunidade surda no Estado de São Paulo,
                garantindo inclusão social, educação bilíngue e acessibilidade de qualidade
                em todos os espaços da vida pública.
              </p>
            </div>
            <div className="rounded-2xl p-7 bg-[#FEF2EC] border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center mb-4">
                <Globe size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#1B3A6B] mb-3">Visão</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Ser referência nacional na defesa dos direitos das pessoas surdas, contribuindo
                para uma sociedade plenamente inclusiva onde a diversidade linguística e cultural
                seja reconhecida e celebrada.
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
          <ul className="grid md:grid-cols-3 gap-6 list-none">
            {valores.map((v) => {
              const Icon = v.icon
              return (
                <li
                  key={v.titulo}
                  className="group border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200 bg-white"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: `${v.color}18` }}
                  >
                    <Icon size={20} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-bold text-[#1B3A6B] mb-2 text-lg">{v.titulo}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{v.descricao}</p>
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
              href="/how-to-join"
              className="bg-[#F26522] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4501a] transition-colors hover:shadow-lg"
            >
              🤟 Associar-se
            </Link>
            <Link
              href="/donations"
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
