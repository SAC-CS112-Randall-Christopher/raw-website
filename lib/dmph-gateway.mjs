/** Private studio gateway. Native rendering stays on the owner's existing host. */
export const STUDIO_PREFIX = '/admin/dmph';
const PUBLIC_ORIGIN = 'https://randallautomationworks.com';
const SOCIAL_ORIGIN = 'https://social.randallautomationworks.com';

export async function studioGateway(request, env, fetchOrigin = fetch) {
  const url = new URL(request.url);
  if (url.pathname !== STUDIO_PREFIX && !url.pathname.startsWith(STUDIO_PREFIX + '/')) return null;
  const launchPage = url.pathname === STUDIO_PREFIX + '/social.html';
  const headers = new Headers({
    'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow, noarchive',
    'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'SAMEORIGIN',
    // Form POSTs need a serialized Origin; same-origin referrer policy makes
    // it null across hosts. Only the launch document sends the bare origin.
    'Referrer-Policy': launchPage ? 'strict-origin-when-cross-origin' : 'same-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; media-src 'self' blob:; font-src 'self' data:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'" + (launchPage ? ' ' + SOCIAL_ORIGIN : ''),
  });
  const problem = (message, status) => Response.json({ error: message }, { status, headers });
  if (!['GET', 'POST'].includes(request.method)) return problem('Use GET or POST.', 405);
  if (url.origin !== PUBLIC_ORIGIN) return problem('Open the studio on its configured website.', 403);
  const socialReturn = request.method === 'POST' && url.pathname === STUDIO_PREFIX + '/auth/launch' &&
    !url.search && request.headers.get('Origin') === SOCIAL_ORIGIN;
  if (request.method === 'POST' && request.headers.get('Origin') !== PUBLIC_ORIGIN && !socialReturn) return problem('Open the studio to make changes.', 403);
  let returnBody;
  if (socialReturn) {
    const length = request.headers.get('Content-Length');
    if (request.headers.get('Content-Type')?.split(';')[0] !== 'application/x-www-form-urlencoded' ||
        (length !== null && (!/^\d+$/.test(length) || Number(length) > 512))) return problem('Use the Studio navigation.', 400);
    const reader = request.body?.getReader();
    if (!reader) return problem('Use the Studio navigation.', 400);
    const chunks = []; let size = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 512) { await reader.cancel(); return problem('Workspace handoff is too large.', 413); }
        chunks.push(value);
      }
    } catch { return problem('Workspace handoff was interrupted.', 400); }
    finally { reader.releaseLock(); }
    returnBody = new Uint8Array(size); let offset = 0;
    for (const chunk of chunks) { returnBody.set(chunk, offset); offset += chunk.byteLength; }
    const fields = new URLSearchParams(new TextDecoder().decode(returnBody));
    if ([...fields].length !== 1 || !/^[\w-]{43}$/.test(fields.get('code') || '')) return problem('Use the Studio navigation.', 400);
  }
  if (Number(request.headers.get('Content-Length') || 0) > 90_000_000) return problem('Website imports support files up to 90 MB. Larger recordings can be imported on the local host.', 413);
  if (!env.DMPH_STUDIO_ORIGIN || !env.DMPH_GATEWAY_TOKEN || env.DMPH_GATEWAY_TOKEN.length < 32) {
    return problem('The private studio host is not connected yet.', 503);
  }
  let origin;
  try { origin = new URL(env.DMPH_STUDIO_ORIGIN); } catch { return problem('The private studio host is not configured.', 503); }
  if (origin.protocol !== 'https:' || origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash || origin.origin === PUBLIC_ORIGIN) {
    return problem('The private studio host is not configured.', 503);
  }
  if (url.pathname === STUDIO_PREFIX) return Response.redirect(PUBLIC_ORIGIN + STUDIO_PREFIX + '/', 303);
  origin.pathname = url.pathname.slice(STUDIO_PREFIX.length);
  origin.search = url.search;
  const forwarded = new Headers(request.headers);
  forwarded.delete('Host');
  forwarded.delete('Authorization');
  forwarded.delete('X-Forwarded-Host');
  forwarded.delete('X-Forwarded-Proto');
  forwarded.set('X-DMPH-Gateway', env.DMPH_GATEWAY_TOKEN);
  forwarded.set('X-DMPH-Forwarded-Origin', PUBLIC_ORIGIN);
  forwarded.set('X-DMPH-Actor', request.headers.get('CF-Connecting-IP') || 'website');
  if (socialReturn) forwarded.set('Content-Length', String(returnBody.byteLength));
  try {
    const upstream = await fetchOrigin(new Request(origin, {
      method: request.method, headers: forwarded,
      ...(request.method === 'POST' ? { body: socialReturn ? returnBody : request.body, duplex: 'half' } : {}),
      redirect: 'manual',
    }));
    if (upstream.status >= 500) {
      await upstream.body?.cancel();
      return problem('The private studio host is offline. Saved work remains on its host.', 503);
    }
    const result = new Headers(upstream.headers);
    for (const [name, value] of headers) result.set(name, value);
    const location = result.get('Location');
    if (location && !location.startsWith(STUDIO_PREFIX + '/')) return problem('The studio returned an unexpected redirect.', 502);
    // Preserve server HttpOnly cookies, scoped to /admin/dmph/ with Secure.
    // Credentials and media are never copied to the website asset directory.
    return new Response(upstream.body, { status: upstream.status, headers: result });
  } catch { return problem('The private studio host is offline. Saved work remains on its host.', 503); }
}
