/* eslint-disable @next/next/no-img-element */
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
    <div className="rounded-xl border border-[#bdcabc] bg-white p-8 shadow-[0_4px_20px_-2px_rgba(0,109,54,0.08)] transition hover:border-emerald-700">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100/50 text-xl text-emerald-700">
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-[#0b1c30]">{title}</h3>
      <p className="mb-4 text-[#565e74]">{description}</p>
      {linkText && href ? (
        <a href={href} className="font-bold text-emerald-700 hover:underline">
          {linkText}
        </a>
      ) : null}
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <SiteHeader activePage="contact-us" />

      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-[#eff4ff] pb-12 pt-20 lg:pb-16">
          <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-5">
            <svg className="h-full w-full fill-current text-emerald-700" viewBox="0 0 100 100">
              <path d="M0 0 L100 0 L100 100 Z" />
            </svg>
          </div>
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-4xl font-bold leading-tight md:text-6xl">
                Get in touch with our Executive Support Team
              </h1>
              <p className="text-lg text-[#565e74]">
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

            <div className="rounded-xl border border-[#bdcabc] bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,109,54,0.08)] md:p-10 lg:col-span-7">
              <div className="mb-10">
                <h2 className="mb-1 text-3xl font-semibold">Send us a Message</h2>
                <p className="text-[#565e74]">
                  Our career consultants will review your request and get back to you shortly.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="space-y-2">
                    <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[#565e74]">
                      Full Name
                    </span>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-[#bdcabc] bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                    />
                  </label>

                  <label className="space-y-2">
                    <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[#565e74]">
                      Email Address
                    </span>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-[#bdcabc] bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[#565e74]">
                    Subject
                  </span>
                  <select className="w-full rounded-lg border border-[#bdcabc] bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700">
                    <option>Technical Support</option>
                    <option>Resume Writing Services</option>
                    <option>Enterprise Solutions</option>
                    <option>Billing Inquiry</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[#565e74]">
                    Your Message
                  </span>
                  <textarea
                    rows={6}
                    placeholder="How can we help you achieve your career goals?"
                    className="w-full resize-none rounded-lg border border-[#bdcabc] bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  />
                </label>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-10 py-4 font-semibold text-white shadow-sm transition hover:opacity-90 md:w-auto"
                >
                  Send Message <span aria-hidden="true">➤</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
