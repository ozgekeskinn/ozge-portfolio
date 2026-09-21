import "./Projects.css";
import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const projectOrder = [7, 6, 4, 5, 1, 2, 3];

export default function Projects() {
  const orderedProjects = projectOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <p className="projects__eyebrow">Projelerim</p>
          </div>
        </div>

        <div className="projects__grid">
          {orderedProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
