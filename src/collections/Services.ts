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
      name: "description",
      type: "textarea",
    },
    {
      name: "cases",
      type: "join",
      collection: "cases",
      on: "services",
      hasMany: true,
      maxDepth: 2,
    },
    {
      name: "tags",
      type: "join",
      collection: "tags",
      on: "services",
      hasMany: true,
      maxDepth: 2,
      admin: {
        description: "Tags for the service",
        position: "sidebar",
      },
    },
  ],
}
