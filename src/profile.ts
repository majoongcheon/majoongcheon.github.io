// 자기소개 페이지에 보여 줄 내용을 한 곳에 모은 파일.
// 컴포넌트(src/components/)는 여기 값을 읽어서 그리기만 한다. 내용을 바꿀 때는 이 파일만 고친다.

export interface Project {
  name: string
  description: string
  /** 프로젝트 링크. 없으면 생략 */
  url?: string
  tags: string[]
}

export interface Profile {
  name: string
  tagline: string
  about: string[]
  skills: string[]
  projects: Project[]
  contact: {
    github: string
    email: string
  }
}

export const profile: Profile = {
  name: '조성기',
  tagline: '직장을 구하기 위해 노력 중인 잡식성 개발자',

  // 경력은 별도 구역 없이 소개 글에 함께 적었다 (문단마다 배열 한 칸)
  // TODO: 소개 글을 본인 말투로 다듬고, 경력 기간(연도)을 채우기
  about: [
    '직장을 구하기 위해 노력 중인 잡식성 개발자입니다. 가리지 않고 배우고 만들어 보는 것을 좋아합니다.',
    '경력: 고려대학교 고체물리 박사 · 기초과학연구원 중이온가속기연구소 박사후연구원 · 한국과학기술원 연수연구원',
  ],

  // TODO: 스택이 더 있으면 추가하기
  skills: ['Python', 'Node', '컴퓨터활용능력 2급'],

  // TODO: 실제 프로젝트로 바꾸기
  projects: [
    {
      name: 'delivery-eta API',
      description: '거리와 밀린 주문 수로 배달 예상 시간을 알려 주는 API.',
      // TODO: 저장소 주소 확인하기
      url: 'https://github.com/example/delivery-eta',
      tags: ['Python', 'FastAPI'],
    },
    {
      name: 'my-profile',
      description: '지금 보고 있는 한 페이지짜리 자기소개 페이지.',
      tags: ['React', 'TypeScript'],
    },
  ],

  contact: {
    // TODO: 실제 GitHub 주소로 바꾸기
    github: 'https://github.com/example',
    // TODO: 실제 이메일로 바꾸기
    email: 'hello@example.com',
  },
}
