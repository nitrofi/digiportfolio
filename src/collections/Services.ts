import { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "cases",
      type: "relationship",
      relationTo: "cases",
    },
    {
      name: "tags",
      type: "join",
      collection: "tags",
      on: "services",
      hasMany: true,
      admin: {
        description: "Tags for the service",
        position: "sidebar",
      },
    },
  ],
}
