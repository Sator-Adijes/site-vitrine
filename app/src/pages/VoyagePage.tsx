import React from 'react';

import { CountryInfo } from '@/components/CountryInfo';
import { CountryMap } from '@/components/CountryMap';
import { City } from '@/types';

type CountryProps = {
  country: string;
  flag: string;
  cities: City[];
  isoCodes: string[];
};

const COUNTRIES: CountryProps[] = [
  {
    country: 'Thaïlande',
    flag: '🇹🇭',
    isoCodes: ['764'],
    cities: [
      { name: 'Bangkok', coordinates: [100.5018, 13.7563] },
      { name: 'Ayutthaya', coordinates: [100.5877, 14.3692] },
      { name: 'Chiang Mai', coordinates: [98.9853, 18.7883] },
      { name: 'Pai', coordinates: [98.4419, 19.3586] },
      { name: 'Chiang Rai', coordinates: [99.8319, 19.9105] },
      { name: 'Sukhothaï', coordinates: [99.8269, 17.0069] },
      { name: 'Nakhon Sawan', coordinates: [100.1308, 15.7028] },
      { name: 'Bangkok', coordinates: [100.5018, 13.7563] },
      { name: 'Krabi', coordinates: [98.9173, 8.0863] },
      { name: 'Khanom', coordinates: [100.0014, 9.1661] },
      { name: 'Koh Tao', coordinates: [99.8404, 10.0956] },
      { name: 'Bangkok', coordinates: [100.5018, 13.7563] },
      { name: 'Koh Lanta', coordinates: [99.0476, 7.5695] },
    ],
  },
  {
    country: 'Laos',
    flag: '🇱🇦',
    isoCodes: ['418'],
    cities: [
      { name: 'Vientiane', coordinates: [102.6331, 17.9757] },
      { name: 'Vang Vieng', coordinates: [102.4427, 18.9207] },
      { name: 'Luang Prabang', coordinates: [102.1358, 19.8845] },
      { name: 'Nong Khiaw', coordinates: [102.6116, 20.5649] },
      { name: 'Muang Ngoi', coordinates: [102.6833, 20.7167] },
      { name: 'Muang Khua', coordinates: [102.5333, 21.2] },
      { name: 'Don Det', coordinates: [105.9667, 13.9167] },
      { name: 'Paksé', coordinates: [105.7936, 15.1199] },
    ],
  },
  {
    country: 'Vietnam',
    flag: '🇻🇳',
    isoCodes: ['704'],
    cities: [
      { name: 'Dien Bien Phu', coordinates: [103.0167, 21.3833] },
      { name: 'Mu Cang Chai', coordinates: [104.0667, 21.8167] },
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] },
      { name: 'Ha Giang', coordinates: [104.9836, 22.8233] },
      { name: 'Cao Bang', coordinates: [106.2578, 22.6659] },
      { name: 'Ha Long', coordinates: [107.0843, 20.9517] },
      { name: 'Cat Ba', coordinates: [107.0444, 20.7249] },
      { name: 'Ninh Binh', coordinates: [105.9745, 20.2539] },
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] },
    ],
  },
  {
    country: 'Cambodge',
    flag: '🇰🇭',
    isoCodes: ['116'],
    cities: [
      { name: 'Phnom Penh', coordinates: [104.916, 11.5625] },
      { name: 'Koh Rong Samloen', coordinates: [103.3667, 10.6167] },
      { name: 'Siem Reap', coordinates: [103.8594, 13.3622] },
      { name: 'Kratie', coordinates: [106.0178, 12.4881] },
    ],
  },
  {
    country: 'Malaisie & Singapour',
    flag: '🇲🇾🇸🇬',
    isoCodes: ['458', '702'],
    cities: [
      { name: 'Penang', coordinates: [100.329, 5.4141] },
      { name: 'Perhentian', coordinates: [102.7667, 5.9167] },
      { name: 'Tenggol', coordinates: [103.6667, 4.8] },
      { name: 'Tioman', coordinates: [104.1667, 2.8167] },
      { name: 'Singapour', coordinates: [103.8198, 1.3521] },
    ],
  },
  {
    country: 'Indonésie',
    flag: '🇮🇩',
    isoCodes: ['360'],
    cities: [
      { name: 'Batam', coordinates: [104.0304, 1.1256] },
      { name: 'Jakarta', coordinates: [106.8456, -6.2088] },
      { name: 'Bali', coordinates: [115.2167, -8.65] },
      { name: 'Nusa Lembongan', coordinates: [115.45, -8.6833] },
      { name: 'Lombok', coordinates: [116.3167, -8.65] },
      { name: 'Gili Meno', coordinates: [116.05, -8.35] },
      { name: 'Labuan Bajo', coordinates: [119.8869, -8.4986] },
      { name: 'Banyuwangi', coordinates: [114.3667, -8.2192] },
      { name: 'Cemoro Lawang', coordinates: [112.95, -7.9333] },
      { name: 'Yogyakarta', coordinates: [110.3667, -7.8] },
      { name: 'Jakarta', coordinates: [106.8456, -6.2088] },
    ],
  },
];

const ALL_ISO_CODES = COUNTRIES.flatMap(c => c.isoCodes);
const ALL_CITIES = COUNTRIES.flatMap(c => c.cities);

export const VoyagePage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md pb-xxl pt-md">
    <div className="w-full max-w-[900px]">
      <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Mon voyage</h1>
      <p className="text-h5 text-neutral-600 mb-lg">
        8 mois en Asie du Sud-Est, sans avion (ou presque)
      </p>
      <p className="text-b1 text-neutral-700 leading-relaxed mb-xl">
        Depuis plusieurs années nous avions mûri un projet avec ma compagne, partir découvrir l'Asie
        du Sud-Est, avec le moins d'avion possible. Nous sommes partis en septembre 2025 et rentrés
        en juin 2026. Voici notre itinéraire, uniquement en bus (de nuit ou de jour), trains et
        bateaux (lents et rapides, le plus long a duré 34h). Nous n'aurons pris l'avion que pour
        arriver en Asie et en revenir, l'aller jusqu'à Bangkok et le retour depuis Jakarta.
      </p>

      <div className="rounded-md border border-neutral-200 shadow-sm overflow-hidden">
        <div className="h-[500px] bg-neutral-100">
          <CountryMap
            isoCodes={ALL_ISO_CODES}
            center={[110, 9]}
            scale={700}
            cities={ALL_CITIES}
            svgWidth={900}
            svgHeight={500}
          />
        </div>
        <div className="grid grid-cols-3 bg-neutral-200 gap-px border-t border-neutral-200">
          {COUNTRIES.map(c => (
            <div key={c.country} className="bg-white">
              <CountryInfo country={c.country} flag={c.flag} cities={c.cities} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);
