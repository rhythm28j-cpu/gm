# gm

Gamma interview take home assignment — a single page app built with Next.js, TypeScript, and React.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting started

Install dependencies (already done if you used create-next-app):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout and metadata
│   ├── page.tsx      # Single page entry point
│   └── globals.css   # Global styles
└── components/
    └── App.tsx       # Main app component
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Create production build  |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |
