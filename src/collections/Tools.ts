import { slugField } from "@/fields/slug"
import { CollectionConfig } from "payload"

export const Tools: CollectionConfig = {
  slug: "tools",
  labels: {
    singular: "Työkalu",
    plural: "Työkalut",
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
              label: "Nimi",
              name: "name",
              type: "text",
            },
            {
              label: "Kuvaus",
              name: "description",
              type: "richText",
            },
            {
              label: "Linkki",
              name: "link",
              type: "text",
            },
            {
              label: "Kuva",
              name: "image",
              type: "upload",
              relationTo: "media",
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
              on: "Tools",
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
