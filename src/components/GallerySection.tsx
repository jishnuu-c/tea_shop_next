"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryItem } from "@/types";

export type { GalleryItem };

const galleryItemsData: GalleryItem[] = [
  {
    id: 1,
    className: "gallery-item-lg",
    src: "/images/gallery-tea-pour.jpg",
    alt: "തമിഴ് മീറ്റർ ചായ പതച്ചൊഴിക്കുന്നു",
    title: "തമിഴ് സ്റ്റൈൽ മീറ്റർ ചായ",
    sub: "പതഞ്ഞുപൊങ്ങുന്ന തിളച്ച പാൽചായയുടെ ചന്തം",
    width: 800,
    height: 500,
  },
  {
    id: 2,
    className: "gallery-item-md",
    src: "/images/menu-uzhunnu-vada.jpg",
    alt: "മൊരിഞ്ഞ ഉഴുന്നുവട തേങ്ങാച്ചട്നിക്കൊപ്പം",
    title: "മൊരിഞ്ഞ ഉഴുന്നുവട",
    sub: "വാഴയിലയിൽ വിളമ്പിയ ചൂടൻ ഉഴുന്നുവടയും തേങ്ങാച്ചട്നിയും",
    width: 600,
    height: 500,
  },
  {
    id: 3,
    className: "gallery-item-sm",
    src: "/images/gallery-tea-stall.jpg",
    alt: "മണിവട കടയുടെ ഊഷ്മളമായ അന്തരീക്ഷം",
    title: "കടയുടെ നാടൻ അന്തരീക്ഷം",
    sub: "സൗഹൃദവും സന്തോഷവും നിറഞ്ഞ ചായസമയം",
    width: 500,
    height: 350,
  },
  {
    id: 4,
    className: "gallery-item-sm",
    src: "/images/menu-parippu-vada.jpg",
    alt: "കരുകരുപ്പുള്ള പരിപ്പുവട",
    title: "കരുകരുപ്പുള്ള പരിപ്പുവട",
    sub: "കറിവേപ്പിലയും പച്ചമുളകും ചേർത്ത നാടൻ രുചി",
    width: 500,
    height: 350,
  },
  {
    id: 5,
    className: "gallery-item-sm",
    src: "/images/menu-pazham-pori.jpg",
    alt: "മധുരമൂറുന്ന സ്പെഷ്യൽ പഴംപൊരി",
    title: "സ്പെഷ്യൽ പഴംപൊരി",
    sub: "നേന്ത്രപ്പഴത്തിന്റെ മധുരവും മൊരിവും",
    width: 500,
    height: 350,
  },
];

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (activePhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      }
    };
    if (activePhoto) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <>
      <section className="section section-cream" id="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">ചായക്കട കാഴ്ചകൾ</span>
            <h2 className="section-title">ചായക്കടയിലെ കാഴ്ചകൾ</h2>
            <p className="section-subtitle">
              പതഞ്ഞുയരുന്ന ചായയുടെയും തിളച്ച എണ്ണയിൽ നിന്നും വറുത്തെടുക്കുന്ന പലഹാരങ്ങളുടെയും മനോഹരമായ നിമിഷങ്ങൾ.
            </p>
            <div className="brand-ornament">
              <span className="brand-ornament-line"></span>
              <span className="brand-ornament-leaf">🌿</span>
              <span className="brand-ornament-line reverse"></span>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryItemsData.map((item: GalleryItem) => (
              <div
                key={item.id}
                className={`gallery-item ${item.className}`}
                tabIndex={0}
                role="button"
                aria-label={`കാണുക: ${item.title}`}
                onClick={() => setActivePhoto(item)}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePhoto(item);
                  }
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="gallery-image"
                  width={item.width}
                  height={item.height}
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-text">
                    <div className="gallery-overlay-title">{item.title}</div>
                    <div className="gallery-overlay-sub">{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <div
        className={`lightbox-modal ${activePhoto ? "active" : ""}`}
        id="galleryLightbox"
        role="dialog"
        aria-modal="true"
        aria-label="ഫോട്ടോ കാഴ്ച"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (e.target === e.currentTarget) {
            setActivePhoto(null);
          }
        }}
      >
        <div className="lightbox-content">
          <button
            className="lightbox-close"
            id="lightboxClose"
            aria-label="അടയ്ക്കുക"
            onClick={() => setActivePhoto(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {activePhoto && (
            <>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="lightbox-img"
                id="lightboxImg"
                width={activePhoto.width}
                height={activePhoto.height}
                unoptimized
              />
              <div className="lightbox-caption" id="lightboxCaption">
                <strong>{activePhoto.title}</strong>
                <div style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: "4px" }}>
                  {activePhoto.sub}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
