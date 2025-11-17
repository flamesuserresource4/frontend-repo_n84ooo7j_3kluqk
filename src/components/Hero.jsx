import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]">
      {/* Cover Background: full-bleed, sits underneath content */}
      <div className="absolute inset-0">
        <Suspense fallback={<div className=\"w-full h-full bg-gradient-to-b from-black via-black to-emerald-900/20\" />}> 
          <Spline
            aria-label="Interactive 3D background"
            scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </div>

      {/* Subtle overlays to ensure contrast and legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.18),transparent_60%)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-white/60 text-[11px] sm:text-xs mb-3 sm:mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] text-white">
            Graphic Design Portfolio
          </h1>
          <p className="mt-5 sm:mt-6 text-white/80 max-w-xl text-base sm:text-lg">
            A curated selection of brand identities, campaign visuals, and digital assets. Clean, modern, and thoughtfully crafted.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-md bg-white text-black font-medium px-5 py-2.5 hover:bg-white/90 transition">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 text-black font-medium px-5 py-2.5 hover:bg-emerald-400 transition">Start a Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
