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
    name: "Gaz-AQMS (Ambient Air Quality Monitoring System)",
    shortName: "Ambient Air Monitor",
    category: "air",
    brand: "Advance Analytik",
    icon: "🌬️",
    image: "/images/AAQMS.png",
    description: "Standard AAQMS station for monitoring PM10, PM2.5, SO₂, NO₂, O₃, CO using UV photometry and chemiluminescence technologies.",
    features: ["Measures PM10, PM2.5 & trace gases", "Low detection limit of ≤ 5 µg/m³", "Real-time online measurement", "Dynamic calibrator & zero air generator"],
    tag: "Environmental Standards",
    tagColor: "#1e40af",
    catalogue: "/catalogues/AAQMS.pdf",
  },
  {
    id: 3,
    name: "Gaz CEMS",
    shortName: "Gas Analyzer",
    category: "emission",
    brand: "Advance Analytik",
    icon: "🏭",
    image: "/images/CEMS.png",
    description: "Advanced online gas analyzer using DOAS technology to simultaneously measure SOx, NOx, CO, CO₂, O₂ in harsh conditions.",
    features: ["Measures SOx, NOx, CO, CO₂, O₂", "Low cross-interference with DOAS", "Fully automated testing & calibration", "Minimal maintenance in harsh conditions"],
    tag: "Stack Monitoring",
    tagColor: "#b45309",
    catalogue: "/catalogues/CEMS.pdf",
  },
  {
    id: 4,
    name: "Gaz-SPM Dust Analyser",
    shortName: "Dust Monitor",
    category: "emission",
    brand: "Advance Analytik",
    icon: "💨",
    image: "/images/gaz-spm.png",
    description: "Next-generation online dust analyser for real-time tracking of smoke emissions. Engineered to withstand extreme environmental conditions across heavy industries.",
    features: ["24/7 continuous smoke & dust monitoring", "Withstands extreme weather & environments", "Advanced optical measurement technology", "Seamless CEMS integration & remote data"],
    tag: "Stack Monitoring",
    tagColor: "#7c3aed",
    catalogue: "/catalogues/SPM.pdf",
  },
  {
    id: 5,
    name: "Industrial Flow Meter",
    shortName: "Flow Meter",
    category: "water",
    brand: "Advance Analytik",
    icon: "🌊",
    image: "/images/Flow Meter.png",
    description: "High-precision electromagnetic flow meter for monitoring water and effluent discharge rates.",
    features: ["High accuracy measurement", "No moving parts", "Suitable for harsh effluents", "Seamless data integration"],
    tag: "Water Flow",
    tagColor: "#0891b2",
    catalogue: "/catalogues/eff-cems.pdf",
  },
  {
    id: 6,
    name: "Digital Piezometer",
    shortName: "Piezometer",
    category: "water",
    brand: "Advance Analytik",
    icon: "📏",
    image: "/images/Piezometer.png",
    description: "Advanced piezometer for continuous monitoring of groundwater levels and pore water pressure.",
    features: ["Continuous level tracking", "High-resolution sensor", "Durable stainless steel build", "Telemetry enabled"],
    tag: "Groundwater",
    tagColor: "#0891b2",
    catalogue: "/catalogues/eff-cems.pdf",
  },
  {
    id: 7,
    name: "Pan-Tilt-Zoom Camera",
    shortName: "PTZ Camera",
    category: "",
    brand: "EIECS",
    icon: "📡",
    image: "/images/ptz.png",
    description: "Visualizes smoke and dust plumes, enabling real-time monitoring and immediate identification of emission sources.",
    features: ["Visualizes smoke and dust plumes", "360\u00b0 rotatable with 30x zoom", "Real-time image transmission", "Works in low visibility"],
    tag: "Real-Time Monitoring",
    tagColor: "#0284c7",
    catalogue: "/catalogues/PTZ Camera Manual.pdf",
  },
  {
    id: 8,
    name: "Anti Smog Gun",
    shortName: "Anti Smog Gun",
    category: "air",
    brand: "EIECS",
    icon: "💧",
    image: "/images/Anti Smog.png",
    description: "Anti-smog gun machine effectively reduces air pollution in Delhi. It works by spraying water particles into the air, which trap pollutants and bring them down to the ground.",
    features: ["Reduces air pollution", "Traps pollutants", "Brings pollutants down to the ground", "Effective in Delhi's air pollution"],
    tag: "Dust Control",
    tagColor: "#0284c7",
    catalogue: "/catalogues/Anti%20Smog.pdf",
  },
  {
    id: 9,
    name: "PM Monitor",
    shortName: "PM Monitor",
    category: "air",
    brand: "Saaphzone",
    icon: "🔭",
    image: "/images/Air-quality-device.png",
    description: "Data Transmission & Connectivity to CPCB/SPCB's",
    features: ["Real-time data transmission", "CPCB/SPCB server connectivity", "Remote configuration & alerts", "Secure data encryption"],
    tag: "Telemetry",
    tagColor: "#7c3aed",
    catalogue: "/catalogues/EIECS Catalogue.pdf",
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
            <h2>Analytical Instruments System</h2>
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
                        priority={product.id <= 3}
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
