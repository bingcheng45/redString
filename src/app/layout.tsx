import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Dancing_Script } from "next/font/google";

// Font definitions
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "RedString | Connect & Experience",
  description: "Find your perfect match and unlock exclusive experiences together. RedString connects people through meaningful relationships and shared adventures.",
  keywords: "dating app, relationships, exclusive deals, experiences, couples, red string of fate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen bg-neutral-light dark:bg-neutral-dark text-neutral-dark dark:text-neutral-light">
        {children}
      </body>
    </html>
  );
}
