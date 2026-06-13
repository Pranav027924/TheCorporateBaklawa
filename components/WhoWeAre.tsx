import { whoWeAre } from "@/lib/data";
import IKImage from "./IKImage";
import Reveal from "./Reveal";
import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section id="about" className={styles.section}>
      <div className={`${styles.grid} container`}>
        <Reveal className={styles.imageWrap}>
          <IKImage
            src={whoWeAre.image}
            alt={whoWeAre.imageAlt}
            width={640}
            height={720}
            transform="f-auto,q-80"
            srcsetWidths={[400, 640, 800]}
            sizes="(min-width: 768px) 45vw, 100vw"
            className={styles.image}
            placeholderLabel="Who We Are image"
          />
        </Reveal>

        <Reveal className={styles.text} delay={120}>
          <p className={`eyebrow ${styles.eyebrow}`}>{whoWeAre.eyebrow}</p>
          <h2 className={`section-title ${styles.headline}`}>
            {whoWeAre.headline}
          </h2>
          {whoWeAre.paragraphs.map((p, i) => (
            <p key={i} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
