"use client"
import Link from "next/link";
import { useState } from "react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="text-xl font-black tracking-tight text-emerald-700">Rotex ResumeMaker</div>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          className="block rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  activePage === item.key
                    ? "block border-l-4 border-emerald-600 pl-3 font-bold text-emerald-600"
                    : "block text-slate-600 transition hover:text-emerald-600"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}