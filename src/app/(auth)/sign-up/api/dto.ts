import { z } from "zod";

export const signupSchema = z.object({
	username: z.string().min(5),
	firstname: z.string().min(2),
	lastname: z.string().min(2),
	password: z.string(),
});
