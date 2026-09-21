import "./Hero.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="page-container hero-container">
        <div className="hero__content">
          <p className="hero__intro">Merhaba, ben</p>

          <h1 className="hero__title">Özge Keskin</h1>

          <h2 className="hero__role">
            Bilgisayar Mühendisi & Full Stack Developer
          </h2>

          <p className="hero__description">
            Frontend, backend ve veritabanı alanlarında kullanıcı odaklı ve
            gerçek problemlere çözüm üreten web uygulamaları geliştiriyorum.
          </p>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <FaMapMarkerAlt />
              <span>İstanbul, Türkiye</span>
            </div>

            <div className="hero__meta-item">
              <FaBriefcase />
              <span>Yeni Fırsatlara Açığım</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              Projelerimi Gör →
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/ozgekeskinn"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/%C3%B6zge-keskin-b3768b265/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a href="mailto:ozgekesknn1@hotmail.com" aria-label="E-posta">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
