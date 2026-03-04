import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      className="bg-primary text-primary-foreground py-20 px-4"
      aria-labelledby="hero-titulo"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 id="hero-titulo" className="text-4xl sm:text-5xl font-bold leading-tight">
          Voz e Direitos para a{' '}
          <span className="text-accent">Comunidade Surda</span>
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          A ASESP luta pela inclusão, acessibilidade e valorização da cultura surda
          no Estado de São Paulo há décadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <Link href="/como-se-associar">Associe-se</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/doacoes">Doe Agora</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
