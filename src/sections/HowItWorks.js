export default function HowItWorks() {
  return `
    <section id="how-it-works" class="bg-[var(--muted-background)] py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Our Proven Path to Success
          </h2>
          <p class="mt-6 text-lg text-[var(--muted-foreground)]">
            We've optimized the transition from learner to professional through a structured three-step journey.
          </p>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row">
          <div class="flex flex-col justify-between gap-y-8 rounded-2xl bg-[var(--card-background)] p-8 shadow-sm border border-[var(--border)] lg:flex-1">
            <p class="text-3xl font-bold text-[var(--accent-background)]">01</p>
            <div>
              <p class="text-xl font-bold text-[var(--foreground)]">Enroll & Assess</p>
              <p class="mt-2 text-[var(--muted-foreground)]">
                Begin your journey with a comprehensive skill audit to tailor your specific learning path.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between gap-y-8 rounded-2xl bg-[var(--primary-background)] p-8 shadow-xl lg:flex-1 lg:scale-105">
            <p class="text-3xl font-bold text-[var(--accent-background)]">02</p>
            <div>
              <p class="text-xl font-bold text-[var(--primary-foreground)]">Build Projects</p>
              <p class="mt-2 text-[var(--muted-foreground)]">
                Work on real-world industry capstones under expert guidance to build a robust portfolio.
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between gap-y-8 rounded-2xl bg-[var(--card-background)] p-8 shadow-sm border border-[var(--border)] lg:flex-1">
            <p class="text-3xl font-bold text-[var(--accent-background)]">03</p>
            <div>
              <p class="text-xl font-bold text-[var(--foreground)]">Career Placement</p>
              <p class="mt-2 text-[var(--muted-foreground)]">
                Direct interview pipelines with 50+ partners, resume building, and placement coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
