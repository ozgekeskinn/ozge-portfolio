import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="project-card__image"
          style={{
            objectFit: project.imageFit || "cover",
            objectPosition: project.imagePosition || "center",
          }}
        />

        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.slice(0, 4).map((technology) => (
            <span className="project-card__technology" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-card__button project-card__button--primary"
            >
              İncele
              <FiExternalLink />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__button project-card__button--secondary"
          >
            <FiGithub />
            GitHub
            <FiExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
}
