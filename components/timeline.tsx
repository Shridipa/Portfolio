'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './common';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details?: string[];
  icon: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 h-full w-px bg-primary/20" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="relative pl-24"
          >
            <div className="absolute -left-4 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-sm text-white shadow-soft">
              {item.icon}
            </div>

            <GlassCard className="border-border bg-white p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-muted">{item.year}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>

              {item.details && item.details.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text/80">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
