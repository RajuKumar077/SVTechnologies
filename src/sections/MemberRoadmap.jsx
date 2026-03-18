const quickLinks = [
  ["Start Here", "#strategy"],
  ["Project Tracks", "#tracks"],
  ["AI Toolkit", "#ai-toolkit"],
  ["Domain Map", "#domains"],
  ["Specialized", "#specialized"],
  ["Productivity", "#productivity"],
];

const spotlightStats = [
  ["5", "structured project tracks"],
  ["7", "career-ready domain maps"],
  ["50+", "high-value learning links"],
];

const kickoffPlan = [
  ["Day 1", "Pick one domain and bookmark the first 3 repositories you will build."],
  ["Day 2", "Complete the first setup task, README review, and a simple working prototype."],
  ["Day 3", "Push your first visible improvement and document what you learned."],
  ["Day 4-7", "Repeat the loop: build, explain, improve, publish, and reflect."],
];

const strategy = [
  {
    title: "How to use this guide",
    eyebrow: "Execution",
    items: [
      "Complete Foundations & Java/SQL first, then move through each section in order.",
      "Read each repository README, rebuild the project from scratch, and add your own improvements.",
      "Plan for 3 to 6 months overall, with roughly 2 to 4 weeks per track.",
    ],
  },
  {
    title: "Suggested learning path",
    eyebrow: "Flow",
    items: [
      "Programming Basics -> Java Training -> JDBC -> HelloWorld",
      "Web/Mobile & Databases -> Travel Form -> Flutter -> Northwind SQL",
      "Analytics & Visualization -> HR Analytics -> Power BI -> Culinary Insights",
      "Machine Learning Core -> Fraud Detection -> Propensity Model -> Hotel Predictions",
      "Advanced AI & Finance -> BharatStocks GPT -> FinGPT -> AgentNeo",
    ],
  },
  {
    title: "Portfolio recommendations",
    eyebrow: "Signal",
    items: [
      "Create a master GitHub portfolio with project summaries, case studies, and demo videos.",
      "Optimize LinkedIn with project keywords and certificates from completed tracks.",
      "Document measurable impact for each project, such as reduced time or improved accuracy.",
    ],
  },
  {
    title: "Pro tips for success",
    eyebrow: "Consistency",
    items: [
      "Dedicate 2 to 3 hours daily to active practice and join study groups or communities.",
      "Complete each repository challenge and add original insights to every project.",
      "Prepare 2-minute project explanations and write technical blogs for important work.",
    ],
  },
];

