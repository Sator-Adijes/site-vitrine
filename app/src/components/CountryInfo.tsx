import React from 'react';

import { City } from '@/types';

type Props = {
  country: string;
  flag: string;
  cities: City[];
};

export const CountryInfo = ({ country, flag, cities }: Props): React.JSX.Element => (
  <div className="p-md">
    <div className="flex items-center gap-sm mb-xs">
      <span className="text-2xl">{flag}</span>
      <h2 className="text-b1 font-bold text-neutral-900">{country}</h2>
    </div>
    <p className="text-sm text-primary font-medium leading-relaxed">
      {cities.map(c => c.name).join(' / ')}
    </p>
  </div>
);
