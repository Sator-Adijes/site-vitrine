import React from 'react';

import { NavLink } from 'react-router';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/profile', label: 'Profil' },
  { to: '/passions', label: 'Mes passions' },
  { to: '/voyage', label: 'Mon voyage' },
  { to: '/projects', label: 'Mes projets' },
];

const navLinkClass = (isActive: boolean): string =>
  `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
    isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
  }`;

export const Navbar = (): React.JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-xs">
      <div className="hidden sm:flex justify-center gap-md px-xl py-sm">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) => navLinkClass(isActive)}>
            {label}
          </NavLink>
        ))}
      </div>

      <div className="flex sm:hidden items-center justify-between px-md py-sm">
        <span className="text-b1 font-bold text-neutral-900">Sator Adijes</span>
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="p-xs rounded-xs hover:bg-neutral-100 transition-colors"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="flex sm:hidden flex-col px-md pb-sm border-t border-neutral-200">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
                  isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
