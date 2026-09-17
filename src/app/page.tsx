import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { ClientLogos } from "@/components/client-logos";
import { Contact } from "@/components/contact";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Perspective } from "@/components/perspective";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
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
