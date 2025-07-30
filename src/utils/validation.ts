import { z } from 'zod';

export const phoneValidate = z.object({
  phone: z
    .string()
    .min(11, "Phone number must be exactly 11 characters.")
    .max(11, "Phone number must be exactly 11 characters.")
    .regex(/^09\d{9}$/, "Phone number must start with '09' and contain only digits."),
});

export type phoneValidate = z.infer<typeof phoneValidate>;
