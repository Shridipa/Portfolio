'use client';

import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { ProjectCard } from '@/components/project-card';
import { projectsData } from '@/lib/projects-data';

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-20">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            title="Projects"
            subtitle="Research-grade systems combining intelligent algorithms with production engineering"
          />
          <a href="/more-projects" className="btn-primary inline-flex items-center gap-2">
            View More Projects
          </a>
        </div>

        {/* Project Grid */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.shortDescription}
              tags={project.tags}
              image={project.image}
              metrics={project.metrics}
              github={project.github}
              href={`/case-studies/${project.id}`}
              demo={`/case-studies/${project.id}`}
            />
          ))}
        </div>

        {/* Detailed Project Descriptions */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <section key={project.id} id={project.id} className="scroll-mt-20">
              <div className="mb-8 grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-slate-400 mb-6">{project.description}</p>

                  {/* Problem */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3">Problem</h3>
                    <p className="text-slate-300">
                      {project.id === 'research-mind' &&
                        'Researchers struggle to extract insights from large collections of papers. Manual review is time-consuming, and existing search tools often miss relevant connections or produce hallucinated insights.'}
                      {project.id === 'medic-ai' &&
                        'Healthcare professionals need AI systems they can trust. Black-box predictions are unsuitable for medical domains where explainability is critical for clinical adoption and liability.'}
                      {project.id === 'elo-learn' &&
                        'Educational institutions lack personalized learning systems. One-size-fits-all curricula fail to adapt to individual student needs, leading to disengagement and suboptimal learning outcomes.'}
                    </p>
                  </div>

                  {/* Methodology */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3">Methodology</h3>
                    <p className="text-slate-300 mb-4">{project.methodology}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Results</h3>
                    <p className="text-slate-300">{project.results}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Architecture</h4>
                    <p className="text-sm text-slate-300">{project.architecture}</p>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Key Metrics</h4>
                    <ul className="space-y-2">
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">✓</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard>
                    <h4 className="text-sm font-bold text-purple-400 mb-3 uppercase">Future Work</h4>
                    <p className="text-xs text-slate-300">{project.futureWork}</p>
                  </GlassCard>
                </div>
              </div>

              {idx < projectsData.length - 1 && <hr className="border-white/10" />}
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
