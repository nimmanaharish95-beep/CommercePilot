import { motion } from "framer-motion";
import { TrendingUp, LineChart, Boxes, Gauge, Search } from "lucide-react";
import { SectionHeader } from "./Services";

const cases = [
  {
    icon: TrendingUp,
    tag: "Revenue Growth",
    title: "Scaled NMV from ₹11Cr to ₹15Cr",
    desc: "Restructured quick commerce campaign architecture and bidding logic for a leading FMCG brand.",
    metric: "+36% NMV",
  },
  {
    icon: Gauge,
    tag: "ROAS Improvement",
    title: "Reduced TACoS from 18% to 15%",
    desc: "Implemented automated bid optimisation and negative keyword pipelines on Amazon Ads.",
    metric: "−3% TACoS",
  },
  {
    icon: Boxes,
    tag: "Marketplace Scaling",
    title: "Amazon BSR #1 across categories",
    desc: "Combined PPC, listing and review velocity to dominate category ranking.",
    metric: "#1 BSR",
  },
  {
    icon: LineChart,
    tag: "Dashboard Automation",
    title: "Real-time SQL + BigQuery reporting",
    desc: "Built a unified analytics layer pulling Blinkit, Zepto and Amazon data into one source of truth.",
    metric: "Live KPIs",
  },
  {
    icon: Search,
    tag: "Keyword Optimisation",
    title: "Scraped 50k+ keywords for share-of-voice",
    desc: "Custom web-scraping pipeline informing daily bid strategy across marketplaces.",
    metric: "+42% SOV",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Case studies"
          title="Outcomes that compound"
          description="A snapshot of recent engagements across performance, analytics and automation."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-electric/40 transition-all"
            >
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 border border-electric/20 text-electric">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-electric/30 px-3 py-1 text-xs text-electric font-medium">
                  {c.metric}
                </span>
              </div>
              <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                {c.tag}
              </div>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
