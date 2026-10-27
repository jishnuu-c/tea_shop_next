import Image from "next/image";
import { menuItems } from "@/data/menuData";
import { MenuItem } from "@/types";

export type { MenuItem };

export default function MenuSection() {
  return (
    <section className="section section-white" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">തനത് വിഭവങ്ങൾ</span>
          <h2 className="section-title">ഞങ്ങളുടെ സ്പെഷ്യൽ വിഭവങ്ങൾ</h2>
          <p className="section-subtitle">
            നല്ല കടുപ്പമുള്ള ചായയ്ക്കൊപ്പം കഴിക്കാൻ ഏറ്റവും മികച്ച തമിഴ്-കേരള നാടൻ പലഹാരങ്ങൾ.
          </p>
          <div className="brand-ornament">
            <span className="brand-ornament-line"></span>
            <span className="brand-ornament-leaf">🌿</span>
            <span className="brand-ornament-line reverse"></span>
          </div>
        </div>

        {/* Dynamic Menu Grid */}
        <div className="menu-grid" id="menuContainer">
          {menuItems.map((item: MenuItem) => {
            const hasPrice = item.price !== null && item.price !== undefined && item.price !== "";
            const displayPrice = typeof item.price === "number" ? `₹${item.price}` : item.price;

            return (
              <article key={item.id} className="menu-card" data-category={item.category}>
                <div className="menu-card-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.id === "idli" ? "Freshly steamed South Indian idli" : `${item.nameMalayalam} - ${item.englishSubtitle}`}
                    className="menu-card-image"
                    width={600}
                    height={400}
                  />
                  {item.badge && <span className="menu-card-badge">{item.badge}</span>}
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.nameMalayalam}</h3>
                    {hasPrice && <span className="menu-card-price">{displayPrice}</span>}
                  </div>
                  <div className="menu-card-subtitles">
                    <span className="menu-card-tamil">{item.nameTamil}</span>
                    <span className="menu-card-bullet">•</span>
                    <span className="menu-card-en">{item.englishSubtitle}</span>
                  </div>
                  <p className="menu-card-desc">{item.descriptionMalayalam}</p>
                  <div className="menu-card-footer">
                    <span className="menu-card-tag">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      തനത് നാടൻ രുചി
                    </span>
                    <span
                      className="tamil-text"
                      style={{
                        color: "var(--color-muted-gold)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      சுடச்சுட
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
