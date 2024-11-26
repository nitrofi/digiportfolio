import { slugField } from "@/fields/slug"
import { CollectionConfig } from "payload"

export const Tags: CollectionConfig = {
  slug: "tags",
  labels: {
    singular: "Tagi",
    plural: "Tagit",
  },
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
      name: "projects",
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
      maxDepth: 2,
    },
    {
      name: "users",
      type: "join",
      collection: "users",
      on: "tags",
      hasMany: true,
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
    },
    ...slugField("title"),
  ],
}
