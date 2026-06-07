"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/Projects/Indah permai/IP1.jpg",
  "/images/Projects/Indah permai/IP2.jpg",
  "/images/Projects/Indah permai/IP3.jpg",
];

const generalInfo = [
  { label: "Client", value: "JKR Sabah" },
  { label: "Location", value: "Jalan Indah Permai, Kota Kinabalu, Sabah" },
  {
    label: "Project Type",
    value: "Flyover, viaduct, and road infrastructure",
  },
  {
    label: "Sector",
    value: "Bridges, roads, transport, and structural engineering",
  },
  {
    label: "Scope",
    value:
      "Engineering support for flyover and viaduct infrastructure along Jalan Indah Permai, including bridge structure, road connectivity, and associated civil works.",
  },
];

const keyFeatures = [
  {
    title: "Flyover and viaduct works",
    description:
      "Road and bridge infrastructure supporting grade-separated movement along the Jalan Indah Permai corridor.",
  },
  {
    title: "Segmental bridge engineering",
    description:
      "Structural engineering input for elevated bridge and viaduct elements, including staged construction considerations.",
  },
  {
    title: "Urban road connectivity",
    description:
      "Improves movement between surrounding residential, commercial, and road network areas in Kota Kinabalu.",
  },
  {
    title: "Civil infrastructure coordination",
    description:
      "Coordination of roadworks, drainage, bridge structures, and related infrastructure within an active urban corridor.",
  },
];

const benefits = [
  {
    title: "Improved traffic flow",
    description:
      "Supports smoother movement through a busy urban road corridor and helps reduce conflict at key junction areas.",
  },
  {
    title: "Better road network capacity",
    description:
      "Strengthens the surrounding road network by improving connectivity and long-term infrastructure performance.",
  },
  {
    title: "Enhanced public infrastructure",
    description:
      "Provides lasting transport infrastructure value for road users, nearby communities, and future urban development.",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] w-full">
          <Image
            src="/images/Projects/Indah permai/IP1.jpg"
            alt="Jalan Indah Permai flyover and viaduct project"
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
              Jalan Indah Permai Flyover & Viaduct
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Flyover, viaduct, and road infrastructure works supporting
              improved traffic movement and connectivity in Kota Kinabalu.
            </p>
          </div>
        </div>
      </section>

      {/* GENERAL INFORMATION */}
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
                The Jalan Indah Permai project forms part of Sabah&apos;s urban
                road and bridge infrastructure improvements, supporting better
                connectivity, safer movement, and improved transport capacity.
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

      {/* PROJECT STORY */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
              Project Story
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Improving connectivity through Jalan Indah Permai
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                Jalan Indah Permai is an important urban corridor serving
                residential, commercial, and surrounding road network movement in
                Kota Kinabalu.
              </p>

              <p>
                The project involved flyover and viaduct infrastructure to
                improve traffic flow, increase road network capacity, and support
                safer movement through the corridor.
              </p>

              <p>
                Perdana Jurutera Perunding&apos;s involvement reflects the
                company&apos;s capability in bridge engineering, road
                infrastructure, structural coordination, and practical civil
                engineering delivery for Sabah&apos;s transport network.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/Indah permai/IP2.jpg"
                alt="Jalan Indah Permai bridge infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
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

      {/* BENEFITS */}
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

      {/* GALLERY */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
            Gallery
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Project images
          </h2>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-[520px] bg-zinc-100">
              <Image
                src={galleryImages[index]}
                alt="Jalan Indah Permai project gallery"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-3">
              {galleryImages.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setIndex(imageIndex)}
                  className={`relative h-32 overflow-hidden rounded-xl border ${
                    index === imageIndex
                      ? "border-red-600"
                      : "border-zinc-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Jalan Indah Permai project visual ${imageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-zinc-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
                Location
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Jalan Indah Permai, Kota Kinabalu
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                The project is located around the Jalan Indah Permai corridor in
                Kota Kinabalu, Sabah. The map below provides a general location
                reference.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps?q=Jalan+Indah+Permai,Kota+Kinabalu,Sabah,Malaysia"
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
                src="https://www.google.com/maps?q=Jalan+Indah+Permai,Kota+Kinabalu,Sabah,Malaysia&z=15&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jalan Indah Permai Kota Kinabalu map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-200 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-600">
              Enquiry
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Speak with us about bridge and road infrastructure capability
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