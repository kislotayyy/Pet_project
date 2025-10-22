import React from 'react'
import Navbar from './Navbar';
import {FiArrowRight} from 'react-icons/fi';

const Home = () => {
        const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Самые лучшие<br />станки с ЧПУ
                </h1>
                <p className="primary-text">
                    Станки с ЧПУ по дереву, металлу или пластику – готовое<br />
                    решение под ключ
                </p>
                <button className="primary-button1"
                    onClick={() => scrollToSection('contact')}
                >
                    Связаться с нами <FiArrowRight/>
                </button>
            </div>
        </div>
    </div>
    );
};

export default Home;