export default function WhyVisitSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">പ്രത്യേകതകൾ</span>
          <h2 className="section-title">എന്തുകൊണ്ട് മണിവട?</h2>
          <p className="section-subtitle">
            ഓരോ തവണ വരുമ്പോഴും ലഭിക്കുന്ന തനത് ചായക്കട അനുഭവവും നാടൻ സ്വാദും.
          </p>
          <div className="brand-ornament">
            <span className="brand-ornament-line"></span>
            <span className="brand-ornament-leaf">🌿</span>
            <span className="brand-ornament-line reverse"></span>
          </div>
        </div>

        <div className="why-grid">
          {/* Feature 1: ചൂടുള്ള ചായ */}
          <article className="why-card">
            <div className="why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3 className="why-title">ചൂടുള്ള ചായ</h3>
            <p className="why-desc">
              നല്ല പാൽ പതഞ്ഞടിച്ച് സുഗന്ധവ്യഞ്ജനങ്ങളുടെ മാന്ത്രികതയോടെ തിളപ്പിച്ചൊഴിക്കുന്ന തമിഴ്-കേരള ശൈലിയിലുള്ള സ്പെഷ്യൽ ചായ.
            </p>
          </article>

          {/* Feature 2: രുചികരമായ വട */}
          <article className="why-card">
            <div className="why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
              </svg>
            </div>
            <h3 className="why-title">രുചികരമായ വട</h3>
            <p className="why-desc">
              പുറമെ നല്ല മൊരിവും ഉള്ളിൽ മൃദുത്വവുമുള്ള ഉഴുന്നുവടയും, നല്ല കരുകരുപ്പുള്ള പരിപ്പുവടയും ചൂടോടെ പഴംപൊരിയും.
            </p>
          </article>

          {/* Feature 3: സൗഹൃദപരമായ നാടൻ അന്തരീക്ഷം */}
          <article className="why-card">
            <div className="why-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="why-title">സൗഹൃദപരമായ നാടൻ അന്തരീക്ഷം</h3>
            <p className="why-desc">
              ചായ കുടിക്കാനും സൗഹൃദ സംഭാഷണങ്ങളിൽ ഏർപ്പെടാനും തികച്ചും അനുയോജ്യമായ ഊഷ്മളവും സമാധാനപരവുമായ അന്തരീക്ഷം.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
