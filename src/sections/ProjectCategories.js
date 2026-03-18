export default function ProjectTracks() {
  return `
    <section id="project-categories" class="bg-[var(--background)] py-24 px-6 lg:px-16 font-sans">
      <div class="mx-auto max-w-7xl text-[var(--foreground)]">
        <header class="mb-16 text-center">
          <h2 class="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--accent-background)] to-blue-500 bg-clip-text text-transparent">
            Mastering Modern Tech Skills
          </h2>
          <p class="mx-auto max-w-3xl text-xl leading-relaxed text-[var(--muted-foreground)]">
            Build a project portfolio that bridges academic theory and professional execution.
            Sign in to unlock the full member roadmap and all linked learning materials.
          </p>
        </header>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-6">
            <h3 class="mb-4 text-2xl font-bold">How to Use</h3>
            <ul class="space-y-3 text-[var(--muted-foreground)]">
              <li>Start with Java and SQL foundations first.</li>
              <li>Progress through each section in order.</li>
              <li>Rebuild projects yourself instead of only forking them.</li>
            </ul>
          </div>
          <div class="rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-6">
            <h3 class="mb-4 text-2xl font-bold">Learning Path</h3>
            <ol class="ml-4 list-decimal space-y-3 text-[var(--muted-foreground)]">
              <li>Programming and Java basics</li>
              <li>Web, mobile, and databases</li>
              <li>Analytics and BI visualization</li>
              <li>Machine learning core</li>
              <li>Advanced AI and finance</li>
            </ol>
          </div>
          <div class="rounded-xl border border-[var(--border)] bg-[var(--card-background)] p-6">
            <h3 class="mb-4 text-2xl font-bold">Members Area</h3>
            <p class="text-[var(--muted-foreground)]">
              Logged-in users get the complete roadmap, clickable repositories, AI toolkit,
              domain guides, and productivity resources.
            </p>
            <a href="#member-roadmap" class="mt-4 inline-block font-semibold text-[var(--accent-background)]">
              Jump to member roadmap ->
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
