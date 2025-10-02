import './App.css'

const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2F233794be9a494c9b94dca09bc8bcba1f%2Fa617e92294834adcb78fb3430473511e?format=webp&width=1200"

const TREND_QUERIES = [
  'street style fashion',
  'runway editorial outfit',
  'outfit flatlay',
  'sustainable fashion outfit',
  'vintage fashion look',
  'minimal neutral outfit',
]

// Use Unsplash source to show trending-style images (no API key).
const PRODUCT_IMAGES = TREND_QUERIES.map(q => `https://source.unsplash.com/800x800/?${encodeURIComponent(q)}`)

function Feature({ title, subtitle, details }: { title: string; subtitle: string; details: string }) {
  return (
    <section className="feature-card" aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
      <h3 className="feature-title" id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h3>
      <p className="feature-subtitle">{subtitle}</p>
      <p className="feature-details">{details}</p>
    </section>
  )
}

function ProductCard({ product }: { product: { id: string; title: string; price: string; image: string } }) {
  return (
    <article className="product-card" aria-labelledby={"p-" + product.id}>
      <div className="product-media">
        <img className="product-image" src={product.image} alt={product.title} />
        <div className="trend-badge">🔥 Trending</div>
      </div>
      <div className="product-meta">
        <h4 className="product-title" id={"p-" + product.id}>{product.title}</h4>
        <div className="product-row">
          <div className="product-price">{product.price}</div>
          <button className="product-btn" aria-label={`Add ${product.title} to closet`}>Save</button>
        </div>
      </div>
    </article>
  )
}

