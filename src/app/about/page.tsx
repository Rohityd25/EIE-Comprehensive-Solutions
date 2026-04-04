import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EIE Comprehensive Solutions — 30+ years of environmental engineering excellence. Authorized Dealer of Advance Analytik Hungary.",
};

const milestones = [
  { year: "1995", title: "Founded", desc: "EIE Comprehensive Solutions established in New Delhi" },
  { year: "2005", title: "100 Clients", desc: "Reached 100 satisfied clients milestone across India" },
  { year: "2012", title: "Partnership", desc: "Became Authorized Dealer of Advance Analytik, Hungary" },
  { year: "2020", title: "300+ Sites", desc: "Monitoring 300+ active environmental sites nationwide" },
  { year: "2024", title: "Digital Leap", desc: "Launched modern digital platform for seamless service delivery" },
];

const team = [
  { name: "Mr. Roshan Yadav", role: "Managing Director", initial: "R" },
  { name: "Environmental Team", role: "Technical Experts", initial: "E" },
  { name: "Service Team", role: "Field Engineers", initial: "S" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="badge badge-green" style={{ marginBottom: "1.25rem" }}>About EIE</div>
          <h1 className={styles.heroTitle}>
            30+ Years of Environmental <br />
            Engineering Excellence
          </h1>
          <p className={styles.heroSubtitle}>
            EIE Comprehensive Solutions has been at the forefront of environmental monitoring
            and engineering, helping industries across India achieve sustainable operations
            and regulatory compliance for over three decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard} style={{ "--mv-color": "#0a5c36" } as React.CSSProperties}>
              <div className={styles.mvIcon}>🎯</div>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <p className={styles.mvDesc}>
                To empower industries with cutting-edge environmental monitoring technologies,
                enabling sustainable operations while ensuring full regulatory compliance. We
                are committed to delivering precision, reliability, and innovation in every
                solution we provide.
              </p>
            </div>
            <div className={styles.mvCard} style={{ "--mv-color": "#1e40af" } as React.CSSProperties}>
              <div className={styles.mvIcon}>🌿</div>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <p className={styles.mvDesc}>
                To be India's most trusted environmental solutions company, fostering a cleaner,
                greener future for businesses, communities, and generations to come through
                technology-driven environmental management systems.
              </p>
            </div>
            <div className={styles.mvCard} style={{ "--mv-color": "#b45309" } as React.CSSProperties}>
              <div className={styles.mvIcon}>💡</div>
              <h2 className={styles.mvTitle}>Our Values</h2>
              <p className={styles.mvDesc}>
                Innovation in technology, precision in measurement, reliability in delivery,
                and an unwavering commitment to environmental stewardship. We believe that
                sustainable industry and clean environment can coexist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Our Story</div>
            <h2>A Journey Towards Greener Industry</h2>
            <div className="divider" />
          </div>
          <div className={styles.storyTimeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge badge-green">Our Clients</div>
            <h2>Trusted by Industry Leaders</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem" }}>
              We are proud to serve some of India's most respected organizations across
              automotive, pharmaceutical, real estate, and government sectors.
            </p>
          </div>
          <div className={styles.clientsNote}>
            <p>
              Our trusted clients include <strong>Mercedes-Benz, Berger Paints, DS Group, Gaur City, Yakult India,
              Venkateshwar Hospital</strong>, and 200+ other industry leaders who rely on us for their
              environmental compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-amber">Official Partnerships</div>
            <h2>Our Technology Partners</h2>
            <div className="divider" />
          </div>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCardFull}>
              <div className={styles.partnerBadge}>Authorized Dealer</div>
              <h3 className={styles.partnerName}>Advance Analytik® — Hungary</h3>
              <p className={styles.partnerDesc}>
                As the authorized dealer for Advance Analytik Hungary, we bring world-class
                analytical instrumentation to Indian industries. Our partnership ensures access
                to the latest environmental monitoring technologies backed by European precision
                engineering.
              </p>
              <a
                href="https://www.advanceanalytik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-green"
                style={{ marginTop: "1.25rem" }}
              >
                Visit Partner Website
              </a>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerBadge2}>Channel Partner</div>
              <h3 className={styles.partnerName}>Eco System</h3>
              <p className={styles.partnerDesc}>
                As a Channel Partner of Eco System, we extend our service portfolio
                with integrated environmental management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
