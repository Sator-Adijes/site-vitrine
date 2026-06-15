import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { TimelineItem } from '../TimelineItem';

describe('<TimelineItem />', () => {
  const baseProps = {
    title: 'Développeur FullStack',
    organization: 'hemea',
    period: "2021 - aujourd'hui",
  };

  it('should render the title', () => {
    render(<TimelineItem {...baseProps} />);

    expect(screen.getByText('Développeur FullStack')).toBeInTheDocument();
  });

  it('should render the organization', () => {
    render(<TimelineItem {...baseProps} />);

    expect(screen.getByText('hemea')).toBeInTheDocument();
  });

  it('should render the period', () => {
    render(<TimelineItem {...baseProps} />);

    expect(screen.getByText("2021 - aujourd'hui")).toBeInTheDocument();
  });

  it('should render the description when provided', () => {
    render(<TimelineItem {...baseProps} description="Une description du poste." />);

    expect(screen.getByText('Une description du poste.')).toBeInTheDocument();
  });

  it('should not render a description when not provided', () => {
    render(<TimelineItem {...baseProps} />);

    expect(screen.queryByText('Une description du poste.')).not.toBeInTheDocument();
  });
});
