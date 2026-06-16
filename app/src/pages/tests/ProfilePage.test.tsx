import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ProfilePage } from '../ProfilePage';

describe('<ProfilePage />', () => {
  it('should render a main landmark', () => {
    render(<ProfilePage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the name', () => {
    render(<ProfilePage />);

    expect(screen.getByText('Sator Adijes')).toBeInTheDocument();
  });

  it('should render the title', () => {
    render(<ProfilePage />);

    expect(screen.getByText('Développeur FullStack TypeScript / Scala')).toBeInTheDocument();
  });

  it('should render all experience entries', () => {
    render(<ProfilePage />);

    expect(screen.getByText('hemea')).toBeInTheDocument();
    expect(screen.getByText('Ermes')).toBeInTheDocument();
    expect(screen.getByText('Phacil')).toBeInTheDocument();
    expect(screen.getByText('Carte Blanche Conseil S.A.S')).toBeInTheDocument();
    expect(
      screen.getByText('CNRS – Centre national de la recherche scientifique'),
    ).toBeInTheDocument();
    expect(screen.getByText('BLICK PRODUCTIONS')).toBeInTheDocument();
  });

  it('should render the education section', () => {
    render(<ProfilePage />);

    expect(screen.getByText('Formation')).toBeInTheDocument();
    expect(
      screen.getAllByText('EPITECH – European Institute of Technology').length,
    ).toBeGreaterThanOrEqual(1);
  });

  it('should render the volunteering section', () => {
    render(<ProfilePage />);

    expect(screen.getByText('Bénévolat')).toBeInTheDocument();
    expect(screen.getAllByText('Association Unisson')).toHaveLength(2);
    expect(screen.getByText('Fête un don')).toBeInTheDocument();
  });
});
