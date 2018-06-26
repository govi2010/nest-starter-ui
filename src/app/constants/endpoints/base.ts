export const API_URL = 'http://localhost:3001/';

export function getUrl(url: string = '') {
  return `${API_URL}${url}`;
}
