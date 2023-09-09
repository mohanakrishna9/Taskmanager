import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (isLogin) => {
    setIsLogin(isLogin);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <button
            className={`btn ${isLogin ? "btn-light" : "btn-primary"}`}
            onClick={() => toggleForm(true)}
          >
            Login
          </button>
          <button
            className={`btn ${isLogin ? "btn-primary" : "btn-light"}`}
            onClick={() => toggleForm(false)}
          >
            Sign Up
          </button>
        </div>
        <div className="card-body">
          {isLogin ? (
            <form>
              <h2>Login</h2>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          ) : (
            <form>
              <h2>Sign Up</h2>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
