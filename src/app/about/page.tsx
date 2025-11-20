// src/app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-cream px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            About
          </p>
          <h1 className="mb-4 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Dietitian Ashwini Gawad
          </h1>
          <p className="max-w-3xl text-sm text-warmGray-700 md:text-base dark:text-warmGray-200">
            Clinical Dietitian and wellness leader with 20+ years of experience
            across hospitals, pharmaceutical organisations and national wellness
            chains like VLCC and Talwalkars.
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-warmGray-700 dark:text-warmGray-100">
          <p>
            Ashwini&apos;s work began at KEM Hospital, Mumbai, where she
            planned therapeutic diets for critical care, paediatric and
            geriatric patients. She later worked with Novartis India on medical
            nutrition products, helping clinicians integrate evidence-based
            supplements into patient care.
          </p>
          <p>
            Over the next decade, she led slimming and nutrition training across
            25+ VLCC centres in West, South and Central India, designing
            protocols, training dietitians and physiotherapists, and supporting
            franchisees to grow their wellness revenue while maintaining
            clinical safety.
          </p>
          <p>
            Today, she combines that clinical depth and business experience to
            offer grounded, realistic counselling for families who want
            long-term health rather than short “diet seasons”.
          </p>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-warmGray-200 bg-white p-6 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900">
            <h2 className="mb-2 font-heading text-base font-semibold text-warmGray-900 dark:text-warmGray-50">
              Qualifications
            </h2>
            <ul className="space-y-2 text-sm">
              <li>M.S. in Dietetics &amp; Food Service Management</li>
              <li>PG Diploma in Dietetics &amp; Hospital Food Service</li>
              <li>Certified in FODMAP, Nutrigenomics &amp; supplementation</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-warmGray-200 bg-white p-6 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900">
            <h2 className="mb-2 font-heading text-base font-semibold text-warmGray-900 dark:text-warmGray-50">
              Core Focus Areas
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Diabetes, cardiac &amp; renal nutrition</li>
              <li>PCOS, obesity &amp; weight management</li>
              <li>Geriatric &amp; family nutrition planning</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-warmGray-200 bg-white p-6 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900">
            <h2 className="mb-2 font-heading text-base font-semibold text-warmGray-900 dark:text-warmGray-50">
              Approach
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Lab-report guided, evidence-based counselling</li>
              <li>Realistic Indian meals, no extreme restrictions</li>
              <li>Clear protein goals for longer, healthier life</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

