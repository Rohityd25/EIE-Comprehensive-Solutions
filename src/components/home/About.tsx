import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" aria-label="About EIE">
      <div className="container">
        <div className={styles.grid}>
          {/* Visual */}
          <div className={styles.visual}>
            <div className={styles.mainImgWrap}>
              <Image
                src="/images/engineers.jpg"
                alt="EIE Environmental Engineers at work"
                width={560}
                height={420}
                className={styles.mainImg}
                priority={false}
              />
              {/* Floating card */}
              <div className={styles.floatCard}>
                <div className={styles.floatCardIcon}>🏆</div>
                <div>
                  <div className={styles.floatCardNum}>30+</div>
                  <div className={styles.floatCardLabel}>Years of Excellence</div>
                </div>
              </div>
            </div>
            {/* Second image */}
            <div className={styles.secondImgWrap}>
              <Image
                src="/images/air-quality-station.jpg"
                alt="Air Quality Monitoring Station"
                width={240}
                height={200}
                className={styles.secondImg}
              />
              <div className={styles.secondImgBadge}>
                <span className="green-dot" />
                <span>Advance Analytik Partner</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className="badge badge-green" style={{ marginBottom: "1rem" }}>About EIE</div>
            <h2 className={styles.title}>
              Welcome to <span className="gradient-text">EIE Comprehensive Solutions</span>
            </h2>
            <div className="divider divider-left" style={{ marginBottom: "1.5rem" }} />
            <p className={styles.desc}>
              A pioneering company dedicated to delivering cutting-edge environmental and engineering
              solutions across India. Specializing in advanced air quality monitoring technologies,
              EIE empowers industries to achieve sustainable operations while adhering to regulatory compliance.
            </p>
            <p className={styles.desc}>
              As the <strong>Authorized Dealer of Advance Analytik (Hungary)</strong> and Channel Partner of
              Eco System, we bring European precision engineering to Indian industries with full local support.
            </p>

            {/* Points */}
            <div className={styles.points}>
              {[
                { icon: "⚙️", title: "Advanced Technology", desc: "Cutting-edge instruments from Advance Analytik Hungary" },
                { icon: "📋", title: "Regulatory Compliance", desc: "Full adherence to CPCB, MoEF & State PCB norms" },
                { icon: "🛠️", title: "Expert Support", desc: "24/7 technical support and calibration services" },
              ].map((p) => (
                <div key={p.title} className={styles.point}>
                  <div className={styles.pointIcon}>{p.icon}</div>
                  <div>
                    <div className={styles.pointTitle}>{p.title}</div>
                    <div className={styles.pointDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner logo */}
            <div className={styles.partnerBar}>
              <span className={styles.partnerLabel}>Authorized Dealer</span>
              <Image
                src="/images/advance-analytik-logo.png"
                alt="Advance Analytik"
                width={140}
                height={36}
                className={styles.partnerLogoImg}
              />
              <span className={styles.partnerSep}>·</span>

            </div>

            <Link href="/about" className="btn btn-primary" style={{ marginTop: "2rem" }}>
              Read More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
