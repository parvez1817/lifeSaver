import { Facebook, Instagram, Linkedin } from "lucide-react";

import { ThemeToggle } from "./primitives";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-3 sm:px-6">
        <div className="glass flex w-full items-center justify-between rounded-full py-2 pl-5 pr-2">
          <a href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="animate-beat-dot h-2.5 w-2.5 rounded-full bg-crimson" />
            LifeSaver-VR
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="draw-link hover:text-foreground" href="#how">How it works</a>
            <a className="draw-link hover:text-foreground" href="#modules">Modules</a>
            <a className="draw-link hover:text-foreground" href="#institutions">For institutions</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="/login" className="hidden rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-block">Log in</a>
            <a href="/signup" className="hidden rounded-full bg-urgency px-4 py-2.5 text-sm font-semibold text-primary-foreground sm:inline-block">Sign up / Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const companyLinks = [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const productsLinks = [
    { label: "Personal Savings", href: "#" },
    { label: "Group Savings", href: "#" },
    { label: "Savings Goals", href: "#" },
    { label: "Progress Tracking", href: "#" },
  ];

  const resourcesLinks = [
    { label: "Blog", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Media", href: "#" },
    { label: "White paper", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Acceptance policy", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-card/40 border-t border-border px-6 pb-8 pt-16 text-foreground sm:px-12 lg:px-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 font-semibold text-[15px]">Company</h3>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[15px]">Products</h3>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              {productsLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[15px]">Resources</h3>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              {resourcesLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[15px]">Legal</h3>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[15px]">Contact</h3>
            <ul className="space-y-3 text-[13px] text-muted-foreground">
              <li><a href="mailto:support@padisave.com" className="transition-colors hover:text-foreground">support@padisave.com</a></li>
              <li>+234 012 345 0000</li>
              <li>07000-PADISAVE</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-[13px] leading-relaxed text-muted-foreground">
            <p>PadiSave HQ, 121B Admiralty Way, Lekki Phase 4, Lagos,</p>
            <p className="mb-4">Nigeria.</p>
            <p>© 2026 PadiSave. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90">
              <Linkedin className="h-[14px] w-[14px] fill-current" />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90">
              <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90">
              <Instagram className="h-[14px] w-[14px]" />
            </a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90">
              <Facebook className="h-[14px] w-[14px] fill-current border-none" />
            </a>
          </div>
        </div>
      </div>

      {/* Watermark text */}
      <div className="pointer-events-none absolute -bottom-[15%] left-0 right-0 flex select-none justify-center overflow-hidden mix-blend-overlay opacity-5">
        <span className="text-[26vw] font-bold leading-none tracking-tight text-foreground">
          PadiSave
        </span>
      </div>
    </footer>
  );
}
