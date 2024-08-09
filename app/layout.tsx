import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.scss";
import Image from "next/image";

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
        <footer>
          <span className="footer-text">
            2024
            <a href="https://github.com/cornfrog" target="_blank">cornfrog</a>
            <Image src={"./github-icon.svg"} alt={"github icon"} height={20} width={20}/>
          </span>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
