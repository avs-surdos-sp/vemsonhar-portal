import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DoacoesCTA() {
  return (
    <section className="py-16 px-4 bg-accent" aria-labelledby="doacoes-cta-titulo">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 id="doacoes-cta-titulo" className="text-3xl font-bold text-accent-foreground">
          Apoie a ASESP
        </h2>
        <p className="text-accent-foreground/90 text-lg">
          Sua doação fortalece a luta pelos direitos da comunidade surda paulista.
          Cada contribuição faz diferença.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          <Link href="/doacoes">Quero Contribuir</Link>
        </Button>
      </div>
    </section>
  )
}
