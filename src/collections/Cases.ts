import { CollectionConfig } from "payload"

export const Cases: CollectionConfig = {
  slug: "cases",
  fields: [
    {
      name: "title",
      type: "text",
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
  ],
}
