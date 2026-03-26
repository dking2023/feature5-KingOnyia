import NavBar from "./NavBar";
import { featuredPeople, categories, stories } from "../../data/siteData";

// Protected dashboard page.
// This mirrors the darker visual style from Feature 4 while keeping auth in place.
function DashboardPage() {
  return (
    <main className="page-shell">
      <NavBar />

      <section className="hero-card">
        <p className="eyebrow">Protected Home</p>
        <h1 className="hero-title">Black Excellence: A Living Legacy</h1>
        <p>
          This protected dashboard celebrates the resilience, brilliance, and global
          impact of Black leaders across history.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#featured-overview">
            Explore Featured Leaders
          </a>
          <a className="ghost-button" href="#why-this-matters">
            Why This Matters
          </a>
        </div>
      </section>

      <section className="section" id="why-this-matters">
        <h2 className="section-heading">Why This Matters</h2>

        <div className="callout-grid">
          <article className="callout">
            <h3>Underrepresented Contributions</h3>
            <p>
              Black contributions are often underrepresented in mainstream narratives
              and education.
            </p>
          </article>

          <article className="callout">
            <h3>Pioneers</h3>
            <p>
              Many of these figures were firsts, breaking barriers and creating new
              paths for others to follow.
            </p>
          </article>

          <article className="callout">
            <h3>Legacy + Impact</h3>
            <p>
              This project highlights leadership and lasting impact that still shapes
              the world today.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="featured-overview">
        <h2 className="section-heading">Explore the Protected Project</h2>

        <div className="stats-grid">
          <article className="info-card">
            <p className="eyebrow">Featured People</p>
            <h3>{featuredPeople.length}</h3>
            <p>Profiles that highlight excellence across leadership, literature, and STEM.</p>
          </article>

          <article className="info-card">
            <p className="eyebrow">Categories</p>
            <h3>{categories.length}</h3>
            <p>Themed ways to explore Black impact across multiple fields.</p>
          </article>

          <article className="info-card">
            <p className="eyebrow">Stories</p>
            <h3>{stories.length}</h3>
            <p>Narratives that explain why this project matters and how users can learn from it.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
