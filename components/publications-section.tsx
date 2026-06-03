'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const publications = [
  {
    title: 'Physical Unclonable Functions (PUF): Reliability and Security Analysis',
    status: 'Research and Manuscript Preparation',
    icon: '📄'
  }
];

export function PublicationsSection() {
  return (
    <section className="py-20">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-4xl font-semibold text-text sm:text-5xl">Research Publications</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted leading-8">Ongoing and published research work in AI, neural networks, and hardware security.</p>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-[2rem] border border-border bg-white p-8 shadow-soft"
          >
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl flex-shrink-0">
                {pub.icon}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-text">{pub.title}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">Status: {pub.status}</p>
                </div>
                
                <div className="space-y-2 border-t border-border/40 pt-4">
                  <p className="text-sm text-text/80">
                    Investigating hardware security systems through reliability and uniqueness metrics while contributing to ongoing research publication.
                  </p>
                  <ul className="space-y-2">
                    {['Analyzing hardware security and reliability metrics', 'Studying uniqueness and stability in PUF designs', 'Contributing to an ongoing research publication'].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text/80">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
