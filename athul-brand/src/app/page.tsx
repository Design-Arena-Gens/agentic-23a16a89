export default function Home() {
  const colorPalette = [
    {
      name: "Electric Coral",
      value: "#FF5D5A",
      usage: "Primary buttons, energetic accents for calls-to-action.",
    },
    {
      name: "Azure Pulse",
      value: "#2563EB",
      usage: "Links, trust cues, platform badges.",
    },
    {
      name: "Noir Ink",
      value: "#0F172A",
      usage: "Typography, card backgrounds, overlays.",
    },
    {
      name: "Foam White",
      value: "#F8FAFC",
      usage: "Section backgrounds, negative space, legibility.",
    },
    {
      name: "Fluoro Lime",
      value: "#C7F164",
      usage: "Progress indicators, highlights on graphics mockups.",
    },
  ];

  const positioning = [
    {
      title: "Crystal Kolors Production Muscle",
      description:
        "Factory-level print finishing (spot UV, embossing, laser cutting) with same-day dispatch across Kochi.",
    },
    {
      title: "Designer-Led Brand Thinking",
      description:
        "Direct access to Athul for brand direction, motion-ready social assets, and packaging that converts shelf-browsers.",
    },
    {
      title: "Online-First Fulfilment",
      description:
        "WhatsApp storefront, automated quote builder, and curated print bundles tailored for creators, cafés, and boutiques.",
    },
  ];

  const signatureOffers = [
    {
      name: "Launch Lab Bundle",
      price: "₹18,500",
      timeline: "10-day sprint",
      description:
        "Brand kit + five hero social creatives + 250 premium business cards + 10 product stickers.",
      differentiator:
        "Ideal for founders announcing a new venture or rebrand with cohesive digital + print collateral.",
    },
    {
      name: "Retail Momentum Pack",
      price: "₹24,900",
      timeline: "14-day sprint",
      description:
        "Shelf-ready packaging redesign, in-store poster set, menu/flyer refresh, and QR-enabled loyalty cards.",
      differentiator:
        "Targets cafés, bakeries, salons wanting footfall growth with Crystal Kolors' specialty finishes.",
    },
    {
      name: "Creator Drop Kit",
      price: "₹12,500",
      timeline: "7-day sprint",
      description:
        "Merch launch graphics, mockups, 50 apparel neck labels, 100 thank-you cards, and unboxing sticker sheet.",
      differentiator:
        "Built for Instagram-first creators who monetise through limited drops and want an elevated unpacking experience.",
    },
  ];

  const socialPlatforms = [
    {
      platform: "Instagram",
      handle: "@inkbridge.studio",
      cadence: "5 posts + 10 stories weekly",
      goals: [
        "Showcase before/after redesigns with swipeable carousels.",
        "Share print process reels shot on-site at Crystal Kolors.",
        "Highlight client testimonials with templated story frames.",
      ],
      hooks: [
        "“How we turned a dull menu into a QR-powered sales machine in 48 hours.”",
        "“3 print finishes Kochi founders aren't using (yet).”",
        "“Pricing reveal: What ₹15K can unlock when design meets production.”",
      ],
    },
    {
      platform: "WhatsApp Business",
      handle: "wa.me/916238765432",
      cadence: "Always-on automation",
      goals: [
        "Quick-quote flow that collects size, quantity, finish reference, and delivery timeline.",
        "Broadcast capsule updates (promo print slots, festive bundles).",
        "Catalogue featuring ready-made print bundles with mockups.",
      ],
      hooks: [
        "“Reply with ‘MENU’ to see sample layouts + pricing in 30 seconds.”",
        "“Festive spot-UV upgrade for the first 10 café partners.”",
        "“Creator drop checklist delivered straight to your chat.”",
      ],
    },
    {
      platform: "LinkedIn",
      handle: "Athul P | InkBridge Studio",
      cadence: "2 thought-leadership posts weekly",
      goals: [
        "Position Athul as the go-to print strategist for Kerala SMEs.",
        "Write mini case studies on margin impact from packaging upgrades.",
        "Cross-collab with Crystal Kolors leadership for credibility.",
      ],
      hooks: [
        "“Printing is not an expense when the menu sells for you.”",
        "“Why Kerala boutiques need tactile storytelling on the shelf.”",
        "“Inside the Crystal Kolors toolkit powering our online storefront.”",
      ],
    },
  ];

  const funnel = [
    {
      step: "Discover",
      tactics:
        "Reels + carousel teasers with `Link in bio` to Notion landing page. Influencer seeding through micro cafés and boutique owners.",
    },
    {
      step: "Capture",
      tactics:
        "Lead magnet: ‘Kerala Launch Kit’ PDF collecting name, email, WhatsApp. Automate follow-up via WhatsApp template and email sequence.",
    },
    {
      step: "Nurture",
      tactics:
        "3-day story series: problem (Day 1), behind-the-scenes print process (Day 2), offer drop + CTA (Day 3). Weekly case study digest on email.",
    },
    {
      step: "Convert",
      tactics:
        "WhatsApp quote builder with tiered upsells, Calendly consult slots, and UPI deposit request handled via Crystal Kolors invoicing.",
    },
    {
      step: "Delight",
      tactics:
        "Unboxing clip request, referral bonus of 10% off next print run, pre-scheduled testimonial template in Canva for clients to fill.",
    },
  ];

  const contentCalendar = [
    {
      window: "Week 1",
      focus: "Brand reveal + authority building",
      deliverable:
        "Brand story carousel, founder intro reel shot at Crystal Kolors, Instagram story poll on print needs.",
    },
    {
      window: "Week 2",
      focus: "Offer validation",
      deliverable:
        "Breakdown of Launch Lab Bundle, WhatsApp automation walkthrough, user-generated content repost.",
    },
    {
      window: "Week 3",
      focus: "Social proof push",
      deliverable:
        "Case study carousel, LinkedIn post on ROI, Live session with a café owner discussing menu redesign.",
    },
    {
      window: "Week 4",
      focus: "Conversion sprint",
      deliverable:
        "Limited-time spot UV upgrade announcement, countdown sticker stories, behind-the-scenes packing reel.",
    },
  ];

  const tools = [
    {
      name: "Notion HQ",
      role: "Public landing page and resource library with embedded enquiry form.",
    },
    {
      name: "Zapier",
      role: "Sync Typeform enquiries to WhatsApp templates, Google Sheets job tracker, and Calendar reminders.",
    },
    {
      name: "Canva + Figma",
      role: "Template inheritance for stories/carousels and quick client co-creation sessions.",
    },
    {
      name: "Stripe / Razorpay",
      role: "Collect booking deposits online; fallback to UPI QR linked to Crystal Kolors billing.",
    },
    {
      name: "Google Drive Showcase",
      role: "Organise mockups, before/after results, and print finish swatches for clients to pick remotely.",
    },
  ];

  const differentiators = [
    "Competitors push commodity pricing; InkBridge Studio sells premium, curated bundles anchored in business outcomes.",
    "Crystal Kolors provides immediate access to specialty finishes competitors outsource, cutting down turnaround time.",
    "Athul's design eye means every print run is launched with deploy-ready social assets, unlike printer-only shops.",
  ];

  const brandVoice = [
    {
      trait: "Confident guide",
      copy: "Uses data-backed statements (‘15 cafés scaled with QR menus’). Avoids jargon, keeps tone punchy.",
    },
    {
      trait: "Visual-first storyteller",
      copy: "Always pairs copy with mockups or process reels. Shows tactile surfaces, emboss shots, and color swatches.",
    },
    {
      trait: "Local yet aspirational",
      copy: "Celebrates Kochi creativity while benchmarking against global DTC and café brands for inspiration.",
    },
  ];

  const quickWins = [
    "Film a 45-second hyperlapse of spot UV and foil stamping to use as evergreen reel background.",
    "Design a Canva story template with interactive sliders for ‘Rate your current brand deck’.",
    "Launch a Google Form titled ‘Menu Makeover Audit’ to pre-qualify leads before DM conversations.",
    "Offer a ‘3 print finish sample pack’ deliverable for ₹499 redeemable against first project.",
  ];

  return (
    <div className="min-h-screen pb-24 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-24 sm:px-10">
        <header className="space-y-10 rounded-3xl border border-white/10 bg-slate-950/60 p-10 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <span className="rounded-full border border-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-slate-300">
              InkBridge Studio
            </span>
            <span className="text-sm text-slate-400">
              Powered by Crystal Kolors · Kochi, Kerala
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Design-to-print experiences built by Athul for Kerala founders, cafés,
            and creators who need premium collateral without the agency overhead.
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            InkBridge Studio runs as an online-first brand, plugging Athul&apos;s
            graphic design craft directly into Crystal Kolors&apos; production
            floor. The result: strategy-driven visuals, tactile print finishes, and
            social content that sells before the first sample ships.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[#FF5D5A] px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[#FF5D5A]/40 transition hover:translate-y-0.5 hover:bg-[#ff7c79]"
              href="https://wa.me/916238765432?text=Hi%20Athul%2C%20I%27m%20ready%20to%20launch%20with%20InkBridge%20Studio."
              target="_blank"
              rel="noreferrer"
            >
              Start a WhatsApp Briefing
            </a>
            <a
              className="rounded-full border border-slate-600/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-300 hover:text-white"
              href="mailto:athul.design@inkbridge.studio?subject=InkBridge%20Studio%20Collaboration"
            >
              Book a 20-min Consult
            </a>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-[2fr,3fr]">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Brand Positioning
            </h2>
            <p className="text-slate-300">
              An online-only boutique brand that fuses high-touch design direction
              with industrial print capabilities—letting Athul operate as a
              strategist and Crystal Kolors as the production backbone.
            </p>
            <ul className="space-y-4 text-sm text-slate-200">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/5 bg-slate-900/80 p-4 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Signature Offers
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {signatureOffers.map((offer) => (
                <article
                  key={offer.name}
                  className="flex flex-col gap-3 rounded-xl border border-[#FF5D5A]/20 bg-slate-900/70 p-5"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {offer.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {offer.timeline} · {offer.price}
                    </p>
                  </div>
                  <p className="text-sm text-slate-200">{offer.description}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
                    {offer.differentiator}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Brand Voice
            </h2>
            <div className="space-y-4">
              {brandVoice.map((voice) => (
                <div
                  key={voice.trait}
                  className="rounded-xl border border-white/5 bg-slate-900/70 p-5"
                >
                  <p className="text-sm font-semibold text-white">{voice.trait}</p>
                  <p className="mt-2 text-sm text-slate-300">{voice.copy}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#FF5D5A]/30 bg-slate-900/70 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#FF5D5A]">
                Signature Sign-off
              </p>
              <p className="mt-2 text-sm text-slate-200">
                “Crafted with Crystal precision. Signed by Athul.”
              </p>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Brand System
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {colorPalette.map((color) => (
                <div
                  key={color.name}
                  className="rounded-xl border border-white/5 bg-slate-900/80 p-4"
                >
                  <div
                    className="h-16 rounded-lg"
                    style={{ background: color.value }}
                  />
                  <div className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400">
                    {color.name}
                  </div>
                  <p className="text-sm font-medium text-white">{color.value}</p>
                  <p className="mt-1 text-xs text-slate-300">{color.usage}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              {positioning.map((point) => (
                <li
                  key={point.title}
                  className="rounded-xl border border-white/5 bg-slate-900/80 p-4"
                >
                  <p className="font-semibold text-white">{point.title}</p>
                  <p className="mt-2 text-sm text-slate-300">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-slate-950/60 p-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Social Media Command Centre
            </h2>
            <p className="max-w-3xl text-slate-300">
              Prioritise Instagram for daily storytelling, WhatsApp for conversions,
              and LinkedIn for authority. Each platform ladders up to the same
              bundles and case studies.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {socialPlatforms.map((platform) => (
              <article
                key={platform.platform}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6"
              >
                <header>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C7F164]">
                    {platform.platform}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {platform.handle}
                  </h3>
                  <p className="text-xs text-slate-400">{platform.cadence}</p>
                </header>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Objectives
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {platform.goals.map((goal) => (
                      <li key={goal} className="leading-relaxed">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Hook Library
                  </p>
                  <ul className="mt-2 space-y-2 text-xs text-slate-300">
                    {platform.hooks.map((hook) => (
                      <li key={hook} className="rounded border border-white/10 p-3">
                        {hook}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Conversion Funnel
            </h2>
            <ul className="space-y-5">
              {funnel.map((stage) => (
                <li
                  key={stage.step}
                  className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-[#C7F164]">
                    {stage.step}
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{stage.tactics}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Tool Stack
            </h2>
            <ul className="space-y-4">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="rounded-xl border border-white/5 bg-slate-900/70 p-5"
                >
                  <p className="text-sm font-semibold text-white">{tool.name}</p>
                  <p className="mt-1 text-sm text-slate-300">{tool.role}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-[#2563EB]/40 bg-[#1e293b]/80 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#2563EB]">
                Automations
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Typeform enquiry → Zapier → WhatsApp template + Sheet + Calendar.
                Close won deals sync to Trello board for production tracking at
                Crystal Kolors.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              30-Day Content Rhythm
            </h2>
            <ul className="space-y-4">
              {contentCalendar.map((slot) => (
                <li
                  key={slot.window}
                  className="rounded-xl border border-[#FF5D5A]/20 bg-slate-900/80 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {slot.window}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {slot.focus}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{slot.deliverable}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
              Quick Wins & Activations
            </h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {quickWins.map((win) => (
                <li
                  key={win}
                  className="rounded-xl border border-white/10 bg-slate-900/80 p-4 leading-relaxed"
                >
                  {win}
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-[#C7F164]/30 bg-[#1a2e16]/40 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C7F164]">
                Growth Metric
              </p>
              <p className="mt-2 text-sm text-[#C7F164]/90">
                Target 20 high-intent DMs/month with a 40% conversion to discovery
                calls, closing 8 retainer or bundle projects monthly.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/60 p-8">
          <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-slate-400">
            Launch Checklist
          </h2>
          <ol className="space-y-4 text-sm text-slate-200">
            <li className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
              Secure domains inkbridge.studio & inkbridge.in, forward to a Notion
              minisite holding offer breakdowns and lead capture form.
            </li>
            <li className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
              Film on-site assets at Crystal Kolors (wide, macro, action shots) for
              evergreen reel and website looping background.
            </li>
            <li className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
              Spin up WhatsApp Business profile with catalogue SKUs mirroring the
              signature bundles, automated away message, and CTA buttons.
            </li>
            <li className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
              Craft a lead nurture email series (Welcome, Case Study, Offer, Testimonial).
            </li>
            <li className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
              Line up three pilot clients (café, boutique, creator) for discounted
              first month in exchange for detailed testimonials and referrals.
            </li>
          </ol>
          <div className="rounded-xl border border-[#2563EB]/30 bg-[#1d2752]/50 p-5 text-sm text-slate-100">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8fb5ff]">
              Crystal Kolors Amplification
            </p>
            <p className="mt-2 text-slate-200">
              Cross-post flagship projects on @crystalkolors with co-branded
              captions to leverage their existing footprint while positioning
              InkBridge as the premium bespoke arm.
            </p>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} InkBridge Studio · Athul</span>
          <div className="flex gap-4">
            <a
              className="transition hover:text-[#FF5D5A]"
              href="https://www.crystalkolors.com"
              target="_blank"
              rel="noreferrer"
            >
              Crystal Kolors
            </a>
            <a
              className="transition hover:text-[#FF5D5A]"
              href="https://www.instagram.com/crystalkolors"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="transition hover:text-[#FF5D5A]"
              href="mailto:athul.design@inkbridge.studio"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
