import React from 'react';

import { NavLink } from 'react-router';

export const Navbar = (): React.JSX.Element => (
  <nav className="sticky top-0 z-10 flex justify-center gap-md px-xl py-sm bg-white shadow-xs">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
          isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
        }`
      }
    >
      Accueil
    </NavLink>
    <NavLink
      to="/profile"
      className={({ isActive }) =>
        `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
          isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
        }`
      }
    >
      Profil
    </NavLink>
    <NavLink
      to="/passions"
      className={({ isActive }) =>
        `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
          isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
        }`
      }
    >
      Mes passions
    </NavLink>
    <NavLink
      to="/voyage"
      className={({ isActive }) =>
        `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
          isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
        }`
      }
    >
      Mon voyage
    </NavLink>
    <NavLink
      to="/projects"
      className={({ isActive }) =>
        `text-b1 font-bold px-md py-xs rounded-xs transition-colors ${
          isActive ? 'bg-primary text-white' : 'text-neutral-700 hover:bg-neutral-100'
        }`
      }
    >
      Mes projets
    </NavLink>
  </nav>
);
