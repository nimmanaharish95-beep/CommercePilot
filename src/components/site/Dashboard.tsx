import { motion } from "framer-motion";
import { SectionHeader } from "./Services";
import dashImg from "@/assets/dashboard-mockup.jpg";
import { Activity, TrendingDown, TrendingUp, Wallet, Search, Boxes, BarChart } from "lucide-react";

const tiles = [
  { icon: TrendingUp, label: "ROAS Graphs" },
  { icon: TrendingDown, label: "TACoS Trends" },
  { icon: Wallet, label: "Spend Optimisation" },
  { icon: BarChart, label: "Revenue Growth" },
  { icon: Search, label: "Keyword Tracking" },
  { icon: Boxes, label: "Marketplace Analytics" },
  { icon: Activity, label: "Real-time Charts" },
];

export function Dashboard() {
  return (
    <section className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Analytics infrastructure"
          title="Your growth, visualised in real time"
          description="A unified dashboard pulling every campaign, channel and marketplace into a single command center."
        />

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-[var(--gradient-electric)] opacity-25 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[var(--shadow-elevated)]">
              <img
                src={dashImg}
                alt="Floating analytics dashboard with ROAS and TACoS metrics"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {tiles.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl p-5 hover:border-electric/40 transition-colors"
              >
                <t.icon className="h-5 w-5 text-electric" />
                <div className="mt-3 text-sm font-medium">{t.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
