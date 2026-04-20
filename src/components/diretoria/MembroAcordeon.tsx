'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Membro = {
  role: string
  name: string
  bio: string
  color: string
  photo: string
  photoPosition?: string
  photoScale?: number
}

export default function MembroAcordeon({ membros }: { membros: Membro[] }) {
  const [aberto, setAberto] = useState<string | null>(null)

  return (
    <ul className="divide-y divide-gray-100 list-none">
      {membros.map((m) => {
        const isOpen = aberto === m.role
        return (
          <li key={m.role}>
            <button
              onClick={() => setAberto(isOpen ? null : m.role)}
              className="w-full flex items-center gap-4 py-4 px-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
              aria-expanded={isOpen}
            >
              {/* Foto */}
              {m.photo ? (
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 shrink-0" style={{ borderColor: `${m.color}40` }}>
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: m.photoPosition ?? 'center',
                      transform: `scale(${m.photoScale ?? 1})`,
                      transformOrigin: m.photoPosition ?? 'center',
                    }}
                  />
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-lg shrink-0"
                  style={{ background: `${m.color}22`, color: m.color }}
                  aria-hidden="true"
                >
                  {m.name === 'A definir' ? '?' : m.name.charAt(0)}
                </div>
              )}

              {/* Nome + cargo */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-base leading-snug">{m.name}</p>
                <p className="text-sm font-semibold mt-0.5" style={{ color: m.color }}>{m.role}</p>
              </div>

              {/* Chevron */}
              <ChevronDown
                size={18}
                className="shrink-0 text-gray-400 transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              />
            </button>

            {/* Bio expandida */}
            {isOpen && (
              <div className="px-3 pb-4 pl-[4.75rem]">
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
