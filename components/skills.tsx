'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './common';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'SQL']
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-Learn', 'XGBoost', 'Feature Engineering', 'Model Evaluation']
  },
  {
    title: 'Deep Learning',
    skills: ['PyTorch', 'Neural Networks', 'CNNs', 'Transformers', 'Backpropagation']
  },
  {
    title: 'NLP & LLM Systems',
    skills: ['RAG', 'FAISS', 'LangChain', 'Embeddings', 'Semantic Retrieval']
  },
  {
    title: 'Quantitative Research',
    skills: ['WorldQuant Brain', 'Alpha Research', 'Factor Modeling', 'Statistical Analysis']
  },
  {
    title: 'Backend Systems',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Research Tools',
    skills: ['Jupyter', 'Git', 'Linux', 'Docker']
  }
];

export function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <GlassCard className="h-full border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-text">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
