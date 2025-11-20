// src/components/TestimonialCard.tsx
import React from "react";

interface TestimonialCardProps {
  name: string;
  context: string;
  quote: string;
  result?: string;
}

export function TestimonialCard({
  name,
  context,
  quote,
  result,
}: TestimonialCardProps) {
  const initial = (name || "").trim().charAt(0).toUpperCase() || "?";

  return (
    <article className="relative h-full rounded-3xl border border-warmGray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-warmGray-700 dark:bg-warmGray-900">
      <div
        className="mb-4 text-6xl font-serif leading-none text-sage-200 dark:text-sage-100/20"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <p className="mb-6 text-sm text-warmGray-700 leading-relaxed dark:text-warmGray-100">
        {quote}
      </p>
      {result && (
        <div className="mb-6 rounded-xl border border-sage-200 bg-sage-50 p-4 text-sm text-sage-700 dark:border-sage-400/40 dark:bg-sage-900/30 dark:text-sage-100">
          {result}
        </div>
      )}
      <div className="flex items-center gap-4 border-t border-warmGray-200 pt-5 dark:border-warmGray-700">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-sage-400 text-lg font-heading font-bold text-white">
          {initial}
        </div>
        <div>
          <p className="font-heading text-sm font-semibold text-warmGray-900 dark:text-warmGray-50">
            {name}
          </p>
          <p className="text-xs text-warmGray-500 dark:text-warmGray-300">
            {context}
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sage-100/60 blur-2xl dark:bg-sage-400/20" />
    </article>
  );
}
