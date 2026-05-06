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
              <ContactInfoCard
                icon="📍"
                title="Headquarters"
                description="1200 Executive Plaza, Suite 400 Financial District, NY 10004"
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

        <section className="mx-auto mb-20 w-full max-w-7xl px-6 lg:px-10">
          <div className="relative h-[400px] overflow-hidden rounded-2xl border border-[#bdcabc]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_9crQnpC03lqQWHWgbEubSX7laa2Z7hnEFyMnUqCs9Lm1bP_58lQ_e3EA05DIaRht9h9Hm8QigacC7QK1ddxKD3Iqwf5r9fnoah5f4A-NZZWy-v9rhjLO771-hk7JKx7EQwOAD9hnM4bNYquxCbrFhM6kr4Jxbf9XgKTtfkCfgCcdKochSNKDGphRxl9hEdLDo6DDHqralPncWEH1eocRKZONBGON8kzb71n3ncLZ-wu9x87Hzk9BSiUSNDfINyXxKIRUSl7f38"
              alt="Map preview of office location"
              className="h-full w-full object-cover grayscale contrast-125 opacity-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-emerald-700/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-emerald-700 bg-white px-6 py-4 shadow-[0_4px_20px_-2px_rgba(0,109,54,0.08)]">
                <span className="text-emerald-700">📍</span>
                <span className="font-semibold text-[#0b1c30]">Visit our Executive Suite</span>
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
