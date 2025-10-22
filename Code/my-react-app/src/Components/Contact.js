import React, { useState } from "react";
import Star1 from "../Assets/star1.svg";
import Star2 from "../Assets/star2.svg";
import Chat from "../Assets/Chat.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        request: '',
        service: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="section-title">Оставьте заявку</h2>
          <p className="contact-subtitle">Для получения персональной консультации</p>
        </div>
        
        <div className="contact-form-container">
          <form className="form-content" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Имя Фамилия"
                  required
                />
                <img src={Star1} alt="required" className="required-icon" />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Почта"
                  required
                />
                <img src={Star2} alt="required" className="required-icon" />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-field">
                <input
                  type="text"
                  name="request"
                  value={formData.request}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Запрос"
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-field">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-input select-input">
                  <option value="" disabled>Выберите услуги</option>
                  <option value="supply">Поставка станков</option>
                  <option value="service">Обслуживание</option>
                  <option value="modernization">Модернизация</option>
                  <option value="training">Обучение персонала</option>
                </select>
              </div>
            </div>
            
            <p className="form-notice">
              Отправляя заявку, вы принимаете <span className="highlight">соглашение на обработку персональных данных</span>
            </p>
            
            <button type="submit" className="submit-button">
              Отправить
            </button>
          </form>
          
          <div className="contact-image">
            <img src={Chat} alt="Консультация" />
          </div>
        </div>
        {isSubmitted && (
          <div className="success-message">
            <div className="success-content">
              <span className="success-icon">✓</span>
              <p>Анкета отправлена успешно!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;