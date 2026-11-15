import test from 'node:test';
import assert from 'node:assert/strict';
import { studioGateway } from '../lib/dmph-gateway.mjs';

const base = 'https://randallautomationworks.com/admin/dmph';
const env = { DMPH_STUDIO_ORIGIN: 'https://studio-origin.example', DMPH_GATEWAY_TOKEN: 'test-only-gateway-token-with-32-characters' };

test('does not intercept public website routes or nearby path names', async () => {
  for (const path of ['/raw-workspace', '/admin/dmph-other']) assert.equal(await studioGateway(new Request('https://randallautomationworks.com' + path), env), null);
});
test('the built website intercepts every private studio route and disallows indexing', async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const bindings = { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } };
  const context = { waitUntil() {}, passThroughOnException() {} };
  for (const path of ['/admin/dmph/', '/admin/dmph/api/state', '/admin/dmph/exports/file.mp4']) {
    const result = await worker.fetch(new Request('https://randallautomationworks.com' + path), bindings, context);
    assert.equal(result.status, 503);assert.match(result.headers.get('X-Robots-Tag'), /noindex/);
  }
  const robots = await worker.fetch(new Request('https://randallautomationworks.com/robots.txt'), bindings, context);
  assert.match(await robots.text(), /Disallow: \/admin\//);
});
test('fails closed without host settings and when the local host is offline', async () => {
  assert.equal((await studioGateway(new Request(base + '/editor.html'), {})).status, 503);
  const result = await studioGateway(new Request(base + '/editor.html'), env, async () => { throw Error('offline'); });
  assert.equal(result.status, 503);assert.match(result.headers.get('Cache-Control'), /no-store/);
  assert.doesNotMatch(await result.text(), /test-only-gateway-token/);
});

test('reports tunnel and host failures as an unavailable private studio', async () => {
  for (const status of [500, 502, 503, 504]) {
    const result = await studioGateway(new Request(base + '/editor.html'), env,
      async () => new Response('upstream diagnostic details', { status }));
    assert.equal(result.status, 503);
    assert.match(result.headers.get('Cache-Control'), /no-store/);
    assert.match(result.headers.get('X-Robots-Tag'), /noindex/);
    assert.doesNotMatch(await result.text(), /upstream diagnostic details/);
  }
});
test('sets trusted gateway headers and preserves protected media range responses', async () => {
  const response = await studioGateway(new Request(base + '/exports/take/film.mp4', { headers: { Range: 'bytes=4-8', 'X-DMPH-Gateway': 'forged', Authorization: 'must-not-forward' } }), env, async request => {
    assert.equal(request.url, 'https://studio-origin.example/exports/take/film.mp4');
    assert.equal(request.headers.get('X-DMPH-Gateway'), env.DMPH_GATEWAY_TOKEN);
    assert.equal(request.headers.get('X-DMPH-Forwarded-Origin'), 'https://randallautomationworks.com');
    assert.equal(request.headers.get('Authorization'), null);assert.equal(request.redirect, 'manual');
    assert.equal(request.headers.get('Range'), 'bytes=4-8');
    return new Response('bytes', { status: 206, headers: { 'Content-Range': 'bytes 4-8/100' } });
  });
  assert.equal(response.status, 206);assert.equal(response.headers.get('Content-Range'), 'bytes 4-8/100');
  assert.match(response.headers.get('X-Robots-Tag'), /noindex/);
});
test('forwards sign-in to the server and preserves scoped secure session cookies', async () => {
  const body = JSON.stringify({ username: 'test', password: 'test-only' });
  const response = await studioGateway(new Request(base + '/api/auth/login', { method: 'POST', body, headers: { Origin: 'https://randallautomationworks.com', 'Content-Type': 'application/json', 'X-DMPH-Local': '1' } }), env, async request => {
    assert.equal(await request.text(), body);
    return Response.json({ must_change: true }, { headers: { 'Set-Cookie': 'dmph_session=test; HttpOnly; Secure; SameSite=Strict; Path=/admin/dmph/' } });
  });
  assert.match(response.headers.get('Set-Cookie'), /HttpOnly; Secure/);
  assert.equal((await response.json()).must_change, true);
});
test('rejects cross-origin changes, unsafe redirects, invalid origins and oversized uploads', async () => {
  assert.equal((await studioGateway(new Request(base + '/api/auth/login', { method: 'POST', body: '{}', headers: { Origin: 'https://attacker.example' } }), env)).status, 403);
  assert.equal((await studioGateway(new Request(base + '/login.html'), env, async () => new Response(null, { status: 302, headers: { Location: 'https://attacker.example' } }))).status, 502);
  for (const origin of ['http://studio-origin.example', 'https://randallautomationworks.com', 'https://user:pass@studio-origin.example']) assert.equal((await studioGateway(new Request(base + '/login.html'), { ...env, DMPH_STUDIO_ORIGIN: origin })).status, 503);
  assert.equal((await studioGateway(new Request(base + '/api/footage', { method: 'POST', headers: { Origin: 'https://randallautomationworks.com', 'Content-Length': '100000000' } }), env)).status, 413);
});

