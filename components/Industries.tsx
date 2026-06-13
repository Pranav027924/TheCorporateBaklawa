import { industriesSection } from "@/lib/data";
import Reveal from "./Reveal";
import styles from "./Industries.module.css";

export default function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <div className={`${styles.grid} container`}>
        <Reveal className={styles.left}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            {industriesSection.eyebrow}
          </p>
          <h2 className={`section-title ${styles.headline}`}>
            {industriesSection.headline}
          </h2>
          <p className={styles.body}>{industriesSection.body}</p>
        </Reveal>

        <Reveal className={styles.right} delay={120}>
          <ul className={styles.pills}>
            {industriesSection.industries.map((industry) => (
              <li key={industry} className={styles.pill}>
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
