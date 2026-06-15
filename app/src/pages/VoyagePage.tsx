import React from 'react';

type LegProps = {
  country: string;
  cities: string[];
};

const Leg = ({ country, cities }: LegProps): React.JSX.Element => (
  <div className="mb-xl">
    <h2 className="text-h5 font-bold text-neutral-900 mb-xs pb-xs border-b border-neutral-200">
      {country}
    </h2>
    <p className="text-b2 text-primary font-medium leading-relaxed">{cities.join(' → ')}</p>
  </div>
);

const LEGS: LegProps[] = [
  {
    country: 'Thaïlande',
    cities: [
      'Bangkok',
      'Ayutthaya',
      'Chiang Mai',
      'Pai',
      'Chiang Rai',
      'Sukhothaï',
      'Nakhon Sawan',
      'Bangkok',
      'Krabi',
      'Khanom',
      'Koh Tao',
      'Bangkok',
    ],
  },
  {
    country: 'Laos',
    cities: ['Vientiane', 'Vang Vieng', 'Luang Prabang', 'Nong Khiaw', 'Muang Ngoi', 'Muang Khua'],
  },
  {
    country: 'Vietnam',
    cities: [
      'Dien Bien Phu',
      'Mu Cang Chai',
      'Hanoi',
      'Ha Giang',
      'Cao Bang',
      'Ha Long',
      'Cat Ba',
      'Ninh Binh',
      'Hanoi',
    ],
  },
  {
    country: 'Cambodge',
    cities: ['Phnom Penh', 'Koh Rong Samloen', 'Siem Reap', 'Kratie'],
  },
  {
    country: 'Laos',
    cities: ['Don Det', 'Paksé'],
  },
  {
    country: 'Thaïlande',
    cities: ['Bangkok', 'Koh Lanta'],
  },
  {
    country: 'Malaisie & Singapour',
    cities: ['Penang', 'Îles Perhentian', 'Île Tenggol', 'Île Tioman', 'Singapour'],
  },
  {
    country: 'Indonésie',
    cities: [
      'Batam',
      'Jakarta',
      'Bali',
      'Nusa Lembongan',
      'Lombok',
      'Gili Meno',
      'Labuan Bajo',
      'Banyuwangi',
      'Cemoro Lawang',
      'Yogyakarta',
      'Jakarta',
    ],
  },
];

export const VoyagePage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md py-xxl">
    <div className="w-full max-w-[700px]">
      <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mon voyage</h1>
      <p className="text-h5 text-neutral-600 mb-xxl">8 mois en Asie du Sud-Est, sans avion</p>

      <p className="text-b1 text-neutral-700 leading-relaxed mb-xxl">
        Après 4 ans chez hemea, ma compagne et moi sommes partis 8 mois traverser l'Asie du Sud-Est
        sans jamais prendre l'avion — uniquement en bus (de nuit ou de jour), trains, bateaux (lents
        et rapides, le plus long a duré 34h) et frontières terrestres. 7 pays, une trentaine de
        villes, et une façon différente d'appréhender le temps et l'essentiel.
      </p>

      {LEGS.map(leg => (
        <Leg key={leg.country} {...leg} />
      ))}
    </div>
  </main>
);
