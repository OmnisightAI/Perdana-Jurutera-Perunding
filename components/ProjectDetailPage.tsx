"use client";

import Image from "next/image";
import { useState } from "react";

type LabelValue = {
  label: string;
  value: string;
};

type Feature = {
  title: string;
  description: string;
};

type ProjectDetailPageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  generalInfo: LabelValue[];
  overview: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyImage: string;
  storyImageAlt: string;
  keyFeatures: Feature[];
  benefits: Feature[];
  galleryImages: string[];
  galleryAlt: string;
  locationTitle: string;
  locationDescription: string;
  mapQuery: string;
  backHref?: string;
  backLabel?: string;
};

export default function ProjectDetailPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  generalInfo,
  overview,
  storyTitle,
  storyParagraphs,
  storyImage,
  storyImageAlt,
  keyFeatures,
  benefits,
  galleryImages,
  galleryAlt,
  locationTitle,
  locationDescription,
  mapQuery,
  backHref = "/projects/infrastructure-projects",
  backLabel = "Back to Infrastructure Projects",
}: ProjectDetailPageProps) {
  const [index, setIndex] = useState(0);
  const safeMapQuery = encodeURIComponent(mapQuery);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] w-full">
          <Image
            src={heroImage}
            alt={heroAlt}
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
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              {subtitle}
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
                {overview}
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
              {storyTitle}
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="relative h-full min-h-[340px] bg-zinc-100">
              <Image
                src={storyImage}
                alt={storyImageAlt}
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
              {galleryImages.map((image, imageIndex) => (
                <div
                  key={image}
                  className="relative h-[460px] min-w-[80%] flex-shrink-0 overflow-hidden rounded-[2rem] bg-zinc-100"
                >
                  <Image
                    src={image}
                    alt={`${galleryAlt} ${imageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              {galleryImages.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  type="button"
                  onClick={() => setIndex(imageIndex)}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={
                      imageIndex === index
                        ? "font-semibold text-zinc-900"
                        : "text-zinc-400"
                    }
                  >
                    {String(imageIndex + 1).padStart(2, "0")}
                  </span>

                  {imageIndex === index && <span className="h-px w-16 bg-red-600" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() =>
                  setIndex((previous) =>
                    previous === 0 ? galleryImages.length - 1 : previous - 1
                  )
                }
                className="text-2xl text-red-600 transition hover:opacity-70"
                aria-label="Previous image"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setIndex((previous) =>
                    previous === galleryImages.length - 1 ? 0 : previous + 1
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
                {locationTitle}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                {locationDescription}
              </p>

              <a
                href={`https://www.google.com/maps?q=${safeMapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100">
              <iframe
                src={`https://www.google.com/maps?q=${safeMapQuery}&z=15&output=embed`}
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${locationTitle} project location map`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <a
            href={backHref}
            className="inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-red-600 hover:text-red-600"
          >
            ← {backLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
