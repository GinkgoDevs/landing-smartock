import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smartock — Gestión inteligente para PyMEs argentinas",
  description:
    "Sistema de gestión para comercios y PyMEs. Controlá ventas, stock, caja y facturación desde un sistema que se adapta a tu operación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
