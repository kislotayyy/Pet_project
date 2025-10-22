import React from "react";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo-container">
            <img src={Logo} alt="Логотип" />
            <span>Логотип</span>
          </div>
          <p>© 2025 ООО Рога и Копыта</p>
        </div>
        
        <div className="footer-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            Описание
          </a>
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
            Преимущества
          </a>
          <a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>
            Спонсоры
          </a>
          <a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>
            Станки
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            Анкета
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;