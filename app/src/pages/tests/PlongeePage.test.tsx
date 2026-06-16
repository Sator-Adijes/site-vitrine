import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PlongeePage } from '../PlongeePage';

describe('<PlongeePage />', () => {
  it('should render a main landmark', () => {
    render(<PlongeePage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the heading', () => {
    render(<PlongeePage />);

    expect(screen.getByRole('heading', { name: 'La plongée' })).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<PlongeePage />);

    expect(screen.getByText("Mes destinations et coups de cœur sous l'eau")).toBeInTheDocument();
  });

  it('should render the destinations section', () => {
    render(<PlongeePage />);

    expect(screen.getByRole('heading', { name: 'Les destinations' })).toBeInTheDocument();
  });

  it('should render all dive sites', () => {
    render(<PlongeePage />);

    expect(screen.getByText('Koh Tao')).toBeInTheDocument();
    expect(screen.getByText('Koh Lanta')).toBeInTheDocument();
    expect(screen.getByText('Koh Rong Samloen')).toBeInTheDocument();
    expect(screen.getByText('Perhentian')).toBeInTheDocument();
    expect(screen.getByText('Tenggol')).toBeInTheDocument();
    expect(screen.getByText('Tioman')).toBeInTheDocument();
    expect(screen.getByText('Bali')).toBeInTheDocument();
    expect(screen.getByText('Nusa Lembongan')).toBeInTheDocument();
    expect(screen.getByText('Labuan Bajo')).toBeInTheDocument();
  });

  it('should render the stats section', () => {
    render(<PlongeePage />);

    expect(screen.getByText('Sites visités')).toBeInTheDocument();
    expect(screen.getByText('Pays')).toBeInTheDocument();
    expect(screen.getByText('Profondeur max')).toBeInTheDocument();
    expect(screen.getByText('Niveau')).toBeInTheDocument();
  });
});
