import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Skills } from './components/Skills'

// 한 페이지짜리 자기소개 페이지. 구역 순서만 정하고, 내용은 src/profile.ts 에서 온다.
function App() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </main>
  )
}

export default App
