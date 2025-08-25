const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: ''
  },

  onChooseAvatar(e){
    const { avatarUrl } = e.detail;
    this.setData({ avatarUrl });
  },

  getName(e){
    const { value } = e.detail;
    this.setData({ nickname: value });
  }
})
