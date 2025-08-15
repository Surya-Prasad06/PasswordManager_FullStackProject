import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"
const Home = () => {
  return (
    
    <>
    <div className="home-container">
      <header className="hero-section">
        <h1>Password Manager</h1>
        <p>Securely store, manage, and access your passwords in one place.</p>
        <Link to="/add-password" className="btn-primary">Add New Password</Link>
      </header>

      <section className="features-section">
        <h2>Why Use Our Password Manager?</h2>
        <ul className="features-list">
          <li>🔐 End-to-end encrypted storage</li>
          <li>💾 Easily add, update, and delete passwords</li>
          <li>🌐 Access anywhere via web</li>
          <li>🔍 Search by website or username</li>
          <li>🛡️ Your data is never shared or tracked</li>
        </ul>
      </section>

      <section className="cta-section">
        <h3>Start Securing Your Online Life</h3>
        <Link to="/view-passwords" className="btn-secondary">View Stored Passwords</Link>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} SecureVault. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;
