'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ children, className = '', delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <h2 className="text-4xl font-semibold text-text sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted leading-8">{subtitle}</p>}
    </div>
  );
}

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass border-border bg-surface ${className}`}>{children}</div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center text-sm text-muted">
      <p>Built with Next.js, TypeScript, and TailwindCSS.</p>
      <p className="mt-2">© 2026 Shridipa Dhar</p>
    </footer>
  );
}
