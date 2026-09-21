import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="page-container contact-container">
        <div className="contact__content">
          <p className="contact__eyebrow">
            <FaPaperPlane />
            İletişim
          </p>

          <h2 className="contact__title">Birlikte bir şeyler geliştirelim.</h2>

          <p className="contact__description">
            Yeni fırsatlar, projeler veya iş birlikleri için benimle iletişime
            geçebilirsin.
          </p>
        </div>

        <div className="contact__links">
          <a href="mailto:ozgekesknn1@hotmail.com" className="contact-card">
            <div className="contact-card__icon">
              <FaEnvelope />
            </div>

            <div>
              <span className="contact-card__label">E-posta</span>

              <p className="contact-card__value">ozgekesknn1@hotmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/%C3%B6zge-keskin-b3768b265/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">
              <FaLinkedinIn />
            </div>

            <div>
              <span className="contact-card__label">LinkedIn</span>

              <p className="contact-card__value">Özge Keskin</p>
            </div>
          </a>

          <a
            href="https://github.com/ozgekeskinn"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">
              <FaGithub />
            </div>

            <div>
              <span className="contact-card__label">GitHub</span>

              <p className="contact-card__value">@ozgekeskinn</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