const tracks = [
  {
    title: "Foundations & Java/SQL",
    benefits: "Best for software development and backend foundations",
    repos: [
      ["java-training", "https://github.com/RajuKumar077/java-training", "Java fundamentals, OOP, collections, exception handling", "Build a mini banking app with transactions and reports"],
      ["Java-Advanced-JDBC-MySQL", "https://github.com/RajuKumar077/Java-Advanced-JDBC-MySQL", "Database connectivity, CRUD operations, DAO patterns", 'Create a "Student Management System" with logging'],
      ["Jdbc-, ALL-WORK, HelloWorld", "https://github.com/RajuKumar077", "Core Java concepts and basic database operations", "Refactor code into cleaner, well-documented versions"],
    ],
  },
  {
    title: "Web, Mobile & Basic Projects",
    benefits: "Best for frontend and mobile app foundations",
    repos: [
      ["Travel-Form", "https://github.com/RajuKumar077/Travel-Form", "HTML/CSS structure, form validation", "Add a multi-step wizard with payment integration"],
      ["Online-shopping (Flutter)", "https://github.com/RajuKumar077/Online-shopping", "Flutter widgets, navigation, state management", "Implement cart persistence and search functionality"],
      ["Dart", "https://github.com/RajuKumar077/Dart", "Dart language fundamentals", "Build utility functions for data parsing"],
    ],
  },
  {
    title: "Data Analysis & BI Dashboards",
    benefits: "Best for business analyst and data visualization roles",
    repos: [
      ["Northwind-Insights", "https://github.com/RajuKumar077/Northwind-Insights-Unlocking-Business-Intelligence-with-SQL", "SQL joins, aggregations, window functions", "Build a churn risk analysis dashboard"],
      ["Global-Superstore-PowerBI", "https://github.com/RajuKumar077/Global-Superstore-2023-Analytics-Unveiling-Actionable-Insights-with-Power-BI", "Data modeling, DAX, dashboard design", "Create an executive summary with actionable insights"],
      ["HR-Analytics-Dashboard", "https://github.com/RajuKumar077/HR-ANALYTICS-DASHBOARD", "HR metrics, Tableau visualization", "Design a promotion readiness scorecard"],
      ["Culinary-Insights", "https://github.com/RajuKumar077/Culinary-Insights-Analyzing-User-Behavior-and-Order-Trends", "EDA, feature analysis, trend detection", "Propose product changes based on findings"],
    ],
  },
  {
    title: "Machine Learning & Data Science",
    benefits: "Best for data science, ML engineering, and AI applications",
    repos: [
      ["BharatStocks-GPT", "https://github.com/RajuKumar077/BharatStocks-GPT", "API integration, LLM applications, finance analytics", "Build a simpler version with basic trend indicators"],
      ["SecurePay-Fraud-Detection", "https://github.com/RajuKumar077/SecurePay-Detecting-Fraudulent-Credit-Card-Transactions-in-Real-Time", "Imbalanced data handling, anomaly detection", "Create a model card explaining limitations"],
      ["Propensity-Model-Capstone", "https://github.com/RajuKumar077/Propensity-Model-Capstone-Project", "Customer segmentation, business framing", "Simulate a targeted marketing campaign"],
      ["Hotel-Booking-Predictions", "https://github.com/RajuKumar077/Predicting-Hotel-Booking-Cancellations-Building-a-Decision-Tree-Model", "Tree models, feature importance", "Compare results with ensemble methods"],
      ["Anoma-Predictive-Maintenance", "https://github.com/RajuKumar077/anoma_predictive_maintenance", "Sensor data processing, anomaly detection", "Build a maintenance alert dashboard"],
      ["British-Airways-Analysis", "https://github.com/RajuKumar077/British-Airways-Data-Science-Job-Simulation", "Web scraping, text analysis, airline ML", "Add topic modeling with visualization"],
    ],
  },
  {
    title: "Automation, Testing & Bots",
    benefits: "Best for QA automation, DevOps, and chatbot roles",
    repos: [
      ["ECommerce-Test-Automation", "https://github.com/RajuKumar077/ECommerce-Test-Automation", "Test case design, regression testing", "Implement CI with GitHub Actions"],
      ["SauceDemo-Automation", "https://github.com/RajuKumar077/SauceDemo-Selenium-TestNG-POM", "Framework design, reusable components", "Add cross-browser testing"],
      ["Slackbot-RTM", "https://github.com/RajuKumar077/slackbot_RTM", "Bot architecture, API integration", "Build a productivity bot with reminders"],
      ["AgentNeo", "https://github.com/RajuKumar077/AgentNeo", "Agent observability, tracing", "Instrument a simple agent project"],
    ],
  },
];

const toolkit = [
  ["General AI Assistants", [["ChatGPT", "https://chatgpt.com"], ["ChatGPT Android", "https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en_IN"], ["Gemini", "https://gemini.google.com"], ["Gemini Android", "https://play.google.com/store/apps/details?id=com.google.android.apps.bard&hl=en_IN"], ["Perplexity", "https://www.perplexity.ai"], ["Perplexity Android", "https://play.google.com/store/apps/details?id=ai.perplexity.app.android&hl=en_IN"]]],
  ["Writing, Grammar & Paraphrasing", [["Grammarly", "https://www.grammarly.com"], ["QuillBot", "https://quillbot.com"]]],
  ["Notes, Lecture Summaries & PDFs", [["NoteGPT", "https://notegpt.io/"], ["Otter", "https://otter.ai/"], ["Notta", "https://www.notta.ai/en"], ["ChatPDF", "https://www.chatpdf.com/"]]],
  ["Research & Study Helpers", [["Perplexity for cited answers", "https://www.perplexity.ai"], ["StudyFetch", "https://www.studyfetch.com/"]]],
  ["Design, Slides & Portfolios", [["Canva", "https://www.canva.com"], ["Gamma", "https://gamma.app"]]],
];

