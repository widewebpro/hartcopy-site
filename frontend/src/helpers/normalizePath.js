export const normalizePath = (path = '') =>
  path === '/' ? '/' : path.replace(/\/$/, '');