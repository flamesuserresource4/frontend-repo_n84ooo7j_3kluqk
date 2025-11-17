export default function About() {
  return (
    <section id="about" className="relative bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Design with intent</h2>
          <p className="mt-4 text-white/70">
            I craft brand systems and visuals that help products communicate clearly. My approach blends strategy, typography, and restrained color to create memorable, modern experiences.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['Brand Identity', 'Web Design'],
              ['Editorial', 'Packaging'],
            ].map((col, i) => (
              <ul key={i} className="space-y-2">
                {col.map((item) => (
                  <li key={item} className="text-white/80 text-sm">{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              ['7+', 'Years Experience'],
              ['40+', 'Projects Delivered'],
              ['12', 'Awards & Features'],
            ].map(([num, label]) => (
              <div key={label} className="">
                <p className="text-3xl font-semibold text-white">{num}</p>
                <p className="text-xs text-white/60 mt-1">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Tools: Figma, Adobe Suite, Blender, Framer. Focused on clean systems that scale.
          </p>
        </div>
      </div>
    </section>
  )
}
