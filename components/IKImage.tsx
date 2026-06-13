import { ikUrl } from "@/lib/data";
import styles from "./IKImage.module.css";

type IKImageProps = {
  /** Full ImageKit URL (from lib/data.ts). Empty string → branded placeholder. */
  src: string;
  alt: string;
  /** Intrinsic width/height — required to keep CLS = 0 (PRD §8). */
  width: number;
  height: number;
  /** Base transform applied to the default (desktop) src (PRD §5). */
  transform?: string;
  /** Optional widths (px) to build a responsive srcset. */
  srcsetWidths?: number[];
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Short label shown inside the placeholder while the slot is empty. */
  placeholderLabel?: string;
};

/**
 * Plain <img> backed by ImageKit transforms (PRD §5). When the slot in
 * lib/data.ts is still empty, renders a tasteful brand-coloured placeholder
 * at the correct aspect ratio so layout/CLS stays intact pre-launch.
 */
export default function IKImage({
  src,
  alt,
  width,
  height,
  transform = "f-auto,q-80",
  srcsetWidths,
  sizes,
  className,
  priority = false,
  placeholderLabel,
}: IKImageProps) {
  if (!src) {
    return (
      <div
        className={`${styles.placeholder} ${className ?? ""}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label={alt}
      >
        <span className={styles.diamond} aria-hidden="true">
          ◆
        </span>
        {placeholderLabel ? (
          <span className={styles.placeholderLabel}>{placeholderLabel}</span>
        ) : null}
      </div>
    );
  }

  const defaultSrc = ikUrl(src, transform);
  const srcSet =
    srcsetWidths && srcsetWidths.length
      ? srcsetWidths
          .map((w) => `${ikUrl(src, `w-${w},${transform}`)} ${w}w`)
          .join(", ")
      : undefined;

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      // @ts-expect-error fetchpriority is a valid HTML attribute (PRD §8)
      fetchpriority={priority ? "high" : undefined}
    />
  );
}
