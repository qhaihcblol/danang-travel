import { proxyAuthRequest } from '../_utils';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  return proxyAuthRequest(request, {
    method: 'GET',
    path: '/api/auth/me',
    forwardAuthorization: true,
  });
}
