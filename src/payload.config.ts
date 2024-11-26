// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres"

import sharp from "sharp" // sharp-import
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"

import { Teams } from "./collections/Teams"
import { Media } from "./collections/Media"
import { Users } from "./collections/Users"
import { defaultLexical } from "@/fields/defaultLexical"
import { Services } from "./collections/Services"
import { Projects } from "./collections/Projects"
import { Customers } from "./collections/Customers"
import { Tags } from "./collections/Tags"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      // beforeLogin: ["@/components/BeforeLogin"],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      // beforeDashboard: ["@/components/BeforeDashboard"],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  collections: [Media, Teams, Users, Projects, Services, Customers, Tags],
  plugins: [
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
