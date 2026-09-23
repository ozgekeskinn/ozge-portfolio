import { useEffect, useState } from "react";

import "./Navbar.css";
import Logo from "../../assets/icons/ozge-logo.png";

const sections = ["home", "tech-stack", "projects", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      const activationPoint = 160;

      // Sayfanın en altına geldiysek İletişim aktif olsun
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationPoint && rect.bottom > activationPoint) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getLinkClass(sectionId) {
    return activeSection === sectionId
      ? "navbar__link navbar__link--active"
      : "navbar__link";
  }

  return (
    <header className="navbar">
      <div className="page-container navbar-container">
        <a
          href="#home"
          className="navbar__brand"
          aria-label="Ana sayfaya dön"
          onClick={() => setActiveSection("home")}
        >
          <img src={Logo} alt="Özge Keskin Logo" className="navbar__logo" />
        </a>

        <nav className="navbar__links">
          <a
            href="#home"
            className={getLinkClass("home")}
            onClick={() => setActiveSection("home")}
          >
            Ana Sayfa
          </a>

          <a
            href="#tech-stack"
            className={getLinkClass("tech-stack")}
            onClick={() => setActiveSection("tech-stack")}
          >
            Teknolojiler
          </a>

          <a
            href="#projects"
            className={getLinkClass("projects")}
            onClick={() => setActiveSection("projects")}
          >
            Projeler
          </a>

          <a
            href="#contact"
            className={getLinkClass("contact")}
            onClick={() => setActiveSection("contact")}
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}
