'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

type Props = {
  value: string
  label?: string
}

export default function CopyPixButton({ value, label = 'Copiar chave' }: Props) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Chave copiada' : label}
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg border transition-all duration-200 ${
        copied
          ? 'bg-[#14387F] text-white border-[#14387F]'
          : 'bg-white text-[#14387F] border-[#14387F]/20 hover:border-[#14387F] hover:bg-[#14387F]/5'
      }`}
    >
      {copied ? (
        <>
          <Check size={14} aria-hidden="true" />
          Copiado!
        </>
      ) : (
        <>
          <Copy size={14} aria-hidden="true" />
          {label}
        </>
      )}
    </button>
  )
}
