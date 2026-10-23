# Private DMPH Studio gateway

Prepared address: `https://randallautomationworks.com/admin/dmph/`.

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

This branch also replaces the existing RAW product-page film, poster and
captions with the new 24-second, 1080p/30 fps MLT export and local VoiceStudio
English narration. Product claims and the destination URL are unchanged. The
film uses actual source captures and sample business data.

The paired DMPH branch is `feat/professional-video-editing`; its `deploy/` folder
has the host instructions and tunnel/environment templates. Both the public
site production build and gateway contract tests pass locally. The browser
password flow also passes a local HTTPS gateway simulation. Public-domain
hosting remains unverified until the owner's Cloudflare access and rendering
computer are available. Do not represent this development workspace as a
permanent production server.
