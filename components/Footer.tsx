import { footer, site, waLink } from "@/lib/data";
import { IconInstagram, IconLinkedIn, IconWhatsApp } from "./icons";
import GoldDivider from "./GoldDivider";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <GoldDivider />
      <div className={`${styles.grid} container`}>
        {/* Col 1 — brand */}
        <div className={styles.brandCol}>
          {site.logoWhite ? (
            <img
              src={site.logoWhite}
              alt={site.brand}
              className={styles.logo}
              width={180}
              height={44}
            />
          ) : (
            <span className={styles.logoText}>{site.brand}</span>
          )}
          <p className={styles.tagline}>{footer.tagline}</p>
          <ul className={styles.social}>
            <li>
              <a
                href={site.social.instagram}
                className={styles.socialLink}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram />
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                className={styles.socialLink}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                className={styles.socialLink}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2 — quick links */}
        <nav className={styles.col} aria-label="Quick links">
          <h2 className={styles.colTitle}>Quick Links</h2>
          <ul className={styles.linkList}>
            {footer.quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3 — collections */}
        <nav className={styles.col} aria-label="Collections">
          <h2 className={styles.colTitle}>Collections</h2>
          <ul className={styles.linkList}>
            {footer.collectionLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={styles.link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 4 — contact */}
        <div className={styles.col}>
          <h2 className={styles.colTitle}>Contact</h2>
          <ul className={styles.linkList}>
            <li>
              <a href={`mailto:${site.email}`} className={styles.link}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className={styles.link}>
                {site.phoneDisplay}
              </a>
            </li>
            <li className={styles.location}>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={`${styles.copyright} container`}>
          © {year} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
