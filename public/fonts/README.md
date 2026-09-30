# Self-hosted fonts

These are the existing Manrope and Source Serif 4 variable WOFF2 files from
the repository's committed `.vinext/fonts` cache. Their public URLs avoid the
original build-machine paths and require no build-time Google Fonts request.
The original Unicode subsets and variable weight ranges are preserved.

The Latin subsets are preloaded; other subsets load through their CSS Unicode
ranges when needed. `app/fonts.css` contains the declarations, and
`components/font-preloads.tsx` supplies React's resource hints.

License sources:

- [Manrope OFL](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt)
- [Source Serif 4 OFL](https://github.com/google/fonts/blob/main/ofl/sourceserif4/OFL.txt)
