import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Shield, BookOpen, Star, Heart } from 'lucide-react'
import MemberCard from './MemberCard'

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
        color: '#F7931E',
        photo: '/people/priscilla-gaspar.jpg',
      },
      {
        role: 'Vice-Presidência',
        name: 'Laila Sankari',
        bio: 'Auxilia a presidência nas decisões estratégicas e assume a gestão em ausências ou impedimentos do presidente.',
        color: '#F7931E',
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
        color: '#F7931E',
        photo: '/people/renata-serafim.jpg',
      },
      {
        role: 'Secretaria Adjunta',
        name: 'Silva Sabanovaite',
        bio: 'Auxilia na gestão documental, atas de reunião e comunicações oficiais da associação.',
        color: '#F7931E',
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
        color: '#F7931E',
        photo: '/people/felipe-vieira.jpg',
      },
      {
        role: 'Diretoria de Núcleos Temáticos',
        name: 'Natasha Oliveira',
        bio: 'Coordena os núcleos temáticos e demais projetos sociais da associação.',
        color: '#F7931E',
        photo: '/people/natasha-oliveira.jpg',
      },
      {
        role: 'Diretoria de Tecnologia da Informação',
        name: 'Fernando Kendi',
        bio: 'Responsável pela infraestrutura digital da ASESP, incluindo o portal institucional e o sistema de carteirinhas.',
        color: '#F7931E',
        photo: '/people/fernando-kendi.jpg',
        photoScale: 1.3,
      },
      {
        role: 'Diretoria Financeira',
        name: 'Reynaldo Falchi',
        bio: 'Gerencia as finanças da ASESP, controla receitas e despesas, e garante a prestação de contas à comunidade.',
        color: '#F7931E',
        photo: '/people/reynaldo-falchi.jpg',
        photoPosition: 'center 20%',
      },
      {
        role: 'Dir. Financeira Adjunta',
        name: 'Rosana Debartolo',
        bio: 'Apoia a gestão financeira da ASESP, auxiliando no controle de receitas, despesas e prestação de contas.',
        color: '#F7931E',
        photo: '/people/rosana.jpg',
        photoScale: 1.4,
        photoPosition: 'center 20%',
      },
    ],
  },
]

