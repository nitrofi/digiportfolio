import { CollectionConfig } from "payload"

export const Customers: CollectionConfig = {
  slug: "customers",
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "website",
      type: "text",
    },
  ],
}
