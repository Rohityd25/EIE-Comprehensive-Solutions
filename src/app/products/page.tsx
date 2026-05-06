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
    name: "OPTICS-1000 Multi Parameter",
    shortName: "Ambient Air Monitor",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌡️",
    image: "/images/optics-1000.png",
    description: "Multi-gas ambient air quality monitoring station for SO₂, NO₂, CO, O₃, H₂S. DOAS technology with CPCB approval.",
    features: ["SO₂, NO₂, CO, O₃, H₂S", "Differential Optical Absorption", "CPCB Protocol ready", "Remote data transmission"],
    tag: "CPCB Approved",
    tagColor: "#16a34a",
    catalogue: "/catalogues/OPTICS-1000.pdf",
  },
  {
    id: 2,
    name: "Gaz-AQMS (AAQMS)",
    shortName: "Ambient Air Monitor",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌬️",
    image: "/images/AAQMS.png",
    description: "Standard AAQMS station for monitoring PM10, PM2.5, SO₂, NO₂, O₃, and CO. Employs advanced detection methods (UV photometry, chemiluminescence, beta-ray) for highly accurate measurement.",
    features: [
      "Continuous real-time measurement of PM & gases",
      "Ultra-low detection limit (≤ 5 µg/m³)",
      "Built-in dynamic calibrator & zero air generator",
      "Precise particle size measurement cutter",
      "Reliable under diverse environmental conditions"
    ],
    tag: "CPCB Compliant",
    tagColor: "#16a34a",
    catalogue: "/catalogues/AAQMS.pdf",
  },
  {
    id: 3,
    name: "Gaz CEMS",
    shortName: "Stack Emission Monitor",
    category: "emission",
    brand: "Advance Analytik",
    icon: "🏭",
    image: "/images/CEMS.png",
    description: "Advanced online gas analyzer using UV DOAS technology. Delivers accurate, continuous monitoring of multiple stack gases (SOx, NOx, CO, CO₂, O₂) even in harsh environments.",
    features: [
      "Simultaneous multi-gas measurement",
      "UV DOAS tech for low cross-interference",
      "Fully automated sampling & calibration",
      "Intelligent real-time data management",
      "Low maintenance with remote monitoring"
    ],
    tag: "Stack Monitoring",
    tagColor: "#b45309",
    catalogue: "/catalogues/CEMS.pdf",
  },
  {
    id: 4,
    name: "AQMesh Node",
    shortName: "IoT Air Quality Sensor",
    category: "air",
    brand: "Advance Analytik",
    icon: "📡",
    image: "/images/Air-quality-device.png",
    description: "Compact IoT-based air quality sensor network for hyperlocal monitoring of PM, gases, temperature and humidity.",
    features: ["PM₁, PM₂.₅, PM₁₀, PM₄", "NO₂, O₃, CO, SO₂", "GSM/WiFi/LoRa options", "Cloud data platform"],
    tag: "IoT Sensor",
    tagColor: "#7c3aed",
    catalogue: "/catalogues/aqmesh.pdf",
  },
  {
    id: 5,
    name: "WaterSens Pro-8",
    shortName: "Multi-parameter Analyzer",
    category: "water",
    brand: "Advance Analytik",
    icon: "💧",
    image: "/images/water-treatment.jpg",
    description: "8-parameter online water quality analyzer for pH, DOx, Conductivity, Turbidity, ORP, Chlorine, Nitrate, and Temperature.",
    features: ["8 simultaneous parameters", "pH, DOx, Cond, Turbidity", "ORP, Cl₂, NO₃⁻, Temp", "IP-68 submersible probe"],
    tag: "Water Quality",
    tagColor: "#0891b2",
    catalogue: "/catalogues/watersens-pro8.pdf",
  },
  {
    id: 6,
    name: "EFF-CEMS Online",
    shortName: "Effluent Monitor",
    category: "water",
    brand: "EIE / Advance Analytik",
    icon: "🔬",
    image: "/images/water-treatment.jpg",
    description: "SPCB-compliant online effluent monitoring system for ETPs. Measures pH, BOD, COD, TSS, Flow with automatic data transmission.",
    features: ["pH, BOD, COD, TSS", "Flow rate measurement", "SPCB server connectivity", "24/7 monitoring & alerts"],
    tag: "SPCB Approved",
    tagColor: "#16a34a",
    catalogue: "/catalogues/eff-cems.pdf",
  },
  {
    id: 7,
    name: "AWS-Pro Meteo",
    shortName: "Weather Station",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌦️",
    image: "/images/Air-quality-device.png",
    description: "Complete automatic weather station with ultrasonic wind sensor, solar radiation, rain gauge, pressure and humidity.",
    features: ["Ultrasonic wind sensor", "Solar radiation pyranometer", "Tipping bucket rain gauge", "Barometric pressure sensor"],
    tag: "Meteorological",
    tagColor: "#0284c7",
    catalogue: "/catalogues/aws-pro.pdf",
  },
  {
    id: 8,
    name: "NoiseTrack NL-65",
    shortName: "Noise Level Monitor",
    category: "noise",
    brand: "Advance Analytik",
    icon: "🔊",
    image: "/images/Air-quality-device.png",
    description: "IEC Class 1 sound level meter for environmental noise measurement and monitoring near industrial facilities.",
    features: ["IEC 61672 Class 1", "dB(A), dB(C), dB(Z)", "Leq, Lmax, Lmin, L10", "Data logger 8GB SD card"],
    tag: "Type 1 Certified",
    tagColor: "#b45309",
    catalogue: "/catalogues/noisetrack.pdf",
  },
  {
    id: 9,
    name: "DOAS-700 Remote Sensing",
    shortName: "Open Path Analyzer",
    category: "air",
    brand: "Advance Analytik",
    icon: "🔭",
    image: "/images/Air-quality-device.png",
    description: "Open-path DOAS analyzer for long-path measurement of SO₂, NO₂, BTX, NH₃ and other gases over distances up to 500m.",
    features: ["Path length 10–500m", "SO₂, NO₂, BTX, NH₃", "No sampling system needed", "Fence-line monitoring ready"],
    tag: "Open Path",
    tagColor: "#16a34a",
    catalogue: "/catalogues/doas700.pdf",
  },
];

export default function ProductsPage() {
  return (
    <>
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
                <div className={styles.productVisual}>
                  {product.image && (
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={75}
                      className={styles.productImg} 
                    />
                  )}
                  <div className={styles.imageOverlay} />
                  <div className={styles.productBadge}>
                    <span className={styles.productIcon}>{product.icon}</span>
                    {product.tag}
                  </div>
                </div>

                <div className={styles.productContent}>
                  <div className={styles.productBrand}>{product.brand}</div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productShort}>{product.shortName}</p>
                  <p className={styles.productDesc}>{product.description}</p>

                  <ul className={styles.productFeatures}>
                    {product.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: product.tagColor }}>
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.productCtaGroup}>
                    {product.catalogue ? (
                      <a
                        href={product.catalogue}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.productCtaPrimary}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                          <line x1="12" y1="18" x2="12" y2="12" />
                          <polyline points="9,15 12,18 15,15" />
                        </svg>
                        Download Brochure
                      </a>
                    ) : (
                      <span className={styles.productCtaDisabled}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                        </svg>
                        Brochure Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
