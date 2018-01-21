from mpg123 import Mpg123
import wave

mp3 = Mpg123('/Users/marvin/temp/a.mp3')

# get informations about the file
rate, channels, encoding = mp3.get_format()

# prepare the wave header
wav = wave.open('/Users/marvin/temp/a.wav', 'wb')
wav.setnchannels(channels)
wav.setframerate(rate)
wav.setsampwidth(mp3.get_width_by_encoding(encoding))

# fill the wave file
for frame in mp3.iter_frames():
    wav.writeframes(frame)

wav.close()