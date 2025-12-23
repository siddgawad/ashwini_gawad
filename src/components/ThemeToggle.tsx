// // src/components/ThemeToggle.tsx
// "use client";

// import { useEffect, useState } from "react";

// type Theme = "light" | "dark";
// const STORAGE_KEY = "ashwini-theme";

// function getInitialTheme(): Theme {
//   // During SSR, window doesn't exist -> default to light
//   if (typeof window === "undefined") return "light";

//   const stored = window.localStorage.getItem(STORAGE_KEY);
//   if (stored === "light" || stored === "dark") return stored;

//   const prefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;

//   return prefersDark ? "dark" : "light";
// }

// export function ThemeToggle() {
//   // ✅ Initialize from localStorage / media query WITHOUT an effect
//   const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

//   // ✅ Effect only syncs React state → DOM + localStorage (no setState here)
//   useEffect(() => {
//     if (typeof document !== "undefined") {
//       const root = document.documentElement;
//       root.classList.remove("light", "dark");
//       root.classList.add(theme);
//     }

//     if (typeof window !== "undefined") {
//       window.localStorage.setItem(STORAGE_KEY, theme);
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const isDark = theme === "dark";

//   return (
//     <button
//       type="button"
//       onClick={toggleTheme}
//       aria-label="Toggle dark mode"
//       className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-warmGray-200 bg-white/80 text-warmGray-700 shadow-sm backdrop-blur hover:border-primary-300 hover:text-primary-600 dark:border-warmGray-700 dark:bg-warmGray-800 dark:text-warmGray-100"
//     >
//       {isDark ? (
//         // Sun icon
//         <svg
//           className="h-4 w-4"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <circle cx="12" cy="12" r="4" />
//           <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
//         </svg>
//       ) : (
//         // Moon icon
//         <svg
//           className="h-4 w-4"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//         </svg>
//       )}
//     </button>
//   );
// }
