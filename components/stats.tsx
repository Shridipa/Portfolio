'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './common';

const stats = [
  { label: 'Research Internship', value: 'ISI Kolkata', accent: 'primary' },
  { label: 'PUF Research', value: 'Ongoing', accent: 'accent' },
  { label: 'WorldQuant Brain', value: 'Rank 1104', accent: 'primaryDark' },
  { label: 'Alpha Signals', value: '80+', accent: 'accent' },
  { label: 'Scalar RL Hackathon', value: 'Top 800', accent: 'primary' },
  { label: 'CGPA', value: '8.49', accent: 'accent' }
];

export function StatsSection() {
  return (
    <section className="py-16" id="trust">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <GlassCard className="border-border bg-white px-6 py-8">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-text">{stat.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
