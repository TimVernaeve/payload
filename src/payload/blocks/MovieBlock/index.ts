/* eslint-disable prettier/prettier */
import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MovieBlock: Block = {
  slug: 'movieBlock',
  fields: [
    invertBackground,
    {
      name: 'movies',
      type: 'relationship',
      label: 'Movies',
      relationTo: 'movies',
      hasMany: true,
      admin: {
        allowCreate: true,
      },
    },
  ],
}
