import './App.css'

function Feature({ title, subtitle, details }: { title: string; subtitle: string; details: string }) {
  return (
    <section className="feature-card" aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}>
      <h3 className="feature-title" id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h3>
      <p className="feature-subtitle">{subtitle}</p>
      <p className="feature-details">{details}</p>
    </section>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-mark">StyleJarvis</div>
        <nav className="primary-nav" aria-label="Primary">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#how-it-works">How it works</a>
          <a className="nav-link" href="#get-started">Get started</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="get-started">
          <div className="hero-content">
            <h1 className="hero-title">Your personal AI stylist</h1>
            <p className="hero-tagline">Import your wardrobe, get daily outfits, and shop smarter — all in one beautiful place.</p>
            <div className="hero-cta">
              <button className="cta-primary" type="button">Create Virtual Closet</button>
              <button className="cta-secondary" type="button">Try Daily Styling</button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="hero-poster">
              <div className="poster-shape" />
              <div className="poster-text">GRAND<br/>OPENING</div>
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
        <p className="footer-note">Designed for confidence and sustainability.</p>
      </footer>
    </div>
  )
}
