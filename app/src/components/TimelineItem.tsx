import React from 'react';

type Props = {
  title: string;
  organization: string;
  period: string;
  description?: string;
};

export const TimelineItem = ({
  title,
  organization,
  period,
  description,
}: Props): React.JSX.Element => (
  <div className="flex gap-md">
    <div className="flex flex-col items-center">
      <div className="w-[10px] h-[10px] rounded-full bg-primary mt-xs shrink-0" />
      <div className="w-[2px] flex-1 bg-neutral-200 mt-xxs" />
    </div>
    <div className="pb-xl">
      <p className="text-b1 font-bold text-neutral-900">{title}</p>
      <p className="text-b2 text-primary font-bold">{organization}</p>
      <p className="text-sm text-neutral-500 mb-xs">{period}</p>
      {description && <p className="text-b2 text-neutral-700">{description}</p>}
    </div>
  </div>
);
