import { Hero } from '@/components/hero';
import { StatsSection } from '@/components/stats';
import { SkillsSection } from '@/components/skills';
import { ProjectCard } from '@/components/project-card';
import { SectionTitle, Footer } from '@/components/common';
import { Timeline } from '@/components/timeline';
import { GitHubMetrics } from '@/components/github-metrics';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const researchTimeline = [
  {
    year: '2024',
    title: 'Started AI & ML Specialization',
    description: 'Began focused research in deep learning fundamentals, neural network theory, and mathematical foundations.',
    details: [
      'Problem: Build theoretical foundation for research-grade AI systems',
      'Methodology: Studied Haykin\'s Neural Networks textbook, derived backpropagation from first principles',
      'Tools: Python, PyTorch, Jupyter',
      'Status: Foundation complete — enabled experimental research'
    ],
    icon: '📘'
  },
  {
    year: '2025',
    title: 'ML Lead — KIIT Nexus Society',
    description: 'Led AI/ML research initiatives and organized technical workshops for peer learning.',
    details: [
      'Problem: Establish research-first culture in student ML community',
      'Methodology: Organized seminars on neural networks, experimentation, and model design',
      'Impact: Mentored 15+ students on research pipelines and validation methods',
      'Status: Ongoing leadership'
    ],
    icon: '🤝'
  },
  {
    year: '2025',
    title: 'Scalar RL Hackathon — Top 800',
    description: 'Developed and trained reinforcement learning agent with research-driven optimization.',
    details: [
      'Problem: Design RL agent for competitive benchmark',
      'Methodology: Experimented with policy gradient methods, reward shaping, and hyperparameter tuning',
      'Result: Achieved Top 800 ranking via agent training and empirical validation',
      'Status: Completed'
    ],
    icon: '🏆'
  },
  {
    year: '2026',
    title: 'Research Intern — Indian Statistical Institute (ISI), Kolkata',
    description: 'Active research internship on neural network optimization and generalization analysis.',
    details: [
      'Problem: Investigate neural network training dynamics and generalization behavior',
      'Methodology: Mathematical analysis, backpropagation derivation, experimental benchmarking',
      'Tools: Python, PyTorch, statistical analysis, empirical evaluation',
      'Status: Ongoing — neural networks and optimization research'
    ],
    icon: '🧪'
  },
  {
    year: '2026',
    title: 'Physically Unclonable Functions (PUF) Research Paper',
    description: 'Investigating hardware security architectures and authentication mechanisms.',
    details: [
      'Problem: Evaluate reliability and uniqueness of PUF systems for secure authentication',
      'Methodology: Empirical analysis of PUF entropy, stability metrics, and security properties',
      'Research Area: Hardware security, cryptography, IoT authentication',
      'Status: Manuscript in preparation'
    ],
    icon: '📄'
  },
  {
    year: '2026',
    title: 'WorldQuant Brain — Rank 1104',
    description: 'Developing and validating quantitative alpha signals for financial markets.',
    details: [
      'Problem: Generate statistically validated trading signals',
      'Methodology: Factor modeling, signal backtesting, statistical evaluation, risk analysis',
      'Achievement: 80+ alpha contributions ranked globally',
      'Status: Ongoing quantitative research'
    ],
    icon: '📈'
  }
];

const achievements = [
  { title: 'Top 800', subtitle: 'Scalar RL Hackathon' },
  { title: 'World Rank 1104', subtitle: 'WorldQuant Brain' },
  { title: '80+', subtitle: 'Alpha Contributions' },
  { title: 'Top 15,000', subtitle: 'Google Coding Competition' },
  { title: 'Google Solution Challenge', subtitle: 'Participant' },
  { title: '8.49 CGPA', subtitle: 'Academic Performance' }
];

