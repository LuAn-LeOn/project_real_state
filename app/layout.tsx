import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { cinzelFont } from "./fonts";


export const metadata: Metadata = {
  title: "Puerta Norte | Inmobiliaria",
  description: "Abrimos puertas, cerramos con confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzelFont.variable} antialiased`}
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
