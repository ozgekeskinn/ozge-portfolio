import "./Projects.css";
import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const projectGroups = [
  {
    key: "react",
    title: "React Tabanlı Projeler",
    description:
      "React ve modern frontend araçlarıyla geliştirdiğim projeler. Full-stack RoomCraft projesi de React tabanlı arayüzü nedeniyle bu grupta yer alıyor.",
    order: [7, 6, 4, 5],
    gridClass: "projects__grid--react",
  },
  {
    key: "html",
    title: "HTML / CSS / JavaScript Projeleri",
    description:
      "Framework kullanmadan HTML, CSS ve JavaScript temelleriyle geliştirdiğim çok sayfalı web uygulamaları.",
    order: [1, 2, 3],
    gridClass: "projects__grid--html",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <h2 className="projects__title">Projelerim</h2>
          </div>
        </div>

        {projectGroups.map((group) => {
          const groupProjects = group.order
            .map((id) => projects.find((project) => project.id === id))
            .filter(Boolean);

          return (
            <div className="projects__group" key={group.key}>
              <div className="projects__group-header">
                <div>
                  <p className="projects__group-eyebrow">{group.eyebrow}</p>

                  <h3 className="projects__group-title">{group.title}</h3>
                </div>

                <p className="projects__group-description">
                  {group.description}
                </p>
              </div>

              <div className={`projects__grid ${group.gridClass}`}>
                {groupProjects.map((project) => (
                  <ProjectCard project={project} key={project.id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
