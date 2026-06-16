import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { CountryMap } from '../CountryMap';

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
  Marker: ({
    children,
    coordinates,
  }: {
    children: React.ReactNode;
    coordinates: [number, number];
  }) => (
    <g data-testid="marker" data-coordinates={coordinates.join(',')}>
      {children}
    </g>
  ),
}));

describe('<CountryMap />', () => {
  it('should render the SVG map', () => {
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} />);

    expect(screen.getByTestId('composable-map')).toBeInTheDocument();
  });

  it('should highlight the matching country with the default color', () => {
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} />);

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#2563eb');
  });

  it('should highlight the matching country with a custom color', () => {
    render(
      <CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} fillHighlight="#bd8f65" />,
    );

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#bd8f65');
  });

  it('should not highlight non-matching countries', () => {
    render(<CountryMap isoCodes={['764']} center={[108, 16]} scale={1000} />);

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#d1d5db');
  });

  it('should use a custom fillDefault for non-matching countries', () => {
    render(<CountryMap isoCodes={['764']} center={[108, 16]} scale={1000} fillDefault="#e8ddd5" />);

    const geo = screen.getByTestId('geography');
    expect(geo).toHaveAttribute('fill', '#e8ddd5');
  });

  it('should render city markers', () => {
    const cities = [
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] as [number, number] },
      { name: 'Ha Long', coordinates: [107.0843, 20.9517] as [number, number] },
    ];
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} cities={cities} />);

    expect(screen.getAllByTestId('marker')).toHaveLength(2);
  });

  it('should deduplicate city markers by name', () => {
    const cities = [
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] as [number, number] },
      { name: 'Hanoi', coordinates: [105.8342, 21.0278] as [number, number] },
      { name: 'Ha Long', coordinates: [107.0843, 20.9517] as [number, number] },
    ];
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} cities={cities} />);

    expect(screen.getAllByTestId('marker')).toHaveLength(2);
  });

  it('should render no markers when cities is empty', () => {
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} cities={[]} />);

    expect(screen.queryAllByTestId('marker')).toHaveLength(0);
  });

  it('should render country labels', () => {
    const labels = [
      { name: 'Vietnam', coordinates: [108.5, 13.0] as [number, number] },
      { name: 'Thaïlande', coordinates: [101.0, 15.0] as [number, number] },
    ];
    render(<CountryMap isoCodes={['704']} center={[108, 16]} scale={1000} labels={labels} />);

    expect(screen.getByText('Vietnam')).toBeInTheDocument();
    expect(screen.getByText('Thaïlande')).toBeInTheDocument();
    expect(screen.getAllByTestId('marker')).toHaveLength(2);
  });

  it('should render both city markers and labels', () => {
    const cities = [{ name: 'Hanoi', coordinates: [105.8342, 21.0278] as [number, number] }];
    const labels = [{ name: 'Vietnam', coordinates: [108.5, 13.0] as [number, number] }];
    render(
      <CountryMap
        isoCodes={['704']}
        center={[108, 16]}
        scale={1000}
        cities={cities}
        labels={labels}
      />,
    );

    expect(screen.getAllByTestId('marker')).toHaveLength(2);
    expect(screen.getByText('Vietnam')).toBeInTheDocument();
  });
});
