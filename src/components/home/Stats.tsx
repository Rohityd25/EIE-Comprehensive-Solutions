import styles from "./Stats.module.css";

const stats = [
  {
    number: "300+",
    label: "Sites Monitored",
    description: "Active monitoring installations across India",
    icon: "📍",
    color: "#0a5c36",
  },
  {
    number: "200+",
    label: "Happy Clients",
    description: "Trusted by leading industries and institutions",
    icon: "🤝",
    color: "#1e40af",
  },
  {
    number: "30+",
    label: "Years Experience",
    description: "Decades of environmental engineering expertise",
    icon: "🏆",
    color: "#b45309",
  },
  {
    number: "100%",
    label: "Compliance Rate",
    description: "Full adherence to regulatory standards",
    icon: "✅",
    color: "#6d28d9",
  },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={styles.statCard}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.statIcon} style={{ background: `${stat.color}15`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statDesc}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
