import { createFileRoute, Link } from "@tanstack/react-router";
import { EyeOff } from "lucide-react";
import { Header, Footer } from "@/components/site/Layout";

export const Route = createFileRoute("/signup")({
  component: Signup,
});

function Signup() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden pt-28 pb-16">
        {/* Background blobs for glassmorphism */}
        <div className="blob blob-calm top-0 -left-1/4 w-[120%] h-[120%] opacity-20 pointer-events-none" />
        <div className="blob blob-urgency bottom-0 -right-1/4 w-[100%] h-[100%] opacity-15 pointer-events-none" />

        {/* The Glass Card */}
        <div className="relative glass w-full max-w-md rounded-[2.5rem] p-8 sm:p-12 z-10 text-card-foreground">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold mb-2 tracking-tight">Sign Up</h1>
            <p className="text-sm text-muted-foreground">Create an account to continue</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-[13px] font-medium text-card-foreground/90 pl-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Alex Lee"
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-1 focus:ring-ring focus:bg-input transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-medium text-card-foreground/90 pl-1">Email</label>
              <input 
                type="email" 
                placeholder="example@email.com"
                className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-1 focus:ring-ring focus:bg-input transition-all placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-medium text-card-foreground/90 pl-1">Set Password</label>
              <div className="relative">
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-1 focus:ring-ring focus:bg-input transition-all placeholder:text-muted-foreground/50"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  <EyeOff className="w-[18px] h-[18px]" />
                </button>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Forgot Password?</a>
              </div>
            </div>

            <div className="pt-3">
              <button 
                type="submit"
                className="w-full bg-[#f6f6f6] text-[#0e1628] font-semibold rounded-full px-4 py-[14px] text-[15px] transition-transform hover:-translate-y-[1px] shadow-sm"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="my-8 flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-border/60 after:h-[1px] after:flex-1 after:bg-border/60">
            <span className="text-xs font-hud text-muted-foreground uppercase opacity-80 tracking-widest">Or</span>
          </div>

          <div className="space-y-3">
            <button className="flex items-center justify-center gap-3 w-full bg-secondary/30 border border-border rounded-xl px-4 py-[14px] text-[14px] font-medium hover:bg-secondary/60 transition-colors">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full bg-secondary/30 border border-border rounded-xl px-4 py-[14px] text-[14px] font-medium hover:bg-secondary/60 transition-colors">
              <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.58.07 2.86.72 3.65 1.84-3.11 1.77-2.58 5.76.4 6.96-.75 1.87-1.8 3.55-2.71 4.17zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.02 4.5-3.74 4.25z"/></svg>
              Continue with Apple
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-semibold text-foreground hover:underline hover:text-white transition-colors">Log In</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
