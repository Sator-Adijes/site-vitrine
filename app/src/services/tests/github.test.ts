import axios from 'axios';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { type GitHubRepo } from '../github';

vi.mock('axios');

const mockedAxios = vi.mocked(axios, true);

describe('fetchUserRepos', () => {
  const mockRepos: GitHubRepo[] = [
    {
      id: 1,
      name: 'scuba_find',
      description: null,
      language: 'JavaScript',
      stargazers_count: 0,
      html_url: 'https://github.com/Sator-Adijes/scuba_find',
      updated_at: '2024-01-01T00:00:00Z',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch repos for a given username', async () => {
    const createMock = vi.fn().mockReturnValue({
      get: vi.fn().mockResolvedValue({ data: mockRepos }),
    });
    mockedAxios.create = createMock;

    const { fetchUserRepos: freshFetch } = await import('../github');
    const result = await freshFetch('Sator-Adijes');

    expect(result).toEqual(mockRepos);
  });
});
