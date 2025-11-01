import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Trans Trade Solutions - Supply Chain Excellence",
  description:
    "Trans Trade Solutions provides comprehensive logistics and supply chain solutions including international freight forwarding, customs clearance, inland transportation, and transit trade services. Connecting borders with efficient logistics.",
  keywords: "logistics, supply chain, freight forwarding, customs clearance, international shipping, transit trade, Pakistan logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