test('permits only the fixed Social form destination on the Studio launch document', async () => {
  for (const path of ['/social.html', '/editor.html', '/login.html']) {
    const result = await studioGateway(new Request(base + path), env, async () => new Response('fixture'));
    const formAction = result.headers.get('Content-Security-Policy').split('form-action ')[1];
    assert.equal(formAction, "'self'" + (path === '/social.html' ? ' https://social.randallautomationworks.com' : ''));
    assert.equal(result.headers.get('Referrer-Policy'),path === '/social.html' ? 'strict-origin-when-cross-origin' : 'same-origin');
  }
});

test('only the exact Social return endpoint accepts a bounded form POST from Social', async () => {
  const body = 'code=' + 'a'.repeat(43);
  const headers = { Origin: 'https://social.randallautomationworks.com', 'Content-Type': 'application/x-www-form-urlencoded' };
  let forwarded = 0;
  const upstream = async request => {
    forwarded++;
    assert.equal(request.url, 'https://studio-origin.example/auth/launch');
    assert.equal(request.headers.get('Origin'), headers.Origin);
    assert.equal(await request.text(), body);
    return new Response(null, { status: 303, headers: { Location: '/admin/dmph/editor.html', 'Set-Cookie': 'dmph_session=fixture; HttpOnly; Secure; SameSite=Strict; Path=/admin/dmph/' } });
  };
  const result = await studioGateway(new Request(base + '/auth/launch', { method: 'POST', body, headers }), env, upstream);
  assert.equal(result.status, 303);assert.match(result.headers.get('Set-Cookie'), /HttpOnly; Secure/);
  for (const path of ['/api/auth/login', '/api/auth/password', '/api/jobs', '/auth/launch?unexpected=1', '/auth/launch/']) {
    assert.equal((await studioGateway(new Request(base + path, { method: 'POST', body, headers }), env, upstream)).status, 403);
  }
  for (const origin of ['https://attacker.example', 'https://social.randallautomationworks.com.attacker.example', 'null']) {
    assert.equal((await studioGateway(new Request(base + '/auth/launch', { method: 'POST', body, headers: { ...headers, Origin: origin } }), env, upstream)).status, 403);
  }
  for (const payload of ['code=invalid', body + '&code=' + 'b'.repeat(43), 'x'.repeat(513)]) {
    assert.ok([400, 413].includes((await studioGateway(new Request(base + '/auth/launch', { method: 'POST', body: payload, headers }), env, upstream)).status));
  }
  assert.equal((await studioGateway(new Request(base + '/auth/launch', { method: 'POST', body, headers: { ...headers, 'Content-Type': 'application/json' } }), env, upstream)).status, 400);
  assert.equal(forwarded, 1);
});
