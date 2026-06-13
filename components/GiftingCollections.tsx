"use client";

import { useState } from "react";
import { collections, collectionsSection } from "@/lib/data";
import IKImage from "./IKImage";
import Reveal from "./Reveal";
import styles from "./GiftingCollections.module.css";

export default function GiftingCollections() {
  const [active, setActive] = useState(collections[0].id);
  const activeCollection =
    collections.find((c) => c.id === active) ?? collections[0];

  /* Roving arrow-key navigation across tabs (PRD §10) */
  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const idx = collections.findIndex((c) => c.id === active);
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % collections.length;
    else if (e.key === "ArrowLeft")
      next = (idx - 1 + collections.length) % collections.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = collections.length - 1;
    else return;
    e.preventDefault();
    const nextId = collections[next].id;
    setActive(nextId);
    document.getElementById(`tab-${nextId}`)?.focus();
  };

  return (
    <section id="collections" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            {collectionsSection.eyebrow}
          </p>
          <h2 className={`section-title ${styles.title}`}>
            {collectionsSection.title}
          </h2>
        </Reveal>

        {/* Tab strip (PRD §4.6, §10 tablist semantics) */}
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Gifting collections"
        >
          {collections.map((c) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`panel-${c.id}`}
                tabIndex={selected ? 0 : -1}
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                onClick={() => setActive(c.id)}
                onKeyDown={onTabKeyDown}
              >
                {c.tab}
              </button>
            );
          })}
        </div>

        {/* Active panel — keyed so the fade animation replays on switch */}
        <div
          key={activeCollection.id}
          role="tabpanel"
          id={`panel-${activeCollection.id}`}
          aria-labelledby={`tab-${activeCollection.id}`}
          className={styles.panel}
        >
          <ul className={styles.grid}>
            {activeCollection.products.map((product) => (
              <li key={product.name} className={styles.card}>
                <div className={styles.imageBox}>
                  <IKImage
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    transform="f-auto,q-80"
                    srcsetWidths={[400, 600, 800]}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className={styles.image}
                    placeholderLabel={product.name}
                  />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
