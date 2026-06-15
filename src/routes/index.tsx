import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-links.jpg";
import bunkerImg from "@/assets/course-bunker.jpg";
import walkingImg from "@/assets/walking-golfer.jpg";
import stayImg from "@/assets/stay-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gowfe Flats × Tarandowah — Stay. Play. Pure Golf." },
      {
        name: "description",
        content:
          "A private-style golf stay paired with Tarandowah Golfers Club — one of Canada's most authentic links-style courses in Springfield, Ontario.",
      },
      { property: "og:title", content: "Gowfe Flats × Tarandowah" },
      { property: "og:description", content: "Stay. Play. Escape to pure golf." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 md:py-32 lg:py-40 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && (
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="mr-2 inline-block h-px w-8 align-middle bg-foreground/40" />
            {eyebrow}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}

function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-[var(--fairway)] text-primary-foreground hover:bg-[var(--ink)] hover:shadow-[0_10px_40px_-10px_oklch(0.32_0.06_145/0.5)]"
      : "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Gowfe Flats<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#concept" className="hover:text-foreground transition">Concept</a>
            <a href="#course" className="hover:text-foreground transition">Course</a>
            <a href="#weekend" className="hover:text-foreground transition">Weekend</a>
            <a href="#access" className="hover:text-foreground transition">Early Access</a>
          </nav>
          <a
            href="#access"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-medium uppercase tracking-wider text-background hover:bg-[var(--fairway)] transition"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* HERO */}
      <div id="top" ref={heroRef} className="relative h-[100svh] min-h-[680px] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 -top-10 -bottom-10"
        >
          <img
            src={heroImg}
            alt="Aerial view of Tarandowah Golfers Club"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pt-32 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto max-w-6xl flex-1 flex flex-col justify-center"
          >
            <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-white/70">
              Gowfe Flats <span className="mx-3 opacity-50">×</span> Tarandowah Golfers Club
            </p>
            <h1 className="font-display text-balance text-5xl font-light leading-[0.95] text-white md:text-7xl lg:text-[8rem]">
              Stay. Play.
              <br />
              <em className="italic font-normal text-[var(--fescue)]">Escape</em> to pure golf.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              A private-style golf stay concept paired with one of Canada's most authentic
              links-style courses — in the quiet heart of Ontario.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTA href="#access">Explore Stays & Packages</CTA>
              <a
                href="#course"
                className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-wide text-white border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                View Tarandowah Course →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mx-auto flex w-full max-w-6xl items-end justify-between text-white/70"
          >
            <p className="font-display text-xs italic md:text-sm">
              "Pure Golf. No Distractions."
            </p>
            <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em]">
              <span className="h-px w-12 bg-white/40" />
              Scroll
            </div>
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 - CONCEPT */}
      <Section id="concept" eyebrow="The Concept">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-balance text-4xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              A different kind of <em className="italic">golf getaway.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Gowfe Flats is built for golfers who want more than a tee time. It's a stay-and-play
              experience designed around small groups, weekend rhythm, and the kind of links
              immersion you usually have to fly across an ocean for.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-5 space-y-5 self-end"
          >
            {[
              "Group golf trips · 4–8 players",
              "Weekend escapes",
              "Tournament-style travel",
              "Links golf immersion",
            ].map((item, i) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-baseline gap-5 border-b border-border/60 pb-5"
              >
                <span className="font-display text-xs tabular-nums text-accent">
                  0{i + 1}
                </span>
                <span className="text-base md:text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* SECTION 3 - THE COURSE */}
      <section id="course" className="relative bg-[var(--ink)] text-primary-foreground overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:min-h-[100svh]">
          <div className="relative h-[60vh] lg:h-auto overflow-hidden">
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              src={bunkerImg}
              alt="Pot bunkers and fescue at Tarandowah"
              loading="lazy"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-24 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-lg"
            >
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/50">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-white/40" />
                The Golf Course
              </p>
              <h2 className="font-display text-5xl font-light leading-[1.05] md:text-6xl">
                Tarandowah <em className="italic text-[var(--fescue)]">Golfers Club.</em>
              </h2>
              <p className="mt-6 font-display italic text-xl text-white/70">
                "Pure golf requiring courage, skill, and strategy."
              </p>

              <div className="mt-12 grid grid-cols-3 gap-6 border-y border-white/15 py-8">
                {[
                  { v: "70", l: "Par" },
                  { v: "~7,000", l: "Yards" },
                  { v: "18", l: "Holes" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl md:text-4xl">{s.v}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="mt-10 space-y-4 text-white/75">
                {[
                  "Designed by renowned architect Martin Hawtree",
                  "True links-style layout · firm fairways · wind exposure",
                  "Deep bunkering and strategic shot design",
                  "Ranked among top public courses in Canada",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm md:text-base">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-[var(--fescue)]" />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm text-white/50">Springfield, Ontario</p>

              <div className="mt-8">
                <a
                  href="#weekend"
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-white hover:text-[var(--ink)] transition"
                >
                  See Course Details →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHY IT WORKS */}
      <Section eyebrow="Designed as One Experience">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl font-light leading-[1.05] md:text-5xl">
              Golf and stay, <em className="italic">stitched together.</em>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Most golf trips feel disconnected — you book tee times, then figure out everything
              else. Gowfe Flats removes the seams.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {[
              { t: "Accommodation", d: "Walking distance or short drive to the first tee." },
              { t: "Tee times", d: "Secured in advance, around your group rhythm." },
              { t: "Group-ready", d: "Layouts built for 4–8 golfers, not couples." },
              { t: "Weekend rhythm", d: "Arrive → play → relax → repeat." },
            ].map((f) => (
              <motion.div
                key={f.t}
                variants={fadeUp}
                className="bg-card p-8 md:p-10"
              >
                <h3 className="font-display text-xl font-medium">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* SECTION 5 - WEEKEND FLOW */}
      <section id="weekend" className="relative bg-[var(--sand)] grain">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-foreground/40" />
              Experience Flow
            </p>
            <h2 className="font-display max-w-3xl text-balance text-4xl font-light leading-[1.05] md:text-6xl">
              Your weekend at <em className="italic">Gowfe Flats.</em>
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
            {[
              {
                day: "Day 01",
                title: "Arrival",
                bullets: [
                  "Check-in & settle",
                  "Warm-up session at Tarandowah",
                  "Evening hangout / group dinner",
                ],
              },
              {
                day: "Day 02",
                title: "The Round",
                bullets: [
                  "Morning tee time when wind peaks",
                  "Afternoon recovery or second round",
                  "Social night · clubhouse rhythm",
                ],
              },
              {
                day: "Day 03",
                title: "Departure",
                bullets: [
                  "Optional final round",
                  "Relaxed checkout",
                  "Scorecard memories home",
                ],
              },
            ].map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-background p-8 md:p-12"
              >
                <div className="md:col-span-3">
                  <p className="font-display text-xs tracking-[0.3em] text-accent uppercase">
                    {d.day}
                  </p>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl font-light">{d.title}</h3>
                </div>
                <ul className="md:col-span-9 grid sm:grid-cols-3 gap-6">
                  {d.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - WHO IT'S FOR (split with image) */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 lg:min-h-[90vh]">
          <div className="order-2 lg:order-1 flex items-center px-6 py-24 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-lg"
            >
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="mr-2 inline-block h-px w-8 align-middle bg-foreground/40" />
                Who it's for
              </p>
              <h2 className="font-display text-4xl font-light leading-[1.05] md:text-5xl">
                Built for <em className="italic">serious</em> golf trips.
              </h2>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--fairway)] mb-5">
                  Perfect for
                </p>
                <ul className="space-y-3 text-base">
                  {[
                    "Groups of friends · 4–8 golfers",
                    "Trips from Toronto, GTA & London corridor",
                    "Weekend competition groups",
                    "Golf culture travelers",
                    "Corporate golf retreats",
                  ].map((t) => (
                    <li key={t} className="flex items-baseline gap-3">
                      <span className="text-accent">●</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                  Not ideal for
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Casual resort tourists</li>
                  <li>Rushed 9-hole players</li>
                  <li>Non-golf-focused stays</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[60vh] lg:h-auto overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              src={walkingImg}
              alt="Golfer walking the links at dawn"
              loading="lazy"
              width={1400}
              height={1750}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 - HIGHLIGHTS */}
      <Section eyebrow="Why Golfers Return">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display max-w-3xl text-balance text-4xl font-light leading-[1.05] md:text-6xl"
        >
          The course <em className="italic">never plays the same</em> twice.
        </motion.h2>

        <div className="mt-20 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "I", t: "Wind-shaped strategy", d: "Every round rewrites itself with the breeze." },
            { n: "II", t: "Fast & firm conditions", d: "Run-outs, bounces, ground game required." },
            { n: "III", t: "Links bunkering", d: "Deep, revetted, unforgiving." },
            { n: "IV", t: "Fescue rough", d: "Honest visual edges — pick your line carefully." },
            { n: "V", t: "Walkable & traditional", d: "Push cart culture, no carts required." },
            { n: "VI", t: "Ontario reputation", d: "Quietly respected. Loudly enjoyed." },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              <div className="font-display text-xs tracking-[0.3em] text-accent">{f.n}</div>
              <h3 className="mt-3 font-display text-xl">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SECTION 8 - EARLY ACCESS */}
      <section id="access" className="relative bg-[var(--fairway)] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={stayImg}
            alt=""
            aria-hidden
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
              <span className="mr-2 inline-block h-px w-8 align-middle bg-white/50" />
              2027 Soft Launch
            </p>
            <h2 className="font-display text-balance text-5xl font-light leading-[1] md:text-7xl">
              Limited weekends.
              <br />
              <em className="italic text-[var(--fescue)]">High-demand</em> tee times.
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden lg:grid-cols-3">
            {[
              { y: "2026", t: "Concept & interest list", live: false },
              { y: "2027", t: "Soft launch weekends", live: true },
              { y: "2028", t: "Full 3-unit rollout", live: false },
            ].map((p) => (
              <div key={p.y} className="bg-[var(--fairway)] p-10">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl">{p.y}</span>
                  {p.live && (
                    <span className="rounded-full bg-[var(--fescue)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[var(--ink)]">
                      Live
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-white/70">{p.t}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--sand)] text-[var(--ink)] px-7 py-3.5 text-sm font-medium hover:bg-white transition"
            >
              Join Early Booking List →
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Reserve Priority Weekends
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section className="relative px-6 py-32 md:py-44 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Be Part of the First Season
          </p>
          <h2 className="font-display text-balance text-5xl font-light leading-[1] md:text-7xl lg:text-8xl">
            The first tee box is <em className="italic">almost open.</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Limited weekends. High-demand tee times. Designed for small groups only.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <CTA href="#">Get Early Access</CTA>
            <a
              href="mailto:hello@gowfeflats.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium text-foreground border border-foreground/30 rounded-full hover:bg-foreground/5 transition"
            >
              Ask About Group Packages →
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[var(--ink)] text-white/60">
        <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display text-2xl text-white">
              Gowfe Flats<span className="text-[var(--fescue)]">.</span>
            </p>
            <p className="mt-2 text-sm">Springfield, Ontario · Canada</p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} · Stay · Play · Pure Golf
          </p>
        </div>
      </footer>
    </main>
  );
}
