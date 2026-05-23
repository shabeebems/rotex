/* eslint-disable @next/next/no-img-element */
"use client";

import { PageBackdropOrbs } from "@/components/page-backdrop";
import { useCallback, useEffect, useState } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";

type TemplateCard = {
  title: string;
  image: string;
};

const templateCards: TemplateCard[] = [
  {
    title: "RRM001",
    image: "/templates/RRM001.jpg",
  },
  {
    title: "RRM002",
    image: "/templates/RRM002.jpg",
  },
  {
    title: "RRM003",
    image: "/templates/RRM003.jpg",
  },
  {
    title: "RRM004",
    image: "/templates/RRM004.jpg",
  },
  {
    title: "RRM005",
    image: "/templates/RRM005.jpg",
  },
  {
    title: "RRM006",
    image: "/templates/RRM006.jpg",
  },
  {
    title: "RRM007",
    image: "/templates/RRM007.jpg",
  },
  {
    title: "RRM008",
    image: "/templates/RRM008.jpg",
  },
  {
    title: "RRM009",
    image: "/templates/RRM009.jpg",
  },
];

function handleUseTemplate(templateTitle: string) {
  const message = `Hello! I would like to proceed with creating my professional resume using template *${templateTitle}*. Kindly assist me with the next steps. Thank you!`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/919074531637?text=${encodedMessage}`, "_blank");
}

function TemplatePreviewModal({
  cards,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  cards: TemplateCard[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const card = cards[index];
  const hasPrev = index > 0;
  const hasNext = index < cards.length - 1;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasPrev) onPrev();
      if (event.key === "ArrowRight" && hasNext) onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.title} template preview`}
    >
      <button
        type="button"
        aria-label="Close preview"
        className="absolute inset-0 bg-forest-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-sage-300/50 bg-cream-50 shadow-2xl">
        <div className="flex items-center justify-between border-b border-sage-300/60 px-4 py-3 sm:px-5">
          <div>
            <p className="text-sm font-semibold text-forest-900">{card.title}</p>
            <p className="text-xs text-muted">
              {index + 1} of {cards.length}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted hover:bg-sage-100"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-cream-200/60 p-4 sm:p-6">
          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-2 z-10 rounded-full bg-cream-50/95 px-3 py-2 text-sm font-semibold text-forest-900 shadow-md hover:bg-cream-50 sm:left-4"
              aria-label="Previous template"
            >
              Prev
            </button>
          )}

          <img
            src={card.image}
            alt={card.title}
            className="max-h-[calc(92vh-8rem)] w-full object-contain"
          />

          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-2 z-10 rounded-full bg-cream-50/95 px-3 py-2 text-sm font-semibold text-forest-900 shadow-md hover:bg-cream-50 sm:right-4"
              aria-label="Next template"
            >
              Next
            </button>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-sage-300/60 px-4 py-3 sm:px-5">
          <p className="text-xs text-muted sm:text-sm">
            Use arrow keys to browse · Esc to close
          </p>
          <button
            type="button"
            onClick={() => handleUseTemplate(card.title)}
            className="luxury-btn-primary shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition"
          >
            Use This
          </button>
        </div>
      </div>
    </div>
  );
}

function TemplateGrid({
  cards,
  onPreview,
}: {
  cards: TemplateCard[];
  onPreview: (index: number) => void;
}) {
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="luxury-card rounded-lg bg-cream-50/95 p-2"
        >
          <button
            type="button"
            onClick={() => onPreview(index)}
            className="luxury-template-frame group relative aspect-[1/1.414] w-full overflow-hidden rounded-xl border border-cream-50/90 p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition hover:ring-2 hover:ring-forest-500/35"
            aria-label={`View ${card.title} full size`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,41,32,0.04)_1px,transparent_1px)] bg-[length:100%_12px]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-forest-500/12 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-gold/18 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-sage-300/70 bg-cream-50 shadow-[0_12px_30px_-18px_rgba(15,41,32,0.28)]">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain transition group-hover:scale-[1.02]"
              />
            </div>
            <span className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-forest-900/75 px-3 py-1 text-xs font-medium text-cream-50 opacity-100 transition [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
              <span className="[@media(hover:hover)]:hidden">Tap to view</span>
              <span className="hidden [@media(hover:hover)]:inline">Click to view</span>
            </span>
          </button>
          <div className="mt-3 flex items-center justify-between px-2 pb-1">
            <span className="text-base font-semibold text-forest-900">{card.title}</span>
            <button
              type="button"
              onClick={() => handleUseTemplate(card.title)}
              className="text-sm font-semibold text-forest-700 hover:text-gold hover:underline"
            >
              Use This
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default function TemplatesPage() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const closePreview = useCallback(() => setPreviewIndex(null), []);

  const showPrev = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current > 0 ? current - 1 : current,
    );
  }, []);

  const showNext = useCallback(() => {
    setPreviewIndex((current) =>
      current !== null && current < templateCards.length - 1
        ? current + 1
        : current,
    );
  }, []);

  return (
    <div className="luxury-page">
      <PageBackdropOrbs />
      <SiteHeader activePage="templates" />

      <main className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <header className="mb-20 max-w-3xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
            Expert Designs
          </span>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-forest-900 md:text-6xl">
            Professional Templates for Every Career Stage
          </h1>
          <p className="text-lg text-muted">
            Select from our collection of ATS-optimized templates designed by recruitment experts to help you stand out to hiring managers.
          </p>
        </header>

        <section className="luxury-card-glass rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <TemplateGrid
              cards={templateCards}
              onPreview={setPreviewIndex}
            />
          </div>
        </section>
      </main>

      {previewIndex !== null && (
        <TemplatePreviewModal
          cards={templateCards}
          index={previewIndex}
          onClose={closePreview}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
