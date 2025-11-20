// src/components/FAQAccordion.tsx
"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-warmGray-200 dark:divide-warmGray-700">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={item.question} className="group">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-primary-600 dark:hover:text-primary-300"
            >
              <span className="text-lg font-heading font-semibold text-warmGray-900 group-hover:text-primary-600 dark:text-warmGray-50 dark:group-hover:text-primary-300">
                {item.question}
              </span>
              <span
                className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm transition-all ${
                  isOpen
                    ? "rotate-45 border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/40 dark:text-primary-200"
                    : "border-warmGray-300 bg-white text-warmGray-600 dark:border-warmGray-600 dark:bg-warmGray-800 dark:text-warmGray-200"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-5 pr-10 text-sm text-warmGray-600 dark:text-warmGray-200">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
