import React from 'react';

import { CountryCard } from '@/components/CountryCard';

type CountryProps = {
  country: string;
  flag: string;
  cities: string[];
  isoCodes: string[];
  mapCenter: [number, number];
  mapScale: number;
};

const COUNTRIES: CountryProps[] = [
  {
    country: 'Thaïlande',
    flag: '🇹🇭',
    isoCodes: ['764'],
    mapCenter: [101, 15],
    mapScale: 1000,
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
      'Koh Lanta',
    ],
  },
  {
    country: 'Laos',
    flag: '🇱🇦',
    isoCodes: ['418'],
    mapCenter: [103, 18],
    mapScale: 1800,
    cities: [
      'Vientiane',
      'Vang Vieng',
      'Luang Prabang',
      'Nong Khiaw',
      'Muang Ngoi',
      'Muang Khua',
      'Don Det',
      'Paksé',
    ],
  },
  {
    country: 'Vietnam',
    flag: '🇻🇳',
    isoCodes: ['704'],
    mapCenter: [108, 16],
    mapScale: 1000,
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
    flag: '🇰🇭',
    isoCodes: ['116'],
    mapCenter: [105, 12],
    mapScale: 2200,
    cities: ['Phnom Penh', 'Koh Rong Samloen', 'Siem Reap', 'Kratie'],
  },
  {
    country: 'Malaisie & Singapour',
    flag: '🇲🇾🇸🇬',
    isoCodes: ['458', '702'],
    mapCenter: [113, 4],
    mapScale: 900,
    cities: ['Penang', 'Îles Perhentian', 'Île Tenggol', 'Île Tioman', 'Singapour'],
  },
  {
    country: 'Indonésie',
    flag: '🇮🇩',
    isoCodes: ['360'],
    mapCenter: [118, -2],
    mapScale: 550,
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
    <div className="w-full max-w-[900px]">
      <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mon voyage</h1>
      <p className="text-h5 text-neutral-600 mb-xxl">
        8 mois en Asie du Sud-Est, sans avion (ou presque)
      </p>

      <p className="text-b1 text-neutral-700 leading-relaxed mb-xxl">
        Depuis plusieurs années nous avions mûri un projet avec ma compagne, partir découvrir l'Asie
        du Sud-Est, avec le moins d'avion possible. Nous sommes partis en septembre 2025 et rentrés
        en juin 2026. Voici notre itinéraire, uniquement en bus (de nuit ou de jour), trains et
        bateaux (lents et rapides, le plus long a duré 34h). Nous n'aurons pris l'avion que pour
        arriver en Asie et en revenir, l'aller jusqu'à Bangkok et le retour depuis Jakarta.
      </p>

      <div className="grid grid-cols-2 gap-lg">
        {COUNTRIES.map(c => (
          <CountryCard key={c.country} {...c} />
        ))}
      </div>
    </div>
  </main>
);
