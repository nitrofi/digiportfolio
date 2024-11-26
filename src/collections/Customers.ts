import { slugField } from "@/fields/slug"
import { CollectionConfig } from "payload"

export const Customers: CollectionConfig = {
  slug: "customers",
  labels: {
    singular: "Asiakas",
    plural: "Asiakkaat",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
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
    {
      name: "projects",
      type: "join",
      collection: "projects",
      on: "customer",
      maxDepth: 3,
    },
    ...slugField("name"),
  ],
}
