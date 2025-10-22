import React from "react";
import Beaver1 from "../Assets/beaver1.svg";
import Beaver2 from "../Assets/beaver2.svg";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <div className="section-header">
          <h2 className="section-title">Станки с ЧПУ для ваших задач</h2>
        </div>
        
        <div className="about-cards">
          <div className="about-card">
            <div className="card-content">
              <p className="card-text">
                Мы специализируемся на поставках, обслуживании и модернизации станков 
                с числовым программным управлением.
              </p>
              <div className="card-image left-image">
                <img src={Beaver1} alt="Фрезерный станок" />
              </div>
            </div>
          </div>
          
          <div className="about-card">
            <div className="card-content">
              <p className="card-text">
                Наша компания работает на рынке металлообработки более 10 лет и за 
                это время зарекомендовала себя как надежный партнер для предприятий 
                различного масштаба.
              </p>
              <div className="card-image right-image">
                <img src={Beaver2} alt="Токарный станок" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;