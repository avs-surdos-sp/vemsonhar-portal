import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Shield, BookOpen, Star } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

type Membro = {
  role: string
  name: string
  bio: string
  color: string
  photo: string
  photoPosition?: string
  photoScale?: number
}

export const metadata: Metadata = {
  title: 'Diretoria | ASESP',
  description:
    'Conheça a estrutura administrativa da ASESP — diretoria, conselhos e núcleos temáticos.',
}

const diretoriaGrupos: { grupo: string; membros: Membro[] }[] = [
  {
    grupo: 'Presidência',
    membros: [
      {
        role: 'Presidência',
        name: 'Priscilla Gaspar',
        bio: 'Responsável pela representação institucional da ASESP junto a órgãos públicos, parceiros e comunidade surda do Estado de São Paulo.',
        color: '#7C3AED',
        photo: '/people/priscilla-gaspar.jpg',
      },
      {
        role: 'Vice-Presidência',
        name: 'Laila Sankari',
        bio: 'Auxilia a presidência nas decisões estratégicas e assume a gestão em ausências ou impedimentos do presidente.',
        color: '#7C3AED',
        photo: '/people/laila-sankari.jpg',
        photoPosition: 'center 15%',
      },
    ],
  },
  {
    grupo: 'Secretaria',
    membros: [
      {
        role: 'Secretaria',
        name: 'Renata Serafim',
        bio: 'Responsável pela gestão documental, atas de reunião, comunicações oficiais e registros institucionais da associação.',
        color: '#1B3A6B',
        photo: '/people/renata-serafim.jpg',
      },
      {
        role: 'Secretaria Adjunta',
        name: 'Silva Sabanovaite',
        bio: 'Auxilia na gestão documental, atas de reunião e comunicações oficiais da associação.',
        color: '#1B3A6B',
        photo: '/people/silva-sabanovaite.jpg',
      },
    ],
  },
  {
    grupo: 'Diretorias',
    membros: [
      {
        role: 'Diretoria de Marketing e Comunicação',
        name: 'Felipe Vieira',
        bio: 'Cuida da comunicação institucional, redes sociais, identidade visual e divulgação das ações da ASESP.',
        color: '#F26522',
        photo: '/people/felipe-vieira.jpg',
      },
      {
        role: 'Diretoria de Núcleos Temáticos',
        name: 'Natasha Oliveira',
        bio: 'Coordena os núcleos de idosos, mulheres, juventude e demais projetos sociais da associação.',
        color: '#0D9488',
        photo: '/people/natasha-oliveira.jpg',
      },
      {
        role: 'Diretoria de Tecnologia da Informação',
        name: 'Fernando Kendi',
        bio: 'Responsável pela infraestrutura digital da ASESP, incluindo o portal institucional e o sistema de carteirinhas.',
        color: '#1F2937',
        photo: '/people/fernando-kendi.jpg',
        photoScale: 1.3,
      },
      {
        role: 'Diretoria Financeira',
        name: 'Reynaldo Falchi',
        bio: 'Gerencia as finanças da ASESP, controla receitas e despesas, e garante a prestação de contas à comunidade.',
        color: '#16A34A',
        photo: '/people/reynaldo-falchi.jpg',
        photoPosition: 'center 20%',
      },
      {
        role: 'Dir. Financeira Adjunta',
        name: 'Rosana Debartolo',
        bio: 'Apoia a gestão financeira da ASESP, auxiliando no controle de receitas, despesas e prestação de contas.',
        color: '#16A34A',
        photo: '/people/rosana.jpg',
      },
    ],
  },
]

