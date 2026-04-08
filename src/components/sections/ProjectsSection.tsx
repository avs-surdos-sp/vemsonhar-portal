import Link from 'next/link'
import { Users, Star, BookOpen, Leaf, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const projetos = [
  {
    titulo: 'Núcleo dos Idosos Surdos',
    desc: 'Cuidado e inclusão para a terceira idade surda.',
    icon: Users,
    color: '#00B4D8',
    bgLight: '#e6f9fd',
    tag: 'Cuidado',
  },
  {
    titulo: 'Núcleo das Mulheres Surdas',
    desc: 'Empoderamento e liderança feminina na comunidade.',
    icon: Star,
    color: '#F26522',
    bgLight: '#fef2ec',
    tag: 'Empoderamento',
  },
  {
    titulo: 'Núcleo da Juventude Surda',
    desc: 'Educação e protagonismo para crianças e jovens.',
    icon: Leaf,
    color: '#1565C0',
    bgLight: '#e8effa',
    tag: 'Educação',
  },
  {
    titulo: 'Cursos em Libras',
    desc: 'Formação e capacitação para a comunidade surda.',
    icon: BookOpen,
    color: '#1B3A6B',
    bgLight: '#eaeff7',
    tag: 'Formação',
  },
]

export default function ProjetosSection() {
  return (
    <section className="py-24 px-4 bg-white" aria-labelledby="projetos-titulo">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-4">
          <SectionHeader
            label="Nossos núcleos"
            title="Projetos em andamento"
            headingId="projetos-titulo"
            labelColor="#00B4D8"
            centered={false}
          />
          <Link
            href="/projetos"
            className="flex items-center gap-2 text-[#1565C0] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
          >
            Ver todos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
          {projetos.map((p) => {
            const Icon = p.icon
            return (
              <li
                key={p.titulo}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Card header with color */}
                <div
                  className="relative pt-20 pb-10 px-6 flex flex-col items-center justify-center bg-[#F5F7FA]"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: p.color }}
                  >
                    <Icon size={28} className="text-white" aria-label={p.titulo} />
                  </div>
                  {/* Tag */}
                  <span
                    className="absolute top-3 right-3 text-sm font-bold px-4 py-2 rounded-full"
                    style={{ background: p.color, color: '#fff' }}
                  >
                    {p.tag}
                  </span>
                </div>
                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-[#1B3A6B] font-bold text-lg leading-snug mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">{p.desc}</p>

                  {/* Hover reveal CTA */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: p.color }}>
                    Saiba mais <ArrowRight size={14} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
