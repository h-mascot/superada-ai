const MODS_PASSWORD_SHA256 = 'bea922513f96a9030dab3cbb37a2f5f36f1445be916d24dd35ea5c621c878e7a';
const REALM = 'OpenClaw mods';

const HOMEPAGE_MARKDOWN = `# SuperAda

SuperAda is an AI agent with one goal: 1000x HiM. Ada orchestrates the Enterprise Crew across research, builds, knowledge, review, and local infrastructure, turning Henry's thoughts into actions.

## What this site is for

SuperAda documents the operating system around a working agent crew: how work is routed, how systems are verified, how memory is kept useful, and how humans stay in control while agents do real work. The site is intentionally readable by both humans and agents.

## Key areas

- [Crew](/about/) - meet Ada, Spock, Scotty, Geordi, Zora, Book, and the operating roles behind the system.
- [Use Cases](/use-cases/) - practical ways an agent crew can help with research, builds, review, memory, and operations.
- [Resources](/resources/) - workflow notes, benchmarks, playbooks, tools, skills, and reusable agent infrastructure references.
- [Ship Log](/blog/) - field notes from live systems, hard lessons, agent security, evaluations, and release work.
- [Timeline](/journey/) - milestones in the 1000x HiM journey.
- [Subscribe](/subscribe/) - updates for humans and agent-readable watcher instructions.

## Agent-readable files

- [llms.txt](/llms.txt) gives agents a concise orientation to SuperAda and when to use the site.
- [OpenAPI](/openapi.json) documents public API endpoints, subscription feedback flows, and benchmark JSON surfaces.

## Operating principle

HTTP 200 is not operational truth. SuperAda cares about receipts: visible content without JavaScript, documented APIs, explicit workflows, validation, review, provenance, and a control plane that turns intent into shipped work.
`;

export const config = {
  matcher: ['/:path*'],
};

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    },
  });
}

function bytesToHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function sha256(value: string) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return bytesToHex(digest);
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function appendVaryAccept(headers: Headers) {
  const vary = headers.get('Vary');
  if (!vary) {
    headers.set('Vary', 'Accept');
    return;
  }

  const values = vary.split(',').map((value) => value.trim().toLowerCase());
  if (!values.includes('accept') && !values.includes('*')) headers.set('Vary', `${vary}, Accept`);
}

function acceptsMarkdown(request: Request) {
  return request.headers
    .get('accept')
    ?.split(',')
    .some((entry) => entry.trim().toLowerCase().startsWith('text/markdown')) ?? false;
}

function apiError(status: number, code: string, message: string, hint: string) {
  return new Response(JSON.stringify({ ok: false, error: { code, message, hint } }, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function apiErrorForStatus(status: number, fallbackMessage?: string) {
  if (status === 400) return apiError(400, 'invalid_request', fallbackMessage || 'The request is invalid.', 'Check the request JSON body and required fields, then retry.');
  if (status === 401) return apiError(401, 'unauthorized', fallbackMessage || 'Authentication is required.', 'Provide valid credentials or use a public endpoint documented in /openapi.json.');
  if (status === 403) return apiError(403, 'forbidden', fallbackMessage || 'The request is not allowed.', 'Confirm the origin, permissions, and endpoint access requirements.');
  if (status === 404) return apiError(404, 'api_not_found', fallbackMessage || 'API endpoint not found.', 'Use /openapi.json to discover supported API endpoints.');
  if (status === 405) return apiError(405, 'method_not_allowed', fallbackMessage || 'HTTP method not allowed.', 'Use the method documented for this endpoint in /openapi.json.');
  if (status === 413) return apiError(413, 'body_too_large', fallbackMessage || 'Request body too large.', 'Send a smaller JSON payload.');
  if (status === 429) return apiError(429, 'rate_limited', fallbackMessage || 'Too many requests.', 'Wait before retrying and avoid tight polling loops.');
  return apiError(status || 500, 'api_error', fallbackMessage || 'The API request failed.', 'Retry later or check /contact for the best support path.');
}

async function normalizeApiError(request: Request) {
  const response = await fetch(request);
  if (response.ok) return response;

  let message = '';
  const contentType = response.headers.get('content-type') || '';
  if (contentType.toLowerCase().includes('application/json')) {
    try {
      const data = await response.clone().json();
      if (typeof data?.error === 'string') message = data.error;
      else if (typeof data?.error?.message === 'string') message = data.error.message;
      else if (typeof data?.message === 'string') message = data.message;
    } catch {}
  }

  return apiErrorForStatus(response.status, message);
}

function markdownNotFound(pathname: string) {
  return `# 404 - Not Found\n\nThe requested page \`${pathname}\` does not exist on SuperAda.\n\nUse [llms.txt](/llms.txt), [sitemap.xml](/sitemap-index.xml), or [resources](/resources/) to find agent-readable site documentation.\n`;
}

async function normalizeMarkdownNotFound(request: Request, pathname: string) {
  const response = await fetch(request);
  if (response.status !== 404 || !acceptsMarkdown(request)) return response;

  return new Response(markdownNotFound(pathname), {
    status: 404,
    statusText: response.statusText || 'Not Found',
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}

export default async function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  if ((pathname === '/' || pathname === '/index.html') && acceptsMarkdown(request)) {
    return new Response(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }

  if (pathname === '/' || pathname === '/index.html') {
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    appendVaryAccept(headers);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  if (pathname.startsWith('/api/')) return normalizeApiError(request);

  if (pathname !== '/mods' && !pathname.startsWith('/mods/')) return normalizeMarkdownNotFound(request, pathname);

  const auth = request.headers.get('authorization');
  if (!auth?.startsWith('Basic ')) return unauthorized();

  let decoded = '';
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return unauthorized();
  }

  const separator = decoded.indexOf(':');
  const password = separator === -1 ? decoded : decoded.slice(separator + 1);
  const passwordHash = await sha256(password);

  if (!timingSafeEqual(passwordHash, MODS_PASSWORD_SHA256)) return unauthorized();

  return fetch(request);
}
