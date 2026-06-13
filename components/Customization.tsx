import { customization } from "@/lib/data";
import { customizationIcons } from "./icons";
import Reveal from "./Reveal";
import styles from "./Customization.module.css";

export default function Customization() {
  return (
    <section id="customize" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`}>{customization.eyebrow}</p>
          <h2 className={`section-title ${styles.title}`}>
            {customization.title}
          </h2>
        </Reveal>

        <ul className={styles.grid}>
          {customization.options.map((option, i) => {
            const Icon = customizationIcons[option.id];
            return (
              <Reveal
                key={option.id}
                as="li"
                className={styles.card}
                delay={(i % 4) * 80}
              >
                <span className={styles.iconCircle}>
                  {Icon ? <Icon className={styles.icon} /> : null}
                </span>
                <h3 className={styles.cardTitle}>{option.title}</h3>
                <p className={styles.cardDesc}>{option.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
