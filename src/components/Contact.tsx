import { profile } from '../profile'

// 연락처 링크 구역 (GitHub, 이메일)
export function Contact() {
  return (
    <section>
      <h2>연락처</h2>
      <p className="links">
        <a href={profile.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
      </p>
    </section>
  )
}
