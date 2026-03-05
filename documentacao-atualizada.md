# Documentação Atualizada — vemsonhar Portal ASESP

**Projeto:** Portal institucional da Associação dos Surdos do Estado de São Paulo
**Repositório:** github.com/avs-surdos-sp/vemsonhar-portal
**Data:** Março 2026

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 — App Router + TypeScript |
| Estilização | Tailwind CSS + Shadcn UI (new-york) |
| Banco de dados | Supabase (PostgreSQL + RLS) ← substituiu Firebase (decisão aprovada) |
| CMS | Sanity *(pendente)* |
| Deploy | Vercel *(pendente)* |
| Fonte | Inter (Google Fonts) |

> **Nota:** O documento original (`ASESP_decisoes_tecnicas.md`) previa Firebase. A decisão foi alterada para Supabase por preferência técnica — aprovado. O sistema de carteirinhas (Firebase) continua separado e não é integrado ao portal.

---

## Identidade Visual

### Paleta de Cores Completa

| Papel | Hex |
|---|---|
| Azul marinho — fundo hero, navbar, rodapé, títulos | `#1B3A6B` |
| Azul médio — links, destaques secundários | `#1565C0` |
| Laranja/coral — botões de ação principal (Doe, Seja Associado) | `#F26522` |
| Ciano — detalhes, ícones, separadores, tags | `#00B4D8` |
| Fundo geral das páginas | `#FFFFFF` |
| Fundo de seções alternadas | `#F5F7FA` |
| Texto principal | `#1a1a2e` |

### Logotipo
Ícone SVG de mão em movimento (referência à Libras) com gradiente laranja. Texto: "vemsonhar" em branco bold + "ASESP" em ciano abaixo.

### Frase institucional
> *"Sonhando junto com a Comunidade Surda em todas as gerações"*

---

## Menu Principal (conforme decisões da presidência da ASESP)

| Item | Rota | Status |
|---|---|---|
| Início | `/` | ✅ Implementado |
| Quem Somos | `/sobre` | ✅ Implementado |
| Diretoria | `/diretoria` | 🔜 Pendente |
| Projetos | `/projetos` | 🔜 Pendente |
| Transparência | `/transparencia` | 🔜 Pendente |
| Notícias | `/noticias` | ✅ Implementado (placeholder) |
| Seja Associado | `/como-se-associar` | ✅ Implementado (placeholder) |
| Doe | `/doacoes` | ✅ Implementado |
| Contato | `/contato` | ✅ Implementado |

> **Atenção — Header:** O `Header.tsx` atual contém apenas: Quem Somos, Notícias, Doações, Contato. Os links de **Diretoria**, **Projetos** e **Transparência** ainda precisam ser adicionados ao `navLinks`.

---

## Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx                     ← fonte Inter, Header, Footer, pt-16
│   ├── globals.css                    ← tokens de cor AVS
│   ├── page.tsx                       ← Home
│   ├── sobre/page.tsx
│   ├── diretoria/page.tsx             ← PENDENTE (criar)
│   ├── projetos/page.tsx              ← PENDENTE (criar)
│   ├── transparencia/page.tsx         ← PENDENTE (criar)
│   ├── noticias/page.tsx
│   ├── noticias/[slug]/page.tsx
│   ├── como-se-associar/page.tsx
│   ├── doacoes/page.tsx
│   ├── contato/page.tsx
│   └── actions/
│       ├── contato.ts                 ← Server Action → Supabase
│       ├── doacoes.ts                 ← Server Action → Supabase
│       └── newsletter.ts             ← Server Action → Supabase
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AcoesSection.tsx
│   │   ├── ProjetosSection.tsx
│   │   ├── EventoNoticiasSection.tsx
│   │   ├── MissaoSection.tsx          ← usado em /sobre
│   │   ├── ImpactoSection.tsx         ← usado em /sobre e /doacoes
│   │   └── DoacoesCTA.tsx             ← usado em /doacoes
│   └── shared/
│       ├── ContatoForm.tsx
│       ├── DoacaoForm.tsx
│       ├── NewsletterForm.tsx
│       └── LibrasVideo.tsx
│
└── lib/
    └── supabase.ts

