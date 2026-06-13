"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Transparent over hero → Forest Green after 80px (PRD §4.1) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close drawer on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const logoSrc = scrolled ? site.logoWhite || site.logo : site.logoWhite;

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      data-scrolled={scrolled}
    >
      <nav className={`${styles.inner} container`} aria-label="Primary">
        <a href="#hero" className={styles.logoLink} aria-label={site.brand}>
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={site.brand}
              className={styles.logoImg}
              width={180}
              height={44}
            />
          ) : (
            <span className={styles.logoText}>{site.brand}</span>
          )}
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`${styles.cta} btn`}>
          Get a Quote
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.drawerLink}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`${styles.drawerCta} btn btn-gold`}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          Get a Quote
        </a>
      </aside>
    </header>
  );
}
