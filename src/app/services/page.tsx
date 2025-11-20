// src/app/services/page.tsx
import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Services
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Programmes &amp; Consultations
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
            All plans are built around your medical history, reports and real
            life. These are typical structures; final details are personalised.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Diabetes & Heart Health Plan",
              desc: "For Type 2 diabetes, pre-diabetes, high cholesterol and BP.",
              bullets: [
                "Detailed report & medication review",
                "Personalised full-day meal plan",
                "Follow-up adjustments",
              ],
              tag: "Most common",
            },
            {
              name: "PCOS & Weight Management Plan",
              desc: "For menstrual irregularity, weight gain and fatigue.",
              bullets: [
                "Cycle-focused nutrition plan",
                "Protein & strength-focused guidance",
                "Education on long-term PCOS management",
              ],
              tag: "Popular",
            },
            {
              name: "Elderly & Family Nutrition",
              desc: "For ageing parents and busy households needing structure.",
              bullets: [
                "Simple, easy-to-follow plans for parents",
                "Structured family meal patterns",
                "Caregiver-friendly instructions",
              ],
              tag: "Family focus",
            },
          ].map((service) => (
            <article
              key={service.name}
              className="flex h-full flex-col rounded-3xl border border-warmGray-200 bg-cream p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-warmGray-700 dark:bg-warmGray-900"
            >
              <div className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-[11px] font-heading uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-900/40 dark:text-primary-200">
                {service.tag}
              </div>
              <h2 className="mb-2 font-heading text-xl font-semibold text-warmGray-900 dark:text-warmGray-50">
                {service.name}
              </h2>
              <p className="mb-4 text-sm text-warmGray-700 dark:text-warmGray-100">
                {service.desc}
              </p>
              <ul className="mb-5 space-y-2 text-sm text-warmGray-700 dark:text-warmGray-100">
                {service.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/book-consultation"
                  className="text-sm font-heading font-semibold text-primary-700 underline-offset-4 hover:underline dark:text-primary-300"
                >
                  Discuss this in a consultation →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
