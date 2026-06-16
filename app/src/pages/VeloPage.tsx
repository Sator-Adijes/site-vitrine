import React from 'react';

import { ViaRhonaMap } from '@/components/ViaRhonaMap';

type StageProps = {
  name: string;
  distance: string;
  description: string;
};

const Stage = ({ name, distance, description }: StageProps): React.JSX.Element => (
  <div className="flex gap-md mb-lg">
    <div className="flex flex-col items-center">
      <div className="w-[10px] h-[10px] rounded-full bg-primary mt-xs shrink-0" />
      <div className="w-[2px] flex-1 bg-neutral-200 mt-xxs" />
    </div>
    <div className="pb-xs">
      <div className="flex items-baseline gap-sm mb-xxs">
        <p className="text-b1 font-bold text-neutral-900">{name}</p>
        <span className="text-sm text-primary font-medium">{distance}</span>
      </div>
      <p className="text-b2 text-neutral-700">{description}</p>
    </div>
  </div>
);

export const VeloPage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md pb-xxl pt-md">
    <div className="w-full max-w-[700px]">
      <div className="mb-xxl">
        <p className="text-b2 text-primary font-bold uppercase tracking-widest mb-xs">
          EuroVelo 17
        </p>
        <h1 className="text-h2 font-bold text-neutral-900 mb-xs">La Via Rhôna</h1>
        <p className="text-h5 text-neutral-600 mb-xl">Du lac Léman à la Méditerranée, à vélo</p>
        <p className="text-b1 text-neutral-700 leading-relaxed mb-md">
          ~260 km de Genève à Lyon en{' '}
          <span className="font-semibold text-neutral-900">3 jours</span>, en autonomie, avec les
          sacoches et le bivouac comme seuls bagages. Ce tronçon de la Via Rhôna alterne voies
          vertes sécurisées et petites routes à travers une nature très variée : forêts denses et
          Rhône franco-suisse au départ de Genève, gorges spectaculaires du défilé de l'Écluse, puis
          le Bugey viticole avec ses vignobles de cerdon et de roussette, ses cascades et ses
          villages perchés.
        </p>
        <p className="text-b1 text-neutral-700 leading-relaxed">
          Après Belley, le Rhône se calme et s'étale dans les Basses-Terres de l'Ain, paysage de
          zones humides et de marais que l'on longe dans un silence presque total. Le dernier jour,
          la plaine s'ouvre progressivement vers Lyon, avec le parc naturel de Miribel-Jonage comme
          antichambre avant d'arriver sur les quais du Rhône en plein cœur de la ville.
        </p>
      </div>

      <section className="mb-xxl">
        <h2 className="text-h5 font-bold text-neutral-900 mb-lg pb-xs border-b border-neutral-200">
          L'itinéraire
        </h2>

        <div className="mb-xl">
          <p className="text-b2 text-neutral-500 font-semibold uppercase tracking-wide mb-md">
            Genève → Lyon · ~260 km
          </p>
          <div className="mb-lg">
            <ViaRhonaMap />
          </div>
          <Stage
            name="Jour 1 — Genève → Seyssel"
            distance="~73 km"
            description="Départ des rives du lac Léman le long du Rhône franco-suisse. Passage au défilé de l'Écluse, gorge encaissée entre le Jura et le massif du Vuache, avant de rejoindre Valserhône à la confluence avec la Valserine. Arrivée à Seyssel, à cheval entre l'Ain et la Haute-Savoie."
          />
          <Stage
            name="Jour 2 — Seyssel → Montalieu-Vercieu"
            distance="~105 km"
            description="Passage à Culoz au pied du Grand Colombier avant d'entrer dans le Bugey viticole, avec ses vignobles de cerdon et de roussette. Traversée de Belley, ville de Brillat-Savarin, puis descente vers les Basses-Terres de l'Ain à travers zones humides et marais du Rhône canalisé. Nuit au camping de la Vallée Bleue."
          />
          <Stage
            name="Jour 3 — Montalieu-Vercieu → Lyon"
            distance="~82 km"
            description="Longue étape finale dans la plaine de l'Ain, le long d'un Rhône de plus en plus large. Traversée de l'île de Miribel-Jonage, parc naturel aux portes de Lyon. Arrivée sur la presqu'île par les quais du Rhône."
          />
        </div>
      </section>

      <section>
        <h2 className="text-h5 font-bold text-neutral-900 mb-lg pb-xs border-b border-neutral-200">
          Quelques chiffres
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-md">
          {[
            { value: '~260 km', label: 'Distance totale' },
            { value: '3 jours', label: 'Durée' },
            { value: '~800 m', label: 'Dénivelé cumulé' },
            { value: '100 %', label: 'En autonomie' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-md border border-neutral-200 p-md text-center">
              <p className="text-h4 font-bold text-primary mb-xxs">{value}</p>
              <p className="text-sm text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);
