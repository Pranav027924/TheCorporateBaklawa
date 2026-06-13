import { stats } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <section className={styles.section} aria-label="Our impact">
      <Reveal className={`${styles.grid} container`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
