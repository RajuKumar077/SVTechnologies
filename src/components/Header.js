export default function Header() {
  return `
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#hero" class="-m-1.5 p-1.5 flex items-center gap-2">
            <span class="text-2xl">🚀</span>
            <span class="font-bold text-xl tracking-tight">
              SV <span class="text-[var(--accent-background)]">Technologies</span>
            </span>
          </a>
        </div>

        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#project-categories" class="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent-background)] transition-colors">Programs</a>
          <a href="#how-it-works" class="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent-background)] transition-colors">How It Works</a>
          <a href="#testimonials" class="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent-background)] transition-colors">Success Stories</a>
        </div>
      </nav>
    </header>
  `
}
