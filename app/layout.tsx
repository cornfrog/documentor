import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Documentor",
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
        <h1 className="title">Documentor</h1>
        {children}
      </body>
    </html>
  );
}