const domains = [
  ["Artificial Intelligence, Machine Learning & Generative AI", "Analytical thinkers | Rs 9 to 14 LPA potential", [["Core Learning", [["Python for Data Science - IIT Madras", "https://onlinecourses.nptel.ac.in/noc25_cs45/preview"], ["Machine Learning - IIT Kharagpur", "https://onlinecourses.nptel.ac.in/noc25_cs149/preview"], ["Deep Learning - IIT Ropar", "https://onlinecourses.nptel.ac.in/noc25_cs106/preview"], ["Hugging Face NLP Course", "https://huggingface.co/learn"], ["LLM University", "https://lightning.ai/pages/llm-university/"]]], ["YouTube", [["Krish Naik", "https://www.youtube.com/@krishnaik06"], ["CampusX", "https://www.youtube.com/@campusx-official"], ["StatQuest", "https://www.youtube.com/@statquest"], ["DeepLearningAI", "https://www.youtube.com/@DeepLearningAI"]]], ["GitHub", [["Awesome Machine Learning", "https://github.com/josephmisiti/awesome-machine-learning"], ["Awesome LLMs", "https://github.com/Hannibal046/Awesome-LLM"], ["Awesome Generative AI", "https://github.com/enricoros/awesome-generative-ai"]]], ["Practice", [["Kaggle Learn & Datasets", "https://www.kaggle.com/learn"]]]]],
  ["LLMs, RAG & AI Application Development", "Fast salary jump from Rs 4L to Rs 12L", [["Learning", [["Prompt Engineering for Developers", "https://www.coursera.org/projects/chatgpt-prompt-engineering-for-developers"], ["LangChain for LLM Application Development", "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/"], ["Vector Databases for RAG", "https://www.coursera.org/learn/vector-databases-for-rag-an-introduction"]]], ["YouTube", [["LangChain Official", "https://www.youtube.com/@LangChain"], ["Harrison Chase", "https://www.youtube.com/@hwchase17"], ["AssemblyAI", "https://www.youtube.com/@AssemblyAI"]]], ["GitHub", [["LangChain Core Repo", "https://github.com/langchain-ai/langchain"], ["OpenAI Cookbook", "https://github.com/openai/openai-cookbook"]]], ["Practice", [["Streamlit Docs", "https://docs.streamlit.io"]]]]],
  ["Software Development (Full Stack)", "Product builders | Rs 6 to 10 LPA", [["Learning", [["freeCodeCamp Full Stack Curriculum", "https://www.freecodecamp.org/learn"], ["Backend Resources", "https://github.com/Satyxm/BackendDevResources"]]], ["YouTube", [["CodeWithHarry", "https://www.youtube.com/@CodeWithHarry"], ["Hitesh Choudhary", "https://www.youtube.com/@HiteshChoudharydotcom"], ["Traversy Media", "https://www.youtube.com/@TraversyMedia"]]], ["GitHub", [["Developer Roadmaps", "https://github.com/kamranahmedse/developer-roadmap"], ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]]], ["Practice", [["Render", "https://render.com"], ["Vercel", "https://vercel.com"]]]]],
  ["Cloud Computing & DevOps", "Infrastructure lovers | high demand by 2025 and beyond", [["Learning", [["Cloud Foundations - Great Learning", "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations"], ["AWS Free Tier", "https://aws.amazon.com/free"]]], ["YouTube", [["TechWorld with Nana", "https://www.youtube.com/@TechWorldwithNana"], ["Abhishek Veeramalla", "https://www.youtube.com/@AbhishekVeeramalla"], ["KodeKloud", "https://www.youtube.com/@KodeKloud"]]], ["GitHub", [["DevOps Roadmap", "https://github.com/milanm/DevOps-Roadmap"], ["Awesome Kubernetes", "https://github.com/ramitsurana/awesome-kubernetes"], ["AWS Samples", "https://github.com/aws-samples"]]]]],
  ["Cybersecurity & Ethical Hacking", "Digital protectors | Rs 8 to 12 LPA", [["Learning", [["Cyber Security - NPTEL", "https://onlinecourses.nptel.ac.in/noc25_cs115/preview"], ["TryHackMe Labs", "https://tryhackme.com"]]], ["YouTube", [["HackerSploit", "https://www.youtube.com/@HackerSploit"], ["The Cyber Mentor", "https://www.youtube.com/@TCMSecurityAcademy"]]], ["GitHub", [["Awesome Hacking", "https://github.com/Hack-with-Github/Awesome-Hacking"], ["Pentesting Bible", "https://github.com/blaCCkHatHacEEkr/PENTESTING-BIBLE"]]]]],
  ["Mobile App Development", "App creators", [["YouTube", [["Android Developers", "https://www.youtube.com/@AndroidDevelopers"], ["Philipp Lackner", "https://www.youtube.com/@PhilippLackner"], ["Flutter Official", "https://www.youtube.com/@FlutterDev"]]], ["GitHub", [["Android Sample Projects", "https://github.com/android"]]]]],
  ["DSA & Interview Preparation", "Mandatory for product companies", [["YouTube", [["Take U Forward", "https://www.youtube.com/@takeUforward"], ["NeetCode", "https://www.youtube.com/@NeetCode"]]], ["GitHub", [["Striver SDE Sheet", "https://github.com/striver79/Strivers-SDE-Sheet"], ["Coding Interview University", "https://github.com/jwasham/coding-interview-university"]]]]],
];

