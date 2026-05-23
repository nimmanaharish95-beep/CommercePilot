const brands = ["Slovic", "Azah", "Powerhouse91"];

export function Brands() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by ambitious brands
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {brands.map((b) => (
            <div
              key={b}
              className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
