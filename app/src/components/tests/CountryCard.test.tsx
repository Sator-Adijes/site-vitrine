import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { CountryCard } from '../CountryCard';

vi.mock('@/components/CountryMap', () => ({
  CountryMap: () => <div data-testid="country-map" />,
}));

describe('<CountryCard />', () => {
  const defaultProps = {
    country: 'Vietnam',
    flag: '🇻🇳',
    cities: ['Hanoi', 'Ha Long', 'Ninh Binh'],
    isoCodes: ['704'],
    mapCenter: [108, 16] as [number, number],
    mapScale: 1000,
  };

  it('should render the country name', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByText('Vietnam')).toBeInTheDocument();
  });

  it('should render the flag', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByText('🇻🇳')).toBeInTheDocument();
  });

  it('should render the cities as a route', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByText('Hanoi → Ha Long → Ninh Binh')).toBeInTheDocument();
  });

  it('should render the map', () => {
    render(<CountryCard {...defaultProps} />);

    expect(screen.getByTestId('country-map')).toBeInTheDocument();
  });
});
