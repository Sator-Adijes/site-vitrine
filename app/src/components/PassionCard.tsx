import React from 'react';

import { Link } from 'react-router';

type Props = {
  label: string;
  image?: string;
  imageElement?: React.ReactNode;
  to?: string;
};

const cardClass = 'flex flex-col rounded-md shadow-sm overflow-hidden border border-neutral-200';

export const PassionCard = ({ label, image, imageElement, to }: Props): React.JSX.Element => {
  const imageSlot =
    imageElement ??
    (image ? (
      <img src={image} alt={label} className="w-full h-full object-cover" />
    ) : (
      <span className="text-neutral-400 text-sm">Image à venir</span>
    ));

  const content = (
    <>
      <div className="w-full h-[280px] bg-neutral-100 flex items-center justify-center">
        {imageSlot}
      </div>
      <div className="px-md py-sm">
        <p className="text-b1 font-bold text-neutral-900">{label}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${cardClass} hover:border-primary hover:shadow-md transition-all`}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
};