const conselhos = [
  {
    nome: 'Conselho Fiscal',
    icon: Shield,
    color: '#F26522',
    bgLight: '#eaeff7',
    desc: 'Responsável por fiscalizar a gestão financeira da ASESP, examinar as contas e relatórios da diretoria e emitir pareceres sobre a prestação de contas anual.',
    membros: [
      { nome: 'Francisco José',  cargo: 'Presidente', foto: '/people/francisco-jose.jpg' },
      { nome: 'Leandro Fonseca', cargo: 'Vice-Presidente', foto: '/people/leandro-fonseca.jpg' },
      { nome: 'Wagner Serafim',  cargo: 'Diretor', foto: '/people/wagner-serafim.jpg' },
    ],
  },
  {
    nome: 'Conselho Deliberativo',
    icon: BookOpen,
    color: '#F26522',
    bgLight: '#fef2ec',
    desc: 'Órgão máximo de deliberação da ASESP, responsável por aprovar o planejamento anual, alterações estatutárias e decisões estratégicas da associação.',
    membros: [
      { nome: 'Sergio Andrade',   cargo: 'Presidente', foto: '/people/sergio-andrade.jpg' },
      { nome: 'Valdemir Patinho', cargo: 'Vice-Presidente', foto: '/people/valdemir-patinho.jpg' },
      { nome: 'Raul Antônio',     cargo: 'Diretor', foto: '/people/raul-antonio.jpg' },
    ],
  },
]

