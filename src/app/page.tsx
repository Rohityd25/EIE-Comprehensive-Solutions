import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Industries from "@/components/home/Industries";
import Services from "@/components/home/Services";
import Partners from "@/components/home/Partners";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "EIE Comprehensive Solutions | Environmental & Engineering Solutions India",
  description:
    "Leading environmental monitoring and engineering company in India. Specializing in air quality monitoring, waste water management, and pollution control. Authorized Dealer of Advance Analytik (Hungary).",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Industries />
      <Services />
      <Partners />
      <ContactCta />
    </>
  );
}
