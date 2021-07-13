This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You should start by installing both Next and Sanity's dependancies with this command:

```bash
yarn install && yarn studio:install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## This Starter Has Opinions

- There are explicit paths defined in `jsconfig.json`
- Customizing the Chakra theme should be done in `./src/theme`
- This starter relies on [next-sanity](https://github.com/sanity-io/next-sanity). You can find the configured library in `/src/lib/sanity`
  - This also means you should be well versed in [GROQ](https://www.sanity.io/docs/overview-groq). You are able to deploy a GraphQL endpoint for your studio and use your library of choice to fetch for that data, but for a more robust and frictionless experience, rock with GROQ.
