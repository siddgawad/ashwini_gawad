// src/components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-warmGray-200 bg-warmGray-900 text-warmGray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-terracotta-500 to-primary-500 text-white shadow-lg">
                <span className="font-heading text-lg font-bold">AG</span>
              </div>
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-warmGray-300">
                  Dietitian
                </p>
                <p className="font-display text-lg font-semibold text-white">
                  Ashwini Gawad
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-warmGray-300">
              Clinical nutrition, realistic Indian meal plans and long-term
              lifestyle guidance for diabetes, heart health, PCOS and
              geriatric care.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-warmGray-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-warmGray-300">
              <li>
                <Link href="/about" className="hover:text-primary-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-primary-300"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-warmGray-400">
              Key Services
            </h3>
            <ul className="space-y-2 text-sm text-warmGray-300">
              <li>Diabetes & cardiac nutrition</li>
              <li>PCOS & weight management</li>
              <li>Geriatric & family meal planning</li>
              <li>Post-surgery diet counselling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-warmGray-400">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-warmGray-300">
              <li>Mumbai, Maharashtra</li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+919769761766"
                  className="hover:text-primary-300"
                >
                  +91-976-976-1766
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:ashwini.gawad@gmail.com"
                  className="hover:text-primary-300"
                >
                  ashwini.gawad@gmail.com
                </a>
              </li>
              <li>Charitable Trust Hospital OPD – Borivali (E)</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-warmGray-800 pt-6 text-xs text-warmGray-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dietitian Ashwini Gawad. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-primary-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
