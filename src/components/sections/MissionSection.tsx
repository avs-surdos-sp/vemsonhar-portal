import { Globe, GraduationCap, AccessibilityIcon } from 'lucide-react'

const pilares = [
  {
    titulo: 'Inclusão Social',
    descricao: 'Trabalhamos para que pessoas surdas tenham pleno acesso à educação, trabalho e vida pública em todos os espaços da sociedade.',
    icon: Globe,
    color: '#1B3A6B',
    bgLight: '#eaeff7',
  },
  {
    titulo: 'Educação Bilíngue',
    descricao: 'Defendemos o ensino em Libras como primeira língua e o português escrito como segunda língua para todos os surdos.',
    icon: GraduationCap,
    color: '#F26522',
    bgLight: '#fef2ec',
  },
  {
    titulo: 'Acessibilidade',
    descricao: 'Lutamos por intérpretes, legendas e recursos de acessibilidade plena em todos os espaços físicos e digitais.',
    icon: AccessibilityIcon,
    color: '#00B4D8',
    bgLight: '#e6f9fd',
  },
]

export default function MissaoSection() {
  return (
    <section className="py-24 px-4 bg-[#F5F7FA]" aria-labelledby="missao-titulo">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label text-[#F26522] mb-3">Quem Somos</p>
          <h2 id="missao-titulo" className="text-3xl font-extrabold text-[#1B3A6B] mt-2 mb-5 tracking-tight">
            Nossa Missão
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            A ASESP foi fundada com o propósito de representar e defender os direitos da
            comunidade surda paulista, promovendo inclusão social, educação bilíngue e
            acessibilidade em todos os espaços da vida pública.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 list-none">
          {pilares.map((p) => {
            const Icon = p.icon
            return (
              <li
                key={p.titulo}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 border-t-4 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                style={{ borderTopColor: p.color }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: p.bgLight }}
                >
                  <Icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold text-lg text-[#1B3A6B] mb-3 tracking-tight">{p.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.descricao}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
