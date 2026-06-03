import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { SkillsSection } from '@/components/skills';

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <SectionTitle title="About Me" subtitle="Research-focused AI engineer building for learning and intelligence" />

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          <GlassCard className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm Shridipa Dhar, a B.Tech Computer Science student specializing in AI & ML from KIIT University. I'm passionate about building research-grade machine learning systems that solve real-world problems through intelligent design and rigorous experimentation.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Currently, I lead machine learning initiatives at KIIT Nexus Society, where I conduct workshops, mentor students, and organize AI events. I'm also a Research Intern at the Indian Statistical Institute, working on neural network optimization and model experimentation.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My vision is to become an AI Research Engineer who designs and deploys learned systems at scale, contributing to breakthroughs in adaptive learning, retrieval-augmented intelligence, and decision-making systems.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm text-slate-300 mb-6">
              <li>
                <span className="font-semibold text-white">CGPA:</span> 8.49/10
              </li>
              <li>
                <span className="font-semibold text-white">University:</span> KIIT University
              </li>
              <li>
                <span className="font-semibold text-white">Degree:</span> B.Tech CSE (AI & ML)
              </li>
              <li>
                <span className="font-semibold text-white">Location:</span> India
              </li>
              <li>
                <span className="font-semibold text-white">Current Role:</span> ML Lead, KIIT Nexus
              </li>
              <li>
                <span className="font-semibold text-white">Research:</span> ISI, Delhi
              </li>
              <li>
                <span className="font-semibold text-white">Black Belt:</span> Karate 🥋
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="/Shridipa_Dhar_Resume.pdf" download target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors">
                Download Resume
              </a>
              <a href="/Shridipa_Dhar_Resume.pdf" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                View Resume
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Interests */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Research Interests</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Machine Learning', desc: 'Core algorithms and systems' },
              { title: 'Artificial Intelligence', desc: 'Intelligent decision systems' },
              { title: 'NLP & LLMs', desc: 'Language models and understanding' },
              { title: 'Reinforcement Learning', desc: 'Learning from interaction' },
              { title: 'Recommendation Systems', desc: 'Personalized intelligence' },
              { title: 'Knowledge Tracing', desc: 'Adaptive learning systems' },
              { title: 'Quantitative Finance', desc: 'ML in finance applications' },
              { title: 'Research Systems', desc: 'Building for reproducibility' },
              { title: 'Adaptive Learning', desc: 'Personalized education tech' }
            ].map((interest, i) => (
              <GlassCard key={i} className="hover:border-purple-500/50">
                <h4 className="font-bold text-white mb-1">{interest.title}</h4>
                <p className="text-sm text-slate-400">{interest.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
          <SkillsSection />
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Achievements & Recognition</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard className="border-green-500/20 bg-green-500/5">
              <h4 className="font-bold text-green-300 mb-2">🏆 Top 800 Scalar Reinforcement Learning Hackathon</h4>
              <p className="text-sm text-slate-300">Achieved top 800 ranking in competitive ML hackathon focused on reinforcement learning</p>
            </GlassCard>

            <GlassCard className="border-blue-500/20 bg-blue-500/5">
              <h4 className="font-bold text-blue-300 mb-2">🌍 Google Solution Challenge Participant</h4>
              <p className="text-sm text-slate-300">Selected participant in Google's initiative for building tech solutions to global challenges</p>
            </GlassCard>

            <GlassCard className="border-purple-500/20 bg-purple-500/5">
              <h4 className="font-bold text-purple-300 mb-2">🔬 Research Intern at Indian Statistical Institute</h4>
              <p className="text-sm text-slate-300">Conducted research on neural networks, model optimization, and experimental methodologies</p>
            </GlassCard>

            <GlassCard className="border-yellow-500/20 bg-yellow-500/5">
              <h4 className="font-bold text-yellow-300 mb-2">⭐ Top 15,000 Google Coding Competition</h4>
              <p className="text-sm text-slate-300">Ranked in top 15,000 globally in competitive programming challenges</p>
            </GlassCard>

            <GlassCard className="border-indigo-500/20 bg-indigo-500/5">
              <h4 className="font-bold text-indigo-300 mb-2">👥 ML Lead at KIIT Nexus Society</h4>
              <p className="text-sm text-slate-300">Leading ML initiatives, conducting workshops, and mentoring students in AI/ML</p>
            </GlassCard>

            <GlassCard className="border-red-500/20 bg-red-500/5">
              <h4 className="font-bold text-red-300 mb-2">🥋 Black Belt in Karate</h4>
              <p className="text-sm text-slate-300">Discipline, dedication, and mastery in martial arts</p>
            </GlassCard>
          </div>
        </div>

        {/* Career Goals */}
        <GlassCard className="mb-12 border-purple-500/50 bg-purple-500/10">
          <h3 className="text-xl font-bold text-white mb-4">Career Goals</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">1.</span>
              <span>Secure a Google Student Researcher position to contribute to cutting-edge AI research</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">2.</span>
              <span>Build production-grade ML systems for adaptive learning and intelligent recommendation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">3.</span>
              <span>Contribute to research in reinforcement learning, LLMs, and knowledge tracing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">4.</span>
              <span>Lead AI/ML initiatives that create measurable impact at scale</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-0.5">5.</span>
              <span>Become an AI Research Engineer designing novel ML systems and architectures</span>
            </li>
          </ul>
        </GlassCard>
      </div>

      <Footer />
    </>
  );
}
