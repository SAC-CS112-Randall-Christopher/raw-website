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

Independent review accepted both the implementation and the form-Origin
correction. All 31 tests, the build, lint, artifact validation and existing film
hash verification pass. Only the two launch documents use
`strict-origin-when-cross-origin`, because the old `same-origin` policy makes a
cross-origin form send Origin:null. Null remains rejected by the gateways.

Code `c823d97c7ffe50b19d84b6a5c807d248df2ed2ce` is deployed as Worker version
`5acff681-c9af-4d7d-b778-dad919156e91` at 100% via deployment
`bbe9d4c8-904b-403c-bbd7-7f2881b23f43`. Prior version
`dc76b734-f519-46cb-8fdd-5524c20f2fcc` remains available for rollback.
The companion DMPH source is `61c838ce94a8eeb5827a40050a37b9f213475485`.

Studio-to-Social succeeded in the owner's already-signed-in browser without a
second password. After the browser connection restarted, the owner completed
the normal Studio → Social → Editor workflow on their phone and confirmed
**both directions work**. Native composer and mobile-menu checks remain open;
both HTTP directions pass fixture tests. The public Social entry was checked
at desktop and measured 390px width without page-level horizontal overflow.
The DMPH receipt contains screenshot and preservation evidence. No profile was
connected, post published or paid API usage enabled by this change.

Workers Builds passed at receipt head `3bcf7a4`; the deployment was separately
read back and still serves the reviewed version above at 100%.
