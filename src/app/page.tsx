// src/app/page.tsx
"use client";

import NextImage from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";



const WHATSAPP_URL =
  "https://wa.me/919769761766?text=Hi%20Dietitian%20Ashwini%2C%20I%27d%20like%20to%20book%20a%20diet%20consultation.";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-sky via-white to-cream">
        <div className="pointer-events-none absolute top-20 right-10 h-80 w-80 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-sage-100/40 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl items-center px-4 pb-20 pt-24 md:px-6 lg:px-8 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-xs font-heading font-semibold uppercase tracking-[0.35em] text-terracotta-500">
                From Uncertainty to Confidence
              </p>

              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-warmGray-900 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-warmGray-50">
                Your Journey to{" "}
                <span className="bg-gradient-to-r from-primary-600 to-sage-600 bg-clip-text text-transparent">
                  Better Health
                </span>{" "}
                Starts Here
              </h1>

              <p className="mb-8 max-w-xl text-base text-warmGray-700 md:text-lg dark:text-warmGray-100">
                Clinical diet counselling for diabetes, heart health, PCOS,
                obesity and elderly care using realistic Indian meals, not
                crash diets.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-7 py-3.5 font-heading text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Start on WhatsApp
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-3 rounded-full border border-warmGray-300 bg-white/80 px-7 py-3.5 font-heading text-sm font-semibold text-warmGray-800 shadow-sm backdrop-blur transition-all hover:bg-white hover:shadow-lg dark:border-warmGray-600 dark:bg-warmGray-900/80 dark:text-warmGray-50"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-xs text-white">
                    ▶
                  </span>
                  Watch How It Works
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-warmGray-600 dark:text-warmGray-300">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {"★★★★★"}
                  </div>
                  <span className="font-medium">
                    500+ clients counselled across India
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sage-500" />
                  <span>20+ years clinical & wellness experience</span>
                </div>
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-2xl">
  <NextImage
    src="/hero-ashwini.jpg"
    alt="Diet consultation with Ashwini"
    width={640}
    height={800}
    className="h-full w-full object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
  <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3 text-xs text-warmGray-800 shadow-lg backdrop-blur">
    <p className="font-heading text-xs font-semibold text-sage-700">
      1:1 Clinical Diet Counselling
    </p>
    <p className="text-[11px] text-warmGray-600">
      Diabetes • Heart Health • PCOS • Elderly Nutrition
    </p>
  </div>
