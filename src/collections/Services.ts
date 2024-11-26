import { slugField } from "@/fields/slug"
import { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Palvelu",
    plural: "Palvelut",
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
      name: "description",
      type: "textarea",
    },
    {
      name: "projects",
      type: "join",
      collection: "projects",
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
    ...slugField("title"),
  ],
}
