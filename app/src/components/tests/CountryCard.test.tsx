import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { CountryCard } from '../CountryCard';

describe('<CountryCard />', () => {
  const defaultProps = {
    country: 'Vietnam',
    flag: '🇻🇳',
    cities: ['Hanoi', 'Ha Long', 'Ninh Binh'],
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
});
