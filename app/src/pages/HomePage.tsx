import React from 'react';

import { Link } from 'react-router';

const NavCard = ({
  to,
  label,
  sub,
}: {
  to: string;
  label: string;
  sub: string;
}): React.JSX.Element => (
  <Link
    to={to}
    className="group p-lg rounded-md border border-neutral-200 hover:border-primary hover:shadow-sm transition-all"
  >
    <div className="text-b1 font-bold text-neutral-900 group-hover:text-primary transition-colors mb-xxs">
      {label}
    </div>
    <div className="text-b2 text-neutral-500">{sub}</div>
  </Link>
);

export const HomePage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md py-xxl">
    <div className="w-full max-w-[700px]">
      <div className="mb-xxl">
        <p className="text-b2 text-primary font-bold uppercase tracking-widest mb-xs">
          Bonjour, je suis
        </p>
        <h1 className="text-h2 font-bold text-neutral-900 mb-xs">Sator Adijes</h1>
        <p className="text-h5 text-neutral-600 mb-xl">Développeur FullStack</p>
        <p className="text-b1 text-neutral-700 leading-relaxed mb-md">
          Développeur FullStack avec près de 4 ans chez{' '}
          <span className="font-semibold text-neutral-900">hemea</span> (React, TypeScript, Scala,
          PostgreSQL), où j'ai contribué à une migration GCP et à des sujets de plateforme CircleCI
          dans un contexte de forte croissance. Avant ça : stages chez Ermes et Phacil (React /
          Node.js), un passage au CNRS sur Django, et une expérience pédagogique à EPITECH Berlin.
        </p>
        <p className="text-b1 text-neutral-700 leading-relaxed">
          Je cherche aujourd'hui un poste{' '}
          <span className="font-semibold text-neutral-900">confirmé en startup</span>, sur des
          sujets qui ont du sens — santé, environnement ou sport — avec une stack moins centrée sur
          Scala. Je suis basé à Paris et disponible rapidement. Ce site a été conçu avec Claude pour
          me remettre à jour sur les pratiques pro du moment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mb-xxl">
        <NavCard to="/profile" label="Mon profil" sub="Parcours & expériences" />
        <NavCard to="/passions" label="Mes passions" sub="Ce qui me fait vibrer" />
        <NavCard to="/voyage" label="Mon voyage" sub="8 mois en Asie sans avion" />
        <NavCard to="/projects" label="Mes projets" sub="Ce sur quoi je travaille" />
      </div>
    </div>
  </main>
);
