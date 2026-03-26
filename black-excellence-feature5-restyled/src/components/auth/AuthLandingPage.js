import { Link } from "react-router-dom";

function AuthLandingPage() {
  return (
    <main className="page-shell auth-shell">
      <section className="hero-card auth-card">
        <p className="eyebrow">Black Excellence: A Living Legacy</p>
        <h1 className="hero-title">Celebrate stories, leaders, and achievements.</h1>
        <p>
          Create an account or log in to access the protected Black Excellence
          experience and continue exploring the project.
        </p>

        <div className="hero-actions">
          <Link className="primary-button" to="/auth/register">
            Register
          </Link>
          <Link className="ghost-button" to="/auth/login">
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AuthLandingPage;
