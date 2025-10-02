import './App.css'

const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2F233794be9a494c9b94dca09bc8bcba1f%2Fa617e92294834adcb78fb3430473511e?format=webp&width=1200"

const PRODUCT_IMAGES = [
  "https://cdn.builder.io/api/v1/image/assets%2F233794be9a494c9b94dca09bc8bcba1f%2Fb410c7b8bc04461e8fdee8aec5a8aa41?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F233794be9a494c9b94dca09bc8bcba1f%2F651393529ba74e68bbfe8a8acc96933a?format=webp&width=800",
  "https://cdn.builder.io/api/v1/image/assets%2F233794be9a494c9b94dca09bc8bcba1f%2F2dfa31133791434a8ca1b37fce598703?format=webp&width=800",
]

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
          <a className="nav-link" href="#features">Features</a>
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

          <div className="hero-visual" aria-hidden>
            <div className="hero-poster poster-with-image">
              <img className="hero-poster-img" src={HERO_IMG} alt="Editorial fashion poster" />
              <div className="poster-text poster-large">Style
                <span className="poster-accent">Jarvis</span>
              </div>
              <div className="poster-overlay" />
            </div>
          </div>
        </section>

        <section className="features-grid" id="features">
          <div className="polaroid-wrap" aria-hidden>
            <div className="polaroid abstract">
              <div className="abstract-frame" />
              <div className="polaroid-tape" />
            </div>
          </div>

          <Feature
            title="The Virtual Closet Integrator"
            subtitle="The digital twin of your wardrobe"
            details="Upload photos of clothing, shoes, and accessories. Image recognition tags color, pattern, material, neckline, and more so you can see everything you own in one place."
          />
          <Feature
            title="Personalized Daily Styling"
            subtitle="Context-aware outfit suggestions"
            details="Each morning, StyleJarvis checks your calendar, local weather, and style rating to recommend 3–5 complete looks from your closet."
          />
          <Feature
            title="Smart Shopping & Gap Analysis"
            subtitle="Buy only what unlocks more outfits"
            details="We analyze usage patterns and detect gaps (e.g., plenty of shirts, missing versatile trousers) to suggest high-impact items filtered by your budget."
          />
          <Feature
            title="Color Theory & Body Type Optimizer"
            subtitle="Always flattering, by design"
            details="Using your profile, StyleJarvis prioritizes colors that complement your skin tone and recommends silhouettes that suit your body shape."
          />
          <Feature
            title="Outfit Planner & Event Prep"
            subtitle="Plan looks for dates, trips, and events"
            details="Enter destinations and dates. We pre-pack and plan outfits for the full event, checking forecasted weather and dress codes."
          />
          <Feature
            title="Style Evolution Feedback Loop"
            subtitle="It learns your taste"
            details="Rate outfits (Love, Like, Not for me). Real‑time feedback sharpens future suggestions so the app improves the longer you use it."
          />
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
            <a className="nav-link" href="#features">Features</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
