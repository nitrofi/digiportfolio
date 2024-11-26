import type { CollectionConfig } from "payload"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"
import { slugField } from "@/fields/slug"

export const Teams: CollectionConfig = {
  slug: "teams",
  labels: {
    singular: "Tiimi",
    plural: "Tiimit",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "teamUsers",
      type: "join",
      hasMany: true,
      collection: "users",
      on: "team",
      maxDepth: 2,
      admin: {
        description: "Tiimin jäsenet",
      },
    },
    ...slugField("title"),
  ],
}
