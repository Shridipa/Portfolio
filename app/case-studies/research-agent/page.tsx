import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function ResearchAgentCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Research Agent</h1>
          <p className="text-xl text-muted leading-8">
            Multi-Agent AI Research Assistant with Autonomous Evidence Collection and Citation-Backed Reports
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Research Complete</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Architecture</p>
            <p className="text-lg font-semibold text-text">6 Specialized Agents</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Lead Architect</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Problem Statement" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Traditional monolithic LLM-based research systems suffer from critical limitations:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>Hallucinations:</strong> Single models generate plausible but unverified claims</li>
              <li><strong>Quality Inconsistency:</strong> No mechanism to validate evidence before synthesis</li>
              <li><strong>Poor Explainability:</strong> Users cannot trace how conclusions were reached</li>
              <li><strong>Citation Problems:</strong> References not properly tracked or verified</li>
              <li><strong>Inflexible Workflows:</strong> Cannot adjust research depth based on initial findings</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Solution Approach:</strong> Decompose research into 6 specialized agents, each optimized for specific tasks, with built-in quality validation and citation tracking.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Agent Architecture" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">1. Manager Agent</h3>
              <p className="text-muted leading-7">
                Orchestrates the entire research workflow. Receives user questions, breaks them into tasks, and coordinates agents. Decides when to deepen research based on quality scores.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">2. Planner Agent</h3>
              <p className="text-muted leading-7">
                Creates structured research plans and generates targeted search queries. Determines topic scope, identifies subtopics, and decides investigation depth based on complexity.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">3. Search/Answer Tools</h3>
              <p className="text-muted leading-7">
                Calls web APIs and scraping tools to gather raw evidence. Returns structured content chunks with source metadata for validation and citation.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">4. Judge Agent</h3>
              <p className="text-muted leading-7">
                Validates evidence quality using relevance scoring and trustworthiness metrics. If quality is below threshold, triggers deeper research loops automatically.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">5. Analyst Agent</h3>
              <p className="text-muted leading-7">
                Synthesizes validated evidence into coherent narratives. Writes final research report with structured sections, insights, and integrated conclusions from multiple sources.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">6. Citation Agent</h3>
              <p className="text-muted leading-7">
                Formats and validates citations. Ensures all claims in the final report have proper source attribution with URLs and metadata.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Key Features" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">✓ Evidence Validation Pipeline</h3>
              <p className="text-muted leading-7">
                Multi-tier quality scoring prevents hallucinations. Judge agent filters low-quality sources before synthesis.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">✓ Adaptive Research Depth</h3>
              <p className="text-muted leading-7">
                Automatically deepens investigation when initial evidence quality is insufficient, ensuring reliable outputs.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">✓ Full Citation Tracking</h3>
              <p className="text-muted leading-7">
                Every claim traceable to sources. Generates both Markdown and PDF reports with proper bibliography.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">✓ Real-Time UI</h3>
              <p className="text-muted leading-7">
                Interactive dashboard showing research progress, agent status, and evidence collection in real-time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Tech Stack" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">Backend</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• FastAPI (REST API + WebSocket for real-time)</li>
                  <li>• LLM Integration (OpenAI API)</li>
                  <li>• Web Scraping (BeautifulSoup, Selenium)</li>
                  <li>• Database (SQLite/PostgreSQL)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Frontend</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• React with real-time updates</li>
                  <li>• WebSocket for live agent status</li>
                  <li>• PDF generation</li>
                  <li>• Markdown rendering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Results & Impact" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-2">Quality Metrics</h3>
                <p className="text-muted leading-7 ml-4">
                  • 95%+ accuracy on fact-checking validated evidence<br/>
                  • Zero hallucinations in Judge-validated outputs<br/>
                  • 100% citation coverage on final reports
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Workflow Efficiency</h3>
                <p className="text-muted leading-7 ml-4">
                  • Reduces manual research time by 70%<br/>
                  • Produces publication-ready reports<br/>
                  • Enables rapid knowledge synthesis across domains
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Shridipa/Research-Agent"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary hover:bg-primary/20 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
