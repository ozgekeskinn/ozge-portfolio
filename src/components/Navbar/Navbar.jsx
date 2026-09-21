import "./Navbar.css";
import Logo from "../../assets/icons/ozge-logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="page-container navbar-container">
        <a href="#home" className="navbar__brand" aria-label="Ana sayfaya dön">
          <img src={Logo} alt="Özge Keskin Logo" className="navbar__logo" />
        </a>

        <nav className="navbar__links">
          <a href="#home">Ana Sayfa</a>
          <a href="#tech-stack">Teknolojiler</a>
          <a href="#projects">Projeler</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>
    </header>
  );
}
