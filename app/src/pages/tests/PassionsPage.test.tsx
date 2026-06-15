import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { PassionsPage } from '../PassionsPage';

describe('<PassionsPage />', () => {
  it('should render the heading', () => {
    render(<PassionsPage />);

    expect(screen.getByText('Mes passions')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<PassionsPage />);

    expect(screen.getByText('Découvrez ce qui me passionne')).toBeInTheDocument();
  });

  it('should render a main landmark', () => {
    render(<PassionsPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render all passion cards', () => {
    render(<PassionsPage />);

    expect(screen.getByText('Voitures')).toBeInTheDocument();
    expect(screen.getByText('Plongée')).toBeInTheDocument();
    expect(screen.getByText('Mangas')).toBeInTheDocument();
    expect(screen.getByText('Cuisine')).toBeInTheDocument();
    expect(screen.getByText('Vélo')).toBeInTheDocument();
    expect(screen.getByText('Escalade')).toBeInTheDocument();
  });

  it('should render 6 cards', () => {
    render(<PassionsPage />);

    expect(screen.getAllByText('Image à venir')).toHaveLength(6);
  });
});
