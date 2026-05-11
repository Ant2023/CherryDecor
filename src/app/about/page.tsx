import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f1e8] text-[#252318]">
      <Navbar />
      {/* HERO */}
      <section className="relative min-h-[580px] overflow-hidden border-b border-[#d8c7a7] bg-[#eadfcc] shadow-[0_18px_45px_rgba(72,55,28,0.12)]">
        <Image
          src="/about/charity-home.jpeg"
          alt="Charity Atelier event styling"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8]/95 via-[#f7f1e8]/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-6 lg:px-12">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl leading-tight text-[#242116] md:text-6xl">
              Crafting Beautiful Moments That Last a Lifetime
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-[#514b3d]">
              We create thoughtful, refined event experiences with care,
              intention, and timeless detail.
            </p>

            <Link
              href="/inquiry"
              className="mt-9 inline-flex bg-[#292817] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#b58a3b]"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
            OUR STORY
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Rooted in Family. <br />
            Styled With Heart.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#b58a3b]" />

          <p className="mt-8 max-w-md leading-8 text-[#5e5748]">
            Charity’s passion for beautiful spaces began at home. As a wife and
            mother, she spent years thoughtfully designing and decorating homes,
            family celebrations, and meaningful gatherings for friends and loved
            ones.
          </p>

          <p className="mt-5 max-w-md leading-8 text-[#5e5748]">
            What started as a natural gift for creating warm, elegant
            environments became something people admired and remembered. From
            intimate dinners to birthdays and family events, her eye for detail
            and love for hosting became the heart of every space she touched.
          </p>

          <p className="mt-5 max-w-md leading-8 text-[#5e5748]">
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
          <div className="mb-12 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-[#d8c7a7]" />
            <p className="text-sm tracking-[0.4em] text-[#6f6047]">
              OUR VALUES
            </p>
            <div className="h-px w-24 bg-[#d8c7a7]" />
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
          <div className="max-w-lg">
            <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
              BEHIND EVERY DETAIL
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A Team That Cares
            </h2>

            <div className="mt-6 h-px w-16 bg-[#b58a3b]" />

            <p className="mt-8 leading-8 text-[#5e5748]">
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
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm tracking-[0.35em] text-[#b58a3b]">
            OUR APPROACH
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Designed With Grace, Styled With Purpose.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#b58a3b]" />

          <p className="mt-8 max-w-md leading-8 text-[#5e5748]">
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
    </main>
  );
}