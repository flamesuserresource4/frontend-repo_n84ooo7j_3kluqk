export default function ProjectGrid() {
  const projects = [
    {
      title: 'Brand Identity — Vanta Labs',
      desc: 'Monochrome identity system with emerald accent, logomark, and packaging set.',
      img: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Editorial Layout — Shift Magazine',
      desc: 'Grid-first editorial with bold typographic rhythm and generous white space.',
      img: 'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Campaign Visuals — Nova',
      desc: 'High-contrast product renders and kinetic social assets.',
      img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Packaging System — Kuro',
      desc: 'Premium black-on-black foils with precise grid alignment.',
      img: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Poster Series — Mono/Shift',
      desc: 'Typographic posters exploring scale, weight, and hierarchy.',
      img: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Web Design — Grid Studio',
      desc: 'Minimal UI with motion micro-interactions and smooth scroll.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Projects</h2>
          <a href="#contact" className="text-emerald-400 hover:text-emerald-300 text-sm">Request a Quote →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm text-emerald-400 hover:text-emerald-300">View Case Study</button>
                  <button className="inline-flex items-center rounded-md bg-white text-black font-medium px-3 py-1.5 hover:bg-white/90 text-sm">Inquire</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
