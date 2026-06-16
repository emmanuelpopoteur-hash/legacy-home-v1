import "./water-analysis.css";

export default function WaterAnalysisPage() {
  return (
    <main className="water-page">

      {/* HERO VIDEO */}
      <section className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/videos/water.mp4" type="video/mp4" />
        </video>
      </section>

      {/* HERO */}
      <section className="hero-content">

        <img
          src="/legacy-logo.png"
          alt="Legacy Water USA"
          className="logo"
        />

        <p className="hero-label">
          LEGACY WATER USA
        </p>

        <h1 className="hero-title">
          Discover What's
          <br />
          In Your Water
        </h1>

        <p className="hero-description">
Discover how Florida water may be affecting your family,
appliances, plumbing, skin, and drinking water. Schedule
a complimentary home water evaluation and learn what
treatment options may help improve water quality throughout
your entire home.
        </p>

        <div className="hero-pills">
          <div className="pill">✓ Free Water Evaluation</div>
          <div className="pill">✓ Protect Appliances</div>
          <div className="pill">✓ Better Drinking Water</div>
          <div className="pill">✓ Whole-Home Solutions</div>
        </div>

      </section>

      {/* SECTION 1 */}
      <section className="content-section">

        <p className="section-label">
          WATER CONDITIONS IN FLORIDA
        </p>

        <h2 className="section-title">
          Common Water Problems
          <br />
          In Florida Homes
        </h2>

        <p className="section-text">
          Many Florida families experience hard water buildup,
          chlorine exposure, appliance wear, dry skin,
          mineral staining, sulfur odor, and unpleasant
          tasting water without fully understanding how
          water quality impacts daily life throughout the home.
        </p>

        <div className="issues-grid">

          <div className="issue-card">
            <h3>Hard Water Buildup</h3>
            <p>
              White residue around faucets,
              shower glass, sinks, and fixtures.
            </p>
          </div>

          <div className="issue-card">
            <h3>Dry Skin & Hair</h3>
            <p>
              Mineral-heavy water may affect
              skin comfort and hair quality.
            </p>
          </div>

          <div className="issue-card">
            <h3>Chlorine Exposure</h3>
            <p>
              City water chlorine can impact
              taste, odor, and bathing experience.
            </p>
          </div>

          <div className="issue-card">
            <h3>Appliance Wear</h3>
            <p>
              Mineral buildup may reduce appliance
              efficiency and lifespan.
            </p>
          </div>

        </div>

      </section>

      {/* SECTION 2 */}
      <section className="content-section">

        <p className="section-label">
          WHAT WE EVALUATE
        </p>

        <h2 className="section-title">
          Understanding
          <br />
          Your Home Water
        </h2>

        <p className="section-text">
          Our complimentary evaluation helps homeowners
          better understand overall water conditions throughout the home.
        </p>

        <div className="evaluate-grid">

          <div className="evaluate-card">
            <h3>Hard Water</h3>
            <p>
              Mineral buildup affecting appliances,
              plumbing, and comfort.
            </p>
          </div>

          <div className="evaluate-card">
            <h3>Chlorine</h3>
            <p>
              Common city-water chlorine exposure
              throughout the home.
            </p>
          </div>

          <div className="evaluate-card">
            <h3>Well Water</h3>
            <p>
              Sulfur, iron, sediment,
              and odor concerns.
            </p>
          </div>

          <div className="evaluate-card">
            <h3>Drinking Water</h3>
            <p>
              Better tasting water options
              for everyday use.
            </p>
          </div>

        </div>

      </section>

      {/* FORM */}
      <section className="content-section">

        <p className="section-label">
          SCHEDULE YOUR CONSULTATION
        </p>

        <h2 className="section-title">
          Schedule Your
          <br />
          Free Home
          <br />
          Water Evaluation
        </h2>

        <p className="section-text">
          No-pressure consultation designed to help homeowners
          understand their water quality and available treatment options.
        </p>

        <form className="water-form">

          <input type="text" placeholder="Full Name" />

          <input type="tel" placeholder="Phone Number" />

          <input type="text" placeholder="City" />

          <select>
            <option>Select Water Type</option>
            <option>City Water</option>
            <option>Well Water</option>
          </select>

<button type="submit">
  Check My Water Quality
</button>

<p className="form-note">
  Limited appointments available each week.
</p>

</form>

</section>

</main>
);
}