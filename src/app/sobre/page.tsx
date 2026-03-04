import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | ASESP',
  description: 'Conheça a história, missão e valores da ASESP — Associação dos Surdos do Estado de São Paulo.',
}

const valores = [
  { titulo: 'Inclusão', descricao: 'Lutamos por uma sociedade que reconhece e inclui a diversidade da comunidade surda em todos os espaços.' },
  { titulo: 'Acessibilidade', descricao: 'Defendemos o direito de acesso à informação, educação e serviços públicos em Libras.' },
  { titulo: 'Identidade', descricao: 'Valorizamos a cultura surda, a Língua Brasileira de Sinais e a identidade única da nossa comunidade.' },
]

export default function SobrePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">

      {/* História */}
      <section aria-labelledby="historia-titulo">
        <h1 id="historia-titulo" className="text-3xl font-bold text-primary mb-4">
          Sobre a ASESP
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A ASESP — Associação
          dos Surdos do Estado de São Paulo — foi fundada com o propósito de representar
          a comunidade surda paulista, promovendo seus direitos, cultura e identidade.
          Ao longo de décadas de atuação, construímos pontes entre a comunidade surda
          e a sociedade, conquistando avanços importantes em educação, trabalho e
          acessibilidade.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* Missão e Visão */}
      <section aria-labelledby="missao-titulo">
        <h2 id="missao-titulo" className="text-2xl font-bold text-primary mb-6">
          Missão e Visão
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-2">Missão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Defender e
              promover os direitos da comunidade surda no Estado de São Paulo, garantindo
              inclusão social e educação bilíngue de qualidade.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-2">Visão</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ser referência
              nacional na defesa dos direitos das pessoas surdas, contribuindo para
              uma sociedade plenamente inclusiva.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section aria-labelledby="valores-titulo">
        <h2 id="valores-titulo" className="text-2xl font-bold text-primary mb-6">
          Nossos Valores
        </h2>
        <ul className="grid md:grid-cols-3 gap-6 list-none">
          {valores.map((v) => (
            <li key={v.titulo} className="border rounded-lg p-6">
              <h3 className="font-semibold text-accent mb-2">{v.titulo}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

    </main>
  )
}
