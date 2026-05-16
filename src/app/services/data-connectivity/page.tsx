import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./data.module.css";

export const metadata: Metadata = {
  title: "Data Transmission & Connectivity to CPCB/SPCBs | EIE Comprehensive Solutions",
  description:
    "EIE provides real-time data transmission and seamless connectivity to CPCB and SPCBs through OEMs and CEMS. Secure, compliant environmental data reporting across India.",
};

const boards = [
  { name: "Central Pollution\nControl Board", short: "CPCB", logo: "/images/CPCB.png" },
  { name: "Delhi Pollution Control\nCommittee", short: "DPCC", logo: "/images/DPCC.png" },
  { name: "Haryana Pollution\nControl Board", short: "HSPCB", logo: "/images/HSPCB.png" },
  { name: "Rajasthan Pollution\nControl Board", short: "RSPCB", logo: "/images/RSPCB.png" },
  { name: "Punjab Pollution\nControl Board", short: "PPCB", logo: "/images/PPCB.png" },
];

const features = [
  {
    icon: "🔐",
    title: "Secure Data Encryption",
    desc: "End-to-end encrypted data transmission ensuring tamper-proof environmental data reaching regulatory servers.",
  },
  {
    icon: "📡",
    title: "GPRS / GSM / LAN / WiFi",
    desc: "Multiple connectivity options including GPRS, GSM, LAN and WiFi to suit every site condition across India.",
  },
  {
    icon: "⚡",
    title: "Real-Time Transmission",
    desc: "Continuous real-time data collection and immediate submission to CPCB/SPCB servers without manual intervention.",
  },
  {
    icon: "📊",
    title: "Data Logging & Storage",
    desc: "On-site data logger with redundant internal storage ensures no data loss even during connectivity outages.",
  },
  {
    icon: "🔔",
    title: "Remote Alerts & Alarms",
    desc: "Automatic SMS and email alerts for exceedances, equipment faults or connectivity failures.",
  },
  {
    icon: "🛠️",
    title: "Remote Configuration",
    desc: "Configure, calibrate and diagnose instruments remotely without any on-site visit — saving time and cost.",
  },
];

export default function DataConnectivityPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="badge badge-dark" style={{ marginBottom: "1rem" }}>
              Data Connectivity
            </div>
            <h1 className={styles.heroTitle}>
              Data Transmission &amp; Connectivity to
              <span className={styles.heroHighlight}> CPCB / SPCBs</span>
            </h1>
            <p className={styles.heroDesc}>
              EIE Comprehensive Solutions delivers cutting-edge environmental monitoring and
              data transmission through OEMs and CEMS. Our solutions ensure secure and seamless
              connectivity to the CPCB and SPCBs — enabling real-time data collection,
              processing, and transmission for effective compliance and transparency.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get a Quote
              </Link>
              <Link href="/products" className="btn btn-outline btn-lg">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data Flow Diagram ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">How It Works</div>
            <h2>Seamless Data Pipeline</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              From real-time monitoring at the source all the way to regulatory submission —
              fully automated, secure and compliant.
            </p>
          </div>

          <div className={styles.flowDiagram}>
            {/* Step 1 */}
            <div className={styles.flowStep}>
              <div className={styles.flowIconWrap} style={{ background: "rgba(22,163,74,0.1)", border: "2px solid rgba(22,163,74,0.3)" }}>
                <span className={styles.flowIcon}>🖥️</span>
              </div>
              <div className={styles.flowStepLabel}>Data Monitoring</div>
              <p className={styles.flowStepDesc}>Continuous measurement via OEM / CEMS instruments on-site</p>
            </div>

            <div className={styles.flowArrow}>
              <div className={styles.arrowLine} />
              <div className={styles.arrowHead} />
              <span className={styles.arrowLabel}>Internet</span>
            </div>

            {/* Step 2 */}
            <div className={styles.flowStep}>
              <div className={styles.flowIconWrap} style={{ background: "rgba(2,132,199,0.1)", border: "2px solid rgba(2,132,199,0.3)" }}>
                <span className={styles.flowIcon}>📡</span>
              </div>
              <div className={styles.flowStepLabel}>Data Transmission</div>
              <p className={styles.flowStepDesc}>Encrypted GPRS/GSM/LAN transmission to central server</p>
            </div>

            <div className={styles.flowArrow}>
              <div className={styles.arrowLine} />
              <div className={styles.arrowHead} />
            </div>

            {/* Step 3 */}
            <div className={styles.flowStep}>
              <div className={styles.flowIconWrap} style={{ background: "rgba(124,58,237,0.1)", border: "2px solid rgba(124,58,237,0.3)" }}>
                <span className={styles.flowIcon}>☁️</span>
              </div>
              <div className={styles.flowStepLabel}>Data Submission</div>
              <p className={styles.flowStepDesc}>Real-time data delivered to CPCB/SPCB regulatory servers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulatory Boards ─────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Real-Time Data On</div>
            <h2>CPCB &amp; State Pollution Control Boards</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              Our systems are certified to transmit directly to all major central and state
              regulatory servers across India.
            </p>
          </div>

          <div className={styles.boardsGrid}>
            {boards.map((board) => (
              <div key={board.short} className={styles.boardCard}>
                <div className={styles.boardLogoWrap}>
                  <Image
                    src={board.logo}
                    alt={board.short + " logo"}
                    width={120}
                    height={120}
                    className={styles.boardLogoImg}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.boardName}>
                  {board.name.split("\n").map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Key Capabilities</div>
            <h2>Why Choose Our Connectivity Solutions</h2>
            <div className="divider" />
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance Strip (dark) ─────────────────────────────────── */}
      <section className={styles.complianceSection}>
        <div className="container">
          <div className={styles.complianceGrid}>
            <div>
              <div className="badge badge-dark" style={{ marginBottom: "0.875rem" }}>
                Fully Compliant
              </div>
              <h2 className={styles.complianceTitle}>
                Meeting Every CPCB &amp; MoEF Requirement
              </h2>
              <p className={styles.complianceDesc}>
                All our data acquisition and transmission systems are designed to fully comply
                with CPCB, MoEF, and individual SPCB guidelines. From data formats and
                transmission intervals to server authentication — every standard is met.
              </p>
              <ul className={styles.compliancePoints}>
                {[
                  "15-minute average data intervals as per CPCB norms",
                  "CPCB-approved data logger and DAS integration",
                  "Automated daily / monthly compliance reports",
                  "Real-time exceedance alerts to pollution boards",
                  "Tamper-proof audit logs and data trail",
                ].map((pt) => (
                  <li key={pt} className={styles.compliancePt}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M3 8l3.5 3.5L13 4" stroke="#4ade80" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.complianceStats}>
              {[
                { num: "700+", label: "Sites Connected" },
                { num: "99.9%", label: "Data Uptime" },
                { num: "500+", label: "SPCBs Integrated" },
                { num: "24/7", label: "Support Coverage" },
              ].map((s) => (
                <div key={s.label} className={styles.complianceStat}>
                  <div className={styles.complianceStatNum}>{s.num}</div>
                  <div className={styles.complianceStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
