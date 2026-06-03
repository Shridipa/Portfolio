'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const highlights = [
  'Implemented MLP from scratch',
  'Achieved 97.65% accuracy',
  'Derived Backpropagation mathematically from Haykin',
  '80+ Alpha Contributions on WorldQuant Brain',
  'Ongoing Research on PUF Security Systems',
  'Research Intern at ISI Kolkata'
];

export function ResearchHighlights() {
  return (
    <section className="py-20">
      <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-card">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">Research Highlights</p>
          <h2 className="mt-4 text-3xl font-semibold text-text">Key Accomplishments</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-5"
            >
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-primary flex-shrink-0">
                <Check size={16} strokeWidth={3} />
              </div>
              <p className="text-sm font-medium leading-6 text-text">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
