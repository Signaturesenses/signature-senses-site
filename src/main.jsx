import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="hero">
      <div className="header">
        <div className="logo-text">SIGNATURE<br />SENSES</div>
        <div className="tagline-top">PRIVATE SCENT IDENTITY SYSTEM</div>
        <div className="menu">☰</div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          SIGNATURE<br />SENSES
        </h1>

        <p className="hero-subtitle">
          Choose your experience of life. Design how your world feels.
        </p>

        <div className="access-form">
          <input placeholder="Enter your email for exclusive access" />
          <button>REQUEST ACCESS</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
