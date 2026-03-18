import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import Hero from "./components/Hero.js";
import HowItWorks from "./sections/HowItWorks.js";
import ProjectCategories from "./sections/ProjectCategories.js";
import Testimonials from "./sections/Testimonials.js";
import MemberRoadmap from "./sections/MemberRoadmap.jsx";
import Footer from "./components/Footer.js";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.title = "SV Technologies Project-Based Learning & Placement";
    const savedTheme = window.localStorage.getItem("svt-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("svt-theme", theme);
  }, [theme]);

  const secondaryButtonClass =
    "rounded-lg border border-[var(--border)] bg-[var(--card-background)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--muted-background)]";
  const primaryButtonClass =
    "rounded-lg border border-transparent bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-sm font-bold text-white shadow-[0_8px_16px_rgba(79,70,229,0.28)] transition hover:brightness-105";
  const themeToggleLabel = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-3 z-[1000] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl justify-center">
          <header className="pointer-events-auto flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-[var(--surface-shadow)] backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--muted-background)]"
              aria-label={themeToggleLabel}
              title={themeToggleLabel}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <SignedOut>
              <SignInButton mode="modal">
                <button type="button" className={secondaryButtonClass}>
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button type="button" className={primaryButtonClass}>
                  Create account
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-background)] p-1">
                <UserButton />
              </div>
            </SignedIn>
          </header>
        </div>
      </div>

      <SignedOut>
        <div dangerouslySetInnerHTML={{ __html: Hero() }} />
        <section className="bg-[var(--muted-background)] py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-2xl bg-[var(--card-background)] p-8 text-center shadow-sm ring-1 ring-[var(--border)]">
              <h2 className="text-3xl font-bold text-[var(--foreground)]">Members-Only Learning Material</h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Sign in or create an account to unlock the full roadmap, project tracks, and domain master maps.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <SignInButton mode="modal">
                  <button type="button" className={secondaryButtonClass}>
                    Sign in to continue
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button type="button" className={primaryButtonClass}>
                    Create account
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: Footer() }} />
      </SignedOut>

      <SignedIn>
        <div dangerouslySetInnerHTML={{ __html: Hero() }} />
        <div dangerouslySetInnerHTML={{ __html: HowItWorks() }} />
        <div dangerouslySetInnerHTML={{ __html: ProjectCategories() }} />
        <div dangerouslySetInnerHTML={{ __html: Testimonials() }} />
        <MemberRoadmap />
        <div dangerouslySetInnerHTML={{ __html: Footer() }} />
      </SignedIn>
    </>
  );
}
