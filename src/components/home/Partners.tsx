import Image from "next/image";
import styles from "./Partners.module.css";

const clients = [
  { name: "SHAHI", logo: "/images/shahi.png" },
  { name: "RVUN", logo: "/images/RVUN.png" },
  { name: "Panchshila Club", logo: "/images/Panchshila-Club.png" },
  { name: "Panacea Biotec", logo: "/images/Panacea-Biotec.png" },
  { name: "Yakult", logo: "/images/Yakult.png" },
  { name: "Talbros", logo: "/images/Talbros.png" },
  { name: "OMAXE", logo: "/images/OMAXE.png" },
  { name: "Nagar Nigam", logo: "/images/Nagar-Nigam-Mathura-Vrindavan.png" },
];

export default function Partners() {
  return (
    <section className={styles.partnersSection} aria-label="Partners and Clients">
      {/* Official Partners */}
      <div className={styles.officialPartners}>
        <div className="container">
          <div className={styles.opHeader}>
            <div className="badge badge-dark">Official Partnerships</div>
            <h2 className={styles.opTitle}>Powered by World-Class Partnerships</h2>
            <div className="divider" style={{ marginBottom: 0 }} />
          </div>
          <div className={styles.opGrid}>
            {/* Advance Analytik */}
            <div className={styles.opCard}>
              <div className={styles.opBadge}>Authorized Dealer</div>
              <div className={styles.opLogoWrap}>
                <Image
                  src="/images/advance-analytik-logo.png"
                  alt="Advance Analytik Hungary"
                  width={200}
                  height={56}
                  className={styles.opLogo}
                />
              </div>
              <h3 className={styles.opName}>Advance Analytik® — Hungary</h3>
              <p className={styles.opDesc}>
                European precision environmental instrumentation. Exclusive authorized dealer for all of India.
              </p>
              <a
                href="https://www.advanceanalytik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.opLink}
              >
                Visit Website →
              </a>
            </div>

            {/* Eco System */}
            <div className={styles.opCard}>
              <div className={styles.opBadge2}>Channel Partner</div>
              <div className={styles.opLogoWrap} style={{ padding: "1.5rem 0" }}>
                <div className={styles.opLogoFallback}>🌿 Eco System</div>
              </div>
              <h3 className={styles.opName}>Eco System</h3>
              <p className={styles.opDesc}>
                Extended service portfolio through our channel partnership with Eco System solutions.
              </p>
              <a
                href="https://www.enggenv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.opLink}
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className={styles.clientsSection}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Trusted By</div>
            <h2>Our Valued Clients</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              Trusted by 200+ industry leaders across automotive, pharmaceutical,
              real estate, hospitality, and government sectors.
            </p>
          </div>

          {/* Logo Scrolling Ticker */}
          <div className={styles.logoTickerWrapper} aria-hidden="true">
            <div className={styles.logoTicker}>
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <div key={`${client.name}-${i}`} className={styles.logoTickerCard}>
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={260}
                      height={130}
                      className={styles.tickerLogoImg}
                    />
                  ) : (
                    <div className={styles.clientInitial}>{client.name.charAt(0)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.cpcbSection}>
            <div className="divider" style={{ margin: "2rem auto" }} />
            <h3 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--gray-900)" }}>
              Providing Real-Time Data Compliance For
            </h3>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem" }}>
              <Image src="/images/34.png" alt="CPCB & SPCB" width={600} height={150} style={{ objectFit: 'contain' }} unoptimized />
              <Image src="/images/35.png" alt="Certifications" width={600} height={150} style={{ objectFit: 'contain' }} unoptimized />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
