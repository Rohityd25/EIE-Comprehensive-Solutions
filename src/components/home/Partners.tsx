import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
  { name: "Client 34", logo: "/images/34.png" },
  { name: "Client 35", logo: "/images/35.png" },
  { name: "Client 38", logo: "/images/38.png" },
  { name: "Client 39", logo: "/images/39.png" },
  { name: "Client 40", logo: "/images/40.png" },
];

export default function Partners() {
  return (
    <section className={styles.partnersSection} aria-label="Partners and Clients">
      {/* Official Partners */}
      <div className={styles.officialPartners}>
        <div className="container">
          <div className={styles.opHeader}>
            <div className="badge badge-amber">Official Partnerships</div>
            <h2 className={styles.opTitle}>Powered by World-Class Partnerships</h2>
            <div className="divider" style={{ marginBottom: 0 }} />
          </div>
          <div className={styles.opGrid}>
            {/* Advance Analytik */}
            <ScrollReveal animation="fadeInUp" delay={0} className={styles.opCard}>
              <div className={styles.opBadge}>Authorized Partner</div>
              <div className={styles.opLogoWrap}>
                <Image
                  src="/images/advance-analytik-logo.png"
                  alt="Advance Analytik Hungary"
                  width={180}
                  height={60}
                  className={`${styles.opLogo} advance-analytik-red`}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles.opName}>Advance Analytik® — Hungary</h3>
              <p className={styles.opDesc}>
                European precision environmental instrumentation. Exclusive authorized partner for all of India.
              </p>
              <a
                href="https://www.advanceanalytik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-green"
                style={{ marginTop: "1.25rem" }}
              >
                Visit Website →
              </a>
            </ScrollReveal>

            {/* Eco System */}
            <ScrollReveal animation="fadeInUp" delay={100} className={styles.opCard}>
              <div className={styles.opBadge2}>Channel Partner</div>
              <div className={styles.opLogoWrap}>
                <Image
                  src="/images/eco-logo-new.png"
                  alt="Eco System Logo"
                  width={180}
                  height={60}
                  className={styles.opLogo}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className={styles.opName}>Eco System</h3>
              <p className={styles.opDesc}>
                Extended service portfolio through our channel partnership with Eco System.
              </p>
            </ScrollReveal>

            {/* Saaphzone Technologies */}
            <ScrollReveal animation="fadeInUp" delay={200} className={styles.opCard}>
              <div className={styles.opBadge2}>Channel Partner</div>
              <div className={styles.opLogoWrap}>
                <Image
                  src="/images/Saaphzone.jpeg"
                  alt="Saaphzone Technologies Logo"
                  width={300}
                  height={130}
                  className={styles.opLogo}
                  style={{ objectFit: "contain", maxHeight: "120px", height: "auto" }}
                />
              </div>
              <h3 className={styles.opName}>Saaphzone Technologies</h3>
              <p className={styles.opDesc}>
                Our strategic partnership with Saaphzone Technologies enables us to provide robust data monitoring, acquisition, and control systems, ensuring cutting-edge data intelligence for regulatory compliance.
              </p>
            </ScrollReveal>
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
              Trusted by 700+ industry leaders across automotive, pharmaceutical,
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
                      width={380}
                      height={180}
                      className={styles.tickerLogoImg}
                    />
                  ) : (
                    <div className={styles.clientInitial}>{client.name.charAt(0)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
