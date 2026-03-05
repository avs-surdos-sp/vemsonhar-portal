# vemsonhar — Portal Institucional da ASESP

Site institucional da **ASESP** (Associação dos Surdos do Estado de São Paulo), construído com Next.js 16 e focado em acessibilidade WCAG 2.1 AA.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) + React + TypeScript |
| Estilização | Tailwind CSS + Shadcn UI (style: new-york) |
| Banco de dados | Supabase (PostgreSQL + RLS) |
| CMS | Sanity *(a implementar)* |
| Deploy | Vercel *(a configurar)* |
| Fontes | Inter (Google Fonts) |

---

## Identidade Visual

| Token | Cor | Hex |
|---|---|---|
| Navy | Azul marinho principal | `#1B3A6B` |
| Orange | Laranja CTA | `#F26522` |
| Cyan | Ciano destaque | `#00B4D8` |

---

## Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/avs-surdos-sp/vemsonhar-portal.git
cd vemsonhar-portal

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
cp .env.local.example .env.local
# Preencha com suas credenciais do Supabase

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

> **Nunca** comite o `.env.local`. Ele já está no `.gitignore`.

---

## Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx                     # Layout raiz (Header + Footer + fonte Inter)
│   ├── page.tsx                       # Home page
│   ├── globals.css                    # Tokens de cor AVS + estilos globais
│   ├── sobre/page.tsx                 # Quem Somos
│   ├── noticias/
│   │   ├── page.tsx                   # Lista de notícias
│   │   └── [slug]/page.tsx            # Notícia individual
│   ├── como-se-associar/page.tsx      # Benefícios + Google Forms (placeholder)
│   ├── doacoes/page.tsx               # Impacto + formulário de doação
│   ├── contato/page.tsx               # Endereço + formulário de contato
│   └── actions/
│       ├── contato.ts                 # Server Action → tabela contatos
│       ├── doacoes.ts                 # Server Action → tabela doacoes
│       └── newsletter.ts             # Server Action → tabela newsletter
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Nav fixa, transparente → navy no scroll
│   │   └── Footer.tsx                 # 4 colunas + newsletter
│   ├── sections/
│   │   ├── Hero.tsx                   # Home — hero 2 colunas + wave SVG
│   │   ├── StatsSection.tsx           # Home — contadores animados
│   │   ├── AcoesSection.tsx           # Home — 3 cards de ação
│   │   ├── ProjetosSection.tsx        # Home — 4 núcleos
│   │   ├── EventoNoticiasSection.tsx  # Home — evento + notícias
│   │   ├── MissaoSection.tsx          # Usado em /sobre
│   │   ├── ImpactoSection.tsx         # Usado em /sobre e /doacoes
│   │   └── DoacoesCTA.tsx             # Usado em /doacoes
│   └── shared/
│       ├── ContatoForm.tsx            # Formulário → Supabase
│       ├── DoacaoForm.tsx             # Formulário → Supabase
│       ├── NewsletterForm.tsx         # Newsletter → Supabase
│       └── LibrasVideo.tsx            # Embed YouTube
│
├── lib/
│   └── supabase.ts                    # Cliente Supabase
└── types/                             # Tipos TypeScript compartilhados

