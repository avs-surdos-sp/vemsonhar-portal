import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como se Associar | ASESP',
  description: 'Saiba como se tornar associado da ASESP e faça parte da nossa comunidade.',
}

const beneficios = [
  'Acesso a eventos e atividades exclusivas',
  'Representação e suporte jurídico',
  'Participação nas assembleias e decisões da associação',
  'Rede de apoio da comunidade surda paulista',
  'Acesso à carteirinha de associado',
]

const etapas = [
  { numero: '1', titulo: 'Preencha o formulário', descricao: 'Complete o formulário de adesão abaixo com seus dados.' },
  { numero: '2', titulo: 'Aguarde o contato', descricao: 'Nossa equipe entrará em contato para confirmar o cadastro.' },
  { numero: '3', titulo: 'Bem-vindo à ASESP', descricao: 'Após a confirmação, você já faz parte da nossa comunidade.' },
]

export default function ComoSeAssociarPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      <section aria-labelledby="associar-titulo">
        <h1 id="associar-titulo" className="text-3xl font-bold text-primary mb-4">
          Como se Associar
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Faça parte da ASESP e contribua com a luta pelos direitos da comunidade surda
          no Estado de São Paulo. A associação está aberta a surdos, familiares,
          intérpretes e pessoas comprometidas com a causa.
        </p>
      </section>

      {/* Benefícios */}
      <section aria-labelledby="beneficios-titulo">
        <h2 id="beneficios-titulo" className="text-2xl font-bold text-primary mb-4">
          Benefícios de ser associado
        </h2>
        <ul className="space-y-2">
          {beneficios.map((b) => (
            <li key={b} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-accent font-bold mt-0.5">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Etapas */}
      <section aria-labelledby="etapas-titulo">
        <h2 id="etapas-titulo" className="text-2xl font-bold text-primary mb-6">
          Como funciona
        </h2>
        <ol className="space-y-4 list-none">
          {etapas.map((e) => (
            <li key={e.numero} className="flex gap-4 items-start">
              <span
                className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {e.numero}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{e.titulo}</h3>
                <p className="text-muted-foreground text-sm">{e.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Google Forms embed */}
      <section aria-labelledby="formulario-titulo">
        <h2 id="formulario-titulo" className="text-2xl font-bold text-primary mb-4">
          Formulário de adesão
        </h2>
        {/* TODO: substituir pelo embed do Google Forms quando disponível */}
        <div
          className="w-full h-[500px] bg-muted rounded-lg flex items-center justify-center border border-dashed"
          role="region"
          aria-label="Formulário de adesão (em breve)"
        >
          <p className="text-muted-foreground text-center">
            Formulário de adesão em breve.<br />
            <span className="text-sm">Entre em contato pelo e-mail institucional para se associar agora.</span>
          </p>
        </div>
      </section>

    </main>
  )
}