</div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-warmGray-200 bg-white dark:border-warmGray-800 dark:bg-warmGray-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between md:px-6 lg:px-8">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.23em] text-warmGray-500 dark:text-warmGray-300">
            Previously Associated With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {/* Replace with real SVG/PNGs later */}
            <span className="text-xs font-heading text-warmGray-400">
              KEM Hospital
            </span>
            <span className="text-xs font-heading text-warmGray-400">
              Novartis
            </span>
            <span className="text-xs font-heading text-warmGray-400">
              VLCC Healthcare
            </span>
            <span className="text-xs font-heading text-warmGray-400">
              Talwalkars
            </span>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="bg-white px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
              When health reports are scary and advice is confusing
            </h2>
            <p className="text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
              Most people get diet charts that are copied from Google or
              impossible to follow in real life. That leads to guilt,
              frustration and no real change in blood reports.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-terracotta-100 bg-blush p-8 shadow-sm dark:border-terracotta-500/30 dark:bg-warmGray-900/60">
              <div className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                The Problem
              </div>
              <ul className="space-y-3 text-sm text-warmGray-700 dark:text-warmGray-100">
                <li>• Confusing advice from friends, social media and doctors.</li>
                <li>• Complex meal plans that don&apos;t match your kitchen.</li>
                <li>• Sugar, BP and cholesterol still not under control.</li>
                <li>• Elderly parents skipping meals or eating randomly.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-sage-100 bg-mint p-8 shadow-sm dark:border-sage-500/30 dark:bg-warmGray-900/60">
              <div className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-sage-600">
                The Solution
              </div>
              <ul className="space-y-3 text-sm text-warmGray-700 dark:text-warmGray-50">
                <li>
                  • Structured 1:1 counselling focused on lab reports and your
                  real routine.
                </li>
                <li>
                  • Simple Indian meals with clear protein targets for healthy
                  ageing.
                </li>
                <li>
                  • Regular follow-up and adjustments based on progress.
                </li>
                <li>
                  • Full-day plans for parents, kids and working couples so the
                  whole house eats better.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="bg-gradient-to-br from-sky via-white to-mint px-4 py-20 md:px-6 lg:px-8 dark:from-warmGray-900 dark:via-warmGray-950 dark:to-warmGray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.28em] text-primary-600 dark:text-primary-300">
              How It Works
            </p>
            <h2 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
              Your journey in 3 clear steps
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
              No fancy products, no crash diets. Just structured, realistic
              changes that improve reports and energy levels.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Discover",
                desc: "We understand medical reports, symptoms, medications, food habits and family routine in detail.",
                badge: "Step 1",
              },
              {
                title: "Design",
                desc: "You receive a personalised plan with easy Indian meals, protein targets and clear do's & don'ts.",
                badge: "Step 2",
              },
              {
                title: "Deliver",
                desc: "We track your progress, tweak the plan and support you till new habits become your normal.",
                badge: "Step 3",
              },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="relative flex h-full flex-col rounded-3xl border border-warmGray-200 bg-white p-7 shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-warmGray-700 dark:bg-warmGray-900"
              >
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 font-heading text-xs font-semibold text-primary-700 dark:bg-primary-900/60 dark:text-primary-200">
                    {idx + 1}
                  </span>
                  <span className="text-[11px] font-heading uppercase tracking-[0.18em] text-warmGray-500 dark:text-warmGray-300">
                    {step.badge}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-warmGray-900 dark:text-warmGray-50">
                  {step.title}
                </h3>
                <p className="text-sm text-warmGray-600 dark:text-warmGray-200">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warmGray-900 via-primary-900 to-warmGray-900 px-4 py-20 text-white md:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Experience that compounds into results
            </h2>
            <p className="mt-3 text-sm text-primary-100 md:text-base">
              Behind every number here is a real person whose health now feels
              under control.
            </p>
          </div>
          <div className="grid gap-10 text-center md:grid-cols-4">
            {[
              {
                value: "20+",
                label: "Years Experience",
                sub: "Clinical & corporate wellness",
              },
              {
                value: "500+",
                label: "Clients Counselled",
                sub: "Across India & NRI families",
              },
              {
                value: "80L+",
                label: "Centre Revenue",
                sub: "Enabled at VLCC units",
              },
              {
                value: "25+",
                label: "Centres Guided",
                sub: "Across West, South & Central India",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-5xl font-bold text-primary-100 md:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-heading text-sm font-semibold">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-primary-100/80">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-2 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
                Real people, real improvements
              </h2>
              <p className="max-w-xl text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
                Names changed for privacy, but the journeys and lab report
                changes are real.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              name="A.M., 58 yrs"
              context="Type 2 diabetes & cholesterol"
              quote="In three months my fasting sugar stabilised and I finally understood how to eat without fear. The plan used my existing home food, not imported products."
              result="HbA1c reduced from 8.2 to 7.1 in 3.5 months with medication + diet changes."
            />
            <TestimonialCard
              name="S.P., 32 yrs"
              context="PCOS & weight gain"
              quote="Instead of just 'weight loss', we focused on cycle regularity, energy levels and protein intake. I never felt starved or judged."
              result="Lost 6 kg in 10 weeks while improving energy and hair fall."
            />
            <TestimonialCard
              name="NRI Client"
              context="Elderly parents in Mumbai"
              quote="Being abroad, I wanted someone who could guide my parents patiently and send structured plans. Ashwini handled their BP, sugar and meal routine with care."
              result="Parents now follow a clear, easy routine and sugar readings are more stable."
            />
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section className="bg-white px-4 pb-20 pt-16 md:px-6 lg:px-8 dark:bg-warmGray-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-start">
            <div>
              <h2 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
                Your questions, answered
              </h2>
              <p className="mb-6 max-w-xl text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
                Clear expectations from the start so you know exactly what
                you&apos;re signing up for.
              </p>
              <FAQAccordion
                items={[
                  {
                    question:
                      "What conditions do you commonly work with?",
                    answer:
                      "Diabetes, pre-diabetes, cardiac risk, high cholesterol, hypertension, PCOS, fatty liver, obesity, underweight cases and geriatric nutrition. We also plan recovery diets after surgery or serious illness.",
                  },
                  {
                    question:
                      "Are the plans complicated or full of fancy ingredients?",
                    answer:
                      "No. Plans are built primarily around your current kitchen, timing and family habits. The focus is on protein targets, smart carb choices and timing, not exotic ingredients.",
                  },
                  {
                    question: "How are consultations conducted?",
                    answer:
                      "You can meet in person at the charitable trust hospital OPD in Borivali (East) or via online video / phone consultation. Follow-ups are scheduled based on your case.",
                  },
                  {
                    question:
                      "Can my parents follow this if they are elderly or fussy eaters?",
                    answer:
                      "Yes. Elderly care is a key focus. Plans are made realistic for chewing capacity, appetite, sleep pattern and medications, with clear instructions for caregivers.",
                  },
                  {
                    question:
                      "How do we start if we are living outside India?",
                    answer:
                      "You can book your first call via WhatsApp. We will review lab reports, medications and food availability in your country, then build an Indian-style plan adapted to your reality.",
                  },
                ]}
              />
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-mint p-7 shadow-lg dark:border-primary-500/40 dark:bg-gradient-to-br dark:from-warmGray-900 dark:via-warmGray-950 dark:to-warmGray-900">
              <div>
                <p className="mb-2 text-xs font-heading uppercase tracking-[0.25em] text-primary-700 dark:text-primary-300">
                  Final Step
                </p>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-warmGray-900 dark:text-warmGray-50">
                  Ready to take control of your health?
                </h3>
                <p className="mb-6 text-sm text-warmGray-700 dark:text-warmGray-100">
                  Send a WhatsApp message with your name, age, city and main
                  concern. You&apos;ll receive a reply with available slots for
                  your first consultation.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Message on WhatsApp
                </a>
                <p className="text-[11px] text-warmGray-500 dark:text-warmGray-300">
                  💳 No online payment needed to message • 📍 Mumbai-based
                  consultations with online support for NRI families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
