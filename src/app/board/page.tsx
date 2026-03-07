import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Shield, BookOpen, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diretoria | ASESP',
  description:
    'Conheça a estrutura administrativa da ASESP — diretoria, conselhos e núcleos temáticos.',
}

const diretoria = [
  {
    cargo: 'Presidência',
    nome: 'A definir',
    bio: 'Responsável pela representação institucional da ASESP junto a órgãos públicos, parceiros e comunidade surda do Estado de São Paulo.',
    color: '#1B3A6B',
  },
  {
    cargo: 'Vice-Presidência',
    nome: 'A definir',
    bio: 'Auxilia a presidência nas decisões estratégicas e assume a gestão em ausências ou impedimentos do presidente.',
    color: '#1565C0',
  },
  {
    cargo: 'Secretaria',
    nome: 'A definir',
    bio: 'Responsável pela gestão documental, atas de reunião, comunicações oficiais e registros institucionais da associação.',
    color: '#00B4D8',
  },
  {
    cargo: 'Diretoria de Marketing e Comunicação',
    nome: 'A definir',
    bio: 'Cuida da comunicação institucional, redes sociais, identidade visual e divulgação das ações da ASESP.',
    color: '#F26522',
  },
  {
    cargo: 'Diretoria de Núcleos Temáticos',
    nome: 'A definir',
    bio: 'Coordena os núcleos de idosos, mulheres, juventude e demais projetos sociais da associação.',
    color: '#00B4D8',
  },
  {
    cargo: 'Diretoria de Tecnologia da Informação',
    nome: 'A definir',
    bio: 'Responsável pela infraestrutura digital da ASESP, incluindo o portal institucional e o sistema de carteirinhas.',
    color: '#1565C0',
  },
  {
    cargo: 'Diretoria Financeira',
    nome: 'A definir',
    bio: 'Gerencia as finanças da ASESP, controla receitas e despesas, e garante a prestação de contas à comunidade.',
    color: '#1B3A6B',
  },
]

const conselhos = [
  {
    nome: 'Conselho Fiscal',
    icon: Shield,
    color: '#1B3A6B',
    bgLight: '#eaeff7',
    desc: 'Responsável por fiscalizar a gestão financeira da ASESP, examinar as contas e relatórios da diretoria e emitir pareceres sobre a prestação de contas anual.',
    membros: ['Membro 1 — a definir', 'Membro 2 — a definir', 'Membro 3 — a definir'],
  },
  {
    nome: 'Conselho Deliberativo',
    icon: BookOpen,
    color: '#F26522',
    bgLight: '#fef2ec',
    desc: 'Órgão máximo de deliberação da ASESP, responsável por aprovar o planejamento anual, alterações estatutárias e decisões estratégicas da associação.',
    membros: ['Membro 1 — a definir', 'Membro 2 — a definir', 'Membro 3 — a definir'],
  },
]

const nucleos = [
  { nome: 'Núcleo dos Idosos Surdos', icon: Users, color: '#00B4D8', bgLight: '#e6f9fd', href: '/projects' },
  { nome: 'Núcleo das Mulheres Surdas', icon: Star, color: '#F26522', bgLight: '#fef2ec', href: '/projects' },
  { nome: 'Núcleo da Juventude Surda', icon: BookOpen, color: '#1565C0', bgLight: '#e8eefb', href: '/projects' },
]

