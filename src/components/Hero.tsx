import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">തനത് സൗത്ത് ഇന്ത്യൻ ചായക്കട അനുഭവം</span>
          </div>

          <h1 className="hero-heading">ഒരു ചായ… ഒരു വട…</h1>

          <div className="hero-subheading">
            <span>ചൂട് ചൂട് വടേ!</span>
            <span className="hero-subheading-tag">சுடச்சுட வடை</span>
          </div>

          <p className="hero-description">
            നല്ല ചായയും തമിഴ് ശൈലിയിലുള്ള രുചികരമായ വടയും. ഓരോ ദിവസവും നിങ്ങളുടെ ചായസമയത്തിന് ഒരു നാടൻ സന്തോഷം.
          </p>

          {/* Buttons */}
          <div className="hero-cta-group">
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
            <a href="#visit" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              കടയിലേക്കുള്ള വഴി
            </a>
          </div>

          {/* Hero Features Bar */}
          <div className="hero-features-bar">
            <div className="hero-feature-item">
              <span className="hero-feature-icon">✦</span>
              <span>തമിഴ് നാടൻ രുചി</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">✦</span>
              <span>നല്ല ചൂടുള്ള ചായ</span>
            </div>
            <div className="hero-feature-item">
              <span className="hero-feature-icon">✦</span>
              <span>മൊരിഞ്ഞ പലഹാരങ്ങൾ</span>
            </div>
          </div>
        </div>

        {/* Right Visual Composition */}
        <div className="hero-visual-wrap">
          <div className="hero-card-stack">
            {/* Main Food Photography Frame */}
            <div className="hero-main-photo-frame">
              <Image
                src="/images/hero-food.jpg"
                alt="തമിഴ് സ്റ്റൈൽ ചൂടുള്ള ചായയും മൊരിഞ്ഞ വടയും"
                className="hero-main-photo"
                width={600}
                height={440}
                priority
              />
            </div>

            {/* Prominent Floating Logo Emblem */}
            <div className="hero-floating-emblem" title="മണിവട ഔദ്യോഗിക മുദ്ര">
              <Image
                src="/images/mani-vada-logo.png"
                alt="മണിവട ലോഗോ - ചൂട് ചൂട് വടേ"
                width={160}
                height={160}
                priority
              />
            </div>

            {/* Floating Snack Highlight Pill */}
            <div className="hero-floating-pill">
              <div className="hero-pill-icon">♨</div>
              <div>
                <div className="hero-pill-text">ചൂടോടെ വിളമ്പുന്നു</div>
                <div className="hero-pill-sub">Fresh Batch Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
