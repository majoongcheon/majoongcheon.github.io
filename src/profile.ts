// 자기소개 페이지에 보여 줄 내용을 한 곳에 모은 파일.
// 컴포넌트(src/components/)는 여기 값을 읽어서 그리기만 한다. 내용을 바꿀 때는 이 파일만 고친다.
// 내용은 이력서 · 경력기술서(2023~2026)를 바탕으로 정리했고, 특정 기업 이름은 넣지 않는다.
// 전화번호 · 주소 · 생년월일 같은 개인정보는 공개 페이지라 넣지 않는다.

export interface Experience {
  /** 기관 이름 */
  organization: string
  /** 직위 · 역할 */
  role: string
  /** 기간 (연도만 적는다) */
  period: string
  /** 한 일 요약 (한 줄에 하나) */
  highlights: string[]
}

export interface Publication {
  /** 논문 제목 (영어 원문) */
  title: string
  journal: string
  /** 권(호), 쪽수 */
  detail: string
  year: number
  /** 주저자(제1저자)이면 true */
  firstAuthor: boolean
}

export interface Thesis {
  /** 학위 구분 (박사 · 석사) */
  degree: string
  title: string
  /** 학위를 받은 학교와 연도 */
  school: string
}

export interface Patent {
  title: string
  /** 등록번호 */
  number: string
  /** 등록일 */
  date: string
  status: string
}

export interface Project {
  name: string
  /** 어느 기관에서 한 일인지. 없으면 생략 */
  affiliation?: string
  description: string
  /** 프로젝트 링크. 없으면 생략 */
  url?: string
  tags: string[]
}

export interface Profile {
  name: string
  /** 프로필 사진 파일 이름 (public/ 폴더 안) */
  photo: string
  tagline: string
  about: string[]
  experience: Experience[]
  skills: string[]
  publications: Publication[]
  patents: Patent[]
  theses: Thesis[]
  /** 학위논문을 검색할 수 있는 도서관 주소 */
  libraryUrl: string
  projects: Project[]
  contact: {
    github: string
    /** 테크노트를 쓰는 블로그 */
    blog: string
    email: string
  }
}

