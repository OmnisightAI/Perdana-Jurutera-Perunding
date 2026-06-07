"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/Projects/UMS/UMS7.png",
  "/images/Projects/UMS/UMS2.jpg",
  "/images/Projects/UMS/UMS6.jpg",

];

const generalInfo = [
  { label: "Client", value: "JKR Sabah" },
  { label: "Location", value: "Kota Kinabalu, Sabah" },
  {
    label: "Project Type",
    value: "Major road upgrade and flyover infrastructure",
  },
  { label: "Year", value: "2017" },
  { label: "Sector", value: "Roads, bridges, and urban infrastructure" },
  {
    label: "Scope",
    value:
      "Upgrading of Jalan UMS and Jalan Sepanggar including grade-separated junctions and segmental box girder flyover works",
  },
];

const keyFeatures = [
  {
    title: "Grade-separated junctions",
    description:
      "Road infrastructure works involving multiple grade-separated intersections to improve traffic flow and network performance.",
  },
  {
    title: "Segmental box girder flyovers",
    description:
      "Flyover structures using segmental box girder forms, supporting longer spans and efficient elevated road construction.",
  },
  {
    title: "Major urban road upgrade",
    description:
      "Upgrade works along Jalan UMS and Jalan Sepanggar supporting higher traffic demand and improved connectivity.",
  },
  {
    title: "Civil and structural coordination",
    description:
      "Integrated road, bridge, drainage, and construction coordination across a complex urban infrastructure corridor.",
  },
];

const benefits = [
  {
    title: "Improved traffic movement",
    description:
      "Supports smoother vehicle flow through upgraded road geometry and grade-separated junction arrangements.",
  },
  {
    title: "Stronger urban connectivity",
    description:
      "Improves access between UMS, Sepanggar, Kingfisher, Rampayan, and surrounding Kota Kinabalu growth areas.",
  },
  {
    title: "Major infrastructure capability",
    description:
      "Demonstrates capability in large-scale road and flyover infrastructure involving structural and civil engineering coordination.",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] w-full">
          <Image
            src="/images/Projects/UMS/UMS7.png"
            alt="Jalan UMS and Sepanggar Priority Roads"
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
              Jalan UMS & Sepanggar Priority Roads
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Major road and flyover infrastructure works supporting upgraded
              traffic movement, grade-separated junctions, and improved urban
              connectivity in Kota Kinabalu.
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
                This project forms part of the Proposed Priority Roads Projects
                in Kota Kinabalu, involving the upgrading of Jalan UMS and Jalan
                Sepanggar with multiple grade-separated junctions and elevated
                road infrastructure.
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
              Delivering major road and flyover infrastructure
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                The Jalan UMS and Jalan Sepanggar priority roads project
                supports improved urban movement through road upgrading works,
                elevated infrastructure, and grade-separated junctions across a
                key transport corridor in Kota Kinabalu.
              </p>

              <p>
                The works include major junction improvements at Kingfisher,
                UMS, Rampayan, and Sepanggar, with flyover structures and
                segmental box girder infrastructure forming part of the broader
                road upgrade package.
              </p>

              <p>
                This project demonstrates Perdana Jurutera Perunding’s capability
                in road and bridge infrastructure, civil and structural
                coordination, and practical support for major public
                infrastructure delivery.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src="/images/Projects/UMS/UMS3.jpg"
                alt="UMS and Sepanggar flyover infrastructure"
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
                    alt={`UMS Sepanggar project visual ${i + 1}`}
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
                The project is located around the Jalan UMS and Jalan Sepanggar
                corridor in Kota Kinabalu, Sabah. The map below provides a
                general location reference.
              </p>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps?q=6.032408070814883, 116.12396053797805"
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
                src="https://www.google.com/maps?q=6.032408070814883, 116.12396053797805&z=17&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jalan UMS Kota Kinabalu map"
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
              Speak with us about road and flyover infrastructure capability
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