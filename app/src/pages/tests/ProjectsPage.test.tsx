import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { fetchUserRepos } from '@/services/github';

import { ProjectsPage } from '../ProjectsPage';

vi.mock('@/services/github', () => ({
  fetchUserRepos: vi.fn(),
}));

const mockedFetchUserRepos = vi.mocked(fetchUserRepos);

const renderWithQuery = (ui: React.ReactElement): ReturnType<typeof render> => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

describe('<ProjectsPage />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a main landmark', () => {
    mockedFetchUserRepos.mockResolvedValue([]);
    renderWithQuery(<ProjectsPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render the heading', () => {
    mockedFetchUserRepos.mockResolvedValue([]);
    renderWithQuery(<ProjectsPage />);

    expect(screen.getByText('Mes projets')).toBeInTheDocument();
  });

  it('should show a loading state', () => {
    mockedFetchUserRepos.mockReturnValue(new Promise(() => {}));
    renderWithQuery(<ProjectsPage />);

    expect(screen.getByText('Chargement des projets…')).toBeInTheDocument();
  });

  it('should show an error state', async () => {
    mockedFetchUserRepos.mockRejectedValue(new Error('API error'));
    renderWithQuery(<ProjectsPage />);

    await waitFor(() => {
      expect(
        screen.getByText('Impossible de charger les projets. Veuillez réessayer.'),
      ).toBeInTheDocument();
    });
  });

  it('should render project cards on success', async () => {
    mockedFetchUserRepos.mockResolvedValue([
      {
        id: 1,
        name: 'scuba_find',
        description: null,
        language: 'JavaScript',
        stargazers_count: 0,
        html_url: 'https://github.com/Sator-Adijes/scuba_find',
        updated_at: '2024-06-01T00:00:00Z',
      },
    ]);
    renderWithQuery(<ProjectsPage />);

    await waitFor(() => {
      expect(screen.getByText('scuba_find')).toBeInTheDocument();
    });
  });
});
