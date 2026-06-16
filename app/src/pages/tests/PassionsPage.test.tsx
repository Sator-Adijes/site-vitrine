import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { PassionsPage } from '../PassionsPage';

const renderWithRouter = (): ReturnType<typeof render> =>
  render(
    <MemoryRouter>
      <PassionsPage />
    </MemoryRouter>,
  );

describe('<PassionsPage />', () => {
  it('should render the heading', () => {
    renderWithRouter();

    expect(screen.getByText('Mes passions')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    renderWithRouter();

    expect(screen.getByText('Découvrez ce qui me passionne')).toBeInTheDocument();
  });

  it('should render a main landmark', () => {
    renderWithRouter();

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render all passion cards', () => {
    renderWithRouter();

    expect(screen.getByText('Sports Mécaniques')).toBeInTheDocument();
    expect(screen.getByText('Plongée')).toBeInTheDocument();
    expect(screen.getByText('Mangas')).toBeInTheDocument();
    expect(screen.getByText('Cuisine')).toBeInTheDocument();
    expect(screen.getByText('Vélo')).toBeInTheDocument();
    expect(screen.getByText('Escalade')).toBeInTheDocument();
  });

  it('should render 6 passion images', () => {
    renderWithRouter();

    expect(screen.getAllByRole('img')).toHaveLength(6);
  });

  it('should render the voyage card as a link', () => {
    renderWithRouter();

    expect(screen.getByRole('link', { name: /Mon voyage/ })).toBeInTheDocument();
  });

  it('should link the voyage card to /passions/voyage', () => {
    renderWithRouter();

    const link = screen.getByRole('link', { name: /Mon voyage/ });
    expect(link).toHaveAttribute('href', '/passions/voyage');
  });
});
