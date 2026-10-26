# DMPH Studio / Social handoff

The owner asked for Social to be part of the Studio navigation and sign-in.
This lane changes only the private gateway. The public website, contact flow,
media, R2 routes and search metadata retain their current behavior.

- `/admin/dmph/social.html` may submit forms only to itself or the fixed
  `https://social.randallautomationworks.com` origin.
- Only POST `/admin/dmph/auth/launch`, with no query, may originate from that
  exact Social origin. Its form body is bounded to 512 bytes and one 43-character
  code. The private Studio consumes and verifies the one-use code and issuer.
- Every other write keeps the existing same-origin restriction. Passwords and
  session tokens are never included in navigation URLs. HttpOnly host-only
  cookies and no-store/noindex responses are preserved.

Baseline is `a42904d025bc11f4864e8808767aa1c72f63c948`, matching the open
copper website PR25 head at verification. Tests cover the built Worker routing,
the two new boundary rules and the existing public/media paths. The DMPH
companion is branch `feat/unified-dmph-workspace` in the DMPH repository.

Activation and live browser receipt will be added after review.
