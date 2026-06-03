import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { Timeline } from '@/components/timeline';

export default function ExperiencePage() {
  const experienceItems = [
    {
      year: '2023 - Present',
      title: 'Machine Learning Lead',
      description: 'KIIT Nexus Society - Leading ML initiatives and building community',
      icon: '🚀',
      details: [
        'Conduct weekly ML workshops covering algorithms, neural networks, and applications',
        'Mentor 20+ students in AI/ML fundamentals and advanced topics',
        'Organize hackathons with 200+ participants from university',
        'Lead paper discussion groups and research seminars',
        'Develop curated learning resources and study materials'
      ]
    },
    {
      year: '2024 - Present',
      title: 'Research Intern',
      description: 'Indian Statistical Institute (ISI) - Neural network research',
      icon: '🔬',
      details: [
        'Conduct research on neural network architecture and optimization',
        'Design and run large-scale experimentation pipelines',
        'Perform hyperparameter tuning and model evaluation',
        'Collaborate on research paper preparation',
        'Implement state-of-the-art techniques and benchmarks'
      ]
    },
    {
      year: '2023',
      title: 'Google Solution Challenge',
      description: 'Global competition - Building tech solutions for global challenges',
      icon: '🌍',
      details: [
        'Developed AI-powered application addressing real-world problem',
        'Implemented end-to-end ML pipeline',
        'Collaborated with diverse team in fast-paced environment',
        'Presented technical solution to industry judges',
        'Received recognition for innovation and implementation'
      ]
    }
  ];

  return (
    <>
      <div className="pt-20">
        <SectionTitle title="Experience" subtitle="Roles where I've contributed to research and innovation" />

        {/* Timeline */}
        <div className="mb-16">
          <Timeline items={experienceItems} />
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="border-purple-500/20 bg-purple-500/5">
              <h3 className="font-bold text-purple-300 mb-3">🎓 Education & Mentoring</h3>
              <p className="text-sm text-slate-300">
                Conducting workshops, mentoring students, and developing learning materials to build strong foundations in AI/ML
              </p>
            </GlassCard>

            <GlassCard className="border-blue-500/20 bg-blue-500/5">
              <h3 className="font-bold text-blue-300 mb-3">🔬 Research & Experimentation</h3>
              <p className="text-sm text-slate-300">
                Designing rigorous experiments, benchmarking models, and advancing understanding of neural network systems
              </p>
            </GlassCard>

            <GlassCard className="border-green-500/20 bg-green-500/5">
              <h3 className="font-bold text-green-300 mb-3">💻 Engineering & Implementation</h3>
              <p className="text-sm text-slate-300">
                Building production-grade systems with FastAPI, vector search, and scalable ML infrastructure
              </p>
            </GlassCard>

            <GlassCard className="border-indigo-500/20 bg-indigo-500/5">
              <h3 className="font-bold text-indigo-300 mb-3">🤝 Community Building</h3>
              <p className="text-sm text-slate-300">
                Organizing events, fostering collaboration, and building engaged community around AI/ML
              </p>
            </GlassCard>

            <GlassCard className="border-pink-500/20 bg-pink-500/5">
              <h3 className="font-bold text-pink-300 mb-3">📊 Data & Analysis</h3>
              <p className="text-sm text-slate-300">
                Analyzing performance metrics, generating insights, and making data-driven decisions
              </p>
            </GlassCard>

            <GlassCard className="border-cyan-500/20 bg-cyan-500/5">
              <h3 className="font-bold text-cyan-300 mb-3">🎯 Impact & Leadership</h3>
              <p className="text-sm text-slate-300">
                Driving initiatives that create measurable impact and inspire others to pursue AI research
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Skills Developed */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Skills Developed</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard>
              <h3 className="font-bold text-white mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Machine Learning & Deep Learning</li>
                <li>✓ Experimental Design & Benchmarking</li>
                <li>✓ Python, PyTorch, TensorFlow</li>
                <li>✓ FastAPI & Backend Development</li>
                <li>✓ Vector Search & RAG Systems</li>
                <li>✓ MLOps & Model Deployment</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-4">Leadership Skills</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✓ Team Mentoring & Teaching</li>
                <li>✓ Workshop Organization</li>
                <li>✓ Community Building</li>
                <li>✓ Project Management</li>
                <li>✓ Technical Communication</li>
                <li>✓ Strategic Planning</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Notable Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard className="border-green-500/20 bg-green-500/5">
              <p className="text-sm text-green-300 font-semibold mb-2">📈 Impactful Leadership</p>
              <p className="text-sm text-slate-300">
                Mentored 20+ students and grown KIIT Nexus Society ML initiatives to reach 200+ participants in events
              </p>
            </GlassCard>

            <GlassCard className="border-blue-500/20 bg-blue-500/5">
              <p className="text-sm text-blue-300 font-semibold mb-2">🏆 Competitive Excellence</p>
              <p className="text-sm text-slate-300">
                Achieved top 800 ranking in competitive ML hackathon and top 15,000 in Google Coding Competition
              </p>
            </GlassCard>

            <GlassCard className="border-purple-500/20 bg-purple-500/5">
              <p className="text-sm text-purple-300 font-semibold mb-2">🔬 Research Contributions</p>
              <p className="text-sm text-slate-300">
                Conducting cutting-edge research at ISI on neural networks and preparing publications
              </p>
            </GlassCard>

            <GlassCard className="border-yellow-500/20 bg-yellow-500/5">
              <p className="text-sm text-yellow-300 font-semibold mb-2">🌟 Recognition</p>
              <p className="text-sm text-slate-300">
                Selected for Google Solution Challenge and recognized for technical depth and innovation
              </p>
            </GlassCard>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
