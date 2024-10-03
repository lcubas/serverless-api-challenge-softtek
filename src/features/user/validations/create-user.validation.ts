import { z } from "zod";
import { isEmailUnique } from "../rules/isEmailUnique";

export const createUserValidation = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address").refine(isEmailUnique, {
    message: "Email already in use",
  }),
});
