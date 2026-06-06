import Image from "next/image";

const trustedClients = [
  "JKR Sabah",
  "DBKK",
  "JKR Malaysia",
  "Jabatan Air Sabah",
  "KPLB",
  "Universiti Malaysia Sabah",
  "SEDIA",
  "Ministry of Education Malaysia",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HERO VIDEO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/Videos/Broll.mp4" type="video/mp4" />
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
              Trusted across public and private sector infrastructure projects
              in Sabah.
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

      {/* ABOUT */}
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
                {[
                  {
                    year: "1994",
                    title: "Firm established",
                    text: "Perdana Jurutera Perunding was established in Sabah and began building its consulting foundation in civil and infrastructure engineering.",
                  },
                  {
                    year: "2000s",
                    title:
                      "Expansion into public infrastructure and transport work",
                    text: "The practice expanded its delivery across transport studies, roadworks, drainage, water supply, and public sector infrastructure support.",
                  },
                  {
                    year: "2010s",
                    title:
                      "Major roads, structures, and urban engineering support",
                    text: "The firm contributed to larger-scale infrastructure, traffic, civil, and structural projects across Sabah, supporting both public and private developments.",
                  },
                  {
                    year: "2020s",
                    title:
                      "Digital systems and state-level infrastructure planning",
                    text: "Recent work includes digital infrastructure systems, ORIS, and data-supported planning capability alongside continued engineering delivery across Sabah.",
                  },
                ].map((item, index) => (
                  <div key={item.year} className="relative pl-8">
                    <div
                      className={`absolute left-0 top-2 w-px bg-zinc-300 ${
                        index === 3 ? "h-8" : "h-full"
                      }`}
                    />
                    <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-red-600" />

                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {item.year}
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 leading-7 text-zinc-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANY CYCLE - NOW AFTER ABOUT */}
      <section className="border-y border-zinc-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Trusted by public and institutional clients
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-logo-scroll items-center gap-6">
              {[...trustedClients, ...trustedClients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-zinc-600 transition hover:border-red-200 hover:text-red-600"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Services
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Core engineering services shaped by real project delivery.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Traffic Engineering & Transport Planning",
                text: "Traffic impact studies, transport planning, junction assessment, and road network analysis for public and private developments.",
              },
              {
                title: "Civil & Structural Engineering",
                text: "Civil and structural design support for roads, drainage, water supply, buildings, and infrastructure works.",
              },
              {
                title: "Road Safety Audit & Design Review",
                text: "Road safety audit, design checking, technical review, and engineering assessment to support practical and compliant delivery.",
              },
              {
                title: "Infrastructure Planning & Supervision",
                text: "Infrastructure planning, project coordination, supervision, and consulting support across multidisciplinary developments.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-zinc-200 p-8"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
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
                  src="/images/Projects/Digital/Oris/Oris3.png"
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
                    src="/images/Projects/UMS/UMS7.png"
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
                    Explore infrastructure
                  </p>
                </div>
              </a>

              <a
                href="/projects/master-plan"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/Traffic/KK CBD.jpg"
                    alt="Master planning and traffic studies"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Master Planning &amp; Traffic Studies
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Strategic transport studies, traffic impact assessments, and
                    urban transport planning.
                  </p>

                  <p className="mt-6 text-sm font-medium text-red-600">
                    Explore planning
                  </p>
                </div>
              </a>

              <a
                href="/projects/infrastructure-projects"
                className="group overflow-hidden rounded-[2rem] bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-56 overflow-hidden bg-zinc-200">
                  <Image
                    src="/images/Projects/Infrastructure/BALB Apas.jpg"
                    alt="Water supply and civil infrastructure"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Water &amp; Civil Infrastructure
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Water supply, drainage, reservoirs, pipe bridges, and civil
                    infrastructure support.
                  </p>

                  <p className="mt-6 text-sm font-medium text-red-600">
                    Explore civil works
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-12">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-300">
              Contact
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Speak with us about your infrastructure project.
            </h2>

            <div className="mt-10 grid gap-8 text-white/80 md:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                  Office
                </p>
                <p className="mt-3 leading-7">
                  3rd Floor, Lot 34 &amp; 35, Block E, Damai Plaza Phase 4,
                  88300 Kota Kinabalu, Sabah, Malaysia.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                  Phone
                </p>
                <p className="mt-3">+60 88 261 873</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                  Email
                </p>
                <p className="mt-3">pjpkksabah@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}