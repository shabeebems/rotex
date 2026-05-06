import Link from "next/link";

type SiteHeaderProps = {
  activePage: "home" | "templates" | "contact-us";
};

const navItems: Array<{
  href: "/" | "/templates" | "/contact-us";
  label: string;
  key: SiteHeaderProps["activePage"];
}> = [
  { href: "/templates", label: "Templates", key: "templates" },
  { href: "/", label: "Home", key: "home" },
  { href: "/contact-us", label: "Contact Us", key: "contact-us" },
];

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="text-xl font-black tracking-tight text-emerald-700">Rotex ResumeMaker</div>
        <div className="hidden items-center space-x-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                activePage === item.key
                  ? "border-b-2 border-emerald-600 px-1 py-1 font-bold text-emerald-600"
                  : "text-slate-600 transition hover:text-emerald-600"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="rounded-lg bg-emerald-700 px-6 py-2.5 font-semibold text-white transition hover:opacity-90">
          Create Resume
        </button>
      </nav>
    </header>
  );
}
