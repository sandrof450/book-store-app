import { z } from "zod";

//SCHEMA LOGIN
//----------------INICIO----------------------
export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha precisa de pelo menos 6 caracteres"),

});
//----------------FIM----------------------