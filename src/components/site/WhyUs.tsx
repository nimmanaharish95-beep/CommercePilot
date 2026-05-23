import { motion } from "framer-motion";
import {
  Store,
  Database,
  Bot,
  Target,
  Rocket,
  Zap,
} from "lucide-react";
import { SectionHeader } from "./Services";

const reasons = [
  { icon: Store, title: "Marketplace Specialists" },
  { icon: Database, title: "Data-Driven Growth" },
  { icon: Bot, title: "AI Automation Experts" },
  { icon: Target, title: "Performance Focused" },
  { icon: Rocket, title: "Real Scaling Experience" },
  { icon: Zap, title: "Quick Commerce Experts" },
];

export function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why CommercePilot" title="Built for brands that want to win" />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-electric/40 transition-colors"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 border border-electric/20 text-electric">
                <r.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold">{r.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