supabase/
└── schema.sql                         # DDL das tabelas
```

---

## Banco de Dados (Supabase)

### Tabelas

| Tabela | Campos principais |
|---|---|
| `contatos` | `nome`, `email`, `assunto`, `mensagem`, `created_at` |
| `doacoes` | `nome`, `email`, `valor_pretendido`, `modalidade`, `mensagem`, `created_at` |
| `newsletter` | `email`, `created_at` |

**Políticas RLS:**
- `INSERT` liberado para o role `anon` (formulários públicos)
- `SELECT` bloqueado para o público

Para recriar as tabelas: execute `supabase/schema.sql` no SQL Editor do painel Supabase.

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — Hero, Stats, Ações, Projetos, Evento + Notícias |
| `/sobre` | História, Missão/Visão, Valores, Pilares institucionais |
| `/noticias` | Grid de notícias *(integração Sanity a implementar)* |
| `/noticias/[slug]` | Notícia individual |
| `/como-se-associar` | Benefícios, etapas, Google Forms embed *(placeholder)* |
| `/doacoes` | Impacto em números + formulário de doação |
| `/contato` | Endereço + formulário integrado ao Supabase |

---

## Seções da Home

### `Hero.tsx`
- Fundo gradient navy (`#1B3A6B → #0d2347`)
- Layout 2 colunas em `lg:`: texto à esquerda, card de vídeo à direita
- Blobs decorativos com `radial-gradient` e baixa opacidade
- Dot grid no fundo (opacidade 3%)
- Wave SVG branca na transição para a próxima seção
- Indicador de scroll animado

### `StatsSection.tsx` *(client component)*
- 4 cards: Associados ativos, Idosos atendidos, Eventos realizados, Anos de história
- Contador animado com `IntersectionObserver` — inicia apenas quando a seção fica visível
- Borda superior colorida por card (navy, laranja, ciano)
- Ícones Lucide React

### `AcoesSection.tsx`
- 3 cards: Seja Associado (navy), Faça uma Doação (laranja), Conheça os Projetos (ciano)
- Hover: elevação com `translateY` + sombra colorida
- Card "Seja Associado" tem borda superior gradient destacada

### `ProjetosSection.tsx`
- 4 núcleos: Idosos Surdos, Mulheres Surdas, Juventude Surda, Cursos em Libras
- Header colorido com ícone Lucide que escala no hover
- Tag de categoria no canto superior do card
- "Saiba mais →" aparece com `opacity` no hover

### `EventoNoticiasSection.tsx`
- Fundo gradient navy + azul
- **Coluna esquerda:** próximo evento com badge de data laranja, ícone de localização
- **Coluna direita:** 3 notícias recentes com tag colorida por categoria, seta animada no hover
- Link "Ver todas as notícias →"

---

## Header

- Fixo (`position: fixed`, `z-50`, `h-16`)
- **Transparente** quando no topo → `bg-[#1B3A6B]/95 + backdrop-blur` após 40px de scroll
- **Barra de progresso laranja** na borda inferior (mostra % da página lida pelo usuário)
- Link ativo marcado com ponto laranja abaixo do texto
- Logo: ícone SVG de mão + "vemsonhar" / "ASESP"
- Menu mobile com animação `max-h` suave (slide-down)
- Fecha automaticamente ao trocar de rota (`usePathname`)

---

## Acessibilidade (WCAG 2.1 AA)

- `lang="pt-BR"` no `<html>`
- `aria-labelledby` em todas as `<section>`
- `aria-hidden="true"` em todos os elementos puramente decorativos
- `aria-label` em botões sem texto visível
- Contrastes verificados: branco sobre navy, laranja sobre branco
- HTML semântico: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<dl>`, `<ul>`, `<li>`
- `role="status"` e `role="alert"` nos feedbacks de formulários
- Vídeos em Libras planejados em todas as páginas (componente `LibrasVideo.tsx` criado)

---

## Pendências

- [ ] Integração com Sanity CMS (notícias e conteúdo dinâmico)
- [ ] Deploy na Vercel + variáveis de ambiente de produção
- [ ] Google Forms real em `/como-se-associar`
- [ ] Chave PIX real em `/doacoes` (substituir `pix@asesp.org.br`)
- [ ] Endereço e e-mail reais no Footer e em `/contato`
- [ ] Vídeos reais em Libras (substituir placeholders pelo componente `LibrasVideo.tsx`)
- [ ] Conteúdo real nas páginas (substituir lorem ipsum)
- [ ] Página `/noticias/[slug]` conectada ao Sanity

---

## Repositório

**GitHub:** [avs-surdos-sp/vemsonhar-portal](https://github.com/avs-surdos-sp/vemsonhar-portal)
**Branch principal:** `main`
