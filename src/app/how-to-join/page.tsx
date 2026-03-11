import { Metadata } from 'next'
import { UserPlus, CheckCircle2 } from 'lucide-react'
import LibrasVideo from '@/components/shared/LibrasVideo'

export const metadata: Metadata = {
  title: 'Como se Associar | ASESP',
  description:
    'Faça parte da ASESP e contribua com a luta pelos direitos da comunidade surda no Estado de São Paulo.',
}

const beneficios = [
  'Acesso a eventos e atividades exclusivas para associados',
  'Representação e apoio jurídico nas questões da comunidade surda',
  'Participação nas assembleias e nas decisões da associação',
  'Rede de apoio da comunidade surda paulista',
  'Carteirinha digital de associado da ASESP',
]

const etapas = [
  {
    numero: '1',
    titulo: 'Preencha o formulário',
    descricao: 'Complete o formulário abaixo com seus dados pessoais.',
    cor: '#1B3A6B',
  },
  {
    numero: '2',
    titulo: 'Aguarde o contato',
    descricao: 'Nossa equipe entrará em contato em até 5 dias úteis para confirmar o cadastro.',
    cor: '#00B4D8',
  },
  {
    numero: '3',
    titulo: 'Bem-vindo à ASESP!',
    descricao: 'Após a confirmação, você já faz parte da nossa comunidade.',
    cor: '#F26522',
  },
]

export default function ComoSeAssociarPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #0d2347 100%)' }}
        aria-labelledby="associar-titulo"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #F26522, transparent)' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <UserPlus size={15} className="text-[#F26522]" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium">Faça parte da ASESP</span>
          </div>
          <h1
            id="associar-titulo"
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Como se Associar
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A associação está aberta a surdos, familiares, intérpretes e pessoas comprometidas
            com a luta pelos direitos da comunidade surda no Estado de São Paulo.
          </p>
          <LibrasVideo title="Como se Associar à ASESP em Libras" />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-16">

        {/* Benefícios */}
        <section aria-labelledby="beneficios-titulo">
          <h2
            id="beneficios-titulo"
            className="text-2xl font-extrabold text-[#1B3A6B] mb-6"
          >
            Benefícios de ser associado
          </h2>
          <ul className="space-y-3">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#00B4D8] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-600">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Etapas */}
        <section aria-labelledby="etapas-titulo">
          <h2
            id="etapas-titulo"
            className="text-2xl font-extrabold text-[#1B3A6B] mb-8"
          >
            Como funciona
          </h2>
          <ol className="relative space-y-0 list-none">
            {etapas.map((e, i) => (
              <li key={e.numero} className="flex gap-5 pb-8 last:pb-0 relative">
                {/* Linha vertical conectora */}
                {i < etapas.length - 1 && (
                  <div
                    className="absolute left-[15px] top-8 bottom-0 w-px"
                    style={{ background: '#eef2f8' }}
                    aria-hidden="true"
                  />
                )}
                {/* Número */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-white text-sm shrink-0 z-10"
                  style={{ background: e.cor }}
                  aria-hidden="true"
                >
                  {e.numero}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-extrabold text-[#1B3A6B] mb-1">{e.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.descricao}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Google Forms embed */}
        <section aria-labelledby="formulario-titulo">
          <h2
            id="formulario-titulo"
            className="text-2xl font-extrabold text-[#1B3A6B] mb-6"
          >
            Formulário de adesão
          </h2>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfA5QiRQRwIQgSmXfqvJ0Wk3s7SqaZevY2PhnF8tkAQsO-XBQ/viewform?embedded=true"
              width="100%"
              height="1863"
              style={{ border: 0, display: 'block' }}
              title="Formulário de adesão à ASESP"
              aria-label="Formulário de adesão à ASESP"
            >
              Carregando…
            </iframe>
          </div>
        </section>

      </div>
    </main>
  )
}
