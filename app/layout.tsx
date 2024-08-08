import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.scss";


export const metadata: Metadata = {
  title: "Documaker",
  description: "Easily generates clean markdown files.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="title">Documaker</h1>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
