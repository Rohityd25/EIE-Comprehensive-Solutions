"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  {
    number: "700+",
    label: "Sites Monitored",
    description: "Active monitoring installations across India",
    icon: "📍",
    color: "#0a5c36",
    end: 700,
    suffix: "+",
  },
  {
    number: "700+",
    label: "Happy Clients",
    description: "Trusted by leading industries and institutions",
    icon: "🤝",
    color: "#1e40af",
    end: 700,
    suffix: "+",
  },
  {
    number: "8+",
    label: "Years Experience",
    description: "Years of environmental engineering expertise",
    icon: "🏆",
    color: "#b45309",
    end: 8,
    suffix: "+",
  },
  {
    number: "98%",
    label: "Compliance Rate",
    description: "Full adherence to regulatory standards",
    icon: "✅",
    color: "#6d28d9",
    end: 98,
    suffix: "%",
  },
];

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(end: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const run = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(run);
    };
    rafRef.current = requestAnimationFrame(run);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [end, duration, active]);

  return count;
}

function StatCard({
  stat,
  index,
  visible,
}: {
  stat: (typeof stats)[0];
  index: number;
  visible: boolean;
}) {
  const count = useCountUp(stat.end, 1600 + index * 100, visible);

  return (
    <div
      className={`${styles.statCard} ${visible ? styles.statCardVisible : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Animated icon ring */}
      <div
        className={`${styles.statIcon} ${visible ? styles.statIconPop : ""}`}
        style={{ background: `${stat.color}18`, color: stat.color, borderColor: `${stat.color}35` }}
      >
        {stat.icon}
      </div>

      {/* Counting number */}
      <div className={styles.statNumber}>
        <span className={visible ? styles.shimmer : ""}>{visible ? count : 0}</span>
        <span className={styles.statSuffix}>{stat.suffix}</span>
      </div>

      <div className={styles.statLabel}>{stat.label}</div>
      <div className={styles.statDesc}>{stat.description}</div>

      {/* Bottom accent bar */}
      <div
        className={`${styles.accentBar} ${visible ? styles.accentBarGrow : ""}`}
        style={{ background: stat.color, transitionDelay: `${0.4 + index * 0.12}s` }}
      />
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={sectionRef}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
