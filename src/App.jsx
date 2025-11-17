import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Designer. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#work" className="text-white/70 hover:text-white">Work</a>
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
