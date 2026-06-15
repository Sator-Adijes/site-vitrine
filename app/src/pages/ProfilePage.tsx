import React from 'react';

import { TimelineItem } from '@/components/TimelineItem';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.JSX.Element => (
  <section className="mb-xxl">
    <h2 className="text-h5 font-bold text-neutral-900 mb-lg pb-xs border-b border-neutral-200">
      {title}
    </h2>
    {children}
  </section>
);

export const ProfilePage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md py-xxl">
    <div className="w-full max-w-[700px]">
      <div className="mb-xxl">
        <h1 className="text-h2 font-bold text-neutral-900 mb-xxs">Sator Adijes</h1>
        <p className="text-h5 text-primary font-bold mb-xxs">
          Développeur FullStack TypeScript / Scala
        </p>
        <p className="text-b2 text-neutral-500">Paris et périphérie · 500+ relations</p>
      </div>

      <Section title="À propos">
        <p className="text-b1 text-neutral-700">
          Développeur FullStack passionné par TypeScript et Scala, avec une expérience dans la
          conception et le développement d'applications web modernes. Engagé dans des projets à
          impact, tant dans le monde professionnel qu'associatif.
        </p>
      </Section>

      <Section title="Expérience">
        <TimelineItem
          title="Développeur FullStack"
          organization="hemea"
          period="sept. 2021 – avril 2025 · 3 ans et 8 mois · Paris, Île-de-France"
          description="Développement d'applications web dans le domaine de la rénovation énergétique."
        />
        <TimelineItem
          title="Développeur FullStack — Stage"
          organization="Ermes"
          period="mars 2021 – sept. 2021 · 7 mois · Paris, Île-de-France"
          description="Développement de composants front et back en React / Node.js. Utilisation de MongoDB, Material UI, Nivo, Next.js, SendinBlue, Express.js, TypeScript, ElasticSearch, GraphQL."
        />
        <TimelineItem
          title="Développeur FullStack — Stage"
          organization="Phacil"
          period="oct. 2020 – mars 2021 · 6 mois · France"
          description="Développement et maintenance de la plateforme Phacil en React et Node.js. Utilisation de Socket.io, Express, Next.js, Sequelize, Material UI, React-Intl, Redux, SendinBlue, Jest, Enzyme, MySQL et MongoDB."
        />
        <TimelineItem
          title="Assistant pédagogique — CDD"
          organization="EPITECH – European Institute of Technology"
          period="nov. 2019 – juil. 2020 · 9 mois · Berlin"
          description="Encadrement pédagogique en anglais des étudiants de première année à Epitech Berlin."
        />
        <TimelineItem
          title="Assistant Technique — CDD"
          organization="EPITECH – European Institute of Technology"
          period="sept. 2019 – juil. 2020 · 11 mois · Berlin"
          description="Encadrement en anglais des élèves allemands de première et deuxième année sur le campus EPITECH à Berlin dans leur apprentissage des langages de programmation C et C++."
        />
        <TimelineItem
          title="Développeur FullStack — Stage"
          organization="Carte Blanche Conseil S.A.S"
          period="avr. 2019 – août 2019 · 5 mois · Paris et périphérie"
          description="Conceptualisation et conception d'un calendrier web responsive. Projet réalisé en HTML, CSS et JavaScript natif."
        />
        <TimelineItem
          title="Développeur BackEnd — Stage"
          organization="CNRS – Centre national de la recherche scientifique"
          period="déc. 2018 – avr. 2019 · 5 mois · Paris et périphérie"
          description="Stage à l'Institut de Physique Nucléaire et Physique des Particules (in2p3), au laboratoire Astroparticules et Cosmologie (APC). Développement et maintenance avec Django de la plateforme d'observation scientifique CTA (Cherenkov Telescope Array)."
        />
        <TimelineItem
          title="Stagiaire Administration Système et Réseaux"
          organization="BLICK PRODUCTIONS"
          period="sept. 2017 – déc. 2017 · 4 mois · Paris et périphérie"
          description="Mise en place d'un espace de travail et d'un serveur NAS, création d'une architecture d'archivage, et refonte du site internet de la société via CMS."
        />
      </Section>

      <Section title="Formation">
        <TimelineItem
          title="Diplôme d'expert en technologies de l'information"
          organization="EPITECH – European Institute of Technology"
          period="2016 – 2021"
        />
        <TimelineItem
          title="Programme international"
          organization="EPITECH - Berlin"
          period="2019 – 2020"
        />
      </Section>

      <Section title="Bénévolat">
        <TimelineItem
          title="Président"
          organization="Association Unisson"
          period="juil. 2017 – juil. 2019"
          description="Gestion d'une équipe de 40+ personnes pour la sonorisation de tous les événements du groupe IONIS."
        />
        <TimelineItem
          title="Secrétaire adjoint"
          organization="Nataraja Records"
          period="sept. 2019 – sept. 2022"
          description="Gestion administrative et organisation du festival annuel."
        />
        <TimelineItem
          title="Co-fondateur et Trésorier"
          organization="Fête un don"
          period="sept. 2020 – sept. 2022"
          description="Association caritative au service des migrants et des personnes sans domicile fixe."
        />
        <TimelineItem
          title="Secrétaire"
          organization="Association Unisson"
          period="juil. 2020 – juil. 2021"
        />
      </Section>
    </div>
  </main>
);
