import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-white/60 text-xs mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white">
            Graphic Design Portfolio
          </h1>
          <p className="mt-6 text-white/80 max-w-xl">
            A curated selection of brand identities, campaign visuals, and digital assets. Clean, modern, and thoughtfully crafted.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-md bg-white text-black font-medium px-5 py-2.5 hover:bg-white/90 transition">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 text-black font-medium px-5 py-2.5 hover:bg-emerald-400 transition">Start a Project</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_60%)]" />
    </section>
  )
}
