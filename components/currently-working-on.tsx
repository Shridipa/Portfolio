'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const workingOn = [
  'PUF Research Paper',
  'Neural Network Optimization',
  'WorldQuant Alpha Research',
  'Research Mind Development'
];

export function CurrentlyWorkingOn() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-border bg-gradient-to-br from-accent/5 to-primary/5 p-8 shadow-card"
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted">Active Work</p>
            <h2 className="text-2xl font-semibold text-text">Currently Working On</h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {workingOn.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-border/40 bg-white p-5"
            >
              <div className="flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <p className="text-sm font-medium text-text">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
