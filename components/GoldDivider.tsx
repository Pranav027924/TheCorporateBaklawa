"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GoldDivider.module.css";

/**
 * Gold horizontal rule with a diamond centerpiece (PRD §4.3 / §2.5).
 * Lines grow in width when scrolled into view (PRD §6, 600ms ease-out).
 */
export default function GoldDivider({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.divider} ${visible ? styles.visible : ""} ${
        className ?? ""
      }`}
      aria-hidden="true"
    >
      <span className={styles.line} />
      <span className={styles.diamond}>◆</span>
      <span className={styles.line} />
    </div>
  );
}
