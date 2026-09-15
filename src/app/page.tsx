import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Expertise } from "@/components/expertise";
import { Hero } from "@/components/hero";
import { Perspective } from "@/components/perspective";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Approach />
        <About />
        <Experience />
        <Perspective />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
