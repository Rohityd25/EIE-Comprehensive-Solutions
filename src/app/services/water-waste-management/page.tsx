import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../environmental-monitoring/env.module.css";

export const metadata: Metadata = {
  title: "Water & Waste Water Management",
  description: "Online effluent monitoring, BOD/COD analyzers, and water quality management systems. SPCB compliant solutions for Indian industry.",
};

const instruments = [
  {
    name: "Online Effluent Monitoring System (OEMS)",
    category: "Effluent",
    icon: "💧",
    desc: "Real-time monitoring of effluent parameters as required by CPCB/SPCB. pH, BOD, COD, TSS, flow rate measurement with GPRS data transmission.",
    specs: ["pH, TDS, Conductivity", "BOD & COD analyzers", "TSS & Turbidity", "Flow meter integration", "SPCB compliant DAS"],
  },
  {
    name: "Water Quality Analyzer",
    category: "Water Quality",
    icon: "🔬",
    desc: "Multi-parameter water quality analyzers for rivers, lakes, groundwater and drinking water quality monitoring programs.",
    specs: ["DO, pH, ORP, Conductivity", "Turbidity & TSS", "Nitrate, Ammonia, Phosphate", "Temperature compensation", "IP-67 weatherproof"],
  },
  {
    name: "BOD/COD Analyzer",
    category: "Organic Load",
    icon: "🧪",
    desc: "Automated BOD and COD measurement systems for effluent treatment plant process control and regulatory compliance reporting.",
    specs: ["5-day BOD measurement", "COD digestion method", "Automated sampling", "0–5000 mg/L range", "Color touchscreen display"],
  },
  {
    name: "Turbidity & TSS Monitor",
    category: "Solids",
    icon: "🌊",
    desc: "Online turbidity and Total Suspended Solids monitors for water and wastewater treatment plants using optical measurement.",
    specs: ["0–4000 NTU turbidity range", "0–2000 mg/L TSS range", "Nephelometric method", "4-20mA current output", "Self-cleaning sensor"],
  },
  {
    name: "Heavy Metal Analyzer",
    category: "Heavy Metals",
    icon: "⚗️",
    desc: "Detection of heavy metals including Lead, Chromium, Arsenic, Mercury in industrial effluents and water bodies.",
    specs: ["As, Pb, Cr, Hg, Cd detection", "ppb level detection", "ICP-OES method", "Automated calibration", "LIMS compatible"],
  },
  {
    name: "Flow Measurement System",
    category: "Flow",
    icon: "📊",
    desc: "Electromagnetic, ultrasonic and area velocity flow meters for accurate effluent flow measurement as required by SPCB.",
    specs: ["Electromagnetic & ultrasonic", "Bi-directional measurement", "Data logging & telemetry", "±0.5% accuracy", "IP-68 submersible"],
  },
];

export default function WaterWasteManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url('/images/water-treatment.jpg')` }}
        />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="badge badge-dark" style={{ marginBottom: "1rem" }}>Water Management</div>
            <h1 className={styles.heroTitle}>
              Water & Waste Water<br />
              <span className={styles.heroHighlight}>Management Solutions</span>
            </h1>
            <p className={styles.heroDesc}>
              Online effluent monitoring, water quality analyzers and treatment systems
              that keep your operations SPCB compliant and environmentally responsible.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
              <Link href="/products" className="btn btn-outline btn-lg">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introImage}>
              <Image
                src="/images/water-treatment.jpg"
                alt="Water Treatment Plant"
                width={600}
                height={420}
                className={styles.img}
              />
              <div className={styles.imgBadge}>
                <span className="green-dot" />
                <span>SPCB Compliant</span>
              </div>
            </div>
            <div className={styles.introContent}>
              <div className="badge badge-green" style={{ marginBottom: "1rem" }}>Water Solutions</div>
              <h2 className={styles.introTitle}>Ensuring Water Quality & Regulatory Compliance</h2>
              <div className="divider divider-left" style={{ marginBottom: "1.5rem" }} />
              <p className={styles.introDesc}>
                EIE provides end-to-end water and wastewater monitoring solutions for industries,
                municipalities, and water utilities. Our systems measure and report critical parameters
                continuously to State Pollution Control Board servers.
              </p>
              <p className={styles.introDesc}>
                From inlet to outlet monitoring in Effluent Treatment Plants (ETPs) and Sewage
                Treatment Plants (STPs), we ensure your facility remains fully compliant.
              </p>
              <div className={styles.introPoints}>
                {["Online SPCB/CPCB server connectivity", "pH, BOD, COD, TSS real-time monitoring", "ETP & STP process optimization", "AMC & calibration services available"].map(p => (
                  <div key={p} className={styles.introPoint}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--brand-primary)", flexShrink: 0 }}>
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Our Instruments</div>
            <h2>Water Quality Monitoring Equipment</h2>
            <div className="divider" />
          </div>
          <div className={styles.instrumentGrid}>
            {instruments.map((inst) => (
              <div key={inst.name} className={styles.instrumentCard}>
                <div className={styles.instHeader}>
                  <span className={styles.instIcon}>{inst.icon}</span>
                  <span className={styles.instCategory}>{inst.category}</span>
                </div>
                <h3 className={styles.instName}>{inst.name}</h3>
                <p className={styles.instDesc}>{inst.desc}</p>
                <ul className={styles.instSpecs}>
                  {inst.specs.map(s => (
                    <li key={s}><span className={styles.specDot} />{s}</li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.instCta}>Enquire Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.partnerSection}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <div className="badge badge-dark" style={{ marginBottom: "1rem" }}>Get Started</div>
            <h2 className={styles.partnerTitle}>Need a Custom Water Monitoring Solution?</h2>
            <p className={styles.partnerDesc} style={{ margin: "0 auto 2rem", textAlign: "center" }}>
              Our experts will design the right monitoring system for your specific industry,
              wastewater characteristics, and regulatory requirements.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
