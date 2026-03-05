'use client'

import { NextStudio } from 'next-sanity/studio'
import { sanityConfig } from '@/sanity/config'

export default function StudioPage() {
  return <NextStudio config={sanityConfig} />
}
