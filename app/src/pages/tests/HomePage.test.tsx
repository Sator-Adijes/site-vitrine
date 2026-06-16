import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';

import { HomePage } from '../HomePage';

const renderWithRouter = (): ReturnType<typeof render> =>
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

describe('<HomePage />', () => {
  it('should render a main landmark', () => {
    renderWithRouter();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the name heading', () => {
    renderWithRouter();
    expect(screen.getByRole('heading', { name: 'Sator Adijes' })).toBeInTheDocument();
  });

  it('should render the job title', () => {
    renderWithRouter();
    expect(screen.getByText('Développeur FullStack')).toBeInTheDocument();
  });

  it('should render navigation cards', () => {
    renderWithRouter();
    expect(screen.getByRole('link', { name: /Mon profil/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Mes passions/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Mes projets/i })).toBeInTheDocument();
  });
});
