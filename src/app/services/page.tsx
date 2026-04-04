import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore EIE's comprehensive environmental services — air quality monitoring, waste water management, and emission control solutions for Indian industry.",
};

const services = [
  {
    image: "/images/air-quality-station.jpg",
    title: "Environmental Monitoring",
    href: "/services/environmental-monitoring",
    color: "#16a34a",
    description:
      "Comprehensive air quality monitoring and environmental data management solutions using state-of-the-art instrumentation from Advance Analytik, Hungary.",
    capabilities: [
      "Ambient Air Quality Monitoring Stations",
      "Stack Emission Monitoring (CEMS)",
      "Dust/Particulate Matter Analyzers",
      "Meteorological Instruments (AWS)",
      "Noise Level Meters",
      "Real-time Data Acquisition Systems",
      "CPCB & SPCB Compliant Systems",
    ],
  },
  {
    image: "/images/water-treatment.jpg",
    title: "Water/Waste Water Management",
    href: "/services/water-waste-management",
    color: "#0891b2",
    description:
      "Advanced online monitoring systems and analyzers for effluent treatment plants, sewage treatment plants, and water quality management.",
    capabilities: [
      "Online Effluent Monitoring (ETPs)",
      "pH, BOD, COD Analyzers",
      "Dissolved Oxygen Meters",
      "Turbidity & TSS Monitors",
      "Heavy Metal Analysis",
      "SPCB Compliant Online Systems",
      "Data Logger & SCADA Integration",
    ],
  },
  {
    image: "/images/emission-control.jpg",
    title: "Emission Control & Abatement",
    href: "/services",
    color: "#b45309",
    description:
      "Retrofit emission control devices, pollution abatement systems, and dual-fuel conversion for industrial and vehicular applications.",
    capabilities: [
      "Retrofit Emission Control Devices",
      "Dual-Fuel System Conversion",
      "Industrial Scrubbers",
      "Bag Filter Systems",
      "ESP (Electrostatic Precipitators)",
      "VOC Abatement Systems",
      "Compliance Auditing & Reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="badge badge-green" style={{ marginBottom: "1rem" }}>Our Services</div>
          <h1 className={styles.heroTitle}>Comprehensive Environmental Solutions</h1>
          <p className={styles.heroSubtitle}>
            From real-time air quality monitoring to advanced waste water treatment systems,
            EIE delivers end-to-end environmental solutions backed by 30 years of expertise.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          {services.map((service, i) => (
            <div key={service.title} className={`${styles.serviceBlock} ${i % 2 !== 0 ? styles.serviceBlockReverse : ""}`}>
              <div className={styles.serviceVisual}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.serviceImg}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.serviceContent}>
                <div className="badge badge-green" style={{ marginBottom: "0.875rem" }}>
                  {service.title}
                </div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
                <ul className={styles.serviceList}>
                  {service.capabilities.map((cap) => (
                    <li key={cap} className={styles.serviceListItem}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: service.color }}>
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                  Explore This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
