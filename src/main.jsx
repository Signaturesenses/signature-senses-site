import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

function SignatureSenses() {
  const [email, setEmail] = useState("");

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="glow" />

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="brand"
        >
          SIGNATURE SENSES
        </motion.h1>

        <p className="slogan">
          Choose your experience of life. Design how your world feels.
        </p>

        <p className="label">Private Scent Identity System</p>

        <form className="access" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email for exclusive access"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Request Access</button>
        </form>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <h2>Your scent is your signature.</h2>
        <p>
          We design immersive scent experiences that define spaces through
          emotion, memory, and identity.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">
          <h3>Bespoke Scents</h3>
          <p>Curated fragrance profiles tailored to your identity.</p>
        </div>

        <div className="card">
          <h3>Minimal Design</h3>
          <p>
            Sculptural diffuser systems designed with architectural precision.
          </p>
        </div>

        <div className="card">
          <h3>Evolving Identity</h3>
          <p>
            Your scent evolves with your lifestyle and emotional state.
          </p>
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className="product">
        <p className="coming">Coming Soon</p>
        <h2>A sculptural diffuser for the atmosphere you choose.</h2>
        <p>
          Designed for modern spaces, Signature Senses will bring personalized
          scent identity into the home with quiet precision.
        </p>
      </section>

      <footer>© 2026 Signature Senses. Private Luxury Experience</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<SignatureSenses />);
