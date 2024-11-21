import type { CollectionConfig } from "payload"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"

export const Teams: CollectionConfig = {
  slug: "teams",
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
      name: "members",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
    },
  ],
}
