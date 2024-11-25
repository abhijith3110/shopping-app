import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userContext } from "../../layout/Contexts/userContext"
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const { fetchUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState({});


  const handleValidation = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    }

    if (!password.trim()) {
      errors.password = "Password is required.";
    }

    setValidationError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!handleValidation()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed! Check your credentials.");
      }

      const data = await response.json();
      Cookies.set("token", data.access_token, {
        path: "/",
        expires: 1,
        secure: true,
      });

      await fetchUser();
      navigate("/");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <img
            src="https://optimal-demos.myshopify.com/cdn/shop/files/dm2-logo.png?v=1632039937"
            alt=""
          />
        </div>
        <div className="login-card">
          <div className="login-card-img">
            <img
              src="https://img.pikbest.com/wp/202346/e-commerce-website-swiss-a-3d-rendered-shopping-experience-for-social-media-and-promotion_9732850.jpg!bw700"
              alt=""
            />
          </div>
          <div className="login-card-form">
            <div className="login-card-heading">
              <h1>Login</h1>
              {error && <p className="login-error-message">{error}</p>}
            </div>
            <div className="login-card-form-input">
              <form>
                <div className="login-form-input">
                  <label>Email</label>

                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {validationError.email && (
                    <p className="login-validation-message">{validationError.email}</p>
                  )}
                </div>
                <div className="login-form-input">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {validationError.password && (
                    <p className="login-validation-message">{validationError.password}</p>
                  )}
                </div>
              </form>
            </div>
            <div className="login-btn">
              <button onClick={handleLogin}>{loading ? "Logging in..." : "Login"}</button>
              <p>
                Don't have a Account ? <a href="/register">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
