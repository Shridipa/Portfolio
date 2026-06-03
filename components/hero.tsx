'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-8 pb-20">
      <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-primary">
              Research Intern @ ISI Kolkata
            </span>
            <span className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-text border border-border">
              ML Lead @ KIIT Nexus
            </span>
            <span className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-text border border-border">
              Research Paper (PUF) Ongoing
            </span>
            <span className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-text border border-border">
              WorldQuant Brain Contributor
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              AI/ML Researcher Exploring Neural Network Optimization, Quantitative Alpha Research, and Intelligent Learning Systems
            </h1>

            <div className="space-y-4 border-l-4 border-primary pl-6">
              <p className="text-sm font-semibold text-primary">Research Intern @ Indian Statistical Institute (ISI), Kolkata</p>
              <ul className="space-y-2 text-sm text-text leading-7">
                <li><strong>WorldQuant Brain Rank 1104</strong> — 80+ validated alpha contributions</li>
                <li><strong>PUF Research Paper</strong> — Hardware security and authentication systems</li>
                <li><strong>Top 800 Scalar RL Hackathon</strong> — Reinforcement learning agent design</li>
                <li><strong>Neural Networks Research</strong> — Backpropagation derivation + 97.65% MLP accuracy</li>
              </ul>
            </div>

            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Research-first approach to AI engineering. Focused on neural network optimization, quantitative signal generation, and experimental rigor. Currently investigating hardware security (PUFs), deep learning generalization, and retrieval-augmented systems at ISI Kolkata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2"
          >
            {[
              { label: 'Research Internship', value: 'ISI Kolkata' },
              { label: 'Alpha Contributions', value: '80+' },
              { label: 'WorldQuant Rank', value: '1104' },
              { label: 'RL Hackathon', value: 'Top 800' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-border bg-surface p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{item.label}</p>
                <p className="mt-4 text-2xl font-semibold text-text">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#resume" className="btn-secondary">
              <Download size={16} />
              Resume
            </a>
            <a href="https://github.com/Shridipa" target="_blank" rel="noopener noreferrer" className="btn-link">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-link">
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[2rem] border border-border bg-surface p-6 shadow-card"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-8">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-accent/20 to-primary/10" />
            <div className="relative flex h-full flex-col items-center gap-6">
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-[#F3FCF7] p-4 shadow-[0_22px_65px_-35px_rgba(16,185,129,0.65)]">
                <div className="absolute inset-0 rounded-full border border-primary/10 opacity-80" />
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-primary/10 blur-3xl opacity-60" />
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/80 bg-white">
                  <Image
                    src="/profile-photo.png"
                    alt="Shridipa Dhar professional portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 288px"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 text-center">
                <p className="text-sm uppercase tracking-[0.22em] text-muted">Professional Portrait</p>
                <h2 className="text-3xl font-semibold text-text">Shridipa Dhar</h2>
                <p className="text-sm leading-6 text-muted">
                  B.Tech CSE (AI & ML) student at KIIT University | Research Intern @ ISI Kolkata | ML Lead @ KIIT Nexus
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Research Intern @ ISI Kolkata',
              'PI: Neural Networks + PUF Research',
              'ML Lead @ KIIT Nexus',
              'WorldQuant Brain Contributor'
            ].map((label) => (
              <div key={label} className="rounded-3xl border border-border bg-white/80 px-4 py-4 text-sm text-text shadow-sm">
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
