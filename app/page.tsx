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

const expertiseBranches = [
  {
    title: "Bridges",
    href: "/projects/Bridge",
    icon: "/images/Icons/gt/bridge.svg",
  },
  {
    title: "Civil Engineering",
    href: "/projects/infrastructure-projects",
    icon: "/images/Icons/gt/Road.svg",
  },
  {
    title: "Structural Engineering",
    href: "/projects/Bridge",
    icon: "/images/Icons/gt/Structures.svg",
  },
  {
    title: "Traffic & Transport Planning",
    href: "/projects/master-plan",
    icon: "/images/Icons/gt/Traffic.svg",
  },
  {
    title: "Water Infrastructure",
    href: "/projects/infrastructure-projects",
    icon: "/images/Icons/gt/Water.svg",
  },
  {
    title: "Geotechnical",
    href: "/projects/infrastructure-projects",
    icon: "/images/Icons/gt/Geotech.svg",
  },
  {
    title: "Digital Engineering",
    href: "/projects/digital-smart-infrastructure",
    icon: "/images/Icons/gt/Digital.svg",
  },
  {
    title: "Construction Engineering",
    href: "/projects/infrastructure-projects",
    icon: "/images/Icons/gt/construction2.svg",
  },
  {
    title: "Materials & Durability",
    href: "/projects/infrastructure-projects",
    icon: "/images/Icons/gt/Materials.svg",
  },
];

const selectedProjects = [
  {
    title: "Jalan UMS & Sepanggar Priority Roads",
    href: "/projects/ums-sepanggar",
    image: "/images/Projects/UMS/UMS22.png",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    title: "Rampayan Flyover & Road Upgrades",
    href: "/projects/Rampayan",
    image: "/images/Projects/Rampayan/Rampayan Flyover1.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Kingfisher Overpass & Road Upgrades",
    href: "/projects/KingF",
    image: "/images/Projects/Kingfisher/Kingfisher Flyover.png",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Jalan Donggongon Infrastructure Upgrades",
    href: "/projects/jalan-donggongon",
    image: "/images/Projects/Donggongon/Artis Impression/D3.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Sabah Road Development Plan ORIS",
    href: "/projects/oris",
    image: "/images/Projects/Digital/Oris/Oris3.png",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Apas Balung Rural Water Supply",
    href: "/projects/apas-balung",
    image: "/images/Projects/Infrastructure/BALB Apas.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
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

      {/* TRUSTED COMPANY CYCLE */}
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

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="border-t border-zinc-200 bg-[#eef3f5] py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Engineering Excellence
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
            Our Expertise
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Working closely with clients and stakeholders, we deliver practical
            engineering solutions across transport, bridges, civil
            infrastructure, water assets, digital systems, and more.
          </p>

          <div className="mt-16 grid gap-x-20 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseBranches.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md border border-zinc-300 bg-white transition group-hover:border-red-500">
                  <Image
                    src={item.icon}
                    alt=""
                    width={34}
                    height={34}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <span className="text-base font-medium text-zinc-700 transition group-hover:text-red-600">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
              Selected Projects
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Our Projects
            </h2>
          </div>

          <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-6 md:auto-rows-[190px]">
            {selectedProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                aria-label={project.title}
                className={`group relative overflow-hidden rounded-xl bg-zinc-200 ${project.className}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/projects/infrastructure-projects"
              className="inline-flex rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-red-600 hover:text-red-600"
            >
              View all projects
            </a>
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
