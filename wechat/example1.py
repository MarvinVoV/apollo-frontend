import itchat, time

from itchat.content import *


def lc():
    print('finish login')


def ec():
    print('exit')


@itchat.msg_register([TEXT, MAP, CARD, NOTE, SHARING])
def text_reply(msg):
    msg.user.send('%s: %s' % (msg.type, msg.text))
    if msg['Type'] == 'Map':
        return u'收到位置分享'
    elif msg['Type'] == 'Sharing':
        return u'收到分享' + msg['Text']
    elif msg['Type'] == 'Note':
        return u'收到：' + msg['Text']
    elif msg['Type'] == 'Card':
        return u'收到好友信息：' + msg['Text']['Alias']


@itchat.msg_register([PICTURE, RECORDING, ATTACHMENT, VIDEO])
def download_files(msg):
    msg.download(msg.fileName)
    typeSymbol = {
        PICTURE: 'img',
        VIDEO: 'vid', }.get(msg.type, 'fil')
    return '@%s@%s' % (typeSymbol, msg.fileName)


@itchat.msg_register(FRIENDS)
def add_friend(msg):
    msg.user.verify()
    msg.user.send('Nice to meet you!')


@itchat.msg_register(TEXT, isGroupChat=True)
def text_reply(msg):
    if msg.isAt:
        msg.user.send(u'@%s\u2005I received: %s' % (
            msg.actualNickName, msg.text))


itchat.auto_login(hotReload=True, enableCmdQR=2, loginCallback=lc, exitCallback=ec)

friends = itchat.get_friends(update=True)
for friend in friends:
    print(friend['UserName'], friend['City'], friend['NickName'], friend['Uin'])

me = itchat.search_friends(nickName='三毛')
itchat.send('Hello {0}'.format(me[0]['NickName'] or me[0]['DisplayName']), toUserName=me[0]['UserName'])
itchat.run(True)
