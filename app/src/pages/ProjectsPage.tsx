import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { ProjectCard } from '@/components/ProjectCard';
import { fetchUserRepos } from '@/services/github';

export const ProjectsPage = (): React.JSX.Element => {
  const {
    data: repos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['github-repos'],
    queryFn: () => fetchUserRepos('Sator-Adijes'),
  });

  return (
    <main className="flex flex-1 flex-col items-center bg-white px-md py-xxl">
      <div className="w-full max-w-[900px]">
        <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mes projets</h1>
        <p className="text-h5 text-neutral-600 mb-xxl">
          Retrouvez mes projets open source sur GitHub
        </p>

        {isLoading && <p className="text-b1 text-neutral-500">Chargement des projets…</p>}

        {isError && (
          <p className="text-b1 text-danger">
            Impossible de charger les projets. Veuillez réessayer.
          </p>
        )}

        {repos && (
          <div className="grid grid-cols-3 gap-lg">
            {repos.map(repo => (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                url={repo.html_url}
                updatedAt={repo.updated_at}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
