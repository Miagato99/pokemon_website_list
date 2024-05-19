"use client";
import React from "react";
import "../../styles/footer.scss";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="styles.container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Pokédex App
        </p>
        <div className="links">
          <a href="#">About Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