export const profile: Profile = {
  name: '조성기',
  photo: 'profile.jpg',
  tagline: '직장을 구하기 위해 노력 중인 잡식성 개발자',

  about: [
    '직장을 구하기 위해 노력 중인 잡식성 개발자입니다. 가리지 않고 배우고 만들어 보는 것을 좋아합니다.',
    '고려대학교에서 고체물리로 박사 학위를 받았고, 이후 연구 현장에서 장비를 직접 다루며 일해 왔습니다. MOCVD 장비로 GaN 에피 층을 성장시키고 XRD · SEM · AFM · PL 로 분석하면서, 공정 조건이 결과에 주는 영향을 숫자로 비교해 왔습니다.',
    '장비가 멈추면 원인부터 찾고, 기록을 남겨 같은 문제가 반복되지 않게 하는 편입니다. 박사 과정에서는 유기 반도체 결정의 광신호 전달을 연구해 SCI 논문 16편(주저자 3편)과 등록 특허 1건을 남겼습니다.',
    '개발은 지금 유클리드소프트의 ABC 부트캠프(AI캠퍼스 AI파일럿 1기, MLOps 엔지니어 양성과정)에서 처음 배우고 있습니다. 컨테이너로 서비스를 올리고, 배포하고, 문제가 생기면 되돌리는 과정을 팀 프로젝트로 익히는 중입니다.',
  ],

  // 최근 경력부터 적는다. 교육 과정도 같은 목록에 둔다.
  experience: [
    {
      organization: 'ABC 부트캠프 (유클리드소프트) · AI캠퍼스',
      role: 'AI파일럿 1기 · MLOps 엔지니어 양성과정 교육생',
      period: '2026.07.22 – 현재',
      highlights: [
        '고용노동부 지원(교육비 전액 지원)으로 진행하는 과정',
        '미니프로젝트: ML 모델 구현(3팀 팀장) · DL 모델 서빙(3조) · 컨테이너 환경 구축(2조 팀장)을 수행하고, 지금은 ML 시스템 클라우드 배포를 배우는 중',
        '배포 전 이전 이미지 ID 와 되돌리기 태그를 남기고, 백업 · 복원은 임시 환경에서 먼저 시험',
        '장애마다 증상 · 근거 · 영향 · 조치를 네 줄로 기록하고, 배운 내용을 테크노트로 블로그에 정리',
      ],
    },
    {
      organization: '한국과학기술원(KAIST) 자연과학연구소',
      role: '연수연구원',
      period: '2024 – 2025',
      highlights: [
        'MOCVD 로 GaN 템플릿과 InGaN/GaN 양자우물(MQW) 에피 층 성장',
        '온도 · 압력 · 가스 유량 변화에 따른 특성을 XRD · SEM · AFM · PL mapper 로 비교 분석',
        '스크러버 · 전원 · 진공 · 냉각 계통의 이상 원인 분석과 수리, 이상 이력 기록 체계 마련',
      ],
    },
    {
      organization: '기초과학연구원(IBS) 중이온가속기연구소 (RAON)',
      role: '박사후연구원',
      period: '2022 – 2023',
      highlights: [
        '공선 레이저 분광(CLS) 실험 장치의 제작 · 설치 참여',
        '캐나다 TRIUMF 연구소와 협업해 제작 사양 조율, 반입 후 조립 · 광학 정렬 · 초기 신호 시험',
        'Autodesk Inventor 로 3D 도면을 그려 장치 구조 점검',
      ],
    },
    {
      organization: '중이온가속기 이용자협회',
      role: '참여연구원',
      period: '2019 – 2021',
      highlights: ['RAON 공선 레이저 분광(CLS) 실험(RAON-4) 연구 참여'],
    },
    {
      organization: '고려대학교 물리학과',
      role: '박사후연구원',
      period: '2016 – 2018',
      highlights: [
        '유기 · 무기 나노구조체 합성과 특성 분석',
        '포토마스크 제작과 포토리소그래피 · 식각으로 FET 소자를 만들고 전기 특성 측정',
      ],
    },
  ],

  skills: [
    'Python',
    'Node',
    'Docker · Docker Compose',
    'Nginx',
    'Git · GitHub (이슈 · PR)',
    '컴퓨터활용능력 2급',
    'MOCVD 운용 · 유지보수',
    'GaN 에피 성장',
    'XRD · SEM · AFM',
    'PL · Raman 분광',
    '고진공 장비',
    'Autodesk Inventor (3D 설계)',
    'Origin (데이터 분석)',
    '포토리소그래피 · 식각',
  ],

  // 논문 · 특허: 「참여논문.pptx」(고려대 연구실 목록)를 바탕으로 정리했다. 최신순.
  // 제목은 영어 원문 그대로 둔다. firstAuthor 는 주저자 논문 표시.
  publications: [
    { title: 'Waveguiding Characteristics of surface enhanced Raman scattering signals along crystalline organic semiconducting microrod', journal: 'Optics Express', detail: '25(6), 6215–6226', year: 2017, firstAuthor: true },
    { title: 'Sensitive optical bio-sensing of p-type WSe2 hybridized with fluorescent dye attached DNA by doping and de-doping effects', journal: 'Nanotechnology', detail: '28, 435501', year: 2017, firstAuthor: false },
    { title: 'Optically active charge transfer in hybrids of Alq3 nanoparticles and MoS2 monolayer', journal: 'Nanotechnology', detail: '28, 185702', year: 2017, firstAuthor: false },
    { title: 'Enhanced Local and Nonlocal Photoluminescence of Organic Rubrene Microrods using Surface Plasmon of Gold Nanoparticles: Applications to Ultrasensitive and Remote Biosensing', journal: 'Journal of Physical Chemistry C', detail: '120(21), 11612', year: 2016, firstAuthor: false },
    { title: 'Abnormal behavior of optical signal transfer in π-conjugated organic microplates and focused electron-beam-treated nanorods', journal: 'Synthetic Metals', detail: '216, 59', year: 2015, firstAuthor: false },
    { title: 'Dual-mode waveguiding of Raman and luminescence signals in a crystalline organic microplate', journal: 'Journal of Materials Chemistry C', detail: '2, 6077–6083', year: 2014, firstAuthor: true },
    { title: 'Photoluminescence and Optical Waveguiding Characteristics of Bisalkoxy Tin(IV) Porphyrin Microcrystals', journal: 'Chemistry – An Asian Journal', detail: '7, 2768–2771', year: 2012, firstAuthor: true },
    { title: 'Luminescence, charge mobility, and optical waveguiding of two-dimensional organic rubrene nanosheets: Comparison with one-dimensional nanorods', journal: 'Organic Electronics', detail: '13, 2047', year: 2012, firstAuthor: false },
    { title: 'Polarized photoluminescence characteristics of rubrene sheets with nanometer thickness', journal: 'Physical Review B', detail: '86, 075416', year: 2012, firstAuthor: false },
    { title: 'Photoresponsive ambipolar transport characteristics of organic thin film transistors using soluble HB-ant-THT and PCBM composites', journal: 'Synthetic Metals', detail: '162, 332', year: 2012, firstAuthor: false },
    { title: 'Nanojunction in conducting polypyrrole single nanowire made by focused electron beam: charge transport characteristics', journal: 'Journal of Applied Physics', detail: '110, 024308', year: 2011, firstAuthor: false },
    { title: 'Nanoscale optical and photoresponsive electrical properties of P3HT and PCBM composite nanowires', journal: 'Organic Electronics', detail: '12, 1695', year: 2011, firstAuthor: false },
    { title: 'Highly bright and sharp light emission of a single nanoparticle of crystalline rubrene', journal: 'Journal of Materials Chemistry', detail: '21, 8002', year: 2011, firstAuthor: false },
    { title: 'Fine Characteristics Tailoring of Organic and Inorganic Nanowires Using Focused Electron-Beam Irradiation', journal: 'Angewandte Chemie International Edition', detail: '50, 3734', year: 2011, firstAuthor: false },
    { title: 'Gate-field dependent photosensitivity of soluble 1,2,4,5-tetra(5′-hexyl-[2,2′]terthiophenyl-5-vinyl)-benzene based organic thin film transistors', journal: 'Journal of Applied Physics', detail: '108, 023703', year: 2010, firstAuthor: false },
    { title: 'Rectangular Nanotubes of Copper Phthalocyanine: Application to a Single Nanotube Transistor', journal: 'Chemistry of Materials', detail: '22, 2219', year: 2010, firstAuthor: false },
  ],

  patents: [
    {
      title: '라만신호 측정방법 및 측정장치',
      number: '10-1643717',
      date: '2016.07.22',
      status: '등록',
    },
  ],

  // 학위논문은 고려대학교 도서관에서 제목으로 검색하면 열람할 수 있다.
  libraryUrl: 'https://library.korea.ac.kr/',
  theses: [
    {
      degree: '박사',
      title:
        'Study of photoluminescence and Raman spectroscopy and their signal transfer characteristics in organic semiconducting crystals',
      school: '고려대학교 대학원 (2016.08)',
    },
    {
      degree: '석사',
      title: 'Pentacene을 이용한 나노선의 제작과 특성 연구',
      school: '고려대학교 대학원 (2009.08)',
    },
  ],

  // 연구 성과 위주로 정리했다. 링크가 없는 항목은 url 을 생략한다.
  projects: [
    {
      name: 'Klassic 재구성: 국악보 변환 · 편집 API 컨테이너 환경',
      affiliation: 'ABC 부트캠프 미니프로젝트4 · 컨테이너 기반 환경 구축 과정 · 2조 · 2026.10–11',
      description:
        '3조가 만든 1차 서비스를 Docker Compose 로 구동하는 기준판(v0.1.1)을 이슈 단위로 새로 구성한 프로젝트입니다. 웹 화면 · 백엔드 · 인식 엔진(model-api) · DB 를 컨테이너로 나누고, 입구(Nginx) 하나로 화면과 API 를 나눴으며 관리자 화면과 DB 는 외부에 열지 않았습니다. 팀장으로 백엔드 · 공통 · 배포를 맡아 발표했습니다. 배포할 때마다 되돌릴 이미지를 남겼고, 시계 오차로 인식이 실패한 문제는 호스트 시계까지 좇아 원인을 찾았습니다. 구현에는 Claude Code 를 활용했습니다.',
      url: 'https://github.com/K-lassic/Klassic',
      tags: ['Docker Compose', 'Nginx', 'MariaDB', 'Tailscale Funnel', '팀장'],
    },
    {
      name: 'Klassic 1차: 국악보 변환 및 가상악기 연주 서빙 플랫폼',
      affiliation: 'ABC 부트캠프 미니프로젝트3 · DL 모델 서빙 과정 · 3조 「풍악을 울려라」',
      description:
        '오선보와 정간보 사진 · PDF 를 인식해 악보 데이터로 바꾸고, 편집한 악보를 국악기 소리로 연주해 내려받게 하는 서비스의 1차 판입니다. 웹 화면 · 웹 서비스 · 공유 모듈은 Node.js 로, 모델 API 는 Python(uv)으로 나누고 MariaDB 와 pm2 로 구동했습니다. 실행 조건(운영체제 · 도구 · 인식 엔진과 FluidSynth 설치 절차)은 직접 정리했습니다.',
      url: 'https://github.com/majoongcheon/project2610',
      tags: ['Node.js', 'Python', 'MariaDB', 'FluidSynth', 'pm2', '모델 서빙'],
    },
    {
      name: '곁, 돌봄의 무게를 읽다: 돌봄부담 7문항 진단',
      affiliation: 'ABC 부트캠프 미니프로젝트2 · ML 모델 구현 과정 · 3팀 · 2026.08–09',
      description:
        '발달장애인 보호자의 돌봄부담을 7문항으로 가늠하고, 부담이 크면 가까운 복지서비스 신청 접수처를 지도로 안내하는 서비스입니다. 팀장으로 계획서를 쓰고 설계 · 배포를 이끌었습니다. 2024 실태조사(3,000가구)의 38개 변수에서 후진 제거로 7문항을 골랐고, 시험 602건에서 고부담 여부 재현율 77.3%, 실제 고부담을 부담 없음으로 판정한 경우는 0건이었습니다. 5구간 정확도는 47.8%라는 한계도 문서에 밝혔고, 로그인이나 개인정보 수집은 없습니다. 구현에는 Claude Code 를 활용했습니다.',
      url: 'https://github.com/majoongcheon/project2608',
      tags: ['Python', 'scikit-learn', 'LightGBM', 'SHAP', 'Vue', 'Express', 'MariaDB', '팀장'],
    },
    {
      name: '유기 반도체 결정의 광신호 전달 연구',
      description:
        '고려대학교 박사 과정(2009–2016)의 연구입니다. 유기 반도체 마이크로 결정에서 발광(PL)과 라만 신호가 전달되는 성질을 레이저 공초점 현미경으로 측정했습니다. 연구 내용으로 SCI 논문 16편(주저자 3편)과 「라만신호 측정방법 및 측정장치」 특허 1건(등록)을 남겼습니다.',
      tags: ['Raman', 'PL', '유기 반도체', '논문 · 특허'],
    },
    {
      name: 'GaN 에피 성장 조건과 특성 비교',
      description:
        '같은 구성의 GaN 기반 시료를 공정 조건만 바꿔 성장시키고, 측정 조건을 일정하게 유지한 채 XRD rocking curve(FWHM) · AFM 표면 거칠기 · SEM 으로 비교했습니다. 공정 변수와 결과 사이의 상관관계를 정리해 다음 조건을 정하는 근거로 썼습니다.',
      tags: ['GaN', 'MQW', 'XRD', 'AFM'],
    },
    {
      name: '이온빔 레이저 분광(CLS) 장치 구축',
      affiliation:
        '기초과학연구원(IBS) 중이온가속기연구소(RAON) · 2019–2023 (2019–2021 이용자협회 · 2022–2023 연구소)',
      description:
        '이온빔의 궤적을 휘어 입사하는 레이저 빔과 일치시킨 뒤 신호를 측정하는 공선 레이저 분광(CLS) 장치를 만든 프로젝트입니다. 캐나다 TRIUMF 연구소와 협업해 제작 사양을 조율했고, 장치가 들어온 뒤에는 조립과 광학 정렬, 초기 신호 시험을 맡았습니다. 고진공을 유지하는 장치를 설치하고 운영하며 진공 펌프 사용법을 익혔고, Autodesk Inventor 로 부속품의 3D 도면을 그려 구조를 점검했습니다.',
      tags: ['IBS', 'RAON', 'TRIUMF', '공선 레이저 분광', '고진공', '광학 정렬', 'Inventor'],
    },
    {
      name: 'my-profile',
      description: '지금 보고 있는 한 페이지짜리 자기소개 페이지. GitHub Pages 로 배포하고 있습니다.',
      url: 'https://github.com/majoongcheon/majoongcheon.github.io',
      tags: ['React', 'TypeScript'],
    },
  ],

  contact: {
    github: 'https://github.com/majoongcheon',
    blog: 'https://blog.naver.com/jrantert',
    // 이력서에 적은 메일 주소를 사용자가 직접 지정해 공개한다
    email: 'jrantert@naver.com',
  },
}