const interests = [
  'Deep Learning Optimization',
  'Neural Network Generalization',
  'Retrieval-Augmented Generation',
  'Large Language Models',
  'Reinforcement Learning',
  'Educational AI',
  'AI for Scientific Discovery',
  'Hardware Security (PUFs)'
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionTitle title="Trusted Research Impact" subtitle="High-visibility achievements and ongoing research work recruiters scan first." />
      <StatsSection />

      <section id="research-snapshot" className="py-20">
        <SectionTitle title="Research Snapshot" subtitle="Quantified research signal and ongoing investigations." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Research Internship', value: 'ISI Kolkata', desc: 'Neural Networks & Optimization' },
            { label: 'Research Paper', value: 'PUF Systems', desc: 'Hardware Security (Ongoing)' },
            { label: 'WorldQuant Rank', value: '1104', desc: '80+ Alpha Contributions' },
            { label: 'MLP Accuracy', value: '97.65%', desc: 'From-scratch Neural Network' },
            { label: 'RL Hackathon', value: 'Top 800', desc: 'Scalar Reinforcement Learning' },
            { label: 'ML Leadership', value: 'KIIT Nexus', desc: 'Research Culture & Mentoring' }
          ].map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-border bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">{metric.label}</p>
              <p className="mt-3 text-2xl font-semibold text-text">{metric.value}</p>
              <p className="mt-2 text-sm text-muted leading-6">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="py-20">
        <SectionTitle title="Research Experience" subtitle="Problem-driven investigations with methodology, tools, and outcomes." />
        <Timeline items={researchTimeline} />
      </section>

      <section id="publications" className="py-20">
        <SectionTitle title="Publications & Research" subtitle="Peer-reviewed work and ongoing research manuscripts." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
              📝 In Progress
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-text">Physically Unclonable Functions for Secure Authentication Systems</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
              <p><strong>Authors:</strong> Shridipa Dhar et al.</p>
              <p><strong>Institution:</strong> Indian Statistical Institute, Kolkata</p>
              <p><strong>Research Areas:</strong> Hardware Security • PUF Systems • Cryptography • IoT</p>
              <p><strong>Contribution:</strong> Empirical analysis of PUF reliability, uniqueness metrics, and authentication mechanisms</p>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] font-semibold text-text">Expected: Q3 2026</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-text mb-4">
              🔬 Research Pipeline
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-text">Deep Learning Research Track</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
              <li><strong>Neural Network Optimization:</strong> Training dynamics, generalization analysis, backpropagation theory</li>
              <li><strong>Retrieval Systems:</strong> Evidence-grounded AI, multi-document reasoning, semantic search</li>
              <li><strong>Quantitative Modeling:</strong> Signal validation, statistical arbitrage, factor analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <GitHubMetrics />

      <section id="quant" className="py-20">
        <SectionTitle title="Quantitative Research" subtitle="WorldQuant Brain and alpha generation expertise." />
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.22em] text-muted">WorldQuant Brain</p>
            <h3 className="mt-4 text-3xl font-semibold text-text">Rank 1104</h3>
            <p className="mt-4 text-muted leading-7">
              Building alpha signals and quantitative models with an emphasis on statistical research, signal validation, and performance-driven outcomes.
            </p>
            <div className="mt-6 space-y-3 text-sm text-text/80">
              <p>• 80+ alpha contributions</p>
              <p>• Statistical arbitrage research</p>
              <p>• Quantitative signal generation</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Quantitative Modeling</p>
            <h3 className="mt-4 text-2xl font-semibold text-text">Research-grade frameworks</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>• Alpha signal validation</li>
              <li>• Risk and performance analysis</li>
              <li>• Model-driven research experiments</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.22em] text-muted">Research Output</p>
            <h3 className="mt-4 text-2xl font-semibold text-text">Data-backed results</h3>
            <div className="mt-6 space-y-3 text-sm text-text/80">
              <p>• Ongoing research on quant strategies</p>
              <p>• Experimental results with reproducible logic</p>
              <p>• Research-first engineering mindset</p>
            </div>
          </div>
        </div>
      </section>

      <section id="interests" className="py-20">
        <SectionTitle title="Research Interests" subtitle="Areas I am actively exploring through research and experimentation." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {interests.map((interest) => (
            <div key={interest} className="rounded-3xl border border-border bg-white px-5 py-5 text-sm font-medium text-text shadow-soft">
              {interest}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitle title="Featured Projects" subtitle="Research-focused systems that show methodology, architecture, and impact." />
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/more-projects" className="btn-primary inline-flex items-center gap-2">
              View more projects
              <ArrowRight size={16} />
            </a>
            <a href="/more-projects" className="btn-link inline-flex items-center gap-2">
              View more project
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ProjectCard
            index={0}
            title="Research Mind"
            description="LLM-Powered Research Copilot for Literature Review and Evidence-Grounded QA"
            tags={['RAG', 'FAISS', 'BM25', 'Semantic Retrieval', 'LLM Systems']}
            image="🧠"
            metrics={[
              'Research Areas: NLP, LLM Systems, Retrieval-Augmented Generation',
              'Problem: Accelerate literature review and enable multi-document reasoning',
              'Methodology: Hybrid retrieval (BM25 + semantic), embedding-based search, LLM-grounded QA',
              'Tech: FastAPI, React, FAISS, HuggingFace, LangChain',
              'Results: Evidence-grounded QA, multi-paper comparison, semantic retrieval validation',
              'Future: Multi-agent orchestration, hallucination evaluation, citation tracking'
            ]}
            github="https://github.com/Shridipa"
            demo="/case-studies/research-mind"
            href="/case-studies/research-mind"
          />

          <ProjectCard
            index={1}
            title="Medic AI"
            description="Multimodal Medical Intelligence System with Explainable Diagnosis"
            tags={['Computer Vision', 'NLP', 'Explainable AI', 'Multimodal Fusion']}
            image="🏥"
            metrics={[
              'Research Areas: Medical AI, Multimodal Learning, Explainable AI',
              'Problem: Integrate image and text for trustworthy medical reasoning',
              'Methodology: Vision encoder + text encoder, cross-modal fusion, confidence scoring',
              'Tech: PyTorch, CNNs, Transformers, FastAPI, SHAP interpretability',
              'Results: Multimodal symptom analysis, explainable predictions, confidence metrics',
              'Future: Clinical validation, uncertainty quantification, multi-modality expansion'
            ]}
            github="https://github.com/Shridipa"
            demo="/case-studies/medic-ai"
            href="/case-studies/medic-ai"
          />

          <ProjectCard
            index={2}
            title="Elo Learn"
            description="AI-Powered Adaptive Learning Platform with Knowledge Tracing"
            tags={['Knowledge Tracing', 'Recommendation Systems', 'Educational AI', 'RL']}
            image="🎓"
            metrics={[
              'Research Areas: Educational AI, Knowledge Tracing, Recommendation Systems',
              'Problem: Personalize learning at scale with adaptive difficulty and pacing',
              'Methodology: Bayesian knowledge tracing, spaced repetition, reinforcement learning for sequencing',
              'Tech: FastAPI, Streamlit, PyTorch, PostgreSQL, knowledge graph models',
              'Results: Adaptive learning paths, personalized recommendations, engagement metrics',
              'Future: Transfer learning across domains, temporal modeling, peer learning networks'
            ]}
            github="https://github.com/Shridipa"
            demo="/case-studies/elo-learn"
            href="/case-studies/elo-learn"
          />
        </div>
      </section>

      <section id="skills" className="py-20">
        <SectionTitle title="Technical Skills" subtitle="Mature capability categories for research, systems, and quantitative work." />
        <SkillsSection />
      </section>

      <section id="achievements" className="py-20">
        <SectionTitle title="Achievements" subtitle="Strong signals for research performance and engineering excellence." />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="rounded-3xl border border-border bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.22em] text-muted">{achievement.subtitle}</p>
              <p className="mt-4 text-3xl font-semibold text-text">{achievement.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="leadership" className="py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle title="Leadership" subtitle="Machine learning leadership, mentoring, and collaborative research." />
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <p className="text-lg font-semibold text-text">Machine Learning Lead — KIIT Nexus</p>
              <ul className="mt-5 space-y-3 text-muted leading-7">
                <li>Led AI/ML initiatives and organized technical workshops.</li>
                <li>Mentored students on research pipelines, experimentation, and model design.</li>
                <li>Managed collaborative learning sessions for advanced AI topics.</li>
                <li>Built a research-first culture with practical engineering outcomes.</li>
              </ul>
            </div>
          </div>
          <div className="glass border-border bg-white p-8">
            <h3 className="text-xl font-semibold text-text">Research Focus</h3>
            <p className="mt-4 text-muted leading-7">
              Neural network optimization, retrieval-augmented generation, quantitative alpha research, and hardware security are the current research focus areas.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20">
        <div className="rounded-[2rem] border border-border bg-surface p-10 shadow-card">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted">Resume</p>
              <h2 className="mt-4 text-3xl font-semibold text-text">Interested in research internships, systems, and quantitative modeling.</h2>
              <p className="mt-4 max-w-2xl text-muted leading-7">
                Ready to discuss research internships, machine learning systems, and quantitative engineering with a strong emphasis on clarity, rigor, and measurable impact.
              </p>
            </div>
            <a href="#contact" className="btn-primary inline-flex items-center gap-3">
              Download Resume
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <SectionTitle title="Contact" subtitle="Direct connections for research conversations and internship opportunities." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'GitHub', link: 'https://github.com/Shridipa', icon: Github },
            { label: 'LinkedIn', link: 'https://www.linkedin.com/in/shridipa-dhar-373b6231b/', icon: Linkedin },
            { label: 'Email', link: 'mailto:dhar.shridipa@gmail.com', icon: Mail },
            { label: 'Resume', link: '#resume', icon: ArrowRight }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl border border-border bg-white p-6 text-left transition hover:border-primary hover:bg-hover"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-primary">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-lg font-semibold text-text">{item.label}</p>
                <p className="mt-2 text-sm text-muted">{item.link.replace('https://', '').replace('mailto:', '')}</p>
              </a>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
