import React from "react";
import Icon from "../Assets/Icon.svg";

const Run = () => {
  return (
    <div className="features-section" id="features">
      <div className="features-content">
        <div className="features-header">
          <h2 className="section-title">Преимущества работы с нами</h2>
          <p className="section-subtitle">
            Наша компания работает на рынке металлообработки более 10 лет и за 
            это время зарекомендовала себя как надежный партнер для предприятий 
            различного масштаба.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <img src={Icon} alt="Иконка" />
            </div>
            <div className="feature-text">
              <h3>Прямые поставки</h3>
              <p>от ведущих производителей</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <img src={Icon} alt="Иконка" />
            </div>
            <div className="feature-text">
              <h3>до 36 месяцев</h3>
              <p>гарантия на оборудование</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <img src={Icon} alt="Иконка" />
            </div>
            <div className="feature-text">
              <h3>Обучение персонала</h3>
              <p>работе на станках</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Run;