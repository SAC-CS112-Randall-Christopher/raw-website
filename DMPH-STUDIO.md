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

The owner subsequently approved publication of the finished narrated films:
the 80-second highlight on the homepage and the 3:59 full demo on `/raw-workspace`.
See `docs/raw-workspace-product.md` and the publication receipt. These static
public assets are independent of the protected editor and its owner account.

The paired DMPH branch is `feat/professional-video-editing`. On 2026-10-23 the
existing authorized Cloudflare account deployed this gateway to the existing
`randall-automation-works` Worker. A free named tunnel, `dmph-main-studio`,
connects `dmph-origin.randallautomationworks.com` to MAIN's loopback studio.
The private bindings above are configured. Existing DNS records and public
pages were preserved by that gateway deployment. The later film-publication
lane updates only the public video placement, media and matching metadata.

The actual HTTPS custom-domain browser acceptance passed using disposable
fixture state and credentials on MAIN: required first-password rotation,
private project/media protection, direct-origin/cross-origin rejection,
secure scoped cookies, recording upload/trim, fresh local narration, native
video export, protected MP4/range/caption/editable-package downloads,
offline-host 503, restart persistence and logout revocation. The Python suite
passed 24 tests; this website passed 23 tests, production build, lint and
Wrangler dry run. These are local/runtime checks, not a claim of hosted CI.

The owner's `DMPHstudio` account is initialized. On October 24 the owner used
the protected phone-browser handoff, signed in and changed the temporary
password. A separate status-only observation confirmed `must_change=false`
and cleared temporary expiry, without reading any password or hash. Studio,
voice and tunnel services are running on MAIN. The consumed setup link was
removed; ordinary login now uses the owner's chosen password.

The studio service currently runs from `C:/Projects/DMPH-Phone-Login` through a
private systemd override. Retain that checkout while the service points to it.
Do not reset the permanent owner account or run disposable acceptance on its
port. See [phone setup and owner activation](https://github.com/SAC-CS112-Randall-Christopher/DMPH/blob/feat/dmph-phone-first-login/docs/PHONE_LOGIN.md)
and [draft PR7](https://github.com/SAC-CS112-Randall-Christopher/DMPH/pull/7).
MAIN and its existing WSL launcher must stay running for editing and exports.

The owner is continuing directly in **local Codex on MAIN**, without Desktop
Commander. Use the latest paired DMPH branch's
[local handoff](https://github.com/SAC-CS112-Randall-Christopher/DMPH/blob/feat/professional-video-editing/docs/LOCAL_CODEX_HANDOFF.md)
and [MAIN setup](https://github.com/SAC-CS112-Randall-Christopher/DMPH/blob/feat/professional-video-editing/docs/MAIN_SETUP.md)
for runtime paths, bootstrap, desktop shortcuts, password setup, start/stop and
the actual local acceptance receipts. No cloud credentials or sessions are
transferred through GitHub.
