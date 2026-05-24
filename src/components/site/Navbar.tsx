import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#cases", label: "Case Studies" },
  { href: "#platforms", label: "Platforms" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-full md:rounded-2xl px-3 md:px-5 py-2 md:py-3 transition-all ${
            scrolled || open ? "glass shadow-[var(--shadow-elevated)]" : ""
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-display font-bold text-sm md:text-lg"
          >
            <span className="relative inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-md md:rounded-lg bg-[var(--gradient-electric)] shadow-[var(--shadow-glow)]">
              <span className="absolute inset-0.5 rounded bg-background" />
              <span className="relative text-electric text-[10px] md:text-xs font-black">CP</span>
            </span>
            <span>CommercePilot</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-shadow"
          >
            Book a Call
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full glass"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 shadow-[var(--shadow-elevated)]">
            <nav className="flex flex-col gap-1 text-sm">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
