'use client'

import { useState } from 'react'

type Props = {
  photo?: string
  name: string
  role: string
  photoPosition?: string
  photoScale?: number
  fallbackBg?: string
  fallbackColor?: string
  fallbackChar?: string
  isHeading?: boolean
}

export default function MemberCard({
  photo,
  name,
  role,
  photoPosition,
  photoScale,
  fallbackBg,
  fallbackColor,
  fallbackChar,
  isHeading = true,
}: Props) {
  const [active, setActive] = useState(false)

  const HeadingTag = isHeading ? 'h3' : 'h4'

  return (
    <li
      className={`rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group ${
        active ? 'is-active' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => setActive((v) => !v)}
        aria-pressed={active}
        aria-label={`${name} — ${role}`}
        className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0069B4]"
      >
        <div className="relative h-72 sm:h-60 md:h-60 lg:h-64 w-full">
          {/* Foto */}
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt={name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{
                objectPosition: photoPosition ?? 'center 25%',
                transform: `scale(${photoScale ?? 1})`,
                transformOrigin: photoPosition ?? 'center 25%',
              }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center font-extrabold text-4xl"
              style={{ background: fallbackBg, color: fallbackColor }}
            >
              {fallbackChar ?? name.charAt(0)}
            </div>
          )}

          {/* Rodapé com nome (default) */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-4 py-4 transition-opacity duration-300 group-hover:opacity-0 ${
              active ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)' }}
          >
            <HeadingTag
              className="font-extrabold text-white text-base leading-snug"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
            >
              {name}
            </HeadingTag>
          </div>

          {/* Overlay com cargo (hover / tap ativo) */}
          <div
            className={`absolute inset-0 flex items-center justify-center px-4 text-center transition-opacity duration-300 group-hover:opacity-100 ${
              active ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: 'rgba(255,255,255,0.85)' }}
          >
            <p className="font-extrabold text-sm uppercase tracking-widest text-black leading-snug">
              {role}
            </p>
          </div>
        </div>
      </button>
    </li>
  )
}
