import { profile } from '../profile'

// 연락처 링크 구역 (GitHub, 블로그, 이메일)
export function Contact() {
  return (
    <section>
      <h2>연락처</h2>
      <p>함께 일할 기회를 찾고 있습니다. 편하게 연락 주세요.</p>
      <p className="links">
        <a href={profile.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.contact.blog} target="_blank" rel="noreferrer">
          블로그
        </a>
        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
      </p>
      <p className="source-note">
        이 페이지의 소스:{' '}
        <a href={profile.contact.source} target="_blank" rel="noreferrer">
          GitHub 저장소
        </a>
      </p>
    </section>
  )
}
