import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'GitHubExplorer',
  },
});

export default api;
