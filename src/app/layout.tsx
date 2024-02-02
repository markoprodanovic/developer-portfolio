import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marko Prodanovic",
  description: "My selected works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-customBackground">
      <body className={`${manrope.className} text-customText`}>
        <div className="max-w-[1048px] min-w-[320px] mx-auto px-4 pt-16">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
