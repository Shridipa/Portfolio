import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { Timeline } from '@/components/timeline';

export default function ResearchPage() {
  const researchItems = [
    {
      year: '2024 - Present',
      title: 'Research Intern at Indian Statistical Institute',
      description: 'Conducting cutting-edge research on neural network optimization, model evaluation, and experimental methodologies.',
      icon: '🔬',
      details: [
        'Neural network architecture research and optimization',
        'Model hyperparameter tuning and experimentation',
        'Benchmarking and performance evaluation pipelines',
        'Research paper writing and publication preparation',
        'Implementing state-of-the-art optimization techniques'
      ]
    },
    {
      year: '2023 - Present',
      title: 'ML Lead at KIIT Nexus Society',
      description: 'Leading machine learning initiatives and building community around AI research and development.',
      icon: '👥',
      details: [
        'Conducting ML workshops and training sessions',
        'Mentoring students in AI/ML fundamentals and advanced topics',
        'Organizing hackathons and AI research events',
        'Building curated learning resources for the community',
        'Leading research discussions and paper reviews'
      ]
    },
    {
      year: '2023',
      title: 'Google Solution Challenge Participant',
      description: 'Selected to participate in Google\'s global initiative for building tech solutions to real-world challenges.',
      icon: '🌍',
      details: [
        'Developed AI-powered solution for social impact',
        'Collaborated with diverse team of engineers and designers',
        'Presented technical implementation to judges',
        'Gained experience in product thinking and user-centric design'
      ]
    }
  ];

  return (
    <>
      <div className="pt-20">
        <SectionTitle
          title="Research Experience"
          subtitle="Rigorous investigation, experimentation, and innovation in AI systems"
        />

        {/* Timeline */}
        <div className="mb-16">
          <Timeline items={researchItems} />
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Research Focus Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard>
              <h3 className="font-bold text-white mb-2">Neural Network Optimization</h3>
              <p className="text-sm text-slate-400">Techniques for model training, architecture search, and efficiency improvements</p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-2">Retrieval-Augmented Generation</h3>
              <p className="text-sm text-slate-400">RAG systems, hybrid search, and evidence-grounded language generation</p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-2">Knowledge Tracing</h3>
              <p className="text-sm text-slate-400">Modeling student understanding and adaptive learning systems</p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-2">Large Language Models</h3>
              <p className="text-sm text-slate-400">LLM applications, fine-tuning, and prompt optimization</p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-2">Recommendation Systems</h3>
              <p className="text-sm text-slate-400">Personalization, collaborative filtering, and ranking algorithms</p>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold text-white mb-2">Explainable AI</h3>
              <p className="text-sm text-slate-400">Interpretability, transparency, and trustworthy ML systems</p>
            </GlassCard>
          </div>
        </div>

        {/* Methodologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Research Methodologies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="border-blue-500/20 bg-blue-500/5">
              <h3 className="font-bold text-blue-300 mb-3">Experimental Design</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Rigorous hypothesis formulation</li>
                <li>• Controlled ablation studies</li>
                <li>• Statistical significance testing</li>
                <li>• Reproducibility and documentation</li>
              </ul>
            </GlassCard>

            <GlassCard className="border-purple-500/20 bg-purple-500/5">
              <h3 className="font-bold text-purple-300 mb-3">Benchmarking</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Standard dataset evaluation</li>
                <li>• Performance metrics definition</li>
                <li>• Baseline comparison</li>
                <li>• Result validation</li>
              </ul>
            </GlassCard>

            <GlassCard className="border-green-500/20 bg-green-500/5">
              <h3 className="font-bold text-green-300 mb-3">Hyperparameter Tuning</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Grid and random search</li>
                <li>• Bayesian optimization</li>
                <li>• Cross-validation strategies</li>
                <li>• Performance monitoring</li>
              </ul>
            </GlassCard>

            <GlassCard className="border-indigo-500/20 bg-indigo-500/5">
              <h3 className="font-bold text-indigo-300 mb-3">Research Communication</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Paper writing and publishing</li>
                <li>• Technical presentations</li>
                <li>• Open-source contributions</li>
                <li>• Community engagement</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Publications & Contributions</h2>
          <GlassCard>
            <p className="text-slate-400 text-center py-8">Research papers coming soon. Working on publications in progress...</p>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </>
  );
}
