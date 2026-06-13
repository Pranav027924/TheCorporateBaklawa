import { hero, ikUrl } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const bg = hero.backgroundImage
    ? ikUrl(hero.backgroundImage, "w-1920,f-auto,q-70")
    : "";

  return (
    <section id="hero" className={styles.hero}>
      {bg ? (
        <img
          src={bg}
          srcSet={`${ikUrl(
            hero.backgroundImage,
            "w-768,f-auto,q-70"
          )} 768w, ${ikUrl(
            hero.backgroundImage,
            "w-1280,f-auto,q-70"
          )} 1280w, ${bg} 1920w`}
          sizes="100vw"
          alt={hero.backgroundAlt}
          className={styles.bgImage}
          width={1920}
          height={1080}
          // @ts-expect-error fetchpriority is a valid HTML attribute (PRD §8 LCP)
          fetchpriority="high"
          decoding="async"
        />
      ) : (
        <div className={styles.bgFallback} aria-hidden="true" />
      )}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <p className={`${styles.label} eyebrow ${styles.fadeUp}`}>
          {hero.label}
        </p>
        <h1 className={`${styles.headline} ${styles.fadeUp} ${styles.delay1}`}>
          {hero.headline}
        </h1>
        <p className={`${styles.body} ${styles.fadeUp} ${styles.delay2}`}>
          {hero.body}
        </p>
        <div className={`${styles.actions} ${styles.fadeUp} ${styles.delay3}`}>
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-outline-light">
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className={styles.scrollHint}
        aria-label="Scroll to content"
      >
        <span className={styles.chevron} aria-hidden="true" />
      </a>
    </section>
  );
}
