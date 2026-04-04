import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./env.module.css";

export const metadata: Metadata = {
  title: "Environmental Monitoring Services",
  description: "Advanced air quality monitoring, stack emission monitoring, and meteorological instruments. CPCB compliant systems for Indian industry.",
};

const instruments = [
  {
    name: "Ambient Air Quality Monitoring Station (AAQMS)",
    category: "Air Quality",
    icon: "🌡️",
    desc: "Continuous online monitoring of SO₂, NOx, CO, O₃, PM₂.₅, PM₁₀ as per CPCB norms. Real-time data transmission to central server.",
    specs: ["SO₂, NOx, CO, O₃ analyzers", "PM₂.₅ & PM₁₀ samplers", "Meteorological sensors", "GPRS/GSM data transmission", "CPCB Protocol compliant"],
  },
  {
    name: "Continuous Emission Monitoring System (CEMS)",
    category: "Stack Emission",
    icon: "🏭",
    desc: "Online stack emission monitoring for SO₂, NOx, CO, CO₂, HCl, HF and particulate matter. Meets MoEF/CPCB requirements.",
    specs: ["In-situ & extractive systems", "SO₂, NOx, CO, CO₂ measurement", "Opacity/dust concentration", "Flow rate measurement", "DAS integration"],
  },
  {
    name: "Dust & Opacity Monitor",
    category: "Particulates",
    icon: "💨",
    desc: "Optical particulate monitors for continuous measurement of dust concentration and opacity in stack emissions.",
    specs: ["Laser-based optical sensor", "0–2000 mg/m³ range", "Temperature compensated", "4-20mA & RS-485 output", "Weatherproof housing"],
  },
  {
    name: "Automatic Weather Station (AWS)",
    category: "Meteorological",
    icon: "🌦️",
    desc: "Complete meteorological monitoring including wind speed/direction, temperature, humidity, rainfall and solar radiation.",
    specs: ["Wind speed & direction", "Temp, RH, Pressure", "Rainfall & solar radiation", "Data logger included", "Remote monitoring ready"],
  },
  {
    name: "Noise Level Meter & Monitor",
    category: "Noise",
    icon: "🔊",
    desc: "Sound level meters and continuous noise monitoring systems for industrial and environmental noise assessment.",
    specs: ["Type 1 & Type 2 meters", "dB(A), dB(C) weighting", "Data logging capability", "CPCB noise standards", "Real-time alerts"],
  },
  {
    name: "Indoor Air Quality Monitor",
    category: "IAQ",
    icon: "🏢",
    desc: "Multi-parameter indoor air quality monitors measuring CO₂, TVOC, PM₂.₅, temperature and humidity for workplace safety.",
    specs: ["CO₂, TVOC, PM₂.₅, PM₁₀", "Temp & RH sensor", "Display & data logging", "BMS/SCADA integration", "Alert system"],
  },
];

export default function EnvironmentalMonitoringPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="badge badge-dark" style={{ marginBottom: "1rem" }}>Environmental Monitoring</div>
            <h1 className={styles.heroTitle}>
              Advanced Air Quality &<br />
              <span className={styles.heroHighlight}>Emission Monitoring</span>
            </h1>
            <p className={styles.heroDesc}>
              Comprehensive environmental monitoring solutions using Advance Analytik instruments.
              CPCB & SPCB compliant systems for real-time data acquisition and regulatory reporting.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
              <Link href="/products" className="btn btn-outline btn-lg">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introImage}>
              <Image
                src="/images/air-quality-station.jpg"
                alt="Air Quality Monitoring Station"
                width={600}
                height={420}
                className={styles.img}
              />
              <div className={styles.imgBadge}>
                <span className="green-dot" />
                <span>CPCB Compliant</span>
              </div>
            </div>
            <div className={styles.introContent}>
              <div className="badge badge-green" style={{ marginBottom: "1rem" }}>Why EIE?</div>
              <h2 className={styles.introTitle}>Precision Monitoring for a Cleaner India</h2>
              <div className="divider divider-left" style={{ marginBottom: "1.5rem" }} />
              <p className={styles.introDesc}>
                As the Authorized Dealer of <strong>Advance Analytik, Hungary</strong>, EIE brings world-class
                analytical instrumentation to Indian industries. Our environmental monitoring solutions
                cover ambient air quality, stack emissions, meteorological parameters, and indoor air quality.
              </p>
              <p className={styles.introDesc}>
                All our systems are designed to meet the stringent requirements of CPCB, MoEF, and
                State Pollution Control Boards, with seamless GPRS/GSM data transmission to regulatory servers.
              </p>
              <div className={styles.introPoints}>
                {["Real-time data transmission to CPCB/SPCB servers", "NABL calibrated instruments", "24/7 technical support & AMC", "Expert installation & commissioning"].map(p => (
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
            <h2>Environmental Monitoring Equipment</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              We supply, install and maintain a complete range of environmental monitoring instruments
              from Advance Analytik, Hungary.
            </p>
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
                    <li key={s}>
                      <span className={styles.specDot} />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.instCta}>
                  Enquire Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className={`section ${styles.partnerSection}`}>
        <div className="container">
          <div className={styles.partnerContent}>
            <div>
              <div className="badge badge-dark" style={{ marginBottom: "0.875rem" }}>Authorized Dealer</div>
              <h2 className={styles.partnerTitle}>Advance Analytik® — Hungary</h2>
              <p className={styles.partnerDesc}>
                EIE is the exclusive authorized dealer of Advance Analytik in India. This partnership
                gives our clients direct access to Hungarian precision engineering with full local support.
              </p>
              <a href="https://www.advanceanalytik.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                Visit Advance Analytik →
              </a>
            </div>
            <div className={styles.partnerLogoBox}>
              <Image
                src="/images/advance-analytik-logo.png"
                alt="Advance Analytik Hungary"
                width={300}
                height={100}
                className={styles.partnerLogo}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
