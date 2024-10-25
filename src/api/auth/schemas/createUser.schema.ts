import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
  birthday: z.string(),
});

export type CreateUser = z.infer<typeof createUserSchema>;
