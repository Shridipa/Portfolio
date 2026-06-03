'use client';

import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { ProjectCard } from '@/components/project-card';

const projectsData = [
  {
    id: 'research-mind',
    title: 'Research Mind',
    description: 'AI-powered Research Assistant built using Retrieval-Augmented Generation. Compare papers, extract insights, and get evidence-grounded answers with multi-paper analysis.',
    shortDescription: 'RAG-powered research assistant for multi-paper comparison and semantic analysis',
    tags: ['RAG', 'LLMs', 'FastAPI', 'React', 'FAISS', 'BM25'],
    image: '📚',
    metrics: [
      'Indexed thousands of research paper chunks',
      'Hybrid BM25 + semantic search for retrieval quality',
      'Reduced hallucinations using evidence-grounded generation',
      'Citation support for all answers with paper references',
      'Multi-paper comparison and synthesis'
    ],
    fullDescription: 'Research Mind is a production-ready research assistant that leverages retrieval-augmented generation to help researchers quickly extract insights from large paper collections. The system implements both BM25 and semantic search for robust retrieval, and generates responses grounded in evidence from indexed papers.',
    architecture: 'FastAPI backend with FAISS vector search, React frontend with real-time streaming responses',
    methodology: 'Hybrid retrieval combining lexical (BM25) and semantic (embedding-based) search. Evidence-grounded generation with citation tracking.',
    results: 'Successfully indexed and queried thousands of research paper chunks with improved recall through hybrid search. Significantly reduced hallucinations compared to baseline LLM approaches.',
    futureWork: 'Multi-modal paper support, collaborative research spaces, automatic literature review generation',
    github: 'https://github.com/Shridipa',
    demo: '#'
  },
  {
    id: 'medic-ai',
    title: 'Medic AI',
    description: 'Explainable AI-powered Medical Intelligence Assistant. Analyzes medical reports, predicts diseases, and provides clinical recommendations with transparent reasoning.',
    shortDescription: 'Explainable AI assistant for medical report analysis and disease prediction',
    tags: ['PyTorch', 'LLMs', 'FastAPI', 'NLP', 'XAI'],
    image: '🏥',
    metrics: [
      'High prediction accuracy on medical datasets',
      'Explainable outputs with reasoning chains',
      'Real-time inference capability for clinical use',
      'NLP-powered symptom analysis and extraction',
      'Privacy-compliant architecture'
    ],
    fullDescription: 'Medic AI combines state-of-the-art natural language processing with explainable AI principles to assist medical professionals. The system analyzes medical reports, extracts key symptoms and conditions, and provides probabilistic disease predictions with transparent reasoning.',
    architecture: 'PyTorch model with attention mechanisms for interpretability, FastAPI backend for REST API, FastText embeddings for medical NLP',
    methodology: 'Transformer-based architecture for NLP task. Explainability through attention visualization and reasoning chains. Trained on medical datasets with privacy preservation.',
    results: 'High accuracy on disease prediction tasks. Explainable predictions enable clinical review and trust. Real-time inference suitable for clinical workflows.',
    futureWork: 'Multi-lingual support, integration with EHR systems, uncertainty quantification',
    github: 'https://github.com/Shridipa',
    demo: '#'
  },
  {
    id: 'elo-learn',
    title: 'Elo Learn',
    description: 'Research-grade Adaptive Learning Platform with Knowledge Tracing. Personalized learning paths, intelligent recommendations, and student performance prediction.',
    shortDescription: 'Adaptive learning platform with knowledge tracing and personalized recommendations',
    tags: ['FastAPI', 'Streamlit', 'Knowledge Graphs', 'ML', 'NetworkX'],
    image: '🎓',
    metrics: [
      'Personalized learning recommendations based on knowledge state',
      'Adaptive difficulty adjustment for optimal challenge level',
      'Explainable learning paths using knowledge graphs',
      'Student performance prediction with high accuracy',
      'Instructor analytics for class-wide insights'
    ],
    fullDescription: 'Elo Learn is a research-focused adaptive learning platform that uses knowledge tracing to model student understanding and provide personalized learning paths. The system combines spaced repetition, knowledge graphs, and recommendation algorithms to optimize learning outcomes.',
    architecture: 'Python backend with NetworkX for knowledge graphs, Streamlit dashboard for student and instructor interfaces, SQLite for persistence',
    methodology: 'Knowledge tracing using Bayesian Networks. Recommendation system combining collaborative filtering with item-based KT. Spaced repetition scheduling.',
    results: 'Improved student learning outcomes through personalized recommendations. Accurate performance prediction enabling proactive intervention. Explainable learning paths building student confidence.',
    futureWork: 'Integration with learning management systems, advanced reinforcement learning for path optimization, gamification elements',
    github: 'https://github.com/Shridipa',
    demo: '#'
  }
];

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-20">
        <SectionTitle
          title="Projects"
          subtitle="Research-grade systems combining intelligent algorithms with production engineering"
        />

        {/* Project Grid */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.shortDescription}
              tags={project.tags}
              image={project.image}
              metrics={project.metrics}
              github={project.github}
              href={`/projects/${project.id}`}
            />
          ))}
        </div>

        {/* Detailed Project Descriptions */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <section key={project.id} id={project.id} className="scroll-mt-20">
              <div className="mb-8 grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  {/* Problem */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
                    <p className="text-slate-300">
                      {project.id === 'research-mind' &&
                        'Researchers struggle to extract insights from large collections of papers. Manual review is time-consuming, and existing search tools often miss relevant connections or produce hallucinated insights.'}
                      {project.id === 'medic-ai' &&
                        'Healthcare professionals need AI systems they can trust. Black-box predictions are unsuitable for medical domains where explainability is critical for clinical adoption and liability.'}
                      {project.id === 'elo-learn' &&
                        'Educational institutions lack personalized learning systems. One-size-fits-all curricula fail to adapt to individual student needs, leading to disengagement and suboptimal learning outcomes.'}
                    </p>
                  </div>

                  {/* Methodology */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3">Methodology</h3>
                    <p className="text-slate-300 mb-4">{project.methodology}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Results</h3>
                    <p className="text-slate-300">{project.results}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Architecture</h4>
                    <p className="text-sm text-slate-300">{project.architecture}</p>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Key Metrics</h4>
                    <ul className="space-y-2">
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">✓</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Future Work</h4>
                    <p className="text-xs text-slate-300">{project.futureWork}</p>
                  </GlassCard>
                </div>
              </div>

              {idx < projectsData.length - 1 && <hr className="border-white/10" />}
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
