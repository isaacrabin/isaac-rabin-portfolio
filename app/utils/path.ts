export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/isaac-rabin-portfolio' : '';
  return `${basePath}${path}`;
}
