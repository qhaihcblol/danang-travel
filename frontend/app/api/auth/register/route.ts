import { proxyAuthRequest } from '../_utils';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  return proxyAuthRequest(request, {
    method: 'POST',
    path: '/api/auth/register',
  });
}
