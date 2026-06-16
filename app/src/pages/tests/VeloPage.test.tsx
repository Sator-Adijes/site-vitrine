import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { VeloPage } from '../VeloPage';

vi.mock('@/components/ViaRhonaMap', () => ({
  ViaRhonaMap: () => <div data-testid="via-rhona-map" />,
}));

describe('<VeloPage />', () => {
  it('should render a main landmark', () => {
    render(<VeloPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the heading', () => {
    render(<VeloPage />);

    expect(screen.getByRole('heading', { name: 'La Via Rhôna' })).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<VeloPage />);

    expect(screen.getByText('Du lac Léman à la Méditerranée, à vélo')).toBeInTheDocument();
  });

  it('should render the itinerary section', () => {
    render(<VeloPage />);

    expect(screen.getByRole('heading', { name: "L'itinéraire" })).toBeInTheDocument();
  });

  it('should render the Geneva to Lyon map', () => {
    render(<VeloPage />);

    expect(screen.getByTestId('via-rhona-map')).toBeInTheDocument();
  });

  it('should render the three days stages', () => {
    render(<VeloPage />);

    expect(screen.getByText('Jour 1 — Genève → Seyssel')).toBeInTheDocument();
    expect(screen.getByText('Jour 2 — Seyssel → Montalieu-Vercieu')).toBeInTheDocument();
    expect(screen.getByText('Jour 3 — Montalieu-Vercieu → Lyon')).toBeInTheDocument();
  });

  it('should render the stats section', () => {
    render(<VeloPage />);

    expect(screen.getByText('Distance totale')).toBeInTheDocument();
    expect(screen.getByText('Durée')).toBeInTheDocument();
    expect(screen.getByText('Dénivelé cumulé')).toBeInTheDocument();
    expect(screen.getByText('En autonomie')).toBeInTheDocument();
  });
});
