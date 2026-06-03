'use client';

import { motion } from 'framer-motion';
import { SectionTitle, GlassCard, Footer } from '@/components/common';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Transformers: Architecture, Attention, and Impact',
    excerpt:
      'Deep dive into transformer architecture, multi-head attention mechanisms, and their revolutionary impact on NLP and beyond.',
    category: 'AI/ML',
    readTime: '12 min read',
    date: 'Coming soon',
    tags: ['Transformers', 'NLP', 'Deep Learning']
  },
  {
    id: 2,
    title: 'Building Production-Ready RAG Systems',
    excerpt:
      'Complete guide to building retrieval-augmented generation systems with hybrid search, embedding optimization, and evaluation.',
    category: 'Systems',
    readTime: '15 min read',
    date: 'Coming soon',
    tags: ['RAG', 'LLMs', 'Vector Search']
  },
  {
    id: 3,
    title: 'Knowledge Tracing Explained: Modeling Student Learning',
    excerpt:
      'Understanding knowledge tracing models, Bayesian networks, and how they enable adaptive learning systems.',
    category: 'Research',
    readTime: '10 min read',
    date: 'Coming soon',
    tags: ['Knowledge Tracing', 'Education', 'ML']
  },
  {
    id: 4,
    title: 'Reinforcement Learning Basics: From Theory to Practice',
    excerpt:
      'Comprehensive introduction to RL fundamentals, Q-learning, policy gradients, and real-world applications.',
    category: 'Learning',
    readTime: '14 min read',
    date: 'Coming soon',
    tags: ['RL', 'Decision Making', 'Optimization']
  },
  {
    id: 5,
    title: 'How Recommendation Systems Work: Collaborative Filtering to Deep Learning',
    excerpt:
      'From collaborative filtering to neural networks: evolution of recommendation systems and practical implementation strategies.',
    category: 'Systems',
    readTime: '13 min read',
    date: 'Coming soon',
    tags: ['Recommendations', 'Personalization', 'Algorithms']
  },
  {
    id: 6,
    title: 'Explainable AI: Making Black-Box Models Transparent',
    excerpt:
      'Techniques for interpreting deep learning models, attention visualization, LIME, SHAP, and building trustworthy AI systems.',
    category: 'AI Ethics',
    readTime: '11 min read',
    date: 'Coming soon',
    tags: ['Explainability', 'Interpretability', 'Trust']
  }
];

export default function BlogPage() {
  return (
    <>
      <div className="pt-20">
        <SectionTitle
          title="Blog"
          subtitle="Thoughts on AI, Machine Learning, Research, and Building Intelligent Systems"
        />

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group h-full flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/5">
                {/* Category Badge */}
                <div className="mb-4 inline-block">
                  <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/30">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-300 mb-4 flex-grow">{post.excerpt}</p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded text-xs bg-white/5 px-2 py-1 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta & CTA */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="text-xs text-slate-400">
                    <p>{post.readTime}</p>
                    <p className="text-purple-400 font-medium">{post.date}</p>
                  </div>
                  <Link
                    href={"#" as any}
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <GlassCard className="text-center py-16 border-purple-500/20 bg-purple-500/5">
          <h2 className="text-2xl font-bold text-white mb-3">📝 Blog Coming Soon</h2>
          <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
            I'm working on in-depth technical articles covering my experiences in AI research, machine learning systems, and building intelligent applications. Posts will explore practical implementations, theoretical concepts, and lessons learned from building production systems.
          </p>
          <p className="text-slate-400 text-sm">
            Subscribe for updates when new articles are published. In the meantime, check out my{' '}
            <Link href={"https://github.com/Shridipa" as any} className="text-purple-400 hover:text-purple-300">
              GitHub projects
            </Link>{' '}
            for code and implementations!
          </p>
        </GlassCard>
      </div>

      <Footer />
    </>
  );
}
