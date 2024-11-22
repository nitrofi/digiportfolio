# Nitro Digitiimin Portfolio

Nitron digitiimin portfolio-sivusto, joka esittelee tiimin jäsenet, projektit ja osaamisen. Rakennettu käyttäen Next.js 15 ja PayloadCMS:ää.

## Teknologiat

- Next.js 15 (App Router)
- Payload CMS
- TypeScript
- Tailwind CSS
- PostgreSQL

## Kehitysympäristön pystytys

1. Kloonaa repositorio:

   ```bash
   git clone git@github.com:nitrofi/digiportfolio.git
   cd nitro-portfolio
   ```

2. Asenna riippuvuudet:

   ```bash
   pnpm install
   ```

3. Kopioi ympäristömuuttujat:

   ```bash
   cp .env.example .env
   ```

4. Käynnistä kehityspalvelin:

   ```bash
    pnpm dev
   ```

Sovellus pyörii osoitteessa [http://localhost:3000](http://localhost:3000)

## Ympäristömuuttujat

Kopioi .env.example tiedosto nimellä .env ja täytä seuraavat muuttujat:

```plaintext
PAYLOAD_SECRET=your-secret-key
DATABASE_URI=postgres://postgres:<password>@127.0.0.1:5432/nitro-portfolio
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## PayloadCMS Admin

Admin-paneeli: http://localhost:3000/admin
