'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from './common';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  metrics?: string[];
  github?: string;
  demo?: string;
  href?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  metrics,
  github,
  demo,
  href,
  index
}: ProjectCardProps) {
  const CardContent = (
    <>
      <div className="relative h-44 w-full overflow-hidden rounded-[1.75rem] bg-accent/10 mb-6 flex items-center justify-center">
        <div className="text-5xl">{image}</div>
      </div>

      <h3 className="text-xl font-semibold text-text mb-3">{title}</h3>
      <p className="text-sm leading-7 text-muted mb-5">{description}</p>

      {metrics && metrics.length > 0 && (
        <div className="mb-5 space-y-2 border-t border-border pt-4">
          {metrics.map((metric) => (
            <p key={metric} className="text-sm text-text/80">
              • {metric}
            </p>
          ))}
        </div>
      )}

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
        <div className="flex flex-wrap gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text transition hover:border-primary hover:bg-hover"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text transition hover:border-primary hover:bg-hover"
            >
              <ExternalLink size={16} /> Case Study
            </a>
          )}
        </div>
        {href && (
          <a href={href} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primaryDark">
            View Project
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <GlassCard className="group h-full border-border bg-white transition duration-300 hover:border-primary hover:shadow-soft">
        {CardContent}
      </GlassCard>
    </motion.div>
  );
}
