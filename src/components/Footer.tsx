import Link from "next/link";
import styles from "./Footer.module.css";

const services = [
  { href: "/services/environmental-monitoring", label: "Environmental Monitoring" },
  { href: "/services/water-waste-management", label: "Waste Water Management" },
  { href: "/products", label: "Product Catalog" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/admin", label: "Admin Panel" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/eiecompletesolutions/",
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/eiecompletesolutions",
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/eiecs2025",
    label: "Twitter/X",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <h3 className={styles.ctaTitle}>Ready to Start a Project?</h3>
              <p className={styles.ctaSubtitle}>
                Get in touch with our team of environmental engineering experts today.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-accent btn-lg">
                Get a Free Quote
              </Link>
              <a href="tel:9882810053" className="btn btn-outline btn-lg">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <div className={styles.footerLogoIcon}>
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="14" fill="white" fillOpacity="0.15" />
                    <path d="M7 10h14M7 14h10M7 18h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className={styles.footerLogoMain}>EIE</span>
                  <span className={styles.footerLogoSub}>Comprehensive Solutions</span>
                </div>
              </div>
              <p className={styles.footerTagline}>
                Pioneering environmental and engineering solutions with a commitment to innovation, precision, and a greener future.
              </p>
              <div className={styles.footerContact}>
                <p>📍 D-8, Mansarover Park, New Delhi-110032</p>
                <p>📞 9882810053, 9358536247</p>
                <p>✉️ marketing@eieindia.in</p>
              </div>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Our Services</h4>
              <ul className={styles.footerLinks}>
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.footerLink}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Our Partners</h4>
              <div className={styles.partnerBadges}>
                <div className={styles.partnerBadge}>
                  <span className={styles.partnerBadgeLabel}>Authorized Dealer</span>
                  <span className={styles.partnerBadgeName}>Advance Analytik®</span>
                  <span className={styles.partnerBadgeCountry}>Hungary</span>
                </div>
                <div className={styles.partnerBadge}>
                  <span className={styles.partnerBadgeLabel}>Channel Partner</span>
                  <span className={styles.partnerBadgeName}>Eco System</span>
                </div>
              </div>
              <div className={styles.footerCertification}>
                <span>🏆 30+ Years of Experience</span>
                <span>✅ 300+ Sites Monitored</span>
                <span>⭐ 200+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomContent}>
            <p>© {currentYear} EIE Comprehensive Solutions. All rights reserved.</p>
            <p className={styles.footerBottomRight}>
             
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
