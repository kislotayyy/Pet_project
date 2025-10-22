import React from "react";
import Logo from "../Assets/Logo.png";
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="Логотип"/>
        </div>
        <div className="navbar-links-container">
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
        <button 
            className="primary-button" 
            onClick={() => scrollToSection('contact')}
        >
            Связаться с нами <FiArrowRight />
        </button>
    </nav>
    );
};

export default Navbar;