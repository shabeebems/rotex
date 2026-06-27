"use client"
import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-sage-300/60 bg-cream-50/95 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={1323}
            height={1189}
            priority
            unoptimized
            className="h-10 w-auto sm:h-11"
          />
          <span className="text-xl font-black tracking-tight text-forest-700">
            Rotex ResumeMaker
          </span>
        </Link>

        <div className="hidden items-center space-x-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                activePage === item.key
                  ? "border-b-2 border-gold px-1 py-1 font-bold text-forest-700"
                  : "text-muted transition hover:text-forest-600"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="block rounded-lg p-2 text-muted hover:bg-sage-100 md:hidden"
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

      {isMobileMenuOpen && (
        <div className="border-t border-sage-300/60 bg-cream-50 md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  activePage === item.key
                    ? "block border-l-4 border-gold pl-3 font-bold text-forest-700"
                    : "block text-muted transition hover:text-forest-600"
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
