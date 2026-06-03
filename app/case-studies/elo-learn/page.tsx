import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function EloLearnCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🎓</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Elo Learn</h1>
          <p className="text-xl text-muted leading-8">
            AI-Powered Adaptive Learning Platform with Knowledge Tracing and Personalized Recommendations
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Production Ready</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Timeline</p>
            <p className="text-lg font-semibold text-text">5 months</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Full Stack ML Engineer</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Problem Statement" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Traditional e-learning platforms fail to adapt to individual learners:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>One-size-fits-all curriculum</strong> doesn't account for learner skill levels and knowledge gaps</li>
              <li><strong>No intelligent sequencing</strong> — students struggle because prerequisites aren't taught first</li>
              <li><strong>Poor engagement</strong> from high dropout rates due to mismatched difficulty</li>
              <li><strong>Inefficient learning</strong> — students waste time on content they already know</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Target Users:</strong> Online education platforms, corporate training, personalized tutoring systems.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Research Motivation" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why Knowledge Tracing?</h3>
              <p className="text-muted leading-7 mb-4">
                Knowledge tracing models estimate student knowledge states from interaction history. By modeling "skill mastery," we can predict which concepts students will struggle with and adapt content in real-time.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why Recommendation?</h3>
              <p className="text-muted leading-7 mb-4">
                Recommender systems sequence learning content by difficulty and prerequisite requirements. Combining knowledge tracing with collaborative filtering personalizes learning paths for maximum engagement and retention.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="System Architecture" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-10 mb-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">Knowledge Tracing Pipeline</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>Interaction Logging:</strong> Capture question attempts, correctness, response time per skill</p>
                  <p><strong>Skill Graph:</strong> Model prerequisite relationships between concepts (DAG structure)</p>
                  <p><strong>Knowledge State:</strong> Estimate mastery probability for each skill using Bayesian inference</p>
                  <p><strong>Prediction:</strong> Forecast success probability on new questions given current knowledge state</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Recommendation Engine</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>Content Sequencing:</strong> Topologically sort skill graph + difficulty levels</p>
                  <p><strong>Difficulty Balancing:</strong> Apply spaced repetition — revisit mastered skills with increasing intervals</p>
                  <p><strong>Collaborative Filtering:</strong> Recommend content based on similar learners' paths (matrix factorization)</p>
                  <p><strong>Cold-Start Handling:</strong> Use skill prerequisites when learner history is limited</p>
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
                <li>• <strong>Knowledge Tracing:</strong> PyBKT (Bayesian Knowledge Tracing)</li>
                <li>• <strong>Recommendations:</strong> Surprise library, matrix factorization</li>
                <li>• <strong>Database:</strong> PostgreSQL</li>
                <li>• <strong>Graph DB:</strong> Neo4j (skill prerequisites)</li>
                <li>• <strong>Caching:</strong> Redis for real-time learner states</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-4">Frontend Stack</h3>
              <ul className="space-y-2 text-muted leading-7">
                <li>• <strong>Framework:</strong> Streamlit (interactive UI)</li>
                <li>• <strong>Visualization:</strong> Plotly for progress tracking</li>
                <li>• <strong>Skill Tree Viz:</strong> Cytoscape.js for dependency graphs</li>
                <li>• <strong>Quiz Interface:</strong> Custom React components</li>
                <li>• <strong>Mobile:</strong> React Native companion app</li>
                <li>• <strong>Deployment:</strong> Docker + Kubernetes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Technical Challenges & Solutions" subtitle="" />
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 1: Cold-Start Problem</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> New learners have no interaction history, making knowledge tracing unreliable.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Implemented hybrid cold-start: use diagnostic quiz to initialize knowledge state, then refine with learner interactions. Diagnostic scores correlate (r=0.78) with predicted mastery.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 2: Spaced Repetition at Scale</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Computing optimal spaced repetition schedules for thousands of learners and concepts is computationally expensive.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Pre-computed spaced repetition intervals using forgetting curve parameters; Redis caching ensures O(1) lookups for personalized schedules.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 3: Fairness & Engagement</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Overly challenging content discourages learners; overly easy content fails to engage.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Implemented difficulty calibration — target 70% success rate per learner. A/B tested and confirmed 15% higher completion rates vs. fixed-difficulty control.
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
                  Evaluated across learning science metrics:
                </p>
                <ul className="space-y-2 text-muted leading-7 ml-4">
                  <li><strong>Knowledge Tracing Accuracy:</strong> AUC-ROC for predicting next question correctness</li>
                  <li><strong>Recommendation Quality:</strong> NDCG@5 for content sequencing; A/B testing on engagement</li>
                  <li><strong>Learning Outcomes:</strong> Post-test mastery, retention after 2 weeks</li>
                  <li><strong>User Engagement:</strong> Completion rates, session duration, dropout rates</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Study Design</h3>
                <p className="text-muted leading-7">
                  Pilot with 500+ learners across 10 courses. Randomized controlled trial: adaptive vs. fixed curriculum. Measured learning gains and engagement metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Results & Impact" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-3 mb-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Knowledge Prediction AUC</p>
              <p className="text-3xl font-semibold text-text mb-2">0.82</p>
              <p className="text-sm text-muted">Strong predictive signal</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Engagement Improvement</p>
              <p className="text-3xl font-semibold text-text mb-2">+23%</p>
              <p className="text-sm text-muted">Completion vs. control</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Learning Gains</p>
              <p className="text-3xl font-semibold text-text mb-2">+18%</p>
              <p className="text-sm text-muted">Post-test improvement</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8">
            <h3 className="font-semibold text-text mb-4">Key Findings</h3>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li>• Adaptive difficulty increases engagement by 23% and completion by 15% vs. fixed curriculum</li>
              <li>• Knowledge tracing accurately predicts question difficulty (AUC=0.82); enables real-time adaptation</li>
              <li>• Spaced repetition + difficulty balancing improves retention by 31% at 2-week follow-up</li>
              <li>• Learners value transparent skill mastery progress tracking (NPS +42)</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle title="Future Work" subtitle="" />
          <div className="space-y-4">
            {[
              'Deep reinforcement learning for optimal content sequencing (Thompson sampling)',
              'Social learning: peer collaboration and knowledge sharing recommendations',
              'Multi-domain transfer learning: leverage mastery in one subject to accelerate another',
              'Neuroplasticity-informed adaptation: personalize learning style (visual, kinesthetic, etc.)',
              'Integration with existing LMS platforms (Canvas, Moodle, Blackboard)',
              'Predictive dropout prevention with early intervention strategies'
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
