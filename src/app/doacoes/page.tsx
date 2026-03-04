import DoacaoForm from '@/components/shared/DoacaoForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doações | ASESP',
  description: 'Apoie a ASESP e contribua com a comunidade surda do Estado de São Paulo.',
}

export default function DoacoesPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Doações</h1>
      <p className="text-muted-foreground mb-8">
        Sua contribuição ajuda a ASESP a continuar promovendo a inclusão e os direitos
        da comunidade surda no Estado de São Paulo. Preencha o formulário e receba
        as instruções de pagamento via PIX.
      </p>
      <DoacaoForm />
    </main>
  )
}
