import { ctaBand, waLink } from "@/lib/data";
import { IconWhatsApp } from "./icons";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import styles from "./CtaBand.module.css";

export default function CtaBand() {
  return (
    <section id="contact" className={styles.section}>
      <Reveal className={`${styles.band} container`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{ctaBand.eyebrow}</p>
        <h2 className={`section-title ${styles.headline}`}>
          {ctaBand.headline}
        </h2>
        <p className={styles.subtext}>{ctaBand.subtext}</p>
        <div className={styles.actions}>
          <a href={ctaBand.primaryCta.href} className="btn btn-gold">
            {ctaBand.primaryCta.label}
          </a>
          <a
            href={waLink(ctaBand.whatsappMessage)}
            className="btn btn-outline-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            {ctaBand.whatsappCta.label}
          </a>
        </div>
      </Reveal>

      <ContactForm />
    </section>
  );
}
