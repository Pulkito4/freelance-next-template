# Freelance Next.js Template

This is a reusable, battle-tested Next.js (App Router) template tailored for rapid freelance project development. 
It enforces strict coding standards, decoupling of concerns, and integration with modern UI libraries.

## 🚀 Tech Stack
- **Framework:** Next.js (App Router only, React 19)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + PostCSS
- **Component System:** [shadcn/ui](https://ui.shadcn.com/) and Aceternity UI
- **Forms & Validation:** React Hook Form + Zod (to be installed per project)

## 📂 Folder Architecture
- `/src/app`: Routing and page composition. Server Components by default.
- `/src/components/ui`: Auto-generated `shadcn/ui` components or raw external library components.
- `/src/components/shared`: Custom reusable components across the app (e.g., Header, generic forms).
- `/src/lib`: Utility functions (e.g., `utils.ts` for Tailwind), API clients, and constants.
- `/src/actions`: Next.js Server Actions. Keep business logic here (try/catch decoupled).
- `/src/types`: Global TypeScript interfaces and Zod schemas, grouped by feature domain.
- `/src/hooks`: Custom React hooks (e.g., `useDebounce`).

## 🤖 Instructions for AI Agents
When generating code in this repository:
1. **Never** hallucinate generic components if a `shadcn/ui` option exists. Use `npx shadcn@latest add <component>`.
2. All components must be **Server Components** unless they use hooks/browser APIs (`"use client"`).
3. **Types:** Define explicit interfaces for all props in `src/types` and import them. No `any` types.
4. **Server Actions:** All actions in `src/actions` must have a robust `try/catch` and return standardized `{ success: boolean, message?: string, error?: string }` objects.
5. **Secrets:** Do not hardcode secrets. Always use environment variables and update `.env.example`.

## 🛠️ CLI Commands
- `npm run dev`: Start development server on `localhost:3000`.
- `npm run build`: Build production bundle.
- `npm start`: Start production server.
- `npm run lint`: Run ESLint.

Ready. Set. Ship!
