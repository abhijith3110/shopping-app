import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      setMessage("Login successful!");
      Cookies.set("token", data.access_token, {
        path: "/",
        expires: 1,
        secure: true,
      });
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
              {message && <p className="success-message">{message}</p>}
              {error && <p className="error-message">{error}</p>}
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
