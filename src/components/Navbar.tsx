// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/resources", label: "Resources" },
  { href: "/book-consultation", label: "Book Consultation" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919769761766?text=Hi%20Dietitian%20Ashwini%2C%20I%27d%20like%20to%20book%20a%20diet%20consultation.";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) && href !== "/book-consultation"
      ? true
      : pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-warmGray-200/70 bg-white/80 backdrop-blur-md dark:border-warmGray-800/70 dark:bg-warmGray-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-terracotta-500 to-primary-500 text-white shadow-lg">
            <span className="font-heading text-lg font-bold">AG</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-warmGray-700 dark:text-warmGray-100">
              Dietitian
            </span>
            <span className="font-display text-lg font-semibold text-warmGray-900 dark:text-warmGray-50">
              Ashwini Gawad
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6 text-sm font-heading text-warmGray-700 dark:text-warmGray-200">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-primary-600 dark:hover:text-primary-300 ${
                  isActive(item.href)
                    ? "text-primary-600 dark:text-primary-300"
                    : ""
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-primary-500 to-terracotta-500" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-5 py-2.5 text-sm font-heading font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              WhatsApp Consult
            </a>
          </div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-warmGray-200 bg-white text-warmGray-800 shadow-sm dark:border-warmGray-700 dark:bg-warmGray-900 dark:text-warmGray-50"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              {open ? (
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-warmGray-200 bg-white/95 px-4 pb-4 pt-2 text-sm shadow-lg dark:border-warmGray-800 dark:bg-warmGray-950/95 lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 font-heading transition-colors ${
                  isActive(item.href)
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200"
                    : "text-warmGray-800 hover:bg-warmGray-100 dark:text-warmGray-100 dark:hover:bg-warmGray-800/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 px-4 py-2.5 font-heading font-semibold text-white shadow-md"
            >
              WhatsApp Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
