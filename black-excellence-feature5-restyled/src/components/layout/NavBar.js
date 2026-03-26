import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../../services/authService";

// Shared navigation for all protected pages.
// This keeps the authenticated experience consistent across the app.
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = getCurrentUser();
  const firstName = currentUser?.get("firstName") || "Guest";

  async function handleLogout() {
    await logoutUser();
    navigate("/auth/login", { replace: true });
  }

  function navClass(path) {
    return location.pathname === path ? "nav-link active-link" : "nav-link";
  }

  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">Black Excellence: A Living Legacy</p>
        <h2 className="site-title">Welcome, {firstName}</h2>
        <p className="muted-text">
          Explore leaders, categories, and stories through a protected experience.
        </p>
      </div>

      <nav className="nav-row">
        <Link className={navClass("/dashboard")} to="/dashboard">
          Dashboard
        </Link>
        <Link className={navClass("/people")} to="/people">
          People
        </Link>
        <Link className={navClass("/categories")} to="/categories">
          Categories
        </Link>
        <Link className={navClass("/stories")} to="/stories">
          Stories
        </Link>
        <button className="secondary-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
