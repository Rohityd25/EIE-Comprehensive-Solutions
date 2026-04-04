import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    slug: "environmental-monitoring",
    icon: "🌫️",
    image: "/images/air-quality-station.jpg",
    title: "Environmental Monitoring",
    shortTitle: "Air Quality",
    color: "#16a34a",
    desc: "Comprehensive air quality and atmospheric monitoring using Advance Analytik instruments. CPCB/SPCB compliant real-time monitoring stations.",
    items: ["Ambient Air Quality (AAQMS)", "Stack Emission (CEMS)", "Meteorological Instruments", "Dust & Opacity Monitors"],
  },
  {
    slug: "water-waste-management",
    icon: "💧",
    image: "/images/water-treatment.jpg",
    title: "Water / Waste Water Management",
    shortTitle: "Water Quality",
    color: "#0891b2",
    desc: "Online effluent monitoring systems for ETPs and STPs. pH, BOD, COD, TSS, flow measurement with automatic SPCB data transmission.",
    items: ["Online Effluent Monitoring", "BOD/COD Analyzers", "Water Quality Instruments", "Flow Measurement Systems"],
  },
  {
    slug: "/services",
    icon: "🏭",
    image: "/images/emission-control.jpg",
    title: "Emission Control Devices",
    shortTitle: "Abatement",
    color: "#b45309",
    desc: "Retrofit emission control devices, scrubbers, bag filters and dual-fuel conversion systems to reduce industrial pollution.",
    items: ["Retrofit Emission Control", "Dual-Fuel Systems", "Scrubbers & Filters", "Pollution Abatement"],
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.section}`} aria-label="Our Services">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-green">Our Solutions</div>
          <h2>Comprehensive Environmental Services</h2>
          <div className="divider" />
          <p style={{ marginTop: "1rem" }}>
            From air quality monitoring to waste water management, we deliver
            end-to-end environmental solutions that keep your operations compliant and sustainable.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.slug} className={styles.card}>
              {/* Image */}
              <div className={styles.cardImage}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={480}
                  height={240}
                  className={styles.img}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageBadge} style={{ background: `${svc.color}22`, border: `1px solid ${svc.color}44`, color: svc.color }}>
                  <span style={{ fontSize: "1.125rem" }}>{svc.icon}</span>
                  <span>{svc.shortTitle}</span>
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.desc}</p>

                <ul className={styles.cardList}>
                  {svc.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: svc.color, flexShrink: 0 }}>
                        <path d="M2.5 7l3 3 6-5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${svc.slug}`}
                  className={styles.cardCta}
                  style={{ color: svc.color }}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Looking for a custom solution?</p>
          <Link href="/contact" className="btn btn-primary">Talk to Our Experts</Link>
        </div>
      </div>
    </section>
  );
}