const SAMPLE_PRODUCTS = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 1),
  title: ["Silk Slip", "Tailored Jumpsuit", "Draped Shirt", "Satin Midi", "Cropped Blazer", "Wide-leg Trouser"][i % 6],
  price: ["$149", "$229", "$129", "$179", "$199", "$159"][i % 6],
  image: PRODUCT_IMAGES[i % PRODUCT_IMAGES.length],
}))

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">StyleJarvis</div>
        <nav className="primary-nav" aria-label="Primary">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#collection">New Collection</a>
          <a className="nav-link" href="#how-it-works">How it works</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="get-started">
          <div className="hero-content">
            <h1 className="hero-title">Elevated. Everyday.</h1>
            <p className="hero-tagline">Design-led wardrobe curation and AI styling — simplified. Import your pieces, plan outfits, and discover high-impact items tailored to you.</p>
            <div className="hero-cta">
              <button className="cta-primary" type="button">Create Virtual Closet</button>
              <button className="cta-outline" type="button">Explore Collection</button>
            </div>
          </div>

        </section>

        <section className="about-section" id="about">
          <div className="container">
            <h2 className="section-heading">About StyleJarvis</h2>
            <p className="section-lead">We help you look fire every day — low effort, max impact. Meet your wardrobe's new BFF.</p>

            <div className="genz-grid">
              <article className="genz-card">
                <div className="genz-emoji">📸</div>
                <h3 className="genz-title">Virtual Closet — IRL ➜ Digital</h3>
                <p className="genz-desc">Snap fits or upload pics. Auto‑tagging (color, fabric, vibe). See your whole wardrobe in one swipe — never double‑buy again.</p>
              </article>

              <article className="genz-card">
                <div className="genz-emoji">✨</div>
                <h3 className="genz-title">Daily Fits, Curated</h3>
                <p className="genz-desc">Every AM we check your calendar + weather and drop 3–5 outfit combos using only your stuff. Fast, cute, and appropriate.</p>
              </article>

              <article className="genz-card">
                <div className="genz-emoji">🛍️</div>
                <h3 className="genz-title">Smart Shopping — No FOMO</h3>
                <p className="genz-desc">We analyze gaps and suggest 1–3 pieces that unlock the most fits — filtered by vibe and budget. Buy less, wear more.</p>
              </article>

              <article className="genz-card">
                <div className="genz-emoji">🎨</div>
                <h3 className="genz-title">Color & Fit, Optimized</h3>
                <p className="genz-desc">We match colors that pop on you and silhouettes that flex your features. Science + style = glow up.</p>
              </article>

              <article className="genz-card">
                <div className="genz-emoji">🧳</div>
                <h3 className="genz-title">Trip & Event Planner</h3>
                <p className="genz-desc">Input dates/destinations, and we pre‑pack outfit plans that match weather and dress code. Travel light, slay heavier.</p>
              </article>

              <article className="genz-card">
                <div className="genz-emoji">💬</div>
                <h3 className="genz-title">Feedback That Actually Learns</h3>
                <p className="genz-desc">Love it / Like it / Nah — rate fits and the AI levels up. The more you use it, the more it vibes with you.</p>
              </article>
            </div>

          </div>
        </section>

        <section className="about-features-section" id="about">
          <div className="container">
            <h2 className="section-heading">About • Features</h2>
            <p className="section-lead">We help you look fire every day — low effort, max impact. Meet your wardrobe's new BFF. Below are the core ways StyleJarvis helps you glow up.</p>

            <div className="about-features-grid">
              <div className="about-left">
                <div className="genz-grid merged">
                  <article className="genz-card">
                    <div className="genz-emoji">📸</div>
                    <div>
                      <h3 className="genz-title">Virtual Closet — IRL ➜ Digital</h3>
                      <p className="genz-desc">Snap fits or upload pics. Auto‑tagging (color, fabric, vibe). See your whole wardrobe in one swipe — never double‑buy again.</p>
                    </div>
                  </article>

                  <article className="genz-card">
                    <div className="genz-emoji">✨</div>
                    <div>
                      <h3 className="genz-title">Daily Fits, Curated</h3>
                      <p className="genz-desc">Every AM we check your calendar + weather and drop 3–5 outfit combos using only your stuff. Fast, cute, and appropriate.</p>
                    </div>
                  </article>

                  <article className="genz-card">
                    <div className="genz-emoji">🛍️</div>
                    <div>
                      <h3 className="genz-title">Smart Shopping — No FOMO</h3>
                      <p className="genz-desc">We analyze gaps and suggest 1–3 pieces that unlock the most fits — filtered by vibe and budget. Buy less, wear more.</p>
                    </div>
                  </article>

                  <article className="genz-card">
                    <div className="genz-emoji">🎨</div>
                    <div>
                      <h3 className="genz-title">Color & Fit, Optimized</h3>
                      <p className="genz-desc">We match colors that pop on you and silhouettes that flex your features. Science + style = glow up.</p>
                    </div>
                  </article>

                  <article className="genz-card">
                    <div className="genz-emoji">🧳</div>
                    <div>
                      <h3 className="genz-title">Trip & Event Planner</h3>
                      <p className="genz-desc">Input dates/destinations, and we pre‑pack outfit plans that match weather and dress code. Travel light, slay heavier.</p>
                    </div>
                  </article>

                  <article className="genz-card">
                    <div className="genz-emoji">💬</div>
                    <div>
                      <h3 className="genz-title">Feedback That Actually Learns</h3>
                      <p className="genz-desc">Love it / Like it / Nah — rate fits and the AI levels up. The more you use it, the more it vibes with you.</p>
                    </div>
                  </article>
                </div>
              </div>

              <aside className="about-right" aria-hidden>
                <div className="abstract-mood">
                  <div className="tile tile-large" />
                  <div className="tile tile-medium" />
                  <div className="tile tile-small" />
                  <div className="tile tile-accent" />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="products-section" id="collection">
          <div className="container">
            <h2 className="section-heading">New Collection</h2>
            <p className="section-lead">A selection of timeless pieces curated to work together — elevated neutrals and considered silhouettes.</p>

            <div className="product-grid" role="list">
              {SAMPLE_PRODUCTS.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <h2 className="section-title">How it works</h2>
          <ol className="steps-list">
            <li className="step-item"><span className="step-badge">1</span> Import your wardrobe by snapping photos or uploading images.</li>
            <li className="step-item"><span className="step-badge">2</span> Set preferences: body type, color palette, budget, and style goals.</li>
            <li className="step-item"><span className="step-badge">3</span> Get daily outfits, plan events, and shop only high‑leverage pieces.</li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-mark">StyleJarvis</div>
            <p className="footer-note">Design-led wardrobe curation for confident dressing.</p>
          </div>
          <div className="footer-actions">
            <a className="nav-link" href="#get-started">Get started</a>
            <a className="nav-link" href="#about">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
