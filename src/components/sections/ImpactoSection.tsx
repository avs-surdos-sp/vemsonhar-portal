const numeros = [
  { valor: '30+', label: 'Anos de atuação' },
  { valor: '500+', label: 'Associados ativos' },
  { valor: '100+', label: 'Eventos realizados' },
  { valor: '15+', label: 'Municípios atendidos' },
]

export default function ImpactoSection() {
  return (
    <section className="py-16 px-4 bg-muted" aria-labelledby="impacto-titulo">
      <div className="max-w-5xl mx-auto">
        <h2 id="impacto-titulo" className="text-3xl font-bold text-primary text-center mb-10">
          Nosso Impacto
        </h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {numeros.map((item) => (
            <div key={item.label} className="bg-background rounded-lg p-6 shadow-sm">
              <dt className="text-4xl font-bold text-accent">{item.valor}</dt>
              <dd className="text-sm text-muted-foreground mt-1">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
