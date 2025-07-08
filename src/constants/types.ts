import z from "zod";
import { loginSchema, registerSchema } from "./schemas";

export type User = {
    name?: string;
    email: string;
    password?: string;
}

export type LoginData = z.infer<typeof loginSchema>

export type Register = {
  name?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassWord: string;
}

export type RegisterData = z.infer<typeof registerSchema>