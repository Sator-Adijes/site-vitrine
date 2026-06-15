import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { VoyagePage } from '../VoyagePage';

describe('<VoyagePage />', () => {
  it('should render a main landmark', () => {
    render(<VoyagePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the heading', () => {
    render(<VoyagePage />);
    expect(screen.getByRole('heading', { name: 'Mon voyage' })).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<VoyagePage />);
    expect(screen.getByText('8 mois en Asie du Sud-Est, sans avion')).toBeInTheDocument();
  });

  it('should render all country sections', () => {
    render(<VoyagePage />);
    expect(screen.getByText('Thaïlande')).toBeInTheDocument();
    expect(screen.getByText('Laos')).toBeInTheDocument();
    expect(screen.getByText('Vietnam')).toBeInTheDocument();
    expect(screen.getByText('Cambodge')).toBeInTheDocument();
    expect(screen.getByText('Malaisie & Singapour')).toBeInTheDocument();
    expect(screen.getByText('Indonésie')).toBeInTheDocument();
  });
});
