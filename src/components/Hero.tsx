import { profile } from '../profile'

// 맨 위 구역: 프로필 사진, 이름, 한 줄 소개. 사진은 public/ 에 있고 BASE_URL 을 붙여 부른다.
export function Hero() {
  return (
    <header className="hero">
      <img
        className="hero-photo"
        src={`${import.meta.env.BASE_URL}${profile.photo}`}
        alt={`${profile.name} 프로필 사진`}
        width={480}
        height={480}
      />
      <h1>{profile.name}</h1>
      <p className="tagline">{profile.tagline}</p>
    </header>
  )
}
