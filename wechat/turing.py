import requests, time, random, itchat
from itchat.content import *
from mpg123 import Mpg123
import wave
import os
import requests
from aip import AipSpeech

vip_friend = None


def get_turing_response(msg):
    url = 'http://www.tuling123.com/openapi/api'
    data = {
        'key': 'fd4b6e36c64341b9b165b66d3f889715',
        'info': msg
    }
    try:
        r = requests.post(url, data=data).json()
        return r.get('text')
    except RuntimeError as e:
        return 'Error'


@itchat.msg_register([PICTURE, RECORDING, ATTACHMENT, VIDEO])
def media_chat(msg):
    # if (msg.isAt):  # 判断是否有人@自己
    print(msg)
    if msg['Type'] == 'Recording':
        dir_path = os.path.dirname(os.path.realpath(__file__))
        mp3 = 'recording/' + msg['FileName']
        msg['Text'](mp3)
        # filename = msg.download(msg.fileName)
        wav = mp3_to_wav(dir_path + '/' + mp3)
        res = asr(wav)
        print('res={0}'.format(res))
        itchat.send('识别结果:' + res)
        itchat.send(get_turing_response(res))
        os.remove(mp3)
        os.remove(wav)


@itchat.msg_register(itchat.content.TEXT, isFriendChat=True, isGroupChat=True)
def turing_chat(msg):
    # if vip_friend == msg['FromUserName']:
    print(msg)
    print('ask:' + str(msg.text))
    time.sleep(random.random() * 2)
    resp = get_turing_response(msg.text)
    print("answer:" + resp)
    itchat.send(resp)
    return resp


def mp3_to_wav(file):
    mp3 = Mpg123(file)
    path = os.path.dirname(file)
    filename = os.path.splitext(os.path.basename(file))[0]
    wav_path = path + '/' + filename + '.wav'

    rate, channels, encoding = mp3.get_format()

    wav = wave.open(wav_path, 'wb')
    wav.setnchannels(channels)
    wav.setframerate(rate)
    wav.setsampwidth(mp3.get_width_by_encoding(encoding))

    for frame in mp3.iter_frames():
        wav.writeframes(frame)

    wav.close()
    return wav_path


def asr(wav):
    app_id = '10725588'
    api_key = 'jM8cA0sMT3L1HPKkO9GxNuGt'
    secret_key = '531256eed65d7bcfe44b3ef68abef7c2'
    aipSpeech = AipSpeech(app_id, api_key, secret_key)

    with open(wav, 'rb') as fp:
        voice_data = fp.read()

    resp = aipSpeech.asr(voice_data, 'wav', 8000, {
        'lan': 'zh',
    })
    return resp['result'][0]


if __name__ == '__main__':
    itchat.auto_login(hotReload=True, enableCmdQR=2)
    itchat.get_friends(update=True)
    vip_friend = itchat.search_friends(remarkName='毛小倩')[0]['UserName']
    itchat.run(True)
