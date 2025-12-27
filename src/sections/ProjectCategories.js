export default function ProjectTracks() {
  return `
    <section id="tech-guide" class="bg-[var(--background)] py-24 px-6 lg:px-16 font-sans">
      <div class="max-w-7xl mx-auto text-[var(--foreground)]">

        <header class="text-center mb-20">
          <h1 class="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--accent-background)] to-blue-500 bg-clip-text text-transparent">
            Mastering Modern Tech Skills
          </h1>
          <p class="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
            A curated roadmap designed to bridge the gap between academic theory and professional expertise. 
            Build a project portfolio that proves your mastery to recruiters.
          </p>
        </header>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div class="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 flex items-center">📖 How to Use</h3>
            <ul class="space-y-3 text-[var(--muted-foreground)]">
              <li>• Start with <b>Java/SQL Foundations</b> first.</li>
              <li>• Progress through sections sequentially.</li>
              <li>• Reconstruct repos from scratch (don't just fork).</li>
              <li>• Add your own unique improvements.</li>
            </ul>
          </div>
          <div class="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 flex items-center">🚀 Learning Path</h3>
            <ol class="space-y-3 text-[var(--muted-foreground)] list-decimal ml-4">
              <li>Programming & Java Basics</li>
              <li>Web/Mobile & Databases</li>
              <li>Analytics & BI Visualization</li>
              <li>Machine Learning Core</li>
              <li>Advanced AI & Finance</li>
            </ol>
          </div>
          <div class="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 flex items-center">🎯 Portfolio Tips</h3>
            <ul class="space-y-3 text-[var(--muted-foreground)]">
              <li>• Create a master Portfolio Website.</li>
              <li>• Record 2-minute project demo videos.</li>
              <li>• Optimize LinkedIn with project keywords.</li>
              <li>• Document impact (e.g., "Reduced time by 40%").</li>
            </ul>
          </div>
        </div>

        <h2 class="text-4xl font-bold mb-12 text-center">🧱 Hands-On Project Tracks</h2>
        <div class="space-y-6 mb-24">

          <details class="group border border-[var(--border)] rounded-lg bg-[var(--card-background)] p-6 hover:border-[var(--accent-background)] transition-all">
            <summary class="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
              <span>1. Foundations & Java/SQL Track 💻</span>
              <span class="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-6 overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="border-b border-[var(--border)]">
                    <th class="p-3">Repository</th>
                    <th class="p-3">Skills Learned</th>
                    <th class="p-3">Practice Exercises</th>
                  </tr>
                </thead>
                <tbody class="text-[var(--muted-foreground)]">
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3"><a href="https://github.com/RajuKumar077/java-training" class="text-[var(--accent-background)] hover:underline">Java Training</a></td>
                    <td class="p-3">Java fundamentals, OOP, collections</td>
                    <td class="p-3">Build a mini banking app</td>
                  </tr>
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3"><a href="https://github.com/RajuKumar077/Java-Advanced-JDBC-MySQL" class="text-[var(--accent-background)] hover:underline">Java-JDBC-MySQL</a></td>
                    <td class="p-3">Database connectivity, CRUD, DAO</td>
                    <td class="p-3">Student Management System with logging</td>
                  </tr>
                </tbody>
              </table>
              <p class="mt-4 font-semibold text-[var(--accent-background)]">Career: Backend Engineering & Software Dev.</p>
            </div>
          </details>

          <details class="group border border-[var(--border)] rounded-lg bg-[var(--card-background)] p-6 hover:border-[var(--accent-background)] transition-all">
            <summary class="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
              <span>2. Web, Mobile & Basic Projects 📱</span>
              <span class="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-6 overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <tbody class="text-[var(--muted-foreground)]">
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">Travel-Form</td>
                    <td class="p-3">HTML/CSS, Form Validation</td>
                    <td class="p-3">Add multi-step payment wizard</td>
                  </tr>
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">Online-shopping</td>
                    <td class="p-3">Flutter Widgets, State Mgmt</td>
                    <td class="p-3">Implement cart & search functionality</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details class="group border border-[var(--border)] rounded-lg bg-[var(--card-background)] p-6 hover:border-[var(--accent-background)] transition-all">
            <summary class="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
              <span>3. Data Analysis & BI Dashboards 📊</span>
              <span class="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-6 overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <tbody class="text-[var(--muted-foreground)]">
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold text-[var(--accent-background)] underline">Northwind-Insights</td>
                    <td class="p-3">SQL Joins, Window Functions</td>
                    <td class="p-3">Build churn risk analysis dashboard</td>
                  </tr>
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">HR-Analytics</td>
                    <td class="p-3">Tableau, Metrics</td>
                    <td class="p-3">Design promotion readiness scorecard</td>
                  </tr>
                </tbody>
              </table>
              <p class="mt-4 font-semibold text-[var(--accent-background)]">Career: Business Analyst, Data Viz Specialist.</p>
            </div>
          </details>

          <details class="group border border-[var(--border)] rounded-lg bg-[var(--card-background)] p-6 hover:border-[var(--accent-background)] transition-all">
            <summary class="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
              <span>4. Machine Learning & Data Science 🤖</span>
              <span class="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-6 overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <tbody class="text-[var(--muted-foreground)]">
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">BharatStocks-GPT</td>
                    <td class="p-3">LLM, API, Finance Analytics</td>
                    <td class="p-3">Add basic trend indicators</td>
                  </tr>
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">SecurePay-Fraud</td>
                    <td class="p-3">Anomaly Detection, Imbalanced Data</td>
                    <td class="p-3">Create model explainability card</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>

          <details class="group border border-[var(--border)] rounded-lg bg-[var(--card-background)] p-6 hover:border-[var(--accent-background)] transition-all">
            <summary class="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
              <span>5. Automation, Testing & Bots ⚙️</span>
              <span class="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="mt-6 overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <tbody class="text-[var(--muted-foreground)]">
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">EComm-Automation</td>
                    <td class="p-3">Test Case Design, Regression</td>
                    <td class="p-3">Implement CI with GitHub Actions</td>
                  </tr>
                  <tr class="border-b border-[var(--border)]">
                    <td class="p-3 font-bold">Slackbot-RTM</td>
                    <td class="p-3">API Integration, Bot Arch</td>
                    <td class="p-3">Build productivity reminders</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </details>
        </div>

        <h2 class="text-4xl font-bold mb-12 text-center">🧠 Domain Master Maps</h2>
        <div class="grid md:grid-cols-2 gap-8 mb-24">
          
          <div class="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 text-[var(--accent-background)]">🤖 AI, ML & GenAI</h3>
            <div class="space-y-4">
              <div>
                <p class="font-bold text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Top Courses (Free)</p>
                <ul class="text-sm space-y-1">
                  <li>• <a href="https://onlinecourses.nptel.ac.in/noc25_cs45/preview" class="hover:underline">Python for DS (IIT Madras)</a></li>
                  <li>• <a href="https://huggingface.co/learn" class="hover:underline">Hugging Face NLP Course</a></li>
                </ul>
              </div>
              <div>
                <p class="font-bold text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">YouTube Mentors</p>
                <div class="flex flex-wrap gap-2 text-xs">
                  <span class="px-2 py-1 bg-[var(--border)] rounded">Krish Naik</span>
                  <span class="px-2 py-1 bg-[var(--border)] rounded">CampusX</span>
                  <span class="px-2 py-1 bg-[var(--border)] rounded">StatQuest</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 text-[var(--accent-background)]">💻 Software Development</h3>
            <div class="space-y-4">
              <div>
                <p class="font-bold text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Learning hubs</p>
                <ul class="text-sm space-y-1">
                  <li>• <a href="https://www.freecodecamp.org/learn" class="hover:underline">freeCodeCamp Full Stack</a></li>
                  <li>• <a href="https://github.com/kamranahmedse/developer-roadmap" class="hover:underline">Developer Roadmaps</a></li>
                </ul>
              </div>
              <div>
                <p class="font-bold text-sm uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Interview Prep</p>
                <div class="flex flex-wrap gap-2 text-xs">
                  <span class="px-2 py-1 bg-[var(--border)] rounded">Take U Forward (Striver)</span>
                  <span class="px-2 py-1 bg-[var(--border)] rounded">NeetCode</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 text-[var(--accent-background)]">☁️ Cloud & DevOps</h3>
            <ul class="text-sm space-y-2">
              <li>• <b>YouTube:</b> TechWorld with Nana, Abhishek Veeramalla</li>
              <li>• <b>Practice:</b> AWS Free Tier, KodeKloud</li>
              <li>• <b>GitHub:</b> DevOps-Roadmap by Milanm</li>
            </ul>
          </div>

          <div class="p-8 border border-[var(--border)] rounded-2xl bg-[var(--card-background)]">
            <h3 class="text-2xl font-bold mb-4 text-[var(--accent-background)]">🔐 Cybersecurity</h3>
            <ul class="text-sm space-y-2">
              <li>• <b>Practice:</b> TryHackMe Labs</li>
              <li>• <b>YouTube:</b> HackerSploit, The Cyber Mentor</li>
              <li>• <b>Docs:</b> Pentesting Bible (GitHub)</li>
            </ul>
          </div>
        </div>

        <h2 class="text-4xl font-bold mb-12 text-center">🛠 Student AI Toolkit</h2>
        <div class="overflow-x-auto mb-24 border border-[var(--border)] rounded-xl">
          <table class="w-full text-left bg-[var(--card-background)]">
            <thead class="bg-[var(--border)]">
              <tr>
                <th class="p-4">Category</th>
                <th class="p-4">Recommended Tools</th>
                <th class="p-4">Best For</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border)] text-[var(--muted-foreground)]">
              <tr>
                <td class="p-4 font-bold text-[var(--foreground)]">General AI</td>
                <td class="p-4">ChatGPT, Gemini, Perplexity</td>
                <td class="p-4">Brainstorming, Quick Search</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-[var(--foreground)]">Writing</td>
                <td class="p-4">Grammarly, QuillBot</td>
                <td class="p-4">Essays, Emails, Documentation</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-[var(--foreground)]">Notes/Study</td>
                <td class="p-4">NoteGPT, Otter, ChatPDF</td>
                <td class="p-4">Lecture Summaries, PDF Analysis</td>
              </tr>
              <tr>
                <td class="p-4 font-bold text-[var(--foreground)]">Focus</td>
                <td class="p-4">Forest, Focus Booster</td>
                <td class="p-4">Pomodoro, Distraction Blocking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-[var(--accent-background)] text-white p-12 rounded-3xl text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Build Your Portfolio?</h2>
          <p class="text-lg opacity-90 mb-8">Pick ONE domain. Follow ONE roadmap. Build EVERY project.</p>
          <div class="flex justify-center gap-4">
            <a href="#project-tracks" class="bg-white text-[var(--accent-background)] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Get Started</a>
            <a href="https://github.com/RajuKumar077" class="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[var(--accent-background)] transition-all">View All Repos</a>
          </div>
        </div>

      </div>
    </section>
  `
}