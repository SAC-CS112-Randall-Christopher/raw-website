"""Copy reviewed DMPH films unchanged for R2; package smaller website assets."""
import argparse
import hashlib
import json
import re
import shutil
import subprocess
from pathlib import Path

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source',type=Path,required=True)
parser.add_argument('--source-commit',required=True)
args=parser.parse_args()
assert re.fullmatch(r'[0-9a-f]{40}',args.source_commit)
root=Path(__file__).resolve().parents[1]
source=args.source.resolve()
target=root/'public/products/raw-workspace'
target.mkdir(parents=True,exist_ok=True)
films=root/'media/raw-workspace'
films.mkdir(parents=True,exist_ok=True)

def digest(file):return hashlib.sha256(file.read_bytes()).hexdigest()
def probe(file):
    return json.loads(subprocess.check_output(['ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(file)]))
def audio_hash(file):
    return subprocess.check_output(['ffmpeg','-v','error','-i',str(file),'-map','0:a:0','-c','copy','-f','hash','-hash','sha256','-'],text=True).strip().split('=')[-1]
def seconds(stamp):
    h,m,s=map(float,stamp.split(':'));return h*3600+m*60+s

media={'source_repository':'SAC-CS112-Randall-Christopher/DMPH','source_commit':args.source_commit,
       'source_folder':'deliverables/'+source.name,'assets':{},'videos':{},'new_spend_usd':0}
for original,web in [('RAW-highlights','raw-highlight'),('RAW-business-demo','raw-full-demo')]:
    src=source/(original+'.mp4');dst=films/(web+'.mp4')
    reviewed=json.loads((source/(original+'-verification.json')).read_text())
    assert reviewed['sha256']==digest(src) and reviewed['complete_decode_passed']
    shutil.copyfile(src,dst)
    assert digest(dst)==reviewed['sha256'],'R2 publication must preserve the reviewed master byte for byte.'
    assert not (target/(web+'.mp4')).exists(),'Remove the legacy static MP4; films belong in media/raw-workspace.'
    info=probe(dst)
    video=next(s for s in info['streams'] if s['codec_type']=='video')
    audio=next(s for s in info['streams'] if s['codec_type']=='audio')
    duration=float(info['format']['duration'])
    assert video['codec_name']=='h264' and audio['codec_name']=='aac'
    assert [video['width'],video['height']]==[1920,1080] and video['pix_fmt']=='yuv420p'
    assert video['r_frame_rate']=='30/1' and audio['sample_rate']=='48000' and audio['channels']==2
    assert int(video['nb_frames'])==reviewed['frames'] and abs(duration-reviewed['duration'])<.05
    story_name='highlight-story.json' if web=='raw-highlight' else 'story.json'
    story=json.loads((source/story_name).read_text())
    minimum,maximum=story['duration_bounds']
    assert 30<=minimum<=maximum<=240 and minimum<=duration<=maximum
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(dst),'-f','null','-'],check=True)
    blob=dst.read_bytes();assert blob.index(b'moov')<blob.index(b'mdat')
    original_audio=audio_hash(src);assert audio_hash(dst)==original_audio
    captions=(source/(original+'.vtt')).read_text()
    stamps=re.findall(r'(\d\d:\d\d:\d\d\.\d{3}) --> (\d\d:\d\d:\d\d\.\d{3})',captions)
    assert captions.startswith('WEBVTT') and len(stamps)==reviewed['caption_cues']
    previous=0
    for start,end in stamps:
        a,b=seconds(start),seconds(end);assert previous<=a<b<=duration;previous=b
    shutil.copyfile(source/(original+'.vtt'),target/(web+'.vtt'))
    total=round(duration);minutes,secs=divmod(total,60)
    row={'duration':duration,'duration_iso':f'PT{minutes}M{secs}S',
         'duration_label':f'{minutes} minutes {secs} seconds','caption_cues':len(stamps),
         'frames':int(video['nb_frames']),'video':'H.264 1920x1080 30fps yuv420p',
         'audio':'AAC 48kHz stereo','fast_start':True,'complete_decode_passed':True,
         'source_file':src.name,'source_sha256':digest(src),'audio_packets_unchanged':True,
         'audio_sha256':original_audio}
    media['videos'][web+'.mp4']=row
    print(web+': '+str(duration)+' seconds, '+str(dst.stat().st_size)+' bytes',flush=True)
for src,dst in [('RAW-poster.jpg','raw-demo-poster.jpg'),('RAW-highlight-poster.jpg','raw-highlight-poster.jpg'),('narration-transcript.txt','raw-demo-transcript.txt'),('highlight-transcript.txt','raw-highlight-transcript.txt')]:
    shutil.copyfile(source/src,target/dst)
for name in ['raw-highlight.mp4','raw-full-demo.mp4','raw-demo-poster.jpg','raw-highlight-poster.jpg',
             'raw-highlight.vtt','raw-full-demo.vtt','raw-demo-transcript.txt','raw-highlight-transcript.txt']:
    file=(films if name.endswith('.mp4') else target)/name
    media['assets'][name]={'bytes':file.stat().st_size,'sha256':digest(file)}
(root/'docs/raw-demo-media.json').write_text(json.dumps(media,indent=2)+'\n')
print('Reviewed web package and exact media manifest written.',flush=True)
