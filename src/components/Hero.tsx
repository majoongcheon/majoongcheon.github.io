import { profile } from '../profile'

// 맨 위 구역: 이름과 한 줄 소개
export function Hero() {
  return (
    <header className="hero">
      <h1>{profile.name}</h1>
      <p className="tagline">{profile.tagline}</p>
    </header>
  )
}
