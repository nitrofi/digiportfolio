# Nitro Digital Team Portfolio

Portfolio website for Nitro's digital team, showcasing team members, projects, and tools.

## Technologies

- Next.js 15 (App Router)
- Payload CMS
- TypeScript
- Tailwind CSS
- PostgreSQL

## Development Environment Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:nitrofi/digiportfolio.git
   cd nitro-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

The application runs at [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy the .env.example file as .env and fill in the following variables:

```plaintext
PAYLOAD_SECRET=your-secret-key
DATABASE_URI=postgres://postgres:<password>@127.0.0.1:5432/nitro-portfolio
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## PayloadCMS Admin

Admin panel: [http://localhost:3000/admin]

## Known issues

- Duplicate slugs are not handled.
