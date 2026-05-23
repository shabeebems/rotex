/* eslint-disable @next/next/no-img-element */
import { PageBackdropOrbs } from "@/components/page-backdrop";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";

function ContactInfoCard({
  icon,
  title,
  description,
  linkText,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div className="luxury-card rounded-xl p-8 transition hover:border-forest-600">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-sage-100 text-xl text-forest-700">
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-forest-900">{title}</h3>
      <p className="mb-4 text-muted">{description}</p>
      {linkText && href ? (
        <a href={href} className="font-bold text-forest-700 hover:text-gold hover:underline">
          {linkText}
        </a>
      ) : null}
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="luxury-page">
      <SiteHeader activePage="contact-us" />

      <main className="min-h-screen">
        <section className="relative overflow-hidden luxury-section-hero pb-12 pt-20 lg:pb-16">
          <PageBackdropOrbs />
          <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-[0.07]">
            <svg className="h-full w-full fill-current text-forest-700" viewBox="0 0 100 100">
              <path d="M0 0 L100 0 L100 100 Z" />
            </svg>
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-4xl font-bold leading-tight text-forest-900 md:text-6xl">
                Get in touch with our Executive Support Team
              </h1>
              <p className="text-lg text-muted">
                Whether you need technical assistance or career guidance, our specialists are ready to help you elevate your professional presence.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-10 mb-20 w-full max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-6 lg:col-span-5">
              <ContactInfoCard
                icon="✉️"
                title="Email Support"
                description="Expect a response within 2 business hours."
                linkText="cvresume330@gmail.com"
                href="mailto:cvresume330@gmail.com"
              />
              <ContactInfoCard
                icon="📞"
                title="Phone Inquiries"
                description="Available every day, 9 AM - 12 AM."
                linkText="+91 90745 31637"
                href="tel:+919074531637"
              />
            </div>

            <div className="flex flex-col gap-6 lg:col-span-7">
              <a
                href="https://wa.me/919074531637"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-[#25D366] p-8 shadow-[0_8px_32px_-4px_rgba(37,211,102,0.35)] transition hover:shadow-[0_12px_40px_-4px_rgba(37,211,102,0.5)] md:p-10"
              >
                <span className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />
                <span className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-4xl shadow-inner">
                    💬
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Fastest way to reach us</p>
                    <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">Chat on WhatsApp</h2>
                    <p className="mt-1 text-white/90">Tap to open a conversation — we typically reply in minutes.</p>
                  </div>
                </div>

                <div className="relative mt-8 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#075e54] shadow transition group-hover:scale-105">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Start a Chat
                  </span>
                  <span className="text-sm text-white/70">+91 90745 31637</span>
                </div>
              </a>

              <div className="luxury-card rounded-xl p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-semibold text-forest-900">Frequently Asked Questions</h2>

                <details className="group border-b border-sage-300/70 py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 group-open:text-forest-700">
                    How quickly will I receive my resume?
                    <span className="text-xl transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">
                    Standard delivery is within <strong>24 hours</strong> of order confirmation. Express delivery (same-day) is available for an additional fee — just mention it when you chat with us on WhatsApp.
                  </p>
                </details>

                <details className="group border-b border-sage-300/70 py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 group-open:text-forest-700">
                    Can I request unlimited revisions?
                    <span className="text-xl transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">
                    Yes! We offer <strong>free revisions</strong> until you are 100% satisfied with your resume. Simply reach out via WhatsApp with your feedback and we&apos;ll get it updated right away.
                  </p>
                </details>

                <details className="group border-b border-sage-300/70 py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 group-open:text-forest-700">
                    What formats will I receive my resume in?
                    <span className="text-xl transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">
                    Your final resume is delivered as a <strong>PDF</strong> (print-ready) and a <strong>Word (.docx)</strong> file so you can make minor edits yourself whenever needed.
                  </p>
                </details>

                <details className="group py-4 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 group-open:text-forest-700">
                    How do I get started?
                    <span className="text-xl transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">
                    Browse our <a href="/templates" className="font-semibold text-forest-700 hover:text-gold hover:underline">resume templates</a>, pick the one that suits your style, then tap <strong>&quot;Use This&quot;</strong> — it&apos;ll open a WhatsApp chat with us pre-filled with your selection so we can get started immediately.
                  </p>
                </details>
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
