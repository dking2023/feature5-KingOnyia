import NavBar from "../layout/NavBar";
import { categories } from "../../data/siteData";

// Protected categories page.
// Categories are displayed as darker cards to stay visually consistent with Feature 4.
function CategoriesPage() {
  return (
    <main className="page-shell">
      <NavBar />

      <section className="hero-card">
        <p className="eyebrow">Explore Categories</p>
        <h1>Different Paths to Black Excellence</h1>
        <p>
          Users can explore leadership, artistry, and innovation through these major
          categories.
        </p>
      </section>

      <section className="section">
        <div className="content-grid">
          {categories.map((category) => (
            <article className="info-card" key={category.id}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CategoriesPage;
