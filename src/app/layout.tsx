import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bar Pichin",
  description: "Bar histórico en Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
