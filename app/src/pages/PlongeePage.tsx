import React from 'react';

type SiteProps = {
  name: string;
  location: string;
  description: string;
};

const Site = ({ name, location, description }: SiteProps): React.JSX.Element => (
  <div className="flex gap-md mb-lg">
    <div className="flex flex-col items-center">
      <div className="w-[10px] h-[10px] rounded-full bg-primary mt-xs shrink-0" />
      <div className="w-[2px] flex-1 bg-neutral-200 mt-xxs" />
    </div>
    <div className="pb-xs">
      <div className="flex items-baseline gap-sm mb-xxs">
        <p className="text-b1 font-bold text-neutral-900">{name}</p>
        <span className="text-sm text-primary font-medium">{location}</span>
      </div>
      <p className="text-b2 text-neutral-700">{description}</p>
    </div>
  </div>
);

export const PlongeePage = (): React.JSX.Element => (
  <main className="flex flex-1 flex-col items-center bg-white px-md pb-xxl pt-md">
    <div className="w-full max-w-[700px]">
      <div className="mb-xxl">
        <p className="text-b2 text-primary font-bold uppercase tracking-widest mb-xs">
          Plongée sous-marine
        </p>
        <h1 className="text-h2 font-bold text-neutral-900 mb-xs">La plongée</h1>
        <p className="text-h5 text-neutral-600 mb-xl">
          Mes destinations et coups de cœur sous l'eau
        </p>
        <p className="text-b1 text-neutral-700 leading-relaxed">
          La plongée occupe une place à part dans mes voyages. De la Thaïlande à l'Indonésie en
          passant par la Malaisie et le Cambodge, chaque site a son caractère — eaux claires et
          récifs colorés, courants puissants, épaves ou mantas géantes. Voici les endroits qui m'ont
          le plus marqué.
        </p>
      </div>

      <section className="mb-xxl">
        <h2 className="text-h5 font-bold text-neutral-900 mb-lg pb-xs border-b border-neutral-200">
          Les destinations
        </h2>
        <Site
          name="Koh Tao"
          location="Thaïlande"
          description="Référence mondiale pour apprendre à plonger. Eaux chaudes et claires, récifs peu profonds peuplés de tortues, barracudas et poissons-clowns. Idéal pour les premières certifications."
        />
        <Site
          name="Koh Lanta"
          location="Thaïlande"
          description="Moins touristique que Koh Tao, avec une ambiance plus posée. Requins léopards sur les fonds sableux, coraux mous colorés, bonne visibilité en dehors de la mousson."
        />
        <Site
          name="Koh Rong Samloen"
          location="Cambodge"
          description="Île encore préservée aux récifs intacts. Faune marine diversifiée sur des sites peu fréquentés. La bioluminescence la nuit en fait un site vraiment à part."
        />
        <Site
          name="Perhentian"
          location="Malaisie"
          description="Deux îles classées réserve marine, à la visibilité excellente d'avril à septembre. Tortues vertes et imbriquées omniprésentes, requins dormeurs sur les fonds de sable."
        />
        <Site
          name="Tenggol"
          location="Malaisie"
          description="Île isolée et difficile d'accès, qui récompense les plongeurs aventureux. Coraux branchus en excellent état, bancs de barracudas, requins baleines saisonniers."
        />
        <Site
          name="Tioman"
          location="Malaisie"
          description="Grande île volcanique aux eaux poissonneuses. Bonne base pour les niveaux intermédiaires — raies, murènes, bancs denses de poissons tropicaux à chaque plongée."
        />
        <Site
          name="Bali"
          location="Indonésie"
          description="Diversité exceptionnelle : l'épave de l'USAT Liberty à Tulamben, les courants de Nusa Penida, les mantas de Manta Point. Du site débutant au plongée technique, tout y est."
        />
        <Site
          name="Nusa Lembongan"
          location="Indonésie"
          description="Raies manta en semi-liberté sur Crystal Bay et Manta Point. Courants forts réservés aux plongeurs confirmés, mais la densité de vie marine est spectaculaire."
        />
        <Site
          name="Labuan Bajo"
          location="Indonésie"
          description="Porte d'entrée du parc national de Komodo. Plongée de classe mondiale dans des canaux balayés par les courants — mantas géantes, requins de récif, tortues et nudibranches à chaque sortie."
        />
      </section>

      <section>
        <h2 className="text-h5 font-bold text-neutral-900 mb-lg pb-xs border-b border-neutral-200">
          Quelques chiffres
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-md">
          {[
            { value: '9', label: 'Sites visités' },
            { value: '4', label: 'Pays' },
            { value: '—', label: 'Profondeur max' },
            { value: '—', label: 'Niveau' },
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
