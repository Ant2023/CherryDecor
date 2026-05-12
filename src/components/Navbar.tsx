"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#styles" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9a4.75 4.75 0 0 1-4.75 4.75h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Zm0 1.5A3.25 3.25 0 0 0 4.25 7.5v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9a3.25 3.25 0 0 0-3.25-3.25h-9Zm4.5 3.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm4.9-2.15a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M14.55 3.25c.25 2.3 1.55 3.9 3.7 4.25v2.35a6.7 6.7 0 0 1-3.65-1.15v5.95c0 3.45-2.2 5.95-5.45 5.95a5.18 5.18 0 0 1-5.4-5.2c0-3.15 2.5-5.35 5.55-5.35.4 0 .78.05 1.15.15v2.55a3.2 3.2 0 0 0-1.1-.2c-1.55 0-2.8 1.05-2.8 2.75 0 1.58 1.08 2.68 2.62 2.68 1.7 0 2.75-1.18 2.75-3.18V3.25h2.63Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M13.35 21.25v-8.4h2.8l.42-3.27h-3.22V7.5c0-.95.26-1.6 1.63-1.6h1.74V2.98a23.2 23.2 0 0 0-2.53-.13c-2.5 0-4.22 1.53-4.22 4.33v2.4H7.14v3.27h2.83v8.4h3.38Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about";
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E7D8C8]/80 bg-[#FFF9F0]/90 shadow-[0_10px_30px_rgba(69,38,24,0.06)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="group" onClick={() => setMenuOpen(false)}>
            <p className="font-serif text-3xl font-semibold leading-none tracking-[-0.04em] text-[#6F1D32]">
              Cherry Atelier
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#B78A57]">
              Decor & Styling
            </p>
          </Link>

          <nav className="hidden items-center rounded-full border border-[#E7D8C8] bg-white/65 px-2 py-2 shadow-[0_12px_30px_rgba(69,38,24,0.06)] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-[#6F1D32] text-white shadow-[0_8px_18px_rgba(111,29,50,0.22)]"
                    : "text-[#4F3930] hover:bg-[#F3E7D8] hover:text-[#6F1D32]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#inquiry"
            className="hidden rounded-full border border-[#B78A57]/60 bg-[#2B241A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_12px_28px_rgba(43,36,26,0.18)] transition hover:bg-[#6F1D32] md:inline-flex"
          >
            Inquire
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D8C8] bg-white/80 shadow-sm md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-[2px] w-5 bg-[#3A2A24]" />
              <span className="h-[2px] w-5 bg-[#3A2A24]" />
              <span className="h-[2px] w-5 bg-[#3A2A24]" />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col bg-[#FFF9F0] px-6 py-6 md:hidden">
          <div className="flex items-center justify-between border-b border-[#E7D8C8] pb-5">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <p className="font-serif text-2xl font-semibold tracking-[-0.04em] text-[#6F1D32]">
                Cherry Atelier
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#B78A57]">
                Decor & Styling
              </p>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D8C8] bg-white text-transparent shadow-sm"
              aria-label="Close menu"
            >
              <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#3A2A24]" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#3A2A24]" />
            </button>
          </div>

          <nav className="mt-8 divide-y divide-[#E7D8C8] border-b border-[#E7D8C8]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-[13px] font-bold uppercase tracking-[0.2em] transition ${
                  isActive(item.href)
                    ? "text-[#6F1D32]"
                    : "text-[#3A2A24] hover:text-[#6F1D32]"
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive(item.href) ? "bg-[#6F1D32]" : "bg-[#B78A57]/55"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#B78A57]">
              Follow
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D8C8] bg-white text-[#6F1D32] shadow-[0_10px_22px_rgba(69,38,24,0.08)] transition hover:border-[#6F1D32] hover:bg-[#6F1D32] hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-auto">
            <Link
              href="/#inquiry"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-[#2B241A] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(43,36,26,0.22)]"
            >
              Start an Inquiry
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
