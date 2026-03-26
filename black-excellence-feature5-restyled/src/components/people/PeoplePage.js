import NavBar from "../layout/NavBar";
import { featuredPeople } from "../../data/siteData";

// Protected people page.
// This page now feels closer to the Feature 4 card layout and tone.
function PeoplePage() {
  return (
    <main className="page-shell">
      <NavBar />

      <section className="hero-card">
        <p className="eyebrow">Featured Leaders</p>
        <h1>Mount Rushmore Style Highlights</h1>
        <p>
          These profiles introduce a few influential figures whose work reflects Black
          excellence across different generations and disciplines.
        </p>
      </section>

      <section className="section">
        <div className="content-grid">
          {featuredPeople.map((person) => (
            <article className="info-card" key={person.id}>
              <p className="eyebrow">{person.field}</p>
              <h3>{person.name}</h3>
              <p>{person.summary}</p>
              <p className="muted-text">{person.achievement}</p>

              <div className="footer-note">
                <h4>Legacy</h4>
                <p>{person.legacy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PeoplePage;
