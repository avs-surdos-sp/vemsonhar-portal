'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, ChevronDown } from 'lucide-react'

const EMAIL = 'contato@avemsonhar.org.br'

const clients = [
  {
    name: 'Gmail',
    href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
    logo: '/gmail.png',
  },
  {
    name: 'Outlook',
    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${EMAIL}`,
    logo: '/outlook.png',
  },
  {
    name: 'Apple Mail',
    href: `mailto:${EMAIL}`,
    logo: '/mail.png',
  },
]

export default function EmailClientPicker() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 bg-[#F26522] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#d4501a] transition-all hover:shadow-lg text-base"
        aria-expanded={open}
        aria-controls="email-clients"
      >
        <Mail size={18} aria-hidden="true" />
        Enviar e-mail
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Client picker */}
      {open && (
        <div
          id="email-clients"
          className="w-full max-w-xs bg-white border border-gray-100 rounded-2xl shadow-lg p-5"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center mb-4">
            Escolha seu app de e-mail
          </p>

          <ul className="grid grid-cols-3 gap-3 list-none">
            {clients.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={48}
                    height={48}
                    className="rounded-xl object-contain"
                  />
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-[#1B3A6B] transition-colors text-center leading-tight">
                    {c.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 mb-1">Ou copie o endereço:</p>
            <span className="font-mono text-sm font-semibold text-[#F26522] select-all">
              {EMAIL}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
