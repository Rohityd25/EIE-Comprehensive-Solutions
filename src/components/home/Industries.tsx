import Image from "next/image";
import Link from "next/link";
import styles from "./Industries.module.css";

const industries = [
  {
    name: "Power Generation",
    image: "/images/power-plant.jpg",
    desc: "CEMS & effluent monitoring for thermal plants, ensuring full compliance with MoEF standards."
  },
  {
    name: "Pharmaceutical & Healthcare",
    image: "/images/pharma-industry.jpg",
    desc: "Precision indoor air quality and pure water analysis ensuring pristine sterile environments."
  },
  {
    name: "Automotive & Manufacturing",
    image: "/images/hero-factory.jpg",
    desc: "Ambient air and noise pollution tracking for heavy manufacturing zones."
  },
  {
    name: "Chemical & Refining",
    image: "/images/emission-control.jpg",
    desc: "Hazardous gas detection, VOC abatement, and integrated emission solutions."
  }
];

export default function Industries() {
  return (
    <section className={styles.section} aria-label="Industries We Serve">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-amber">Our Impact</div>
          <h2 className={styles.title}>Industries We Empower</h2>
          <div className="divider" />
          <p style={{ marginTop: "1rem" }}>
            From high-tech healthcare to heavy manufacturing, EIE provides the backbone for sustainable industry across India.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div key={ind.name} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.imgWrap}>
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className={styles.img}
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{ind.name}</h3>
                <p className={styles.cardDesc}>{ind.desc}</p>
                <div className={styles.line} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/contact" className="btn btn-outline-green">
            Discuss Your Industry Needs →
          </Link>
        </div>
      </div>
    </section>
  );
}
