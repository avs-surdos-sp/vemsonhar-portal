'use server'

import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM ?? 'onboarding@resend.dev'
const TO   = process.env.RESEND_TO   ?? 'contato@avemsonhar.org.br'

interface ContatoData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export async function enviarContato(data: ContatoData) {
  // 1. Salva no Supabase (histórico)
  // Nota: a coluna "assunto" pode ainda não existir na tabela — ignoramos o erro silenciosamente.
  const { error: dbError } = await supabase
    .from('contatos')
    .insert([{ nome: data.nome, email: data.email, mensagem: data.mensagem }])

  if (dbError) {
    console.error('[contato] Supabase error:', dbError.message)
  }

  // 2. Envia e-mail via Resend
  const { data: emailData, error: emailError } = await resend.emails.send({
    from: FROM,
    to:   TO,
    replyTo: data.email,
    subject: `[ASESP] ${data.assunto} — ${data.nome}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#1B3A6B;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:white;margin:0;font-size:20px;font-weight:800">
            📬 Nova mensagem — Portal ASESP
          </h1>
        </div>

        <div style="background:#f5f7fa;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eef2f8">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8;width:110px">
                <span style="color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Nome</span>
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8">
                <span style="font-weight:700;color:#1B3A6B">${data.nome}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8">
                <span style="color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">E-mail</span>
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8">
                <a href="mailto:${data.email}" style="color:#F26522;text-decoration:none;font-weight:600">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8">
                <span style="color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Assunto</span>
              </td>
              <td style="padding:10px 0;border-bottom:1px solid #eef2f8">
                <span style="font-weight:600;color:#374151">${data.assunto.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top:24px">
            <p style="color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin:0 0 10px">Mensagem</p>
            <div style="background:white;border:1px solid #eef2f8;border-radius:10px;padding:20px;white-space:pre-wrap;line-height:1.6;color:#374151">
              ${data.mensagem.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>

          <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;text-align:center">
            Para responder, basta clicar em "Responder" — a resposta vai direto para <strong>${data.email}</strong>.
          </p>
        </div>
      </div>
    `,
  })

  if (emailError) {
    // Log completo para debug no terminal
    console.error('[contato] Resend error:', JSON.stringify(emailError))
    console.error('[contato] FROM:', FROM, '| TO:', TO)
    return { sucesso: false, erro: emailError.message }
  }

  console.log('[contato] E-mail enviado, id:', emailData?.id)
  return { sucesso: true }
}
