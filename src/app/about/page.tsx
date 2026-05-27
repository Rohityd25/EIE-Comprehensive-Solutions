import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EIE Comprehensive Solutions — 15+ years of environmental engineering excellence. Authorized Partner of Advance Analytik Hungary.",
};

const milestones = [
  { year: "2018", title: "Founded Ecosystem", desc: "Eco System established to lay the foundation for advanced environmental technologies." },
  { year: "2020", title: "EIE Complete Solutions(EIECSPL)", desc: "EIE Complete Solutions Incorporated to offer advanced environmental monitoring and data connectivity solutions." },
  { year: "2024", title: "300+ Sites & Happy Clients", desc: "Successfully scaled operations to manage up to 300+ active environmental monitoring sites and happy clients." },
  { year: "2025", title: "Founded EIECS", desc: "EIE Comprehensive Solutions (EIECS) officially founded to integrate expert consultation and state-of-the-art environmental systems." },
  { year: "2026", title: "700+ Sites & Clients", desc: "Reached a landmark milestone of 700+ active sites and satisfied clients across India." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className="badge badge-green" style={{ marginBottom: "1.25rem" }}>About EIE</div>
          <h1 className={styles.heroTitle}>
            15+ Years of Environmental <br />
            Engineering Excellence
          </h1>
          <ScrollReveal animation="fadeInUp" className={styles.expertContainer}>
            <div className={styles.expertAvatarWrap}>
              <div className={styles.expertAvatar}>VP</div>
            </div>
            <div className={styles.expertContent}>
              <h2 className={styles.expertName}>Dr. Vivek Prakash Pankaj</h2>
              <div className={styles.expertTitle}>Environmental Expert</div>
              <div className={styles.expertDegree}>Ph.D. in Environmental Engineering (NIT Hamirpur)</div>
              <p className={styles.expertBio}>
                Dr. Vivek Prakash Pankaj is an Environmental Expert and Research Professional with a Ph.D. in Environmental Engineering from the National Institute of Technology (NIT) Hamirpur. He possesses extensive experience in environmental technologies, pollution control systems, and sustainable industrial solutions. Dr. Pankaj has contributed to various research publications and scientific journals in the field of environmental engineering and renewable energy. He also carries valuable experience associated with CPCB guidelines, OCEMS implementation, and industrial environmental compliance. With over 5–6 years of leadership and operational expertise, he successfully manages and operates multiple companies across environmental, energy, and sustainability sectors. His vision is focused on delivering innovative, technology-driven, and eco-friendly solutions for a cleaner and sustainable future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.mvGrid}>
            <ScrollReveal animation="fadeInUp" delay={0} className={styles.mvCard} style={{ "--mv-color": "#16a34a", "--mv-bg": "rgba(22, 163, 74, 0.08)" } as React.CSSProperties}>
              <div className={styles.mvIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <p className={styles.mvDesc}>
                To empower industries with cutting-edge environmental monitoring technologies,
                enabling sustainable operations while ensuring full regulatory compliance. We
                are committed to delivering precision, reliability, and innovation in every
                solution we provide.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={100} className={styles.mvCard} style={{ "--mv-color": "#2563eb", "--mv-bg": "rgba(37, 99, 235, 0.08)" } as React.CSSProperties}>
              <div className={styles.mvIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-10 8.2z" />
                  <path d="M9 22v-4h4" />
                </svg>
              </div>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <p className={styles.mvDesc}>
                To be India's most trusted environmental solutions company, fostering a cleaner,
                greener future for businesses, communities, and generations to come through
                technology-driven environmental management systems.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={200} className={styles.mvCard} style={{ "--mv-color": "#ca8a04", "--mv-bg": "rgba(202, 138, 4, 0.08)" } as React.CSSProperties}>
              <div className={styles.mvIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h2 className={styles.mvTitle}>Our Values</h2>
              <p className={styles.mvDesc}>
                Innovation in technology, precision in measurement, reliability in delivery,
                and an unwavering commitment to environmental stewardship. We believe that
                sustainable industry and clean environment can coexist.
              </p>
            </ScrollReveal>
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
              <ScrollReveal
                key={m.year}
                animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                delay={i * 80}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
              >
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
              </ScrollReveal>
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
                Venkateshwar Hospital</strong>, and 700+ other industry leaders who rely on us for their
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
            <ScrollReveal animation="fadeInUp" delay={0} className={styles.partnerCard}>
              <div className={styles.partnerBadge}>Authorized Partner</div>
              <div className={styles.partnerLogoWrap}>
                <Image
                  src="/images/advance-analytik-logo.png"
                  alt="Advance Analytik Hungary Logo"
                  width={280}
                  height={120}
                  className={styles.partnerLogo}
                  style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "105px" }}
                />
              </div>
              <h3 className={styles.partnerName}>Advance Analytik® — Hungary</h3>
              <p className={styles.partnerDesc}>
                As the authorized exclusive partner for Advance Analytik Hungary, we bring world-class
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
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={100} className={styles.partnerCard}>
              <div className={styles.partnerBadge2}>Channel Partner</div>
              <div className={styles.partnerLogoWrap}>
                <Image
                  src="/images/eco-logo-new.png"
                  alt="Eco System Logo"
                  width={280}
                  height={120}
                  className={styles.partnerLogo}
                  style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "105px" }}
                />
              </div>
              <h3 className={styles.partnerName}>Eco System</h3>
              <p className={styles.partnerDesc}>
                As a Channel Partner of Eco System, we extend our service portfolio
                with integrated environmental management solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={200} className={styles.partnerCard}>
              <div className={styles.partnerBadge2}>Channel Partner</div>
              <div className={styles.partnerLogoWrap}>
                <Image
                  src="/images/Saaphzone.jpeg"
                  alt="Saaphzone Technologies Logo"
                  width={280}
                  height={120}
                  className={styles.partnerLogo}
                  style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "105px" }}
                />
              </div>
              <h3 className={styles.partnerName}>Saaphzone Technologies</h3>
              <p className={styles.partnerDesc}>
                Our strategic partnership with Saaphzone Technologies enables us to provide robust data monitoring, acquisition, and control systems, ensuring cutting-edge data intelligence for regulatory compliance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
