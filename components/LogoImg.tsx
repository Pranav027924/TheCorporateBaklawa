"use client";

import { useState } from "react";

type LogoImgProps = {
  /** Logo URL — a /public path or full ImageKit URL. Empty → text fallback. */
  src: string;
  /** Brand name; used as alt text and as the visible text fallback. */
  alt: string;
  className?: string;
  /** Class for the text fallback shown when src is empty or fails to load. */
  fallbackClassName?: string;
  width?: number;
  height?: number;
};

/**
 * Renders the logo image, but gracefully falls back to the brand name in text
 * if the slot is empty OR the file 404s (e.g. before the PNG is added to
 * /public). Keeps the navbar/footer from ever showing a broken image.
 */
export default function LogoImg({
  src,
  alt,
  className,
  fallbackClassName,
  width,
  height,
}: LogoImgProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className={fallbackClassName}>{alt}</span>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}
