import type { CollectionConfig } from "payload"

import { authenticated } from "../../access/authenticated"

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email", "team"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "team",
      type: "relationship",
      relationTo: "teams",
    },
    {
      name: "startedAt",
      type: "date",
    },
    {
      name: "bio",
      type: "richText",
    },
    {
      name: "tags",
      type: "join",
      on: "users",
      collection: "tags",
      maxDepth: 2,
    },
  ],
  timestamps: true,
}
