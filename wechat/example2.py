import itchat, time

from itchat.content import *

itchat.auto_login(hotReload=True, enableCmdQR=2)

friend = itchat.get_friends()[1]

members = [friend]

print(type(friend))
print(friend)

r = itchat.create_chatroom(memberList=members, topic='test chatroom')
if r:
    itchat.send('new chatroom created', r['ChatRoomName'])
itchat.add_member_into_chatroom(r['ChatRoomName'], members, useInvitation=True)


print(r)
