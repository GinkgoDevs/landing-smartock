import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smartock - Gestion inteligente para PyMEs argentinas",
  description:
    "Smartock simplifica stock, facturacion, ventas y analisis con IA para comercios argentinos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
