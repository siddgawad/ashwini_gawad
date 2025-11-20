// src/app/contact/page.tsx
import React from "react";

const WHATSAPP_URL =
  "https://wa.me/919769761766?text=Hi%20Dietitian%20Ashwini%2C%20I%20have%20a%20quick%20question.";

export default function ContactPage() {
  return (
    <div className="bg-white px-4 py-20 md:px-6 lg:px-8 dark:bg-warmGray-950">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="mb-2 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Contact
          </p>
          <h1 className="mb-3 font-heading text-3xl font-semibold text-warmGray-900 md:text-4xl dark:text-warmGray-50">
            Let&apos;s connect
          </h1>
          <p className="max-w-3xl text-sm text-warmGray-700 md:text-base dark:text-warmGray-200">
            Choose whichever option is easiest for you or your family to start
            the conversation.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4 rounded-3xl border border-warmGray-200 bg-cream p-6 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900">
            <h2 className="font-heading text-base font-semibold text-warmGray-900 dark:text-warmGray-50">
              Direct details
            </h2>
            <ul className="space-y-2 text-sm text-warmGray-700 dark:text-warmGray-100">
              <li>
                Phone:{" "}
                <a
                  href="tel:+919769761766"
                  className="font-semibold text-primary-700 hover:underline dark:text-primary-300"
                >
                  +91-976-976-1766
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-700 hover:underline dark:text-primary-300"
                >
                  Message now
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:ashwini.gawad@gmail.com"
                  className="font-semibold text-primary-700 hover:underline dark:text-primary-300"
                >
                  ashwini.gawad@gmail.com
                </a>
              </li>
              <li>
                Location: Charitable Trust Hospital OPD, Borivali (East),
                Mumbai.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-warmGray-200 bg-white p-6 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900">
            <h2 className="font-heading text-base font-semibold text-warmGray-900 dark:text-warmGray-50">
              When you reach out
            </h2>
            <p className="text-sm text-warmGray-700 dark:text-warmGray-100">
              Share briefly:
            </p>
            <ul className="mb-2 list-disc pl-5 text-sm text-warmGray-700 dark:text-warmGray-100">
              <li>Your name and age</li>
              <li>City / country</li>
              <li>Main health concern (1–2 lines)</li>
              <li>Preference: in-person or online consult</li>
            </ul>
            <p className="text-[11px] text-warmGray-500 dark:text-warmGray-300">
              You will usually receive a response within 24–48 hours on working
              days with available slots and next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
