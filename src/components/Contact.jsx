import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Mock submit for now
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Start a project</h2>
        <p className="mt-3 text-white/70 max-w-prose">Briefly describe what you need and I’ll reply within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <textarea required placeholder="Tell me about your project" rows="5" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <button className="inline-flex items-center justify-center rounded-md bg-emerald-500 text-black font-medium px-5 py-3 hover:bg-emerald-400 transition">Send</button>
          {status && <p className="text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
