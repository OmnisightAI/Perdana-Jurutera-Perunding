import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative min-h-[85vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-red-300">
              Established 1994 · Sabah, Malaysia
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Proven infrastructure and civil engineering for Sabah.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Delivering infrastructure and civil engineering across Sabah. From
              traffic and transport studies to structural design, drainage, and
              construction supervision, we focus on buildability, clarity, and
              long-term performance.
            </p>

            <p className="mt-4 text-sm text-white/70">
              Trusted across public and private sector infrastructure projects in
              Sabah.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-zinc-200 bg-zinc-50 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-20 text-4xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            Not Every Project.
            <br />
            The Right Projects.
          </h2>

          <div className="grid gap-16 md:grid-cols-2">
            <div className="space-y-8 text-lg leading-8 text-zinc-800">
              <p>
                Perdana Jurutera Perunding is a Sabah-based engineering
                consultancy delivering{" "}
                <strong className="font-semibold text-zinc-950">
                  roads, bridges, water infrastructure, traffic solutions
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-zinc-950">
                  digital asset systems.
                </strong>
              </p>

              <p>
                Our goal is to bring{" "}
                <strong className="font-semibold text-zinc-950">
                  technical excellence and progressive thinking
                </strong>{" "}
                to infrastructure that strengthens connectivity, improves
                quality of life, and supports Sabah&apos;s future growth.
              </p>
            </div>

            <div className="space-y-20 text-lg leading-8 text-zinc-800">
              <p>
                We take on complex projects where our experience can create
                meaningful impact. By choosing the right opportunities, we focus
                our expertise on{" "}
                <strong className="font-semibold text-zinc-950">
                  the right challenges, the right partnerships, and the right
                  solutions for Sabah.
                </strong>
              </p>

              <a
                href="/purpose"
                className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-950 transition hover:text-red-600"
              >
                <span className="text-2xl font-light text-red-600">→</span>
                Our Purpose
              </a>
            </div>
          </div>

          <div className="mt-20 border-t border-zinc-200 pt-12">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
              Our History
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
                  Three decades of infrastructure, transport, and engineering
                  delivery in Sabah.
                </h3>
              </div>

              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-red-600" />

                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    1994
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Firm established
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-600">
                    Perdana Jurutera Perunding was established in Sabah and
                    began building its consulting foundation in civil and
                    infrastructure engineering.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-red-600" />

                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2000s
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Expansion into public infrastructure and transport work
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-600">
                    The practice expanded its delivery across transport studies,
                    roadworks, drainage, water supply, and public sector
                    infrastructure support.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-full w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-red-600" />

                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2010s
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Major roads, structures, and urban engineering support
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-600">
                    The firm contributed to larger-scale infrastructure, traffic,
                    civil, and structural projects across Sabah, supporting both
                    public and private developments.
                  </p>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-0 top-2 h-8 w-px bg-zinc-300" />
                  <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-red-600" />

                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    2020s
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                    Digital systems and state-level infrastructure planning
                  </h4>

                  <p className="mt-2 leading-7 text-zinc-600">
                    Recent work includes digital infrastructure systems, ORIS,
                    and data-supported planning capability alongside continued
                    engineering delivery across Sabah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
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
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Projects
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Explore our work across key engineering sectors in Sabah.
          </h2>

          <div className="mt-14 grid gap-6">
            <a
              href="/projects/digital-smart-infrastructure"
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

                <p className="mt-6 text-sm font-medium text-red-600">
                  Explore digital capability
                </p>
              </div>
            </a>

            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="/projects/infrastructure-projects"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/UMS/UMS1.jpg"
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

                  <p className="mt-6 text-sm font-medium text-red-600">
                    Explore infrastructure capability
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
                    Master plan studies, traffic impact studies, transport
                    planning, and road network analysis.
                  </p>

                  <p className="mt-6 text-sm font-medium text-red-600">
                    Explore traffic &amp; transport capability
                  </p>
                </div>
              </a>

              <a
                href="#contact"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/UMS/UMS4.jpg"
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

                  <p className="mt-6 text-sm font-medium text-red-600">
                    Explore civil &amp; structural capability
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Contact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s discuss your next project.
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