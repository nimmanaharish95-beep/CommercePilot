import { motion } from "framer-motion";
import {
  Zap,
  Target,
  Bot,
  BarChart3,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Quick Commerce Ads",
    items: ["Blinkit Ads", "Zepto Ads", "Instamart Ads"],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    items: ["Meta Ads", "Google Ads", "Amazon PPC", "Marketplace SEO"],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    items: ["AI Automation", "CRM Automation", "ML Solutions", "Workflow Automation"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    items: ["SQL Dashboards", "BigQuery Reporting", "Web Scraping", "Real-time Analytics"],
  },
  {
    icon: Code2,
    title: "Website Development",
    items: ["Ecommerce Websites", "Landing Pages", "3D Websites", "Conversion Optimisation"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title="A full-stack growth engine for modern brands"
          description="From quick commerce ads to AI-powered automation — one team to scale every revenue lever."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-electric/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-electric/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 border border-electric/20 text-electric">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-electric" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-xs uppercase tracking-[0.3em] text-electric">{eyebrow}</span>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg">{description}</p>
      )}
    </div>
  );
}
