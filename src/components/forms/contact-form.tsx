"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold">Thank you for reaching out!</p>
        <p className="mt-2 text-muted">
          We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </div>
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
