import { describe, it, expect } from 'vitest';

import { api } from '../api';

describe('api', () => {
  it('should have the correct base URL', () => {
    expect(api.defaults.baseURL).toBe('https://api.example.com');
  });

  it('should have the correct timeout', () => {
    expect(api.defaults.timeout).toBe(15_000);
  });

  it('should set Content-Type to application/json', () => {
    expect(api.defaults.headers['Content-Type']).toBe('application/json');
  });
});
