import requests
from aip import AipSpeech

token_url = 'https://openapi.baidu.com/oauth/2.0/token'
app_id = '10725588'
api_key = 'jM8cA0sMT3L1HPKkO9GxNuGt'
secret_key = '531256eed65d7bcfe44b3ef68abef7c2'

# payload = {'grant_type': 'client_credentials', 'client_id': api_key,
#            'client_secret': secret_key}
# headers = {'Content-Type': 'application/json; charset=UTF-8'}
# r = requests.post(url=token_url, data=payload, headers=headers)
# print(r.json())
# print(r.status_code)
# # access_token = r.json()['access_token']

aipSpeech = AipSpeech(app_id, api_key, secret_key)

with open('/Users/marvin/temp/a.wav', 'rb') as fp:
    voice_data = fp.read()

resp = aipSpeech.asr(voice_data, 'wav', 8000, {
    'lan': 'zh',
})

print(resp)
print(resp['result'][0])
