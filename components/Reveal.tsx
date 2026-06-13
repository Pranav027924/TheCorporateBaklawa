"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Render element tag (default div). */
  as?: keyof React.JSX.IntrinsicElements;
  /** Stagger delay in ms before the element animates in. */
  delay?: number;
  className?: string;
  id?: string;
};

/**
 * Fade + slide up on scroll using IntersectionObserver (PRD §6).
 * Adds .is-visible (see globals.css .reveal). Reduced-motion handled in CSS.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
