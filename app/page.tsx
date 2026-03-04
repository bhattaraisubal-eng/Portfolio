const SKILLS = {
  "Languages & Frameworks": [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "Node.js",
  ],
  "Data & ML": [
    "PostgreSQL",
    "pgvector",
    "OpenAI API",
    "LangChain",
    "Pandas",
    "Scikit-learn",
    "PyTorch",
    "Hugging Face",
  ],
  Infrastructure: [
    "AWS",
    "Docker",
    "Railway",
    "Vercel",
    "Redis",
    "Git",
    "CI/CD",
  ],
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen dot-grid">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm font-bold gradient-text">
            SB
          </span>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#about" className="nav-link hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="nav-link hover:text-white transition-colors">
              Projects
            </a>
            <a href="#research" className="nav-link hover:text-white transition-colors">
              Research
            </a>
            <a href="#writing" className="nav-link hover:text-white transition-colors">
              Writing
            </a>
            <a href="#skills" className="nav-link hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="nav-link hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-14 px-6 overflow-hidden">
        <div className="hero-orb top-10 -right-40" />
        <div className="max-w-6xl mx-auto relative">
          <div className="animate-fade-up">
            <p className="text-sm font-mono text-emerald-400/80 mb-4 animate-delay-1">
              Hi, I&apos;m
            </p>
            <h1 className="text-6xl font-bold tracking-tight mb-5">
              <span className="gradient-text">Subal Bhattarai</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8 animate-fade-up animate-delay-2">
              Systems Analyst with a real passion for ML and AI projects.
              I build intelligent systems that turn complex data into
              actionable insights.
            </p>
            <div className="flex items-center gap-4 animate-fade-up animate-delay-3">
              <a
                href="https://github.com/bhattaraisubal-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-sm font-semibold hover:from-emerald-400 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:bhattaraisubal@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-emerald-500/50 hover:text-white transition-all"
              >
                <MailIcon className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6">
            About
          </h2>
          <p className="text-2xl text-zinc-200 leading-relaxed font-light max-w-3xl">
            I am a Systems Analyst who loves math, finance, and AI. Looking
            for opportunities at the intersection of it.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10">
            Projects
          </h2>

          {/* SEC RAG System */}
          <div className="glow-card rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  SEC Filing Intelligence Engine
                </h3>
                <p className="text-sm text-zinc-500 mt-1 font-mono">
                  Full-Stack RAG System
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://sec-intelligence-system.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Live Demo
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/bhattaraisubal-eng/sec-intelligence-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
              AI-powered retrieval-augmented generation system for querying SEC
              EDGAR filings using natural language. Covers the top 10 S&amp;P
              500 companies with 1M+ structured XBRL data points and semantic
              vector search across 10-K and 10-Q filings from 2010 to present.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  title: "5-Way Query Routing",
                  desc: "Intelligent classification routes queries to metric lookup, timeseries, narrative search, hybrid, or full statement retrieval",
                },
                {
                  title: "Vector + Relational Retrieval",
                  desc: "pgvector cosine similarity search with cross-encoder reranking, combined with structured XBRL financial data",
                },
                {
                  title: "Confidence Scoring",
                  desc: "0-100 confidence with 5 weighted signals: retrieval quality, source coverage, cross-source agreement, citations, recency",
                },
                {
                  title: "Real-time Streaming",
                  desc: "SSE streaming with live classification display, retrieval plan animation, and progressive answer generation",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 hover:border-zinc-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "FastAPI",
                "React",
                "PostgreSQL",
                "pgvector",
                "OpenAI",
                "XBRL",
                "SSE Streaming",
                "Railway",
                "Vercel",
              ].map((tag) => (
                <span
                  key={tag}
                  className="tag-glow px-2.5 py-1 rounded-md bg-zinc-800/80 border border-transparent text-xs font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm text-zinc-600 mt-8 text-center font-mono">
            More projects coming soon.
          </p>
        </div>
      </section>

      {/* Informal Research */}
      <section id="research" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10">
            Informal Research
          </h2>

          <div className="glow-card rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  RAG Poisoning in Multi-Agent LLM Systems
                </h3>
                <p className="text-sm text-zinc-500 mt-1 font-mono">
                  Simple Experiment
                </p>
              </div>
              <a
                href="https://github.com/bhattaraisubal-eng/RAG-poisoning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
              A simple experiment exploring how poisoned documents in a RAG
              knowledge base can manipulate multi-agent LLM systems into
              exfiltrating sensitive data. The simulation uses an orchestrator
              agent that reads from a shared knowledge base and delegates tasks
              to a worker agent with database and email access, testing whether
              injected payloads can trigger unauthorized PII extraction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  title: "Controlled Simulation",
                  desc: "Two-agent pipeline with orchestrator and worker roles, mock customer database, and email outbox for measuring exfiltration",
                },
                {
                  title: "Payload Injection",
                  desc: "Tests multiple attack strategies including direct instruction, authority impersonation, and multi-step social engineering",
                },
                {
                  title: "Statistical Analysis",
                  desc: "Chi-squared and Fisher\u2019s exact tests comparing exfiltration rates between poisoned and clean knowledge bases",
                },
                {
                  title: "Defense Evaluation",
                  desc: "Measures baseline vs. attacked success rates to quantify how vulnerable current LLM agent architectures are",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 hover:border-zinc-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "OpenAI API",
                "Multi-Agent Systems",
                "RAG",
                "Security Research",
                "Statistical Testing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="tag-glow px-2.5 py-1 rounded-md bg-zinc-800/80 border border-transparent text-xs font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10">
            Writing
          </h2>

          <a
            href="https://dev.to/bhattaraisubaleng/hybrid-rag-system-over-sec-filings-2gj8"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card block rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Building a Multi-Route RAG System Over SEC Filings
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-mono">
                  dev.to &middot; Deep Dive
                </p>
              </div>
              <ExternalIcon className="h-4 w-4 text-zinc-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              A detailed walkthrough of every design decision behind the SEC
              Filing Intelligence Engine — from the naive prototype that
              hallucinated revenue numbers, through domain-specific nightmares
              (fiscal year mismatches, XBRL tag renames, Q4 derivation), to
              the 5-route retrieval architecture that finally worked.
            </p>
            <div className="flex flex-wrap gap-2">
              {["RAG", "Python", "AI", "Fintech", "System Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-zinc-800 text-xs font-mono text-zinc-500"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="tag-glow px-2.5 py-1 rounded-md border border-zinc-800 text-xs font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 px-6 section-divider">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6">
            Contact
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Interested in collaborating or have a question? Reach out.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:bhattaraisubal@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-sm font-semibold hover:from-emerald-400 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/20"
            >
              <MailIcon className="h-4 w-4" />
              bhattaraisubal@gmail.com
            </a>
            <a
              href="https://github.com/bhattaraisubal-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-emerald-500/50 hover:text-white transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 section-divider">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs text-zinc-600 font-mono">
            Built by Subal Bhattarai
          </p>
        </div>
      </footer>
    </div>
  );
}
