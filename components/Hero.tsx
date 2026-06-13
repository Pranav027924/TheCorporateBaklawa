import { hero, ikUrl } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const hasImage = !!hero.backgroundImage;
  const defaultSrc = hasImage
    ? ikUrl(hero.backgroundImage, "w-1280,f-auto,q-72")
    : "";

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        {/* Content panel (forest green) — reads as intentional even before
            the image is added (PRD §4.2 redesigned into a split layout). */}
        <div className={styles.panel}>
          <div className={styles.panelInner}>
            <p className={`${styles.kicker} ${styles.fadeUp}`}>
              <span className={styles.kickerLine} aria-hidden="true" />
              {hero.label}
            </p>
            <h1 className={`${styles.headline} ${styles.fadeUp} ${styles.d1}`}>
              {hero.headline}
            </h1>
            <p className={`${styles.body} ${styles.fadeUp} ${styles.d2}`}>
              {hero.body}
            </p>
            <div className={`${styles.actions} ${styles.fadeUp} ${styles.d3}`}>
              <a href={hero.primaryCta.href} className="btn btn-gold">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-outline-light">
                {hero.secondaryCta.label}
              </a>
            </div>

            <div
              className={`${styles.rule} ${styles.fadeUp} ${styles.d4}`}
              aria-hidden="true"
            >
              <span className={styles.ruleLine} />
              <span className={styles.ruleDiamond}>◆</span>
              <span className={styles.ruleLine} />
            </div>

            <ul className={`${styles.highlights} ${styles.fadeUp} ${styles.d4}`}>
              {hero.highlights.map((h) => (
                <li key={h} className={styles.highlight}>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Media panel — full-height lifestyle image (or branded placeholder) */}
        <div className={styles.media}>
          {hasImage ? (
            <img
              src={defaultSrc}
              srcSet={`${ikUrl(
                hero.backgroundImage,
                "w-768,f-auto,q-72"
              )} 768w, ${defaultSrc} 1280w, ${ikUrl(
                hero.backgroundImage,
                "w-1920,f-auto,q-70"
              )} 1920w`}
              sizes="(min-width: 900px) 48vw, 100vw"
              alt={hero.backgroundAlt}
              className={styles.mediaImg}
              width={960}
              height={1080}
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div
              className={styles.mediaPlaceholder}
              role="img"
              aria-label={hero.backgroundAlt}
            >
              <span className={styles.placeholderDiamond} aria-hidden="true">
                ◆
              </span>
              <span className={styles.placeholderLabel}>
                Hero lifestyle image
              </span>
            </div>
          )}
          <span className={styles.mediaTint} aria-hidden="true" />
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
