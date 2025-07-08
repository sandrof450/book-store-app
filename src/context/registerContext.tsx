'use client'

import { Register } from "@/constants/types";
import React, { useState } from "react";
import { createContext, useContext } from "react";


// type Registro = {
//   nome: string;
//   email: string;
//   senha: string;
// }

type RegistroContextType = {
  register: Register;
  atualizarRegistro: (data: Register) => void
}

const RegisterContext = createContext<RegistroContextType | undefined>(undefined);



export function RegisterProvider({ children }: {children: React.ReactNode}) {
  const [register, setRegister] = useState<Register>({
    name: "",
    email: "",
    password: "",
    confirmPassWord: "",
  });
  
  const atualizarRegistro = (data: Register) => setRegister(data);

  return (
    <RegisterContext.Provider value={{register, atualizarRegistro}}>
      {children}
    </RegisterContext.Provider>
  );
}

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) throw new Error("useRegistro must be used within a RegistroProvider");
  return context;
}