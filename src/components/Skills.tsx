import { profile } from '../profile'

// 기술 스택 구역. 프로젝트 구분과 같은 이름(코딩 · MLOps / 연구 · 장비 / 자격)으로 묶는다.
export function Skills() {
  return (
    <section>
      <h2>기술 스택</h2>
      {profile.skills.map((group) => (
        <div key={group.title} className="group">
          <h3>{group.title}</h3>
          <ul className="chips">
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
