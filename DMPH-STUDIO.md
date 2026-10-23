# Private DMPH Studio gateway

Deployed gateway: `https://randallautomationworks.com/admin/dmph/`.

`worker/index.ts` intercepts only that exact path prefix before the public
website router. The private host checks the administrator's server-side session
for the editor, projects, recordings, narration, jobs and finished files. The
website Worker never embeds a password, synthesizes audio or runs native video
tools. Public product pages continue through their normal handler.

Set these in the existing Worker's private configuration:

| Setting | Purpose |
| --- | --- |
| `DMPH_STUDIO_ORIGIN` | HTTPS origin of the owner's existing rendering computer, exposed through an owner-controlled tunnel |
| `DMPH_GATEWAY_TOKEN` | Random shared secret, at least 32 characters, also configured on the private host |

Do not use a `NEXT_PUBLIC_` variable. Do not commit the settings. No new paid
service, database, storage bucket or compute instance is required by this code.
The existing website and machine must have available capacity. No plan upgrade
or paid fallback is implemented.

The gateway strips any caller-supplied authorization and replaces gateway
headers with its own values. It rejects cross-origin changes, disallows unsafe
upstream redirects, streams media/range responses and applies no-store,
noindex, same-origin frame and content-security headers. Website imports are
capped at 90 MB. Missing settings or an offline machine return 503. They do not
serve an unlocked editor or fabricate an available worker.

The Python studio must run with `--require-auth`,
`DMPH_PUBLIC_ORIGIN=https://randallautomationworks.com`, and the same private
gateway token. It accepts website traffic only when those trusted headers
match. Its cookies are Secure, HttpOnly, SameSite=Strict, scoped to
`/admin/dmph/`, with mandatory first-login password replacement. The intended
account is initialized privately on that host as `DMPHstudio`; its password is
not contained in either repository.

This implements an administrator sign-in. An OIDC/SAML identity provider has
not been configured, so provider-based SSO is not claimed.

The public RAW product-page film, poster and captions are preserved from the
current public baseline. Refreshed narrated films remain in the paired private
DMPH repository for owner listening review before public publication. The
protected studio integration does not require changing public promotional media.

The paired DMPH branch is `feat/professional-video-editing`. On 2026-10-23 the
existing authorized Cloudflare account deployed this gateway to the existing
`randall-automation-works` Worker. A free named tunnel, `dmph-main-studio`,
connects `dmph-origin.randallautomationworks.com` to MAIN's loopback studio.
The private bindings above are configured. Existing DNS records and public
pages were preserved; the public RAW film still matches the main baseline.

The actual HTTPS custom-domain browser acceptance passed using disposable
fixture state and credentials on MAIN: required first-password rotation,
private project/media protection, direct-origin/cross-origin rejection,
secure scoped cookies, recording upload/trim, fresh local narration, native
video export, protected MP4/range/caption/editable-package downloads,
offline-host 503, restart persistence and logout revocation. The Python suite
passed 24 tests; this website passed 23 tests, production build, lint and
Wrangler dry run. These are local/runtime checks, not a claim of hosted CI.

The owner's `DMPHstudio` account still awaits password entry at a hidden local
prompt. The owner host remains stopped, so the public studio currently
returns 503. Once initialized and started from MAIN's desktop shortcut it uses
the already deployed route. MAIN and its WSL launcher must stay running for
editing and exports. This does not make the computer an always-on server.

The owner is continuing directly in **local Codex on MAIN**, without Desktop
Commander. Use the latest paired DMPH branch's
[local handoff](https://github.com/SAC-CS112-Randall-Christopher/DMPH/blob/feat/professional-video-editing/docs/LOCAL_CODEX_HANDOFF.md)
and [MAIN setup](https://github.com/SAC-CS112-Randall-Christopher/DMPH/blob/feat/professional-video-editing/docs/MAIN_SETUP.md)
for runtime paths, bootstrap, desktop shortcuts, password setup, start/stop and
the actual local acceptance receipts. No cloud credentials or sessions are
transferred through GitHub.
