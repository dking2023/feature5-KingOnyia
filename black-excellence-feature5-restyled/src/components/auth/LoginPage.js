import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { loginUser } from "../../services/authService";

// Student B - Login component
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/dashboard";

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    try {
      await loginUser(formData);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      setErrorMessage(error.message || "Unable to log in.");
    }
  }

  return (
    <main className="page-shell auth-shell">
      <AuthForm
        title="Login"
        helperText="Sign in to continue exploring the Black Excellence project."
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Login"
        isRegister={false}
        errorMessage={errorMessage}
      />

      <p className="muted-text center-text">
        Need an account? <Link className="back-link" to="/auth/register">Register here</Link>
      </p>
    </main>
  );
}

export default LoginPage;
