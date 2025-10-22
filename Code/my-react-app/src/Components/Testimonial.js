import React from "react";
import Block1 from "../Assets/block1.svg";
import Block2 from "../Assets/block2.svg";
import Block3 from "../Assets/block3.svg";
import Block4 from "../Assets/block4.svg";

const Testimonial = () => {
  return (
    <div className="models-section" id="models">
      <div className="models-content">
        <div className="models-header">
          <h2 className="section-title">Модельный ряд</h2>
          <p className="section-subtitle">
            Наш модельный ряд представлен следующим множеством различных станков с ЧПУ
          </p>
        </div>
        
        <div className="models-grid">
          <div className="model-card">
            <div className="model-image">
              <img src={Block2} alt="Jet 123 small" />
            </div>
            <div className="model-info">
              <h3>Jet 123 small</h3>
              <p>Подойдет для малого бизнеса</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-image">
              <img src={Block2} alt="Jet 123 small v.9.1" />
            </div>
            <div className="model-info">
              <h3>Jet 123 small v.9.1</h3>
              <p>Новая версия, подойдет также для малого бизнеса</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-image">
              <img src={Block2} alt="Jet 123 small v.9.1" />
            </div>
            <div className="model-info">
              <h3>Jet 123 small v.9.1</h3>
              <p>Новая версия, подойдет также для малого бизнеса</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-image">
              <img src={Block4} alt="Ultra-Jet" />
            </div>
            <div className="model-info">
              <h3>Ultra-Jet</h3>
              <p>Подойдет для среднего бизнеса</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-image">
              <img src={Block3} alt="Ultra-Jet 12" />
            </div>
            <div className="model-info">
              <h3>Ultra-Jet 12</h3>
              <p>Подойдет для крупного бизнеса</p>
            </div>
          </div>
          
          <div className="model-card">
            <div className="model-image">
              <img src={Block1} alt="Ultra-Jet 123 v.9.0" />
            </div>
            <div className="model-info">
              <h3>Ultra-Jet 123 v.9.0</h3>
              <p>Подойдет для крупного бизнеса</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;