import { LinkedinIcon as Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--gradient-electric)]">
              <span className="text-xs font-black text-primary-foreground">CP</span>
            </span>
            CommercePilot
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            PERFORMANCE & GROWTH PARTNER — performance marketing, AI automation and analytics
            for ambitious D2C and FMCG brands.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-electric" /> India
          </div>
        </div>

        <FooterCol
          title="Services"
          items={[
            "Quick Commerce Ads",
            "Performance Marketing",
            "AI & Automation",
            "Data & Analytics",
            "Website Development",
          ]}
        />
        <FooterCol
          title="Platforms"
          items={["Blinkit", "Zepto", "Instamart", "Amazon", "Flipkart", "Meta", "Google"]}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CommercePilot. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <SocialIcon href="#" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="#contact" label="Email">
            <Mail className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="#contact" label="WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="hover:text-foreground transition-colors cursor-default">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:border-electric/40 hover:text-electric transition-colors"
    >
      {children}
    </a>
  );
}
