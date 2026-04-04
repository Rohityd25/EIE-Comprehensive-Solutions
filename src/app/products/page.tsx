import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products & Instruments",
  description: "Environmental monitoring instruments, gas analyzers, emission monitoring systems from Advance Analytik Hungary. Authorized dealer in India.",
};

const categories = [
  { id: "all", label: "All Products" },
  { id: "air", label: "Air Quality" },
  { id: "water", label: "Water Quality" },
  { id: "emission", label: "Stack Emission" },
  { id: "noise", label: "Noise & Others" },
];

const products = [
  {
    id: 1,
    name: "OPSIS AR-500 Series",
    shortName: "Ambient Air Monitor",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌡️",
    image: null,
    description: "Multi-gas ambient air quality monitoring station for SO₂, NO₂, CO, O₃, H₂S. DOAS technology with CPCB approval.",
    features: ["SO₂, NO₂, CO, O₃, H₂S", "Differential Optical Absorption", "CPCB Protocol ready", "Remote data transmission"],
    tag: "CPCB Approved",
    tagColor: "#16a34a",
  },
  {
    id: 2,
    name: "OPSIS SM-701 CEMS",
    shortName: "Stack Emission Monitor",
    category: "emission",
    brand: "Advance Analytik",
    icon: "🏭",
    image: null,
    description: "Continuous Emission Monitoring System for stack gases. Extractive measurement of SO₂, NOx, CO, CO₂, HCl, HF.",
    features: ["SO₂, NOx, CO, CO₂, HCl", "In-situ & extractive", "MoEF/CPCB compliant", "DAS & reporting software"],
    tag: "MoEF Compliant",
    tagColor: "#1e40af",
  },
  {
    id: 3,
    name: "SEM-7000 Dust Monitor",
    shortName: "Opacity / PM Monitor",
    category: "emission",
    brand: "Advance Analytik",
    icon: "💨",
    image: null,
    description: "Optical dust/opacity monitor for stack emissions. Laser-based measurement with temperature compensation and stainless housing.",
    features: ["0–2000 mg/m³ range", "Laser optical sensor", "Temperature compensated", "4-20mA RS-485 output"],
    tag: "Stack Monitoring",
    tagColor: "#b45309",
  },
  {
    id: 4,
    name: "AQMesh Node",
    shortName: "IoT Air Quality Sensor",
    category: "air",
    brand: "Advance Analytik",
    icon: "📡",
    image: null,
    description: "Compact IoT-based air quality sensor network for hyperlocal monitoring of PM, gases, temperature and humidity.",
    features: ["PM₁, PM₂.₅, PM₁₀, PM₄", "NO₂, O₃, CO, SO₂", "GSM/WiFi/LoRa options", "Cloud data platform"],
    tag: "IoT Sensor",
    tagColor: "#7c3aed",
  },
  {
    id: 5,
    name: "WaterSens Pro-8",
    shortName: "Multi-parameter Analyzer",
    category: "water",
    brand: "Advance Analytik",
    icon: "💧",
    image: null,
    description: "8-parameter online water quality analyzer for pH, DOx, Conductivity, Turbidity, ORP, Chlorine, Nitrate, and Temperature.",
    features: ["8 simultaneous parameters", "pH, DOx, Cond, Turbidity", "ORP, Cl₂, NO₃⁻, Temp", "IP-68 submersible probe"],
    tag: "Water Quality",
    tagColor: "#0891b2",
  },
  {
    id: 6,
    name: "EFF-CEMS Online",
    shortName: "Effluent Monitor",
    category: "water",
    brand: "EIE / Advance Analytik",
    icon: "🔬",
    image: null,
    description: "SPCB-compliant online effluent monitoring system for ETPs. Measures pH, BOD, COD, TSS, Flow with automatic data transmission.",
    features: ["pH, BOD, COD, TSS", "Flow rate measurement", "SPCB server connectivity", "24/7 monitoring & alerts"],
    tag: "SPCB Approved",
    tagColor: "#16a34a",
  },
  {
    id: 7,
    name: "AWS-Pro Meteo",
    shortName: "Weather Station",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌦️",
    image: null,
    description: "Complete automatic weather station with ultrasonic wind sensor, solar radiation, rain gauge, pressure and humidity.",
    features: ["Ultrasonic wind sensor", "Solar radiation pyranometer", "Tipping bucket rain gauge", "Barometric pressure sensor"],
    tag: "Meteorological",
    tagColor: "#0284c7",
  },
  {
    id: 8,
    name: "NoiseTrack NL-65",
    shortName: "Noise Level Monitor",
    category: "noise",
    brand: "Advance Analytik",
    icon: "🔊",
    image: null,
    description: "IEC Class 1 sound level meter for environmental noise measurement and monitoring near industrial facilities.",
    features: ["IEC 61672 Class 1", "dB(A), dB(C), dB(Z)", "Leq, Lmax, Lmin, L10", "Data logger 8GB SD card"],
    tag: "Type 1 Certified",
    tagColor: "#b45309",
  },
  {
    id: 9,
    name: "DOAS-700 Remote Sensing",
    shortName: "Open Path Analyzer",
    category: "air",
    brand: "Advance Analytik",
    icon: "🔭",
    image: null,
    description: "Open-path DOAS analyzer for long-path measurement of SO₂, NO₂, BTX, NH₃ and other gases over distances up to 500m.",
    features: ["Path length 10–500m", "SO₂, NO₂, BTX, NH₃", "No sampling system needed", "Fence-line monitoring ready"],
    tag: "Open Path",
    tagColor: "#16a34a",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgImg} />
          <div className={styles.heroOverlay} />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="badge badge-dark" style={{ marginBottom: "1rem" }}>Product Catalog</div>
            <h1 className={styles.heroTitle}>
              Environmental Monitoring
              <span className={styles.heroHighlight}> Instruments & Systems</span>
            </h1>
            <p className={styles.heroDesc}>
              Authorized dealer for Advance Analytik Hungary. We supply world-class
              analytic analyzers for air quality, water quality, and emission monitoring
              across India with full installation, calibration and AMC support.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Our Products</div>
            <h2>Analytical Instruments Catalog</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              All instruments come with manufacturer warranty, calibration certificates, and
              dedicated EIE technical support across India.
            </p>
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                {/* Top */}
                <div className={styles.productTop}>
                  <div className={styles.productIcon}>{product.icon}</div>
                  <span
                    className={styles.productTag}
                    style={{ background: `${product.tagColor}18`, color: product.tagColor, border: `1px solid ${product.tagColor}30` }}
                  >
                    {product.tag}
                  </span>
                </div>

                <div className={styles.productBrand}>{product.brand}</div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productShort}>{product.shortName}</p>
                <p className={styles.productDesc}>{product.description}</p>

                <ul className={styles.productFeatures}>
                  {product.features.map((f) => (
                    <li key={f}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.productCta}>
                  Request Datasheet / Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className={styles.servicesBanner}>
        <div className="container">
          <div className={styles.bannerGrid}>
            <div className={styles.bannerLeft}>
              <h2 className={styles.bannerTitle}>Beyond Products — Complete Service</h2>
              <p className={styles.bannerDesc}>
                We don't just supply instruments. EIE provides end-to-end solutions including
                site survey, installation, commissioning, operator training, calibration, AMC,
                and 24/7 technical support.
              </p>
            </div>
            <div className={styles.bannerRight}>
              {["Supply & Installation", "Calibration & Certification", "Annual Maintenance Contract", "Operator Training", "CPCB/SPCB Data Reporting", "24/7 Technical Support"].map(s => (
                <div key={s} className={styles.bannerService}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="#4ade80" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bannerCta}>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us for Pricing</Link>
            <Link href="/about" className="btn btn-outline btn-lg">About EIE</Link>
          </div>
        </div>
      </section>
    </>
  );
}
