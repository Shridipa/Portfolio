'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export function WorldQuantSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 shadow-card"
      >
        <div className="flex items-start gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <TrendingUp size={24} />
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Quantitative Research</p>
              <h2 className="mt-2 text-3xl font-semibold text-text">WorldQuant Brain</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">World Rank</p>
                <p className="mt-3 text-4xl font-semibold text-primary">1104</p>
              </div>
              
              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">Alpha Contributions</p>
                <p className="mt-3 text-4xl font-semibold text-primary">80+</p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">Research Areas</p>
              <div className="flex flex-wrap gap-3">
                {['Statistical Arbitrage', 'Alpha Signal Generation', 'Quantitative Modeling'].map((area) => (
                  <span key={area} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
