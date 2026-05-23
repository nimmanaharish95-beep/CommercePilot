import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { SectionHeader } from "./Services";

export function About() {
  return (
    <section id="about" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About" title="Operators, not consultants" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Performance Marketing team with expertise in{" "}
              <span className="text-foreground">Amazon Ads, Quick Commerce, Meta Ads, Google
              Ads, SQL dashboards, BigQuery, automation, and web scraping.</span>{" "}
              Experienced in scaling revenue, improving ROAS / TACoS, and managing large-scale
              marketplace campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold">The team</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <GraduationCap className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <span>
                  Includes members from <span className="text-foreground">IIT Roorkee</span>{" "}
                  with engineering &amp; analytics backgrounds.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                <span>
                  Deep expertise in <span className="text-foreground">AI, automation, analytics
                  and marketplace growth</span> — built by people who&apos;ve run the campaigns
                  themselves.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
