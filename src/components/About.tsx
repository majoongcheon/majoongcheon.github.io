import { profile } from '../profile'

// 자기소개 글 구역
export function About() {
  return (
    <section>
      <h2>소개</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}
