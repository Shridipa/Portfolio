import { SectionTitle, Footer } from '@/components/common';
import { ProjectCard } from '@/components/project-card';
import { projectsData } from '@/lib/projects-data';

export default function MoreProjectsPage() {
  return (
    <div className="pt-20 pb-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionTitle
              title="More Projects"
              subtitle="Explore the broader research case studies, engineering systems, and AI initiatives beyond the featured portfolio." 
            />
          </div>
          <a
            href="/projects"
            className="btn-link inline-flex items-center gap-2"
          >
            Back to Projects
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
              href={project.demo}
              demo={project.demo}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-text mb-3">Why this page exists</h2>
          <p className="text-muted leading-7">
            This dedicated page provides a broader view of research and engineering case studies, with links to each repository and deeper case study experience. It is designed for visitors who want to explore the full project portfolio beyond the featured highlights.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