export default function DiretoriaPage() {
  return (
    <main>
      {/* Hero */}
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
            <Users size={15} className="text-[#00B4D8]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Estrutura administrativa</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Diretoria e Estrutura Administrativa
          </h1>
          <p className="text-white/60 text-lg max-w-lg mx-auto">
            Conheça as pessoas que trabalham pela comunidade surda paulista e a estrutura que sustenta a ASESP.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Organograma */}
        <section aria-labelledby="organograma-titulo">
          <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest mb-3">Estrutura</p>
          <h2 id="organograma-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Organograma
          </h2>
          <div className="flex flex-col items-center w-full max-w-3xl mx-auto">

            {/* Presidência */}
            <div className="w-64 text-center rounded-2xl px-6 py-4 text-white font-bold text-sm shadow-lg" style={{ background: '#1B3A6B' }}>
              Presidência
            </div>
            <div className="w-px h-6 bg-gray-300" aria-hidden="true" />

            {/* Vice-Presidência + Secretaria */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-64 h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                  <div className="w-44 text-center rounded-xl px-4 py-3 text-white font-bold text-xs shadow" style={{ background: '#1565C0' }}>
                    Vice-Presidência
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                  <div className="w-44 text-center rounded-xl px-4 py-3 text-white font-bold text-xs shadow" style={{ background: '#00B4D8' }}>
                    Secretaria
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300 mt-6" aria-hidden="true" />

            {/* Conselhos */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-64 h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                  <div className="w-48 text-center rounded-xl px-4 py-3 font-bold text-xs shadow border-2" style={{ borderColor: '#1B3A6B', color: '#1B3A6B', background: '#eaeff7' }}>
                    Conselho Fiscal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                  <div className="w-48 text-center rounded-xl px-4 py-3 font-bold text-xs shadow border-2" style={{ borderColor: '#F26522', color: '#F26522', background: '#fef2ec' }}>
                    Conselho Deliberativo
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-8 bg-gray-300 mt-6" aria-hidden="true" />

            {/* Diretoria Executiva */}
            <div className="w-64 text-center rounded-2xl px-6 py-4 text-white font-bold text-sm shadow-lg" style={{ background: '#1B3A6B' }}>
              Diretoria Executiva
            </div>
            <div className="w-px h-6 bg-gray-300" aria-hidden="true" />

            {/* 4 diretorias temáticas */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-[90%] h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  { label: 'Marketing e\nComunicação', color: '#F26522', bg: '#fef2ec' },
                  { label: 'Núcleos\nTemáticos',       color: '#00B4D8', bg: '#e6f9fd' },
                  { label: 'Tecnologia da\nInformação', color: '#1565C0', bg: '#e8eefb' },
                  { label: 'Diretoria\nFinanceira',     color: '#1B3A6B', bg: '#eaeff7' },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                    <div
                      className="w-36 text-center rounded-xl px-3 py-3 font-bold text-xs shadow border"
                      style={{ borderColor: d.color + '60', color: d.color, background: d.bg, whiteSpace: 'pre-line' }}
                    >
                      {d.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Membros da Diretoria */}
        <section aria-labelledby="membros-titulo">
          <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3">Gestão</p>
          <h2 id="membros-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Membros da Diretoria
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {diretoria.map((m) => (
              <li
                key={m.cargo}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="h-2" style={{ background: m.color }} />
                <div className="p-6">
                  {/* Foto placeholder */}
                  <div
                    className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white font-extrabold text-lg"
                    style={{ background: `${m.color}22` }}
                    aria-hidden="true"
                  >
                    <span style={{ color: m.color }}>
                      {m.nome === 'A definir' ? '?' : m.nome.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: m.color }}>
                    {m.cargo}
                  </p>
                  <h3 className="font-extrabold text-[#1B3A6B] text-lg mb-3">{m.nome}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Conselhos */}
        <section aria-labelledby="conselhos-titulo">
          <p className="text-[#F26522] text-xs font-bold uppercase tracking-widest mb-3">Fiscalização e Deliberação</p>
          <h2 id="conselhos-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Conselhos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conselhos.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.nome}
                  className="rounded-2xl border border-gray-100 p-7 bg-white shadow-sm"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: c.bgLight }}
                  >
                    <Icon size={22} style={{ color: c.color }} />
                  </div>
                  <h3 className="font-extrabold text-[#1B3A6B] text-lg mb-3">{c.nome}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-5">{c.desc}</p>
                  <ul className="space-y-2">
                    {c.membros.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-base text-gray-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: c.color }}
                          aria-hidden="true"
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* Núcleos */}
        <section aria-labelledby="nucleos-titulo">
          <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3">Ação direta</p>
          <h2 id="nucleos-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Núcleos Temáticos
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
            {nucleos.map((n) => {
              const Icon = n.icon
              return (
                <li key={n.nome}>
                  <Link
                    href={n.href}
                    className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white hover:-translate-y-1.5 hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: n.bgLight }}
                    >
                      <Icon size={22} style={{ color: n.color }} />
                    </div>
                    <p className="font-bold text-[#1B3A6B] text-base leading-snug">{n.nome}</p>
                    <p className="text-sm mt-2 font-semibold" style={{ color: n.color }}>
                      Ver detalhes →
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        {/* CTA */}
        <section
          className="rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1B3A6B, #1565C0)' }}
        >
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
              href="/contact"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              Falar com a diretoria
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
