import "./TechStack.css";
import { skills } from "../../data/skills.js";

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="tech-stack__container">
        <div className="tech-stack__header">
          <h2 className="tech-stack__title">Teknolojiler</h2>

          <p className="tech-stack__subtitle">Kullandığım Teknolojiler</p>
        </div>

        <div className="tech-stack__grid">
          {skills.map((skill) => (
            <div className="tech-stack__item" key={skill.name}>
              <img
                src={skill.image}
                alt={`${skill.name} logo`}
                className="tech-stack__image"
              />

              <span className="tech-stack__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