supabase/
└── schema.sql
```

---

## Páginas Implementadas

### `/` — Página Inicial
**Status:** ✅ Implementado

Seções:
- **Hero** — 2 colunas, gradiente navy, glass-card com video placeholder, wave SVG
- **StatsSection** — 4 indicadores de impacto com contador animado (IntersectionObserver)
- **AcoesSection** — 3 cards de ação rápida: Seja Associado / Doe / Conheça os Projetos
- **ProjetosSection** — 4 núcleos em cards visuais
- **EventoNoticiasSection** — Próximo evento + 3 últimas notícias

### `/sobre` — Quem Somos
**Status:** ✅ Implementado

Seções:
- História da ASESP
- Linha do tempo (2012–2024)
- Missão e Visão
- Valores (Inclusão, Acessibilidade, Identidade)
- CTA para se associar

### `/noticias` — Blog / Notícias
**Status:** ✅ Estrutura criada (conteúdo dinâmico pendente — Sanity)

Categorias previstas: Eventos realizados, Artigos sobre direitos, Conquistas, Datas comemorativas, Produção acadêmica.

### `/como-se-associar` — Seja Associado
**Status:** ✅ Implementado (Google Forms placeholder)

Benefícios da associação + embed de Google Forms (aguardando formulário real da diretoria).

### `/doacoes` — Área de Doação
**Status:** ✅ Implementado (parcialmente)

Implementado:
- Seção de impacto animada (ImpactoSection)
- Formulário de doação → Supabase
- CTA visual (DoacoesCTA)

Pendente (conforme documento original):
- PIX institucional (chave real)
- Doação recorrente mensal
- Apadrinhamento de idoso
- Patrocínio empresarial
- Voluntariado
- Destaque visual de impacto dos recursos (ex: "R$40 = alimentação de 1 encontro")

### `/contato` — Contato
**Status:** ✅ Implementado

Endereço (placeholder) + e-mail (placeholder) + formulário → Supabase.

---

## Páginas Pendentes de Desenvolvimento

### `/diretoria` — Diretoria e Estrutura Administrativa
**Status:** 🔜 Pendente

Conteúdo previsto:
- Organograma visual da estrutura administrativa
- Foto + mini currículo de cada membro da diretoria
- Conselho Fiscal
- Conselho Deliberativo
- Núcleos temáticos vinculados à diretoria

### `/projetos` — Projetos e Núcleos
**Status:** 🔜 Pendente

Itens previstos (6):
1. Núcleo dos Idosos Surdos
2. Núcleo das Mulheres Surdas
3. Núcleo das Crianças, Adolescentes e Jovens Surdos
4. Cursos e Oficinas de Formação
5. Eventos Culturais
6. Parcerias institucionais

Cada item deve conter: **Objetivo / Público-alvo / Resultados / Fotos / Como apoiar**

### `/transparencia` — Transparência e Prestação de Contas
**Status:** 🔜 Pendente

Conteúdo previsto:
- Relatórios anuais: 2022, 2023, 2024 (PDFs para download)
- Demonstrativo financeiro simplificado
- Editais e parcerias
- Projetos aprovados

---

## Páginas Futuras (planejamento)

### Área do Associado
Previsto no documento original:
- Cadastro online integrado ao sistema de carteirinhas
- Emissão de declaração de associado
- Atualização de dados
- Pagamento de mensalidade
- Comunicação interna

> Depende de decisão arquitetural: o sistema de carteirinhas usa Firebase separado. A integração com o portal (Supabase) precisa ser planejada.

### Parcerias Institucionais
Logotipos de escolas bilíngues, universidades, empresas parceiras e órgãos públicos. Pode ser seção na Home ou página própria.

---

## Layout (`layout.tsx`)

- Fonte **Inter** carregada via `next/font/google` (pesos 300–900)
- `suppressHydrationWarning` no `<html>`
- `lang="pt-BR"`
- `pt-16` no wrapper `<div className="flex-1">` para compensar o header fixo
- Metadata com `openGraph` configurado (título, descrição, locale `pt_BR`)

---

## Header (`Header.tsx`)

**Comportamento:**
- Fixo no topo — `position: fixed`, `z-50`, altura `h-16`
- Transparente ao carregar → `bg-[#1B3A6B]/95 + backdrop-blur-md` após 40px de scroll (transição 500ms)
- Barra de progresso laranja na borda inferior — mostra % da página lida pelo usuário

**Logo:**
- Ícone SVG de mão (Libras) com gradiente laranja
- "vemsonhar" em branco bold + "ASESP" em ciano abaixo
- Animação `scale-110 + rotate-3` no hover

**Nav Desktop — atual (incompleto):**
- Links: Quem Somos, Notícias, Doações, Contato
- Link ativo: `bg-white/10` + ponto laranja abaixo
- Botão CTA "Seja Associado" → `/como-se-associar`

**Nav Desktop — links a adicionar:**
- Diretoria → `/diretoria`
- Projetos → `/projetos`
- Transparência → `/transparencia`

**Nav Mobile:**
- Botão hamburger/X com `aria-expanded` e `aria-controls`
- Menu slide-down animado via `max-h`
- Fundo `rgba(27,58,107,0.97) + backdrop-blur`
- Fecha automaticamente ao trocar de rota (`usePathname`)

---

## Seções da Home

### `Hero.tsx`

**Layout:** Grid 2 colunas em `lg:`, stack em mobile
**Fundo:** `linear-gradient(135deg, #1B3A6B → #0d2347 → #1a3a6e)`
**`-mt-16`** para sobrepor o header transparente

**Decorações (aria-hidden):**
- Glow ciano top-right: `radial-gradient` 700×700px, opacidade 40%
- Glow laranja bottom-left: `radial-gradient` 500×500px, opacidade 30%
- Linha vertical ciano: 2px × 160px, opacidade 40%
- Dot grid: `radial-gradient` 1px branco, espaçamento 32px, opacidade 3%

**Coluna Esquerda:**
- Badge com ponto pulsante (`animate-pulse-ring`) + texto ciano uppercase
- `<h1>` com `gradient-text` em "Comunidade Surda paulista"
- Parágrafo subtitle em `text-white/65`
- Botão primário: gradiente laranja, `rounded-full`, shadow laranja
- Botão secundário: outline branco, `backdrop-blur-sm`
- Mini stats inline: "340+ associados" e "12 anos de história"

**Coluna Direita (glass-card):**
- Card com `backdrop-blur` + borda branca translúcida
- Botão play circular com `animate-float` e `animate-pulse-ring`
- Mini stats: 340+ Associados, 85+ Eventos, 12 Anos
- Badge flutuante "🤟 Em Libras" (ciano)
- Chip "Comunidade ativa" com ponto verde pulsante

**Rodapé do Hero:**
- Wave SVG branca → transição suave para `StatsSection` branca
- Scroll indicator (`ArrowDown`, `animate-scroll-bounce`)

---

### `StatsSection.tsx` *(client component)*

**Fundo:** Branco
**Dados:** 4 cards — Associados ativos (340+), Idosos atendidos (120+), Eventos realizados (85+), Anos de história (12)

**Contador animado:**
- Usa `IntersectionObserver` com `threshold: 0.3`
- Animação dispara apenas quando a seção entra na viewport
- Duração: 1800ms, 60 steps
- `setCounters` com `Math.min` garante que não ultrapassa o target

**Cada card:**
- Borda superior 3px colorida por card
- Ícone Lucide em background com 10% opacidade da cor
- Número `text-5xl font-extrabold tabular-nums`
- `transitionDelay` escalonado: 0ms, 60ms, 120ms, 180ms (stagger)
- Hover: `translateY(-8px) + shadow-lg`

---

### `AcoesSection.tsx`

**Fundo:** `#F5F7FA`
**Cards:** 3 — Seja Associado (navy), Faça uma Doação (laranja), Conheça os Projetos (ciano)

**Card "Seja Associado"** (destaque):
- Borda `border-[#1B3A6B]/30`
- Faixa superior `linear-gradient(90deg, navy, ciano)`

**Todos os cards:**
- Ícone em container com `background: color + 18` (10% opacidade)
- Ícone escala 110% no hover
- Fundo do card ganha tint de 5% da cor no hover
- Botão com `linear-gradient + boxShadow` colorida
- Hover: `translateY(-8px) + shadow-xl`

---

### `ProjetosSection.tsx`

**Fundo:** Branco
**Cards:** 4 núcleos

| Núcleo | Ícone | Cor | Tag |
|---|---|---|---|
| Idosos Surdos | Users | `#00B4D8` | Cuidado |
| Mulheres Surdas | Star | `#F26522` | Empoderamento |
| Juventude Surda | Leaf | `#1565C0` | Educação |
| Cursos em Libras | BookOpen | `#1B3A6B` | Formação |

**Cada card:**
- Header com `bgLight` (versão clara da cor) + ícone colorido
- Tag de categoria no canto superior direito
- Ícone escala 110% no hover (`group-hover:scale-110`)
- "Saiba mais →" aparece com `opacity-0 → opacity-100` no hover
- Hover: `translateY(-8px) + shadow-xl`

---

### `EventoNoticiasSection.tsx`

**Fundo:** `linear-gradient(135deg, #1B3A6B → #1565C0)`
**Layout:** Grid 2 colunas em `lg:`

**Coluna Esquerda — Próximo Evento:**
- Badge de data com gradiente laranja (dia + mês)
- Ícone `MapPin` para localização
- Descrição separada por `border-t border-white/10`
- Botão "Confirmar presença" → `/contato`

**Coluna Direita — Últimas Notícias:**
- 3 itens com tag colorida por categoria:
  - Institucional → `#1B3A6B` (exibido como `#90b4e0` para contraste)
  - Eventos → `#00B4D8`
  - Cursos → `#F26522`
- Seta `ArrowRight` anima `translateX(+4px)` no hover
- Título muda para ciano no hover
- Separadores `border-b border-white/10` entre itens
- Link "Ver todas as notícias →" com seta animada

---

## Componentes de Outras Páginas

### `MissaoSection.tsx`
Usado em `/sobre`. 3 cards de pilares institucionais com borda superior colorida dinâmica via `style={{ borderTopColor: p.color }}`.

### `ImpactoSection.tsx` *(client component)*
Usado em `/sobre` e `/doacoes`. Mesmo padrão de `IntersectionObserver` + contador animado. Fundo gradient navy. Dados: 30+ Anos, 500+ Associados, 100+ Eventos, 15+ Municípios.

### `DoacoesCTA.tsx`
Usado em `/doacoes`. Fundo `linear-gradient(135deg, #F26522 → #d4501a → #1B3A6B)`. Botões: "Quero Contribuir" (branco) + "Seja Associado" (outline branco).

---

## Formulários e Server Actions

| Formulário | Arquivo | Tabela Supabase |
|---|---|---|
| Contato | `actions/contato.ts` | `contatos` |
| Doação | `actions/doacoes.ts` | `doacoes` |
| Newsletter | `actions/newsletter.ts` | `newsletter` |

**Validação:** Zod + React Hook Form
**Feedback:** `role="status"` (sucesso) e `role="alert"` (erro)

---

## Banco de Dados — Supabase

### Tabelas

**`contatos`**
```sql
id, nome, email, assunto, mensagem, created_at
```

**`doacoes`**
```sql
id, nome, email, valor_pretendido, modalidade, mensagem, created_at
```

**`newsletter`**
```sql
id, email, created_at
```

### Políticas RLS
- `INSERT` liberado para `anon`
- `SELECT` bloqueado para o público
- Para recriar: executar `supabase/schema.sql` no SQL Editor do painel Supabase

### Variáveis de ambiente
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Acessibilidade (WCAG 2.1 AA)

| Requisito | Status |
|---|---|
| `lang="pt-BR"` no `<html>` | ✅ |
| `aria-labelledby` em todas as `<section>` | ✅ |
| `aria-hidden="true"` em elementos decorativos | ✅ |
| `aria-label` em botões sem texto visível | ✅ |
| HTML semântico (`<header>`, `<main>`, `<nav>`, etc.) | ✅ |
| `role="status"` / `role="alert"` nos feedbacks | ✅ |
| `sr-only` para textos de leitores de tela | ✅ |
| `LibrasVideo.tsx` — embed YouTube em Libras | ✅ criado (não integrado) |
| Vídeos em Libras em **todas** as páginas | 🔜 Pendente |
| Opção de alto contraste | 🔜 Pendente |
| Leitor de texto acessível | 🔜 Pendente |
| Linguagem simples (plain language) | 🔜 Verificar conteúdo |
| Área em Libras explicando como se associar | 🔜 Pendente |

---

## Pendências

### Páginas faltando (estrutura aprovada pela presidência)
- [ ] Criar `/diretoria` — organograma, fotos + mini currículo da diretoria, conselhos, núcleos
- [ ] Criar `/projetos` — 6 itens detalhados (objetivo, público, resultados, como apoiar)
- [ ] Criar `/transparencia` — relatórios anuais, financeiro, editais, projetos aprovados

### Header
- [ ] Adicionar Diretoria, Projetos e Transparência ao `navLinks` no `Header.tsx`

### Conteúdo real
- [ ] Chave PIX real (substituir `pix@asesp.org.br`)
- [ ] Endereço e e-mail reais no Footer e em `/contato`
- [ ] Vídeos reais em Libras em todas as páginas (usar `LibrasVideo.tsx`)
- [ ] Google Forms real em `/como-se-associar`
- [ ] Fotos da diretoria, projetos e eventos
- [ ] Conteúdo real substituindo todos os placeholders

### Integrações
- [ ] Sanity CMS — notícias e conteúdo dinâmico
- [ ] `/noticias/[slug]` conectada ao Sanity
- [ ] Doações: PIX, recorrente mensal, apadrinhamento, patrocínio, voluntariado
- [ ] Parcerias Institucionais — logos de parceiros

### Deploy
- [ ] Deploy Vercel + variáveis de ambiente de produção
- [ ] Domínio final configurado

### Futuro
- [ ] Área do Associado — integração com sistema de carteirinhas (Firebase)
- [ ] Alto contraste e leitor de texto
- [ ] Área em Libras de "como se associar"

---

*Documento baseado em `ASESP_decisoes_tecnicas.md` (planejamento original) + implementação real — Março 2026*
