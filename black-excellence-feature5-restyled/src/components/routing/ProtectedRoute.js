import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

// ------------------------------
// Student A - ProtectedRoute component
// ------------------------------
// This component blocks access to protected pages when there is no logged-in user.
// It also remembers the route the user wanted so login can send them back there.
function ProtectedRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