const specialized = [
  ["LLM, GenAI & AI Engineering", [["Google GenAI & LLM Basics", "https://grow.google/ai/"], ["upGrad Generative AI Free Course", "https://www.upgrad.com/free-courses/chatgpt-and-ai/generative-ai-free-course/"], ["Kaggle 5-Day GenAI Intensive", "https://www.kaggle.com/learn-guide/5-day-genai"], ["LLM Zoomcamp", "https://datatalks.club/blog/llm-zoomcamp.html"]]],
  ["Data Science, ML & Data Engineering", [["Machine Learning Zoomcamp", "https://github.com/DataTalksClub/machine-learning-zoomcamp"], ["Data Engineering Zoomcamp", "https://datatalks.club/blog/guide-to-free-online-courses-at-datatalks-club.html"], ["Kaggle Learn Overview", "https://www.kaggle.com/learn/overview"]]],
  ["MLOps & Production AI", [["MLOps Zoomcamp", "https://github.com/DataTalksClub/mlops-zoomcamp"], ["MLOps for GenAI video", "https://www.youtube.com/watch?v=eZ-8UQ_t4YM"]]],
  ["Quant, Trading & Finance", [["Quantra Beginner Track", "https://quantra.quantinsti.com/learning-track/guide-quantitative-trading-beginners"], ["Quantra Courses Repo", "https://github.com/QuantInsti/quantra-courses/"], ["Quant Trading for Beginners playlist", "https://www.youtube.com/playlist?list=PLvoal9WEcFgIJXRLQrszAnSXDdiC5Sh9W"], ["Free Quant Trading Course", "https://www.elevify.com/en-gh/courses/business-and-economics/finance/quant-trading-course-a4cad"]]],
  ["Curated Free AI & DS Lists", [["Curated Free AI Courses", "https://grow.google/ai/"], ["Guide to free ML, DE, MLOps, LLM courses", "https://datatalks.club/blog/guide-to-free-online-courses-at-datatalks-club.html"], ["Top Free Data Science Courses", "https://www.tredence.com/blog/top-10-free-data-science-courses"]]],
];

const productivity = [
  ["Time Management", [["My Study Life", "https://mystudylife.com", "Free student planner for class schedules, homework tracking, exams, and reminders."], ["myHomework Student Planner", "https://myhomeworkapp.com", "Tracks assignments, projects, and deadlines with color-coded views and notifications."], ["Todoist", "https://todoist.com", "Task manager with priorities, recurring tasks, and integrations for goal tracking."], ["Google Calendar", "https://calendar.google.com", "Schedules classes, study sessions, and events with reminders and shared access."]]],
  ["Focus & Pomodoro", [["Forest", "https://www.forestapp.cc", "Gamified Pomodoro timer that helps reduce phone distractions."], ["Focus Booster", "https://www.focusboosterapp.com", "Custom Pomodoro intervals with focus analytics and burnout prevention."], ["Brain Focus", "https://play.google.com/store/search?q=brain%20focus&c=apps", "Study and break timers to maintain productivity without constant checking."]]],
  ["Note-Taking", [["Notion", "https://www.notion.so", "Workspace for notes, databases, tasks, and project wikis."], ["Evernote", "https://evernote.com", "Scans documents, adds web clips, and supports research-heavy note workflows."], ["Google Keep", "https://keep.google.com", "Quick color-coded notes, voice memos, and lists synced with Google."], ["Microsoft OneNote", "https://www.onenote.com", "Free notebook-style app with drawing, audio recording, and Outlook integration."]]],
  ["Bonus Tools", [["Habitica", "https://habitica.com", "RPG-style habit tracker that turns tasks into quests for motivation."], ["Trello", "https://trello.com", "Visual boards for group projects and personal workflows."], ["Grammarly", "https://www.grammarly.com", "Real-time writing assistance for essays, assignments, and docs."], ["Canva", "https://www.canva.com", "Create study visuals, presentations, and portfolio graphics quickly."]]],
];

