/* eslint-disable prettier/prettier */
import type { CollectionConfig } from 'payload/types'

const Movies: CollectionConfig = {
  slug: 'movies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'release_date',
      type: 'date',
      label: 'Release Date',
      required: true,
    },
    {
      name: 'actors',
      type: 'relationship',
      label: 'Actors',
      relationTo: 'actors',
      hasMany: true,
      admin: {
        allowCreate: true,
      },
    },
    {
      name: 'poster',
      type: 'upload',
      label: 'Poster',
      relationTo: 'media',
      required: true,
    },
  ],
  timestamps: false,
}

export default Movies
