import type { Metadata } from "next";
import { Inter } from "next/font/google"; // We import the 'Inter' font here
import "./globals.css";

// This sets up the font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naveena | Cloud Native Developer",
  description: "Portfolio of a Full Stack Cloud Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
         This <body> tag controls the main look of the site.
         We added: 
         1. max-w-2xl -> Restricts width (makes it look like a document)
         2. mx-auto   -> Centers it in the middle of the screen
         3. bg-[#111010] -> Sets that deep dark background color
      */}
      <body className={`${inter.className} antialiased max-w-2xl mx-auto bg-[#111010] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}