const nucleos = [
  { nome: 'Núcleo dos Idosos Surdos', icon: Users, color: '#6B7280', bgLight: '#F3F4F6', href: '/projetos' },
  { nome: 'Núcleo das Mulheres Surdas', icon: Star, color: '#DB2777', bgLight: '#fce7f3', href: '/projetos' },
  { nome: 'Núcleo da Juventude Surda', icon: BookOpen, color: '#D97706', bgLight: '#fef3c7', href: '/projetos' },
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
          <LibrasVideo title="Diretoria da ASESP em Libras" />
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
            <div className="w-px h-6 bg-[#1B3A6B]/30" aria-hidden="true" />

            {/* Vice-Presidência + Secretaria */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-64 h-px bg-[#1B3A6B]/20" aria-hidden="true" />
              <div className="flex gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[#1B3A6B]/20" aria-hidden="true" />
                  <div className="w-44 text-center rounded-xl px-4 py-3 text-white font-bold text-xs shadow" style={{ background: '#2D5BA3' }}>
                    Vice-Presidência
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[#1B3A6B]/20" aria-hidden="true" />
                  <div className="w-44 text-center rounded-xl px-4 py-3 text-white font-bold text-xs shadow" style={{ background: '#2D5BA3' }}>
                    Secretaria
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-8 bg-[#1B3A6B]/30 mt-6" aria-hidden="true" />

            {/* Conselhos */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-64 h-px bg-[#1B3A6B]/20" aria-hidden="true" />
              <div className="flex gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[#1B3A6B]/20" aria-hidden="true" />
                  <div className="w-48 text-center rounded-xl px-4 py-3 font-bold text-xs" style={{ borderColor: '#1B3A6B', color: '#1B3A6B', background: '#fff', border: '1.5px dashed #1B3A6B' }}>
                    Conselho Fiscal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-[#1B3A6B]/20" aria-hidden="true" />
                  <div className="w-48 text-center rounded-xl px-4 py-3 font-bold text-xs" style={{ borderColor: '#1B3A6B', color: '#1B3A6B', background: '#fff', border: '1.5px dashed #1B3A6B' }}>
                    Conselho Deliberativo
                  </div>
                </div>
              </div>
            </div>

            <div className="w-px h-8 bg-[#1B3A6B]/30 mt-6" aria-hidden="true" />

            {/* Diretoria Executiva */}
            <div className="w-64 text-center rounded-2xl px-6 py-4 text-white font-bold text-sm shadow-lg" style={{ background: '#1B3A6B' }}>
              Diretoria Executiva
            </div>
            <div className="w-px h-6 bg-[#1B3A6B]/30" aria-hidden="true" />

            {/* 4 diretorias temáticas */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-[90%] h-px bg-[#1B3A6B]/20" aria-hidden="true" />
              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  'Marketing e\nComunicação',
                  'Núcleos\nTemáticos',
                  'Tecnologia da\nInformação',
                  'Diretoria\nFinanceira',
                ].map((label) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-[#1B3A6B]/20" aria-hidden="true" />
                    <div
                      className="w-36 text-center rounded-xl px-3 py-3 font-bold text-xs border"
                      style={{ borderColor: '#1B3A6B30', color: '#1B3A6B', background: '#F0F4FA', whiteSpace: 'pre-line' }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Adjuntos */}
            <div className="w-px h-6 bg-[#1B3A6B]/20 mt-1" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#1B3A6B]/40 mb-1">Cargos Adjuntos</p>
            <div className="flex gap-8">
              {[
                'Sec. Adjunta',
                'Dir. Fin. Adjunta',
              ].map((label) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-px h-4 bg-[#1B3A6B]/15" aria-hidden="true" />
                  <div
                    className="w-36 text-center rounded-xl px-3 py-2 font-semibold text-xs border"
                    style={{ borderColor: '#1B3A6B18', color: '#2D5BA3', background: '#F8FAFD' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Membros da Diretoria */}
        <section aria-labelledby="membros-titulo">
          <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-3">Gestão</p>
          <h2 id="membros-titulo" className="text-2xl font-extrabold text-[#1B3A6B] mb-8 tracking-tight">
            Membros da Diretoria
          </h2>
          <div className="space-y-10">
            {diretoriaGrupos.map((g) => (
              <div key={g.grupo}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B3A6B]/50 mb-4 border-b border-gray-100 pb-2">
                  {g.grupo}
                </h3>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                  {g.membros.map((m) => (
                    <li
                      key={m.role}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                    >
                      <div className="h-2" style={{ background: m.color }} />
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="flex justify-center mb-5">
                          {m.photo ? (
                            <div className="w-36 h-36 rounded-full overflow-hidden border-2 flex-shrink-0" style={{ borderColor: `${m.color}40` }}>
                              <img
                                src={m.photo}
                                alt={m.name}
                                className="w-full h-full object-cover"
                                style={{
                                  objectPosition: m.photoPosition ?? 'center',
                                  transform: `scale(${m.photoScale ?? 1})`,
                                  transformOrigin: m.photoPosition ?? 'center',
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              className="w-36 h-36 rounded-full flex items-center justify-center font-extrabold text-2xl"
                              style={{ background: `${m.color}22`, color: m.color }}
                              aria-hidden="true"
                            >
                              {m.name === 'A definir' ? '?' : m.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: m.color }}>
                          {m.role}
                        </p>
                        <h3 className="font-extrabold text-gray-900 text-lg mb-3">{m.name}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{m.bio}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
                  <ul className="grid grid-cols-3 gap-4 mt-2 list-none">
                    {c.membros.map((m) => (
                      <li key={m.nome} className="flex flex-col items-center text-center gap-2">
                        {m.foto ? (
                          <img
                            src={m.foto}
                            alt={m.nome}
                            className="w-28 h-28 rounded-full object-cover border-2"
                            style={{ borderColor: c.color + '40' }}
                          />
                        ) : (
                          <div
                            className="w-28 h-28 rounded-full flex items-center justify-center font-extrabold text-2xl"
                            style={{ background: c.bgLight, color: c.color }}
                            aria-hidden="true"
                          >
                            {m.nome.charAt(0)}
                          </div>
                        )}
                        <p className="font-bold text-[#1B3A6B] text-sm leading-snug">{m.nome}</p>
                        <p className="text-xs font-semibold" style={{ color: c.color }}>{m.cargo}</p>
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
              href="/como-se-associar"
              className="bg-[#F26522] text-white font-bold px-8 py-3 rounded-full hover:bg-[#d4501a] transition-colors hover:shadow-lg"
            >
              🤟 Associar-se
            </Link>
            <Link
              href="/contato"
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
