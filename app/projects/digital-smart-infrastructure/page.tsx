import Image from "next/image";

const projects = [
  {
    title: "Sabah Road Development Plan (ORIS)",
    href: "/projects/oris",
    image: "/images/Projects/Digital/Oris/Oris3.png",
    category: "Flagship Project",
    description:
      "A digital road information and planning system supporting long-term infrastructure visibility, network planning, and more informed decision-making across Sabah.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Projects
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl">
            Digital & Smart Infrastructure
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Digital systems, GIS-supported planning, and information-led
            infrastructure capability supporting long-term road network
            visibility and more informed planning decisions across Sabah.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
              All
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Flagship
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              GIS
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Planning
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Digital Systems
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-72 overflow-hidden bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-red-600">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-600">
                    {project.description}
                  </p>

                  <p className="mt-6 text-sm font-medium text-zinc-900">
                    View project
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-600">
              Next Step
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Explore digital project work in more detail
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
            >
              Back to Home
            </a>
            <a
              href="/projects/oris"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View ORIS Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}