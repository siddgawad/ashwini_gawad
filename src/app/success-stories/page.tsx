// src/app/success-stories/page.tsx
import React from "react";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function SuccessStoriesPage() {
  return (
    <div className="bg-cream px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-700 dark:text-primary-300">
            Success Stories
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Real transformations from real people
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-warmGray-600 md:text-base dark:text-warmGray-200">
            Case outlines are anonymised to protect privacy, but the journeys
            and outcomes are real.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <TestimonialCard
            name="Corporate Professional"
            context="Stress, irregular meals, pre-diabetes"
            quote="With hectic meetings and travel, I had almost given up on a proper routine. The plan helped me stabilise my sugar and start eating at sane times."
            result="Fasting sugar reduced and energy improved over 12 weeks."
          />
          <TestimonialCard
            name="Homemaker, 65 yrs"
            context="Arthritis, weight gain, poor appetite"
            quote="We adjusted my portions and meal timings to fit my pain and sleep pattern. I felt lighter, and my digestion improved."
            result="Gradual, safe weight loss with better mobility and appetite."
          />
          <TestimonialCard
            name="Young Woman, 27 yrs"
            context="PCOS, severe hair fall"
            quote="Once I understood the link between protein, sleep and hormones, things started changing. The food was simple and Indian, not fancy."
            result="Hair fall reduced and cycles became more regular over a few months."
          />
        </div>
      </div>
    </div>
  );
}
