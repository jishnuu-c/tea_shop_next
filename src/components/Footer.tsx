import Image from "next/image";
import { shopConfig } from "@/data/shopConfig";

export default function Footer() {
  const currentYear = 2026;

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

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <Image
                src="/images/mani-vada-logo.png"
                alt="മണിവട ലോഗോ"
                className="footer-logo-img"
                width={76}
                height={76}
              />
              <div>
                <div className="footer-brand-title">മണിവട</div>
                <div className="footer-brand-sub">மணி வடை</div>
              </div>
            </div>

            {/* Malayalam Tagline */}
            <div className="footer-tagline">ചൂട് ചൂട് വടേ</div>

            <p className="footer-about-text">
              നല്ല ചായയും തമിഴ് ശൈലിയിലുള്ള രുചികരമായ വടയും. പരമ്പരാഗത തനിമയും സ്നേഹവും നിറഞ്ഞ സൗത്ത് ഇന്ത്യൻ ചായക്കട അനുഭവം.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">പെട്ടെന്നുള്ള വഴികൾ</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-link">
                  ഹോം (Home)
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-link">
                  ഞങ്ങളുടെ മെനു
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  ഞങ്ങളെക്കുറിച്ച്
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer-link">
                  കാഴ്ചകൾ
                </a>
              </li>
              <li>
                <a href="#visit" className="footer-link">
                  ഞങ്ങളെ കണ്ടെത്താം
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">വിവരങ്ങൾ</h4>
            <ul className="footer-links-list" id="footerContactDetails">
              {hasHours && (
                <li className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    {shopConfig.openingHours.daysMalayalam}: {shopConfig.openingHours.timingMalayalam}
                  </span>
                </li>
              )}
              {hasAddress && (
                <li className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{fullAddress}</span>
                </li>
              )}
              {hasPhone && (
                <li className="footer-link">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${shopConfig.phone}`}>{shopConfig.phone}</a>
                </li>
              )}
            </ul>
            <div style={{ marginTop: "20px" }}>
              <a
                href="#visit"
                className="btn btn-secondary btn-sm"
                style={{
                  color: "var(--color-warm-cream)",
                  borderColor: "var(--color-muted-gold)",
                  background: "transparent",
                }}
              >
                കടയിലേക്ക് സ്വാഗതം
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © <span id="copyrightYear">{currentYear}</span> മണിവട (Mani Vada). സർവ അവകാശങ്ങളും നിക്ഷിപ്തം.
          </div>
          <div className="footer-credits">Authentic South Indian Tea &amp; Vada Kadai</div>
        </div>
      </div>
    </footer>
  );
}