const conselhos = [
  {
    nome: 'Conselho Fiscal',
    icon: Shield,
    color: '#F7931E',
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
    color: '#F7931E',
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
]

export default function DiretoriaPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 px-4 text-center" style={{ background: 'linear-gradient(135deg, #14387F 0%, #061B45 100%)' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Diretoria e Estrutura Administrativa
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Conheça as pessoas que trabalham pela ASESP e a estrutura que sustenta a associação.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Organograma */}
        <section aria-labelledby="organograma-titulo">
          <p className="text-[#F7931E] text-xs font-bold uppercase tracking-widest mb-3">Estrutura</p>
          <h2 id="organograma-titulo" className="text-2xl font-extrabold text-[#14387F] mb-8 tracking-tight">
            Organograma
          </h2>

          <div className="flex flex-col items-center w-full max-w-4xl mx-auto gap-0">

            {/* Nível 1 — Presidência */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-lg"
                style={{ background: 'linear-gradient(135deg, #14387F, #2D5BA3)' }}>
                <Users size={16} className="opacity-80" />
                Presidência
              </div>
            </div>
            <div className="w-px h-6 bg-gray-300" aria-hidden="true" />

            {/* Nível 2 — VP + Secretaria */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-48 h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-12">
                {[
                  { label: 'Vice-Presidência', sub: null },
                  { label: 'Secretaria', sub: 'Secretaria Adjunta' },
                ].map(({ label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-0">
                    <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                    <div className="px-5 py-3 rounded-xl text-white font-bold text-xs shadow text-center min-w-[140px]"
                      style={{ background: 'linear-gradient(135deg, #2D5BA3, #14387F)' }}>
                      {label}
                    </div>
                    {sub && (
                      <>
                        <div className="w-px h-3 bg-gray-200" aria-hidden="true" />
                        <div className="px-4 py-2 rounded-lg text-xs font-semibold text-center min-w-[130px]"
                          style={{ background: '#EAF0FA', color: '#2D5BA3', border: '1px solid #D0DCF0' }}>
                          {sub}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-px h-6 bg-gray-300 mt-1" aria-hidden="true" />

            {/* Conselhos */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-56 h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-8">
                {[
                  { label: 'Conselho Fiscal', icon: Shield },
                  { label: 'Conselho Deliberativo', icon: BookOpen },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-center"
                      style={{ border: '1.5px dashed #14387F', color: '#14387F', background: '#F8FAFF' }}>
                      <Icon size={13} />
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-px h-6 bg-gray-300 mt-1" aria-hidden="true" />

            {/* Diretoria Executiva */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-lg"
                style={{ background: 'linear-gradient(135deg, #14387F, #2D5BA3)' }}>
                <Users size={16} className="opacity-80" />
                Diretoria Executiva
              </div>
            </div>
            <div className="w-px h-6 bg-gray-300" aria-hidden="true" />

            {/* Diretorias */}
            <div className="relative flex justify-center w-full">
              <div className="absolute top-0 w-[88%] h-px bg-gray-300" aria-hidden="true" />
              <div className="flex gap-3 flex-wrap justify-center items-start">
                {['Marketing e Comunicação', 'Núcleos Temáticos', 'Tecnologia da Informação'].map((label) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                    <div className="w-36 min-h-13 flex items-center justify-center text-center px-3 py-3 rounded-xl text-xs font-bold"
                      style={{ background: '#FFF3EC', color: '#F7931E', border: '1.5px solid #F7931E30' }}>
                      {label}
                    </div>
                  </div>
                ))}

                {/* Diretoria Financeira + Adjunta */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" aria-hidden="true" />
                  <div className="w-36 min-h-13 flex items-center justify-center text-center px-3 py-3 rounded-xl text-xs font-bold"
                    style={{ background: '#FFF3EC', color: '#F7931E', border: '1.5px solid #F7931E30' }}>
                    Diretoria Financeira
                  </div>
                  <div className="w-px h-3 bg-gray-200" aria-hidden="true" />
                  <div className="px-4 py-2 rounded-lg text-xs font-semibold text-center"
                    style={{ background: '#EAF0FA', color: '#2D5BA3', border: '1px solid #D0DCF0' }}>
                    Dir. Fin. Adjunta
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Equipe — Diretoria + Conselhos */}
        <section aria-labelledby="equipe-titulo">
          <p className="text-[#0069B4] text-xs font-bold uppercase tracking-widest mb-3">Equipe</p>
          <h2 id="equipe-titulo" className="text-2xl font-extrabold text-[#14387F] mb-8 tracking-tight">
            Membros e Conselhos
          </h2>
          <div className="space-y-10">

            {/* Grupos da diretoria */}
            {diretoriaGrupos.map((g) => (
              <div key={g.grupo}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#14387F] mb-4 border-b border-gray-100 pb-2">
                  {g.grupo}
                </h3>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
                  {g.membros.map((m) => (
                    <MemberCard
                      key={m.role}
                      photo={m.photo}
                      name={m.name}
                      role={m.role}
                      photoPosition={m.photoPosition}
                      photoScale={m.photoScale}
                      fallbackBg={`${m.color}22`}
                      fallbackColor={m.color}
                      fallbackChar={m.name === 'A definir' ? '?' : m.name.charAt(0)}
                    />
                  ))}
                </ul>
              </div>
            ))}

            {/* Conselhos */}
            {conselhos.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.nome}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#14387F] mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <Icon size={14} style={{ color: c.color }} />
                    {c.nome}
                  </h3>
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
                    {c.membros.map((m) => (
                      <MemberCard
                        key={m.nome}
                        photo={m.foto}
                        name={m.nome}
                        role={m.cargo}
                        fallbackBg={c.bgLight}
                        fallbackColor={c.color}
                        isHeading={false}
                      />
                    ))}
                  </ul>
                </div>
              )
            })}

          </div>
        </section>

        {/* Núcleos */}
        <section aria-labelledby="nucleos-titulo">
          <p className="text-[#0069B4] text-xs font-bold uppercase tracking-widest mb-3">Ação direta</p>
          <h2 id="nucleos-titulo" className="text-2xl font-extrabold text-[#14387F] mb-8 tracking-tight">
            Núcleos Temáticos
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
            {nucleos.map((n) => {
              const Icon = n.icon
              return (
                <li key={n.nome}>
                  <Link
                    href={n.href}
                    className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white hover:-translate-y-1.5 hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: n.bgLight }}
                    >
                      <Icon size={22} style={{ color: n.color }} />
                    </div>
                    <p className="font-bold text-[#14387F] text-base leading-snug">{n.nome}</p>
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
          className="rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #14387F, #1565C0)' }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-3">Apoie a ASESP</h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto">
            Sua contribuição fortalece o trabalho da comunidade surda do Estado de São Paulo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/doacoes"
              className="group inline-flex items-center gap-2 bg-[#14387F] border-2 border-white text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Heart
                size={15}
                fill="currentColor"
                className="text-white group-hover:text-red-500 transition-colors duration-200"
              />
              Contribua
            </Link>
            <Link
              href="/contato"
              className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Falar com a diretoria
            </Link>
          </div>
        </section>

      </div>
    </main>
  )
}
