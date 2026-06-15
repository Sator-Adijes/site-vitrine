import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('world-atlas/countries-110m.json', () => ({ default: {} }));
vi.mock('react-simple-maps', () => ({
  ComposableMap: ({ children }: { children: React.ReactNode }) => (
    <svg data-testid="composable-map">{children}</svg>
  ),
  Geographies: ({
    children,
  }: {
    children: (args: { geographies: { rsmKey: string; id: string }[] }) => React.ReactNode;
  }) => <g>{children({ geographies: [{ rsmKey: 'geo-704', id: '704' }] })}</g>,
  Geography: ({ fill }: { fill: string }) => <path data-testid="geography" fill={fill} />,
}));

import { CountryMap } from '../CountryMap';

describe('<CountryMap />', () => {
  it('should render the SVG map', () => {
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} />);

    expect(screen.getByTestId('composable-map')).toBeInTheDocument();
  });

  it('should highlight the matching country', () => {
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} />);

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#2563eb');
  });

  it('should not highlight non-matching countries', () => {
    render(<CountryMap isoCodes={['764']} center={[108, 16]} scale={1000} />);

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#d1d5db');
  });
});
