"""Check real desktop/mobile video playback and client navigation on a preview or live site.

Requires the existing local Playwright/Chromium runtime. Reads public pages only.
--complete additionally plays both desktop films through at normal speed.
"""
import argparse
import json
import time
from pathlib import Path
from urllib.parse import urlsplit

from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base-url', required=True)
parser.add_argument('--label', choices=['preview', 'live'], required=True)
parser.add_argument('--chromium', default='/home/rawfounder/.local/share/dmph/bin/chromium')
parser.add_argument('--complete', action='store_true')
args = parser.parse_args()
base = args.base_url.rstrip('/')
address = urlsplit(base)
assert not address.path and not address.query and not address.fragment
assert (address.scheme == 'http' and address.hostname == '127.0.0.1' and address.port) or (address.scheme == 'https' and address.netloc == 'randallautomationworks.com')
root = Path(__file__).resolve().parents[1]
out = root / 'outputs' / ('browser-' + args.label)
out.mkdir(parents=True, exist_ok=True)
errors = []
result = {'base_url': base, 'checks': [], 'page_errors': errors}


def inspect_player(page, name, duration, cues, label):
    video = page.locator('video')
    assert video.count() == 1
    assert video.get_attribute('preload') == 'none'
    assert video.get_attribute('autoplay') is None
    assert video.get_attribute('controls') is not None
    assert video.get_attribute('aria-label')
    before = video.evaluate('(v,name) => ({paused:v.paused,requested:performance.getEntriesByType("resource").filter(r=>r.name.endsWith(name)).length})', name)
    assert before['paused'] and before['requested'] == 0, before
    video.scroll_into_view_if_needed()
    video.focus()
    video.press('Space')  # actual keyboard interaction with native controls
    page.wait_for_function('document.querySelector("video").currentTime > 1', timeout=45000)
    metadata = video.evaluate('v => ({src:v.currentSrc,duration:v.duration,width:v.videoWidth,height:v.videoHeight})')
    assert metadata['src'].endswith(name), metadata
    assert abs(metadata['duration'] - duration) < .05, metadata
    assert [metadata['width'], metadata['height']] == [1920, 1080], metadata
    page.wait_for_function('document.querySelector("video").textTracks[0]?.cues?.length > 0', timeout=20000)
    caption = video.evaluate('v=>({cues:v.textTracks[0].cues.length,mode:v.textTracks[0].mode})')
    assert caption == {'cues': cues, 'mode': 'showing'}, caption
    video.evaluate('v=>{v.pause();v.currentTime=v.duration*.55;}')
    page.wait_for_function('Math.abs(document.querySelector("video").currentTime-document.querySelector("video").duration*.55)<.1 && document.querySelector("video").readyState>=2')
    page.wait_for_timeout(300)
    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), label
    page.screenshot(path=str(out / (label + '.png')))
    ranged = page.evaluate('''async url => {
      const r=await fetch(url,{headers:{Range:'bytes=1024-2047'},signal:AbortSignal.timeout(20000)});
      return {status:r.status,range:r.headers.get('content-range'),type:r.headers.get('content-type'),bytes:[...new Uint8Array(await r.arrayBuffer())]};
    }''', metadata['src'])
    assert ranged['status'] == 206 and ranged['range'].startswith('bytes 1024-2047/'), ranged['status']
    assert bytes(ranged['bytes']) == (root / 'public/products/raw-workspace' / name).read_bytes()[1024:2048]
    video.evaluate('v=>{v.currentTime=v.duration-1.2;return v.play();}')
    page.wait_for_function('document.querySelector("video").ended', timeout=20000)
    assert video.evaluate('v=>v.error===null')
    record = {'label': label, **metadata, 'english_captions': caption, 'range_status': ranged['status'],
              'range_matches_packaged_bytes': True, 'keyboard_playback': True, 'seek_to_middle_and_end': True,
              'no_horizontal_overflow': True, 'no_autoplay_or_initial_mp4_download': True}
    result['checks'].append(record)
    print(json.dumps(record), flush=True)


with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=args.chromium, headless=True,
                                 args=['--no-sandbox', '--disable-dev-shm-usage'])
    result['browser'] = browser.version
    for label, width, height in [('desktop', 1440, 1000), ('mobile', 390, 844)]:
        context = browser.new_context(viewport={'width': width, 'height': height},
                                      is_mobile=label == 'mobile', has_touch=label == 'mobile')
        page = context.new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        response = page.goto(base + '/', wait_until='networkidle', timeout=60000)
        assert response.status == 200
        inspect_player(page, 'raw-highlight.mp4', 80.042, 21, label + '-highlight')
        # Follow the actual Next/Vinext client link, so a retained old media
        # element or incorrect source after navigation cannot pass this check.
        page.get_by_role('link', name='Watch the full demo').click()
        page.wait_for_url(base + '/raw-workspace#see-it-in-action')
        inspect_player(page, 'raw-full-demo.mp4', 239.018, 63, label + '-full-demo')
        for name in ['raw-demo-poster.jpg', 'raw-full-demo.vtt', 'raw-highlight.vtt', 'raw-demo-transcript.txt']:
            status = page.evaluate('async path=>(await fetch(path,{signal:AbortSignal.timeout(20000)})).status', '/products/raw-workspace/' + name)
            assert status == 200, (name, status)
        context.close()
    if args.complete:
        context = browser.new_context(viewport={'width': 1440, 'height': 1000})
        pages = []
        for route in ['/', '/raw-workspace#see-it-in-action']:
            page = context.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.goto(base + route, wait_until='domcontentloaded')
            video = page.locator('video')
            video.scroll_into_view_if_needed()
            video.focus()
            video.press('Space')
            page.wait_for_function('document.querySelector("video").currentTime>0', timeout=45000)
            pages.append(page)
        started = time.monotonic()
        progress = []
        last = 0
        while True:
            pages[0].wait_for_timeout(1000)
            state = [p.locator('video').evaluate('v=>({src:v.currentSrc,time:v.currentTime,ended:v.ended,rate:v.playbackRate,error:v.error?.message||null})') for p in pages]
            assert all(v['error'] is None and v['rate'] == 1 for v in state), state
            elapsed = time.monotonic() - started
            assert elapsed < 330, 'Complete playback exceeded the bounded allowance.'
            if elapsed - last > 30:
                progress.append({'elapsed': round(elapsed, 2), 'players': state})
                print(json.dumps(progress[-1]), flush=True)
                last = elapsed
            if all(v['ended'] for v in state):
                break
        result['complete_normal_speed_playback'] = {'final': state, 'progress': progress}
        context.close()
    assert not errors, errors
    browser.close()
(out / 'verification.json').write_text(json.dumps(result, indent=2) + '\n')
print('Desktop/mobile media, captions, range seeking and client navigation passed.', flush=True)
