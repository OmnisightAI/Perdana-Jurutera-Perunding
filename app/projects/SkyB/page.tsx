"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/Projects/Tun Fuad Stephens/TFS1.jpg",
  "/images/Projects/Tun Fuad Stephens/TFS2.jpg",
  "/images/Projects/Tun Fuad Stephens/TFS3.jpg",
];

const generalInfo = [
  { label: "Client", value: "JKR Sabah" },
  { label: "Location", value: "Kota Kinabalu, Sabah" },
  {
    label: "Project Type",
    value: "Priority road upgrade and urban infrastructure",
  },
  { label: "Sector", value: "Roads, traffic, drainage, and civil infrastructure" },
  {
    label: "Scope",
    value:
      "Road upgrading and infrastructure improvement works along Jalan Tun Fuad Stephens, supporting traffic movement and urban connectivity.",
  },
];

const keyFeatures = [
  {
    title: "Priority road corridor",
    description:
      "Infrastructure improvement works along a key urban route serving Kota Kinabalu’s coastal and city movement network.",
  },
  {
    title: "Traffic movement improvement",
    description:
      "Road planning and engineering works to support smoother traffic flow, improved junction performance, and safer road operation.",
  },
  {
    title: "Civil infrastructure coordination",
    description:
      "Coordination of roadworks, drainage, utilities, and related civil infrastructure elements within an active urban environment.",
  },
  {
    title: "Urban connectivity",
    description:
      "Supports improved access between major city areas, waterfront zones, commercial districts, and surrounding road networks.",
  },
];

const benefits = [
  {
    title: "Reduced congestion",
    description:
      "Supports improved road capacity and better traffic distribution along a major urban corridor.",
  },
  {
    title: "Better public infrastructure",
    description:
      "Contributes to long-term road network improvement and public infrastructure serviceability.",
  },
  {
    title: "Improved city access",
    description:
      "Enhances connectivity for road users travelling through Kota Kinabalu’s key urban and coastal areas.",
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
            src="/images/Projects/Tun Fuad Stephens/TFS1.jpg"
            alt="Jalan Tun Fuad Stephens Priority Roads"
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
              Priority Roads: Jalan Tun Fuad Stephens
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Road upgrading and civil infrastructure improvement works along one
              of Kota Kinabalu&apos;s key urban corridors.
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
                The Jalan Tun Fuad Stephens priority road project supports
                improved traffic movement, civil infrastructure performance, and
                connectivity through a major urban corridor in Kota Kinabalu.
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
              Strengthening a key Kota Kinabalu road corridor
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                Jalan Tun Fuad Stephens is one of Kota Kinabalu&apos;s important
                urban routes, serving traffic movement between city, commercial,
                waterfront, and surrounding development areas.
              </p>

              <p>
                The project involved priority road improvement and civil
                infrastructure works to support safer, smoother, and more
                reliable movement through the corridor.
              </p>

              <p>
                Perdana Jurutera Perunding&apos;s involvement reflects the
                company&apos;s capability in road infrastructure, traffic
                planning, drainage coordination, and practical engineering
                support for public infrastructure projects in Sabah.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/Tun Fuad Stephens/TFS2.jpg"
                alt="Jalan Tun Fuad Stephens road infrastructure"
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
                alt="Jalan Tun Fuad Stephens project gallery"
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
                Jalan Tun Fuad Stephens, Kota Kinabalu
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                The project is located along Jalan Tun Fuad Stephens in Kota
                Kinabalu, Sabah.
              </p>

              <a
                href="https://www.google.com/maps?q=Jalan+Tun+Fuad+Stephens,Kota+Kinabalu,Sabah,Malaysia"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100">
              <iframe
                src="https://www.google.com/maps?q=Jalan+Tun+Fuad+Stephens,Kota+Kinabalu,Sabah,Malaysia&z=15&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jalan Tun Fuad Stephens project location map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}