// src/app/resources/page.tsx
import React from "react";

export default function ResourcesPage() {
  return (
    <div className="bg-white px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Resources
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Articles &amp; Guides
          </h1>
          <p className="max-w-3xl text-sm text-warmGray-700 md:text-base dark:text-warmGray-200">
            Short, practical pieces on Indian diets for diabetes, heart health,
            PCOS and healthy ageing. (Content to be added.)
          </p>
        </header>

        <p className="text-sm text-warmGray-600 dark:text-warmGray-300">
          Coming soon: simple guides and checklists you can share with family
          members, house helps and caregivers.
        </p>
      </div>
    </div>
  );
}
