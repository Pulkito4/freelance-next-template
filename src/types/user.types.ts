/**
 * Global TypeScript types and Zod schemas.
 *
 * IMPORTANT FOR FUTURE AGENTS:
 * All global interfaces should be placed within this `src/types` folder.
 * Do not cram all interfaces into a single file! Similarly, do not create a separate file for every single interface.
 * Instead, group similar and relevant interfaces together by use-case (e.g., `user.types.ts`, `auth.schemas.ts`, `api.types.ts`).
 */

import { z } from "zod";

// Example of a grouped schema/type for User
export const UserSchema = z.object({
    id: z.string(),
    name: z.string().min(2),
    email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
