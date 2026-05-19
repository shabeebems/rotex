/* eslint-disable @next/next/no-img-element */
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";

type TemplateCard = {
  title: string;
  image: string;
};

const templateCards: TemplateCard[] = [
  {
    title: "The CEO Signature",
    image: "/templates/RRM001.jpg",
  },
  {
    title: "Director Tier",
    image: "/templates/RRM002.jpg",
  },
  {
    title: "The Studio Bold",
    image: "/templates/RRM003.jpg",
  },
  {
    title: "Impact Portfolio",
    image: "/templates/RRM004.jpg",
  },
  {
    title: "Standard Corporate",
    image: "/templates/RRM005.jpg",
  },
  {
    title: "The Recruiter's Choice",
    image: "/templates/RRM006.jpg",
  },
];

function TemplateGrid({ cards }: { cards: TemplateCard[] }) {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg bg-white p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_2px_4px_-1px_rgba(0,0,0,0.02)]"
        >
          <div className="relative aspect-[1/1.414] overflow-hidden rounded-xl border border-white/80 bg-gradient-to-br from-[#eff4ff] via-[#f6f8ff] to-[#e8f0ff] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(11,28,48,0.05)_1px,transparent_1px)] bg-[length:100%_12px]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-sky-400/15 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-slate-200/70 bg-white shadow-[0_12px_30px_-18px_rgba(11,28,48,0.35)]">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between px-2 pb-1">
            <span className="text-base font-semibold">{card.title}</span>
            <button type="button" className="text-sm font-semibold text-emerald-700 hover:underline">
              Use This
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default function TemplatesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f9ff] text-[#0b1c30]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(11,28,48,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,28,48,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <SiteHeader activePage="templates" />

      <main className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <header className="mb-20 max-w-3xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Expert Designs
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Professional Templates for Every Career Stage
          </h1>
          <p className="text-lg text-[#565e74]">
            Select from our collection of ATS-optimized templates designed by recruitment experts to help you stand out to hiring managers.
          </p>
        </header>

        <section className="rounded-3xl border border-white/70 bg-white/55 p-6 shadow-[0_18px_60px_-40px_rgba(11,28,48,0.35)] backdrop-blur-sm md:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <TemplateGrid cards={templateCards} />
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}