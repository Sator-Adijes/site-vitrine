import React from 'react';

import imgVelo from '@/assets/0kdPMLFO.jpeg';
import imgCuisine from '@/assets/_ClPuEg8.jpeg';
import imgSportsMecaniques from '@/assets/dgrtUz99.jpeg';
import imgMangas from '@/assets/GaIqe7w9.jpeg';
import imgPlongee from '@/assets/IMG_20260521_204753(1).jpg';
import imgEscalade from '@/assets/Q0hsYiK5.jpeg';
import { CountryMap } from '@/components/CountryMap';
import { PassionCard } from '@/components/PassionCard';

type Passion = {
  label: string;
  image?: string;
  to?: string;
};

const PASSIONS: Passion[] = [
  { label: 'Vélo', image: imgVelo, to: '/passions/velo' },
  { label: 'Plongée', image: imgPlongee, to: '/passions/plongee' },
  { label: 'Mangas', image: imgMangas },
  { label: 'Cuisine', image: imgCuisine },
  { label: 'Escalade', image: imgEscalade },
  { label: 'Sports Mécaniques', image: imgSportsMecaniques },
];

const VOYAGE_ISO_CODES = ['764', '418', '704', '116', '458', '702', '360'];

const VOYAGE_LABELS = [
  { name: 'Thaïlande', coordinates: [101.0, 15.0] as [number, number] },
  { name: 'Laos', coordinates: [102.8, 19.0] as [number, number] },
  { name: 'Vietnam', coordinates: [105.5, 21.0] as [number, number] },
  { name: 'Cambodge', coordinates: [104.9, 13.0] as [number, number] },
  { name: 'Malaisie', coordinates: [102.5, 4.5] as [number, number] },
  { name: 'Singapour', coordinates: [103.8, 1.3] as [number, number] },
  { name: 'Indonésie', coordinates: [113.5, -0.5] as [number, number] },
];

export const PassionsPage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md pb-xxl pt-md">
    <div className="w-full max-w-[900px]">
      <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mes passions</h1>
      <p className="text-h5 text-neutral-600 mb-xxl">Découvrez ce qui me passionne</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
        <PassionCard
          label="Mon voyage"
          to="/passions/voyage"
          imageElement={
            <CountryMap
              isoCodes={VOYAGE_ISO_CODES}
              center={[112, 7]}
              scale={660}
              svgWidth={400}
              svgHeight={280}
              fillHighlight="#bd8f65"
              fillDefault="#e8ddd5"
              labels={VOYAGE_LABELS}
            />
          }
        />
        {PASSIONS.map(passion => (
          <PassionCard key={passion.label} {...passion} />
        ))}
      </div>
    </div>
  </main>
);
