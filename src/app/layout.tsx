import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "GOLDEN FOCUS — Elevating Brands, Building Influence",
  description: "A results-driven Public Relations agency specializing in celebrity management, brand visibility, media placements, and reputation building.",
  keywords: "PR agency, public relations, celebrity management, brand visibility, event management, media placements",
  // Remove icons from metadata - let Next.js auto-detect
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}