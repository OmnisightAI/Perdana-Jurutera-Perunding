import Image from "next/image";

const projects = [
  {
    title: "Jalan Donggongon Infrastructure Upgrades",
    href: "/projects/jalan-donggongon",
    image: "/images/Projects/Infrastructure/Jalan Doggongon.jpg",
    category: "Road & Bridge Infrastructure",
    description:
      "Major road and infrastructure upgrades supporting long-term connectivity, drainage performance, and public infrastructure delivery.",
  },
  {
    title: "Priority Roads: UMS & Sepanggar",
    href: "/projects/ums-sepanggar-priority-roads",
    image: "/images/Projects/Structures/UMS3.jpg",
    category: "Major Road & Flyover Infrastructure",
    description:
      "Upgrading of Jalan UMS and Jalan Sepanggar including multiple grade-separated junctions and segmental box girder flyover works.",
  },
  {
    title: "K.K. Traffic Improvement & Urban Transport Master Plan",
    href: "/projects/kk-cbd-master-plan",
    image: "/images/Projects/Traffic/KK CBD.jpg",
    category: "Urban Transport Master Planning",
    description:
      "Master plan and detailed design for Kota Kinabalu CBD traffic improvement and urban transport planning.",
  },
  {
    title: "Priority Roads: Jalan Tun Fuad Stephens",
    href: "/projects/tun-fuad-priority-roads",
    image: "/images/Projects/Infrastructure/Priority roads.jpg",
    category: "Urban Road Upgrade",
    description:
      "Upgrading of Jalan Tun Fuad Stephens including improvements to key junctions and urban road infrastructure.",
  },
  {
    title: "Kota Kinabalu Traffic Study Phase II (2016–2040)",
    href: "/projects/kk-traffic-study",
    image: "/images/Projects/Traffic/KKTS.jpg",
    category: "Traffic Study & Transport Planning",
    description:
      "Long-term traffic study for Kota Kinabalu involving junction surveys, roadside interviews, travel time surveys, and data coding.",
  },
  {
    title: "Priority Roads: Jalan Kolam–Minintod",
    href: "/projects/jalan-kolam-minintod",
    image: "/images/Projects/Infrastructure/Pr3.jpg",
    category: "Road & Flyover Infrastructure",
    description:
      "Upgrading of Jalan Kolam from Sunny Garden to Kg. Minintod including two flyovers.",
  },
  {
    title: "DBKK Skybridge & Pedestrian Linkage",
    href: "/projects/dbkk-skybridge",
    image: "/images/Projects/Structures/DBKK Skybridge.jpg",
    category: "Pedestrian & Urban Infrastructure",
    description:
      "Skybridge, pedestrian linkage, and traffic improvement works connecting Asia City and the Oceanus development area.",
  },
  {
    title: "Hospital Universiti Malaysia Sabah",
    href: "/projects/hospital-ums",
    image: "/images/Projects/Buildings/Hospital UMS.jpg",
    category: "Institutional Development Planning",
    description:
      "Traffic impact study and site planning for Hospital Universiti Malaysia Sabah development in Kota Kinabalu.",
  },
  {
    title: "Schools & Institutional Buildings",
    href: "/projects/schools-institutional",
    image: "/images/Projects/Buildings/SK Pendidikan Khas.jpg",
    category: "C&S Institutional Infrastructure",
    description:
      "Civil and structural engineering support for schools and institutional developments across Sabah.",
  },
  {
    title: "Projek Bekalan Air Luar Bandar Apas Balung",
    href:"/projects/balb-apas-balung",
    image: "/images/Projects/Infrastructure/BALB Apas.jpg",
    category: "Water Supply",
    description:
      "Rural water supply infrastructure including water treatment, reservoirs, pipe bridge, and booster pump station works in Tawau.",
  },
  {
    title: "Bekalan Air Luar Bandar Keranaan",
    href: "/projects/balb-keranaan",
    image: "/images/Projects/Infrastructure/waterKeranaan.jpg",
    category: "Rural Water Infrastructure",
    description:
      "Rural water supply system including mountain stream intake, raw water pipeline, pipe bridge, chlorination house, and HDPE storage tanks.",
  },
  {
    title: "Jalan Sook–Tulid–Sinua",
    href: "/projects/sook-tulid-sinua",
    image: "/images/Projects/Infrastructure/SookTulid.jpg",
    category: "Regional Road Infrastructure",
    description:
      "A 30.5 km JKR road project with bridge works, pile head construction, field density testing, and completed asphalt road sections.",
  },
  {
    title: "Jalan Bokara Batu Sapi Phase 2",
    href: "/projects/bokara-batu-sapi",
    image: "/images/Projects/Infrastructure/Bokara.jpg",
    category: "Dual Carriageway Roadworks",
    description:
      "A 4 km dual carriageway project in Sandakan supported by culvert works, soil consolidation, guniting wall, and slope repair works.",
  },
  {
    title: "Karamunsing Interchange System",
    href: "/projects/karamunsing-interchange",
    image: "/images/Projects/Traffic/Karamunsing.jpg",
    category: "Interchange & Road Network Planning",
    description:
      "Road network planning, design review, and road safety audit work for the Karamunsing Interchange System in Kota Kinabalu.",
  },
  {
    title: "Sapangar Bay Container Port Expansion",
    href: "/projects/sapangar-bay-port-expansion",
    image: "/images/Projects/Infrastructure/Sapangar.jpg",
    category: "Port & Traffic Infrastructure",
    description:
      "Traffic impact study and site planning for the Sapangar Bay container port expansion project.",
  },
  {
    title: "Drainage Improvement Works",
    href: "/projects/drainage-improvement-works",
    image: "/images/Projects/Infrastructure/Drainage.jpg",
    category: "Drainage & Stormwater Infrastructure",
    description:
      "Long-running drainage improvement portfolio including works in Tawau and Sandakan from the firm’s early project history.",
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
            Infrastructure Projects
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Roads, drainage, water supply, and major infrastructure works
            supporting practical delivery and long-term civil performance across
            Sabah.
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
              Roads
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Drainage
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Water Supply
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
              Explore infrastructure project work in more detail
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
              href="/projects/jalan-donggongon"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Flagship Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}