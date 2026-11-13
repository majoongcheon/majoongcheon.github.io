import { profile } from '../profile'

// 논문 · 특허 구역. 단추(카드)를 누르면 목록이 펼쳐지고, 각 논문의 "원문 찾기"는 새 창에서 열린다.
// 프로젝트 구역과 같은 <details> 카드를 써서 상태 코드 없이 키보드와 스크린리더를 그대로 지원한다.
// 논문 원문 PDF 는 출판사 저작권이 있어 올리지 않고, 제목으로 학술 검색을 여는 링크만 단다.
// profile.publications · profile.patents 를 읽어서 그리기만 한다.

// 제목으로 Google Scholar 검색을 여는 주소 (DOI 를 확인하지 못한 논문도 같은 방식으로 연결된다)
function searchUrl(title: string) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`
}

export function Publications() {
  const first = profile.publications.filter((paper) => paper.firstAuthor)
  const co = profile.publications.filter((paper) => !paper.firstAuthor)

  const groups = [
    { label: '주저자 논문', papers: first },
    { label: '공저 논문', papers: co },
  ]

  return (
    <section>
      <h2>논문 · 특허</h2>
      <p>
        SCI급 논문 {profile.publications.length}편(주저자 {first.length}편 · 공저 {co.length}편)과
        등록 특허 {profile.patents.length}건입니다. 아래 단추를 누르면 목록이 펼쳐집니다.
      </p>
      <ul className="projects">
        {groups.map((group) => (
          <li key={group.label}>
            <details className="card">
              <summary>
                {group.label} {group.papers.length}편
              </summary>
              <div className="card-body">
                <ul className="pub-list">
                  {group.papers.map((paper) => (
                    <li key={paper.title}>
                      <p className="pub-title">{paper.title}</p>
                      <p className="pub-meta">
                        {paper.journal} {paper.detail} ({paper.year})
                      </p>
                      <a
                        className="pub-link"
                        href={searchUrl(paper.title)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        원문 찾기 ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>
        ))}
        <li>
          <details className="card">
            <summary>학위논문 {profile.theses.length}편</summary>
            <div className="card-body">
              <p>고려대학교 도서관에서 제목으로 검색하면 열람할 수 있습니다.</p>
              <p className="card-link">
                <a href={profile.libraryUrl} target="_blank" rel="noreferrer">
                  고려대학교 도서관 ↗
                </a>
              </p>
              <ul className="pub-list">
                {profile.theses.map((thesis) => (
                  <li key={thesis.degree}>
                    <p className="pub-title">{thesis.title}</p>
                    <p className="pub-meta">
                      {thesis.degree} 학위논문 · {thesis.school}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </li>
        <li>
          <details className="card">
            <summary>특허 {profile.patents.length}건</summary>
            <div className="card-body">
              <ul className="pub-list">
                {profile.patents.map((patent) => (
                  <li key={patent.number}>
                    <p className="pub-title">{patent.title}</p>
                    <p className="pub-meta">
                      {patent.status} {patent.number} ({patent.date})
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </li>
      </ul>
    </section>
  )
}
