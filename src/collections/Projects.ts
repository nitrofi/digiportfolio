import { slugField } from "@/fields/slug"
import { CollectionConfig } from "payload"

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Projekti",
    plural: "Projektit",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Perustiedot",
          fields: [
            {
              label: "Asiakas",
              name: "customer",
              type: "relationship",
              relationTo: "customers",
              required: true,
              maxDepth: 3,
            },
            {
              label: "Otsikko",
              name: "title",
              type: "text",
            },
            {
              label: "Kuva",
              name: "image",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Alkamisajankohta",
              name: "startedAt",
              type: "date",
            },
            {
              label: "Julkinen referenssi",
              name: "isPublic",
              type: "checkbox",
            },
          ],
        },
        {
          label: "Sisältö",
          fields: [
            {
              label: "Johdanto",
              name: "introduction",
              type: "richText",
            },
            {
              label: "Keskeiset asiat",
              name: "keypoints",
              type: "richText",
            },
          ],
        },
        {
          label: "Luokittelu",
          fields: [
            {
              label: "Palvelut",
              name: "services",
              type: "relationship",
              relationTo: "services",
            },
            {
              label: "Kompleksisuus",
              name: "complexity",
              type: "select",
              options: ["low", "medium", "high"],
            },
            {
              label: "Laajuus",
              name: "wideness",
              type: "select",
              options: ["low", "medium", "high"],
            },
            {
              label: "Tagit",
              name: "tags",
              type: "join",
              collection: "tags",
              on: "projects",
              hasMany: true,
              maxDepth: 2,
              admin: {
                description: "Tags for the case",
                position: "sidebar",
              },
            },
          ],
        },
        {
          label: "Tiimi",
          fields: [
            {
              label: "Tiimi",
              name: "users",
              type: "relationship",
              relationTo: "users",
              hasMany: true,
            },
          ],
        },
      ],
    },
    ...slugField("title"),
  ],
}
