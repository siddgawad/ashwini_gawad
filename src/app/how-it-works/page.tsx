// src/app/how-it-works/page.tsx
import React from "react";

export default function HowItWorksPage() {
  return (
    <div className="bg-sky px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-700 dark:text-primary-300">
            Process
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            What working together looks like
          </h1>
          <p className="max-w-3xl text-sm text-warmGray-700 md:text-base dark:text-warmGray-200">
            A step-by-step structure so you always know where you are in your
            health journey and what comes next.
          </p>
        </header>

        <ol className="space-y-6 text-sm text-warmGray-700 dark:text-warmGray-100">
          <li>
            <strong className="font-heading text-base">1. Initial enquiry</strong>
            <p>
              You send a WhatsApp message with your concern, age, city and
              whether you prefer in-person or online consultation.
            </p>
          </li>
          <li>
            <strong className="font-heading text-base">
              2. Assessment consultation
            </strong>
            <p>
              We discuss your reports, symptoms, medications, lifestyle,
              work/study pattern, sleep, stress and current meals in detail.
            </p>
          </li>
          <li>
            <strong className="font-heading text-base">
              3. Personalised plan design
            </strong>
            <p>
              A realistic, clearly structured plan is shared with you. This
              includes full-day meal examples, protein targets and practical
              guidelines for eating out, social events and travel.
            </p>
          </li>
          <li>
            <strong className="font-heading text-base">
              4. Follow-ups & adjustments
            </strong>
            <p>
              Based on your feedback, adherence and updated readings, the plan
              is adjusted so that it stays practical and effective.
            </p>
          </li>
          <li>
            <strong className="font-heading text-base">
              5. Long-term maintenance
            </strong>
            <p>
              Once your numbers stabilise and routine feels natural, we refine
              a lighter “maintenance” version you can continue independently.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
