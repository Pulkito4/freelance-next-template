/**
 * Global TypeScript types.
 *
 * IMPORTANT FOR FUTURE AGENTS:
 * All global interfaces should be placed within this `src/types` folder.
 * Do not cram all interfaces into a single file! Similarly, do not create a separate file for every single interface.
 * Instead, group similar and relevant interfaces together by use-case (e.g., `user.types.ts`, `api.types.ts`).
 * Use `index.ts` as a barrel file to export all the types from these grouped files.
 * 
 * NOTE ON VALIDATIONS:
 * Zod schemas and validation logic are NOT considered types. They should NOT be placed in `src/types`.
 * Instead, place all Zod schemas in the `src/lib/validations/` directory, grouped by feature (e.g., `auth.validations.ts`).
 * You can also use an `index.ts` there as a barrel file.
 */

export interface User {
    id: string;
    name: string;
    email: string;
}
