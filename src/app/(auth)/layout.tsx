import type { Metadata } from "next";
import "@/app/globals.css";
import { RegisterProvider } from "@/context/registerContext";


export const metadata: Metadata = {
  title: "Livraria Fracaro",
  description: "Generated by Sandro Eduardo Fracaro",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <RegisterProvider>
          {children}
        </RegisterProvider>
      </body>
    </html>
  );
}
