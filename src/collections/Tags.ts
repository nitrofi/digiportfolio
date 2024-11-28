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
      name: "description",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "keypoints",
      type: "richText",
    },
    {
      name: "users",
      type: "join",
      collection: "users",
      on: "tags",
      hasMany: true,
      maxDepth: 3,
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
    },
    {
      name: "relatedTags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "linkedTags",
      type: "relationship",
      relationTo: "tags",
      virtual: true,
      hasMany: true,
      hooks: {
        afterRead: [
          async ({ req, siblingData }) => {
            const payload = req.payload

            // Haetaan kaikki tagit jotka viittaavat tähän tagiin
            const linkedTags = await payload.find({
              collection: "tags",
              where: {
                relatedTags: {
                  equals: siblingData.id,
                },
              },
              depth: 0, // Ei haeta relaatioita
            })

            // Palautetaan löydettyjen tagien id:t
            return linkedTags.docs.map((tag) => tag.id)
          },
        ],
      },
    },
    ...slugField("title"),
  ],
}
