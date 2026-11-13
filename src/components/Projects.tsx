import { profile } from '../profile'

// 프로젝트 목록 구역
export function Projects() {
  return (
    <section>
      <h2>프로젝트</h2>
      <ul className="projects">
        {profile.projects.map((project) => (
          <li key={project.name} className="card">
            <h3>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p>{project.description}</p>
            <ul className="chips small">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
