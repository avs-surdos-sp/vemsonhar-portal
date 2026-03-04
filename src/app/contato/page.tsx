import ContatoForm from '@/components/shared/ContatoForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | ASESP',
  description: 'Entre em contato com a ASESP — Associação dos Surdos do Estado de São Paulo.',
}

export default function ContatoPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Contato</h1>
      <p className="text-muted-foreground mb-8">
        Preencha o formulário abaixo e a equipe da ASESP entrará em contato em breve.
      </p>
      <ContatoForm />
    </main>
  )
}
