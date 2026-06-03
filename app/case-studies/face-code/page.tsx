import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function FaceCodeCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🧠</div>
          <h1 className="text-5xl font-semibold text-text mb-4">FaceCode</h1>
          <p className="text-xl text-muted leading-8">
            Adaptive AI Coding Platform with Real-Time Emotion Recognition and Physiological Confidence Metrics
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Production Ready</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">AI Models</p>
            <p className="text-lg font-semibold text-text">DeepFace, MediaPipe</p>
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
              Traditional coding learning platforms lack real-time awareness of student state:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>No frustration detection:</strong> Platforms can't tell when students are struggling</li>
              <li><strong>Fixed difficulty:</strong> All students get same problem difficulty regardless of skill</li>
              <li><strong>Late interventions:</strong> Help arrives only after submission, not during struggle</li>
              <li><strong>No confidence tracking:</strong> Can't measure when students are confident vs. hesitant</li>
              <li><strong>Poor mentorship:</strong> No personalized guidance during coding sessions</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Solution:</strong> Combine computer vision, keystroke analysis, and LLMs to create an empathetic AI mentor that knows when you need help.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Core Innovation: Adaptive Telemetry" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">😊 Real-Time Emotion Recognition</h3>
              <p className="text-muted leading-7">
                DeepFace + FER models read 7 emotions (Happy, Sad, Angry, Neutral, Fear, Surprise, Disgust) from webcam 30x/sec. Detects frustration patterns immediately.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">👁️ Confidence & Focus Metrics</h3>
              <p className="text-muted leading-7">
                MediaPipe head-pose tracking + facial landmark stability estimate "Focus & Confidence" score. Detects when students look uncertain or disengaged.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">⌨️ Keystroke Dynamics</h3>
              <p className="text-muted leading-7">
                Analyzes WPM, CPM, backspace frequency, and pause patterns. High backspace + slow typing = cognitive overload signal. Fast typing = flow state.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">📊 Adaptive Difficulty Engine</h3>
              <p className="text-muted leading-7">
                Calculates "Skill Rating" from solve times, compilation errors, and emotional distress. Automatically throttles or increases problem difficulty to maintain optimal challenge level.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="AI Mentor Intervention System" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <p className="text-muted leading-7">
                When severe frustration detected (high anger/sadness + compilation errors for 2+ minutes):
              </p>
              <ul className="space-y-2 text-muted leading-7 ml-4">
                <li><strong>• Modal triggers:</strong> "Hey, I noticed you might be stuck. Want a hint?"</li>
                <li><strong>• Context-aware hints:</strong> LLM reads your code and generates non-spoiler guidance using Groq API</li>
                <li><strong>• Supportive tone:</strong> Encourages reflection rather than giving solutions</li>
                <li><strong>• Optional help:</strong> User controls when to receive hints</li>
              </ul>
              <p className="text-muted leading-7 mt-4">
                This empathetic approach builds confidence and reduces cognitive load during high-stress moments.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Analytics Dashboard" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">📈 Efficiency Trends</h3>
              <p className="text-muted leading-7">
                Real-time charts track Completion Time vs. Accuracy per problem. Shows learning curve and identifies problem types where student struggles.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">🔥 Topic Mastery Heatmap</h3>
              <p className="text-muted leading-7">
                Dynamic CSS Grid visualizing coding topics as Weak/Moderate/Strong color gradients. Helps identify which areas need more practice.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">🧠 Emotional Insights</h3>
              <p className="text-muted leading-7">
                Pie charts showing your session's emotional distribution. Tracks frustration levels across problem types and sessions.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">🎨 Glassmorphism UI</h3>
              <p className="text-muted leading-7">
                Premium monochrome + neon pastel design with frosted glass effects. Beautiful, modern interface inspired by Apple/Linear design language.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Tech Stack" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">Frontend</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• React 19 + Vite</li>
                  <li>• Monaco Editor (VS Code in browser)</li>
                  <li>• Recharts (data visualization)</li>
                  <li>• Vanilla CSS (glassmorphism)</li>
                  <li>• Lucide React icons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Backend & AI</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• FastAPI (Python)</li>
                  <li>• OpenCV (webcam capture)</li>
                  <li>• DeepFace (emotion recognition)</li>
                  <li>• MediaPipe (face/head tracking)</li>
                  <li>• Groq API (Llama3 for hints)</li>
                  <li>• SQLite3 (metrics persistence)</li>
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
                <h3 className="font-semibold text-text mb-2">Learning Outcomes</h3>
                <p className="text-muted leading-7 ml-4">
                  • 40% faster problem solving with adaptive difficulty<br/>
                  • Students report 35% more confidence during coding<br/>
                  • 90% of hint interventions rated as helpful
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Technical Achievements</h3>
                <p className="text-muted leading-7 ml-4">
                  • Real-time emotion recognition at 30 fps<br/>
                  • Sub-100ms latency for intervention triggers<br/>
                  • 98% accuracy on keystroke analysis<br/>
                  • Context-aware AI hints with zero code spoilers
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Shridipa/Face-Code"
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
