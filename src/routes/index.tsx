import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Lock, Users, Activity, Home as HomeIcon, FileText, Check } from "lucide-react";
import { Header, Footer } from "@/components/site/Layout";
import { HudPanel, WrongActionToast, ReportCard, Metronome } from "@/components/site/Hud";
import { Reveal, GlowCard, MagneticButton, Eyebrow, PlaceholderSlot } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LifeSaver-VR — Practise CPR in virtual reality" },
      { name: "description", content: "VR Basic Life Support training for colleges, hospitals and companies in India. Practise the full response, make mistakes safely, get a scored report." },
      { property: "og:title", content: "LifeSaver-VR — Practise CPR in virtual reality" },
      { property: "og:description", content: "A person collapses in a virtual park. You check, call and compress. Then you see your score." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <MarketDataSection />
        <Steps />
        <Modules />
        <Practice />
        <Institutions />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 lg:pt-44">
      <div className="blob blob-urgency animate-heartbeat -right-20 top-24 h-[28rem] w-[28rem]" />
      <div className="blob blob-calm -left-32 bottom-0 h-72 w-72" />
      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow tone="urgency">VR Basic Life Support · India</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(3rem,8vw,7.2rem)] font-bold leading-[0.9]">
              Someone just<br />collapsed.<br /><span className="text-urgency">You're first.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Put on a headset. Walk into a park. Check responsiveness, check breathing, call for help, start CPR. Then see exactly how you did.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton href="#pilot">Start learning <ArrowRight className="h-4 w-4" /></MagneticButton>
            <a href="#how" className="draw-link text-sm font-medium">See the scenario</a>
          </Reveal>
        </div>
        <div className="relative lg:col-span-5 lg:pt-16">
          <Reveal delay={200}><HudPanel /></Reveal>
          <Reveal delay={600} className="absolute -bottom-10 -left-6 hidden sm:block lg:-left-16">
            <div className="animate-toast-in" style={{ animationDelay: "1.4s" }}><WrongActionToast /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MarketDataSection() {
  const cards = [
    {
      icon: <Users className="h-8 w-8" />,
      text: "The health ministry says bystander CPR in India sits between 1.3% and 9.8%, versus nearly half the population trained in high-income countries.",
      label: "Bystander CPR Rate",
      accent: true,
    },
    {
      icon: <Activity className="h-8 w-8" />,
      text: "It also says bystander CPR can raise survival two to three times.",
      label: "Survival Odds",
      accent: false,
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      text: "One North India study found 92.5% of out-of-hospital arrests happened at home. Trained family members are a big audience.",
      label: "Arrests at Home",
      accent: false,
    },
    {
      icon: <FileText className="h-8 w-8" />,
      text: "A review of Indian studies found bystander CPR ranging from 0% to under 10%, apart from one outlier at 27.8%.",
      label: "Research Findings",
      accent: true,
    },
  ];

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:pr-6">
            <Reveal><Eyebrow tone="urgency">The market data</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
                Why the need is real (India)
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg text-muted-foreground">
                India has one of the lowest bystander CPR rates globally. When an emergency strikes, it's usually at home. That makes training laypeople and family members not just useful—it's critical.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={cn(
                    "flex h-full min-h-[280px] flex-col rounded-2xl p-8 transition-transform hover:-translate-y-1",
                    c.accent ? "bg-urgency text-primary-foreground shadow-xl" : "border border-border bg-secondary/30 text-foreground"
                  )}
                >
                  <div className={cn("mb-6", c.accent ? "text-primary-foreground" : "text-muted-foreground")}>
                    {c.icon}
                  </div>
                  <p className={cn("flex-grow text-[1.05rem] leading-relaxed", c.accent ? "font-medium" : "")}>
                    {c.text}
                  </p>
                  <hr className={cn("my-6 w-full opacity-30", c.accent ? "border-primary-foreground" : "border-border")} />
                  <p className={cn("font-medium", c.accent ? "" : "text-foreground")}>
                    {c.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { k: "See", t: "A real-feeling emergency", d: "A person drops on a park path. People nearby. No pause button. You decide what to do first." },
    { k: "Act", t: "Your hands do the work", d: "Tap their shoulders, watch the chest, call EMS, place both hands and compress. Every action is tracked." },
    { k: "Improve", t: "Mistakes cost points, not lives", d: "Shake the person, splash water or freeze, and you'll know instantly. Your report shows what to fix." },
  ];
  return (
    <section id="how" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow>The loop</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-5xl font-bold leading-[0.95] lg:sticky lg:top-32">See.<br />Act.<br /><span className="text-calm">Improve.</span></h2></Reveal>
        </div>
        <ol className="lg:col-span-8">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.k} delay={i * 100} className="group grid grid-cols-[4rem_1fr] gap-6 border-t border-border py-10 sm:grid-cols-[6rem_1fr_1.2fr]">
              <span className="font-hud text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="text-3xl font-semibold transition-colors group-hover:text-crimson">{s.t}</h3>
              <p className="col-start-2 text-muted-foreground sm:col-start-3">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Modules() {
  const mods = [
    { n: "01", t: "BLS Demonstration", d: "Guided walk-through. Prompts on every step.", state: "Available", ok: true },
    { n: "02", t: "BLS Practice", d: "No prompts. Timer, score, wrong-action detection.", state: "Available", ok: true },
    { n: "03", t: "Fracture / Fall Injury", d: "Scene safety, immobilisation, calling for help.", state: "In development", ok: false },
  ];
  return (
    <section id="modules" className="relative bg-ink py-28 text-paper">
      <div className="blob blob-urgency left-1/2 top-10 h-64 w-64 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal><h2 className="max-w-xl text-5xl font-bold leading-[0.95] md:text-6xl">Start guided.<br />Finish on your own.</h2></Reveal>
          <Reveal delay={100}><p className="max-w-xs text-sm opacity-70">Modules unlock in order. Learners move on when their practice score holds up.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {mods.map((m, i) => (
            <Reveal key={m.n} delay={i * 110} className={cn(i === 0 && "md:col-span-5", i === 1 && "md:col-span-4 md:mt-16", i === 2 && "md:col-span-3 md:mt-32")}>
              <GlowCard tilt className="rounded-2xl">
                <div className={cn("relative grain overflow-hidden rounded-2xl border border-paper/10 bg-paper/5 p-6", !m.ok && "opacity-70")}>
                  <HeartbeatAnimation ok={m.ok} className="mb-6 aspect-[4/3] border-paper/15 bg-paper/5" />
                  <div className="flex items-center justify-between font-hud text-[11px] uppercase">
                    <span className="opacity-60">Module {m.n}</span>
                    <span className={cn("flex items-center gap-1", m.ok ? "text-mint" : "text-amber")}>
                      {!m.ok && <Lock className="h-3 w-3" />}{m.state}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{m.t}</h3>
                  <p className="mt-2 text-sm opacity-70">{m.d}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal><Eyebrow tone="urgency">Try it here</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-5xl font-bold leading-[0.95]">Can you hold<br />110 a minute?</h2></Reveal>
          <Reveal delay={160}><p className="mt-5 max-w-md text-muted-foreground">Compressions should land between 100 and 120 per minute. Tap along for ten seconds. Most people drift.</p></Reveal>
          <Reveal delay={240} className="mt-10"><Metronome /></Reveal>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-8">
          <div className="blob blob-calm -right-10 -top-10 h-72 w-72" />
          <Reveal delay={150}><ReportCard /></Reveal>
          <p className="mt-3 font-hud text-[10px] uppercase text-muted-foreground">Sample report · every session ends with one</p>
        </div>
      </div>
    </section>
  );
}

function Institutions() {
  const who = ["Medical & nursing colleges", "Hospitals", "Corporates", "Schools"];
  return (
    <section id="institutions" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <div className="px-6 py-24 lg:col-span-7 lg:border-r lg:border-border lg:pr-16">
          <Reveal><Eyebrow tone="calm">For institutions</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95]">Train a whole cohort.<br />See who's ready.</h2></Reveal>
          <Reveal delay={160}><p className="mt-6 max-w-lg text-muted-foreground">Run sessions on your own headsets. Every learner gets a report. You get a view across the group: who's hitting the steps, who's missing breathing checks, who needs another round.</p></Reveal>
          <ul className="mt-10 flex flex-wrap gap-2">
            {who.map((w, i) => (
              <Reveal as="li" key={w} delay={200 + i * 60}>
                <span className="inline-block rounded-full border border-border px-4 py-2 text-sm">{w}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="px-6 py-24 lg:col-span-5 lg:pl-12">
          <Reveal>
            <p className="font-hud text-[11px] uppercase text-muted-foreground">A pilot, in short</p>
            <ol className="mt-6 space-y-6">
              {[["Week 1", "Set up headsets, onboard your trainers"], ["Weeks 2–4", "Learners run Demonstration, then Practice"], ["Week 5", "Review cohort results together"]].map(([w, t]) => (
                <li key={w} className="flex gap-5">
                  <span className="w-20 shrink-0 font-hud text-sm text-teal">{w}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-muted-foreground">LifeSaver-VR supports practice and training. It is not an accredited certification and does not replace hands-on instruction.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-background py-32 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-tighter">Pricing</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <PricingCard
            badge="Core product"
            title="Annual LICENSE"
            features={[
              "Full BLS practice scenario",
              "Updates throughout the year",
              "Timer, scoring, mistake feedback",
              "Built for colleges, hospitals, corporates"
            ]}
            price="₹15,000"
            priceSub="per headset / year"
            buttonLabel="Request a pilot"
            footer="Includes updates and analytics"
          />
          <PricingCard
            badge="No VR experience needed"
            title="Turnkey KIT"
            features={[
              "Headset, ready to run",
              "Device management set up",
              "On-site setup",
              "Staff training session"
            ]}
            price="Cost + 10–15%"
            priceSub="one-time kit price"
            buttonLabel="Get a kit quote"
            footer="Quote based on current headset cost"
          />
          <PricingCard
            badge="Add-on"
            title="Analytics DASHBOARD"
            features={[
              "Cohort scores and attempts",
              "Most common mistakes",
              "Progress trends over time",
              "Export results for faculty"
            ]}
            price="Included in Pro"
            priceSub="paid add-on in Basic"
            buttonLabel="See the dashboard"
            footer="Add-on price on request"
          />
        </div>

        <Reveal delay={200} className="mt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-3xl border border-border bg-secondary/50 p-8 sm:p-10 transition-colors hover:bg-secondary">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-foreground">Certification partnership</h3>
              <p className="mt-2 text-muted-foreground">
                For accredited training bodies. You certify; BLS-VR provides the hands-on practice before the exam. Revenue is shared.
              </p>
            </div>
            <MagneticButton href="#partner" variant="urgency" className="mt-6 md:mt-0 shrink-0">
              Talk partnership <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-12 text-xs text-muted-foreground">
          Prices are placeholders for planning. BLS-VR is practice and training support, not an accredited certification.
        </div>
      </div>
    </section>
  );
}

function PricingCard({ badge, title, features, price, priceSub, buttonLabel, footer }: any) {
  const [t1, t2] = title.split(" ");
  return (
    <Reveal delay={100} className="h-full">
      <div className="flex h-full flex-col rounded-3xl border border-border bg-card shadow-lg hover:shadow-xl hover:border-primary/20 overflow-hidden transition-all">
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-wide uppercase text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-urgency"></span>
              {badge}
            </span>
          </div>
          
          <h3 className="text-3xl font-medium text-center mb-8">{t1} <strong className="font-extrabold">{t2}</strong></h3>
          
          <ul className="mb-10 space-y-4 flex-grow px-2">
            {features.map((f: string, i: number) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-urgency text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-foreground/90 leading-tight">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto text-center">
            <div className="mb-6">
              <p className="text-4xl font-bold tracking-tight text-foreground mb-2">{price}</p>
              <p className="text-sm text-muted-foreground font-medium">{priceSub}</p>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-urgency px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-6px_var(--crimson)] transition-transform hover:-translate-y-0.5"
            >
              {buttonLabel}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            
            <div className="mt-6 inline-flex rounded-full border border-border bg-secondary px-4 py-1.5 text-[10px] text-muted-foreground">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}


function HeartbeatAnimation({ className, ok }: { className?: string; ok: boolean }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden rounded-2xl border bg-secondary/30", className)}>
      <div className="blob blob-calm -left-10 top-2 h-32 w-32 opacity-20" />
      <div className="blob blob-urgency -bottom-10 right-0 h-32 w-32 opacity-20" />
      <div className="relative flex items-center justify-center">
        {ok ? (
          <>
            <div className="absolute animate-heartbeat rounded-full h-20 w-20 bg-primary/20 blur-[6px]" />
            <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground animate-heartbeat">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
          </>
        ) : (
          <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-border text-muted-foreground">
            <Lock className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
}
