import { useEffect, useState } from "react";
import { Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const OBJECTIVES = ["Approach the person", "Check responsiveness", "Check breathing", "Call emergency services", "Begin CPR"];

export function HudPanel({
  src = "/videos/demo2.mp4",
  poster,
  className,
}: {
  src?: string;
  poster?: string;
  className?: string;
}) {
  return (
    <div className={cn("glass grain rounded-2xl p-5 sm:p-6", className)}>
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          
          <span className="font-hud text-[11px] uppercase text-muted-foreground">
            Be the person who knows what to do.
          </span>
        </div>
        <span className="font-hud text-[11px] uppercase text-muted-foreground">
          Glimpse
        </span>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl bg-black">
        <video
          className="aspect-video w-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-hud text-[10px] uppercase text-muted-foreground">{k}</p>
      <p className="font-hud text-2xl font-medium tabular-nums">{v}</p>
    </div>
  );
}

export function WrongActionToast({ className }: { className?: string }) {
  return (
    <div className={cn("glass flex max-w-xs items-start gap-3 overflow-hidden rounded-xl py-3 pl-4 pr-3", className)}>
      <span className="absolute inset-y-0 left-0 w-1 bg-urgency" />
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
      <div className="text-sm">
        <p className="font-semibold">Incorrect action</p>
        <p className="text-muted-foreground">Avoid shaking the person.</p>
      </div>
      <span className="ml-auto rounded-full bg-urgency px-2 py-0.5 font-hud text-[10px] text-primary-foreground">-50</span>
    </div>
  );
}

export function ReportCard() {
  const rows: [string, string, string?][] = [
    ["Correct actions", "8", "calm"],
    ["Incorrect actions", "2", "urgency"],
    ["Response time", "02:34"],
    ["Objectives", "5/5", "calm"],
  ];
  return (
    <div className="glass grain rounded-2xl p-6">
      <p className="font-hud text-[11px] uppercase tracking-[0.2em] text-teal">Scenario complete</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="font-hud text-6xl font-medium tabular-nums">850</p>
        <div className="text-right">
          <p className="font-hud text-[10px] uppercase text-muted-foreground">Performance</p>
          <p className="font-hud text-2xl text-calm">85%</p>
        </div>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-[85%] rounded-full bg-calm" />
      </div>
      <dl className="mt-6 divide-y divide-border">
        {rows.map(([k, v, tone]) => (
          <div key={k} className="flex justify-between py-2.5 text-sm">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className={cn("font-hud", tone === "calm" && "text-teal", tone === "urgency" && "text-crimson")}>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex gap-2">
        <span className="flex-1 rounded-full border border-border py-2.5 text-center text-sm">Try again</span>
        <span className="flex-1 rounded-full bg-calm py-2.5 text-center text-sm font-semibold text-ink">Next level</span>
      </div>
    </div>
  );
}

export function Metronome() {
  const [taps, setTaps] = useState<number[]>([]);
  const [pulse, setPulse] = useState(0);
  const tap = () => {
    const now = performance.now();
    setPulse((p) => p + 1);
    setTaps((t) => [...t.filter((x) => now - x < 4000), now].slice(-8));
  };
  let bpm = 0;
  if (taps.length > 2) {
    const gaps = taps.slice(1).map((t, i) => t - (taps[i] ?? t));
    bpm = Math.round(60000 / (gaps.reduce((a, b) => a + b, 0) / gaps.length));
  }
  const inRange = bpm >= 100 && bpm <= 120;
  const label = bpm === 0 ? "Tap the circle to the beat" : inRange ? "Good rhythm. Keep going." : bpm < 100 ? "Too slow. Push faster." : "Too fast. Ease off a little.";

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
      <button
        onClick={tap}
        onKeyDown={(e) => e.key === " " && (e.preventDefault(), tap())}
        aria-label="Tap to compress"
        className="relative grid h-44 w-44 shrink-0 place-items-center rounded-full"
      >
        <span className="animate-heartbeat absolute inset-0 rounded-full bg-urgency opacity-25 blur-xl" />
        <span key={pulse} className="animate-scale-in absolute inset-3 rounded-full bg-urgency" />
        <span className="relative font-hud text-sm uppercase text-primary-foreground">Push</span>
      </button>
      <div>
        <p className="font-hud text-6xl tabular-nums">{bpm || "---"}<span className="ml-2 text-base text-muted-foreground">/min</span></p>
        <p className={cn("mt-2 text-sm", bpm === 0 ? "text-muted-foreground" : inRange ? "text-teal" : "text-crimson")}>{label}</p>
        <p className="mt-1 font-hud text-[11px] uppercase text-muted-foreground">Target 100 – 120</p>
      </div>
    </div>
  );
}
