import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

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
});
