import Link from 'next/link'
import { UserPlus, Heart, Star } from 'lucide-react'

const acoes = [
  {
    icon: UserPlus,
    titulo: 'Seja Associado',
    desc: 'Faça parte da maior associação de surdos do Estado de São Paulo e tenha acesso a benefícios exclusivos.',
    btn: 'Associe-se agora',
    href: '/how-to-join',
    color: '#1B3A6B',
    highlight: true,
  },
  {
    icon: Heart,
    titulo: 'Faça uma Doação',
    desc: 'R$ 40 alimenta 1 encontro · R$ 80 apoia 1 idoso surdo no mês. Cada contribuição transforma vidas.',
    btn: 'Quero doar',
    href: '/donations',
    color: '#F26522',
    highlight: false,
  },
  {
    icon: Star,
    titulo: 'Conheça os Projetos',
    desc: 'Núcleos de idosos, mulheres, juventude, cursos em Libras e muito mais. Venha fazer parte.',
    btn: 'Ver projetos',
    href: '/projects',
    color: '#00B4D8',
    highlight: false,
  },
]

export default function AcoesSection() {
  return (
    <section className="py-24 px-4 bg-[#F5F7FA]" aria-labelledby="acoes-titulo">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-[#F26522] mb-3">Como você pode ajudar</p>
          <h2 id="acoes-titulo" className="text-3xl font-extrabold text-[#1B3A6B] mb-4 tracking-tight">
            Faça parte dessa história
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Cada contribuição transforma vidas na comunidade surda paulista.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-7 list-none">
          {acoes.map((a) => {
            const Icon = a.icon
            return (
              <li
                key={a.titulo}
                className={`group relative bg-white rounded-2xl p-9 shadow-sm border flex flex-col items-start hover:-translate-y-2 hover:shadow-xl transition-all duration-300 overflow-hidden ${a.highlight ? 'border-[#1B3A6B]/30' : 'border-[#eef2f8]'
                  }`}
              >
                {/* Gradient accent on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ background: a.color }}
                  aria-hidden="true"
                />
                {/* Top border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ background: a.color }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${a.color}18` }}
                  aria-hidden="true"
                >
                  <Icon size={26} style={{ color: a.color }} />
                </div>

                <h3 className="text-[#1B3A6B] text-xl font-bold mb-3 tracking-tight">{a.titulo}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-1 mb-8">{a.desc}</p>

                <Link
                  href={a.href}
                  className="relative w-full text-center text-white text-base font-bold py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${a.color}, ${a.color}cc)`,
                    boxShadow: `0 4px 15px ${a.color}40`,
                  }}
                >
                  {a.btn}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
