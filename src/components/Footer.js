export default function Footer() {
  return `
    <footer class="bg-[var(--foreground)] py-16 text-[var(--primary-foreground)]">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-6">
              <span class="text-2xl">🚀</span>
              <span class="font-bold text-xl tracking-tight">
                SV Technologies <span class="text-[var(--accent-background)]">| Project-Based Learning & Placement</span>
              </span>
            </div>
            <p class="text-[var(--muted-foreground)] max-w-sm">
              Empowering students with real-time projects, skill development, and job-ready placement training for a stronger tech future.
            </p>
          </div>

          <div>
            <h3 class="font-bold mb-4 uppercase text-xs tracking-widest text-[var(--accent-background)]">
              Programs
            </h3>
            <ul class="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><a href="#project-categories" class="hover:text-white">Web Development</a></li>
              <li><a href="#project-categories" class="hover:text-white">Data Science</a></li>
              <li><a href="#project-categories" class="hover:text-white">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold mb-4 uppercase text-xs tracking-widest text-[var(--accent-background)]">
              Contact
            </h3>
            <ul class="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>Email: contact@svtechnologies.com</li>
              <li>Phone: +91 7032226983</li>
              <li>Location: Hyderabad, India</li>
            </ul>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2025 SV Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  `
}
