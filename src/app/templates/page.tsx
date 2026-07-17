/* eslint-disable @next/next/no-img-element */
"use client";

import { PageBackdropOrbs } from "@/components/page-backdrop";
import TemplatePrice from "@/components/template-price";
import {
  getDefaultVariantMap,
  resumeTemplates,
  type ResumeTemplate,
  type TemplateVariant,
} from "@/data/resume-templates";
import { useCallback, useEffect, useState } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";

type TemplateCard = ResumeTemplate;

const templateCards: TemplateCard[] = resumeTemplates;

function handleUseTemplate(templateTitle: string, colorLabel?: string) {
  const colorSuffix = colorLabel ? ` (${colorLabel})` : "";
  const message = `Hello! I would like to proceed with creating my professional resume using template *${templateTitle}${colorSuffix}*. Kindly assist me with the next steps. Thank you!`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/919074531637?text=${encodedMessage}`, "_blank");
}

function ColorSwatchButton({
  variant,
  isSelected,
  onSelect,
  size = "md",
}: {
  variant: TemplateVariant;
  isSelected: boolean;
  onSelect: (variantId: string) => void;
  size?: "sm" | "md";
}) {
  const isLight =
    variant.id === "yellow" ||
    variant.id === "tan" ||
    variant.id === "mint" ||
    variant.id === "gold";
  const sizeClass = size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onSelect(variant.id);
      }}
      aria-label={`${variant.label} color`}
      aria-pressed={isSelected}
      title={variant.label}
      className={`relative ${sizeClass} shrink-0 rounded-full border-2 border-white shadow-[0_2px_8px_rgba(15,41,32,0.22)] transition ${
        isSelected
          ? "scale-110 ring-2 ring-forest-800 ring-offset-1 ring-offset-cream-50"
          : "hover:scale-105"
      } ${isLight ? "shadow-inner" : ""}`}
      style={{ backgroundColor: variant.swatch }}
    />
  );
}

function TemplateColorSwatches({
  variants,
  selectedId,
  onSelect,
  layout = "modal",
}: {
  variants: TemplateVariant[];
  selectedId: string;
  onSelect: (variantId: string) => void;
  layout?: "modal" | "grid";
}) {
  const selectedVariant =
    variants.find((variant) => variant.id === selectedId) ?? variants[0];

  const swatches = variants.map((variant) => (
    <ColorSwatchButton
      key={`${variant.id}-${variant.image}`}
      variant={variant}
      isSelected={variant.id === selectedId}
      onSelect={onSelect}
      size={layout === "grid" ? "sm" : "md"}
    />
  ));

  if (layout === "grid") {
    return (
      <div
        className="mt-2.5 flex items-center gap-2 px-2"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-muted">
          Color
        </span>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
          {swatches}
        </div>
        <span className="shrink-0 text-[10px] font-semibold text-forest-700">
          {selectedVariant?.label}
        </span>
      </div>
    );
  }

  return (
    <div className="relative z-20 shrink-0 border-t border-sage-300/70 bg-cream-50 px-4 py-3 shadow-[0_-10px_28px_-14px_rgba(15,41,32,0.2)] sm:px-5">
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
          Color
        </span>
        <div className="flex min-w-0 flex-1 items-center gap-2.5 overflow-x-auto py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {swatches}
        </div>
        <span className="shrink-0 rounded-full bg-sage-100 px-2.5 py-1 text-xs font-semibold text-forest-800">
          {selectedVariant?.label}
        </span>
      </div>
    </div>
  );
}

function TemplatePreviewModal({
  cards,
  index,
  initialVariantId,
  onVariantChange,
  onClose,
  onPrev,
  onNext,
}: {
  cards: TemplateCard[];
  index: number;
  initialVariantId: string;
  onVariantChange: (templateTitle: string, variantId: string) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const card = cards[index];
  const hasPrev = index > 0;
  const hasNext = index < cards.length - 1;
  const [selectedVariantId, setSelectedVariantId] = useState(
    () => initialVariantId || card.variants[0]?.id || "",
  );

  const handleVariantSelect = (variantId: string) => {
    setSelectedVariantId(variantId);
    onVariantChange(card.title, variantId);
  };

  const activeVariant =
    card.variants.find((variant) => variant.id === selectedVariantId) ??
    card.variants[0] ??
    null;
  const previewImage = activeVariant?.image ?? card.image;

  useEffect(() => {
    card.variants.forEach((variant) => {
      const preload = new window.Image();
      preload.src = variant.image;
    });
  }, [card.variants]);

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
      className="fixed inset-0 z-[120] flex items-center justify-center bg-forest-950/80 p-2 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.title} template preview`}
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-6xl items-center justify-center gap-2 sm:gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        {hasPrev ? (
          <button
            type="button"
            onClick={onPrev}
            className="hidden shrink-0 rounded-full bg-cream-50/95 px-3 py-2 text-sm font-semibold text-forest-900 shadow-md hover:bg-cream-50 lg:inline-flex"
            aria-label="Previous template"
          >
            Prev
          </button>
        ) : (
          <span className="hidden w-[4.25rem] lg:inline-block" aria-hidden />
        )}

        <div className="flex h-[min(96vh,1080px)] w-full max-w-[min(94vw,540px)] flex-col overflow-hidden rounded-2xl border border-sage-300/50 bg-cream-50 shadow-2xl">
          <div className="flex shrink-0 items-center justify-between border-b border-sage-300/60 px-4 py-2.5 sm:px-5 sm:py-3">
            <div>
              <p className="text-sm font-semibold text-forest-900">{card.title}</p>
              <p className="text-xs text-muted">
                {index + 1} of {cards.length}
              </p>
              <TemplatePrice className="mt-1" size="sm" />
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

          <div className="relative isolate z-0 flex min-h-0 flex-1 items-stretch justify-center overflow-hidden bg-cream-200/60 px-2 py-2 sm:px-3 sm:py-3">
            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cream-50/95 px-2.5 py-1.5 text-xs font-semibold text-forest-900 shadow-md hover:bg-cream-50 lg:hidden"
                aria-label="Previous template"
              >
                Prev
              </button>
            )}

            <img
              src={previewImage}
              alt={`${card.title} — ${activeVariant?.label ?? "preview"}`}
              className="h-full w-full object-contain object-top"
            />

            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cream-50/95 px-2.5 py-1.5 text-xs font-semibold text-forest-900 shadow-md hover:bg-cream-50 lg:hidden"
                aria-label="Next template"
              >
                Next
              </button>
            )}
          </div>

          {card.variants.length > 0 && (
            <TemplateColorSwatches
              variants={card.variants}
              selectedId={selectedVariantId}
              onSelect={handleVariantSelect}
            />
          )}

          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-sage-300/60 bg-cream-50 px-4 py-2.5 sm:px-5 sm:py-3">
            <p className="text-xs text-muted sm:text-sm">
              Use arrow keys to browse · Esc to close
            </p>
            <button
              type="button"
              onClick={() =>
                handleUseTemplate(card.title, activeVariant?.label)
              }
              className="luxury-btn-primary shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition"
            >
              Use This
            </button>
          </div>
        </div>

        {hasNext ? (
          <button
            type="button"
            onClick={onNext}
            className="hidden shrink-0 rounded-full bg-cream-50/95 px-3 py-2 text-sm font-semibold text-forest-900 shadow-md hover:bg-cream-50 lg:inline-flex"
            aria-label="Next template"
          >
            Next
          </button>
        ) : (
          <span className="hidden w-[4.25rem] lg:inline-block" aria-hidden />
        )}
      </div>
    </div>
  );
}

