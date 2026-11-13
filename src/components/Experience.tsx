import { profile } from '../profile'

// 경력 구역: 최근 경력부터 기관 · 역할 · 기간과 한 일 요약을 세로로 나열한다.
// profile.experience 를 읽어서 그리기만 한다.
export function Experience() {
  return (
    <section>
      <h2>경력</h2>
      <ol className="timeline">
        {profile.experience.map((job) => (
          <li key={`${job.organization}-${job.period}`}>
            <p className="timeline-period">{job.period}</p>
            <h3>{job.organization}</h3>
            <p className="timeline-role">{job.role}</p>
            <ul className="timeline-points">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
