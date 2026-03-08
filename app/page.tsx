export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-semibold tracking-tight">
            Perdana Jurutera Perunding
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:opacity-60">
              About
            </a>
            <a href="#services" className="transition hover:opacity-60">
              Services
            </a>
            <a href="#projects" className="transition hover:opacity-60">
              Projects
            </a>
            <a href="#contact" className="transition hover:opacity-60">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="flex min-h-[88vh] items-center">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-green-700">
              Civil Engineering Consulting
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Practical engineering for resilient infrastructure.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Perdana Jurutera Perunding provides civil engineering consulting
              services for infrastructure, transport, structural, and project
              delivery needs with a focus on clarity, buildability, and
              long-term value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex h-[420px] w-full max-w-[520px] items-center justify-center rounded-[2rem] bg-zinc-100 text-zinc-400">
              Project image placeholder
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50 py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              A consulting firm built around practical delivery.
            </h2>
          </div>

          <div className="text-lg leading-8 text-zinc-600">
            <p>
              We support infrastructure and built-environment projects with
              engineering judgment, technical discipline, and a clear focus on
              buildable outcomes. Our work is grounded in sound design,
              coordination, and long-term project performance.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
            Services
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Focused engineering services for infrastructure and construction.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">Civil Engineering</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Site development, roadworks, drainage, earthworks, and
                infrastructure design support.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">Structural Coordination</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Practical coordination between design intent, constructability,
                and project delivery requirements.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">Project Support</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Technical review, QA processes, documentation, and consulting
                support during delivery.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">Sustainable Design</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Engineering decisions that consider efficiency, durability,
                resilience, and long-term infrastructure value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-zinc-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
            Projects
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Selected work and project experience.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="h-64 bg-zinc-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Infrastructure Project</h3>
                <p className="mt-2 text-zinc-600">
                  Transport and civil works
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="h-64 bg-zinc-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Bridge / Structural Work</h3>
                <p className="mt-2 text-zinc-600">
                  Engineering coordination and delivery
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="h-64 bg-zinc-200" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Consulting Engagement</h3>
                <p className="mt-2 text-zinc-600">
                  Technical review and project support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let’s discuss your next project.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Get in touch to discuss civil engineering consulting, project
            coordination, and infrastructure delivery support.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@perdana.com"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}