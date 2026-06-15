import React from 'react';

import { PassionCard } from '@/components/PassionCard';

type Passion = {
  label: string;
  image?: string;
};

const PASSIONS: Passion[] = [
  { label: 'Voitures' },
  { label: 'Plongée' },
  { label: 'Mangas' },
  { label: 'Cuisine' },
  { label: 'Vélo' },
  { label: 'Escalade' },
];

export const PassionsPage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md py-xxl">
    <div className="w-full max-w-[900px]">
      <div className="text-h3 font-bold text-neutral-900 mb-xs">Mes passions</div>
      <div className="text-b1 text-neutral-600 mb-xxl">Découvrez ce qui me passionne</div>
      <div className="grid grid-cols-3 gap-lg">
        {PASSIONS.map(passion => (
          <PassionCard key={passion.label} {...passion} />
        ))}
      </div>
    </div>
  </main>
);
