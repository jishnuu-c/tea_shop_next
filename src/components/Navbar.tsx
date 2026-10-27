"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileOpen(false);
    if (!targetId || targetId === "#") return;
    const element = document.querySelector(targetId);
    if (element) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Brand Logo & Title */}
          <a
            href="#home"
            className="brand-link"
            aria-label="മണിവട ഹോംപേജ്"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <Image
              src="/images/mani-vada-logo.png"
              alt="മണിവട ലോഗോ - ചൂട് ചൂട് വടേ"
              className="brand-logo-img"
              width={62}
              height={62}
              priority
            />
            <div className="brand-text-group">
              <div className="brand-title-row">
                <span className="brand-malayalam-name">മണിവട</span>
                <span className="brand-tamil-badge">மணி வடை</span>
              </div>
              <span className="brand-tagline-mini">ചൂട് ചൂട് വടേ</span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu-wrapper" aria-label="പ്രധാന നാവിഗേഷൻ">
            <ul className="nav-menu">
              <li>
                <a
                  href="#home"
                  className="nav-link active"
                  onClick={(e) => handleLinkClick(e, "#home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, "#menu")}
                >
                  ഞങ്ങളുടെ മെനു
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, "#about")}
                >
                  ഞങ്ങളെക്കുറിച്ച്
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, "#gallery")}
                >
                  കാഴ്ചകൾ
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, "#visit")}
                >
                  ഞങ്ങളെ കണ്ടെത്താം
                </a>
              </li>
            </ul>
          </nav>

          {/* Tasteful Green Button */}
          <div className="nav-actions">
            <a
              href="#visit"
              className="btn btn-primary btn-header-cta"
              onClick={(e) => handleLinkClick(e, "#visit")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              കടയിലേക്ക് വരൂ
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`mobile-toggle ${mobileOpen ? "active" : ""}`}
              id="mobileToggle"
              aria-label="മെനു തുറക്കുക"
              aria-expanded={mobileOpen}
              aria-controls="mobileDrawer"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-overlay ${mobileOpen ? "active" : ""}`}
        id="mobileOverlay"
        onClick={() => setMobileOpen(false)}
      ></div>
      <aside
        className={`mobile-drawer ${mobileOpen ? "active" : ""}`}
        id="mobileDrawer"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "30px" }}>
            <Image
              src="/images/mani-vada-logo.png"
              alt="മണിവട"
              width={52}
              height={52}
              style={{
                borderRadius: "12px",
                objectFit: "contain",
                backgroundColor: "#FAF7EE",
                border: "1px solid rgba(198, 161, 91, 0.35)",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-malayalam)",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--color-deep-forest)",
                }}
              >
                മണിവട
              </div>
              <div
                style={{
                  fontFamily: "var(--font-malayalam)",
                  fontSize: "0.85rem",
                  color: "var(--color-primary-green)",
                }}
              >
                ചൂട് ചൂട് വടേ
              </div>
            </div>
          </div>
          <ul className="mobile-nav-links">
            <li>
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, "#menu")}
              >
                ഞങ്ങളുടെ മെനു
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, "#about")}
              >
                ഞങ്ങളെക്കുറിച്ച്
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, "#gallery")}
              >
                കാഴ്ചകൾ
              </a>
            </li>
            <li>
              <a
                href="#visit"
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, "#visit")}
              >
                ഞങ്ങളെ കണ്ടെത്താം
              </a>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a
            href="#visit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={(e) => handleLinkClick(e, "#visit")}
          >
            കടയിലേക്ക് വരൂ
          </a>
          <div
            style={{
              textAlign: "center",
              fontSize: "0.85rem",
              color: "var(--color-text-light)",
            }}
          >
            തമിഴ് സ്റ്റൈൽ ചായയും ചൂടൻ വടകളും
          </div>
        </div>
      </aside>
    </>
  );
}
