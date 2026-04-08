const DEFAULT_BACKEND_API_BASE_URL = 'http://127.0.0.1:8000';

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, '');
}

export function getBackendApiBaseUrl() {
  return trimTrailingSlash(
    process.env.BACKEND_API_BASE_URL ??
      process.env.API_BASE_URL ??
      DEFAULT_BACKEND_API_BASE_URL,
  );
}

export function getBackendApiUrl(path: string) {
  return `${getBackendApiBaseUrl()}${path.startsWith('/') ? path : `/${path}`}`;
}
