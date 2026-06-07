"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/Projects/Rampayan/Rampayan Flyover1.jpg",
  "/images/Projects/Rampayan/Rampayan Flyover2.jpg",
  "/images/Projects/Rampayan/29. Flyover Sulaman 30.06.2025.mp4_000133733.png",
];

const generalInfo = [
  { label: "Client", value: "JKR Sabah" },
  { label: "Location", value: "Rampayan, Kota Kinabalu, Sabah" },
  {
    label: "Project Type",
    value: "Flyover, road upgrades, and urban infrastructure",
  },
  {
    label: "Sector",
    value: "Roads, bridges, traffic, drainage, and civil infrastructure",
  },
  {
    label: "Scope",
    value:
      "Road upgrading and flyover infrastructure works at the Rampayan corridor, supporting improved traffic movement, junction performance, and connectivity along the Kota Kinabalu road network.",
  },
];

const keyFeatures = [
  {
    title: "Flyover infrastructure",
    description:
      "Elevated road infrastructure supporting grade-separated movement and improved traffic flow through the Rampayan corridor.",
  },
  {
    title: "Road corridor upgrade",
    description:
      "Road improvement works supporting safer, smoother, and more reliable movement for local and through traffic.",
  },
  {
    title: "Traffic and junction improvement",
    description:
      "Engineering support for improved junction operation, traffic distribution, and road user safety in a busy urban area.",
  },
  {
    title: "Civil infrastructure coordination",
    description:
      "Coordination of roadworks, drainage, utilities, and related infrastructure elements within an active public road environment.",
  },
];

const benefits = [
  {
    title: "Improved traffic flow",
    description:
      "Supports better movement through the Rampayan area by reducing conflict at key road and junction locations.",
  },
  {
    title: "Safer road operation",
    description:
      "Improves road geometry, traffic arrangement, and infrastructure serviceability for daily road users.",
  },
  {
    title: "Stronger city connectivity",
    description:
      "Enhances access between Rampayan, surrounding residential areas, UMS, Sepanggar, and the wider Kota Kinabalu road network.",
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
            src="/images/Projects/Rampayan/Rampayan Flyover1.jpg"
            alt="Rampayan Flyover and Road Upgrades"
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
              Rampayan Flyover & Road Upgrades
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Flyover and road infrastructure works supporting improved traffic
              movement, grade-separated connectivity, and urban road performance
              in Kota Kinabalu.
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
                The Rampayan Flyover and Road Upgrades project forms part of the
                wider priority road improvement works supporting traffic movement,
                connectivity, and infrastructure performance along Kota Kinabalu's
                growing northern road corridor.
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
              Improving movement through the Rampayan corridor
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                Rampayan is part of a growing urban corridor serving movement
                between residential areas, UMS, Sepanggar, and the wider Kota
                Kinabalu road network.
              </p>

              <p>
                The project supports improved road capacity and junction operation
                through flyover and road upgrade works, helping reduce traffic
                conflict and improve long-term corridor performance.
              </p>

              <p>
                Perdana Jurutera Perunding's involvement reflects the company's
                capability in road infrastructure, bridge and flyover works,
                traffic planning, drainage coordination, and practical engineering
                support for public infrastructure projects in Sabah.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/Rampayan/Rampayan Flyover2.jpg"
                alt="Rampayan flyover and road infrastructure"
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
                alt="Rampayan flyover and road upgrade project gallery"
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
                    alt=""
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-600">
                Location
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Rampayan, Kota Kinabalu
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                The project is located around the Rampayan corridor in Kota
                Kinabalu, Sabah, supporting road connectivity between surrounding
                urban and residential areas.
              </p>

              <a
                href="https://www.google.com/maps?q=Rampayan,Kota+Kinabalu,Sabah,Malaysia"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100">
              <iframe
                src="https://www.google.com/maps?q=Rampayan,Kota+Kinabalu,Sabah,Malaysia&z=15&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rampayan Kota Kinabalu project location map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
