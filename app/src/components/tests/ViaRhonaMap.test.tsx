import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ViaRhonaMap } from '../ViaRhonaMap';

vi.mock('react-leaflet', () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map-container">{children}</div>
  ),
  TileLayer: () => null,
  Polyline: () => <div data-testid="route-polyline" />,
  CircleMarker: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="stage-marker">{children}</div>
  ),
  Tooltip: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

describe('<ViaRhonaMap />', () => {
  it('should render the map container', () => {
    render(<ViaRhonaMap />);

    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });

  it('should render the route polyline', () => {
    render(<ViaRhonaMap />);

    expect(screen.getByTestId('route-polyline')).toBeInTheDocument();
  });

  it('should render all stage markers', () => {
    render(<ViaRhonaMap />);

    expect(screen.getAllByTestId('stage-marker')).toHaveLength(4);
  });

  it('should render city labels', () => {
    render(<ViaRhonaMap />);

    expect(screen.getByText('Genève')).toBeInTheDocument();
    expect(screen.getByText('Lyon')).toBeInTheDocument();
  });
});
