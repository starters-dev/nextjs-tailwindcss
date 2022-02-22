## NextJS + TailwindCSS starter

This is a minimal setup starter that includes:

- [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)
- Custom font integration
- Custom Document (preloading custom font)
- Global services (for example, `/services/api`)
- API calls service and example
- Small util help methods
- Responsiveness example

## Quickstart

1. Clone the repo

```bash
> git clone https://github.com/starters-dev/nextjs-tailwind-starter.git web-app && cd web-app
```

2. Install packages

```bash
> yarn
```

3. Run it

```bash
> yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Custom server (e.g. `DigitalOcean`)

If you'd like to run the web app on your own server instead of using platforms like Vercel, Netlify, etc., you can easily do it using provided `Dockerfile`. You just need to add the project as a service to the `docker-compose.yml` file. More detailed example with Traefik proxy and https certificates autogeneration can be found [here](https://github.com/starters-dev/starters.dev-backend).
