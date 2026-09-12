import React, { useState } from "react";
import "../styles/Login.css";

export default function Login({ onLogin }) {
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const id = customerId.trim().toLowerCase();
    const pass = password.trim();

    // Validation
    if (!id || !pass) {
      setError("Please enter your Customer ID and password.");
      return;
    }

    // Frontend demo login
    if (id === "rahul") {
      onLogin("rahul");
      return;
    }

    if (id === "priya") {
      onLogin("priya");
      return;
    }

    if (id === "meena") {
      onLogin("meena");
      return;
    }

    setError("Invalid Customer ID. Try Rahul, Priya, or Meena.");
  };

  return (
    <main className="login-page">

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <div className="login-container">

        {/* LEFT SIDE */}
        <section className="login-intro">

          <div className="brand-mark">
            <span>₹</span>
          </div>

          <p className="eyebrow">
            BHARAT FINANCIAL COMPANION
          </p>

          <h1>
            Your money.
            <br />
            <span>Your future.</span>
          </h1>

          <p className="intro-text">
            A smarter way to understand your finances,
            discover your goals and take the next best
            financial action.
          </p>

          <div className="feature-list">

            <div className="feature-item">
              <div className="feature-icon">✦</div>
              <div>
                <h3>Personalized</h3>
                <p>Insights built around you</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Explainable</h3>
                <p>Simple financial recommendations</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">→</div>
              <div>
                <h3>Actionable</h3>
                <p>Know what to do next</p>
              </div>
            </div>

          </div>
        </section>


        {/* RIGHT SIDE */}
        <section className="login-card">

          <div className="card-header">

            <p className="card-eyebrow">
              WELCOME TO YOUR FINANCIAL COMPANION
            </p>

            <h2>Welcome back.</h2>

            <p className="card-description">
              Sign in to continue to your personalized
              financial journey.
            </p>

          </div>


          <form onSubmit={handleLogin} className="login-form">

            {/* Customer ID */}
            <div className="input-group">

              <label htmlFor="customerId">
                Customer ID
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ◉
                </span>

                <input
                  id="customerId"
                  type="text"
                  placeholder="Enter your Customer ID"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                  autoComplete="username"
                />

              </div>

            </div>


            {/* Password */}
            <div className="input-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ●
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* OPTIONS */}
            <div className="form-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  setError(
                    "Password recovery is available in the demo."
                  )
                }
              >
                Forgot password?
              </button>

            </div>


            {/* ERROR */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}


            {/* LOGIN */}
            <button
              type="submit"
              className="login-button"
            >
              <span>Sign in to Dashboard</span>
              <span className="button-arrow">→</span>
            </button>

          </form>


          <div className="security-note">
            <span className="security-icon">✓</span>
            <span>
              Your information is protected and secure
            </span>
          </div>

          <div className="card-footer">
            HACKOUT'26 • FRONTEND PROTOTYPE
          </div>

        </section>

      </div>

    </main>
  );
}