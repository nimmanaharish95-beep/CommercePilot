import { motion } from "framer-motion";

const brands = ["Slovic", "Azah", "Powerhouse91", "Kerala Chips"];

export function Brands() {
  return (
    <section className="py-10 md:py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-muted-foreground">
          Trusted by ambitious brands
        </p>

        <div className="mt-5 md:mt-8 grid grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center gap-2.5 md:gap-x-10 md:gap-y-4">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="glass rounded-full px-4 py-2.5 text-center text-sm font-medium text-foreground/85 md:bg-transparent md:border-transparent md:backdrop-blur-0 md:px-0 md:py-0 md:rounded-none md:font-display md:text-2xl md:font-semibold md:text-muted-foreground/70 md:hover:text-foreground md:transition-colors"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