function Link({ href, children, subtle = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`font-semibold underline decoration-transparent underline-offset-4 transition hover:decoration-current ${
        subtle ? "text-[var(--subtle-link)] hover:text-[var(--subtle-link-hover)]" : "text-[var(--accent-background)]"
      }`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-background)]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h3>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">{description}</p>
      ) : null}
    </div>
  );
}

function Surface({ children, className = "" }) {
  return (
    <article
      className={`rounded-[1.75rem] border border-[var(--surface-border)] bg-[var(--surface)] shadow-[var(--surface-shadow)] backdrop-blur ${className}`}
    >
      {children}
    </article>
  );
}

export default function MemberRoadmap() {
  return (
    <section
      id="member-roadmap"
      className="relative overflow-hidden bg-[image:var(--page-gradient)] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-[var(--orb-one)] blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[var(--orb-two)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr]">
          <Surface className="relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-background)]">
              Members Hub
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
              A premium roadmap experience designed to keep students moving.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
              This is no longer just a list of links. It now reads like a guided career system:
              choose a path, build visible proof every week, and stay inside a rhythm that keeps
              momentum high.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-[var(--border)] bg-[var(--chip-background)] px-4 py-2 text-sm font-semibold text-[var(--chip-foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent-background)] hover:text-[var(--accent-background)]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {spotlightStats.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-5"
                >
                  <p className="text-3xl font-bold text-[var(--foreground)]">{value}</p>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">{label}</p>
                </div>
              ))}
            </div>
          </Surface>

          <div className="space-y-6">
            <Surface className="bg-[image:var(--accent-panel)] p-7 text-[var(--primary-foreground)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-panel-muted)]">
                7-Day Kickoff
              </p>
              <h3 className="mt-3 text-2xl font-bold">Stick with the plan from week one</h3>
              <div className="mt-5 space-y-4">
                {kickoffPlan.map(([day, detail]) => (
                  <div key={day} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-[var(--accent-panel-muted)]">{day}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-background)]">
                Why this works
              </p>
              <div className="mt-5 space-y-4 text-sm leading-6 text-[var(--muted-foreground)]">
                <p>One domain reduces distraction.</p>
                <p>Real repositories create proof.</p>
                <p>Daily GitHub pushes create consistency.</p>
                <p>Visible milestones keep motivation from fading.</p>
              </div>
            </Surface>
          </div>
        </div>

        <section id="strategy" className="mt-16">
          <SectionHeading
            eyebrow="Part I"
            title="Start with clarity, then build with discipline"
            description="The fastest way to lose momentum is to consume too much and ship too little. This section keeps the student focused on sequence, practice, and proof."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {strategy.map((card) => (
              <Surface key={card.title} className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-background)]">
                  {card.eyebrow}
                </p>
                <h4 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{card.title}</h4>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>
        </section>

        <section id="tracks" className="mt-20">
          <SectionHeading
            eyebrow="Part II"
            title="Hands-on project tracks"
            description="Each track feels like a lane the student can commit to. The links are direct, the outcomes are clear, and the practice prompts create the next move immediately."
          />
          <div className="mt-8 space-y-8">
            {tracks.map((track, index) => (
              <Surface key={track.title} className="overflow-hidden">
                <div className="border-b border-[var(--table-border)] bg-[image:var(--accent-panel)] px-7 py-7 text-[var(--primary-foreground)]">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-panel-muted)]">
                        Track {index + 1}
                      </p>
                      <h4 className="mt-2 text-2xl font-bold">{track.title}</h4>
                    </div>
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100">
                      {track.benefits}
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[var(--table-header)] text-[var(--foreground)]">
                      <tr>
                        <th className="px-6 py-4">Repository</th>
                        <th className="px-6 py-4">What you&apos;ll learn</th>
                        <th className="px-6 py-4">Practice exercise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--table-border)] text-[var(--muted-foreground)]">
                      {track.repos.map(([name, url, learn, practice]) => (
                        <tr key={name} className="transition hover:bg-[var(--row-hover)]">
                          <td className="px-6 py-5 align-top">
                            <Link href={url}>{name}</Link>
                          </td>
                          <td className="px-6 py-5 align-top">{learn}</td>
                          <td className="px-6 py-5 align-top">{practice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section id="ai-toolkit" className="mt-20">
          <SectionHeading
            eyebrow="Part III"
            title="Core AI toolkit for all students"
            description="These are support tools, not shortcuts. The layout now groups them by job-to-be-done so students know what to open and why."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {toolkit.map(([title, links]) => (
              <Surface key={title} className="p-7">
                <h4 className="text-xl font-bold text-[var(--foreground)]">{title}</h4>
                <ul className="mt-5 grid gap-3 text-sm text-[var(--muted-foreground)]">
                  {links.map(([name, url]) => (
                    <li
                      key={name}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[var(--accent-background)]"
                    >
                      <Link href={url}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>
        </section>

        <section id="domains" className="mt-20">
          <SectionHeading
            eyebrow="Part IV"
            title="Domain-wise master resource map"
            description="This section is built to help the student commit to one identity: AI builder, full stack developer, cloud engineer, cybersecurity learner, mobile creator, or interview-focused candidate."
          />
          <div className="mt-8 grid gap-6">
            {domains.map(([title, intro, groups]) => (
              <Surface key={title} className="p-7">
                <h4 className="text-2xl font-bold text-[var(--foreground)]">{title}</h4>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{intro}</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  {groups.map(([label, links]) => (
                    <div
                      key={label}
                      className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-muted)] p-5"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-background)]">
                        {label}
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                        {links.map(([name, url]) => (
                          <li key={name}>
                            <Link href={url}>{name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section id="specialized" className="mt-20">
          <SectionHeading
            eyebrow="Part V"
            title="Additional specialized AI & tech resources"
            description="Once students have momentum in one lane, these collections help them deepen into GenAI, MLOps, finance, and adjacent technical specializations."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {specialized.map(([title, links]) => (
              <Surface key={title} className="p-7">
                <h4 className="text-xl font-bold text-[var(--foreground)]">{title}</h4>
                <ul className="mt-5 space-y-3 text-sm text-[var(--muted-foreground)]">
                  {links.map(([name, url]) => (
                    <li key={name}>
                      <Link href={url}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </Surface>
            ))}
          </div>

          <Surface className="mt-8 overflow-hidden bg-[image:var(--callout-gradient)] p-8 text-[var(--primary-foreground)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--callout-muted)]">
              Final usage rule
            </p>
            <h4 className="mt-3 text-3xl font-bold">
              Pick one domain. Follow one course, one mentor, one roadmap. Build, explain, and
              push daily.
            </h4>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100">
              The design here intentionally narrows attention. Students should feel a clear next
              step the moment they land, not decision fatigue.
            </p>
          </Surface>
        </section>

        <section id="productivity" className="mt-20">
          <SectionHeading
            eyebrow="Bonus"
            title="Productivity, focus, and study execution"
            description="These tools support consistency, and consistency is what turns a roadmap into placement outcomes."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {productivity.map(([title, tools]) => (
              <Surface key={title} className="p-7">
                <h4 className="text-xl font-bold text-[var(--foreground)]">{title}</h4>
                <div className="mt-5 space-y-4">
                  {tools.map(([name, url, description]) => (
                    <div
                      key={name}
                      className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-muted)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent-background)]"
                    >
                      <Link href={url}>{name}</Link>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </Surface>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Surface className="overflow-hidden bg-[image:var(--deep-panel)] p-8 text-[var(--primary-foreground)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--callout-muted)]">
                  Preview feeling
                </p>
                <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
                  A member should feel like they entered a serious career workspace.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--deep-panel-muted)]">
                  The new visual direction uses stronger depth, cleaner grouping, and more guided
                  progression so the page feels premium and purposeful, not like a document dump.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--callout-muted)]">
                  Student promise
                </p>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                  <p>Choose less, finish more.</p>
                  <p>Turn every week into visible output.</p>
                  <p>Use AI to accelerate learning, not replace practice.</p>
                </div>
                <div className="mt-5 text-sm">
                  <Link href="https://github.com/RajuKumar077" subtle>
                    View the full GitHub profile
                  </Link>
                </div>
              </div>
            </div>
          </Surface>
        </section>
      </div>
    </section>
  );
}
