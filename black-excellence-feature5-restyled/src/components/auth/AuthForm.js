function AuthForm({
  title,
  formData,
  onChange,
  onSubmit,
  submitText,
  isRegister,
  errorMessage,
  helperText
}) {
  return (
    <div className="auth-card">
      <p className="eyebrow">Protected Authentication</p>
      <h2>{title}</h2>
      <p className="muted-text">{helperText}</p>

      <form onSubmit={onSubmit} className="auth-form">
        {isRegister && (
          <>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={onChange}
              placeholder="Enter your first name"
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={onChange}
              placeholder="Enter your last name"
              required
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Enter your password"
          required
        />

        {errorMessage ? <p className="error-text">{errorMessage}</p> : null}

        <button type="submit" className="primary-button">
          {submitText}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
