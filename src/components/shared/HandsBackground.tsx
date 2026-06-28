'use client'

import { useEffect, useState } from 'react'

type Hand = {
  id: number
  left: number      // %
  top: number       // %
  size: number      // px
  delay: number     // s
  duration: number  // s
  color: string
  rotate: number    // deg
}

const COLORS = ['#F7931E', '#0069B4', '#14387F', '#FFFFFF']

/**
 * Distribuição em grid com jitter — garante que as mãos cubram toda a área
 * uniformemente, evitando concentração em um canto.
 */
function generateHands(cols: number, rows: number): Hand[] {
  const hands: Hand[] = []
  const cellW = 100 / cols
  const cellH = 100 / rows
  let id = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // posição base da célula + jitter aleatório (até ~70% do tamanho da célula)
      const left = c * cellW + Math.random() * cellW * 0.7
      const top = r * cellH + Math.random() * cellH * 0.7
      hands.push({
        id: id++,
        left,
        top,
        size: 18 + Math.random() * 36,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotate: Math.random() * 360,
      })
    }
  }
  return hands
}

type Props = {
  cols?: number
  rows?: number
  className?: string
}

export default function HandsBackground({ cols = 8, rows = 5, className = '' }: Props) {
  const [hands, setHands] = useState<Hand[]>([])

  useEffect(() => {
    setHands(generateHands(cols, rows))
  }, [cols, rows])

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {hands.map((h) => (
        <span
          key={h.id}
          className="hands-bg-emoji absolute select-none"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: `${h.size}px`,
            color: h.color,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            transform: `rotate(${h.rotate}deg)`,
            opacity: 0,
          }}
        >
          🖐
        </span>
      ))}
    </div>
  )
}
