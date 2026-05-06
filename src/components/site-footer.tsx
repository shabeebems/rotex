export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 md:grid-cols-2 lg:px-10">
        <div>
          <div className="mb-4 text-lg font-bold text-emerald-800">Rotex ResumeMaker</div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            © 2024 Rotex ResumeMaker. Precision in Career Growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-4 text-xs uppercase tracking-widest text-slate-500 md:justify-end">
          <a className="transition hover:text-emerald-500 hover:underline" href="#">
            Terms of Service
          </a>
          <a className="transition hover:text-emerald-500 hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="transition hover:text-emerald-500 hover:underline" href="#">
            Help Center
          </a>
          <a className="transition hover:text-emerald-500 hover:underline" href="#">
            Career Advice
          </a>
          <a className="transition hover:text-emerald-500 hover:underline" href="https://wa.me/919074531637">
            WhatsApp Support
          </a>
        </div>
      </div>
    </footer>
  );
}
