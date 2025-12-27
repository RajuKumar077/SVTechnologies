import Header from "./Header.js"

export default function Hero() {
  return `
    <section id="hero" class="relative overflow-hidden bg-[var(--background)]">
      ${Header()}
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center fade-in">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full px-3 py-1 text-sm text-[var(--muted-foreground)] ring-1 ring-[var(--border)] hover:ring-[var(--foreground)]/20">
              SV Technologies — 92% Placement Success!
              <a href="#testimonials" class="font-semibold text-[var(--accent-background)] ml-1">
                Read report →
              </a>
            </div>
          </div>
          <h1 class="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-7xl">
            SV Technologies | Project-Based Learning & Placement
          </h1>
          <p class="mt-8 text-lg font-medium text-[var(--muted-foreground)] sm:text-xl">
            Gain practical experience, build an impressive portfolio, and secure your dream job
            with our comprehensive project-based learning and dedicated placement support.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#project-categories" class="rounded-md bg-[var(--primary-background)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg hover:scale-105 transition-transform">
              Explore Programs
            </a>
            <a href="#how-it-works" class="text-sm font-semibold text-[var(--foreground)]">
              How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `
}
