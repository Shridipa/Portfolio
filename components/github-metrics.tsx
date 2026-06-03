import { GlassCard } from './common';
import { SectionTitle } from './common';
import { Github } from 'lucide-react';

async function fetchGitHubData() {
  const userResponse = await fetch('https://api.github.com/users/Shridipa', {
    next: { revalidate: 3600 }
  });

  const reposResponse = await fetch('https://api.github.com/users/Shridipa/repos?per_page=100', {
    next: { revalidate: 3600 }
  });

  if (!userResponse.ok || !reposResponse.ok) {
    return null;
  }

  const user = await userResponse.json();
  const repos = await reposResponse.json();
  const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count ?? 0), 0);
  const languages = Array.from(new Set(repos.map((repo: any) => repo.language).filter(Boolean))).slice(0, 5);

  return {
    followers: user.followers,
    publicRepos: user.public_repos,
    totalStars,
    languages
  };
}

export async function GitHubMetrics() {
  const data = await fetchGitHubData();

  if (!data) {
    return null;
  }

  return (
    <section id="github" className="py-20">
      <SectionTitle title="GitHub Metrics" subtitle="Research repositories, language stack, and public contribution signal." />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <GlassCard className="border-border bg-white p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Repositories</p>
          <p className="mt-4 text-3xl font-semibold text-text">{data.publicRepos}</p>
        </GlassCard>
        <GlassCard className="border-border bg-white p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Stars</p>
          <p className="mt-4 text-3xl font-semibold text-text">{data.totalStars}</p>
        </GlassCard>
        <GlassCard className="border-border bg-white p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Followers</p>
          <p className="mt-4 text-3xl font-semibold text-text">{data.followers}</p>
        </GlassCard>
        <GlassCard className="border-border bg-white p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Languages</p>
          <p className="mt-4 text-base font-semibold text-text leading-6">{data.languages.join(' • ') || 'Python'}</p>
        </GlassCard>
      </div>
      <div className="mt-6">
        <a
          href="https://github.com/Shridipa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-text transition-colors duration-200 hover:bg-hover"
        >
          <Github size={16} />
          Explore Research Repositories
        </a>
      </div>
    </section>
  );
}
