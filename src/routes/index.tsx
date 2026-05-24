import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Brands } from "@/components/site/Brands";
import { Services } from "@/components/site/Services";
import { Results } from "@/components/site/Results";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Platforms } from "@/components/site/Platforms";
import { Dashboard } from "@/components/site/Dashboard";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CommercePilot — PERFORMANCE & GROWTH PARTNER" },
      {
        name: "description",
        content:
          "CommercePilot helps D2C and FMCG brands scale across Blinkit, Zepto, Amazon and quick commerce with performance marketing, AI automation and analytics.",
      },
      { property: "og:title", content: "CommercePilot — PERFORMANCE & GROWTH PARTNER" },
      {
        property: "og:description",
        content:
          "Performance marketing, AI automation, and analytics for D2C and FMCG brands scaling across quick commerce and marketplaces.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Results />
        <CaseStudies />
        <Platforms />
        <Dashboard />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
