// app/npd/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPD & Ready-to-Cook Products | Ashwini Gawad",
};

export default function NpdPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold md:text-3xl">
          New Food Product Development (NPD)
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Building healthy, Indian, ready-to-cook mixes and nutrition kits for elderly
          adults, working women and children – grounded in clinical nutrition.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-700/70 bg-white/5 p-4 text-xs text-slate-200 backdrop-blur md:text-sm">
        <p className="mb-3">
          Alongside counselling, Ashwini is actively working on{" "}
          <span className="font-semibold text-emerald-200">
            New Food Product Development (NPD)
          </span>{" "}
          through an MSME-certified programme.
        </p>
        <p className="mb-3 text-slate-300">
          The aim is to design ready-to-cook and easy-to-use products that respect
          medical needs, Indian food preferences and the realities of ageing, busy
          households and limited cooking support.
        </p>
        <p className="mb-2 text-[0.8rem] font-semibold text-slate-100">
          Early concept spaces include:
        </p>
        <ul className="mb-3 space-y-1 text-[0.8rem] text-slate-300">
          <li>• Elder-friendly instant khichdi mixes with soft textures and balanced macros</li>
          <li>• Kids’ instant meal bases designed for growth and digestion</li>
          <li>• Busy-mom meal kits that can be turned into full meals in 10–15 minutes</li>
          <li>• Dehydrated vegetable and dal mixes to simplify daily cooking</li>
        </ul>
        <p className="text-[0.8rem] text-slate-300">
          Products are currently in the concept and small-batch testing stage, with
          feedback being collected from real families and elderly users before scale-up.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-xs text-emerald-100 backdrop-blur md:text-sm">
        <h2 className="mb-2 text-sm font-semibold text-emerald-200">
          Collaboration & Pilots
        </h2>
        <p className="mb-3 text-[0.8rem]">
          Ashwini is open to partnerships with housing societies, elder-care facilities,
          clinics, wellness centres and food businesses interested in piloting or
          co-developing nutrition-focused ready-to-cook products.
        </p>
        <p className="mb-3 text-[0.8rem]">
          This can include concept validation, recipe design, nutritional profiling and
          input on positioning and usage guidelines.
        </p>
        <p className="text-[0.8rem]">
          To discuss potential collaboration or pilot projects, please use the contact
          page to share details of your organisation and requirements.
        </p>
      </section>
    </div>
  );
}
