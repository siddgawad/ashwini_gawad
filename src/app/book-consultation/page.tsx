// src/app/book-consultation/page.tsx
"use client";

import React, { FormEvent } from "react";

const WHATSAPP_BASE =
  "https://wa.me/919769761766?text=";

export default function BookConsultationPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "";
    const age = data.get("age") || "";
    const city = data.get("city") || "";
    const concern = data.get("concern") || "";

    const message = `Hi Dietitian Ashwini,%0A%0AMy name is ${name} (age: ${age}) from ${city}.%0AMain health concern:%0A${concern}%0A%0APlease let me know available slots for a consultation.`;
    const url = WHATSAPP_BASE + message;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-cream px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Book Consultation
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Schedule your first session
          </h1>
          <p className="max-w-3xl text-sm text-warmGray-700 md:text-base dark:text-warmGray-200">
            Fill this quick form. Your details will open in WhatsApp so you can
            directly message Ashwini and receive available time slots.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-warmGray-200 bg-white p-6 shadow-md dark:border-warmGray-700 dark:bg-warmGray-900"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-heading font-semibold uppercase tracking-[0.16em] text-warmGray-600 dark:text-warmGray-300"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-warmGray-300 bg-white px-3 py-2 text-sm text-warmGray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-warmGray-600 dark:bg-warmGray-900 dark:text-warmGray-50"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="mb-1 block text-xs font-heading font-semibold uppercase tracking-[0.16em] text-warmGray-600 dark:text-warmGray-300"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min={1}
                max={110}
                required
                className="w-full rounded-xl border border-warmGray-300 bg-white px-3 py-2 text-sm text-warmGray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-warmGray-600 dark:bg-warmGray-900 dark:text-warmGray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="mb-1 block text-xs font-heading font-semibold uppercase tracking-[0.16em] text-warmGray-600 dark:text-warmGray-300"
            >
              City &amp; Country
            </label>
            <input
              id="city"
              name="city"
              required
              className="w-full rounded-xl border border-warmGray-300 bg-white px-3 py-2 text-sm text-warmGray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-warmGray-600 dark:bg-warmGray-900 dark:text-warmGray-50"
            />
          </div>

          <div>
            <label
              htmlFor="concern"
              className="mb-1 block text-xs font-heading font-semibold uppercase tracking-[0.16em] text-warmGray-600 dark:text-warmGray-300"
            >
              Main health concern
            </label>
            <textarea
              id="concern"
              name="concern"
              required
              rows={5}
              className="w-full rounded-xl border border-warmGray-300 bg-white px-3 py-2 text-sm text-warmGray-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-warmGray-600 dark:bg-warmGray-900 dark:text-warmGray-50"
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-6 py-3.5 font-heading text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Open in WhatsApp &amp; Send
          </button>

          <p className="text-[11px] text-warmGray-500 dark:text-warmGray-300">
            Your information is used only to schedule your consultation. No
            spam, no sharing with third parties.
          </p>
        </form>
      </div>
    </div>
  );
}
