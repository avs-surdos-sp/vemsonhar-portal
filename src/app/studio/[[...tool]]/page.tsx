'use client'

import { useEffect, useState } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { sanityConfig } from '@/sanity/config'

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <NextStudio config={sanityConfig} />
}
