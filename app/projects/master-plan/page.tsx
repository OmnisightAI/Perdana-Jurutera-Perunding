"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/Projects/Traffic/KK CBD.jpg",
  "/images/Projects/Traffic/masterplan2.jpg",
  "/images/Projects/Traffic/kkt1.pdf",
];

const generalInfo = [
  { label: "Client", value: "DBKK Holdings Sdn Bhd" },
  { label: "Location", value: "Kota Kinabalu CBD, Sabah" },
  { label: "Project Type", value: "Urban transport master planning" },
  { label: "Year", value: "2015" },
  { label: "Sector", value: "Traffic, transport, and urban infrastructure" },
  {
    label: "Scope",
    value:
      "Master plan and detailed design for Kota Kinabalu CBD traffic improvement and urban transport planning",
  },
];

const keyFeatures = [
  {
    title: "Urban transport master planning",
    description:
      "Strategic planning for traffic movement, access, and transport improvement across the Kota Kinabalu CBD area.",
  },
  {
    title: "Traffic improvement strategy",
    description:
      "Development of improvement measures to support better circulation, road network performance, and urban accessibility.",
  },
  {
    title: "Detailed design support",
    description:
      "Engineering design inputs supporting the implementation of selected traffic and infrastructure improvement schemes.",
  },
  {
    title: "CBD network coordination",
    description:
      "Coordination of planning considerations across a dense urban road network with multiple land use and movement demands.",
  },
];

const benefits = [
  {
    title: "Improved city movement",
    description:
      "Supports better traffic circulation and transport planning within Kota Kinabalu’s central business district.",
  },
  {
    title: "Long-term planning clarity",
    description:
      "Provides a structured framework for future road and transport improvement works in the CBD.",
  },
  {
    title: "Urban infrastructure support",
    description:
      "Links transport planning, detailed design, and practical infrastructure delivery into one coordinated city improvement strategy.",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] w-full">
          <Image
            src="/images/Projects/Traffic/KK CBD.jpg"
            alt="Kota Kinabalu CBD traffic improvement and urban transport master plan"
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
              K.K. Traffic Improvement & Urban Transport Master Plan
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Master planning and detailed design for traffic improvement,
              transport movement, and urban infrastructure coordination across
              Kota Kinabalu’s central business district.
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
                The Kota Kinabalu CBD master plan supports traffic improvement,
                transport planning, and detailed design for one of Sabah’s most
                important urban centres.
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
              Planning better movement through Kota Kinabalu CBD
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                The K.K. Traffic Improvement and Urban Transport Master Plan
                provides a structured planning framework for improving traffic
                circulation, accessibility, and urban movement within the Kota
                Kinabalu central business district.
              </p>

              <p>
                The work combines master planning with detailed design support,
                helping translate broad transport objectives into practical
                traffic and infrastructure improvement schemes.
              </p>

              <p>
                This project demonstrates Perdana Jurutera Perunding’s capability
                in urban transport planning, traffic improvement strategy,
                network review, and engineering design coordination for complex
                city environments.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/Traffic/KK CBD.jpg"
                alt="Kota Kinabalu CBD master plan visual"
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
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Gallery
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Project visuals
          </h2>

          <div className="mt-10 overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(10% - ${index * 80}% - ${
                  index * 20
                }px))`,
              }}
            >
              {galleryImages.map((image, i) => (
                <div
                  key={i}
                  className="relative h-[460px] min-w-[80%] flex-shrink-0 overflow-hidden rounded-[2rem] bg-zinc-100"
                >
                  <Image
                    src={image}
                    alt={`Kota Kinabalu CBD master plan visual ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={
                      i === index
                        ? "font-semibold text-zinc-900"
                        : "text-zinc-400"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {i === index && <span className="h-px w-16 bg-red-600" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1
                  )
                }
                className="text-2xl text-red-600 transition hover:opacity-70"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === galleryImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="text-2xl text-red-600 transition hover:opacity-70"
                aria-label="Next image"
              >
                →
              </button>
            </div>
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
                The master plan relates to the Kota Kinabalu CBD area. The map
                below provides a general location reference.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps?q=5.977866479527974, 116.07506792310635"
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
                src="https://www.google.com/maps?q=5.977866479527974, 116.07506792310635&z=17&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kota Kinabalu CBD map"
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
              Speak with us about urban transport planning capability
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