'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const blogTopics = [
  'Backpropagation From Scratch',
  'Building Neural Networks',
  'Alpha Research with WorldQuant',
  'PUF Security Systems'
];

export function TechnicalBlog() {
  return (
    <section className="py-20">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-4xl font-semibold text-text sm:text-5xl">Technical Writing</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted leading-8">In-depth posts on ML research, neural networks, and quantitative modeling.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-border bg-surface p-8 shadow-card"
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-primary">
            <BookOpen size={20} />
          </div>
          <p className="text-sm uppercase tracking-[0.24em] text-muted">Coming Soon</p>
        </div>

        <p className="mb-6 text-muted">Research-focused articles and technical deep dives.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {blogTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-border/40 bg-white p-5 text-center"
            >
              <p className="text-sm font-medium text-text opacity-70">• {topic}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted italic">Blog articles will be published here as they are released.</p>
      </motion.div>
    </section>
  );
}
