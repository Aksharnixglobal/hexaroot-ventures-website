import './globals.css'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-cyan-400 text-lg font-black text-slate-950 shadow-glow">
            H
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">Hexaroot</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Ventures</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-brand-400/50 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-100 transition hover:border-brand-300 hover:bg-brand-500/20"
        >
          Book a Call
        </a>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.14),transparent_18%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pb-28 lg:pt-20">
          <div>
            <span className="inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
              Growth Capital • Product Strategy • Digital Build
            </span>

            <h1 className="mt-8 max-w-xl text-5xl font-black tracking-[-0.06em] text-white md:text-6xl">
              We turn bold ideas into scalable businesses.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Hexaroot Ventures partners with founders and visionaries to build, launch, and grow companies that create lasting value across technology, digital products, and emerging markets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-brand-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Start a Venture
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
              >
                View Portfolio
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <p className="text-3xl font-black text-white">12+</p>
                <p>active investments</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">$20M+</p>
                <p>capital deployed</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">4.8x</p>
                <p>average portfolio growth</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-5 shadow-2xl shadow-brand-500/10 backdrop-blur-sm">
              <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Dashboard</p>
                    <p className="mt-1 text-xl font-bold text-white">Growth Overview</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
                    +24.8%
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Revenue Momentum</span>
                      <span className="font-semibold text-brand-300">High</span>
                    </div>
                    <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="w-[76%] rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-sm text-slate-400">Pipeline</p>
                      <p className="mt-2 text-3xl font-black text-white">$3.2M</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                      <p className="text-sm text-slate-400">Launches</p>
                      <p className="mt-2 text-3xl font-black text-white">18</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-brand-500/20 to-cyan-500/10 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-300">Next milestone</p>
                        <p className="mt-1 text-xl font-bold text-white">Series A readiness</p>
                      </div>
                      <div className="text-2xl">🚀</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">About us</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">We build ventures with clarity, conviction, and execution.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Hexaroot Ventures was formed to bridge the gap between disruptive ideas and investor-ready execution. We support founders, operators, and visionary teams through strategy, product development, go-to-market planning, and capital support.
            </p>
            <p>
              Our focus is not just funding — it is building durable digital businesses that can scale with resilience, insight, and momentum.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">What we do</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Services designed for venture creation and growth.</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Venture Building', 'From concept validation to launch planning, we turn ideas into actionable business models.'],
              ['Product Strategy', 'We define product direction, roadmap prioritization, and customer-led growth thinking.'],
              ['Brand & Digital', 'Positioning, messaging, design systems, and compelling digital experiences that convert.'],
              ['Growth Capital', 'We help founders align with the right capital path and investor narrative.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-cyan-400/20 text-xl">
                  ✦
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Portfolio focus</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Where we create value.</h2>
          </div>
          <a href="#contact" className="text-sm font-medium text-brand-200 transition hover:text-brand-100">
            Discuss partnership →
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ['Fintech & Payments', 'Digital infrastructure and growth systems for next-generation finance experiences.'],
            ['AI & SaaS', 'Operational tooling and intelligent platforms built for modern business velocity.'],
            ['Digital Commerce', 'Customer acquisitions, conversion funnels, and scalable online ecosystems.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="mb-5 h-48 rounded-2xl bg-[linear-gradient(135deg,#1d4ed8,#0f172a,#22d3ee)]" />
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-slate-900/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Our process</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">A disciplined path from opportunity to impact.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Discover', 'We assess market potential, founder fit, and the opportunity for meaningful building.'],
              ['02', 'Design', 'We shape the product and business model around market demand, traction, and focus.'],
              ['03', 'Scale', 'We support operational execution, go-to-market systems, and capital strategy.'],
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">{step}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="rounded-[2rem] border border-brand-500/30 bg-gradient-to-r from-brand-500/10 via-slate-900 to-cyan-500/10 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">Let’s build</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Start the next chapter of your venture.</h2>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
              <p className="text-sm text-slate-400">Connect with us</p>
              <a href="mailto:hello@hexarootventures.com" className="mt-3 block text-2xl font-bold text-white">
                hello@hexarootventures.com
              </a>
              <a
                href="mailto:hello@hexarootventures.com"
                className="mt-6 inline-flex rounded-full bg-gradient-to-r from-brand-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Book a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row lg:px-12">
          <p>© 2026 Hexaroot Ventures. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="transition hover:text-slate-200">About</a>
            <a href="#services" className="transition hover:text-slate-200">Services</a>
            <a href="#contact" className="transition hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
