import DoacaoForm from '@/components/shared/DoacaoForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP e contribua com a comunidade surda do Estado de São Paulo.',
}

const impactos = [
  { valor: 'R$ 30', descricao: 'Cobre materiais para um workshop de Libras' },
  { valor: 'R$ 100', descricao: 'Apoia a produção de conteúdo acessível em Libras' },
  { valor: 'R$ 300', descricao: 'Financia a participação de um surdo em evento nacional' },
]

export default function DoacoesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      <section aria-labelledby="doacoes-titulo">
        <h1 id="doacoes-titulo" className="text-3xl font-bold text-primary mb-4">
          Doe para a ASESP
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Sua contribuição fortalece a luta pelos direitos da comunidade surda paulista.
          Com o seu apoio, podemos continuar promovendo inclusão, educação bilíngue
          e acessibilidade no Estado de São Paulo.
        </p>
      </section>

      {/* Impacto das doações */}
      <section aria-labelledby="impacto-titulo">
        <h2 id="impacto-titulo" className="text-2xl font-bold text-primary mb-6">
          O que sua doação faz
        </h2>
        <ul className="grid sm:grid-cols-3 gap-4 list-none">
          {impactos.map((item) => (
            <li key={item.valor} className="bg-muted rounded-lg p-5 text-center">
              <p className="text-2xl font-bold text-accent">{item.valor}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Formulário */}
      <section aria-labelledby="form-titulo">
        <h2 id="form-titulo" className="text-2xl font-bold text-primary mb-4">
          Registre sua doação
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Preencha o formulário e receba as instruções de pagamento via PIX.
        </p>
        <DoacaoForm />
      </section>

    </main>
  )
}
