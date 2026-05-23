import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const results = [
  { value: "₹7L+", label: "Daily Ad Spend Managed" },
  { value: "2,000+", label: "Campaigns Executed" },
  { value: "₹1.49Cr+", label: "Sales Generated" },
  { value: "7+", label: "ROAS on Campaigns" },
  { value: "₹11Cr → ₹15Cr", label: "NMV Scaled" },
  { value: "18% → 15%", label: "TACoS Reduced" },
  { value: "#1", label: "Amazon BSR Rankings" },
];

export function Results() {
  return (
    <section id="results" className="py-16 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Real outcomes"
          title="Numbers from the trenches"
          description="Verified results from live campaigns across quick commerce and marketplaces."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`glass rounded-2xl p-6 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                {r.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{r.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
