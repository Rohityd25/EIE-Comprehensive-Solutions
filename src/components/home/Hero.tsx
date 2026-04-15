"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    image: "/images/hero-factory.jpg",
    badge: "Authorized Dealer · Advance Analytik® Hungary",
    title: "Leading the Fight Against",
    highlight: "Pollution",
    subtitle: "with Advanced Monitoring & Abatement Solutions",
    desc: "EIE Comprehensive Solutions empowers industries across India with cutting-edge air quality monitoring, emission control, and sustainable engineering.",
  },
  {
    id: 2,
    image: "/images/air-quality-station.jpg",
    badge: "CPCB & SPCB Compliant Systems",
    title: "Real-Time",
    highlight: "Air Quality",
    subtitle: "Monitoring Across India",
    desc: "State-of-the-art ambient air quality monitoring stations providing real-time data for regulatory compliance and environmental protection.",
  },
  {
    id: 3,
    image: "/images/water-treatment.jpg",
    badge: "Online Effluent Monitoring",
    title: "Advanced",
    highlight: "Water & Waste",
    subtitle: "Management Solutions",
    desc: "Online effluent monitoring, water quality analyzers and BOD/COD measurement systems compliant with SPCB norms.",
  },

];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setIsAnimating(false);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Slideshow Background */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.slideBg} ${i === current ? styles.slideActive : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />
      {/* Green gradient overlay */}
      <div className={styles.greenOverlay} aria-hidden="true" />


      <div className="container">
        <div className={styles.heroContent}>
          {/* EIE Logo */}
          <div className={styles.logoWrap}>
            <Image
              src="/images/eie-logo.png"
              alt="EIE Comprehensive Solutions"
              width={180}
              height={60}
              className={styles.logo}
              priority
            />
          </div>

          <div className={`${styles.badge} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
            <span className={styles.badgeDot} />
            <span>{slide.badge}</span>
          </div>

          <h1 className={`${styles.heroTitle} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
            {slide.title}{" "}
            <span className={styles.heroHighlight}>{slide.highlight}</span>
            <br />
            <span className={styles.heroSubLine}>{slide.subtitle}</span>
          </h1>

          <p className={`${styles.heroDesc} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
            {slide.desc}
          </p>

          <div className={styles.heroCta}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </div>

          {/* Slideshow Dots */}
          <div className={styles.slideNav} aria-label="Slideshow navigation">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.slideDot} ${i === current ? styles.slideDotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
