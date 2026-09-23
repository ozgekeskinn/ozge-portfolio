import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
