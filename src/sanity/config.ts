import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { schemaTypes } from './schemas'

export const sanityConfig = defineConfig({
  projectId: 'vaonnaw6',
  dataset: 'production',
  title: 'ASESP — Portal CMS',
  apiVersion: '2024-01-01',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    comments: {
      enabled: false,
    },
  },
})
