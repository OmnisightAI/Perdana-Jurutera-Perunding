import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-zinc-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Digital & Smart Infrastructure
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600">
            Digital systems, road asset platforms, and data-driven tools
            supporting long-term infrastructure planning across Sabah.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold">Flagship Project</h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src="/images/Projects/Digital/Oris/Oris7.png"
                alt="ORIS system"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Sabah Road Development Plan (ORIS)
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                A digital road information and planning system supporting
                state-level infrastructure planning and long-term network
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
