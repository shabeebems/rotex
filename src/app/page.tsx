/* eslint-disable @next/next/no-img-element */
import AnimatedCube from "@/components/animated-cube";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";
import Link from "next/link";

const templateCards = [
  {
    title: "The Executive Peak",
    tag: "RRM001",
    image: "/templates/RRM001.jpg",
  },
  {
    title: "The Modernist",
    tag: "RRM002",
    image: "/templates/RRM002.jpg",
  },
  {
    title: "Creative Bloom",
    tag: "RRM005",
    image: "/templates/RRM005.jpg",
  },
  {
    title: "The Scholar",
    tag: "RRM006",
    image: "/templates/RRM006.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <SiteHeader activePage="home" />

      <main>
        <section className="overflow-hidden bg-white pb-20 pt-16 lg:pb-28 lg:pt-20">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Executive-Grade Resume Builder
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0b1c30] md:text-6xl">
                Elevate Your Career with{" "}
                <span className="text-emerald-700">Executive Authority</span>.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Transform your professional story into a high-impact document designed for recruiters and ATS systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/templates"
                  className="rounded-lg bg-emerald-700 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Templates
                </Link>
                <Link
                  href="/templates"
                  className="rounded-lg border border-emerald-700 px-8 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Browse All Templates →
                </Link>
              </div>
            </div>
            <div className="relative flex min-h-[360px] items-center justify-center">
              <div className="absolute inset-6 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="relative w-full max-w-md rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-[0_30px_80px_-20px_rgba(0,109,54,0.25)]">
                <AnimatedCube />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eff4ff] py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Why People Choose Us</h2>
              <p className="mt-3 text-slate-600">
                We combine industrial expertise with premium design to give you an edge.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                ["Precision Layouts", "Engineered spacing and hierarchy that recruiters can scan quickly."],
                ["AI Context Engine", "Smart suggestions for strong bullets and role-specific keywords."],
                ["Executive Privacy", "Your data is protected with strong security and private handling."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-slate-100 bg-white p-8">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Professional Templates</h2>
                <p className="mt-2 text-slate-600">Pick a design that matches your professional persona.</p>
              </div>
              <Link
                href="/templates"
                className="rounded-lg border border-emerald-700 px-5 py-2.5 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                View All Templates →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {templateCards.map((card) => (
                <div key={card.title} className="cursor-pointer">
                  <div className="mb-4 aspect-[3/4] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold">{card.title}</h4>
                  <p className="text-xs uppercase tracking-widest text-slate-500">{card.tag}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/templates"
                className="inline-block rounded-lg bg-emerald-700 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Explore All Templates
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-emerald-900 py-20 text-white">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">How It Works</h2>
              <p className="mt-3 text-emerald-100/70">Simple process to get your professional resume</p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Select a Template",
                  description: "Browse through our professional templates and choose the one that best fits your style"
                },
                {
                  step: "02",
                  title: "Share Your Details",
                  description: "Share your current resume or provide your work details via WhatsApp at +91 9074531637."
                },
                {
                  step: "03",
                  title: "ATS Optimization",
                  description: "We analyze your target job and add relevant keywords to make your resume ATS-friendly"
                },
                {
                  step: "04",
                  title: "Receive Your Resume",
                  description: "Get your professionally crafted resume in both Word and PDF formats within 24 hours"
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="mt-5 text-lg font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm text-emerald-100/70">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-6">
              <div className="inline-block rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold">
                ⚡ Receive your resume within 24 hours
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}