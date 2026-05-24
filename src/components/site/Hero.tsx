import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-dashboard.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
            PERFORMANCE & GROWTH PARTNER
          </span>

          <h1 className="mt-5 md:mt-6 text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold md:leading-[1.05]">
            Scale Faster Across{" "}
            <span className="text-gradient">Blinkit, Amazon &amp; Quick Commerce</span>
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We help D2C and FMCG brands grow through performance marketing, AI automation, analytics
            dashboards, CRM systems, and marketplace scaling.
          </p>

          <div className="mt-7 md:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-5 md:px-6 py-3 md:py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-5 md:px-6 py-3 md:py-3.5 text-sm font-semibold hover:border-electric/40 transition-colors"
            >
              <Play className="h-4 w-4 text-electric" />
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative mt-12 md:mt-20 mx-auto max-w-5xl"
          style={{ perspective: 1200 }}
        >
          <div className="absolute -inset-8 bg-[var(--gradient-electric)] opacity-30 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[var(--shadow-elevated)]">
            <img
              src={heroImg}
              alt="CommercePilot futuristic analytics dashboard"
              width={1536}
              height={1152}
              className="w-full h-auto"
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute -left-10 top-1/4 glass rounded-xl px-5 py-4 shadow-[var(--shadow-elevated)]"
          >
            <div className="text-xs text-muted-foreground">ROAS</div>
            <div className="text-2xl font-display font-bold text-electric">7.2×</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute -right-8 bottom-1/4 glass rounded-xl px-5 py-4 shadow-[var(--shadow-elevated)]"
          >
            <div className="text-xs text-muted-foreground">TACoS</div>
            <div className="text-2xl font-display font-bold text-electric">15%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
