import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { CountryInfo } from '../CountryInfo';

describe('<CountryInfo />', () => {
  const defaultProps = {
    country: 'Vietnam',
    flag: '🇻🇳',
    cities: [
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] as [number, number] },
      { name: 'Ha Long', coordinates: [107.0843, 20.9517] as [number, number] },
      { name: 'Ninh Binh', coordinates: [105.9745, 20.2539] as [number, number] },
    ],
  };

  it('should render the country name', () => {
    render(<CountryInfo {...defaultProps} />);

    expect(screen.getByText('Vietnam')).toBeInTheDocument();
  });

  it('should render the flag', () => {
    render(<CountryInfo {...defaultProps} />);

    expect(screen.getByText('🇻🇳')).toBeInTheDocument();
  });

  it('should render the cities as a route', () => {
    render(<CountryInfo {...defaultProps} />);

    expect(screen.getByText('Hanoi → Ha Long → Ninh Binh')).toBeInTheDocument();
  });
});
