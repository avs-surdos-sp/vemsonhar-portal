-- Tabela: formulário de contato
CREATE TABLE contatos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  mensagem TEXT NOT NULL,
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: registro de intenção de doação
CREATE TABLE doacoes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  valor_pretendido NUMERIC(10, 2),
  criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- RLS: habilitar em todas as tabelas
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;
ALTER TABLE doacoes ENABLE ROW LEVEL SECURITY;

-- Políticas: qualquer pessoa pode inserir, ninguém pode ler via API pública
CREATE POLICY "Permitir inserção pública" ON contatos FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Permitir inserção pública" ON doacoes FOR INSERT TO anon WITH CHECK (true);
