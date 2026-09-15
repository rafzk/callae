import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { ClientLogos } from "@/components/client-logos";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Perspective } from "@/components/perspective";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StatStrip } from "@/components/stat-strip";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Reveal className="border-b border-line bg-paper">
          <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8">
            <StatStrip align="center" bordered={false} />
          </div>
        </Reveal>
        <Reveal>
          <ClientLogos />
        </Reveal>
        <Reveal>
          <Expertise />
        </Reveal>
        <Reveal>
          <Approach />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Perspective />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
