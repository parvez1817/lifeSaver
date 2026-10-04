import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={cn("reveal", className)} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function GlowCard({ children, className, tilt = false }: { children: ReactNode; className?: string; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) el.style.transform = `perspective(900px) rotateX(${((y / r.height) - 0.5) * -4}deg) rotateY(${((x / r.width) - 0.5) * 5}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={cn("glow-border transition-transform duration-300 ease-out", className)}>
      {children}
    </div>
  );
}

export function MagneticButton({ href, children, variant = "urgency", className }: { href: string; children: ReactNode; variant?: "urgency" | "ghost"; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => ref.current && (ref.current.style.transform = "")}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-200 ease-out",
        variant === "urgency" ? "bg-urgency text-primary-foreground shadow-[0_14px_30px_-12px_var(--crimson)]" : "border border-border text-foreground hover:bg-secondary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("bls-theme", next ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Toggle colour theme" className="relative grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-secondary">
      <Sun className={cn("absolute h-4 w-4 transition-all duration-500", dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
      <Moon className={cn("absolute h-4 w-4 transition-all duration-500", dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
    </button>
  );
}

export function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "urgency" | "calm" }) {
  return (
    <p className={cn("font-hud text-[11px] uppercase tracking-[0.2em]", tone === "muted" && "text-muted-foreground", tone === "urgency" && "text-crimson", tone === "calm" && "text-teal")}>
      {children}
    </p>
  );
}

export function PlaceholderSlot({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("relative grain overflow-hidden rounded-2xl border border-dashed border-border bg-secondary", className)}>
      <div className="blob blob-calm -left-10 top-6 h-40 w-40" />
      <div className="blob blob-urgency -bottom-10 right-0 h-44 w-44" />
      <p className="absolute bottom-3 left-4 font-hud text-[10px] uppercase tracking-widest text-muted-foreground">Placeholder · {label}</p>
    </div>
  );
}
