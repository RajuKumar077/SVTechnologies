export default function MemberRoadmap() {
  return (
    <section id="member-roadmap" className="bg-[var(--muted-background)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Mastering Modern Tech Skills
          </h2>
          <p className="mt-6 text-lg text-[var(--muted-foreground)]">
            A curated roadmap designed to bridge the gap between academic theory and professional
            expertise. Build a project portfolio that proves your mastery to recruiters.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-[var(--card-background)] p-6 shadow-sm ring-1 ring-[var(--border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)]">How to Use</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>Start with Java/SQL Foundations first.</li>
              <li>Progress through sections sequentially.</li>
              <li>Reconstruct repos from scratch (don&apos;t just fork).</li>
              <li>Add your own unique improvements.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[var(--card-background)] p-6 shadow-sm ring-1 ring-[var(--border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Learning Path</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>Programming &amp; Java Basics</li>
              <li>Web/Mobile &amp; Databases</li>
              <li>Analytics &amp; BI Visualization</li>
              <li>Machine Learning Core</li>
              <li>Advanced AI &amp; Finance</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[var(--card-background)] p-6 shadow-sm ring-1 ring-[var(--border)]">
            <h3 className="text-xl font-bold text-[var(--foreground)]">Portfolio Tips</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
              <li>Create a master Portfolio Website.</li>
              <li>Record 2-minute project demo videos.</li>
              <li>Optimize LinkedIn with project keywords.</li>
              <li>Document impact (for example: &quot;Reduced time by 40%&quot;).</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">Hands-On Project Tracks</h3>
          <ol className="mt-6 space-y-3 text-sm text-[var(--muted-foreground)]">
            <li>1. Foundations &amp; Java/SQL Track</li>
            <li>2. Web, Mobile &amp; Basic Projects</li>
            <li>3. Data Analysis &amp; BI Dashboards</li>
            <li>4. Machine Learning &amp; Data Science</li>
            <li>5. Automation, Testing &amp; Bots</li>
          </ol>
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">Domain Master Maps</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-[var(--foreground)]">AI, ML &amp; GenAI</h4>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">Top Courses (Free)</p>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>Python for DS (IIT Madras)</li>
                <li>Hugging Face NLP Course</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">YouTube Mentors</p>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>Krish Naik</li>
                <li>CampusX</li>
                <li>StatQuest</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--foreground)]">Software Development</h4>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">Learning Hubs</p>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>freeCodeCamp Full Stack</li>
                <li>Developer Roadmaps</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">Interview Prep</p>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>Take U Forward (Striver)</li>
                <li>NeetCode</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--foreground)]">Cloud &amp; DevOps</h4>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>YouTube: TechWorld with Nana, Abhishek Veeramalla</li>
                <li>Practice: AWS Free Tier, KodeKloud</li>
                <li>GitHub: DevOps-Roadmap by Milanm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--foreground)]">Cybersecurity</h4>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted-foreground)]">
                <li>Practice: TryHackMe Labs</li>
                <li>YouTube: HackerSploit, The Cyber Mentor</li>
                <li>Docs: Pentesting Bible (GitHub)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--card-background)] p-8 shadow-sm ring-1 ring-[var(--border)]">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">Student AI Toolkit</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2 text-left text-sm">
              <thead>
                <tr className="text-[var(--foreground)]">
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Recommended Tools</th>
                  <th className="px-3 py-2">Best For</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted-foreground)]">
                <tr>
                  <td className="rounded-l-lg bg-[var(--muted-background)] px-3 py-2">General AI</td>
                  <td className="bg-[var(--muted-background)] px-3 py-2">ChatGPT, Gemini, Perplexity</td>
                  <td className="rounded-r-lg bg-[var(--muted-background)] px-3 py-2">
                    Brainstorming, Quick Search
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-lg bg-[var(--muted-background)] px-3 py-2">Writing</td>
                  <td className="bg-[var(--muted-background)] px-3 py-2">Grammarly, QuillBot</td>
                  <td className="rounded-r-lg bg-[var(--muted-background)] px-3 py-2">
                    Essays, Emails, Documentation
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-lg bg-[var(--muted-background)] px-3 py-2">Notes/Study</td>
                  <td className="bg-[var(--muted-background)] px-3 py-2">NoteGPT, Otter, ChatPDF</td>
                  <td className="rounded-r-lg bg-[var(--muted-background)] px-3 py-2">
                    Lecture Summaries, PDF Analysis
                  </td>
                </tr>
                <tr>
                  <td className="rounded-l-lg bg-[var(--muted-background)] px-3 py-2">Focus</td>
                  <td className="bg-[var(--muted-background)] px-3 py-2">Forest, Focus Booster</td>
                  <td className="rounded-r-lg bg-[var(--muted-background)] px-3 py-2">
                    Pomodoro, Distraction Blocking
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-xl font-semibold text-[var(--foreground)]">
            Ready to Build Your Portfolio?
          </p>
        </div>
      </div>
    </section>
  );
}
