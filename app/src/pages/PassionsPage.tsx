import React from 'react';

import imgVelo from '@/assets/0kdPMLFO.jpeg';
import imgCuisine from '@/assets/_ClPuEg8.jpeg';
import imgSportsMecaniques from '@/assets/dgrtUz99.jpeg';
import imgMangas from '@/assets/GaIqe7w9.jpeg';
import imgPlongee from '@/assets/IMG_20260521_204753(1).jpg';
import imgEscalade from '@/assets/Q0hsYiK5.jpeg';
import { PassionCard } from '@/components/PassionCard';

type Passion = {
  label: string;
  image?: string;
};

const PASSIONS: Passion[] = [
  { label: 'Plongée', image: imgPlongee },
  { label: 'Mangas', image: imgMangas },
  { label: 'Cuisine', image: imgCuisine },
  { label: 'Vélo', image: imgVelo },
  { label: 'Escalade', image: imgEscalade },
  { label: 'Sports Mécaniques', image: imgSportsMecaniques },
];

export const PassionsPage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md pb-xxl pt-md">
    <div className="w-full max-w-[900px]">
      <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mes passions</h1>
      <p className="text-h5 text-neutral-600 mb-xxl">Découvrez ce qui me passionne</p>
      <div className="grid grid-cols-3 gap-lg">
        {PASSIONS.map(passion => (
          <PassionCard key={passion.label} {...passion} />
        ))}
      </div>
    </div>
  </main>
);
