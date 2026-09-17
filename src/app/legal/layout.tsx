import { LegalNav } from "@/components/legal-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader forceSolid />
      <main className="flex-1 pt-28 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <LegalNav />
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
