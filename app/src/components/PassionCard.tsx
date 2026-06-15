import React from 'react';

type Props = {
  label: string;
  image?: string;
};

export const PassionCard = ({ label, image }: Props): React.JSX.Element => (
  <div className="flex flex-col rounded-md shadow-sm overflow-hidden border border-neutral-200">
    <div className="w-full h-[280px] bg-neutral-100 flex items-center justify-center">
      {image ? (
        <img src={image} alt={label} className="w-full h-full object-cover" />
      ) : (
        <span className="text-neutral-400 text-sm">Image à venir</span>
      )}
    </div>
    <div className="px-md py-sm">
      <p className="text-b1 font-bold text-neutral-900">{label}</p>
    </div>
  </div>
);
