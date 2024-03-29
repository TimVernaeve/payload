/* eslint-disable prettier/prettier */
import type { CollectionConfig, FieldHook } from 'payload/types'

const populateFullTitle: FieldHook = async ({ data }) => {
  return `${data.first_name} ${data.last_name}`
}

const Actors: CollectionConfig = {
  slug: 'actors',
  admin: {
    useAsTitle: 'full_name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'first_name',
      type: 'text',
      label: 'First Name',
    },
    {
      name: 'last_name',
      type: 'text',
      label: 'Last Name',
    },
    {
      name: 'full_name',
      type: 'text',
      admin: {
        components: {
          Field: () => null,
        },
      },
      hooks: {
        beforeValidate: [populateFullTitle], // Fix: Wrap the FieldHook function in an array
      },
    },
  ],
  timestamps: false,
}
export default Actors
