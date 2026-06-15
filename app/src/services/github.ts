import axios from 'axios';

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
};

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  const { data } = await githubApi.get<GitHubRepo[]>(`/users/${username}/repos?sort=updated`);
  return data;
};
