export default function Testimonials() {
  return `
    <section id="testimonials" class="bg-[var(--muted-background)] py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold text-[var(--accent-background)]">
            Success Stories
          </h2>
          <p class="mt-2 text-4xl font-bold text-[var(--foreground)]">
            Hear from our Graduates
          </p>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          <figure class="rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
            <blockquote class="text-lg font-semibold text-[var(--foreground)] italic">
              "The hands-on experience was invaluable! I landed my dream job in web development within two months."
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="size-12 rounded-full bg-slate-200" src="https://i.pravatar.cc/150?u=stella" alt="">
              <div>
                <div class="font-bold">Stella Rodriguez</div>
                <div class="text-sm text-[var(--muted-foreground)]">
                  Software Engineer at Tech Innovations
                </div>
              </div>
            </figcaption>
          </figure>

          <figure class="rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
            <blockquote class="text-lg font-semibold text-[var(--foreground)] italic">
              "The AI projects pushed my boundaries. The team helped me build a portfolio that truly stood out to recruiters."
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="size-12 rounded-full bg-slate-200" src="https://i.pravatar.cc/150?u=evelyn" alt="">
              <div>
                <div class="font-bold">Evelyn Thompson</div>
                <div class="text-sm text-[var(--muted-foreground)]">
                  Data Scientist at Global Analytics
                </div>
              </div>
            </figcaption>
          </figure>

          <figure class="rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
            <blockquote class="text-lg font-semibold text-[var(--foreground)] italic">
              "The placement team was exceptional. I'm now a Cloud Engineer, which was exactly my goal."
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img class="size-12 rounded-full bg-slate-200" src="https://i.pravatar.cc/150?u=jonathan" alt="">
              <div>
                <div class="font-bold">Jonathan Williams</div>
                <div class="text-sm text-[var(--muted-foreground)]">
                  Cloud Engineer at Solutions Inc
                </div>
              </div>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  `
}
