import type { CollectionConfig, FieldHook } from "payload"
import { authenticated } from "../access/authenticated"
import { slugField } from "../fields/slug"

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Käyttäjä",
    plural: "Käyttäjät",
  },
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
      type: "tabs",
      tabs: [
        {
          label: "Perustiedot",
          fields: [
            {
              label: "Nimi",
              name: "name",
              type: "text",
              required: true,
            },
            {
              label: "Kuva",
              name: "image",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Titteli",
              name: "title",
              type: "text",
              required: true,
            },
            {
              label: "Aloituspäivä",
              name: "startedAt",
              type: "date",
            },
          ],
        },
        {
          label: "Sisältö",
          fields: [
            {
              label: "Bio",
              name: "bio",
              type: "richText",
              required: true,
            },
          ],
        },
        {
          label: "Luokittelu",
          fields: [
            {
              label: "Tiimi",
              name: "team",
              type: "relationship",
              relationTo: "teams",
              hasMany: false,
              admin: {
                position: "sidebar",
              },
            },
            {
              label: "Tagit",
              name: "tags",
              type: "relationship",
              relationTo: "tags",
              hasMany: true,
            },
          ],
        },
        {
          label: "Projektit",
          fields: [
            {
              label: "Projektit",
              name: "projects",
              type: "join",
              collection: "projects",
              on: "users",
              hasMany: true,
            },
          ],
        },
      ],
    },
    ...slugField("name"),
  ],
  timestamps: true,
}
