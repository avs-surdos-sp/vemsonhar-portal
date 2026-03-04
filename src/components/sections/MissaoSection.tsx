export default function MissaoSection() {
  return (
    <section className="py-16 px-4 bg-background" aria-labelledby="missao-titulo">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 id="missao-titulo" className="text-3xl font-bold text-primary">
          Nossa Missão
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ASESP foi fundada
          com o propósito de representar e defender os direitos da comunidade surda
          paulista, promovendo inclusão social, educação bilíngue e acessibilidade
          em todos os espaços da vida pública.
        </p>
      </div>
    </section>
  )
}
