import Image from "next/image";

export default function StorySection() {
  return (
    <section className="section section-cream" id="about">
      <div className="container story-grid">
        {/* Story Image Frame */}
        <div className="story-image-frame">
          <Image
            src="/images/gallery-tea-stall.jpg"
            alt="മണിവട നാടൻ ചായക്കട അന്തരീക്ഷം"
            className="story-image"
            width={600}
            height={480}
          />
          <div className="story-quote-card">
            <div className="story-quote-text">
              “ഒരു ഗ്ലാസ് ചൂട് ചായയും നല്ല മൊരിഞ്ഞ വടയും നൽകുന്ന ആശ്വാസം മറ്റൊന്നിനും നൽകാനാവില്ല.”
            </div>
          </div>
        </div>

        {/* Editorial Story Content */}
        <div className="story-content">
          <span className="section-eyebrow" style={{ alignSelf: "flex-start" }}>
            ഞങ്ങളുടെ കഥ
          </span>
          <h2 className="story-title">മണിവട — നാടൻ രുചിയുടെ സ്വന്തം ഇടം</h2>

          <div className="story-paragraphs">
            <p>
              ദക്ഷിണേന്ത്യൻ ചായക്കടകളുടെ പാരമ്പര്യത്തിൽ നിന്നും പ്രചോദനം ഉൾക്കൊണ്ടാണ് മണിവട ആരംഭിക്കുന്നത്. നല്ല ചൂടുള്ള ചായയും, തമിഴ് ശൈലിയിലുള്ള തനതായ രുചിക്കൂട്ടുകളോടെ വറുത്തെടുത്ത മൊരിഞ്ഞ വടകളും പലഹാരങ്ങളും ആളുകളിലേക്ക് എത്തിക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.
            </p>
            <p>
              കേരളത്തിന്റെ നാടൻ ഊഷ്മളതയും തമിഴ്നാടൻ ചായക്കടകളുടെ സ്പെഷ്യൽ രുചിയും സമന്വയിക്കുന്ന ഇടമാണ് മണിവട. കടലപ്പരിപ്പും ഉള്ളിയും മൂത്ത പരിപ്പുവട മുതൽ, പഞ്ഞിപോലെ മൃദുവായ ഉഴുന്നുവടയും മധുരമൂറുന്ന പഴംപൊരിയും വരെ ഓരോ ദിവസവും പുതുമയോടെ തയാറാക്കുന്നു.
            </p>
            <p>
              നിങ്ങളുടെ ചായസമയം ഏറ്റവും സന്തോഷകരവും തൃപ്തികരവുമാക്കാൻ സ്നേഹത്തോടെ മണിവടയിലേക്ക് സ്വാഗതം ചെയ്യുന്നു.
            </p>
          </div>

          <div className="story-highlight-box">
            <div className="story-highlight-icon">🍵</div>
            <div>
              <div className="story-highlight-title">
                സ്വാഭാവികമായ ചേരുവകൾ & തനത് പാചകരീതി
              </div>
              <div className="story-highlight-desc">
                പരമ്പരാഗത ശൈലിയിൽ തയ്യാറാക്കുന്ന ചായയും പലഹാരങ്ങളും, മായമില്ലാത്ത ശുദ്ധമായ രുചി.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
