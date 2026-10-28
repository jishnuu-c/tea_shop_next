import Image from "next/image";
import { shopConfig } from "@/data/shopConfig";

export default function VisitSection() {
  const hasHours = Boolean(
    shopConfig.openingHours &&
      shopConfig.openingHours.isConfigured &&
      shopConfig.openingHours.timingMalayalam
  );

  const hasAddress = Boolean(
    shopConfig.address &&
      (shopConfig.address.line1 || shopConfig.address.city)
  );

  const fullAddress = hasAddress
    ? [
        shopConfig.address.line1,
        shopConfig.address.line2,
        shopConfig.address.city,
        shopConfig.address.state,
        shopConfig.address.pincode,
      ]
        .filter(Boolean)
        .join(", ")
    : "";

  const hasPhone = Boolean(shopConfig.phone && shopConfig.phone.trim() !== "");
  const hasWhatsapp = Boolean(shopConfig.whatsapp && shopConfig.whatsapp.trim() !== "");
  const hasMaps = Boolean(shopConfig.googleMapsUrl && shopConfig.googleMapsUrl.trim() !== "");

  return (
    <section className="section section-white" id="visit">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">കട സന്ദർശിക്കൂ</span>
          <h2 className="section-title">ഒരു ചായ കുടിക്കാൻ വരൂ!</h2>
          <p className="section-subtitle">
            ഞങ്ങളുടെ കടയിലേക്ക് നേരിട്ടെത്തി ചൂടുള്ള ചായയും മൊരിഞ്ഞ പലഹാരങ്ങളും ആസ്വദിക്കൂ.
          </p>
          <div className="brand-ornament">
            <span className="brand-ornament-line"></span>
            <span className="brand-ornament-leaf">🌿</span>
            <span className="brand-ornament-line reverse"></span>
          </div>
        </div>

        <div className="visit-wrapper">
          {/* Contact Details Left Panel */}
          <div className="visit-info-panel">
            <div>
              <h3 className="visit-heading">മണിവടയിലേക്ക് സ്വാഗതം</h3>
              <p className="visit-sub">
                ഓരോ ദിവസവും പുതുമയോടെ തയാറാക്കുന്ന ചായയും വടകളും നിങ്ങളെ കാത്തിരിക്കുന്നു.
              </p>

              {/* Details List */}
              <div className="visit-details-list" id="visitDetailsList">
                {hasHours && (
                  <div className="visit-detail-item">
                    <div className="visit-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="visit-detail-content">
                      <span className="visit-detail-label">പ്രവർത്തന സമയം</span>
                      <span className="visit-detail-value">
                        {shopConfig.openingHours.timingMalayalam}
                      </span>
                      <span className="visit-detail-sub">
                        {shopConfig.openingHours.daysMalayalam} ({shopConfig.openingHours.timingEnglish})
                      </span>
                    </div>
                  </div>
                )}

                {hasAddress && (
                  <div className="visit-detail-item">
                    <div className="visit-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="visit-detail-content">
                      <span className="visit-detail-label">ഞങ്ങളുടെ മേൽവിലാസം</span>
                      <span className="visit-detail-value">{fullAddress}</span>
                      {shopConfig.address.landmark && (
                        <span className="visit-detail-sub">
                          ലാൻഡ്‌മാർക്ക്: {shopConfig.address.landmark}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {hasPhone && (
                  <div className="visit-detail-item">
                    <div className="visit-detail-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="visit-detail-content">
                      <span className="visit-detail-label">ഫോൺ നമ്പർ</span>
                      <a
                        href={`tel:${shopConfig.phone}`}
                        className="visit-detail-value"
                        style={{ color: "var(--color-primary-green)" }}
                      >
                        {shopConfig.phone}
                      </a>
                      <span className="visit-detail-sub">ഓർഡറുകൾക്കും വിവരങ്ങൾക്കും വിളിക്കാം</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="visit-actions-bar" id="visitActionsBar">
              {hasPhone && (
                <a href={`tel:${shopConfig.phone}`} className="btn btn-secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  വിളിക്കുക
                </a>
              )}

              {hasWhatsapp && (
                <a
                  href={`https://wa.me/${shopConfig.whatsapp}?text=${encodeURIComponent(
                    "ഹലോ മണിവട, എനിക്ക് നിങ്ങളുടെ ചായയും പലഹാരങ്ങളും ഓർഡർ ചെയ്യണം."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.906.531 3.703 1.516 5.25L2 22l4.875-1.5c1.516.906 3.266 1.406 5.156 1.406 5.531 0 10.031-4.5 10.031-10.031 0-5.531-4.5-9.875-10.031-9.875zm5.859 14.156c-.25.703-1.453 1.344-2.031 1.422-.531.078-1.219.109-3.953-1.016-3.328-1.375-5.469-4.781-5.641-5-.156-.219-1.359-1.813-1.359-3.453s.859-2.453 1.172-2.781c.297-.328.656-.406.875-.406.219 0 .438 0 .625.016.203.016.484-.078.75.563.281.688.953 2.344 1.031 2.516.094.172.156.391.031.625-.109.25-.172.391-.344.609-.172.203-.359.453-.516.609-.172.172-.344.359-.156.703.203.328.891 1.484 1.922 2.406 1.328 1.188 2.453 1.547 2.813 1.719.344.172.563.141.766-.094.219-.25.922-1.078 1.172-1.453.25-.375.484-.313.828-.188.344.125 2.188 1.031 2.563 1.219.375.188.625.281.719.438.094.172.094.969-.156 1.672z" />
                  </svg>
                  WhatsApp ചാറ്റ്
                </a>
              )}

              {hasMaps ? (
                <a
                  href={shopConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  കടയിലേക്കുള്ള വഴി
                </a>
              ) : (
                <a href="#menu" className="btn btn-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                  ഞങ്ങളുടെ മെനു കാണാം
                </a>
              )}
            </div>
          </div>

          {/* Visual Media Right Panel */}
          <div className="visit-media-panel">
            <Image
              src="/images/hero-vada-tea.jpg"
              alt="മണിവട ചായയും മൊരിഞ്ഞ വടയും ചട്നി, ചമ്മന്തി, സാമ്പാറും"
              className="visit-media-img"
              width={600}
              height={420}
            />
            <div className="visit-media-overlay">
              <div className="visit-stamp">
                <span>♨</span>
                <span>തത്സമയം തയ്യാറാക്കുന്നു</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-malayalam)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                ചൂട് ചൂട് വടേ
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-gold-light)",
                  marginTop: "4px",
                }}
              >
                ഓരോ ചായസമയത്തിനും ഒരു നാടൻ സംതൃപ്തി
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
