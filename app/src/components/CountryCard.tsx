import React from 'react';

type Props = {
  country: string;
  flag: string;
  cities: string[];
};

export const CountryCard = ({ country, flag, cities }: Props): React.JSX.Element => (
  <div className="flex flex-col rounded-md shadow-sm border border-neutral-200 p-md">
    <div className="flex items-center gap-sm mb-xs">
      <span className="text-3xl">{flag}</span>
      <h2 className="text-h5 font-bold text-neutral-900">{country}</h2>
    </div>
    <p className="text-b2 text-primary font-medium leading-relaxed">{cities.join(' → ')}</p>
  </div>
);
