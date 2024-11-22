import { CollectionConfig } from "payload"

export const Cases: CollectionConfig = {
  slug: "cases",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "customer",
      type: "relationship",
      relationTo: "customers",
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
    },
    {
      name: "startedAt",
      type: "date",
    },
    {
      name: "introduction",
      type: "richText",
    },
    {
      name: "complexity",
      type: "select",
      options: ["low", "medium", "high"],
    },
    {
      name: "wideness",
      type: "select",
      options: ["low", "medium", "high"],
    },
    {
      name: "isPublic",
      type: "checkbox",
    },
    {
      name: "team",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "tags",
      type: "join",
      collection: "tags",
      on: "cases",
      hasMany: true,
      maxDepth: 2,
      admin: {
        description: "Tags for the case",
        position: "sidebar",
      },
    },
    {
      name: "keypoints",
      type: "richText",
    },
  ],
}
