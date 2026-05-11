"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
const styleList = [
  "Birthdays",
  "Baby showers",
  "Bridal showers",
  "Dinner tables",
  "Backdrops",
  "Balloon details",
];

const gallery = [
  {
    label: "Table details",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Dinner styling",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Celebration setup",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Room styling",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#FBF7F1] text-[#3A2A24]">
      <Navbar />
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-6 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:pb-24 md:pt-14">
        {/* Images first on mobile */}
        <div className="order-1 grid grid-cols-12 gap-4 md:order-2">
          <div className="col-span-7 overflow-hidden rounded-b-[2rem] rounded-t-full bg-[#E7C8C1]">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"
              alt="Styled celebration table"
              className="h-[360px] w-full object-cover md:h-[500px]"
            />
          </div>

          <div className="col-span-5 flex flex-col gap-4 pt-8 md:pt-14">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#E8DDD2]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80"
                alt="Dinner table styling"
                className="h-40 w-full object-cover md:h-56"
              />
            </div>

            <div className="rounded-[1.5rem] bg-[#7A263A] p-5 text-white">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#E7C8C1]">
                Cherry’s touch
              </p>
              <p className="mt-3 text-sm leading-6 md:text-base">
                Soft, polished, and personal.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#E8DDD2]">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=80"
                alt="Event room decor"
                className="h-32 w-full object-cover md:h-44"
              />
            </div>
          </div>
        </div>

        {/* Text second on mobile */}
        <div className="order-2 flex flex-col justify-center md:order-1">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-[#B98B73]">
            Event decor studio
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            The room should feel as good as the celebration.
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-[#6E5A50]">
            Decor, tables, backdrops, and intimate setups for special gatherings.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
  <a
  href="#inquiry"
  className="rounded-full bg-gradient-to-r from-[#5A1727] via-[#7A263A] to-[#9A4F3F] px-6 py-3 text-center text-sm font-medium text-white shadow-[0_14px_32px_rgba(90,23,39,0.28)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(90,23,39,0.34)]"
>
  Plan a Setup
</a>

            <a
              href="#gallery"
              className="rounded-full border border-[#B98B73]/60 px-6 py-3 text-center text-sm font-medium text-[#5F4A42] transition hover:border-[#7A263A] hover:text-[#7A263A]"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
      

 {/* Services */}
<section
  id="styles"
  className="border-y border-[#E8DDD2] bg-[#FFFDF8] px-5 py-16 md:px-10"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 max-w-xl">
     
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#3A2A24] md:text-4xl">
        What Cherry can help with
      </h2>
    </div>

    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Tables",
          text: "Dinner setups, place settings, candles, florals, and soft details.",
          image:
            "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Backdrops",
          text: "Photo corners, welcome areas, balloon details, and statement moments.",
          image:
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
        },
        {
          title: "Showers & Birthdays",
          text: "Warm, pretty setups for baby showers, bridal showers, and birthdays.",
          image:
            "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="group overflow-hidden rounded-[2rem] bg-[#FBF7F1]"
        >
          <img
            src={service.image}
            alt={service.title}
            className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="p-6">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#3A2A24]">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#6E5A50]">
              {service.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* About */}
      <section
        id="note"
        className="bg-[#3A2A24] px-5 py-16 text-white md:px-10 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-[#E7C8C1]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
              alt="Decorated celebration space"
              className="h-[360px] w-full object-cover md:h-[430px]"
            />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#E7C8C1]">
              About Cherry
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Thoughtful styling without doing too much.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#F5EDE7] md:text-lg">
              Cherry Atelier is for celebrations that should feel warm,
              beautiful, and easy to enjoy.
            </p>
            <a
        href="/about"
        className="mt-8 inline-flex rounded-full border border-[#C9A99B]/50 px-6 py-3 text-sm font-medium text-[#F5EDE7] transition hover:border-[#C9A99B] hover:bg-[#C9A99B] hover:text-[#2A1A18]"
      >
        Learn more about Cherry
      </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#B98B73]">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                The feel we’re building.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#6E5A50]">
              Placeholder photos for now. Real event work goes here next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {gallery.map((item) => (
              <figure
                key={item.label}
                className="overflow-hidden rounded-[1.75rem] bg-[#E8DDD2]"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="px-5 py-4 text-sm text-[#6E5A50]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


     {/* Inquiry */}
<section id="inquiry" className="bg-[#241816] px-5 py-16 text-white md:px-10 md:py-20">
  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9A99B]">
        Start here
      </p>

      <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
        Tell Cherry what you’re planning.
      </h2>

      <p className="mt-5 max-w-sm text-sm leading-7 text-[#EADDD6]/80">
        Share the date, event type, and a few details about the setup.
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#EADDD6]/55 focus:border-[#C9A99B]"
          placeholder="Name"
        />

        <input
          className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#EADDD6]/55 focus:border-[#C9A99B]"
          placeholder="Email"
        />

        <input
          className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#EADDD6]/55 focus:border-[#C9A99B]"
          placeholder="Event type"
        />

        <input
          className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#EADDD6]/55 focus:border-[#C9A99B]"
          placeholder="Event date"
        />
      </div>

      <textarea
        className="mt-4 min-h-32 w-full rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#EADDD6]/55 focus:border-[#C9A99B]"
        placeholder="A few details about the setup"
      />

      <button className="mt-4 w-full rounded-full bg-[#C9A99B] px-6 py-3 text-sm font-semibold text-[#241816] shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-[#EADDD6]">
        Send Inquiry
      </button>
    </div>
  </div>
</section>

      <footer className="bg-[#18100F] px-5 py-10 text-white md:px-10">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="font-[var(--font-display)] text-3xl font-semibold text-white">
        Cherry Atelier
      </p>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#EADDD6]/70">
        Decor and styling for intimate gatherings, thoughtful tables, and beautiful celebration spaces.
      </p>
    </div>

    <div className="flex flex-col gap-3 text-sm text-[#EADDD6]/70 md:items-end">
      <div className="flex gap-5">
        <a href="#styles" className="transition hover:text-white">
          Services
        </a>
        <a href="#gallery" className="transition hover:text-white">
          Gallery
        </a>
        <a href="#inquiry" className="transition hover:text-white">
          Inquiry
        </a>
      </div>

      <p>© 2026 Cherry Atelier. All rights reserved.</p>
    </div>
  </div>
</footer>
    </main>
  );
}