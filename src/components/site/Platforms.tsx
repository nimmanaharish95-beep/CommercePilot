import { motion } from "framer-motion";
import { SectionHeader } from "./Services";

const platforms = ["Blinkit", "Zepto", "Instamart", "Amazon", "Flipkart", "Meta", "Google"];

export function Platforms() {
  const loop = [...platforms, ...platforms];
  return (
    <section id="platforms" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Platform expertise"
          title="Native to the platforms that move revenue"
        />
      </div>

      <div className="mt-14 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="glass rounded-2xl px-10 py-8 min-w-[220px] text-center hover:border-electric/40 transition-colors"
            >
              <div className="font-display text-2xl font-semibold">{p}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Certified
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
