import Image from "next/image";

const projects = [
  {
    title: "Jalan Donggongon Infrastructure Upgrades",
    href: "/projects/jalan-donggongon",
    image: "/images/Projects/Donggongon/Artis Impression/D3.png",
    category: "Road & Bridge Infrastructure",
    description:
      "Major road and infrastructure upgrades supporting long-term connectivity, drainage performance, and public infrastructure delivery.",
  },
  {
    title: "Indah Permai Interchange & Road Upgrades",
    href: "/projects/Indah",
    image: "/images/Projects/Indah permai/Indah Permai Flyover.png",
    category: "Major Road & Flyover Infrastructure",
    description:
      "Upgrading of Jalan UMS and Jalan Sepanggar including multiple grade-separated junctions and segmental box girder flyover works.",
  },
  {
    title: "Kingfisher Overpass & Road Upgrades",
    href: "/projects/KingF",
    image: "/images/Projects/Kingfisher/Kingfisher Flyover.png",
    category: "Major Road & Flyover Infrastructure",
    description:
      "Road and overpass infrastructure supporting improved traffic movement, junction performance, and connectivity through the Kingfisher corridor.",
  },
  {
    title: "Rampayan Flyover & Road Upgrades",
    href: "/projects/Rampayan",
    image: "/images/Projects/Rampayan/Rampayan Flyover1.jpg",
    category: "Major Road & Flyover Infrastructure",
    description:
      "Flyover and road upgrading works supporting improved movement along the Jalan UMS and Jalan Sepanggar corridor.",
  },
  {
    title: "Priority Roads: UMS & Sepanggar",
    href: "/projects/ums-sepanggar",
    image: "/images/Projects/UMS/UMS22.png",
    category: "Major Road & Flyover Infrastructure",
    description:
      "Upgrading of Jalan UMS and Jalan Sepanggar including grade-separated junctions and elevated road infrastructure.",
  },
  {
    title: "Priority Roads: Jalan Kolam–Minintod",
    href: "/projects/Kolam",
    image: "/images/Projects/Kolam/Kolam.jpg",
    category: "Road & Flyover Infrastructure",
    description:
      "Upgrading of Jalan Kolam from Sunny Garden to Kg. Minintod including two flyovers.",
  },
  {
    title: "Priority Roads: Jalan Tun Fuad Stephens",
    href: "/projects/TFS",
    image: "/images/Projects/TunFuad/tJCiw.jpg",
    category: "Urban Road Upgrade",
    description:
      "Upgrading of Jalan Tun Fuad Stephens including improvements to key junctions and urban road infrastructure.",
  },
  {
    title: "DBKK Skybridge & Pedestrian Linkage",
    href: "/projects/SkyB",
    image: "/images/Projects/Sky/Sky2.jpg",
    category: "Pedestrian & Urban Infrastructure",
    description:
      "Skybridge, pedestrian linkage, and traffic improvement works connecting Asia City and the Oceanus development area.",
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
            Bridge Projects
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Bridge, flyover, road, and elevated infrastructure works supporting
            practical delivery and long-term transport performance across Sabah.
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
              Flyovers
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Roads
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Urban Infrastructure
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
    </main>
  );
}
