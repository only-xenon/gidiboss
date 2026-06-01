import { createFileRoute } from "@tanstack/react-router";
import drGideon from "@/assets/dr-gideon-new-v2.jpg";
import bookFront from "@/assets/drive-to-start-front.png";
import bookBack from "@/assets/drive-to-start-back.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Oludayo Taiwo Gideon — GidiBoss | Aeroport Group CEO" },
      {
        name: "description",
        content:
          "Official site of Dr. Oludayo Taiwo Gideon (GidiBoss) — Group CEO of Aeroport Group, convener of TRAVCONEXPO, and author of The Drive to Start.",
      },
      { property: "og:title", content: "Dr. Oludayo Taiwo Gideon — GidiBoss" },
      {
        property: "og:description",
        content:
          "Aviation & travel industry pioneer. Convener of TRAVCONEXPO. Author of The Drive to Start.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const BOOK_URL =
  "https://www.amazon.com/DRIVE-START-Oludayo-Taiwo-Gideon-ebook/dp/B0GR82HP5Y";

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#book", label: "The Book" },
    { href: "#businesses", label: "Our Group" },
    { href: "#travconexpo", label: "Travconexpo" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 hairline-b backdrop-blur-md" style={{ background: "rgba(8,15,30,0.88)" }}>
      <a href="#home" className="font-serif text-2xl font-semibold tracking-wider text-gold">
        GidiBoss
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[0.78rem] tracking-[0.14em] uppercase text-muted-cool hover:text-gold transition-colors font-medium">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href={BOOK_URL} target="_blank" rel="noopener" className="hidden md:inline-flex text-[0.72rem] tracking-[0.14em] uppercase text-gold hairline px-4 py-2 hover:bg-gold hover:text-navy transition-colors">
        Get the Book
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5 gold-rule">Group Managing Director &amp; CEO</div>
          <h1 className="font-serif font-semibold leading-[1.02] text-[clamp(3rem,7vw,6rem)] mb-2">
            Dr. Oludayo<br />
            Taiwo <span className="italic text-gold">Gideon</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl font-light text-muted-cool mt-3">
            Aeroport Group, Nigeria
          </p>
          <p className="text-[0.78rem] tracking-[0.16em] text-gold-pale/70 mt-3 mb-9">
            Ph.D &nbsp;·&nbsp; FCAI &nbsp;·&nbsp; MIHI &nbsp;·&nbsp; MITPN &nbsp;·&nbsp; DTTM &nbsp;·&nbsp; JP
          </p>
          <p className="text-cream/75 max-w-xl mb-10 leading-[1.85]">
            Visionary leader, aviation &amp; travel industry pioneer, published author and
            convener of Nigeria's first Travelpreneur Conference &amp; Expo. Building
            world-class travel institutions and empowering the next generation of travel
            professionals across Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center gap-3 px-8 py-3.5 hairline text-gold text-[0.78rem] tracking-[0.14em] uppercase font-medium hover:bg-gold hover:text-navy transition-colors">
              Discover More
            </a>
            <a href="#book" className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-navy text-[0.78rem] tracking-[0.14em] uppercase font-semibold hover:bg-gold-light transition-colors">
              The Drive to Start →
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative justify-self-center md:justify-self-end w-full max-w-md">
          <div className="absolute -top-3 -left-3 right-3 bottom-3 hairline pointer-events-none" />
          <div className="absolute -inset-6 rounded-full border border-gold/10 pointer-events-none" />
          <img
            src={drGideon}
            alt="Dr. Oludayo Taiwo Gideon, Group CEO Aeroport Group"
            className="relative w-full aspect-[4/5] object-cover object-top hairline"
            loading="eager"
          />
          <div className="absolute -bottom-4 left-6 bg-navy px-4 py-2 hairline">
            <p className="font-serif italic text-gold text-sm">"GidiBoss"</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "3,000+", l: "Professionals Trained" },
    { n: "10+", l: "Years of Excellence" },
    { n: "3", l: "Business Pillars" },
    { n: "2026", l: "Travconexpo Ed. 2" },
  ];
  return (
    <div className="hairline-t hairline-b grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-6 md:px-16" style={{ background: "rgba(13,26,48,0.6)" }}>
      {stats.map((s) => (
        <div key={s.l} className="text-center">
          <div className="font-serif font-semibold text-gold text-4xl md:text-5xl leading-none">{s.n}</div>
          <div className="text-[0.72rem] tracking-[0.12em] uppercase text-muted-cool mt-2">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <>
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2 className="font-serif font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-6">{title}</h2>
      <div className="gold-divider mb-10" />
    </>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 md:py-32" style={{ background: "var(--navy-mid)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
        <div className="relative">
          <div className="absolute -top-3 -left-3 right-3 bottom-3 hairline pointer-events-none" />
          <img src={drGideon} alt="Portrait of Dr. Oludayo Taiwo Gideon" className="relative w-full aspect-[3/4] object-cover hairline" />
        </div>
        <div>
          <SectionHeader eyebrow="About" title={<>A life built on vision, <span className="italic text-gold">execution</span> and service.</>} />
          <div className="space-y-5 text-cream/75 leading-[1.9] text-[0.98rem]">
            <p>
              Dr. Oludayo Taiwo Gideon — known widely as{" "}
              <span className="text-gold-pale font-medium">GidiBoss</span> or Dr. OTG —
              is the Group Managing Director and CEO of Aeroport Group of Companies, a
              multi-award-winning conglomerate with ventures spanning aviation, travel,
              logistics, hospitality, real estate and consulting.
            </p>
            <p>
              From humble beginnings — working as a cleaner, bakery assistant and riding
              motorcycles for survival — Dr. OTG built his first business without
              capital or connections. Today he is proof that purpose and grit can turn
              anyone into a builder of lasting impact.
            </p>
            <p>
              He holds a Postgraduate Diploma in Tourism &amp; Hospitality from NIHOTOUR
              and a Doctorate in Business Administration from Prowess University (USA).
              He leads the GidiBoss Heart of Kindness Initiative, empowering lives
              through scholarships and youth programmes.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {["Ph.D", "FCAI", "MIHI", "MITPN", "DTTM", "JP", "Author", "Convener"].map((t) => (
              <span key={t} className="px-4 py-1.5 hairline text-gold-pale text-[0.72rem] tracking-[0.12em] uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="relative px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
        {/* Book visual */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex gap-4 md:gap-6 items-center">
            <img
              src={bookBack}
              alt="Back cover of The Drive to Start by Dr. Oludayo Taiwo Gideon"
              className="relative w-[160px] md:w-[210px] aspect-[3/4] object-cover hairline shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500"
              loading="lazy"
            />
            <img
              src={bookFront}
              alt="The Drive to Start — front cover"
              className="relative w-[200px] md:w-[270px] aspect-[3/4] object-cover hairline shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 z-10"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="Published 2025" title={<>Build something from <span className="italic text-gold">nothing.</span></>} />
          <p className="text-cream/80 leading-[1.9] mb-5">
            <span className="font-serif italic text-gold">The Drive to Start</span> —
            published 2025 — is a practical, hard-won roadmap for founders who refuse
            to wait for perfect conditions. Drawn from Dr. Gideon's decade of building
            Aeroport Group from the ground up, it distils the mindset, systems and
            decisions behind businesses that survive their first chapters — and scale.
            Foreword by Dr. Linus Okorie MFR.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Turn limited resources into real momentum",
              "The founder operating system that actually works",
              "Build a brand and reputation before the budget",
              "Lessons from Africa's travel and aviation frontier",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-cream/75 text-[0.95rem]">
                <span className="text-gold mt-2 w-4 h-px bg-gold shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-4 my-7 bg-gold/[0.04] hairline p-5">
            <div className="w-[3px] self-stretch bg-gold shrink-0" />
            <div>
              <p className="font-serif italic text-cream/85 text-lg leading-[1.7]">
                "Raw. Relatable. Faith-driven. If you've been waiting for perfect
                conditions — this is your wake-up call."
              </p>
              <span className="block mt-2 text-xs tracking-wider text-muted-cool">— The Drive to Start</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-navy text-[0.78rem] tracking-[0.14em] uppercase font-semibold hover:bg-gold-light transition-colors">
              Buy on Amazon →
            </a>
            <a href="https://selar.com/thedrivetostart" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 hairline text-gold text-[0.78rem] tracking-[0.14em] uppercase font-medium hover:bg-gold hover:text-navy transition-colors">
              Buy on Selar →
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-3.5 hairline text-gold text-[0.78rem] tracking-[0.14em] uppercase font-medium hover:bg-gold hover:text-navy transition-colors">
              Bulk Orders
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-cool">
            Launched at the inaugural TRAVCONEXPO 2025 · Federal Palace Hotel, Victoria
            Island, Lagos.
          </p>
        </div>
      </div>
    </section>
  );
}

function Businesses() {
  const items = [
    {
      icon: "✈",
      name: "Aeroport Travels & Tours",
      tag: "IATA Approved · NANTA Member · Est. 2014",
      desc: "Multi-award winning, full-service travel management company with offices in Lagos, Port Harcourt & Aba — delivering unbeatable travel experiences for corporate, government and leisure clients across West Africa.",
      features: [
        "Flight Tickets — Local & International",
        "Visa Advisory (UK, USA, Canada, Schengen, Dubai)",
        "Hotel Accommodation Worldwide",
        "Corporate & Tour Packages",
        "Pilgrim & Group Travel",
        "Protocol & Airport Services",
      ],
    },
    {
      icon: "🎓",
      name: "ACATM",
      tag: "NCAA-Approved Aviation College · ATO/AA/031",
      desc: "Aeroport College of Aviation & Travel Management — Nigeria's premier NCAA-licensed aviation training institution. NANTA & ASTA registered, producing world-class aviation and travel professionals since 2014.",
      features: [
        "Cabin Crew Training (B737 CL/NG)",
        "Flight Dispatcher Training",
        "Aviation Management & Operations",
        "Drone Piloting & Helicopter Landing Officer",
        "Air Ticketing & Reservation",
        "Tourism & Hospitality Management",
      ],
    },
    {
      icon: "★",
      name: "TRAVCONEXPO",
      tag: "Nigeria's First Travelpreneur Conference",
      desc: "Organised by TRAVCONEX Projects Ltd — a subsidiary of Aeroport Group. Endorsed by ITPN, NANTA & FTAN. Building a movement that puts African Travelpreneurs on the world stage.",
      features: [
        "2025 Inaugural Edition — Federal Palace Hotel",
        "2026 Theme: The Next Frontier",
        "Sept 3–4, 2026 · Balmoral Convention Centre",
        "B2B sessions, masterclasses & networking",
        "Governance, revenue & digital innovation",
        "Vision: 5,000+ Travelpreneurs in 5 years",
      ],
    },
  ];
  return (
    <section id="businesses" className="px-6 md:px-16 py-24 md:py-32" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="The Group" title={<>One vision. Three <span className="italic text-gold">pillars.</span></>} />
        <div className="grid md:grid-cols-3 gap-px bg-gold/10 mt-4">
          {items.map((b) => (
            <div key={b.name} className="p-8 md:p-10 border-t-2 border-transparent hover:border-gold hover:-translate-y-1 transition-all" style={{ background: "var(--navy-light)" }}>
              <div className="w-11 h-11 hairline flex items-center justify-center mb-6 text-gold text-lg">{b.icon}</div>
              <h3 className="font-serif font-semibold text-2xl text-cream mb-1">{b.name}</h3>
              <div className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-4">{b.tag}</div>
              <p className="text-sm text-muted-cool leading-[1.85] mb-5">{b.desc}</p>
              <ul className="space-y-0 list-none">
                {b.features.map((f) => (
                  <li key={f} className="text-[0.82rem] text-cream/60 py-1.5 border-b border-white/5 flex items-center gap-2">
                    <span className="text-gold text-xs">→</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expo() {
  return (
    <section id="travconexpo" className="px-6 md:px-16 py-24 md:py-32" style={{ background: "var(--navy-mid)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 hairline text-gold text-[0.68rem] tracking-[0.16em] uppercase mb-6">
            Flagship Event · Edition 2
          </div>
          <SectionHeader eyebrow="Travconexpo 2026" title={<>Where the travel industry <span className="italic text-gold">convenes.</span></>} />
          <p className="text-cream/75 leading-[1.9]">
            Organised by TRAVCONEX Projects Ltd — a subsidiary of Aeroport Group —
            TRAVCONEXPO is Nigeria's first dedicated Travelpreneur Conference &amp;
            Expo. Building on a landmark inaugural edition in 2025, Edition 2 brings
            together operators, regulators, founders and innovators shaping the next
            decade of African travel. Endorsed by ITPN, NANTA &amp; FTAN.
          </p>
          <div className="expo-quote my-8 border-l-2 border-gold pl-6 py-4 bg-gold/[0.04]">
            <p className="font-serif italic text-cream text-lg leading-[1.7]">
              "We are not just hosting an expo — we are building a movement that puts
              African travelpreneurs on the world stage."
            </p>
            <cite className="block mt-3 text-xs not-italic tracking-wider text-gold">— Dr. Oludayo Taiwo Gideon</cite>
          </div>
          <div className="font-serif text-4xl font-semibold text-gold leading-tight">September 3–4, 2026</div>
          <p className="text-sm text-muted-cool mt-1">Balmoral Convention Centre, Federal Palace Hotel · Victoria Island, Lagos</p>
          <p className="text-xs text-muted-cool italic mt-3">Theme: "The Next Frontier: Expanding Opportunities in a Connected Travel World"</p>
        </div>

        <div className="relative p-10 md:p-14 hairline text-center overflow-hidden" style={{ background: "var(--navy-light)" }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-serif font-bold text-[5rem] md:text-[7rem] whitespace-nowrap text-gold/[0.04]">
              TRAVCONEXPO
            </span>
          </div>
          <div className="relative">
            <div className="text-[0.7rem] tracking-[0.22em] uppercase text-muted-cool mb-2">Edition</div>
            <div className="font-serif font-bold text-[6rem] md:text-[8rem] text-gold leading-none">02</div>
            <div className="grid grid-cols-2 gap-6 mt-10 text-left">
              {[
                { n: "1,500+", l: "Expected delegates" },
                { n: "60+", l: "Speakers & panels" },
                { n: "3", l: "Days of programming" },
                { n: "20+", l: "Exhibiting partners" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-2xl font-semibold text-cream">{s.n}</div>
                  <div className="text-[0.66rem] uppercase tracking-[0.1em] text-muted-cool mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 md:py-32" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <SectionHeader eyebrow="Connect" title={<>Speaking, partnerships, <span className="italic text-gold">press.</span></>} />
          <p className="text-cream/75 leading-[1.9] mb-10 max-w-md">
            For speaking invitations, media enquiries, partnership proposals and book
            orders, reach the office directly.
          </p>
          {[
            { label: "Office", value: "Aeroport Group HQ · Lagos, Nigeria" },
            { label: "Email", value: "office@aeroportgroup.com" },
            { label: "Book Enquiries", value: "books@aeroportgroup.com" },
            { label: "Social", value: "@gidiboss" },
          ].map((i) => (
            <div key={i.label} className="flex gap-4 mb-5 items-start">
              <div className="w-9 h-9 hairline flex items-center justify-center text-gold shrink-0">◆</div>
              <div>
                <div className="text-[0.68rem] tracking-[0.14em] uppercase text-muted-cool">{i.label}</div>
                <div className="text-cream text-[0.95rem] mt-0.5">{i.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            window.location.href = `mailto:office@aeroportgroup.com?subject=Website enquiry from ${data.get("name")}&body=${encodeURIComponent(String(data.get("message") ?? ""))}`;
          }}
        >
          <input name="name" required placeholder="Your name" className="px-4 py-3.5 bg-navy-light hairline text-cream placeholder:text-muted-cool focus:border-gold focus:outline-none transition-colors" />
          <input name="email" type="email" required placeholder="Email address" className="px-4 py-3.5 bg-navy-light hairline text-cream placeholder:text-muted-cool focus:border-gold focus:outline-none transition-colors" />
          <input name="subject" placeholder="Subject" className="px-4 py-3.5 bg-navy-light hairline text-cream placeholder:text-muted-cool focus:border-gold focus:outline-none transition-colors" />
          <textarea name="message" required placeholder="Your message" rows={5} className="px-4 py-3.5 bg-navy-light hairline text-cream placeholder:text-muted-cool focus:border-gold focus:outline-none transition-colors resize-y min-h-[140px]" />
          <button type="submit" className="self-start px-8 py-3.5 bg-gold text-navy text-[0.78rem] tracking-[0.14em] uppercase font-semibold hover:bg-gold-light transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hairline-t px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "var(--navy-mid)" }}>
      <a href="#home" className="font-serif text-xl font-semibold text-gold">GidiBoss</a>
      <p className="text-xs text-muted-cool">© {new Date().getFullYear()} Dr. Oludayo Taiwo Gideon. All rights reserved.</p>
      <div className="flex gap-8">
        {["About", "Book", "TRAVCONEXPO", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-muted-cool hover:text-gold transition-colors">{l}</a>
        ))}
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <div className="text-center text-[0.72rem] tracking-[0.12em] text-gold py-2 hairline-b" style={{ background: "rgba(201,168,76,0.08)" }}>
        gidiboss.com · Official Website of Dr. Oludayo Taiwo Gideon
      </div>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Book />
      <Businesses />
      <Expo />
      <Contact />
      <Footer />
    </main>
  );
}
