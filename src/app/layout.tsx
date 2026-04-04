import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "EIE Comprehensive Solutions | Environmental & Engineering Solutions",
    template: "%s | EIE Comprehensive Solutions",
  },
  description:
    "EIE Comprehensive Solutions is a pioneering environmental and engineering company specializing in advanced air quality monitoring, waste water management, and pollution control technologies. Authorized Dealer of Advance Analytik (Hungary).",
  keywords: [
    "environmental monitoring",
    "air quality monitoring",
    "waste water management",
    "pollution control",
    "emission control",
    "EIE India",
    "Advance Analytik",
  ],
  authors: [{ name: "EIE Comprehensive Solutions" }],
  creator: "EIE Comprehensive Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://eieindia.in",
    siteName: "EIE Comprehensive Solutions",
    title: "EIE Comprehensive Solutions | Environmental & Engineering Solutions",
    description:
      "Leading the fight against pollution with advanced monitoring and abatement solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
