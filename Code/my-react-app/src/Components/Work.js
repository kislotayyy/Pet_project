import React, { useState, useEffect } from "react";
import URF1 from "../Assets/URF1.svg";
import URF2 from "../Assets/URF2.svg";
import Yandex from "../Assets/Yandex.svg";
import Google from "../Assets/Google.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const clients = [
    {
      id: 1,
      logo: URF1,
      name: "Уральский федеральный университет",
      description: "Имени первого Президента России Б.Н.Ельцина"
    },
    {
      id: 2,
      logo: URF2,
      name: "Уральский федеральный университет",
      description: "Уральский гуманитарный институт"
    },
    {
      id: 3,
      logo: Yandex,
      name: "Компания Yandex",
      description: "Крупнейшая российская IT-компания"
    },
    {
      id: 4,
      logo: Google,
      name: "Компания Google",
      description: "Американская транснациональная корпорация"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clients-section" id="clients">
      <div className="clients-content">
        <h2 className="section-title">Нам доверяют</h2>
        
        <div className="clients-carousel">
          <button className="carousel-button prev" onClick={prevSlide}>
            <FiChevronLeft />
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div 
                  key={client.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="client-slide">
                    <div className="client-logo">
                      <img src={client.logo} alt={client.name || client.description} />
                    </div>
                    <div className="client-text">
                      {client.name ? (
                        <>
                          <h3 className="client-name">{client.name}</h3>
                          {client.description && (
                            <p className="client-description">{client.description}</p>
                          )}
                        </>
                      ) : (
                        <p className="client-description-only">{client.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-button next" onClick={nextSlide}>
            <FiChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {clients.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;