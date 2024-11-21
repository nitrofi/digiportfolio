import { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "cases",
      type: "relationship",
      relationTo: "cases",
    },
  ],
}
