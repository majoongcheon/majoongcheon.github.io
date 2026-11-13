import { profile } from '../profile'

// 기술 스택 구역
export function Skills() {
  return (
    <section>
      <h2>기술 스택</h2>
      <ul className="chips">
        {profile.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
