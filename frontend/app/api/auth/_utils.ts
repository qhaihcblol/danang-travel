import { NextResponse } from 'next/server';
import { getBackendApiUrl } from '@/lib/backend-api';

type ProxyAuthRequestOptions = {
  method: 'GET' | 'POST';
  path: string;
  forwardAuthorization?: boolean;
};

function buildProxyHeaders(
  request: Request,
  forwardAuthorization: boolean,
): Headers {
  const headers = new Headers();
  const contentType = request.headers.get('content-type');
  if (contentType) {
    headers.set('Content-Type', contentType);
  }

  if (forwardAuthorization) {
    const authorization = request.headers.get('authorization');
    if (authorization) {
      headers.set('Authorization', authorization);
    }
  }

  return headers;
}

async function buildProxyBody(request: Request, method: 'GET' | 'POST') {
  if (method === 'GET') {
    return undefined;
  }

  const body = await request.text();
  return body.length > 0 ? body : undefined;
}

export async function proxyAuthRequest(
  request: Request,
  { method, path, forwardAuthorization = false }: ProxyAuthRequestOptions,
) {
  try {
    const response = await fetch(getBackendApiUrl(path), {
      method,
      headers: buildProxyHeaders(request, forwardAuthorization),
      body: await buildProxyBody(request, method),
      cache: 'no-store',
    });

    const responseText = await response.text();
    const contentType =
      response.headers.get('content-type') ?? 'application/json; charset=utf-8';

    return new NextResponse(responseText, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to reach authentication service.',
      },
      { status: 502 },
    );
  }
}
