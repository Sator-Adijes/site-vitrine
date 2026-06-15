import React from 'react';

import { CountryMap } from '@/components/CountryMap';

type Props = {
  country: string;
  flag: string;
  cities: string[];
  isoCodes: string[];
  mapCenter: [number, number];
  mapScale: number;
};

export const CountryCard = ({
  country,
  flag,
  cities,
  isoCodes,
  mapCenter,
  mapScale,
}: Props): React.JSX.Element => (
  <div className="flex flex-col rounded-md shadow-sm border border-neutral-200 overflow-hidden">
    <div className="h-[200px] bg-neutral-100">
      <CountryMap isoCodes={isoCodes} center={mapCenter} scale={mapScale} />
    </div>
    <div className="flex flex-col p-md">
      <div className="flex items-center gap-sm mb-xs">
        <span className="text-3xl">{flag}</span>
        <h2 className="text-h5 font-bold text-neutral-900">{country}</h2>
      </div>
      <p className="text-b2 text-primary font-medium leading-relaxed">{cities.join(' → ')}</p>
    </div>
  </div>
);
