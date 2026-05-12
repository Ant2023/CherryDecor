import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f1e8] text-[#252318]">
      <Navbar />
      {/* HERO */}
      <section className="overflow-hidden border-b border-[#d8c7a7] bg-[#f7f1e8] shadow-[0_18px_45px_rgba(72,55,28,0.12)] lg:relative lg:min-h-[580px] lg:bg-[#eadfcc]">
        <div className="relative h-[430px] overflow-hidden bg-[#eadfcc] sm:h-[500px] lg:absolute lg:inset-0 lg:h-auto">
          <Image
            src="/about/charity-home.jpeg"
            alt="Charity Atelier event styling"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_top] brightness-[1.06] contrast-[1.08] saturate-[1.12] lg:translate-x-14 lg:scale-[1.04] lg:object-contain lg:object-right"
          />
          <p className="absolute left-5 top-5 z-10 bg-[#6F1D32]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#FFF9F0] shadow-[0_12px_30px_rgba(111,29,50,0.24)] backdrop-blur-sm lg:hidden">
            About Cherry
          </p>
        </div>

        <div className="hidden lg:absolute lg:inset-0 lg:block lg:bg-[linear-gradient(90deg,#f7f1e8_0%,rgba(247,241,232,0.94)_32%,rgba(247,241,232,0.46)_50%,rgba(247,241,232,0.12)_64%,rgba(247,241,232,0)_76%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:flex lg:min-h-[580px] lg:items-center lg:px-12 lg:py-0">
          <div className="mx-auto max-w-[360px] text-center sm:max-w-lg lg:mx-0 lg:text-left">
            <p className="mb-3 hidden text-[11px] font-bold uppercase tracking-[0.32em] text-[#9A6A25] lg:block">
              About Cherry
            </p>

            <h1 className="font-serif text-[32px] leading-[1.05] text-[#242116] sm:text-5xl md:text-6xl">
              Meet the eye behind the details.
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#514b3d] sm:mt-6 sm:text-base sm:leading-8 lg:mx-0">
              Thoughtful event styling shaped by warmth, care, and timeless
              detail.
            </p>

            <Link
              href="/inquiry"
              className="mx-auto mt-7 inline-flex bg-[#b58a3b] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#241816] transition hover:bg-[#292817] hover:text-white lg:mx-0 lg:mt-9 lg:px-8 lg:py-4 lg:text-xs"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
            OUR STORY
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Rooted in Family. <br />
            Styled With Heart.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#b58a3b]" />

          <p className="mt-8 max-w-md text-left leading-8 text-[#5e5748]">
            Charity’s passion for beautiful spaces began at home. As a wife and
            mother, she spent years thoughtfully designing and decorating homes,
            family celebrations, and meaningful gatherings for friends and loved
            ones.
          </p>

          <p className="mt-5 max-w-md text-left leading-8 text-[#5e5748]">
            What started as a natural gift for creating warm, elegant
            environments became something people admired and remembered. From
            intimate dinners to birthdays and family events, her eye for detail
            and love for hosting became the heart of every space she touched.
          </p>

          <p className="mt-5 max-w-md text-left leading-8 text-[#5e5748]">
            Most recently, Charity decided to bring that same passion to a
            larger scale, creating elevated event experiences that blend
            timeless decor, thoughtful styling, and meaningful moments.
          </p>
        </div>

        <div className="border border-[#b58a3b]/60 bg-[#efe6d8] p-4 shadow-xl">
          <div className="relative min-h-[560px] overflow-hidden bg-[#eadfcc]">
            <Image
              src="/about/charity-event.jpeg"
              alt="Charity event styling"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center p-2"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-[#d8c7a7] bg-[#fbf7ef] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-px w-12 bg-[#d8c7a7] sm:w-24" />
            <p className="whitespace-nowrap text-sm font-bold tracking-[0.4em] text-[#6f6047]">
              OUR VALUES
            </p>
            <div className="h-px w-12 bg-[#d8c7a7] sm:w-24" />
          </div>

          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="px-8">
              <p className="mb-4 text-3xl text-[#b58a3b]">✦</p>

              <h3 className="mb-4 text-sm uppercase tracking-[0.35em]">
                Creativity
              </h3>

              <p className="leading-7 text-[#5e5748]">
                We bring thoughtful ideas and refined design to every event.
              </p>
            </div>

            <div className="border-[#d8c7a7] px-8 md:border-x">
              <p className="mb-4 text-3xl text-[#b58a3b]">♕</p>

              <h3 className="mb-4 text-sm uppercase tracking-[0.35em]">
                Excellence
              </h3>

              <p className="leading-7 text-[#5e5748]">
                Every detail is planned and executed with intention.
              </p>
            </div>

            <div className="px-8">
              <p className="mb-4 text-3xl text-[#b58a3b]">♡</p>

              <h3 className="mb-4 text-sm uppercase tracking-[0.35em]">
                Connection
              </h3>

              <p className="leading-7 text-[#5e5748]">
                We value trust, communication, and meaningful experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="grid bg-[#eee3d4] lg:grid-cols-2">
        <div className="relative min-h-[560px] overflow-hidden bg-[#eadfcc]">
          <Image
            src="/about/charity-outdoor.jpeg"
            alt="Outdoor event styling"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-center p-2"
          />
        </div>

        <div className="flex items-center px-6 py-20 lg:px-20">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
            <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
              BEHIND EVERY DETAIL
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A Team That Cares
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[#b58a3b] lg:mx-0" />

            <p className="mt-8 text-left leading-8 text-[#5e5748]">
              Every celebration is approached with warmth, creativity, and
              attention to detail. We believe beautiful events should feel both
              elegant and personal — creating moments families and guests will
              remember for years to come.
            </p>

            <p className="mt-8 font-serif text-2xl italic text-[#b58a3b]">
              We can’t wait to celebrate with you.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
            OUR APPROACH
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Designed With Grace, Styled With Purpose.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#b58a3b]" />

          <p className="mt-8 max-w-md text-left leading-8 text-[#5e5748]">
            Every event begins with listening. We take time to understand the
            vision, atmosphere, and meaningful details that make each
            celebration unique before bringing it all to life through timeless
            styling and decor.
          </p>
        </div>

        <div className="border border-[#b58a3b]/60 bg-[#efe6d8] p-4 shadow-xl">
          <div
            className="min-h-[560px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90')",
            }}
          />
        </div>
      </section>

      <footer className="bg-[#18100F] px-6 py-10 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="font-serif text-3xl font-semibold text-white">
              Cherry Atelier
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#EADDD6]/70 md:mx-0">
              Decor and styling for intimate gatherings, thoughtful tables, and
              beautiful celebration spaces.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-[#EADDD6]/70 md:items-end">
            <div className="flex gap-5">
              <Link href="/#styles" className="transition hover:text-white">
                Services
              </Link>
              <Link href="/#gallery" className="transition hover:text-white">
                Gallery
              </Link>
              <Link href="/#inquiry" className="transition hover:text-white">
                Inquiry
              </Link>
            </div>

            <p>© 2026 Cherry Atelier. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
