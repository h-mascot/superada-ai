const MODS_PASSWORD_SHA256 = 'bea922513f96a9030dab3cbb37a2f5f36f1445be916d24dd35ea5c621c878e7a';
const REALM = 'OpenClaw mods';

export const config = {
  matcher: ['/mods/:path*'],
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

export default async function middleware(request: Request) {
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
