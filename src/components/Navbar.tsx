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
              <p className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[#6F1D32]">
                Cherry Atelier
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#B78A57]">
                Decor & Styling
              </p>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D8C8] bg-white text-2xl text-[#3A2A24] shadow-sm"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-5 py-5 text-2xl font-semibold tracking-[-0.04em] transition ${
                  isActive(item.href)
                    ? "bg-[#6F1D32] text-white"
                    : "bg-white/70 text-[#3A2A24] hover:bg-[#F3E7D8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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