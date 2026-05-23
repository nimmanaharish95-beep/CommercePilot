import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./Services";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Let's talk"
          title="Let's Scale Your Brand"
          description="Tell us about your brand and we'll get back within 24 hours."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-12 glass rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <Field label="Name" name="name" placeholder="Your name" />
          <Field label="Brand Name" name="brand" placeholder="Brand / company" />
          <Field
            label="Monthly Revenue"
            name="revenue"
            placeholder="e.g. ₹50L / month"
          />
          <Field label="Phone Number" name="phone" type="tel" placeholder="+91 ..." />
          <div className="md:col-span-2">
            <Field label="Email" name="email" type="email" placeholder="you@brand.com" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              We respond to every enquiry personally.
            </p>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform disabled:opacity-70"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Sent
                </>
              ) : (
                <>
                  Let&apos;s Scale Your Brand <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-electric focus:ring-2 focus:ring-electric/30 transition-all"
      />
    </label>
  );
}
