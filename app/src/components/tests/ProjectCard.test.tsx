import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ProjectCard } from '../ProjectCard';

const baseProps = {
  name: 'scuba_find',
  description: 'Une app de plongée',
  language: 'JavaScript',
  stars: 3,
  url: 'https://github.com/Sator-Adijes/scuba_find',
  updatedAt: '2024-06-01T00:00:00Z',
};

describe('<ProjectCard />', () => {
  it('should render the project name', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('scuba_find')).toBeInTheDocument();
  });

  it('should render the description when provided', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('Une app de plongée')).toBeInTheDocument();
  });

  it('should not render a description when null', () => {
    render(<ProjectCard {...baseProps} description={null} />);

    expect(screen.queryByText('Une app de plongée')).not.toBeInTheDocument();
  });

  it('should render the language', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('should render the star count', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('⭐ 3')).toBeInTheDocument();
  });

  it('should link to the GitHub repo', () => {
    render(<ProjectCard {...baseProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/Sator-Adijes/scuba_find');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
