import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import { PassionCard } from '../PassionCard';

describe('<PassionCard />', () => {
  it('should render the label', () => {
    render(<PassionCard label="Voitures" />);

    expect(screen.getByText('Voitures')).toBeInTheDocument();
  });

  it('should render the placeholder when no image is provided', () => {
    render(<PassionCard label="Voitures" />);

    expect(screen.getByText('Image à venir')).toBeInTheDocument();
  });

  it('should render the image when provided', () => {
    render(<PassionCard label="Voitures" image="/voitures.jpg" />);

    const img = screen.getByRole('img', { name: 'Voitures' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/voitures.jpg');
  });

  it('should not render the placeholder when an image is provided', () => {
    render(<PassionCard label="Voitures" image="/voitures.jpg" />);

    expect(screen.queryByText('Image à venir')).not.toBeInTheDocument();
  });

  it('should render a custom imageElement instead of the placeholder', () => {
    render(<PassionCard label="Voitures" imageElement={<div>custom</div>} />);

    expect(screen.getByText('custom')).toBeInTheDocument();
    expect(screen.queryByText('Image à venir')).not.toBeInTheDocument();
  });

  it('should render a custom imageElement instead of the image', () => {
    render(<PassionCard label="Voitures" image="/voitures.jpg" imageElement={<div>custom</div>} />);

    expect(screen.getByText('custom')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should render as a link when to is provided', () => {
    render(
      <MemoryRouter>
        <PassionCard label="Voitures" to="/voitures" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /Voitures/ })).toBeInTheDocument();
  });

  it('should render as a div when to is not provided', () => {
    render(<PassionCard label="Voitures" />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
