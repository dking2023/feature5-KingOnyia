import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

// Group requirement: authenticated users should not be able to visit login/register pages.
function PublicOnlyRoute() {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute;
