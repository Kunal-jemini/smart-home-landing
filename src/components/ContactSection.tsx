// components/ContactSection.tsx
"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const formData = new FormData(e.currentTarget);
      // TODO: POST to /api/contact
      await new Promise((r) => setTimeout(r, 800)); // mock
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-950"
    >
      <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-3">
            Contact us
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let’s design your next smart home
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            Share your requirements and our team will get back within 24–48 hours
            with a tailored recommendation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Full name
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs mb-1 text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-yellow-400"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-5 py-2.5 text-sm font-medium hover:bg-yellow-400 disabled:opacity-60 transition"
          >
            {status === "loading" ? "Sending..." : "Submit inquiry"}
          </button>
          {status === "success" && (
            <p className="text-xs text-yellow-300">
              Thank you! We will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}