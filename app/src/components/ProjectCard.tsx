import React from 'react';

type Props = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
  updatedAt: string;
};

export const ProjectCard = ({
  name,
  description,
  language,
  stars,
  url,
  updatedAt,
}: Props): React.JSX.Element => {
  const formattedDate = new Date(updatedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-xs p-lg rounded-md border border-neutral-200 shadow-xs hover:shadow-md hover:border-primary transition-all"
    >
      <p className="text-b1 font-bold text-neutral-900">{name}</p>
      {description && <p className="text-b2 text-neutral-600">{description}</p>}
      <div className="flex items-center gap-md mt-auto pt-xs">
        {language && <span className="text-sm text-neutral-500">{language}</span>}
        <span className="text-sm text-neutral-500">⭐ {stars}</span>
        <span className="text-sm text-neutral-400 ml-auto">Mis à jour {formattedDate}</span>
      </div>
    </a>
  );
};
