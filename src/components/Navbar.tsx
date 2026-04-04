"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/environmental-monitoring", label: "Environmental Monitoring" },
      { href: "/services/water-waste-management", label: "Water/Waste Water Management" },
    ],
  },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHeroPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isHeroPage ? styles.heroPage : ""} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="EIE India Home">
            <Image
              src="/images/eie-logo.png"
              alt="EIE Comprehensive Solutions"
              width={140}
              height={48}
              className={styles.logoImg}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={`${styles.navItem} ${link.children ? styles.hasDropdown : ""}`}
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                  {link.children && (
                    <svg className={styles.chevron} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {link.children && activeDropdown === link.href && (
                  <div className={styles.dropdown}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className={styles.navActions}>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get a Quote
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ""}`} />
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ""}`} />
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ""}`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className={styles.mobileSubLinks}>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.mobileSubLink}>
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileCta}>
            <Link href="/contact" className="btn btn-primary w-full">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
