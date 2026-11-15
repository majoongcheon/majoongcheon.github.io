import { profile } from '../profile'
import type { Project, ProjectCategory } from '../profile'

// 프로젝트 목록 구역. 「코딩 · MLOps」와 「연구」 두 묶음으로 나눠 보여 준다.
// 카드의 이름을 누르면 설명 · 태그 · 링크가 펼쳐진다.
// <details> 를 써서 상태 코드 없이 키보드(Enter · Space)와 스크린리더도 그대로 지원한다.
const groups: { category: ProjectCategory; title: string }[] = [
  { category: 'coding', title: '코딩 · MLOps' },
  { category: 'research', title: '연구' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <details className="card">
        <summary>{project.name}</summary>
        <div className="card-body">
          {project.affiliation && <p className="card-meta">{project.affiliation}</p>}
          <p>{project.description}</p>
          <ul className="chips small">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.url && (
            <p className="card-link">
              <a href={project.url} target="_blank" rel="noreferrer">
                자세히 보기 →
              </a>
            </p>
          )}
        </div>
      </details>
    </li>
  )
}

export function Projects() {
  return (
    <section>
      <h2>프로젝트</h2>
      {groups.map(({ category, title }) => (
        <div key={category} className="group">
          <h3>{title}</h3>
          <ul className="projects">
            {profile.projects
              .filter((project) => project.category === category)
              .map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
