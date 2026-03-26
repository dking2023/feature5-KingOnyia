import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { registerUser } from "../../services/authService";

// Student B - Register component
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    try {
      await registerUser(formData);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setErrorMessage(error.message || "Unable to register.");
    }
  }

  return (
    <main className="page-shell auth-shell">
      <AuthForm
        title="Register"
        helperText="Create an account to access protected Black Excellence pages."
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText="Create Account"
        isRegister={true}
        errorMessage={errorMessage}
      />

      <p className="muted-text center-text">
        Already registered? <Link className="back-link" to="/auth/login">Login here</Link>
      </p>
    </main>
  );
}

export default RegisterPage;
