import Image from "next/image";

const generalInfo = [
  { label: "Location", value: "Sabah, Malaysia" },
  { label: "Project Type", value: "Road and infrastructure upgrade works" },
  { label: "Sector", value: "Civil infrastructure" },
  { label: "Stage", value: "Infrastructure delivery and upgrade support" },
  { label: "Focus", value: "Roadworks, drainage, and infrastructure coordination" },
  { label: "Capability", value: "Practical infrastructure delivery and civil support" },
];

const keyFeatures = [
  {
    title: "Road upgrade works",
    description:
      "Infrastructure works supporting improved road performance, access, and network functionality.",
  },
  {
    title: "Drainage integration",
    description:
      "Coordination of drainage considerations to support long-term infrastructure performance and constructability.",
  },
  {
    title: "Civil delivery support",
    description:
      "Practical coordination of infrastructure inputs, engineering support, and implementation-focused planning.",
  },
  {
    title: "Public infrastructure focus",
    description:
      "Delivery aligned with the operational and long-term needs of public infrastructure and urban development.",
  },
];

const benefits = [
  {
    title: "Improved infrastructure performance",
    description:
      "Supports more reliable, functional, and buildable public infrastructure outcomes.",
  },
  {
    title: "Better delivery coordination",
    description:
      "Helps align planning, civil requirements, and practical implementation considerations.",
  },
  {
    title: "Long-term civil value",
    description:
      "Strengthens the durability, usefulness, and planning quality of infrastructure works over time.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] w-full">
          <Image
            src="/images/Projects/Infrastructure/Jalan Doggongon.jpg"
            alt="Jalan Donggongon infrastructure project"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:pb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-white/80">
              Project
            </p>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Jalan Donggongon Infrastructure Upgrades
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Road and supporting infrastructure works contributing to stronger
              civil performance, improved connectivity, and more practical
              delivery outcomes across Sabah.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
                General Information
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Project information at a glance
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                This project represents practical civil infrastructure work with
                a focus on road function, supporting systems, and coordinated
                delivery.
              </p>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 md:p-10">
              <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                {generalInfo.map((item) => (
                  <div key={item.label} className="border-b border-zinc-200 pb-4">
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    <p className="mt-2 font-medium leading-7 text-zinc-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
              Project Story
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Supporting practical road and infrastructure delivery
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                The Jalan Donggongon infrastructure works reflect a practical
                civil delivery focus, combining road upgrade needs with
                supporting infrastructure considerations that improve function,
                access, and long-term performance.
              </p>

              <p>
                Projects of this nature require coordination across roadworks,
                drainage, and general civil requirements so that infrastructure
                outcomes are not only compliant, but also buildable and durable
                in practice.
              </p>

              <p>
                This project demonstrates Perdana Jurutera Perunding’s ability
                to support infrastructure delivery with engineering clarity,
                practical coordination, and an emphasis on real-world project
                execution.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/Infrastructure/Jalan Doggongon.jpg"
                alt="Infrastructure project visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Key Features
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Core project features
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Benefits
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Project value
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.75rem] border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
                Location
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Project location
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                This project is presented as part of Perdana Jurutera
                Perunding’s broader infrastructure portfolio in Sabah. The map
                below provides a general location reference.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/place/Sabah,+Malaysia/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
              <iframe
                src="https://www.google.com/maps?q=Sabah,Malaysia&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sabah map"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-600">
              Enquiry
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Speak with us about infrastructure delivery capability
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects/infrastructure-projects"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
            >
              Back to Infrastructure Projects
            </a>
            <a
              href="/#contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}