import Link from "next/link";
import styles from "./ContactCta.module.css";

export default function ContactCta() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg} aria-hidden="true">
        <div className={styles.ctaShape1} />
        <div className={styles.ctaShape2} />
      </div>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaLeft}>
            <div className="badge" style={{ background: "rgba(245,158,11,0.15)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)", marginBottom: "1rem" }}>
              Get Started Today
            </div>
            <h2 className={styles.ctaTitle}>
              Ready to Make Your Operations More Sustainable?
            </h2>
            <p className={styles.ctaDesc}>
              Our team of environmental engineering experts is ready to help you achieve compliance
              and build a greener, more efficient operation. Contact us for a free consultation.
            </p>
            <div className={styles.ctaInfo}>
              <a href="tel:9882810053" className={styles.ctaInfoItem}>
                <span className={styles.ctaInfoIcon}>📞</span>
                <div>
                  <span className={styles.ctaInfoLabel}>Call Us</span>
                  <span className={styles.ctaInfoValue}>9882810053 / 9358536247</span>
                </div>
              </a>
              <a href="mailto:marketing@eieindia.in" className={styles.ctaInfoItem}>
                <span className={styles.ctaInfoIcon}>✉️</span>
                <div>
                  <span className={styles.ctaInfoLabel}>Email Us</span>
                  <span className={styles.ctaInfoValue}>marketing@eieindia.in</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.ctaRight}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaCardTitle}>Quick Inquiry</h3>
              <p className={styles.ctaCardDesc}>Fill this quick form and we'll get back to you within 24 hours</p>
              <div className={styles.ctaCardLinks}>
                <Link href="/contact" className="btn btn-accent btn-lg w-full">
                  Send an Inquiry
                </Link>
                <Link href="/services" className={styles.ctaCardSecondary}>
                  Browse Our Services →
                </Link>
              </div>
              <div className={styles.ctaCardBadges}>
                <span>✓ Free Consultation</span>
                <span>✓ 24hr Response</span>
                <span>✓ Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