function TemplateGrid({
  cards,
  variantByTemplate,
  onVariantChange,
  onPreview,
}: {
  cards: TemplateCard[];
  variantByTemplate: Record<string, string>;
  onVariantChange: (templateTitle: string, variantId: string) => void;
  onPreview: (index: number) => void;
}) {
  return (
    <>
      {cards.map((card, index) => {
        const selectedVariantId =
          variantByTemplate[card.title] ?? card.variants[0]?.id ?? "";
        const activeVariant =
          card.variants.find((variant) => variant.id === selectedVariantId) ??
          card.variants[0];
        const displayImage = activeVariant?.image ?? card.image;

        return (
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
                src={displayImage}
                alt={card.title}
                className="h-full w-full object-contain transition group-hover:scale-[1.02]"
              />
            </div>
            <span className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-forest-900/75 px-3 py-1 text-xs font-medium text-cream-50 opacity-100 transition [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
              <span className="[@media(hover:hover)]:hidden">Tap to view</span>
              <span className="hidden [@media(hover:hover)]:inline">Click to view</span>
            </span>
          </button>
          {card.variants.length > 0 && (
            <TemplateColorSwatches
              layout="grid"
              variants={card.variants}
              selectedId={selectedVariantId}
              onSelect={(variantId) => onVariantChange(card.title, variantId)}
            />
          )}
          <div className="mt-3 flex items-start justify-between gap-3 px-2 pb-1">
            <div>
              <span className="text-base font-semibold text-forest-900">{card.title}</span>
              <TemplatePrice className="mt-1" size="sm" />
            </div>
            <button
              type="button"
              onClick={() =>
                handleUseTemplate(card.title, activeVariant?.label)
              }
              className="text-sm font-semibold text-forest-700 hover:text-gold hover:underline"
            >
              Use This
            </button>
          </div>
        </div>
        );
      })}
    </>
  );
}

export default function TemplatesPage() {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [variantByTemplate, setVariantByTemplate] = useState<
    Record<string, string>
  >(() => getDefaultVariantMap(templateCards));

  const handleVariantChange = useCallback(
    (templateTitle: string, variantId: string) => {
      setVariantByTemplate((current) => ({
        ...current,
        [templateTitle]: variantId,
      }));
    },
    [],
  );

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
              variantByTemplate={variantByTemplate}
              onVariantChange={handleVariantChange}
              onPreview={setPreviewIndex}
            />
          </div>
        </section>
      </main>

      {previewIndex !== null && (
        <TemplatePreviewModal
          key={previewIndex}
          cards={templateCards}
          index={previewIndex}
          initialVariantId={
            variantByTemplate[templateCards[previewIndex].title] ?? ""
          }
          onVariantChange={handleVariantChange}
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
