import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function ResearchMindCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🧠</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Research Mind</h1>
          <p className="text-xl text-muted leading-8">
            LLM-Powered Research Copilot for Literature Review and Evidence-Grounded Question Answering
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Active Development</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Timeline</p>
            <p className="text-lg font-semibold text-text">6 months</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Full Stack Engineer</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Problem Statement" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Literature review is a time-consuming process that requires researchers to:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>Search across multiple papers</strong> manually, spending hours finding relevant information</li>
              <li><strong>Extract and synthesize information</strong> from unstructured PDFs without tool support</li>
              <li><strong>Compare findings</strong> across papers to identify gaps and contradictions</li>
              <li><strong>Generate insights</strong> while maintaining evidence-grounding and avoiding hallucinations</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Target Users:</strong> Graduate students, researchers, and academics conducting systematic literature reviews or rapid research synthesis.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Research Motivation" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why RAG?</h3>
              <p className="text-muted leading-7 mb-4">
                Retrieval-Augmented Generation (RAG) combines dense retrieval with language models to ground answers in source documents, reducing hallucinations and enabling evidence-backed responses.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why Hybrid Search?</h3>
              <p className="text-muted leading-7 mb-4">
                Hybrid retrieval (BM25 + semantic embeddings) captures both lexical and semantic relevance, improving retrieval accuracy compared to single-mode search.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="System Architecture" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-10 mb-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">Backend Pipeline</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>Document Ingestion:</strong> Upload PDFs → Extract text with PyPDF</p>
                  <p><strong>Chunking:</strong> Split text into overlapping chunks (512 tokens, 50 token overlap)</p>
                  <p><strong>Embedding:</strong> Generate embeddings using HuggingFace sentence-transformers</p>
                  <p><strong>Indexing:</strong> Store embeddings in FAISS with BM25 fallback index</p>
                  <p><strong>Retrieval:</strong> Hybrid search combining semantic similarity + keyword matching</p>
                  <p><strong>Generation:</strong> LLM processes retrieved documents + user query → grounded response</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Frontend Interface</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>PDF Upload:</strong> Drag-and-drop interface for document management</p>
                  <p><strong>Query Interface:</strong> Real-time question answering with retrieval transparency</p>
                  <p><strong>Citation Display:</strong> Show source documents and retrieved chunks with highlights</p>
                  <p><strong>Paper Comparison:</strong> Multi-document view for synthesizing findings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Technical Implementation" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2 mb-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-4">Backend Stack</h3>
              <ul className="space-y-2 text-muted leading-7">
                <li>• <strong>Framework:</strong> FastAPI</li>
                <li>• <strong>Embeddings:</strong> HuggingFace sentence-transformers</li>
                <li>• <strong>Vector Store:</strong> FAISS</li>
                <li>• <strong>Retrieval:</strong> BM25 + semantic hybrid search</li>
                <li>• <strong>LLM:</strong> GPT-4 / Claude API</li>
                <li>• <strong>PDF Processing:</strong> PyPDF, LangChain</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-4">Frontend Stack</h3>
              <ul className="space-y-2 text-muted leading-7">
                <li>• <strong>Framework:</strong> React with TypeScript</li>
                <li>• <strong>State Management:</strong> React Context</li>
                <li>• <strong>UI Components:</strong> TailwindCSS</li>
                <li>• <strong>API Integration:</strong> Axios</li>
                <li>• <strong>PDF Viewer:</strong> react-pdf</li>
                <li>• <strong>Deployment:</strong> Vercel</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Technical Challenges & Solutions" subtitle="" />
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 1: Handling Large PDFs</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Large research papers (50+ pages) exceed token limits when chunked naively.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Implemented intelligent chunking with sliding window overlap, separating tables and figures to preserve structure while respecting LLM token limits.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 2: Hallucination Reduction</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> LLM generates plausible but unsupported answers when retrieval fails.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Implemented retrieval validation — LLM only generates answers if confidence score exceeds threshold; otherwise suggests retrieving more documents.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 3: Cross-Document Reasoning</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Queries requiring synthesis across multiple papers often retrieve irrelevant sections.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Developed multi-query expansion strategy where LLM rephrases questions to retrieve diverse perspectives, improving recall for comparative analysis.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Methodology" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">Evaluation Framework</h3>
                <p className="text-muted leading-7 mb-4">
                  Evaluated system performance across three dimensions:
                </p>
                <ul className="space-y-2 text-muted leading-7 ml-4">
                  <li><strong>Retrieval Quality:</strong> NDCG@5, MRR — measuring relevance of retrieved documents</li>
                  <li><strong>Generation Quality:</strong> ROUGE, BERTScore — comparing generated answers to gold references</li>
                  <li><strong>Factuality:</strong> Manual annotation of hallucination rates and citation accuracy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Dataset & Benchmarking</h3>
                <p className="text-muted leading-7">
                  Tested on 50 research papers from arXiv (NLP domain) with 200+ curated questions. Compared against keyword search baseline and single-embedding retrieval.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Results & Impact" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-3 mb-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Retrieval Accuracy</p>
              <p className="text-3xl font-semibold text-text mb-2">+45%</p>
              <p className="text-sm text-muted">Hybrid search vs. semantic-only</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Hallucination Reduction</p>
              <p className="text-3xl font-semibold text-text mb-2">-68%</p>
              <p className="text-sm text-muted">With confidence-based filtering</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">User Satisfaction</p>
              <p className="text-3xl font-semibold text-text mb-2">8.2/10</p>
              <p className="text-sm text-muted">From researcher feedback (n=15)</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8">
            <h3 className="font-semibold text-text mb-4">Key Findings</h3>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li>• Hybrid retrieval outperforms semantic-only and keyword-only search across all metrics</li>
              <li>• Multi-query expansion improves cross-document reasoning by 31% for comparative questions</li>
              <li>• Confidence-based filtering reduces hallucinations while maintaining answer quality</li>
              <li>• Users prefer cited answers with source transparency over unsourced summaries</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle title="Future Work" subtitle="" />
          <div className="space-y-4">
            {[
              'Multi-agent orchestration for automated literature synthesis and research report generation',
              'Structured extraction of claims, methodologies, and results for meta-analysis workflows',
              'Interactive visualization of citation networks and research gaps across document collections',
              'Integration with reference management systems (Zotero, Mendeley) for seamless workflow',
              'Fine-tuned retrievers for domain-specific papers (biomedical, physics, computer science)',
              'Hallucination evaluation framework with automated factuality scoring'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-border bg-white p-6 flex gap-4">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <p className="text-muted leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="grid gap-5 sm:grid-cols-2 mb-6">
            <a
              href="https://github.com/Shridipa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-white p-6 hover:border-primary transition flex items-center gap-4"
            >
              <Github size={24} className="text-primary" />
              <div>
                <p className="font-semibold text-text">GitHub Repository</p>
                <p className="text-sm text-muted">View source code and documentation</p>
              </div>
            </a>
            <a
              href="/#projects"
              className="rounded-3xl border border-border bg-white p-6 hover:border-primary transition flex items-center gap-4"
            >
              <ExternalLink size={24} className="text-primary" />
              <div>
                <p className="font-semibold text-text">Back to Portfolio</p>
                <p className="text-sm text-muted">View other projects and case studies</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
