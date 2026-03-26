import NavBar from "../layout/NavBar";
import { stories } from "../../data/siteData";

// Protected stories page.
// This page keeps the same content structure but adopts the darker panel look.
function StoriesPage() {
  return (
    <main className="page-shell">
      <NavBar />

      <section className="hero-card">
        <p className="eyebrow">Project Stories</p>
        <h1>Context Behind the Project</h1>
        <p>
          These stories explain the purpose of the app and why preserving Black
          excellence matters.
        </p>
      </section>

      <section className="section">
        <div className="content-grid">
          {stories.map((story) => (
            <article className="info-card" key={story.id}>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default StoriesPage;
