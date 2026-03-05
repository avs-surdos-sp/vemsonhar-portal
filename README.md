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

| Papel | Cor | Hex |
|---|---|---|
| Azul escuro — texto "vem" e subtítulo | Azul marinho | `#1B3A6B` |
| Azul vibrante — texto "sonhar" | Azul médio | `#1565C0` |
| Destaque quente — mãos e CTAs | Laranja/coral | `#F26522` |
| Detalhe — onda e ícones | Ciano/azul claro | `#00B4D8` |
| Fundo geral | Branco | `#FFFFFF` |

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


## Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx                     # Layout raiz (Header + Footer + fonte Inter)
│   ├── page.tsx                       # Home page
│   ├── globals.css                    # Tokens de cor AVS + estilos globais
│   ├── about/page.tsx                 # Quem Somos
│   ├── board/page.tsx                 # Diretoria e estrutura administrativa
│   ├── projects/page.tsx              # Projetos e núcleos
│   ├── transparency/page.tsx          # Transparência e prestação de contas
│   ├── news/
│   │   ├── page.tsx                   # Lista de notícias
│   │   └── [slug]/page.tsx            # Notícia individual
│   ├── how-to-join/page.tsx           # Benefícios + Google Forms (placeholder)
│   ├── donations/page.tsx             # Impacto + formulário de doação
│   ├── contact/page.tsx               # Endereço + formulário de contato
│   └── actions/
│       └── contact.ts                 # Server Action → tabela contatos
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Nav fixa, transparente → navy no scroll
│   │   └── Footer.tsx                 # 4 colunas + redes sociais
│   ├── sections/
│   │   ├── Hero.tsx                   # Home — hero 2 colunas + wave SVG
│   │   ├── StatsSection.tsx           # Home — contadores animados
│   │   ├── ActionsSection.tsx         # Home — 3 cards de ação
│   │   ├── ProjectsSection.tsx        # Home — 4 núcleos
│   │   ├── EventoNoticiasSection.tsx  # Home — evento + notícias
│   │   ├── MissionSection.tsx         # Seção missão
│   │   ├── ImpactSection.tsx          # Seção impacto
│   │   └── DonationsCTA.tsx           # CTA de doações
│   └── shared/
│       ├── ContactForm.tsx            # Formulário → Supabase
│       ├── DonationForm.tsx           # Formulário → Supabase
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

**Políticas RLS:**
- `INSERT` liberado para o role `anon` (formulários públicos)
- `SELECT` bloqueado para o público

Para recriar as tabelas: execute `supabase/schema.sql` no SQL Editor do painel Supabase.

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — Hero, Stats, Ações, Projetos, Evento + Notícias |
| `/about` | História, Missão/Visão, Valores |
| `/board` | Diretoria, organograma, conselhos, núcleos |
| `/projects` | 6 projetos e núcleos detalhados |
| `/transparency` | Relatórios, financeiro, editais, projetos aprovados |
| `/news` | Grid de notícias *(integração Sanity a implementar)* |
| `/news/[slug]` | Notícia individual |
| `/how-to-join` | Benefícios + Google Forms embed *(placeholder)* |
| `/donations` | Impacto em números + formulário de doação |
| `/contact` | Endereço + formulário integrado ao Supabase |

---

---

## Acessibilidade (WCAG 2.1 AA)

- `lang="pt-BR"` no `<html>`
- `aria-labelledby` em todas as `<section>`
- `aria-hidden="true"` em elementos decorativos
- `aria-label` em botões sem texto visível
- HTML semântico: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- `role="status"` e `role="alert"` nos feedbacks de formulários
- Vídeos em Libras planejados (componente `LibrasVideo.tsx` criado)

---

## Pendências

- [ ] Integração com Sanity CMS (notícias e conteúdo dinâmico)
- [ ] Deploy na Vercel + variáveis de ambiente de produção
- [ ] Google Forms real em `/how-to-join`
- [ ] Chave PIX real em `/donations`
- [ ] Endereço e e-mail reais no Footer e em `/contact`
- [ ] Vídeos reais em Libras (`LibrasVideo.tsx`)
- [ ] Página `/news/[slug]` conectada ao Sanity

---

## Repositório

**GitHub:** [avs-surdos-sp/vemsonhar-portal](https://github.com/avs-surdos-sp/vemsonhar-portal)
**Branch principal:** `main`
