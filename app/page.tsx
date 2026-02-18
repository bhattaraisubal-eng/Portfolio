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
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-white">
            SB
          </span>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <p className="text-sm font-mono text-emerald-400 mb-4">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl font-bold text-white tracking-tight mb-4">
              Subal Bhattarai
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-8">
              Systems Analyst with a real passion for ML and AI projects.
              I build intelligent systems that turn complex data into
              actionable insights.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/bhattaraisubal-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:bhattaraisubal@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6">
            About
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
            I&apos;m a Systems Analyst who bridges the gap between business
            requirements and technical solutions. My passion lies in applying
            machine learning and AI to solve real-world problems — from
            building RAG pipelines over financial filings to designing
            data-intensive applications that scale.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mt-4">
            I enjoy working across the full stack: designing databases,
            building APIs, training models, and creating intuitive interfaces.
            Currently focused on NLP, retrieval-augmented generation, and
            making financial data more accessible through AI.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10">
            Projects
          </h2>

          {/* SEC RAG System — Hero Project */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 transition-colors">
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
                  href="https://sec-rag-system.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Live Demo
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/bhattaraisubal-eng/sec-rag-system"
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

            {/* Architecture highlights */}
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
                  className="rounded-lg border border-zinc-800 bg-zinc-900 p-3"
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

            {/* Tech tags */}
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
                  className="px-2.5 py-1 rounded-md bg-zinc-800 text-xs font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder for future projects */}
          <p className="text-sm text-zinc-600 mt-8 text-center font-mono">
            More projects coming soon.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
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
                      className="px-2.5 py-1 rounded-md border border-zinc-800 text-xs font-mono text-zinc-400 hover:border-zinc-600 hover:text-zinc-300 transition-colors"
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
      <section id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6">
            Contact
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Interested in collaborating or have a question? Reach out.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:bhattaraisubal@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-black text-sm font-semibold hover:bg-emerald-400 transition-colors"
            >
              <MailIcon className="h-4 w-4" />
              bhattaraisubal@gmail.com
            </a>
            <a
              href="https://github.com/bhattaraisubal-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-zinc-600 font-mono">
            Built by Subal Bhattarai
          </p>
        </div>
      </footer>
    </div>
  );
}
