import { whyChooseUs } from "@/lib/data";
import { whyChooseUsIcons } from "./icons";
import Reveal from "./Reveal";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`}>{whyChooseUs.eyebrow}</p>
          <h2 className={`section-title ${styles.title}`}>
            {whyChooseUs.title}
          </h2>
        </Reveal>

        <ul className={styles.grid}>
          {whyChooseUs.features.map((feature, i) => {
            const Icon = whyChooseUsIcons[feature.id];
            return (
              <Reveal
                key={feature.id}
                as="li"
                className={styles.card}
                delay={i * 80}
              >
                <span className={styles.iconCircle}>
                  {Icon ? <Icon className={styles.icon} /> : null}
                </span>
                <h3 className={styles.label}>{feature.label}</h3>
                <p className={styles.subtitle}>{feature.subtitle}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
