import { CollectionConfig } from "payload"

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "teams",
      type: "relationship",
      relationTo: "teams",
    },
    {
      name: "cases",
      type: "relationship",
      relationTo: "cases",
      hasMany: true,
      maxDepth: 2,
    },
    {
      name: "users",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
    },
  ],
}
