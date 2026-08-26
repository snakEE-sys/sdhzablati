import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./editor-styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const monumentExtended = localFont({
  src: [
    {
      path: "./fonts/MonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MonumentExtended-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-monument",
});
export const metadata: Metadata = {
  title: "SDH Bohumín - Záblatí",
  description: "Web sboru dobrovolných hasičů Bohumín - Záblatí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monumentExtended.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
