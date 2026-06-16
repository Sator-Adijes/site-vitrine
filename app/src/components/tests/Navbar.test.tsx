import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { Navbar } from '../Navbar';

const renderWithRouter = (): ReturnType<typeof render> =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

describe('<Navbar />', () => {
  it('should render a nav landmark', () => {
    renderWithRouter();

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render all nav links in desktop nav', () => {
    renderWithRouter();

    expect(screen.getByRole('link', { name: 'Accueil' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Profil' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Mes passions' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Mon voyage' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Mes projets' })).toBeInTheDocument();
  });

  it('should render the hamburger button', () => {
    renderWithRouter();

    expect(screen.getByRole('button', { name: 'Ouvrir le menu' })).toBeInTheDocument();
  });

  it('should open the mobile menu when the hamburger button is clicked', () => {
    renderWithRouter();

    expect(screen.getAllByRole('link', { name: 'Accueil' })).toHaveLength(1);

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }));

    expect(screen.getAllByRole('link', { name: 'Accueil' })).toHaveLength(2);
    expect(screen.getByRole('button', { name: 'Fermer le menu' })).toBeInTheDocument();
  });

  it('should close the mobile menu when the hamburger button is clicked again', () => {
    renderWithRouter();

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }));
    fireEvent.click(screen.getByRole('button', { name: 'Fermer le menu' }));

    expect(screen.getAllByRole('link', { name: 'Accueil' })).toHaveLength(1);
  });

  it('should close the mobile menu when a link is clicked', () => {
    renderWithRouter();

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le menu' }));
    fireEvent.click(screen.getAllByRole('link', { name: 'Accueil' })[1]);

    expect(screen.getAllByRole('link', { name: 'Accueil' })).toHaveLength(1);
  });
});
