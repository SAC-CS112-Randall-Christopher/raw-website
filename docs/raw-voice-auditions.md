# Downloadable RAW narration auditions

The owner requested a replacement for the rejected KittenTTS voice, then asked
for files that can be downloaded on a phone. The new unlisted listening page is
`/products/raw-workspace/voice-auditions/`. It uses ordinary MP3 players,
same-origin download buttons, a ZIP containing both MP3s and the transcript,
and `noindex,nofollow` metadata.

The source is DMPH's `deliverables/raw-voice-refresh/`. Both files are real,
locally generated Qwen3-TTS 1.7B CustomVoice auditions, using built-in English
speakers without a human reference recording. Chris selected Ryan after
listening; Ryan is the production default. The page also provides a real Ryan
date check saying October twenty-eighth and October twenty-sixth. Displayed
dates remain unchanged. The samples have no music, no speed
adjustment and no pitch adjustment. The existing website films are retained
while the owner listens to these samples.

| File | Duration | Bytes | SHA-256 |
| --- | ---: | ---: | --- |
| qwen3-aiden.mp3 | 31.600 s | 759789 | 24f8adf591cf7973b608fb53f9e68e4711c1ac872fc4f7b8804716526cf31987 |
| qwen3-ryan.mp3 | 29.440 s | 707949 | b218d35c6bed7e48f178ef1924c2585949b8a16109ccb922c583f89f3aafadc6 |

The verified website build and all 28 tests passed. This addition changes only
static review/download assets. It uses the existing Worker account, domain,
gateway, bindings and deployment settings. No paid narration service or new
hosting subscription is used. Source-model hashes, original WAV takes, local
speech-recognition checks, the independent code review and the separate
production-command proof are retained in DMPH.

Technical checks establish decoding and availability. Owner listening approval
of the voice and a revised full-film review remain separate acceptance steps.
