import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center">
            <Image
              src="/images/Logo/PJP Logo 2.png"
              alt="Perdana Jurutera Perunding logo"
              width={300}
              height={120}
              className="h-20 w-auto object-contain md:h-24"
              priority
            />
          </a>

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

      <section className="flex min-h-[78vh] items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-green-700">
              Established 1994 · Sabah, Malaysia
            </p>

            <h1 className="max-w-[10ch] text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Proven infrastructure and civil engineering for Sabah.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Delivering infrastructure and civil engineering across Sabah. From
              traffic and transport studies to structural design, drainage, and
              construction supervision, we focus on buildability, clarity, and
              long-term performance.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Trusted across public and private sector infrastructure projects in
              Sabah.
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

          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-black/10 shadow-sm lg:max-w-2xl xl:max-w-[52rem]">
              <Image
                src="/images/Tun Fuad2.png"
                alt="Perdana Jurutera Perunding engineering project"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
                About
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Engineering consulting grounded in real project delivery.
              </h2>
            </div>

            <div className="text-lg leading-8 text-zinc-600">
              <p>
                Perdana Jurutera Perunding is an engineering consulting practice with
                experience across traffic engineering, infrastructure planning, civil
                and structural design, drainage, water supply, and project supervision.
                Established in 1994, the firm has supported public and private sector
                developments across Sabah with a practical focus on buildability,
                coordination, and long-term project performance.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-zinc-200 pt-12">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
              Our History
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
                  Three decades of infrastructure, transport, and engineering delivery in Sabah.
                </h3>
              </div>

              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-700" />
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    1994
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Firm established
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-600">
                    Perdana Jurutera Perunding was established in Sabah and began building its consulting foundation in civil and infrastructure engineering.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-700" />
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2000s
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Expansion into public infrastructure and transport work
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-600">
                    The practice expanded its delivery across transport studies, roadworks, drainage, water supply, and public sector infrastructure support.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-700" />
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2010s
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Major roads, structures, and urban engineering support
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-600">
                    The firm contributed to larger-scale infrastructure, traffic, civil, and structural projects across Sabah, supporting both public and private developments.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-8 w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-green-700" />
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2020s
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Digital systems and state-level infrastructure planning
                  </h4>
                  <p className="mt-2 leading-7 text-zinc-600">
                    Recent work includes digital infrastructure systems, ORIS, and data-supported planning capability alongside continued engineering delivery across Sabah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-700">
            Services
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Core engineering services shaped by real project delivery.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">
                Traffic Engineering &amp; Transport Planning
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Traffic impact studies, transport planning, junction
                assessment, and road network analysis for public and private
                developments.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">
                Civil &amp; Structural Engineering
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Civil and structural design support for roads, drainage, water
                supply, buildings, and infrastructure works.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">
                Road Safety Audit &amp; Design Review
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Road safety audit, design checking, technical review, and
                engineering assessment to support practical and compliant
                delivery.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 p-8">
              <h3 className="text-xl font-semibold">
                Infrastructure Planning &amp; Supervision
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Infrastructure planning, project coordination, supervision, and
                consulting support across multidisciplinary developments.
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
            Explore our work across key engineering sectors in Sabah.
          </h2>

          <div className="mt-14 grid gap-6">
            <a
              href="#contact"
              className="group grid overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md md:grid-cols-2"
            >
              <div className="h-72 overflow-hidden bg-zinc-200 md:h-full">
                <Image
                  src="/images/Projects/Digital/Oris/Oris7.png"
                  alt="Digital infrastructure systems ORIS"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8">
                <h3 className="text-2xl font-semibold">
                  Digital &amp; Smart Infrastructure
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  Development of road asset systems, digital infrastructure
                  platforms, and data-driven tools supporting long-term planning
                  and network management across Sabah.
                </p>

                <p className="mt-6 text-sm font-medium text-green-700">
                  Explore digital capability
                </p>
              </div>
            </a>

            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="#contact"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/Infrastructure/Jalan Doggongon.jpg"
                    alt="Infrastructure projects"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Infrastructure Projects
                  </h3>
                  <p className="mt-2 text-zinc-600">
                    Roads, drainage, water supply, and major infrastructure
                    works across Sabah.
                  </p>
                </div>
              </a>

              <a
                href="#contact"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/Traffic/KK CBD.jpg"
                    alt="Traffic and transport"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Traffic &amp; Transport
                  </h3>
                  <p className="mt-2 text-zinc-600">
                    Traffic impact studies, transport planning, and road
                    network analysis.
                  </p>
                </div>
              </a>

              <a
                href="#contact"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/Structures/UMS3.jpg"
                    alt="Civil and structural engineering"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Civil &amp; Structural
                  </h3>
                  <p className="mt-2 text-zinc-600">
                    Civil and structural design, engineering coordination, and
                    supervision.
                  </p>
                </div>
              </a>
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