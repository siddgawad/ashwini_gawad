// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dietitian Ashwini Gawad | Clinical Nutrition & Wellness",
  description:
    "Clinical diet & nutrition counselling in Mumbai for diabetes, cardiac care, PCOS, obesity, geriatric nutrition and family meal planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-cream text-warmGray-800 font-body antialiased transition-colors duration-300 dark:bg-warmGray-900 dark:text-warmGray-50">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
